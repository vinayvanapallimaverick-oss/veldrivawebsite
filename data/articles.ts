export const categories = [
  "Digital Transformation",
  "Cloud",
  "Artificial Intelligence",
  "Data & Analytics",
  "Software Engineering",
  "Enterprise Technology",
] as const;

export type Category = (typeof categories)[number];

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  /** ISO date. Leave undefined until the article is actually published. */
  publishedAt?: string;
  readingMinutes: number;
  featured?: boolean;
  related: string[];
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "practical-digital-transformation-roadmap",
    title: "Building a Practical Digital Transformation Roadmap",
    category: "Digital Transformation",
    excerpt:
      "A roadmap is only useful if it helps leaders make decisions. Here is a pragmatic way to build one that connects strategy, technology and delivery.",
    readingMinutes: 6,
    featured: true,
    related: ["cloud-modernization-business-agility", "responsible-ai-adoption-enterprise"],
    body: [
      { type: "p", text: "Many digital transformation efforts begin with enthusiasm and a long list of initiatives. Months later, teams are busy but leaders struggle to say what has changed for the business. A practical roadmap prevents this by turning ambition into a sequence of choices that people can understand, fund and deliver." },
      { type: "h2", text: "Start with business outcomes, not technology" },
      { type: "p", text: "The first question is not which platform to adopt but what the organization needs to be able to do differently. Faster product launches, better customer service, lower cost to serve, or stronger resilience each imply different priorities. Write three to five outcomes in plain language and agree on how you will recognize progress for each." },
      { type: "h2", text: "Establish an honest baseline" },
      { type: "p", text: "A useful baseline covers more than a list of applications. It looks at how work flows, where data lives, how systems are connected, who supports them, and what it costs to change them. The goal is not an exhaustive inventory but enough clarity to see constraints and dependencies." },
      { type: "ul", items: ["Applications and their business criticality", "Infrastructure and hosting arrangements", "Key data sources and ownership", "Integration points and manual workarounds", "Delivery practices, skills and capacity"] },
      { type: "h2", text: "Prioritize using value, risk and effort" },
      { type: "p", text: "Not every initiative deserves equal attention. Score candidates against the value they enable, the risk of leaving things as they are, and the effort required. Dependencies matter too: a data platform may need to precede analytics work, and identity foundations may need to precede application migration." },
      { type: "h2", text: "Sequence into phases people can deliver" },
      { type: "p", text: "Group work into phases that each deliver visible benefit. Early phases should build foundations and produce quick, credible wins; later phases can be planned with less precision and revisited as you learn. Avoid roadmaps that promise exact dates years ahead." },
      { type: "h2", text: "Plan the operating model alongside the technology" },
      { type: "p", text: "Technology changes stick only when ownership, governance and skills change with them. Decide who owns the roadmap, how funding decisions are made, how teams are organized around products or platforms, and what training is needed." },
      { type: "h2", text: "Keep the roadmap alive" },
      { type: "p", text: "Review the roadmap on a regular cadence. Retire initiatives that no longer make sense, add new ones as opportunities appear, and report progress against the outcomes you set at the beginning. A roadmap that evolves with the business is far more valuable than a perfect plan that is never revisited." },
    ],
  },
  {
    slug: "cloud-modernization-business-agility",
    title: "How Cloud Modernization Supports Business Agility",
    category: "Cloud",
    excerpt:
      "Moving to the cloud is a means, not an end. Learn how modernization choices influence how quickly your business can respond to change.",
    readingMinutes: 6,
    related: ["practical-digital-transformation-roadmap", "responsible-ai-adoption-enterprise"],
    body: [
      { type: "p", text: "Business agility is the ability to sense change and respond effectively, whether that means launching a new service, entering a market or adapting to a disruption. Technology can either enable or limit that ability. Cloud modernization, done thoughtfully, shifts the balance toward enablement." },
      { type: "h2", text: "Agility is more than speed of provisioning" },
      { type: "p", text: "Cloud platforms let teams create environments in minutes. But agility also depends on how applications are built, how changes are tested and released, and how safely teams can experiment. Lifting an application unchanged into the cloud rarely delivers these benefits on its own." },
      { type: "h2", text: "Choose the right path for each workload" },
      { type: "ul", items: ["Rehost: move with minimal change when speed or data-center exit is the priority", "Replatform: adopt managed services such as databases to reduce operational burden", "Refactor: redesign for cloud-native patterns where scalability and change speed matter most", "Retire or replace: remove applications that no longer justify their cost"] },
      { type: "p", text: "A portfolio view helps you apply the heaviest investment only where it pays back." },
      { type: "h2", text: "Build a strong foundation first" },
      { type: "p", text: "A well-designed landing zone sets up identity, networking, security controls, logging and cost management before workloads arrive. It makes later migrations faster and more consistent, and it reduces the risk of ad hoc environments that are hard to govern." },
      { type: "h2", text: "Automate infrastructure and delivery" },
      { type: "p", text: "Infrastructure as Code and automated pipelines turn environments into repeatable assets. Teams can reproduce environments, review changes like code and recover faster after incidents. This is where much of the practical agility benefit emerges." },
      { type: "h2", text: "Manage cost as an engineering concern" },
      { type: "p", text: "Cloud spend is variable by design. Tagging, ownership, budgets and regular right-sizing reviews keep it understandable. Treating cost as a design input alongside performance and security prevents surprises." },
      { type: "h2", text: "Prepare people and operations" },
      { type: "p", text: "Monitoring, incident response, support models and skills must evolve with the platform. Agility depends on teams that are confident operating what they have built." },
    ],
  },
  {
    slug: "responsible-ai-adoption-enterprise",
    title: "Responsible AI Adoption for Enterprise Organizations",
    category: "Artificial Intelligence",
    excerpt:
      "Enterprise AI succeeds when value, data readiness and governance are considered together. A practical framework for getting started responsibly.",
    readingMinutes: 7,
    related: ["practical-digital-transformation-roadmap", "cloud-modernization-business-agility"],
    body: [
      { type: "p", text: "Generative AI and machine learning offer real opportunities, from reducing manual document work to helping employees find knowledge faster. They also introduce questions about accuracy, privacy, intellectual property and accountability. Responsible adoption means pursuing value while managing these concerns deliberately." },
      { type: "h2", text: "Begin with use cases tied to business value" },
      { type: "p", text: "List candidate use cases and assess each for value, feasibility, data availability and risk. Favor use cases with clear users, measurable outcomes and a human who can review the result. Starting with internal, lower-risk workflows builds experience before customer-facing deployment." },
      { type: "h2", text: "Check data readiness" },
      { type: "p", text: "AI quality depends on the information it can access. Identify where relevant data lives, who owns it, how current it is and who is allowed to see it. Access controls must carry through so that AI features never expose information to people who should not see it." },
      { type: "h2", text: "Keep people in the loop" },
      { type: "p", text: "For many enterprise tasks, the right design is assistance rather than full automation. People review summaries, drafts and recommendations, and their feedback improves the system. Define clearly which decisions remain with humans." },
      { type: "h2", text: "Establish lightweight governance early" },
      { type: "ul", items: ["An acceptable-use policy for employees and teams", "A review process for new AI use cases covering privacy, security and legal considerations", "Guidance on which data may be sent to which tools", "Evaluation criteria and test sets to measure quality before and after release", "Logging and monitoring to detect drift, misuse and errors"] },
      { type: "p", text: "Governance should enable teams to move with confidence, not become a barrier. Requirements will vary by industry and jurisdiction, so involve legal and compliance stakeholders." },
      { type: "h2", text: "Integrate, measure, and iterate" },
      { type: "p", text: "Value appears when AI is embedded in the systems and workflows where work happens. Pilot with a small group, measure outcomes such as time saved and quality, and expand based on evidence. Plan for ongoing evaluation, because models, data and expectations change." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const formatDate = (iso?: string) =>
  iso
    ? new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(iso))
    : undefined;
