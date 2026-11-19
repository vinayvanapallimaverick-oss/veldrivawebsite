export const site = {
  name: "Veldriva",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://veldriva.com").replace(/\/$/, ""),
  tagline: "Engineering Digital Progress.",
  supporting: "Modern Technology. Measurable Business Impact.",
  description:
    "Veldriva is a digital transformation and technology consulting company helping businesses across the United States and Canada modernize technology, unlock data value, and build scalable digital solutions.",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "",
  careersUrl: process.env.NEXT_PUBLIC_CAREERS_URL ?? "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  email: "info@veldriva.com",
  markets: ["United States", "Canada"],
};

export type Office = {
  region: string;
  name: string;
  street: string;
  locality: string;
  regionCode: string;
  postalCode: string;
  country: string;
  countryCode: "US" | "CA";
  lines: string[];
};

/** Office details provided by Veldriva. */
export const offices: Office[] = [
  {
    region: "United States — Texas",
    name: "Veldriva USA",
    street: "26876 US Highway 380",
    locality: "Aubrey",
    regionCode: "TX",
    postalCode: "76227",
    country: "United States",
    countryCode: "US",
    lines: ["26876 US Highway 380", "Aubrey, TX 76227", "USA"],
  },
  {
    region: "Canada — Ontario",
    name: "Veldriva Canada",
    street: "273 Slater Street, 14th Floor",
    locality: "Ottawa",
    regionCode: "ON",
    postalCode: "K1P 5H9",
    country: "Canada",
    countryCode: "CA",
    lines: ["273 Slater Street, 14th Floor", "Ottawa, ON K1P 5H9", "Canada"],
  },
];

export const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Solutions", href: "/solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
