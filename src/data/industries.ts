import { Industry } from "@/types";

export const industriesData: Industry[] = [
  {
    id: "tech-saas",
    slug: "tech-saas",
    name: "Technology & SaaS",
    tagline: "Accelerating engineering velocity for high-growth digital product teams.",
    description:
      "We partner with software companies and tech founders to design, build, and scale multi-tenant architectures, high-performance web apps, and automated platform infrastructure.",
    challenges: [
      "Scaling architecture to handle exponential user and data growth",
      "Managing technical debt while simultaneously delivering new features",
      "Building enterprise features like SSO, audit logs, and custom RBAC",
    ],
    solutions: [
      "Modular monoliths and microservice architectures built for high concurrency",
      "Automated CI/CD pipelines and Infrastructure as Code",
      "Next.js full-stack development with optimized Core Web Vitals",
    ],
    relevantServices: ["software-engineering", "cloud-devops", "database-engineering"],
    keyHighlight: "Cloud-native architectures engineered for rapid product iterations and enterprise tier scale.",
    iconName: "Code",
  },
  {
    id: "fintech-financial-services",
    slug: "financial-services",
    name: "Financial Services",
    tagline: "Secure, compliant, and fault-tolerant financial software engineering.",
    description:
      "We engineer mission-critical systems where data integrity, low latency, and zero-compromise security are non-negotiable requirements.",
    challenges: [
      "Strict data privacy standards and regulatory compliance demands",
      "Zero tolerance for transactional discrepancies or calculation latency",
      "Defending complex attack surfaces against credential abuse and fraud",
    ],
    solutions: [
      "ACID-compliant PostgreSQL architectures with immutable audit logs",
      "Zero-trust authentication, IAM role enforcement, and data encryption at rest",
      "Automated compliance reporting pipelines and real-time fraud telemetry",
    ],
    relevantServices: ["cybersecurity", "database-engineering", "enterprise-systems"],
    keyHighlight: "Tamper-evident transactional systems with deterministic calculation workflows.",
    iconName: "Shield",
  },
  {
    id: "healthcare-healthtech",
    slug: "healthcare",
    name: "Healthcare & Health Technology",
    tagline: "Confidential, reliable digital healthcare workflows and patient systems.",
    description:
      "We design digital health applications, clinic management software, and patient communication portals emphasizing data privacy, accessibility, and uptime.",
    challenges: [
      "Safeguarding sensitive patient health information and medical records",
      "Interoperability between antiquated clinic databases and modern web apps",
      "High availability requirements for clinical operations and triage tools",
    ],
    solutions: [
      "Encrypted end-to-end data pipelines with fine-grained access audits",
      "Modern FHIR/REST API gateways integrating with hospital records",
      "Accessible, WCAG 2.2 compliant web and mobile patient portals",
    ],
    relevantServices: ["software-engineering", "cybersecurity", "enterprise-systems"],
    keyHighlight: "Encrypted, high-uptime digital health platforms engineered with rigorous privacy safeguards.",
    iconName: "Activity",
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Scalable omni-channel platforms, inventory sync, and conversion-driven UX.",
    description:
      "We build robust e-commerce architectures and internal operations software connecting inventory management, POS terminals, and customer touchpoints.",
    challenges: [
      "Severe traffic surges during seasonal promotional campaigns",
      "Inventory synchronization mismatches between physical stores and online channels",
      "Slow page speeds causing cart abandonment and lost revenue",
    ],
    solutions: [
      "Headless e-commerce frontends delivering sub-second page transitions",
      "Real-time event-driven inventory updates with Redis and message brokers",
      "Automated order routing and multi-location fulfillment workflows",
    ],
    relevantServices: ["software-engineering", "cloud-devops", "enterprise-systems"],
    keyHighlight: "High-performance omni-channel commerce architectures engineered for massive flash-sale concurrency.",
    iconName: "ShoppingBag",
  },
  {
    id: "logistics-transportation",
    slug: "logistics-transportation",
    name: "Logistics & Transportation",
    tagline: "Location intelligence, fleet tracking, and automated dispatch operations.",
    description:
      "We engineer GIS-powered logistics portals, route optimization tools, and asset tracking platforms providing real-time operational visibility.",
    challenges: [
      "Tracking assets and fleets across regions with intermittent connectivity",
      "High API costs associated with legacy mapping and geocoding providers",
      "Manual dispatch scheduling resulting in idle transit hours",
    ],
    solutions: [
      "PostGIS spatial indexing and custom geocoding engines (e.g. GeoConnect)",
      "Offline-capable mobile apps with cryptographic GPS check-in logging",
      "Automated route calculation and proximity-based dispatch suggestions",
    ],
    relevantServices: ["gis-location-intelligence", "software-engineering", "database-engineering"],
    keyHighlight: "Sub-15ms spatial query pipelines and location tracking that drastically cut external API overhead.",
    iconName: "Truck",
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    tagline: "Modernizing shop-floor oversight, quality metrics, and supply chain tracking.",
    description:
      "We replace paper-based quality checks and legacy terminal interfaces with intuitive digital dashboards and equipment maintenance trackers.",
    challenges: [
      "Siloed machinery data inaccessible to executive decision makers",
      "Downtime caused by unplanned equipment failures",
      "Fragmented supply chain tracking and inventory reconciliation",
    ],
    solutions: [
      "Custom internal operations portals for shift and production management",
      "Telemetry aggregation pipelines feeding centralized maintenance dashboards",
      "ERP synchronization bridging warehouse inventory with shop-floor orders",
    ],
    relevantServices: ["enterprise-systems", "ai-data-intelligence", "software-engineering"],
    keyHighlight: "Unified internal business tools that bring real-time clarity to industrial shop-floor operations.",
    iconName: "Factory",
  },
  {
    id: "education",
    slug: "education",
    name: "Education & EdTech",
    tagline: "Interactive digital learning platforms and institutional management systems.",
    description:
      "We build scalable educational portals, student information systems, and assessment tools engineered for engagement and reliability.",
    challenges: [
      "Supporting large concurrent exam submissions without system crashes",
      "Ensuring equitable accessibility across varying devices and connection speeds",
      "Managing complex academic grading, transcripts, and faculty workflows",
    ],
    solutions: [
      "Load-tested serverless backends designed for high-concurrency exam windows",
      "Lightweight, accessible web interfaces optimized for mobile students",
      "Automated institutional grading pipelines and student portal dashboards",
    ],
    relevantServices: ["software-engineering", "cloud-devops", "database-engineering"],
    keyHighlight: "Scalable learning platforms tested to withstand thousands of concurrent student submissions.",
    iconName: "GraduationCap",
  },
  {
    id: "government-public-services",
    slug: "government-public-services",
    name: "Government & Public Services",
    tagline: "Accessible, transparent, and resilient public sector digital solutions.",
    description:
      "We develop citizen portals, spatial planning maps, and administrative workflows with unyielding focus on accessibility, security, and long-term maintainability.",
    challenges: [
      "Rigid procurement timelines and strict accessibility (WCAG AA/AAA) mandates",
      "Public scrutiny requiring complete transparency and auditability",
      "Safeguarding citizen records against hostile automated attacks",
    ],
    solutions: [
      "Zero-dependency semantic HTML and accessible UI architectures",
      "Immutable audit trails recording administrative status modifications",
      "Hardened cloud infrastructure and defensive cybersecurity controls",
    ],
    relevantServices: ["gis-location-intelligence", "cybersecurity", "enterprise-systems"],
    keyHighlight: "Standards-compliant, secure digital infrastructure serving civic organizations and citizens.",
    iconName: "Building2",
  },
  {
    id: "workforce-human-resources",
    slug: "workforce-management",
    name: "Human Resources & Workforce Management",
    tagline: "Automated attendance, multi-tiered approvals, and payroll data alignment.",
    description:
      "We eliminate HR friction with automated attendance tracking, mobile geofencing, policy-driven leave engines, and streamlined employee workflows.",
    challenges: [
      "Time theft and inaccurate manual timecards across multi-branch teams",
      "Complex multi-tier leave approval delays stalling operations",
      "Tedious end-of-month payroll reconciliation and spreadsheet errors",
    ],
    solutions: [
      "Tamper-resistant GPS geofence mobile check-ins (LYFE Attend)",
      "Automated state-machine leave approval workflows and balance tracking",
      "Instant payroll export integrations with major accounting systems",
    ],
    relevantServices: ["enterprise-systems", "software-engineering", "gis-location-intelligence"],
    keyHighlight: "Automated workforce attendance and leave systems that slash payroll preparation time by up to 80%.",
    iconName: "Users",
  },
];
