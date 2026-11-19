import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { abs, site } from "@/lib/site";
import { services, getService } from "@/data/services";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { DeliverySteps } from "@/components/sections/ProcessTimeline";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/Cards";
import { ServiceVisual } from "@/components/ui/Illustrations";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.name,
    description: `${s.overview.split(". ")[0]}. ${s.heroSub}`.slice(0, 200),
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.overview,
          url: abs(`/services/${s.slug}`),
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
          ],
        }}
      />

      {/* 1. Hero */}
      <PageHero
        icon={s.icon}
        visual={<ServiceVisual slug={s.slug} />}
        eyebrow={s.name}
        title={s.heroTitle}
        description={s.heroSub}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: s.name, path: `/services/${s.slug}` },
        ]}
      >
        <Button href={`/contact?service=${encodeURIComponent(s.name)}`} arrow>Talk to an Expert</Button>
        <Button href="#capabilities" variant="secondary">View Capabilities</Button>
      </PageHero>

      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-body sm:text-xl">{s.overview}</p>
        </Reveal>
      </Section>

      {/* 2. Challenges */}
      <Section tone="soft">
        <SectionHeading eyebrow="Business Challenges" title="Challenges We Help Address" />
        <div className="grid gap-5 sm:grid-cols-2">
          {s.challenges.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06} className="h-full">
              <div className="h-full rounded-[14px] border border-line bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] text-body">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Approach */}
      <Section>
        <SectionHeading eyebrow="Our Approach" title="How Veldriva Approaches It" />
        <ol className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {s.approach.map(([t, d], i) => (
            <li key={t}>
              <Reveal delay={(i % 2) * 0.06} className="h-full">
                <div className="flex h-full gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-muted bg-white font-heading text-sm font-semibold text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{t}</h3>
                    <p className="mt-1.5 text-[15px] text-body">{d}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. Capabilities */}
      <Section tone="ice" id="capabilities">
        <SectionHeading eyebrow="Core Capabilities" title="What We Deliver" />
        <ul className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.capabilities.map((c) => (
            <li key={c} className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 shadow-card">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-soft text-brand">
                <Check aria-hidden className="size-3.5" />
              </span>
              <span className="text-[15px] font-semibold text-navy">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. Stack */}
      <Section>
        <SectionHeading eyebrow="Technology Stack" title="Technologies We Work With" />
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
          {s.stack.map((t) => (
            <li key={t} className="rounded-lg border border-line bg-ice px-4 py-2 text-sm font-medium text-navy">{t}</li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-slate">
          Technology choices are tailored to each engagement. Product names are trademarks of their respective owners.
        </p>
      </Section>

      {/* 6. Benefits */}
      <Section tone="soft">
        <SectionHeading eyebrow="Business Benefits" title="What You Can Expect" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.benefits.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-[14px] border border-line bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] text-body">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Delivery */}
      <Section>
        <SectionHeading eyebrow="Delivery Methodology" title="How an Engagement Unfolds" />
        <DeliverySteps steps={s.delivery} />
      </Section>

      {/* 8. FAQ */}
      <Section tone="ice">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <FAQ items={s.faqs} />
      </Section>

      <Section>
        <SectionHeading align="left" title="Related Services" />
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((o, i) => <ServiceCard key={o.slug} service={o} delay={i * 0.06} />)}
        </div>
      </Section>

      {/* 9. CTA */}
      <CTASection
        title={`Discuss ${s.name}`}
        description="Tell us about your goals and challenges. We'll help you define a practical next step."
        primary={{ label: "Contact Veldriva", href: `/contact?service=${encodeURIComponent(s.name)}` }}
        secondary={{ label: "All Services", href: "/services" }}
      />
    </>
  );
}
