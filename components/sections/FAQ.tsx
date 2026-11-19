import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      <JsonLd data={schema} />
      {items.map((i) => (
        <details key={i.q} className="group rounded-[14px] border border-line bg-white shadow-card open:border-muted">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[14px] px-5 py-4 font-heading text-base font-semibold text-navy [&::-webkit-details-marker]:hidden">
            {i.q}
            <ChevronDown aria-hidden className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 text-[15px] text-body">{i.a}</p>
        </details>
      ))}
    </div>
  );
}
