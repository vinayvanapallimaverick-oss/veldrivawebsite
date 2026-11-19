import { CalendarDays, ShieldCheck, Globe2, MapPin, Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site, offices } from "@/lib/site";
import { serviceOptions } from "@/lib/contact";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Contact Us | Technology Consulting",
  description:
    "Tell Veldriva about your business goals, technical challenges or upcoming projects. We serve organizations across the United States and Canada.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const defaultService = (serviceOptions as readonly string[]).includes(service ?? "") ? (service as string) : "";
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Next Technology Initiative."
        description="Tell us about your business goals, technical challenges, or upcoming projects. We'd welcome the opportunity to explore how Veldriva can help."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <ContactForm defaultService={defaultService} />
          <aside className="space-y-5">
            <div className="rounded-[14px] border border-line bg-ice p-6">
              <Globe2 aria-hidden className="size-6 text-brand" />
              <h2 className="mt-3 text-lg font-semibold">Serving the US and Canada</h2>
              <p className="mt-2 text-[15px] text-body">We work with organizations across both countries. Choose your country in the form and we&apos;ll route your inquiry appropriately.</p>
            </div>
            <div className="rounded-[14px] border border-line bg-ice p-6">
              <Mail aria-hidden className="size-6 text-brand" />
              <h2 className="mt-3 text-lg font-semibold">Email us</h2>
              <p className="mt-2 text-[15px] text-body">
                <a href={`mailto:${site.email}`} className="font-semibold text-brand underline">{site.email}</a>
              </p>
            </div>
            {offices.map((o) => (
              <address key={o.name} className="rounded-[14px] border border-line bg-ice p-6 not-italic">
                <MapPin aria-hidden className="size-6 text-brand" />
                <h2 className="mt-3 text-lg font-semibold">{o.region}</h2>
                <p className="mt-2 text-[15px] font-medium text-navy">{o.name}</p>
                <p className="text-[15px] text-body">
                  {o.lines.map((l) => <span key={l} className="block">{l}</span>)}
                </p>
              </address>
            ))}
            <div className="rounded-[14px] border border-line bg-ice p-6">
              <ShieldCheck aria-hidden className="size-6 text-brand" />
              <h2 className="mt-3 text-lg font-semibold">Your privacy</h2>
              <p className="mt-2 text-[15px] text-body">We use your details only to respond to your inquiry. See our <a href="/privacy" className="font-semibold text-brand underline">Privacy Policy</a>.</p>
            </div>
            {site.calendarUrl && (
              <div className="rounded-[14px] border border-line bg-ice p-6">
                <CalendarDays aria-hidden className="size-6 text-brand" />
                <h2 className="mt-3 text-lg font-semibold">Prefer to book a call?</h2>
                <p className="mb-4 mt-2 text-[15px] text-body">Choose a time that works for you.</p>
                <Button href={site.calendarUrl} variant="secondary">Book a Call</Button>
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
