import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CookieSettingsButton } from "./CookieSettingsButton";
import { footerColumns, offices, site } from "@/lib/site";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer text-[#D9CBCD]">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo light />
            <p className="mt-4 font-heading text-lg font-semibold text-white">{site.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#D9CBCD]">
              Veldriva is a digital transformation and technology consulting company helping organizations modernize technology, unlock the value of data and build scalable digital solutions.
            </p>
            <p className="mt-5 text-sm text-[#D9CBCD]">
              <span className="font-semibold text-white">Serving businesses in:</span> United States &amp; Canada
            </p>
            {site.linkedin && (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veldriva on LinkedIn (opens in a new tab)"
                className="mt-5 inline-flex size-11 items-center justify-center rounded-xl border border-[#B79DA2]/40 text-white transition-colors hover:bg-white/10"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z"/></svg>
              </a>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-[#D9CBCD] transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white">Connect</h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={`mailto:${site.email}`} className="text-sm text-[#D9CBCD] transition-colors hover:text-white">{site.email}</a>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-[#D9CBCD] transition-colors hover:text-white">Start a Conversation</Link>
                </li>
                {site.calendarUrl && (
                  <li>
                    <a href={site.calendarUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#D9CBCD] hover:text-white">Book a Call</a>
                  </li>
                )}
                {site.linkedin && (
                  <li>
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#D9CBCD] hover:text-white">LinkedIn</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[#B79DA2]/25 pt-8 sm:grid-cols-2">
          {offices.map((o) => (
            <address key={o.name} className="not-italic">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white">{o.region}</h2>
              <p className="mt-3 text-sm font-medium text-white">{o.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#D9CBCD]">
                {o.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </p>
            </address>
          ))}
        </div>

        <div className="mt-8 border-t border-[#B79DA2]/25 pt-6">
          <p className="text-xs text-[#B79DA2]">
            Core services: {services.map((s) => s.name).join(" · ")}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#D9CBCD]">© {year} Veldriva. All rights reserved.</p>
            <CookieSettingsButton className="text-sm text-[#D9CBCD] underline-offset-4 transition-colors hover:text-white hover:underline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
