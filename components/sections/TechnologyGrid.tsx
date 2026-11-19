import { Reveal } from "@/components/ui/Reveal";
import { techCategories } from "@/data/home";

export function TechnologyGrid() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} className="h-full">
            <div className="h-full rounded-[14px] border border-line bg-white p-6 shadow-card">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.items.map((t) => (
                  <li key={t} className="rounded-lg border border-line bg-ice px-3 py-1.5 text-sm font-medium text-navy">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate">
        Technologies listed represent areas of service focus. Product names are trademarks of their respective owners; their use does not imply partnership, endorsement or certification.
      </p>
    </>
  );
}
