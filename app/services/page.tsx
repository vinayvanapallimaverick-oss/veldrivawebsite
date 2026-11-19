import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/sections/Cards";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { serviceGroups } from "@/data/services";

export const metadata = buildMetadata({
  title: "IT Consulting & Digital Transformation Services",
  description:
    "Explore Veldriva's services: digital transformation, cloud, AI and automation, data engineering, custom software, enterprise applications, cybersecurity and DevOps for US and Canadian businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology Services Built Around Business Outcomes"
        description="Veldriva provides business technology consulting and engineering services that help organizations in the United States and Canada modernize, connect and scale."
        crumbs={[{ name: "Services", path: "/services" }]}
      />
      {serviceGroups.map(({ group, items }, gi) => (
        <Section key={group} tone={gi % 2 === 0 ? "white" : "soft"}>
          <SectionHeading align="left" title={group} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 0.06} />
            ))}
          </div>
        </Section>
      ))}
      <Section tone="ice">
        <SectionHeading eyebrow="How We Work" title="A Consistent Approach Across Every Service" />
        <ProcessTimeline />
      </Section>
      <CTASection />
    </>
  );
}
