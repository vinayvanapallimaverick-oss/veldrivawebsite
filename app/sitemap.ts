import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/services", "/industries", "/solutions", "/insights", "/careers", "/contact", "/privacy", "/terms", "/cookies"];
  const entries: { path: string; date?: string }[] = [
    ...staticPaths.map((path) => ({ path })),
    ...services.map((s) => ({ path: `/services/${s.slug}` })),
    // lastModified only when a real publish date exists (never invented).
    ...articles.map((a) => ({ path: `/insights/${a.slug}`, date: a.publishedAt })),
  ];
  return entries.map((e) => ({
    url: `${site.url}${e.path}`,
    ...(e.date ? { lastModified: new Date(e.date) } : {}),
  }));
}
