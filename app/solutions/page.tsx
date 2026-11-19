import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { solutions } from "@/data/solutions";
import { getService } from "@/data/services";

export const metadata = buildMetadata({
  title: "Enterprise Technology Solutions",
  description:
    "Cloud modernization, enterprise AI enablement, data platform modernization, application modernization, process automation and enterprise integration from Veldriva.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions for Your Most Important Technology Priorities"
        description="Focused offerings that combine our services into practical paths for modernization, intelligence and growth."
        crumbs={[{ name: "Solutions", path: "/solutions" }]}
      />

      <section className="bg-white pt-10">
        <div className="container-x">
          <nav aria-label="Solutions" className="flex flex-wrap gap-2">
            {solutions.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="rounded-full border border-line bg-ice px-4 py-2 text-sm font-medium text-navy hover:border-brand hover:text-brand">
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {solutions.map((s, i) => (
        <Section key={s.slug} id={s.slug} tone={i % 2 === 0 ? "white" : "soft"} className="scroll-mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">Solution {String(i + 1).padStart(2, "0")}</p>
              <h2 className="text-[1.9rem] font-semibold sm:text-4xl">{s.name}</h2>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate">The business problem</h3>
              <p className="mt-2 text-body sm:text-lg">{s.problem}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate">Our proposed solution</h3>
              <p className="mt-2 text-body sm:text-lg">{s.solution}</p>
              <div className="mt-8"><Button href="/contact" arrow>Discuss This Solution</Button></div>
            </Reveal>
            <Reveal delay={0.08} className="grid gap-4">
              <div className="rounded-[14px] border border-line bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold">Relevant technologies</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.technologies.map((t) => <li key={t} className="rounded-lg border border-line bg-ice px-3 py-1.5 text-sm font-medium text-navy">{t}</li>)}
                </ul>
              </div>
              <div className="rounded-[14px] border border-line bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold">Expected categories of value</h3>
                <ul className="mt-3 space-y-2 text-[15px] text-body">
                  {s.value.map((v) => (
                    <li key={v} className="flex gap-2.5"><span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />{v}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[14px] border border-line bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold">Related services</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.services.map((slug) => {
                    const sv = getService(slug);
                    return sv ? (
                      <li key={slug}><Link href={`/services/${slug}`} className="inline-block rounded-lg bg-soft px-3 py-1.5 text-sm font-semibold text-brand hover:bg-brand hover:text-white">{sv.name}</Link></li>
                    ) : null;
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}
      <CTASection />
    </>
  );
}
