import { Reveal } from "@/components/ui/Reveal";
import { DrawLine } from "@/components/ui/Motion";
import { process as steps } from "@/data/home";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-0 lg:grid-cols-5 lg:gap-5">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s.n} className="relative pb-8 pl-14 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-14">
            {/* connector: vertical on mobile, horizontal on desktop */}
            {!last && (
              <>
                <DrawLine vertical delay={i * 0.25} className="absolute bottom-0 left-[17px] top-9 w-px bg-muted/60 lg:hidden" />
                <DrawLine delay={i * 0.25} className="absolute left-9 right-[-1.25rem] top-[17px] hidden h-px bg-muted/60 lg:block" />
              </>
            )}
            <span className="absolute left-0 top-0 z-10 flex size-9 items-center justify-center rounded-full border border-muted bg-white font-heading text-xs font-semibold text-brand">
              {s.n}
            </span>
            <Reveal delay={i * 0.07} className="h-full">
              <div className="h-full rounded-[14px] border border-line bg-white p-6 shadow-card">
                <s.icon aria-hidden className="mb-4 size-6 text-brand" strokeWidth={1.6} />
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] text-body">{s.text}</p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}

/** Compact service-specific delivery steps. */
export function DeliverySteps({ steps }: { steps: [string, string][] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map(([t, d], i) => (
        <li key={t} className="rounded-[14px] border border-line bg-white p-5 shadow-card">
          <span className="font-heading text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-1 text-lg font-semibold">{t}</h3>
          <p className="mt-1.5 text-sm text-body">{d}</p>
        </li>
      ))}
    </ol>
  );
}
