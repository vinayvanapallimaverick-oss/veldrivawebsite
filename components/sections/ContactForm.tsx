"use client";

import Script from "next/script";
import { useRef, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { countries, serviceOptions, validateContact, type ContactPayload } from "@/lib/contact";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-navy placeholder:text-slate/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-red-600";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: Partial<ContactPayload> = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      country: String(fd.get("country") ?? ""),
      service: String(fd.get("service") ?? ""),
      details: String(fd.get("details") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
      turnstileToken: String(fd.get("cf-turnstile-response") ?? "") || undefined,
    };

    const v = validateContact(payload);
    setErrors(v);
    if (Object.keys(v).length) {
      setStatus("error");
      setMessage("Please correct the highlighted fields.");
      const first = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; error?: string; fields?: Record<string, string> };
      if (data.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setErrors(data.fields ?? {});
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-[14px] border border-line bg-white p-8 text-center shadow-card">
        <CheckCircle2 aria-hidden className="mx-auto size-12 text-brand" />
        <h2 className="mt-4 text-2xl font-semibold">Thank you. Your inquiry has been sent.</h2>
        <p className="mt-2 text-body">A member of the Veldriva team will review your message and respond to the email address you provided.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-brand hover:text-brand-dark">
          Send another inquiry
        </button>
      </div>
    );
  }

  const err = (k: string) => (errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${k}-err` } : {});
  const ErrMsg = ({ k }: { k: string }) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm font-medium text-red-700">{errors[k]}</p> : null;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-[14px] border border-line bg-white p-6 shadow-card sm:p-8">
      {turnstileSiteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">Full Name</label>
          <input id="name" name="name" autoComplete="name" required className={field} {...err("name")} />
          <ErrMsg k="name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">Business Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field} {...err("email")} />
          <ErrMsg k="email" />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-navy">Company Name</label>
          <input id="company" name="company" autoComplete="organization" required className={field} {...err("company")} />
          <ErrMsg k="company" />
        </div>
        <div>
          <label htmlFor="country" className="text-sm font-semibold text-navy">Country</label>
          <select id="country" name="country" defaultValue="" required className={field} {...err("country")}>
            <option value="" disabled>Select a country</option>
            {countries.map((c) => <option key={c}>{c}</option>)}
          </select>
          <ErrMsg k="country" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-semibold text-navy">Service Interested In</label>
          <select id="service" name="service" defaultValue={defaultService} required className={field} {...err("service")}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
          <ErrMsg k="service" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className="text-sm font-semibold text-navy">Project Details</label>
          <textarea id="details" name="details" rows={6} required maxLength={4000} className={field} {...err("details")} />
          <ErrMsg k="details" />
        </div>

        {/* Honeypot: hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input id="consent" name="consent" type="checkbox" className="mt-1 size-5 shrink-0 accent-[#512C38]" {...err("consent")} />
            <label htmlFor="consent" className="text-sm text-body">
              I consent to Veldriva processing the information I provide to respond to my inquiry, as described in the{" "}
              <a href="/privacy" className="font-semibold text-brand underline">Privacy Policy</a>.
            </label>
          </div>
          <ErrMsg k="consent" />
        </div>

        {turnstileSiteKey && (
          <div className="sm:col-span-2">
            <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
          </div>
        )}
      </div>

      <div aria-live="polite" className="mt-5">
        {status === "error" && message && (
          <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-800">
            <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" /> {message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-brand px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" && <Loader2 aria-hidden className="size-4 animate-spin" />}
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>
      <p className="mt-4 text-xs text-slate">
        We use your information only to respond to your inquiry. Please don&apos;t include sensitive personal or confidential data in this form.
      </p>
    </form>
  );
}
