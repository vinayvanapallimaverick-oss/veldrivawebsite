import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { JsonLd } from "@/components/ui/JsonLd";
import { site, offices } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Veldriva | Digital Transformation & Technology Consulting",
    template: "%s | Veldriva",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: "Veldriva | Engineering Digital Progress.",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#512C38",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  description: site.description,
  email: site.email,
  contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: site.email, areaServed: ["US", "CA"], availableLanguage: "English" }],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  location: offices.map((o) => ({
    "@type": "Place",
    name: o.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.street,
      addressLocality: o.locality,
      addressRegion: o.regionCode,
      postalCode: o.postalCode,
      addressCountry: o.countryCode,
    },
  })),
  ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={organizationSchema} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
