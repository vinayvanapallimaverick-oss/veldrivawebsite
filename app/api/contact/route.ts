import { NextResponse } from "next/server";
import { escapeHtml, stripControl, validateContact, type ContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

// Best-effort in-memory rate limit (per server instance). For stricter limits across
// serverless instances, back this with Upstash/Vercel KV or Vercel Firewall rate limiting.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile not enabled
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ ok: false, error: "Invalid request origin." }, { status: 403 });
  }

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Partial<ContactPayload>;
  try {
    if (Number(req.headers.get("content-length") ?? 0) > 20_000) throw new Error("too large");
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const clean: ContactPayload = {
    name: stripControl(String(body.name ?? "")),
    email: stripControl(String(body.email ?? "")),
    company: stripControl(String(body.company ?? "")),
    country: String(body.country ?? ""),
    service: String(body.service ?? ""),
    details: String(body.details ?? "").replace(/\r\n/g, "\n").trim(),
    consent: body.consent === true,
  };

  const errors = validateContact(clean);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "Please correct the highlighted fields.", fields: errors }, { status: 422 });
  }

  if (!(await verifyTurnstile(body.turnstileToken, ip))) {
    return NextResponse.json({ ok: false, error: "Spam check failed. Please try again." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!to || !from || !apiKey) {
    console.error("[contact] Email delivery is not configured (CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, RESEND_API_KEY).");
    return NextResponse.json(
      { ok: false, error: "Our contact form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", clean.name],
    ["Email", clean.email],
    ["Company", clean.company],
    ["Country", clean.country],
    ["Service", clean.service],
  ];
  const html = `<h2>New Veldriva website inquiry</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><h3>Project details</h3><p style="white-space:pre-wrap">${escapeHtml(clean.details)}</p><p style="color:#64748b;font-size:12px">Consent given: yes</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: clean.email,
        subject: `New inquiry from ${clean.name.slice(0, 60)} (${clean.company.slice(0, 60)})`.replace(/[\r\n]/g, " "),
        html,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "We couldn't send your inquiry. Please try again later." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ ok: false, error: "We couldn't send your inquiry. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
