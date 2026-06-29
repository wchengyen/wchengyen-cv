/**
 * Resume data — single source of truth.
 * All copy edits happen here. Sections render from this structure.
 * Sourced from resume-202605.pdf.
 */

export type Skill = {
  name: string;
  /** Tailwind text-* class for visual weight */
  tone?: "primary" | "muted" | "accent";
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export type Experience = {
  company: string;
  role: string;
  /** ISO 8601 month — `YYYY-MM` */
  start: string;
  /** ISO 8601 month — `YYYY-MM` or `"Present"` */
  end: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
  /** Optional link to a demo, repo, or case study */
  link?: { label: string; href: string };
};

export type Education = {
  school: string;
  schoolEn: string;
  department: string;
  period: string;
};

export type Language = {
  name: string;
  level: string;
};

export const profile = {
  name: "Weng-Hsiang Cheng",
  nameZh: "鄭文祥",
  title: "Senior Backend / Platform Engineer",
  location: "Taipei, Taiwan",
  email: "wchengyen@gmail.com",
  phone: "+886-910-602-378",
  github: "https://github.com/wchengyen",
  linkedin: undefined as string | undefined,
  summary:
    "Backend engineer specializing in high-traffic backend systems, distributed architecture, and LLM-integrated applications. 7+ years of experience designing RESTful APIs, microservices, and data pipelines processing millions of records daily. Proven track record of leading cross-team projects, mentoring engineers, and delivering measurable business impact through system optimization.",
} as const;

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "C# / .NET Core" },
      { name: "Python" },
      { name: "Go" },
      { name: "Node.js" },
      { name: "Java" },
    ],
  },
  {
    category: "Datastores",
    items: [
      { name: "Microsoft SQL Server" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS (EC2 / S3 / Lambda / SageMaker / Step Functions)" },
    ],
  },
  {
    category: "AI / LLM",
    items: [
      { name: "OpenAI" },
      { name: "Claude" },
      { name: "OpenRouter" },
      { name: "Ollama" },
    ],
  },
  {
    category: "LLM Patterns",
    items: [
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "Vector Databases" },
      { name: "Tool Use / Function Calling" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Advantech",
    role: "Backend Engineer",
    start: "2023-05",
    end: "Present",
    location: "Taipei, Taiwan",
    bullets: [
      "Architected and implemented multi-tenant LLM application platform using .NET 8 / ASP.NET Core, supporting 20+ internal AI use cases",
      "Built LLM integration layer with OpenAI, Claude (via OpenRouter), and Ollama, including prompt engineering, function calling, and response validation",
      "Designed and deployed RAG pipelines using vector databases, integrating with existing Microsoft SQL Server and PostgreSQL data sources",
      "Migrated legacy Kubernetes services to AWS EKS, reducing infrastructure cost by 25% and improving deployment frequency",
      "Built SageMaker ML model inference pipelines orchestrated by Step Functions for batch prediction jobs",
    ],
    stack: [
      ".NET 8",
      "ASP.NET Core",
      "Python",
      "PostgreSQL",
      "MSSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    company: "ShopBack",
    role: "Backend Engineer",
    start: "2020-07",
    end: "2023-04",
    location: "Taipei, Taiwan",
    bullets: [
      "Refactored core cashback service into a modular, distributed system using .NET Core, Go, and MongoDB, supporting 1M+ daily transactions",
      "Migrated legacy monolithic services to a microservices architecture, reducing inter-service coupling and enabling independent deployments",
      "Improved P95 API response time by 30% through database query optimization, Redis caching, and asynchronous event-driven processing",
      "Implemented distributed messaging using RabbitMQ and Apache Kafka for reliable event propagation across services",
    ],
    stack: [".NET Core", "Go", "MongoDB", "Redis", "Kafka", "RabbitMQ"],
  },
  {
    company: "KKday",
    role: "Backend Engineer",
    start: "2019-05",
    end: "2020-05",
    location: "Taipei, Taiwan",
    bullets: [
      "Designed and built core booking system services handling 10K+ daily bookings",
      "Implemented RESTful APIs and integrated with third-party payment gateways and supplier APIs",
      "Automated data pipeline to enrich product information, processing 100K+ records daily",
    ],
    stack: ["C#", ".NET Core", "MSSQL", "Redis"],
  },
  {
    company: "Uitox",
    role: "Software Engineer",
    start: "2017-10",
    end: "2019-04",
    location: "Taipei, Taiwan",
    bullets: [
      "Built backend services for cross-border e-commerce platform, supporting 50K+ SKUs and multi-currency transactions",
      "Designed and developed product catalog and inventory management APIs",
      "Built internal tools for merchant onboarding, product listing, and order management",
    ],
    stack: ["Java", "MySQL", "Redis"],
  },
];

export const projects: Project[] = [
  {
    name: "RAG Payment Support Chatbot",
    period: "2025",
    description:
      "LLM-powered customer support agent for payment inquiries, using retrieval-augmented generation over a knowledge base of transaction policies and FAQs.",
    bullets: [
      "Built RAG pipeline combining vector search (Qdrant) with keyword retrieval (BM25) and LLM reranking",
      "Implemented function calling for transactional queries (refund status, payment history) against the payment service",
      "Achieved 85% deflection rate on common payment issues, reducing Tier-1 ticket volume",
    ],
    stack: ["Python", "FastAPI", "Qdrant", "PostgreSQL", "Claude", "OpenAI"],
  },
  {
    name: "17Media Content Moderation Pipeline",
    period: "2022",
    description:
      "Distributed pipeline for moderating user-generated content (text + images) for compliance and community guidelines.",
    bullets: [
      "Built a Node.js stream processing pipeline handling 500K+ daily content items",
      "Integrated third-party AI moderation APIs and a custom rule engine for policy enforcement",
      "Built a Java admin dashboard for moderator review queues and case management",
    ],
    stack: ["Node.js", "Java", "MongoDB", "Redis", "Kafka"],
  },
  {
    name: "ShopBack Cashback Service Refactor",
    period: "2021",
    description:
      "Refactored the cashback service to a modular, distributed system to improve reliability and scale for a 1M+ daily-transaction workload.",
    bullets: [
      "Designed modular service boundaries in .NET Core and Go, with MongoDB and Redis as primary data stores",
      "Introduced event-driven messaging with RabbitMQ and Kafka for cross-service consistency",
      "Cut P95 API latency by 30% through query optimization, caching, and async processing",
    ],
    stack: [".NET Core", "Go", "MongoDB", "Redis", "Kafka", "RabbitMQ"],
  },
  {
    name: "Uitox Cross-Border E-Commerce Platform",
    period: "2018",
    description:
      "Backend services for a cross-border e-commerce platform with multi-currency support and large-scale catalog management.",
    bullets: [
      "Built catalog and inventory services in Java supporting 50K+ SKUs",
      "Implemented multi-currency pricing and settlement APIs for cross-border transactions",
      "Built internal merchant tooling for onboarding, listing, and order workflows",
    ],
    stack: ["Java", "MySQL", "Redis"],
  },
  {
    name: "LLM Batch Summarization Service",
    period: "2025",
    description:
      "Serverless batch pipeline that summarizes long-form documents (reports, tickets) using an LLM, with cost and quality controls.",
    bullets: [
      "Built the orchestration layer on AWS Step Functions, dispatching chunks to a SageMaker-hosted model",
      "Implemented map-reduce style summarization with overlap and quality scoring for 100K+ documents",
      "Added prompt-version pinning and a manual review path for low-confidence outputs",
    ],
    stack: ["Python", "AWS Step Functions", "SageMaker", "Lambda", "S3"],
  },
  {
    name: "Kubernetes Migration & Cost Optimization",
    period: "2024",
    description:
      "Migrated legacy on-prem Kubernetes workloads to AWS EKS, refactoring deployments for cost and reliability.",
    bullets: [
      "Re-architected workloads for spot / on-demand mix and right-sized node groups",
      "Cut infrastructure cost by 25% and improved deployment frequency through GitOps pipelines",
    ],
    stack: ["Kubernetes", "AWS EKS", "Helm", "ArgoCD"],
  },
];

export const education: Education = {
  school: "國立臺灣科技大學",
  schoolEn: "National Taiwan University of Science and Technology",
  department: "Department of Information Management",
  period: "2013 – 2017",
};

export const languages: Language[] = [
  { name: "Chinese", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "Japanese", level: "Basic" },
];

export const interests: string[] = [
  "Open-source LLM applications",
  "Hiking",
  "RAG architectures",
  "Ragas evaluation",
];
