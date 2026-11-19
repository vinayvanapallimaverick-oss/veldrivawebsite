import { AlertTriangle } from "lucide-react";
import { PageHero } from "./PageHero";
import { Section } from "@/components/ui/Section";

export type LegalSection = { h: string; p: (string | string[])[] };

export function LegalPage({
  title,
  path,
  intro,
  sections,
}: {
  title: string;
  path: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero title={title} description={intro} crumbs={[{ name: title, path }]} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 flex gap-3 rounded-[12px] border border-line bg-ice p-4 text-sm text-navy">
            <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0" />
            <span>
              <strong>Draft for business and legal review.</strong> This content is a starting template and does not constitute legal advice or a statement of legal compliance. Veldriva should have it reviewed by qualified counsel, completed with company-specific details, and updated before reliance. Remove this notice once approved.
            </span>
          </p>
          {sections.map((s) => (
            <section key={s.h} className="mb-9">
              <h2 className="mb-3 text-2xl font-semibold">{s.h}</h2>
              {s.p.map((x, i) =>
                Array.isArray(x) ? (
                  <ul key={i} className="my-3 list-disc space-y-1.5 pl-6 marker:text-brand">
                    {x.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                ) : (
                  <p key={i} className="my-3">{x}</p>
                ),
              )}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
