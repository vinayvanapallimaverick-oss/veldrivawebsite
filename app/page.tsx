import { buildMetadata } from "@/lib/seo";
import { Button, TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal, Intro } from "@/components/ui/Motion";
import { CapabilityTicker } from "@/components/sections/CapabilityTicker";
import { Section, SectionHeading } from "@/components/ui/Section";
import { HeroIllustration, ArchitectureVisual, WorkflowAutomationVisual } from "@/components/ui/Illustrations";
import { ServiceCard, IndustryCard, ArticleCard, IconBadge } from "@/components/sections/Cards";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TechnologyGrid } from "@/components/sections/TechnologyGrid";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { articles } from "@/data/articles";
import { whyUs, outcomes } from "@/data/home";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Digital Transformation & IT Consulting for the US and Canada",
  description:
    "Veldriva delivers digital transformation consulting, cloud, AI, data engineering and enterprise software solutions for businesses across the United States and Canada.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-ice">
        <div className="container-x grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
          <div>
            <Intro>
              <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">
                Digital Transformation. Cloud Innovation. Intelligent Solutions.
              </p>
            </Intro>
            <h1 className="text-[2.5rem] font-semibold leading-[1.08] sm:text-5xl lg:text-[3.75rem]">
              <WordReveal text="Transforming Businesses Through Technology." />
            </h1>
            <Intro delay={0.7}>
              <p className="mt-6 max-w-xl text-base text-body sm:text-lg">
                Veldriva helps organizations modernize their technology landscape, streamline operations, and build scalable digital experiences through cloud, data, AI, and enterprise engineering solutions.
              </p>
            </Intro>
            <Intro delay={0.85}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/services" arrow>Explore Our Services</Button>
                <Button href="/contact" variant="secondary">Talk to Our Experts</Button>
              </div>
            </Intro>
            <Intro delay={1}>
              <p className="mt-8 border-l-2 border-brand/40 pl-4 text-sm text-slate">
                Technology consulting and digital solutions for businesses across the United States and Canada.
              </p>
            </Intro>
          </div>
          <Intro delay={0.35}>
            <HeroIllustration />
          </Intro>
        </div>
      </section>
      <CapabilityTicker />

      {/* 2. INTRODUCTION */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ArchitectureVisual />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">Who We Are</p>
            <h2 className="text-[1.9rem] font-semibold sm:text-4xl lg:text-[2.6rem]">Your Partner in Digital Transformation</h2>
            <p className="mt-5 text-base text-body sm:text-lg">
              At Veldriva, we believe meaningful transformation starts with the right combination of strategy, technology, and execution.
            </p>
            <p className="mt-4 text-base text-body sm:text-lg">
              We help businesses navigate complex technology challenges, modernize legacy systems, and build adaptable digital foundations designed for future growth.
            </p>
            <div className="mt-8">
              <Button href="/about" arrow>Discover Veldriva</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. CORE SERVICES */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="What We Do"
          title="Technology Solutions That Move Business Forward"
          description="From strategy to implementation, Veldriva provides technology services designed to accelerate innovation, improve efficiency, and support sustainable growth."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={(i % 4) * 0.06} />
          ))}
        </div>
      </Section>

      {/* 4. WHY VELDRIVA */}
      <Section>
        <SectionHeading eyebrow="Why Choose Us" title="Built on Expertise. Driven by Outcomes." />
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.06}>
              <div className="group flex gap-5">
                <IconBadge icon={w.icon} />
                <div>
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-[15px] text-body">{w.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. APPROACH */}
      <Section tone="ice">
        <SectionHeading eyebrow="How We Work" title="From Strategy to Measurable Progress" />
        <ProcessTimeline />
      </Section>

      {/* 6. TECHNOLOGY */}
      <Section>
        <SectionHeading
          eyebrow="Our Technology Ecosystem"
          title="Modern Technologies. Practical Solutions."
        />
        <TechnologyGrid />
      </Section>

      {/* 7. INDUSTRIES */}
      <Section tone="soft">
        <SectionHeading eyebrow="Industries We Serve" title="Technology Solutions Across Industries" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.slug} industry={ind} delay={(i % 3) * 0.06} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate">
          Industry content describes common needs and illustrative opportunities, not completed client engagements.
        </p>
      </Section>

      {/* 8. OUTCOMES */}
      <Section>
        <SectionHeading title="Technology Designed Around Your Business Goals" />
        <div className="grid gap-5 md:grid-cols-2">
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={(i % 2) * 0.07} className="h-full">
              <div className="flex h-full gap-5 rounded-[14px] border border-line bg-ice p-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-brand">
                  <o.icon aria-hidden className="size-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{o.title}</h3>
                  <p className="mt-2 text-[15px] text-body">{o.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* AUTOMATION */}
      <Section tone="soft">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">Intelligent Automation</p>
            <h2 className="text-[1.9rem] font-semibold sm:text-4xl lg:text-[2.6rem]">Automation That Fits How Your Teams Work</h2>
            <p className="mt-5 text-base text-body sm:text-lg">
              We design automation around real processes, combining workflow orchestration, system integration and AI where it adds value, with people kept in the loop for the decisions that matter.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Intelligent document processing for intake, extraction and validation",
                "Approval and routing workflows connected to your CRM and ERP",
                "Event-driven integrations that keep systems in sync",
                "Monitoring and exception handling so issues surface early",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-body">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services/ai-automation" arrow>Explore AI & Automation</Button>
              <Button href="/solutions#business-process-automation" variant="secondary">Process Automation</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <WorkflowAutomationVisual />
          </Reveal>
        </div>
      </Section>

      {/* 9. INSIGHTS */}
      <Section tone="ice">
        <SectionHeading title="Ideas, Insights & Perspectives" />
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((a, i) => (
            <ArticleCard key={a.slug} article={a} delay={i * 0.07} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <TextLink href="/insights">View all insights</TextLink>
        </div>
      </Section>

      {/* 10. CTA */}
      <CTASection />
    </>
  );
}
