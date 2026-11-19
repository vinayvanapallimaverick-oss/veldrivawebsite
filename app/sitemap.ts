import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/services", "/industries", "/solutions", "/insights", "/careers", "/contact", "/privacy", "/terms", "/cookies"];
  const entries = [
    ...staticPaths.map((p) => ({ path: p, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    ...articles.map((a) => ({ path: `/insights/${a.slug}`, priority: 0.6, date: a.publishedAt })),
  ];
  return entries.map((e) => ({
    url: `${site.url}${e.path}`,
    ...("date" in e && e.date ? { lastModified: new Date(e.date as string) } : {}),
    changeFrequency: "monthly" as const,
    priority: e.priority,
  }));
}
