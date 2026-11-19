"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Cookie } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { OPEN_CONSENT_EVENT, readConsent, saveConsent } from "@/lib/consent";

function Toggle({ id, label, text, checked, disabled, onChange }: { id: string; label: string; text: string; checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[12px] border border-line bg-ice p-4">
      <div>
        <label htmlFor={id} className="text-sm font-semibold text-navy">{label}</label>
        <p className="mt-1 text-[13px] leading-snug text-body">{text}</p>
      </div>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 size-5 shrink-0 accent-[#512C38] disabled:opacity-60"
      />
    </div>
  );
}

export function CookieConsent() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const show = useCallback(() => {
    const c = readConsent();
    setAnalytics(c?.analytics ?? false);
    setMarketing(c?.marketing ?? false);
    setCustomize(false);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!readConsent()) {
      const t = setTimeout(show, 900);
      return () => clearTimeout(t);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener(OPEN_CONSENT_EVENT, show);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, show);
  }, [show]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open, customize]);

  const choose = (a: boolean, m: boolean) => {
    saveConsent({ analytics: a, marketing: m });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="consent"
          role="dialog"
          aria-label="Cookie preferences"
          aria-describedby="consent-desc"
          ref={panelRef}
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Escape") choose(false, false);
          }}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-[14px] border border-line bg-white p-5 shadow-lift outline-none sm:bottom-5 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <Cookie aria-hidden className="mt-0.5 hidden size-6 shrink-0 text-brand sm:block" strokeWidth={1.6} />
            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-base font-semibold text-navy">We value your privacy</h2>
              <p id="consent-desc" className="mt-1.5 text-sm text-body">
                We use necessary cookies to run this site and, with your permission, optional cookies to understand how it is used and to improve it. You can accept all, reject non-essential cookies, or choose your settings. See our{" "}
                <Link href="/cookies" className="font-semibold text-brand underline">Cookie Policy</Link> and{" "}
                <Link href="/privacy" className="font-semibold text-brand underline">Privacy Policy</Link>.
              </p>

              {customize && (
                <div className="mt-4 space-y-3">
                  <Toggle id="c-necessary" label="Necessary" text="Required for the site to work, such as remembering this choice. Always on." checked disabled />
                  <Toggle id="c-analytics" label="Analytics" text="Helps us understand how visitors use the site so we can improve it." checked={analytics} onChange={setAnalytics} />
                  <Toggle id="c-marketing" label="Marketing" text="Used to measure and personalize outreach. Not currently in use on this site." checked={marketing} onChange={setMarketing} />
                </div>
              )}

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <button type="button" onClick={() => choose(true, true)} className="min-h-11 rounded-[10px] bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                  Accept all cookies
                </button>
                {customize ? (
                  <button type="button" onClick={() => choose(analytics, marketing)} className="min-h-11 rounded-[10px] border border-[#D8C6CA] bg-white px-5 text-sm font-medium text-brand transition-colors hover:border-brand hover:bg-ice">
                    Save preferences
                  </button>
                ) : (
                  <button type="button" onClick={() => setCustomize(true)} className="min-h-11 rounded-[10px] border border-[#D8C6CA] bg-white px-5 text-sm font-medium text-brand transition-colors hover:border-brand hover:bg-ice">
                    Customize
                  </button>
                )}
                <button type="button" onClick={() => choose(false, false)} className="min-h-11 rounded-[10px] px-4 text-sm font-medium text-brand underline-offset-4 transition-colors hover:underline">
                  Reject non-essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
