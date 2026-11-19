# Veldriva Website

Corporate website for **Veldriva** (https://veldriva.com), built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Lucide icons and Motion.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

Scripts: `npm run dev` · `npm run build` · `npm start` · `npm run lint` (type-check) · `npm run check:links` (crawl a running server for broken internal links; set `BASE_URL` if not on :3000).

## Project structure

```
app/                 Routes (home, about, services/[slug], industries, solutions, insights/[slug],
                     careers, contact, privacy, terms, cookies), sitemap.ts, robots.ts, OG image, API route
components/layout/   Header, MegaMenu, MobileNavigation, Footer
components/ui/       Button, Section/SectionHeading, Breadcrumbs, Reveal (animation), Logo, Illustrations, JsonLd
components/sections/ PageHero, Cards (Service/Industry/Article), ProcessTimeline, TechnologyGrid, FAQ,
                     CTASection, ContactForm, InsightsHub, LegalPage
data/                Structured content: services, industries, solutions, articles, home
lib/                 site config + navigation, SEO helpers, contact validation
```

**Updating content:** edit the files in `data/`. Pages, navigation, sitemap and metadata update automatically.

- **Services:** `data/services.ts` (each service page is generated from one entry).
- **Articles:** `data/articles.ts`. Set `publishedAt` (ISO date, e.g. `"2026-12-01"`) **only when an article is actually published**; dates are hidden and omitted from schema until then.

## Environment variables

See `.env.example`. Server-only variables must never use the `NEXT_PUBLIC_` prefix.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin (`https://veldriva.com`) |
| `CONTACT_TO_EMAIL` | **Yes** (for form) | Inbox that receives inquiries (use `info@veldriva.com`) |
| `CONTACT_FROM_EMAIL` | **Yes** (for form) | Sender on a domain verified with Resend |
| `RESEND_API_KEY` | **Yes** (for form) | Email delivery (https://resend.com) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Optional | Cloudflare Turnstile bot check; enabled when both set |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional | Shows LinkedIn icon in footer and adds `sameAs` to Organization schema |
| `NEXT_PUBLIC_CALENDAR_URL` | Optional | Shows "Book a Call" on contact page and footer |
| `NEXT_PUBLIC_CAREERS_URL` | Optional | ATS/careers portal link on `/careers` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Search Console HTML-tag verification |

Until the three email variables are set, the contact form validates input but returns a friendly "temporarily unavailable" error (HTTP 503) instead of silently dropping inquiries.

### Contact form protections
Server-side validation and sanitization, honeypot field, same-origin check, body size limit, per-IP rate limiting (5 per 10 min, in-memory per instance), optional Turnstile, HTML-escaped email body. For strict global rate limiting on Vercel, add Vercel Firewall rate-limit rules for `/api/contact` or back the limiter with Upstash/Vercel KV.

## Deploying to Vercel

1. Push the repository to GitHub/GitLab and import it in Vercel (framework preset: Next.js).
2. Add the environment variables above (Production, and Preview if desired).
3. **Domains:** add `veldriva.com` and `www.veldriva.com` in *Project → Settings → Domains*. Set `veldriva.com` as primary and configure `www` to redirect to it (a 308 redirect for `www` is also defined in `next.config.mjs`). Point DNS to Vercel (A record `76.76.21.21` for the apex, CNAME `cname.vercel-dns.com` for `www`, or use Vercel nameservers). HTTPS certificates are issued automatically; HSTS header is already set.
4. Deploy, then run the checklist below.

## Search Console / SEO

- Sitemap: https://veldriva.com/sitemap.xml · robots: https://veldriva.com/robots.txt
- Add the property in Google Search Console, verify via DNS or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then submit the sitemap.
- Every page has unique title, description, canonical URL and Open Graph/Twitter metadata. Breadcrumb, Organization, Service, FAQ and Article structured data are included. A branded social image is generated at `/opengraph-image`.

## Production readiness checklist

- [ ] `npm run build` and `npm run lint` pass (they do as delivered)
- [ ] Set email variables; **submit a real test inquiry** and confirm delivery and reply-to
- [ ] Add LinkedIn URL (and calendar / careers URLs if available)
- [ ] Business confirms the **Technology Ecosystem** list and service scope reflect real delivery capability (see "Content to verify")
- [ ] Legal review of `/privacy`, `/terms`, `/cookies`; fill in bracketed placeholders and remove the draft notice
- [ ] Add legal entity name / contact details only once verified (none are invented)
- [ ] Decide on analytics. If added, update the cookie policy and implement consent **before** loading the tool
- [ ] Domain + `www` redirect + HTTPS verified; `https://veldriva.com/sitemap.xml` loads
- [ ] Search Console verified, sitemap submitted
- [ ] Run Lighthouse on key pages (mobile) and fix anything environment-specific
- [ ] Run `npm run check:links` against production build (`npm start`)
- [ ] Set `publishedAt` on articles when you publish them

## Content to verify before launch

All copy avoids invented metrics, clients, testimonials, certifications, partnerships, addresses and leadership bios. The following are **proposals** that need business confirmation: the list of technologies and platforms (AWS, Azure, Snowflake, Salesforce, etc.), the eight service scopes, the industries served (presented as illustrative, not as past engagements), and the three sample articles (authored as company content with no named author or date).

## Optional regional pages

`/us` and `/ca` are intentionally not created. Add `app/us/page.tsx` / `app/ca/page.tsx` (and entries in `app/sitemap.ts`) only when there is meaningful market-specific content or verified local contact details.

## Cookie consent

A consent banner (Accept all / Reject non-essential / Customize) is rendered from `components/layout/CookieConsent.tsx`. The choice is stored in the `veldriva_consent` cookie for 180 days and can be reopened from "Cookie Settings" in the footer. No analytics or marketing scripts are installed yet. When you add one, gate it on the saved choice (`readConsent()` in `lib/consent.ts`; listen for `CONSENT_EVENT`) so it loads only after consent, and update `/cookies`.
