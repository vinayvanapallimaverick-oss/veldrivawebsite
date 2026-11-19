import { services } from "@/data/services";

/** Slow, pause-on-hover ticker of service areas. Static for reduced-motion users. */
export function CapabilityTicker() {
  const items = [...services.map((s) => s.name), "Cloud Modernization", "Enterprise AI Enablement", "Data Platform Modernization", "Business Process Automation"];
  return (
    <div className="ticker border-y border-line bg-white py-4" aria-label="Service areas">
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center gap-10">
            {items.map((t) => (
              <li key={t} className="flex items-center gap-10 font-heading text-sm font-medium text-brand">
                {t}
                <span aria-hidden className="size-1 rounded-full bg-muted" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
