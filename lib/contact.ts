import { services } from "@/data/services";

export const countries = ["United States", "Canada", "Other"] as const;
export const serviceOptions = [...services.map((s) => s.name), "Not sure yet"] as const;

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  country: string;
  service: string;
  details: string;
  consent: boolean;
  website?: string; // honeypot
  turnstileToken?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FREE_MAIL = /@(gmail|yahoo|hotmail|outlook|aol|icloud|proton|protonmail)\./i;

/** Shared by client and server. Returns field errors (empty object = valid). */
export function validateContact(p: Partial<ContactPayload>): Record<string, string> {
  const e: Record<string, string> = {};
  const name = (p.name ?? "").trim();
  const email = (p.email ?? "").trim();
  const company = (p.company ?? "").trim();
  const details = (p.details ?? "").trim();
  if (name.length < 2 || name.length > 100) e.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email) || email.length > 200) e.email = "Please enter a valid business email address.";
  else if (FREE_MAIL.test(email)) e.email = "Please use your business email address.";
  if (company.length < 2 || company.length > 150) e.company = "Please enter your company name.";
  if (!countries.includes(p.country as (typeof countries)[number])) e.country = "Please select a country.";
  if (!(serviceOptions as readonly string[]).includes(p.service ?? "")) e.service = "Please select a service.";
  if (details.length < 20) e.details = "Please share a few details (at least 20 characters).";
  else if (details.length > 4000) e.details = "Please keep details under 4,000 characters.";
  if (!p.consent) e.consent = "Please confirm your consent so we can respond.";
  return e;
}

export const stripControl = (s: string) => s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
export const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
