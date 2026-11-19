import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How the Veldriva website uses cookies and similar technologies. Draft for review.",
  path: "/cookies",
});

export default function Page() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies"
      intro="This draft describes how veldriva.com uses cookies and similar technologies."
      sections={[
        { h: "1. Your choices", p: ["When you first visit, a cookie banner lets you accept all cookies, reject non-essential cookies, or customize your settings. You can change your choice at any time using “Cookie Settings” in the footer. Your choice is remembered for 180 days in a cookie named veldriva_consent."] },
        { h: "1a. Categories of cookies", p: [["Necessary: required for the site to function and to remember your cookie choice. Always on.", "Analytics: help us understand how visitors use the site. Loaded only if you consent. [No analytics tool is currently installed; update this policy when one is added.]", "Marketing: used to measure and personalize outreach. Loaded only if you consent. [Not currently in use.]"]] },
        { h: "2. Optional services", p: ["If the business enables optional features, such as a calendar-booking widget or Cloudflare Turnstile spam protection on the contact form, those providers may set cookies or process technical data under their own policies."] },
        { h: "3. If analytics or marketing tools are added", p: ["Any analytics, advertising or similar tool must load only after the matching consent category is granted, and this policy should be updated first. [Counsel to confirm requirements under US state privacy laws and Canadian privacy and anti-spam rules.]"] },
        { h: "4. Managing cookies", p: ["Most browsers let you block or delete cookies in their settings. Blocking some cookies may affect how websites work."] },
        { h: "5. Contact", p: ["Questions about this policy can be sent through our contact page."] },
      ]}
    />
  );
}
