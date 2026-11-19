export type Solution = {
  slug: string;
  name: string;
  problem: string;
  solution: string;
  technologies: string[];
  value: string[];
  services: string[];
};

export const solutions: Solution[] = [
  {
    slug: "cloud-modernization",
    name: "Cloud Modernization",
    problem:
      "Applications and infrastructure that were built for data centers are costly to run, slow to change and hard to scale.",
    solution:
      "We assess your estate, design a secure cloud foundation and move workloads using the right path for each: rehost, replatform, refactor or retire.",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Kubernetes"],
    value: ["Greater agility", "Improved resilience", "Cost transparency"],
    services: ["cloud-services", "devops"],
  },
  {
    slug: "enterprise-ai-enablement",
    name: "Enterprise AI Enablement",
    problem:
      "Organizations see opportunity in AI but lack a clear path from experiments to governed, integrated solutions.",
    solution:
      "We help identify use cases, prepare data, build and integrate solutions, and define governance practices for responsible adoption.",
    technologies: ["Generative AI", "Machine Learning", "Python", "Workflow Orchestration"],
    value: ["Reduced manual effort", "Better access to knowledge", "Responsible scaling"],
    services: ["ai-automation", "data-analytics"],
  },
  {
    slug: "data-platform-modernization",
    name: "Data Platform Modernization",
    problem:
      "Siloed data, slow pipelines and inconsistent definitions limit trust and slow decision-making.",
    solution:
      "We design modern data architectures with automated pipelines, governed models and self-service analytics.",
    technologies: ["Snowflake", "Databricks", "PostgreSQL", "Power BI"],
    value: ["Trusted reporting", "Faster insight", "A foundation for AI"],
    services: ["data-analytics", "cloud-services"],
  },
  {
    slug: "application-modernization",
    name: "Application Modernization",
    problem:
      "Legacy applications are difficult to maintain, integrate and extend, and they hold back the business.",
    solution:
      "We modernize incrementally by decomposing, re-platforming or rebuilding components, supported by APIs, automated testing and CI/CD.",
    technologies: ["Java", ".NET", "React", "Node.js", "Docker"],
    value: ["Lower maintenance burden", "Faster change", "Better integration"],
    services: ["software-development", "digital-transformation", "devops"],
  },
  {
    slug: "business-process-automation",
    name: "Business Process Automation",
    problem:
      "Manual, repetitive workflows consume time, introduce errors and slow customer and employee experiences.",
    solution:
      "We map processes, remove unnecessary steps and automate the rest with workflow orchestration, integration and intelligent document handling.",
    technologies: ["Intelligent Automation", "Workflow Orchestration", "Generative AI", "Salesforce", "Microsoft Dynamics 365"],
    value: ["Fewer manual handoffs", "Improved consistency", "Time returned to teams"],
    services: ["ai-automation", "enterprise-applications"],
  },
  {
    slug: "enterprise-integration",
    name: "Enterprise Integration",
    problem:
      "Applications that cannot exchange data reliably force duplicate entry and conflicting records.",
    solution:
      "We design API-led and event-driven integration, aligning master data and monitoring flows so systems work as one.",
    technologies: ["REST APIs", "Event streaming", "Node.js", "Java", ".NET"],
    value: ["Consistent data", "Simpler operations", "Faster onboarding of new systems"],
    services: ["enterprise-applications", "software-development"],
  },
];
