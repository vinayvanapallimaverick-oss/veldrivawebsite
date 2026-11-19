import { Cloud, Database, BrainCircuit, Code2, Workflow, ShieldCheck, Compass, Blocks } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { values } from "@/data/home";

export const metadata = buildMetadata({
  title: "Careers at Veldriva",
  description:
    "Explore future opportunities with Veldriva, a digital transformation and technology consulting company serving the United States and Canada.",
  path: "/careers",
});

const areas = [
  { icon: Compass, name: "Technology Consulting" },
  { icon: Cloud, name: "Cloud & Infrastructure" },
  { icon: BrainCircuit, name: "AI & Automation" },
  { icon: Database, name: "Data Engineering & Analytics" },
  { icon: Code2, name: "Software Engineering" },
  { icon: Blocks, name: "Enterprise Applications" },
  { icon: ShieldCheck, name: "Cybersecurity" },
  { icon: Workflow, name: "DevOps & Platform Engineering" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the Future With Veldriva."
        description="We're building a consultancy where curious, collaborative people solve meaningful technology problems for organizations across the United States and Canada."
        crumbs={[{ name: "Careers", path: "/careers" }]}
      />

      <Section>
        <SectionHeading eyebrow="Culture & Values" title="How We Work Together" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="h-full rounded-[14px] border border-line bg-ice p-6">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-[15px] text-body">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Areas of Expertise" title="Where Our Teams Work" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <li key={a.name} className="flex items-center gap-3 rounded-[14px] border border-line bg-white p-5 shadow-card">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-soft text-brand"><a.icon aria-hidden className="size-5" /></span>
              <span className="font-heading text-[15px] font-semibold text-navy">{a.name}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Career Opportunities" title="Explore future opportunities with Veldriva." description="We don't have open positions listed right now. If your skills match one of the areas above, we'd still like to hear from you." />
        <div className="text-center">
          {site.careersUrl ? (
            <Button href={site.careersUrl} arrow>View Open Roles</Button>
          ) : (
            <Button href="/contact" arrow>Get in Touch</Button>
          )}
        </div>
      </Section>
      <CTASection
        title="Interested in Joining Us?"
        description="Send us a note about your background and interests, and we'll keep it in mind as opportunities arise."
        primary={{ label: "Contact Veldriva", href: "/contact" }}
        secondary={null}
      />
    </>
  );
}
