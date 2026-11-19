import type { Metadata } from "next";
import { abs, site } from "./site";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
}): Metadata {
  const url = abs(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${opts.title} | ${site.name}`,
      description: opts.description,
      url,
      siteName: site.name,
      type: opts.type ?? "website",
      locale: "en_US",
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${site.name}`,
      description: opts.description,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
