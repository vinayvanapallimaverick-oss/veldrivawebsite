import Link from "next/link";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate, type Article } from "@/data/articles";
import type { Service } from "@/data/services";
import type { Industry } from "@/data/industries";
import type { LucideIcon } from "lucide-react";
import { ArticleVisual } from "@/components/ui/Illustrations";
import { articles as allArticles } from "@/data/articles";

const cardBase =
  "group flex h-full flex-col rounded-[14px] border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-muted hover:shadow-lift";

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="mb-5 flex size-11 items-center justify-center rounded-[10px] border border-line bg-ice text-brand transition-colors group-hover:border-muted">
      <Icon aria-hidden className="size-[22px]" strokeWidth={1.6} />
    </span>
  );
}

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className={cardBase}>
        <IconBadge icon={service.icon} />
        <h3 className="text-[1.15rem] font-semibold">{service.name}</h3>
        <p className="mt-2 mb-5 line-clamp-3 flex-1 text-[15px] text-body">{service.short}</p>
        <TextLink href={`/services/${service.slug}`}>
          Learn More<span className="sr-only"> about {service.name}</span>
        </TextLink>
      </article>
    </Reveal>
  );
}

export function IndustryCard({ industry, delay = 0 }: { industry: Industry; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className={cardBase}>
        <IconBadge icon={industry.icon} />
        <h3 className="text-[1.15rem] font-semibold">{industry.name}</h3>
        <p className="mt-2 text-[15px] text-body">{industry.summary}</p>
        <ul className="mt-4 mb-5 flex-1 space-y-1.5 text-sm text-body">
          {industry.challenges.slice(0, 2).map((c) => (
            <li key={c} className="flex gap-2">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              {c}
            </li>
          ))}
        </ul>
        <TextLink href={`/industries#${industry.slug}`}>
          Explore {industry.name}
        </TextLink>
      </article>
    </Reveal>
  );
}

export function ArticleCard({ article, delay = 0 }: { article: Article; delay?: number }) {
  const date = formatDate(article.publishedAt);
  return (
    <Reveal delay={delay} className="h-full">
      <article className={`${cardBase} !p-0 overflow-hidden`}>
        <ArticleVisual seed={Math.max(0, allArticles.findIndex((a) => a.slug === article.slug))} category={article.category} />
        <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="rounded-md bg-soft px-2.5 py-1 font-medium text-brand">{article.category}</span>
          {date && <time dateTime={article.publishedAt} className="text-slate">{date}</time>}
          <span className="text-slate">{article.readingMinutes} min read</span>
        </div>
        <h3 className="text-xl font-semibold">
          <Link href={`/insights/${article.slug}`} className="hover:text-brand">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 mb-5 flex-1 text-[15px] text-body">{article.excerpt}</p>
        <TextLink href={`/insights/${article.slug}`}>
          Read Article<span className="sr-only">: {article.title}</span>
        </TextLink>
        </div>
      </article>
    </Reveal>
  );
}
