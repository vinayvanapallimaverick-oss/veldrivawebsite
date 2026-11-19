import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Let's Build What's Next.",
  description = "Whether you're modernizing enterprise systems, exploring AI opportunities, or building a new digital platform, Veldriva can help you define the next step.",
  primary = { label: "Start a Conversation", href: "/contact" },
  secondary = { label: "Explore Services", href: "/services" },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="bg-brand py-16 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[1.9rem] font-semibold text-white sm:text-4xl lg:text-[2.6rem]">{title}</h2>
          <p className="mt-4 text-base text-[#F0E7E8] sm:text-lg">{description}</p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={primary.href} variant="light" arrow>{primary.label}</Button>
            {secondary && <Button href={secondary.href} variant="outlineLight">{secondary.label}</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
