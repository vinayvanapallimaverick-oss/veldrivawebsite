import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceGroups } from "@/data/services";
import { Pop } from "@/components/ui/Motion";

export function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[min(1080px,calc(100vw-3rem))] -translate-x-1/2 pt-3">
      <Pop id="services-menu">
      <div className="rounded-[14px] border border-line bg-white p-6 shadow-lift">
        <div className="grid grid-cols-3 gap-8">
          {serviceGroups.map(({ group, items }) => (
            <div key={group}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate">{group}</p>
              <ul className="space-y-1">
                {items.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      onClick={onNavigate}
                      className="group flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-soft"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-soft text-brand group-hover:bg-white">
                        <s.icon aria-hidden className="size-[18px]" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-navy">{s.name}</span>
                        <span className="mt-0.5 line-clamp-2 block text-[13px] leading-snug text-body">{s.short}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-xl bg-ice px-4 py-3">
          <p className="text-sm text-body">Not sure where to start? We can help you scope the right engagement.</p>
          <Link href="/services" onClick={onNavigate} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
            View all services <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
      </Pop>
    </div>
  );
}
