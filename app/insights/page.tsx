import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { InsightsHub } from "@/components/sections/InsightsHub";
import { CTASection } from "@/components/sections/CTASection";
import { articles, formatDate } from "@/data/articles";

export const metadata = buildMetadata({
  title: "Technology Insights & Perspectives",
  description:
    "Perspectives from Veldriva on digital transformation, cloud modernization, responsible AI, data engineering and enterprise technology.",
  path: "/insights",
});

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const date = formatDate(featured.publishedAt);
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas, Insights & Perspectives"
        description="Practical thinking on digital transformation, cloud, AI, data and enterprise technology for business and technology leaders."
        crumbs={[{ name: "Insights", path: "/insights" }]}
      />
      <Section>
        <article className="mb-14 rounded-[18px] border border-line bg-ice p-7 shadow-card sm:p-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-eyebrow">Featured</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="rounded-md bg-soft px-2.5 py-1 font-medium text-brand">{featured.category}</span>
            {date && <time dateTime={featured.publishedAt} className="text-slate">{date}</time>}
            <span className="text-slate">{featured.readingMinutes} min read</span>
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
            <Link href={`/insights/${featured.slug}`} className="hover:text-brand">{featured.title}</Link>
          </h2>
          <p className="mt-4 max-w-3xl text-body sm:text-lg">{featured.excerpt}</p>
          <Link href={`/insights/${featured.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark">
            Read Article <ArrowRight aria-hidden className="size-4" />
          </Link>
        </article>
        <InsightsHub articles={articles} />
      </Section>
      <CTASection />
    </>
  );
}
