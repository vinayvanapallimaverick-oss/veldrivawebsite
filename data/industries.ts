import { Landmark, HeartPulse, ShoppingCart, Factory, Briefcase, Building2, type LucideIcon } from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  challenges: string[];
  opportunities: string[];
  services: string[]; // service slugs
  useCases: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: Landmark,
    summary:
      "Banks, insurers and wealth firms balance modernization with security, resilience and stringent oversight.",
    challenges: [
      "Aging core and back-office systems that are costly to change",
      "Fragmented customer and risk data across lines of business",
      "Rising expectations for digital self-service",
      "Strong requirements for security, auditability and resilience",
    ],
    opportunities: [
      "Incrementally modernize core applications through APIs",
      "Build governed data platforms for reporting and analytics",
      "Automate document-heavy processes such as onboarding and claims intake",
    ],
    services: ["digital-transformation", "data-analytics", "cybersecurity", "ai-automation"],
    useCases: [
      "API layer that exposes legacy account data to new digital channels",
      "Governed data warehouse consolidating regulatory and management reporting",
      "Intelligent document processing for application intake",
    ],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    summary:
      "Healthcare and life sciences organizations need to connect data and systems while protecting sensitive information.",
    challenges: [
      "Disconnected clinical, operational and administrative systems",
      "Sensitive data requiring careful access control and privacy practices",
      "Manual administrative workflows",
      "Difficulty turning data into operational insight",
    ],
    opportunities: [
      "Integrate systems to give teams a more complete operational picture",
      "Automate administrative workflows to free staff time",
      "Establish analytics foundations for planning and quality improvement",
    ],
    services: ["data-analytics", "enterprise-applications", "cybersecurity", "cloud-services"],
    useCases: [
      "Integration of scheduling, billing and reporting systems",
      "Analytics dashboards for operational throughput",
      "Workflow automation for referral and document handling",
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    summary:
      "Retailers need unified customer experiences, reliable platforms at peak demand and timely data across channels.",
    challenges: [
      "Inconsistent experiences across online, store and mobile channels",
      "Platforms that struggle with seasonal peaks",
      "Limited unified view of customers and inventory",
      "Slow release cycles for new digital features",
    ],
    opportunities: [
      "Build scalable commerce and integration platforms in the cloud",
      "Unify customer and inventory data for personalization and planning",
      "Automate release processes to ship improvements more often",
    ],
    services: ["software-development", "cloud-services", "data-analytics", "devops"],
    useCases: [
      "Cloud-native storefront services that scale with demand",
      "Customer data platform feeding marketing and service teams",
      "Inventory visibility across warehouses and channels",
    ],
  },
  {
    slug: "manufacturing-supply-chain",
    name: "Manufacturing & Supply Chain",
    icon: Factory,
    summary:
      "Manufacturers and distributors seek better visibility, connected systems and more resilient operations.",
    challenges: [
      "Limited visibility across suppliers, plants and logistics",
      "Disconnected ERP, planning and shop-floor systems",
      "Manual reporting and spreadsheet-based planning",
      "Pressure to improve resilience and efficiency",
    ],
    opportunities: [
      "Integrate ERP and operational systems for a shared view",
      "Create analytics for demand, inventory and performance",
      "Automate routine coordination and exception handling",
    ],
    services: ["enterprise-applications", "data-analytics", "ai-automation", "cloud-services"],
    useCases: [
      "Supply chain dashboard combining ERP and logistics data",
      "Integration between ERP and supplier portals",
      "Automated exception alerts for late or short shipments",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    summary:
      "Consulting, legal, accounting and similar firms depend on knowledge, collaboration and efficient delivery.",
    challenges: [
      "Knowledge spread across documents, email and systems",
      "Manual time, billing and reporting processes",
      "Client expectations for secure digital collaboration",
      "Inconsistent project and resource visibility",
    ],
    opportunities: [
      "Apply AI-assisted search and summarization to firm knowledge",
      "Integrate CRM, project and finance systems",
      "Automate repetitive administrative workflows",
    ],
    services: ["ai-automation", "enterprise-applications", "software-development", "digital-transformation"],
    useCases: [
      "Internal knowledge assistant over approved firm documents",
      "Integrated project, time and billing reporting",
      "Client portal for secure document exchange",
    ],
  },
  {
    slug: "public-sector",
    name: "Public Sector",
    icon: Building2,
    summary:
      "Public-sector organizations aim to improve service delivery, accessibility and efficiency within strict procurement and security expectations.",
    challenges: [
      "Legacy systems supporting critical services",
      "Paper-based or manual processes",
      "Accessibility and security requirements",
      "Constrained budgets and complex procurement",
    ],
    opportunities: [
      "Modernize citizen-facing services with accessible digital experiences",
      "Move suitable workloads to secure cloud environments",
      "Improve data sharing and reporting across departments",
    ],
    services: ["digital-transformation", "cloud-services", "software-development", "cybersecurity"],
    useCases: [
      "Accessible online service forms replacing paper processes",
      "Case-management workflow modernization",
      "Cross-department reporting on a governed data platform",
    ],
  },
];
