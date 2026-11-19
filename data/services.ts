import {
  Compass,
  Cloud,
  BrainCircuit,
  Database,
  Code2,
  Blocks,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Pair = [title: string, text: string];

export type Service = {
  slug: string;
  name: string;
  short: string; // two-line card description
  icon: LucideIcon;
  group: string;
  heroTitle: string;
  heroSub: string;
  overview: string;
  keywords: string[];
  challenges: Pair[];
  approach: Pair[];
  capabilities: string[];
  stack: string[];
  benefits: Pair[];
  delivery: Pair[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "digital-transformation",
    name: "Digital Transformation Consulting",
    short:
      "Clear strategy, roadmaps and operating models that connect technology investment to business priorities.",
    icon: Compass,
    group: "Strategy & Modernization",
    heroTitle: "Modernize Today. Build for Tomorrow.",
    heroSub: "Digital transformation consulting for organizations in the United States and Canada.",
    overview:
      "Digital transformation succeeds when technology decisions follow business priorities. Veldriva helps leadership teams assess where they are, decide where to invest, and sequence modernization into achievable steps.",
    keywords: ["digital transformation consulting", "technology roadmap", "legacy modernization"],
    challenges: [
      ["Fragmented initiatives", "Projects are launched in isolation, so systems, data and processes drift further apart."],
      ["Aging core systems", "Legacy platforms slow change, raise support costs and limit integration with modern tools."],
      ["Unclear priorities", "Without a shared roadmap, teams compete for budget and the highest-value work is delayed."],
      ["Change fatigue", "Operating models and skills lag behind the technology, so new tools are underused."],
    ],
    approach: [
      ["Assess the current state", "We review applications, infrastructure, data and delivery practices to build an honest baseline."],
      ["Define target outcomes", "We translate business goals into measurable objectives and architectural principles."],
      ["Prioritize and sequence", "Initiatives are ranked by value, risk and dependency, then organized into a phased roadmap."],
      ["Enable execution", "We support governance, delivery planning and the operating model needed to carry the plan out."],
    ],
    capabilities: [
      "Digital strategy",
      "Technology assessments",
      "Legacy modernization",
      "Business process optimization",
      "Application transformation",
      "Technology roadmaps",
      "Digital operating models",
    ],
    stack: ["Enterprise architecture frameworks", "Cloud platforms", "Process mapping tools", "API platforms", "Low-code workflow tools"],
    benefits: [
      ["Aligned investment", "Technology spending is tied to explicit business outcomes."],
      ["Reduced complexity", "Rationalized applications and clearer architecture lower long-term overhead."],
      ["Faster decisions", "A shared roadmap gives leaders a common basis for trade-offs."],
      ["Lower delivery risk", "Phased modernization avoids disruptive big-bang change."],
    ],
    delivery: [
      ["Discover", "Stakeholder interviews and system inventory."],
      ["Strategize", "Target state, priorities and business case."],
      ["Design", "Reference architecture and operating model."],
      ["Deliver", "Pilot initiatives and governance set-up."],
      ["Optimize", "Review results and refine the roadmap."],
    ],
    faqs: [
      { q: "How long does a technology assessment take?", a: "Scope varies with the size of the estate. We agree on the timeline and deliverables with you before work begins." },
      { q: "Do we need to replace our legacy systems?", a: "Not necessarily. Options range from retaining and integrating, to re-platforming, to full replacement. We recommend based on business value and risk." },
      { q: "Can you work alongside our internal teams?", a: "Yes. We typically work as an extension of your IT and business teams and aim to leave them better equipped." },
    ],
  },
  {
    slug: "cloud-services",
    name: "Cloud & Infrastructure Services",
    short:
      "Cloud readiness, migration and operations that improve agility, resilience and cost control.",
    icon: Cloud,
    group: "Cloud & Platforms",
    heroTitle: "Cloud Solutions Built for Agility and Scale.",
    heroSub: "Cloud consulting and infrastructure engineering across AWS, Microsoft Azure and Google Cloud.",
    overview:
      "A successful move to the cloud is about more than relocating workloads. Veldriva designs cloud foundations that are secure, cost-aware and ready to support new products and faster change.",
    keywords: ["cloud consulting", "cloud migration", "cloud cost optimization"],
    challenges: [
      ["Uncertain readiness", "Teams are unsure which workloads should move, modernize or stay where they are."],
      ["Unpredictable cloud spend", "Costs grow without clear ownership, tagging or right-sizing."],
      ["Inconsistent environments", "Manually built infrastructure creates drift, outages and slow recovery."],
      ["Skills and operating gaps", "Day-two operations, monitoring and governance are not defined before migration."],
    ],
    approach: [
      ["Readiness and landscape review", "We evaluate applications, dependencies, compliance needs and team skills."],
      ["Landing zone design", "We establish identity, networking, security and governance foundations."],
      ["Migrate and modernize", "Workloads are rehosted, replatformed or refactored based on value and effort."],
      ["Operate and optimize", "We set up monitoring, FinOps practices and ongoing improvement."],
    ],
    capabilities: [
      "Cloud readiness assessment",
      "Cloud migration",
      "Cloud-native architecture",
      "Infrastructure modernization",
      "Cloud cost optimization",
      "Hybrid and multi-cloud",
      "Cloud operations",
    ],
    stack: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker"],
    benefits: [
      ["Business agility", "Environments can be provisioned and changed in hours rather than weeks."],
      ["Resilience", "Architectures designed for availability and recovery."],
      ["Cost transparency", "Spend is visible, attributed and continuously reviewed."],
      ["Stronger security posture", "Consistent controls applied by design."],
    ],
    delivery: [
      ["Discover", "Inventory workloads and dependencies."],
      ["Strategize", "Choose migration paths and target platforms."],
      ["Design", "Landing zone and workload architectures."],
      ["Deliver", "Migrate in waves with testing and cutover plans."],
      ["Optimize", "Tune cost, performance and operations."],
    ],
    faqs: [
      { q: "Which cloud providers do you work with?", a: "Our proposed focus areas are AWS, Microsoft Azure and Google Cloud. We recommend the platform that best fits your requirements." },
      { q: "Can you help reduce our existing cloud costs?", a: "Yes. A cost optimization review examines usage, commitments and architecture to identify savings opportunities." },
      { q: "Do you support hybrid environments?", a: "Yes. Many organizations keep some workloads on premises, and we design for secure connectivity and consistent operations." },
    ],
  },
  {
    slug: "ai-automation",
    name: "Artificial Intelligence & Automation",
    short:
      "Practical AI and automation that fit into existing systems and are designed with governance in mind.",
    icon: BrainCircuit,
    group: "Data, AI & Software",
    heroTitle: "Turn Intelligent Technology Into Business Value.",
    heroSub: "AI consulting and intelligent automation for enterprise teams.",
    overview:
      "Veldriva helps organizations identify where AI and automation can deliver real value, then build and integrate solutions with the data foundations, governance and change management they require.",
    keywords: ["AI consulting", "generative AI solutions", "intelligent automation"],
    challenges: [
      ["Too many ideas, unclear value", "Teams struggle to separate promising use cases from experiments that will not scale."],
      ["Data not ready", "Poor data quality and access limit what AI can reliably do."],
      ["Integration friction", "Prototypes stay isolated from the systems and workflows where work actually happens."],
      ["Governance concerns", "Privacy, accuracy, bias and oversight need clear policies before wide adoption."],
    ],
    approach: [
      ["Identify high-value use cases", "We evaluate feasibility, data availability, risk and expected business value."],
      ["Prototype with purpose", "Focused proofs of concept validate assumptions before larger investment."],
      ["Integrate into workflows", "Solutions connect to enterprise applications, data and approval processes."],
      ["Govern and monitor", "We help define review, evaluation and monitoring practices for responsible use."],
    ],
    capabilities: [
      "AI strategy",
      "Generative AI solutions",
      "Intelligent document processing",
      "Workflow automation",
      "Enterprise AI integration",
      "AI governance considerations",
      "AI-powered business applications",
    ],
    stack: ["Generative AI", "Machine Learning", "Intelligent Automation", "Workflow Orchestration", "Python", "PostgreSQL"],
    benefits: [
      ["Reduced manual effort", "Repetitive, document-heavy tasks can be automated or assisted."],
      ["Better use of knowledge", "Employees can find and apply organizational information faster."],
      ["Informed adoption", "Use cases are chosen on evidence, not hype."],
      ["Responsible scaling", "Governance practices grow with usage."],
    ],
    delivery: [
      ["Discover", "Map processes and candidate use cases."],
      ["Strategize", "Prioritize by value, feasibility and risk."],
      ["Design", "Solution architecture and evaluation criteria."],
      ["Deliver", "Build, integrate and test with users."],
      ["Optimize", "Monitor quality and expand carefully."],
    ],
    faqs: [
      { q: "Do we need a lot of data to start?", a: "Not always. Many generative AI and automation use cases rely on existing documents and systems. We assess data readiness early." },
      { q: "How do you approach AI risk?", a: "We consider data privacy, accuracy, human oversight and monitoring from the start, and help you document appropriate guardrails." },
      { q: "Can AI be added to our current applications?", a: "Often yes, through APIs and integrations that augment existing workflows rather than replace them." },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Engineering & Analytics",
    short:
      "Reliable data platforms, pipelines and analytics that turn information into confident decisions.",
    icon: Database,
    group: "Data, AI & Software",
    heroTitle: "Transform Data Into Better Decisions.",
    heroSub: "Data engineering services and analytics for modern enterprises.",
    overview:
      "Good decisions depend on data that people trust. Veldriva designs and builds the architecture, pipelines and reporting layers that make data accessible, governed and useful.",
    keywords: ["data engineering services", "business intelligence", "data warehousing"],
    challenges: [
      ["Siloed data", "Critical information is spread across applications and spreadsheets with no single view."],
      ["Slow, manual reporting", "Analysts spend time preparing data instead of analyzing it."],
      ["Low trust in numbers", "Conflicting definitions and unclear lineage undermine confidence."],
      ["Platforms that do not scale", "Legacy warehouses struggle with new data types and growing demand."],
    ],
    approach: [
      ["Understand decisions first", "We start with the questions the business needs answered."],
      ["Design the data architecture", "We define storage, modeling, integration and governance patterns."],
      ["Build resilient pipelines", "Automated, tested pipelines deliver timely and consistent data."],
      ["Enable insight", "Dashboards and analytics put trusted data in front of decision-makers."],
    ],
    capabilities: [
      "Data architecture",
      "Data integration",
      "Data pipelines",
      "Data warehousing",
      "Data governance",
      "Business intelligence",
      "Advanced analytics",
    ],
    stack: ["Snowflake", "Databricks", "Power BI", "PostgreSQL", "Python", "Terraform"],
    benefits: [
      ["A trusted view of the business", "Consistent definitions and lineage."],
      ["Faster reporting", "Automation reduces manual preparation."],
      ["Scalable foundation", "Ready for new sources, AI and advanced analytics."],
      ["Stronger governance", "Clear ownership, quality checks and access control."],
    ],
    delivery: [
      ["Discover", "Catalogue sources, consumers and pain points."],
      ["Strategize", "Prioritize data domains and target platform."],
      ["Design", "Models, pipelines and governance approach."],
      ["Deliver", "Build, test and release incrementally."],
      ["Optimize", "Monitor quality, cost and adoption."],
    ],
    faqs: [
      { q: "Which data platforms do you use?", a: "Our proposed focus includes Snowflake, Databricks, PostgreSQL and Power BI, selected based on your requirements and existing investments." },
      { q: "Can you improve our existing warehouse rather than replace it?", a: "Yes. We often modernize in stages, starting with the highest-value data domains." },
      { q: "Do you help with data governance?", a: "Yes. We help define ownership, quality rules, access policies and documentation practices." },
    ],
  },
  {
    slug: "software-development",
    name: "Custom Software Development",
    short:
      "Well-engineered web applications, platforms and integrations built around how your business works.",
    icon: Code2,
    group: "Data, AI & Software",
    heroTitle: "Software Engineered Around Your Business.",
    heroSub: "Enterprise software development with disciplined engineering and clear collaboration.",
    overview:
      "When off-the-shelf software does not fit, Veldriva designs and builds custom applications that are maintainable, secure and ready to evolve with the business.",
    keywords: ["enterprise software development", "custom software", "API development"],
    challenges: [
      ["Software that does not fit", "Packaged tools force workarounds and manual effort."],
      ["Hard-to-change systems", "Tightly coupled code makes every change slow and risky."],
      ["Disconnected applications", "Data is re-keyed between systems because integration is limited."],
      ["Inconsistent quality", "Without automated testing and standards, defects reach production."],
    ],
    approach: [
      ["Shape the product", "We work with stakeholders to define users, workflows and priorities."],
      ["Architect for change", "We choose modular, well-documented architectures and clear APIs."],
      ["Build iteratively", "Short cycles with regular demos keep delivery visible and adaptable."],
      ["Test and harden", "Automated testing, code review and security practices are built into the process."],
    ],
    capabilities: [
      "Enterprise web applications",
      "Custom platforms",
      "API development",
      "System integration",
      "Frontend engineering",
      "Backend engineering",
      "Application modernization",
      "Testing and quality assurance",
    ],
    stack: ["Java", "Python", ".NET", "React", "Node.js", "PostgreSQL", "GitHub Actions"],
    benefits: [
      ["Fit for purpose", "Software that mirrors your processes."],
      ["Maintainable code", "Clear structure and documentation reduce long-term cost."],
      ["Connected systems", "APIs and integrations remove duplicate work."],
      ["Predictable delivery", "Transparent progress and quality gates."],
    ],
    delivery: [
      ["Discover", "Users, workflows and constraints."],
      ["Strategize", "Scope, architecture and release plan."],
      ["Design", "UX, data model and API design."],
      ["Deliver", "Iterative build, test and deploy."],
      ["Optimize", "Support, monitoring and enhancement."],
    ],
    faqs: [
      { q: "What technologies do you build with?", a: "Our proposed core stack includes Java, Python, .NET, React and Node.js. We recommend technology based on your needs and team." },
      { q: "Do you modernize existing applications?", a: "Yes. We can refactor, re-platform or incrementally replace legacy applications." },
      { q: "How do you manage scope and change?", a: "We work in iterations with a prioritized backlog so scope can be adjusted transparently." },
    ],
  },
  {
    slug: "enterprise-applications",
    name: "Enterprise Application Services",
    short:
      "CRM, ERP and workflow platforms integrated and tailored so systems work together.",
    icon: Blocks,
    group: "Strategy & Modernization",
    heroTitle: "Connect Systems. Simplify Operations.",
    heroSub: "Enterprise application consulting, integration and customization.",
    overview:
      "Enterprise platforms deliver the most value when they are connected to each other and shaped around real processes. Veldriva helps organizations modernize, integrate and support the applications at the center of daily operations.",
    keywords: ["enterprise applications", "CRM modernization", "ERP integration"],
    challenges: [
      ["Disconnected platforms", "CRM, ERP and other systems hold overlapping data that does not stay in sync."],
      ["Heavy customization debt", "Years of changes make upgrades difficult and costly."],
      ["Manual handoffs", "Approvals and data transfers rely on email and spreadsheets."],
      ["Limited support capacity", "Internal teams cannot keep pace with enhancement requests."],
    ],
    approach: [
      ["Map processes and data flows", "We document how work moves across systems and where it stalls."],
      ["Design integrations", "We define APIs, events and master data rules for consistent information."],
      ["Configure and customize", "We tailor platforms with sustainable, upgrade-friendly approaches."],
      ["Support and evolve", "Ongoing support and enhancement keeps platforms aligned with change."],
    ],
    capabilities: [
      "CRM modernization",
      "ERP integration",
      "Enterprise workflow automation",
      "Application integration",
      "Platform customization",
      "Business application support",
    ],
    stack: ["Microsoft Dynamics 365", "Salesforce", "Adobe Experience Cloud", "REST and event APIs", "Workflow Orchestration"],
    benefits: [
      ["Single source of truth", "Consistent customer and operational data."],
      ["Streamlined processes", "Fewer manual steps and handoffs."],
      ["Easier upgrades", "Cleaner configuration and integration patterns."],
      ["Better user adoption", "Platforms aligned with how people work."],
    ],
    delivery: [
      ["Discover", "Processes, systems and data flows."],
      ["Strategize", "Target landscape and integration approach."],
      ["Design", "Configuration, workflows and interfaces."],
      ["Deliver", "Build, test with users and release."],
      ["Optimize", "Support, tuning and enhancement."],
    ],
    faqs: [
      { q: "Which enterprise platforms do you cover?", a: "Our proposed focus areas include Microsoft Dynamics 365, Salesforce and Adobe Experience Cloud. These are service areas, not vendor partnership claims." },
      { q: "Can you integrate our legacy ERP?", a: "Typically yes, using APIs, middleware or data integration patterns suited to the system." },
      { q: "Do you provide ongoing support?", a: "We can discuss support arrangements as part of an engagement." },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & IT Modernization",
    short:
      "Security-minded architecture and modernization that reduce risk while enabling change.",
    icon: ShieldCheck,
    group: "Strategy & Modernization",
    heroTitle: "Modernize With Security Built In.",
    heroSub: "Security assessments, secure architecture and security-focused modernization.",
    overview:
      "Modernization and security should progress together. Veldriva helps organizations review their security posture, design secure architectures and apply sound practices as systems evolve. Our services are advisory and engineering-focused; we do not provide regulated certification or audit attestations.",
    keywords: ["IT security consulting", "secure architecture", "identity and access management"],
    challenges: [
      ["Unclear risk exposure", "Teams lack a prioritized view of the weaknesses that matter most."],
      ["Legacy systems", "Unsupported platforms and inconsistent controls widen the attack surface."],
      ["Identity sprawl", "Excess privileges and inconsistent access management raise risk."],
      ["Security as an afterthought", "Controls added late are costlier and less effective."],
    ],
    approach: [
      ["Assess", "We review architecture, configuration and practices against recognized good-practice guidance."],
      ["Prioritize", "Findings are ranked by likelihood, impact and effort."],
      ["Design secure foundations", "We define identity, network, data protection and monitoring patterns."],
      ["Embed and improve", "Security practices are built into delivery pipelines and operations."],
    ],
    capabilities: [
      "Security assessments",
      "Secure architecture",
      "Identity and access management",
      "Cloud security practices",
      "Security-focused modernization",
      "Risk management support",
    ],
    stack: ["Identity platforms", "Cloud-native security controls", "Terraform", "GitHub Actions", "Kubernetes"],
    benefits: [
      ["Prioritized action", "Focus effort where risk is highest."],
      ["Reduced attack surface", "Modernized, consistently configured systems."],
      ["Least-privilege access", "Clear identity and access practices."],
      ["Security by design", "Controls integrated early in delivery."],
    ],
    delivery: [
      ["Discover", "Scope, assets and current controls."],
      ["Strategize", "Risk priorities and target posture."],
      ["Design", "Secure architecture and control patterns."],
      ["Deliver", "Implement remediations and automation."],
      ["Optimize", "Review, monitor and refine."],
    ],
    faqs: [
      { q: "Are you a certified auditor or managed security provider?", a: "No. Our cybersecurity services are advisory and engineering-oriented. We do not issue compliance certifications." },
      { q: "Can you help us prepare for a compliance audit?", a: "We can help strengthen technical practices and documentation that support audit readiness, while formal audits remain with qualified assessors." },
      { q: "Do you integrate security into DevOps?", a: "Yes. We help add automated checks and secure configuration to delivery pipelines." },
    ],
  },
  {
    slug: "devops",
    name: "DevOps & Platform Engineering",
    short:
      "Automated delivery, infrastructure as code and observability for reliable, repeatable releases.",
    icon: Workflow,
    group: "Cloud & Platforms",
    heroTitle: "Ship Faster. Run Reliably.",
    heroSub: "DevOps consulting and platform engineering for dependable delivery.",
    overview:
      "Veldriva helps engineering organizations automate how software is built, released and operated, creating platforms that let teams deliver frequently with confidence.",
    keywords: ["DevOps consulting", "platform engineering", "infrastructure as code"],
    challenges: [
      ["Manual, risky releases", "Deployments depend on individuals and checklists, causing delays and errors."],
      ["Environment inconsistency", "Differences between environments produce hard-to-reproduce issues."],
      ["Limited visibility", "Teams learn about problems from users rather than from monitoring."],
      ["Platform overload for developers", "Each team solves infrastructure problems separately."],
    ],
    approach: [
      ["Baseline delivery practices", "We assess pipelines, environments and operational maturity."],
      ["Automate the path to production", "CI/CD and release automation make delivery repeatable."],
      ["Codify infrastructure", "Infrastructure as Code and containers ensure consistent environments."],
      ["Build observability and reliability", "Metrics, logs and traces support faster diagnosis and improvement."],
    ],
    capabilities: [
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Containerization",
      "Kubernetes",
      "Observability",
      "Release automation",
      "Platform reliability",
      "Infrastructure automation",
    ],
    stack: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS", "Microsoft Azure", "Google Cloud"],
    benefits: [
      ["More frequent releases", "Automated pipelines reduce friction."],
      ["Fewer incidents", "Consistent environments and testing."],
      ["Faster recovery", "Better visibility and runbooks."],
      ["Developer productivity", "Self-service platforms reduce wait time."],
    ],
    delivery: [
      ["Discover", "Review pipelines, environments and incidents."],
      ["Strategize", "Define target practices and platform scope."],
      ["Design", "Pipeline, infrastructure and observability design."],
      ["Deliver", "Implement, migrate teams and train."],
      ["Optimize", "Measure delivery and reliability metrics."],
    ],
    faqs: [
      { q: "Do you work with Kubernetes?", a: "Yes. Containerization and Kubernetes are proposed focus areas, used where they fit your workload and team capacity." },
      { q: "Can you work with our existing CI/CD tools?", a: "Yes. We can improve existing tooling or help you migrate, for example to GitHub Actions." },
      { q: "How do you measure success?", a: "We typically track delivery frequency, lead time, change failure rate and recovery time." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const serviceGroups = Array.from(new Set(services.map((s) => s.group))).map((group) => ({
  group,
  items: services.filter((s) => s.group === group),
}));
