import Link from "next/link";
import { Info } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { getService } from "@/data/services";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Digital transformation and technology consulting for financial services, healthcare, retail, manufacturing, professional services and the public sector in the US and Canada.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology Solutions Across Industries"
        description="Every industry has its own constraints, regulations and opportunities. Here is how Veldriva approaches common digital transformation needs."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />
      <section className="bg-white pt-10">
        <div className="container-x">
          <p className="flex items-start gap-3 rounded-xl border border-line bg-ice p-4 text-sm text-body">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
            <span>
              Use cases on this page are <strong className="text-navy">illustrative examples</strong> of how technology can address common needs. They are not descriptions of completed client projects.
            </span>
          </p>
        </div>
      </section>

      {industries.map((ind, i) => (
        <Section key={ind.slug} id={ind.slug} tone={i % 2 === 0 ? "white" : "soft"} className="scroll-mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <span className="mb-5 flex size-14 items-center justify-center rounded-[14px] bg-white text-brand shadow-card">
                <ind.icon aria-hidden className="size-7" />
              </span>
              <h2 className="text-[1.9rem] font-semibold sm:text-4xl">{ind.name}</h2>
              <p className="mt-4 text-body sm:text-lg">{ind.summary}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-navy">Relevant Veldriva services</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ind.services.map((slug) => {
                    const s = getService(slug);
                    return s ? (
                      <li key={slug}>
                        <Link href={`/services/${slug}`} className="inline-block rounded-lg border border-line bg-white px-3 py-1.5 text-sm font-medium text-navy hover:border-brand hover:text-brand">
                          {s.name}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
              <div className="mt-8">
                <Button href={`/contact`} arrow>Discuss {ind.name}</Button>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="grid gap-4">
              <Panel title="Typical business challenges" items={ind.challenges} />
              <Panel title="Digital transformation opportunities" items={ind.opportunities} />
              <Panel title="Illustrative use cases" items={ind.useCases} />
            </Reveal>
          </div>
        </Section>
      ))}

      <Section tone="ice">
        <SectionHeading title="Don't See Your Industry?" description="Many of the challenges above apply broadly. Tell us about your sector and we'll explore how we can help." />
        <div className="text-center"><Button href="/contact" arrow>Start a Conversation</Button></div>
      </Section>
      <CTASection secondary={null} />
    </>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[14px] border border-line bg-white p-6 shadow-card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-[15px] text-body">
        {items.map((t) => (
          <li key={t} className="flex gap-2.5">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
