import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { abs, site } from "@/lib/site";
import { articles, getArticle, formatDate } from "@/data/articles";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { ArticleCard } from "@/components/sections/Cards";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({
    title: a.title,
    description: a.excerpt,
    path: `/insights/${a.slug}`,
    type: "article",
    publishedTime: a.publishedAt,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const date = formatDate(a.publishedAt);
  const related = a.related.map((r) => getArticle(r)).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          articleSection: a.category,
          mainEntityOfPage: abs(`/insights/${a.slug}`),
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          ...(a.publishedAt ? { datePublished: a.publishedAt } : {}),
        }}
      />
      <article>
        <header className="border-b border-line bg-ice pb-12 pt-10 md:pb-16 md:pt-14">
          <div className="container-x">
            <Breadcrumbs
              items={[
                { name: "Insights", path: "/insights" },
                { name: a.title, path: `/insights/${a.slug}` },
              ]}
            />
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="rounded-md bg-soft px-2.5 py-1 font-medium text-brand">{a.category}</span>
                {date && <time dateTime={a.publishedAt} className="text-slate">{date}</time>}
                <span className="text-slate">{a.readingMinutes} min read</span>
              </div>
              <h1 className="mt-4 text-[2.1rem] font-semibold sm:text-5xl">{a.title}</h1>
              <p className="mt-5 text-lg text-body">{a.excerpt}</p>
              <p className="mt-4 text-sm text-slate">By the Veldriva team</p>
            </div>
          </div>
        </header>

        <div className="container-x py-12 md:py-16">
          <div className="mx-auto max-w-[44rem] text-[1.05rem] leading-[1.8] text-body">
            {a.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mb-4 mt-10 text-2xl font-semibold sm:text-[1.7rem]">{b.text}</h2>;
              if (b.type === "ul")
                return (
                  <ul key={i} className="my-5 list-disc space-y-2 pl-6 marker:text-brand">
                    {b.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                );
              return <p key={i} className="my-5">{b.text}</p>;
            })}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <Section tone="ice">
          <h2 className="mb-8 text-3xl font-semibold">Related Articles</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((r) => <ArticleCard key={r.slug} article={r} />)}
          </div>
        </Section>
      )}
      <CTASection
        title="Want to Talk Through Your Own Roadmap?"
        description="Our team can help you apply these ideas to your organization's goals and constraints."
        primary={{ label: "Contact Veldriva", href: "/contact" }}
        secondary={{ label: "All Insights", href: "/insights" }}
      />
    </>
  );
}
