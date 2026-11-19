"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ArticleCard } from "./Cards";
import { categories, type Article } from "@/data/articles";

export function InsightsHub({ articles }: { articles: Article[] }) {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return articles.filter(
      (a) =>
        (cat === "All" || a.category === cat) &&
        (!term || `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(term)),
    );
  }, [articles, cat, q]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-10 rounded-full border px-4 text-sm font-medium transition-colors ${
                cat === c ? "border-brand bg-brand text-white" : "border-line bg-white text-navy hover:border-brand hover:text-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <label htmlFor="insight-search" className="sr-only">Search insights</label>
          <Search aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate" />
          <input
            id="insight-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search insights"
            className="min-h-11 w-full rounded-xl border border-line bg-white pl-10 pr-4 text-base text-navy placeholder:text-slate/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      </div>

      <p aria-live="polite" className="sr-only">{filtered.length} articles shown</p>
      {filtered.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      ) : (
        <div className="rounded-[14px] border border-dashed border-line bg-ice p-10 text-center">
          <p className="font-heading text-lg font-semibold text-navy">No articles match your filters.</p>
          <p className="mt-1 text-body">More perspectives are on the way. Try a different category or search term.</p>
          <button type="button" onClick={() => { setCat("All"); setQ(""); }} className="mt-4 text-sm font-semibold text-brand hover:text-brand-dark">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
