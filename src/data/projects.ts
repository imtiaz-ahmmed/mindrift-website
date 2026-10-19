import { ProjectCaseStudy } from "@/types";

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "lyfe-attend",
    slug: "lyfe-attend",
    title: "LYFE Attend — Mobile Workforce & GPS Attendance Platform",
    category: "Workforce Management / GPS Attendance",
    categorySlug: "workforce-management",
    summary:
      "A location-aware workforce attendance solution uniting a cross-platform mobile application for distributed teams with a real-time web administration portal for enterprise oversight.",
    status: "Enterprise Deployment",
    accentColor: "#1877F2",
    mockupType: "mobile",
    problemStatement:
      "Organizations managing distributed field personnel, branch locations, and remote sites frequently struggle with buddy-punching, fraudulent GPS spoofing, and disjointed manual attendance logs that take days to reconcile with payroll.",
    solutionOverview:
      "Mindrift architected LYFE Attend to deliver tamper-resistant, location-validated attendance check-ins. The system verifies employee presence within pre-configured geofence perimeters, logs offline timestamps in low-connectivity areas, and surfaces unified workforce telemetry to branch managers through a responsive web portal.",
    keyFeatures: [
      "Precision geofence check-ins with multi-layered GPS anti-spoofing detection",
      "Offline-first check-in queue with cryptographic signature verification upon reconnect",
      "Enterprise management portal for shift scheduling, leave tracking, and branch rosters",
      "Automated attendance anomaly flagging (distance mismatch, repeated offline syncs)",
      "Hardware access-control integration hooks for biometric turnstiles and RFID readers",
      "Exportable payroll-ready attendance reports with automated overtime calculations",
    ],
    architectureHighlights: [
      "Cross-platform mobile client built with React Native / Flutter architecture",
      "High-throughput REST API backend running on Node.js / NestJS with PostgreSQL",
      "PostGIS spatial queries validating coordinate containment inside company site polygons",
      "Redis caching layer handling concurrent morning rush hour check-in surges",
      "Role-based access control (Branch Manager, Regional Lead, Corporate HR, Super Admin)",
    ],
    techStack: [
      "React Native",
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Docker",
      "AWS ECS",
    ],
    challengesAndMitigations: [
      {
        challenge: "Employees attempting to use mock location developer apps on Android.",
        mitigation: "Integrated native Android/iOS security checks checking mock location flags, cell tower triangulation, and network IP proximity.",
      },
      {
        challenge: "Subterranean work sites and remote facilities with zero cellular reception.",
        mitigation: "Implemented an encrypted local SQLite queue that stores tamper-evident check-in events and auto-syncs upon regaining connectivity.",
      },
    ],
    resultsOrImpact: [
      "Eliminated attendance reconciliation delays, reducing monthly payroll prep from 4 days to 2 hours",
      "100% verified location compliance across multiple corporate branches",
      "Support for over 5,000+ daily employee check-ins within a 30-minute peak morning window",
      "Seamless integration pipeline for payroll export formats (CSV, Excel, ERP API)",
    ],
    relatedServiceSlugs: ["software-engineering", "gis-location-intelligence", "enterprise-systems"],
  },
  {
    id: "geoconnect",
    slug: "geoconnect",
    title: "GeoConnect — Spatial Point-of-Interest & Geocoding Engine",
    category: "GIS & Location Intelligence",
    categorySlug: "gis-location",
    summary:
      "A high-throughput geospatial platform built for location data indexing, structured geographic search, geocoding, and interactive spatial analytics.",
    status: "Production",
    accentColor: "#0BCB91",
    mockupType: "gis",
    problemStatement:
      "Querying millions of geographical points of interest (POIs) with traditional relational queries causes massive database slowdowns, high latency for end users, and prohibitive third-party geocoding API bills.",
    solutionOverview:
      "GeoConnect provides an optimized spatial indexing architecture powered by PostgreSQL, PostGIS, and Redis geospatial indexes. It enables sub-15ms radius searches, polygon containment filtering, and reverse geocoding across vast point-of-interest databases without relying on expensive external API quotas.",
    keyFeatures: [
      "Sub-15ms radius and k-nearest neighbor (k-NN) spatial search across dense urban zones",
      "Custom geocoding and reverse geocoding engine matching addresses to administrative polygons",
      "Point-of-interest taxonomy management with multi-category hierarchical tagging",
      "Interactive WebGL map canvas supporting client-side clustering of 100,000+ points",
      "Automated spatial data ingestion pipelines supporting GeoJSON, KML, and ESRI Shapefiles",
      "Spatial density heatmaps and service coverage radius analytics",
    ],
    architectureHighlights: [
      "PostGIS R-Tree and GiST indexing for fast 2D spatial filtering",
      "Vector tile server delivering Mapbox Vector Tiles (MVT) dynamically",
      "Redis Geospatial sorted sets for ultra-low latency proximity lookups",
      "Automated deduplication and coordinate normalization pipeline with Python & GDAL",
      "Next.js administrative dashboard featuring MapLibre GL for real-time visual inspection",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Python",
      "GDAL",
      "MapLibre GL",
      "Docker",
    ],
    challengesAndMitigations: [
      {
        challenge: "Rendering tens of thousands of map pins on mobile web browsers without frame drops.",
        mitigation: "Engineered server-side vector tile clustering and dynamic level-of-detail (LOD) simplification using MapLibre WebGL shaders.",
      },
      {
        challenge: "Inconsistent address formatting and spelling variations in raw geographic data.",
        mitigation: "Constructed a custom fuzzy text search pipeline utilizing PostgreSQL trigram indexing and Levenshtein distance matching.",
      },
    ],
    resultsOrImpact: [
      "Spatial query response times consistently below 15ms under high concurrency",
      "Over 90% reduction in external commercial geocoding API costs",
      "Successful indexing and querying of 1.2M+ geographic points of interest",
      "Zero downtime during daily automated geospatial data delta updates",
    ],
    relatedServiceSlugs: ["gis-location-intelligence", "database-engineering", "software-engineering"],
  },
  {
    id: "leave-management-system",
    slug: "leave-management-system",
    title: "Enterprise Leave Management & HR Workflow Engine",
    category: "Enterprise Software / HR Automation",
    categorySlug: "enterprise-software",
    summary:
      "A structured leave-management and approval workflow platform enforcing complex organizational policies, multi-tier approvals, and seamless attendance integration.",
    status: "Enterprise Deployment",
    accentColor: "#1877F2",
    mockupType: "dashboard",
    problemStatement:
      "Enterprises operating across multiple departments and labor laws face chaotic leave requests, uncoordinated email approvals, calculation discrepancies in accrued balances, and compliance risks during audits.",
    solutionOverview:
      "Mindrift developed a robust, policy-driven Leave Management System. Featuring a deterministic state machine for multi-tier manager approvals, real-time balance accrual calculations, holiday calendar synchronization, and direct integration with payroll and attendance systems.",
    keyFeatures: [
      "Configurable multi-level approval hierarchies (Team Lead -> Department Head -> HR Director)",
      "Automated leave balance accrual engine accounting for tenure, rollover caps, and proration",
      "Business-rule validation preventing overlapping requests, blackout dates, and negative balances",
      "Departmental calendar view highlighting team capacity and potential staffing shortages",
      "Automated notification triggers (Slack, Microsoft Teams, Email) with one-click approval links",
      "Audit-proof historical trail logging every status change, comment, and override timestamp",
    ],
    architectureHighlights: [
      "State-machine workflow engine implemented with deterministic transitions and lockouts",
      "Event-driven architecture using Redis BullMQ queues for asynchronous notifications and emails",
      "Fine-grained Row Level Security (RLS) ensuring strict privacy between departments",
      "Fast, accessible Next.js web application with keyboard navigation and dark/light modes",
      "RESTful webhook dispatchers pushing approved leaves directly into payroll and ERP systems",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
    challengesAndMitigations: [
      {
        challenge: "Complex policy variations across regional subsidiaries with differing legal holidays.",
        mitigation: "Designed a modular policy rule-builder allowing HR admins to assign custom policy sets by department, country, and contract type without code changes.",
      },
      {
        challenge: "High email overhead and forgotten approval requests stalling employee schedules.",
        mitigation: "Built interactive email action cards and Slack bot integrations allowing managers to approve or reject requests in a single tap without logging in.",
      },
    ],
    resultsOrImpact: [
      "Approval turnaround times dropped from an average of 48 hours to under 4 hours",
      "100% elimination of manual balance calculation discrepancies at fiscal year-end",
      "Standardized compliance and audit reporting ready for export in 1 click",
      "Adopted by multi-branch enterprises managing over 2,000+ staff members",
    ],
    relatedServiceSlugs: ["enterprise-systems", "software-engineering", "database-engineering"],
  },
  {
    id: "cloud-core-finops",
    slug: "cloud-core-finops",
    title: "Cloud Infrastructure Modernization & FinOps Architecture",
    category: "Cloud, DevOps & Platform Engineering",
    categorySlug: "cloud-devops",
    summary:
      "Automated cloud provisioning, Kubernetes cluster hardening, and CI/CD modernization delivering high availability and reduced cloud expenditures.",
    status: "Production",
    accentColor: "#0BCB91",
    mockupType: "cloud",
    problemStatement:
      "Growing tech organizations often suffer from unmanaged AWS sprawl, manual server configurations, slow deployment cycles, and runaway monthly infrastructure bills.",
    solutionOverview:
      "Mindrift engineered an immutable Infrastructure as Code (IaC) foundation using Terraform and AWS EKS. We implemented GitOps deployment pipelines, centralized telemetry, and automated container rightsizing to maximize system resiliency while curbing operational waste.",
    keyFeatures: [
      "Modular Terraform infrastructure blueprint managing multi-region VPCs and subnets",
      "Hardened AWS EKS cluster deployment with automated node autoscaling (Karpenter)",
      "Zero-downtime blue/green deployment pipelines powered by GitHub Actions and ArgoCD",
      "Centralized observability stack combining Prometheus, Grafana, and AWS CloudWatch",
      "FinOps optimization scripts identifying unattached EBS volumes and underutilized compute",
      "Automated secrets rotation using HashiCorp Vault and AWS Secrets Manager",
    ],
    architectureHighlights: [
      "Declarative GitOps architecture where git repository is the single source of truth",
      "Strict least-privilege IAM roles tied directly to Kubernetes service accounts (IRSA)",
      "Egress filtering and network security policies preventing lateral pod traversal",
      "Multi-AZ database redundancy with automated failover testing and PITR snapshots",
    ],
    techStack: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "PostgreSQL RDS",
    ],
    challengesAndMitigations: [
      {
        challenge: "Migrating legacy stateful workloads into containers without service interruptions.",
        mitigation: "Executed a phased strangler pattern migration, redirecting traffic incrementally via AWS ALB weighted routing.",
      },
      {
        challenge: "Volatile traffic spikes causing delayed pod scheduling.",
        mitigation: "Configured Karpenter just-in-time node provisioning with warm spot capacity pools, reducing scale-up latency to sub-45 seconds.",
      },
    ],
    resultsOrImpact: [
      "Deployment frequency increased from weekly releases to multiple daily releases",
      "38% reduction in recurring monthly AWS infrastructure expenditures",
      "Achieved 99.99% service availability across peak operational cycles",
      "Disaster recovery RTO reduced from 6 hours to under 15 minutes",
    ],
    relatedServiceSlugs: ["cloud-devops", "cybersecurity", "database-engineering"],
  },
  {
    id: "secure-vault-iam",
    slug: "secure-vault-iam",
    title: "Zero-Trust Identity & Access Management Gateway",
    category: "Cybersecurity & Identity",
    categorySlug: "cybersecurity",
    summary:
      "A centralized authentication and access gateway providing fine-grained role-based access control, SSO, and automated security posture verification.",
    status: "Enterprise Deployment",
    accentColor: "#1877F2",
    mockupType: "security",
    problemStatement:
      "Legacy enterprises operating disparate software systems face identity sprawl, unauthorized credential sharing, and difficulty revoking access when contractors or employees leave.",
    solutionOverview:
      "Mindrift designed a unified Zero-Trust IAM Gateway implementing OAuth 2.0 and OpenID Connect. The gateway enforces contextual multi-factor authentication, device posture checks, and automated provisioning/deprovisioning across all internal web services.",
    keyFeatures: [
      "Universal Single Sign-On (SSO) bridging modern cloud applications and legacy web portals",
      "Context-aware MFA requiring biometric verification upon high-risk login attempts",
      "Fine-grained RBAC & ABAC permissions engine evaluating user roles and IP location",
      "SCIM protocol implementation for automated employee onboarding and instant deprovisioning",
      "Tamper-resistant security audit log streaming to centralized SIEM in real time",
      "Automated session invalidation across all federated apps upon privilege modification",
    ],
    architectureHighlights: [
      "High-availability auth microservice with token signing via HSM-backed cryptographic keys",
      "Redis cluster for high-speed distributed session tracking and token revocation lists",
      "Strict Content Security Policy (CSP), CORS, and HTTP security header enforcement",
      "Dockerized microservice deployed behind Cloudflare WAF with rate limiting",
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "OAuth 2.0",
      "OIDC",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Cloudflare WAF",
      "Semgrep",
    ],
    challengesAndMitigations: [
      {
        challenge: "Synchronizing user directories across on-premise Active Directory and cloud SaaS.",
        mitigation: "Built a secure SCIM bridge connector that polls and validates directory deltas via encrypted TLS 1.3 channels.",
      },
      {
        challenge: "Sub-millisecond token verification requirements on high-throughput microservices.",
        mitigation: "Implemented stateless JWT verification with localized public key caching (JWKS) to avoid auth server bottlenecks.",
      },
    ],
    resultsOrImpact: [
      "100% elimination of orphaned accounts following automated SCIM deprovisioning",
      "Single sign-on adopted across 14 distinct enterprise business tools",
      "Seamlessly passed external vendor cybersecurity and compliance audits",
      "Average authentication verification latency under 3 milliseconds",
    ],
    relatedServiceSlugs: ["cybersecurity", "enterprise-systems", "cloud-devops"],
  },
];
