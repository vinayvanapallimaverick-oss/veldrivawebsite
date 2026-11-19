export type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  /** ISO timestamp of when the choice was made. */
  updatedAt: string;
};

export const CONSENT_COOKIE = "veldriva_consent";
export const CONSENT_EVENT = "veldriva:consent-changed";
export const OPEN_CONSENT_EVENT = "veldriva:open-consent";
const MAX_AGE_DAYS = 180;

export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  try {
    const v = JSON.parse(decodeURIComponent(match.split("=").slice(1).join("=")));
    if (typeof v?.analytics !== "boolean" || typeof v?.marketing !== "boolean") return null;
    return { necessary: true, analytics: v.analytics, marketing: v.marketing, updatedAt: String(v.updatedAt ?? "") };
  } catch {
    return null;
  }
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }): Consent {
  const consent: Consent = { necessary: true, ...choice, updatedAt: new Date().toISOString() };
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(consent))}; Max-Age=${MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
  return consent;
}

/**
 * Use before loading any analytics/marketing script:
 *   const c = readConsent(); if (c?.analytics) loadAnalytics();
 * and re-check when `CONSENT_EVENT` fires.
 */
