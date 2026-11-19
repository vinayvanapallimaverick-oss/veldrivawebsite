import {
  Target,
  Wrench,
  TrendingUp,
  Users,
  ShieldCheck,
  Handshake,
  Search,
  Map,
  PenTool,
  Rocket,
  Gauge,
  Lightbulb,
  Settings2,
  LineChart,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const whyUs: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Target, title: "Business-First Thinking", text: "We start with your objectives, not the technology, so every recommendation connects to an outcome you care about." },
  { icon: Wrench, title: "Engineering Excellence", text: "Code review, automated testing and clear documentation are part of how we build, so solutions are dependable and maintainable." },
  { icon: TrendingUp, title: "Scalable Solutions", text: "We design architectures that can grow with your users, data and ambitions without costly rework." },
  { icon: Users, title: "Collaborative Delivery", text: "Our teams work openly with yours, with regular demos and shared priorities so there are no surprises." },
  { icon: ShieldCheck, title: "Security-Minded Design", text: "Identity, data protection and secure configuration are considered from the first design decision." },
  { icon: Handshake, title: "Long-Term Partnership", text: "We aim to be a trusted advisor beyond a single project, supporting your technology as your needs evolve." },
];

export const process: { n: string; icon: LucideIcon; title: string; text: string }[] = [
  { n: "01", icon: Search, title: "Discover", text: "Understand business objectives, systems, constraints and opportunities." },
  { n: "02", icon: Map, title: "Strategize", text: "Define priorities, architecture, delivery plans and success criteria." },
  { n: "03", icon: PenTool, title: "Design", text: "Create scalable technical solutions and user-focused experiences." },
  { n: "04", icon: Rocket, title: "Deliver", text: "Implement, integrate, test and deploy solutions using disciplined engineering practices." },
  { n: "05", icon: Gauge, title: "Optimize", text: "Monitor performance, improve operations and support continuous evolution." },
];

export const techCategories: { title: string; items: string[] }[] = [
  { title: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { title: "Development", items: ["Java", "Python", ".NET", "React", "Node.js"] },
  { title: "Data & Analytics", items: ["Snowflake", "Databricks", "Power BI", "PostgreSQL"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { title: "Enterprise Platforms", items: ["Microsoft Dynamics 365", "Salesforce", "Adobe Experience Cloud"] },
  { title: "AI & Automation", items: ["Generative AI", "Machine Learning", "Intelligent Automation", "Workflow Orchestration"] },
];

export const outcomes: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Lightbulb, title: "Accelerate Innovation", text: "Shorten the path from idea to working product with modern platforms, automated delivery and iterative development." },
  { icon: Settings2, title: "Modernize Operations", text: "Replace manual steps and brittle systems with connected, automated and better-supported processes." },
  { icon: LineChart, title: "Unlock Data Intelligence", text: "Give teams trusted, timely data and analytics so decisions rest on evidence rather than guesswork." },
  { icon: Layers, title: "Build for Scale", text: "Create foundations that handle growth in users, data and complexity while keeping costs visible." },
];

export const values: { title: string; text: string }[] = [
  { title: "Integrity", text: "We give honest advice, say what we know and don't know, and make commitments we can keep." },
  { title: "Innovation", text: "We apply modern approaches thoughtfully, favoring what works over what is fashionable." },
  { title: "Excellence", text: "We hold our work to high standards of engineering and communication." },
  { title: "Collaboration", text: "We succeed with our clients, working as one team toward shared goals." },
  { title: "Accountability", text: "We take ownership of outcomes and are transparent about progress and risk." },
  { title: "Continuous Learning", text: "Technology changes quickly; we invest in curiosity, skills and sharing knowledge." },
];
