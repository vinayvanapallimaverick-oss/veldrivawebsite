"use client";

import Link from "next/link";
import { useState } from "react";
import { Pop } from "@/components/ui/Motion";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/site";
import { services } from "@/data/services";

export function MobileNavigation({ isActive, onNavigate }: { isActive: (href: string) => boolean; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <Pop id="mobile-nav" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
      <nav aria-label="Mobile" className="container-x py-4">
        <ul>
          {mainNav.map((l) => (
            <li key={l.href} className="border-b border-line/70 last:border-0">
              {l.href === "/services" ? (
                <>
                  <div className="flex items-center">
                    <Link
                      href={l.href}
                      onClick={onNavigate}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`flex-1 py-3.5 text-base font-medium ${isActive(l.href) ? "text-brand" : "text-navy"}`}
                    >
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls="mobile-services"
                      aria-label="Toggle services list"
                      onClick={() => setOpen((v) => !v)}
                      className="flex size-11 items-center justify-center text-navy"
                    >
                      <ChevronDown aria-hidden className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {open && (
                    <ul id="mobile-services" className="mb-3 space-y-0.5 rounded-xl bg-ice p-2">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} onClick={onNavigate} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-soft">
                            <s.icon aria-hidden className="size-4 text-brand" />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={l.href}
                  onClick={onNavigate}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`block py-3.5 text-base font-medium ${isActive(l.href) ? "text-brand" : "text-navy"}`}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="mt-4 flex min-h-12 items-center justify-center rounded-[10px] bg-brand px-6 text-[15px] font-medium text-white hover:bg-brand-dark"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </Pop>
  );
}
