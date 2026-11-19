import { Globe2, Compass, Telescope, Handshake, Layers, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { values } from "@/data/home";

export const metadata = buildMetadata({
  title: "About Us | Technology Consulting Company",
  description:
    "Veldriva is a digital transformation and technology consulting company combining technology expertise with business perspective for organizations in the United States and Canada.",
  path: "/about",
});

const differentiators = [
  { icon: Compass, title: "Outcome-led", text: "Every recommendation is tied to a business objective and success criteria agreed up front." },
  { icon: Layers, title: "End-to-end capability", text: "Strategy, architecture, engineering and operations under one collaborative team." },
  { icon: ShieldCheck, title: "Secure and practical", text: "Security, maintainability and cost are design inputs, not afterthoughts." },
  { icon: Handshake, title: "Transparent collaboration", text: "Regular demos, open communication and shared ownership of results." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Technology Expertise. Business Perspective."
        description="Veldriva helps organizations modernize technology, unlock the value of data, accelerate cloud adoption, and build scalable digital solutions that support long-term growth."
        crumbs={[{ name: "About Us", path: "/about" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-base text-body sm:text-lg">
          <Reveal>
            <h2 className="mb-5 text-[1.9rem] font-semibold sm:text-4xl">Who We Are</h2>
            <p>
              Veldriva is a digital transformation and technology consulting company serving businesses in the United States and Canada. We bring together strategy, cloud and platform engineering, data and AI, and enterprise software expertise to help organizations solve complex business challenges.
            </p>
            <p className="mt-5">
              We believe meaningful transformation starts with the right combination of strategy, technology, and execution. Our role is to help leaders make clear technology decisions and then build and run the solutions that follow.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[14px] border border-line bg-white p-8 shadow-card">
              <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-soft text-brand"><Compass aria-hidden className="size-6" /></span>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-body">
                To help organizations solve complex business challenges through practical technology innovation, disciplined engineering, and collaborative delivery.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-[14px] border border-line bg-white p-8 shadow-card">
              <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-soft text-brand"><Telescope aria-hidden className="size-6" /></span>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-3 text-body">
                To enable businesses to build adaptable, intelligent, and future-ready digital foundations.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Core Values" title="What Guides Our Work" />
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

      <Section tone="ice">
        <SectionHeading eyebrow="Our Approach" title="A Disciplined Path From Strategy to Results" />
        <ProcessTimeline />
      </Section>

      <Section>
        <SectionHeading eyebrow="What Makes Veldriva Different" title="Business Perspective, Engineering Depth" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-[14px] border border-line bg-white p-6 shadow-card">
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-soft text-brand"><d.icon aria-hidden className="size-5" /></span>
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-[15px] text-body">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white text-brand shadow-card"><Globe2 aria-hidden className="size-6" /></span>
            <h2 className="text-[1.9rem] font-semibold sm:text-4xl">Serving the United States and Canada</h2>
            <p className="mt-4 text-body sm:text-lg">
              We work with organizations on both sides of the border and understand that requirements for privacy, procurement and data residency can differ between the United States and Canada. We take those considerations into account when advising on architecture and delivery.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.9rem] font-semibold sm:text-4xl">Our Partnership Philosophy</h2>
            <p className="mt-4 text-body sm:text-lg">
              We aim to be a long-term partner, not just a vendor. That means giving candid advice, sharing knowledge with your teams, and staying accountable for outcomes after launch. Our best work happens when business and technology leaders work as one team.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Let's Start a Conversation"
        description="Tell us about your goals and challenges. We'd welcome the opportunity to explore how Veldriva can help."
        primary={{ label: "Contact Veldriva", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
