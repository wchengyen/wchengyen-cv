import type { ResumeData } from "./types";

export const en: ResumeData = {
  profile: {
    name: "ChengYen Wang",
    title: "Technical Account Manager",
    location: "Beijing, China",
    email: "wchengyen0106@126.com",
    github: "https://github.com/wchengyen",
    summary:
      "Technical Account Manager with 10+ years of experience driving enterprise cloud adoption, large-scale migration, and digital transformation. Trusted advisor to senior stakeholders, leading cross-functional teams to deliver measurable business outcomes. Expertise in cloud architecture, IT operations, and AIOps, with proven success in improving system reliability, scalability, and cost efficiency. AWS-certified (6 specialties).",
  },

  skillGroups: [
    {
      category: "Cloud",
      items: [
        "AWS (6 specialties — see Certificates)",
        "Cloud Architecture & Migration",
        "Large-scale Modernization",
        "Cost Optimization (FinOps)",
        "Multi-region Resilience",
      ],
    },
    {
      category: "AIOps",
      items: [
        "AIOps Agent Platform (alert + agent automation)",
        "Incident Diagnosis Automation",
        "Runbook Execution",
        "Predictive Monitoring",
        "MTTR Reduction",
      ],
    },
    {
      category: "GenAI / AI",
      items: [
        "GenAI Solution Design",
        "LLM Inference (CPU-based deployment)",
        "Dify Workflows (H20)",
        "Stable Diffusion / AIGC",
        "Natural Language Operations",
      ],
    },
    {
      category: "Customer-facing",
      items: [
        "Technical Account Management (TAM)",
        "Pre-Sales & Post-Sales",
        "Executive Stakeholder Management",
        "Cross-functional Coordination (Support / Product / SRE)",
        "Critical Event Delivery",
      ],
    },
    {
      category: "Industries served",
      items: [
        "Internet & SaaS",
        "Gaming",
        "Healthcare",
        "Education",
        "Financial Services (ICBC, Minsheng Bank, PSBC)",
      ],
    },
  ],

  experiences: [
    {
      company: "NWCD (AWS China Region)",
      role: "Technical Account Manager",
      start: "2019-01",
      end: "Present",
      location: "Beijing, China",
      description: "Key Industries: Internet, Gaming, Healthcare, SaaS, Education",
      bullets: [
        "Spearheaded Enterprise On-Ramp Program, achieving 36% YoY customer growth and 50.8% AWS Usage fee growth by Q3 2025",
        "Directed large-scale cloud migration and modernization projects, achieving 30%+ cost reduction and improved system performance",
        "Coordinated across Support, Product, and SRE teams to deliver critical events (game launches, peak traffic), ensuring zero major incidents",
        "Resolved high-priority technical escalations, improving customer satisfaction for TAM to 100%",
      ],
      subsections: [
        {
          title: "AIOps / GenAI Innovation",
          bullets: [
            "Designed and implemented an AIOps agent platform (alert + agent automation) for intelligent operations",
            "Automated incident diagnosis and runbook execution, reducing MTTR by 40%+",
            "Enabled natural language operations and predictive monitoring across cloud environments",
            "Designed custom solutions / POCs to resolve customer pain points by building Dify workflows in H20",
            "Delivered technical webinars and blogs on operations and GenAI topics",
          ],
        },
      ],
      tags: ["AWS", "AIOps", "GenAI", "TAM", "FinOps"],
    },
    {
      company: "Thomson Reuters",
      role: "Technical Account Manager (Pre-Sales & Post-Sales)",
      start: "2015-09",
      end: "2018-12",
      location: "Beijing, China",
      description: "Key Accounts: ICBC, China Minsheng Bank, Postal Savings Bank of China",
      bullets: [
        "Defined technical strategies and architectures for major financial institutions (ICBC, Minsheng Bank, PSBC)",
        "Partnered with account teams to drive solution adoption and long-term customer success",
      ],
      tags: ["Financial Services", "Pre-Sales", "Post-Sales", "TAM"],
    },
    {
      company: "IBM",
      role: "Senior IT Specialist (Pre-Sales)",
      start: "2008-02",
      end: "2015-09",
      location: "Taipei, Taiwan",
      bullets: [
        "Delivered core banking system upgrades and architecture transformations",
        "Improved system performance, availability, and cross-region architecture resilience",
      ],
      tags: ["Core Banking", "Architecture", "Pre-Sales"],
    },
    {
      company: "Earlier Roles",
      role: "Software Engineer · Intern",
      start: "2007",
      end: "2008",
      location: "Taiwan",
      bullets: ["Software Engineer at ShineWave (2008)", "Intern at Moker (2007)"],
      tags: ["Software Engineering"],
    },
  ],

  certificates: [
    { name: "AWS Certified Developer – Associate" },
    { name: "AWS Certified Solutions Architect – Associate" },
    {
      name: "AWS Certified Solutions Architect – Professional",
      code: "SAP",
    },
    { name: "AWS Certified Big Data – Specialty", code: "BDS" },
    { name: "AWS Certified Database – Specialty", code: "DBS" },
    { name: "AWS Certified Security – Specialty", code: "SCS" },
    { name: "AWS Certified Machine Learning – Specialty", code: "MLS" },
  ],

  projects: [
    {
      name: "AIOps Agent Platform",
      period: "2019 – Present",
      description:
        "Multi-component agent platform for intelligent cloud operations — automated alert triage, incident diagnosis, and runbook execution.",
      bullets: [
        "Built the platform while serving as TAM at NWCD, where it underpins incident response for enterprise customers across multiple industries",
        "Reduced MTTR by 40%+ through automated diagnosis and runbook execution",
        "Enabled natural-language operations and predictive monitoring across cloud environments",
      ],
      tags: ["AWS", "AIOps", "Agents", "MTTR"],
      link: {
        label: "github.com/wchengyen/kiro-devops",
        href: "https://github.com/wchengyen/kiro-devops",
      },
    },
    {
      name: "Dify Workflow POCs on H20 (Enterprise Customers)",
      period: "2024",
      description:
        "Custom GenAI POCs built with Dify on H20 to address specific enterprise pain points.",
      bullets: [
        "Designed workflow-based solutions for operational use cases (alert triage, knowledge retrieval, customer support)",
        "Translated customer pain points into deployable, low-friction GenAI workflows",
      ],
      tags: ["Dify", "H20", "GenAI", "POC"],
    },
    {
      name: "CPU-based LLM Inference Webinar",
      period: "2024-08",
      description:
        "Public technical session: deploying LLM inference services on CPU-only infrastructure for cost-sensitive workloads.",
      bullets: [
        "Open-sourced the deployment pattern via webinar content",
        "Targeted teams that need LLM capability without GPU spend",
      ],
      tags: ["LLM", "Inference", "CPU", "Webinar"],
    },
    {
      name: "Stable Diffusion / AIGC Webinar",
      period: "2023-04",
      description:
        "Public technical session: hands-on with Stable Diffusion for image generation, demystifying AIGC for enterprise audiences.",
      bullets: [
        "Drove adoption of AIGC techniques inside customer engineering teams",
        "Cited internally as a reference for early GenAI enablement",
      ],
      tags: ["Stable Diffusion", "AIGC", "Webinar"],
    },
    {
      name: "NWCD Public Blog: 建构自动化运维手册和操作手册实现卓越运营",
      period: "2022-12",
      description:
        "Authored blog on building automated operations and runbooks to achieve operational excellence — published on the NWCD public blog.",
      bullets: [
        "Codified a practical pattern for runbook automation",
        "Drew from real customer engagements at NWCD",
      ],
      tags: ["Blog", "Runbooks", "Operations"],
    },
    {
      name: "AWS China Customer Story (Public Reference)",
      period: "2024",
      description:
        "Public customer-success story on the AWS China (NWCD) website, covering cost reduction and efficiency gains for an enterprise customer.",
      bullets: [
        "Cited as a TAM-led outcome — public, named reference",
      ],
      tags: ["Customer Story", "Public Reference"],
      link: {
        label: "amazonaws.cn customer-stories",
        href: "https://www.amazonaws.cn/customer-stories/reduce-cost-and-increase-efficiency/",
      },
    },
  ],

  education: [
    {
      school: "University of Florida – Warrington College of Business",
      schoolEn: "University of Florida – Warrington College of Business",
      department: "Master of Science in Decision & Information Science",
      period: "Dec 2007",
      detail: "GPA: 3.66 / 4.0 · Teaching Assistant for Database Systems (1 year)",
    },
    {
      school: "National Central University (NCU)",
      schoolEn: "National Central University (NCU)",
      department: "Bachelor of Business Administration in Management Information Systems",
      period: "Fall 2003",
      detail: "Managed IT infrastructure for the School of Management (2 years)",
    },
  ],

  languages: [
    { name: "Mandarin", level: "Proficient" },
    { name: "English", level: "Proficient" },
  ],

  ui: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      certificates: "Certificates",
      education: "Education",
      publicSharing: "Public Sharing",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, my name is",
      cta: "Get in touch",
      certsCta: "AWS certs (7)",
      githubCta: "GitHub",
      statBasedIn: "Based in",
      statEmail: "Email",
      statFocus: "Focus",
    },
    about: {
      eyebrow: "About",
      title: "Who I am",
      atAGlance: "At a glance",
      glanceExperience: "Experience",
      glanceCurrent: "Current",
      glanceFocus: "Focus",
      glanceCerts: "AWS certs",
      glanceLanguages: "Languages",
    },
    experience: {
      eyebrow: "Where I've worked",
      title: "Experience",
    },
    skills: {
      eyebrow: "What I do",
      title: "Skills & Focus",
      languagesHeading: "Languages",
    },
    certificates: {
      eyebrow: "AWS",
      title: "Certificates",
    },
    education: {
      eyebrow: "Background",
      title: "Education",
    },
    publicSharing: {
      eyebrow: "Speaking & Writing",
      title: "Public Sharing",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Contact",
      blurb: "I'm a Technical Account Manager focused on enterprise cloud adoption, AIOps, and GenAI enablement. For collaboration, speaking, or consulting — the fastest way to reach me is by email. I usually reply within a couple of business days.",
    },
    footer: {
      copyright: "All rights reserved.",
      builtWith: "Built with Vite + React + Tailwind. Deployed on GitHub Pages.",
    },
    themeToggle: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    languageToggle: {
      label: "Switch language",
    },
  },
};
