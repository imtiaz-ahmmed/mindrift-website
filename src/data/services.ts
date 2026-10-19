import { ServiceCategory } from "@/types";

export const servicesData: ServiceCategory[] = [
  {
    id: "software-engineering",
    slug: "software-engineering",
    title: "Software & Digital Product Engineering",
    tagline: "High-performance web, mobile, and enterprise software built with precision.",
    shortDescription:
      "From greenfield SaaS platforms to mission-critical business systems, we engineer resilient software architectures using modern TypeScript, React, Next.js, Node.js, and cloud-native frameworks.",
    fullDescription:
      "We design, build, and scale end-to-end digital products that solve complex commercial problems. Our engineering philosophy centers on clean code, modular architecture, verifiable security, automated testing, and long-term maintainability.",
    iconName: "Code2",
    subServices: [
      {
        title: "Custom Software Development",
        description: "Tailored software systems engineered from the ground up to match unique business logic and operational demands.",
      },
      {
        title: "Web Application Development",
        description: "Fast, accessible, and responsive single-page and server-rendered web applications built on modern React and Next.js.",
      },
      {
        title: "Mobile Application Development",
        description: "Cross-platform mobile applications for iOS and Android delivering near-native performance, offline support, and smooth user flows.",
      },
      {
        title: "SaaS Product Development",
        description: "Multi-tenant SaaS architectures featuring scalable subscription tiers, role-based access control, billing integration, and telemetry.",
      },
      {
        title: "Enterprise Application Development",
        description: "Robust line-of-business applications engineered for high concurrency, fault tolerance, and tight compliance.",
      },
      {
        title: "API Development & Integration",
        description: "Restful, GraphQL, and event-driven APIs built with strict schema contracts, rate limiting, and comprehensive OpenAPI documentation.",
      },
      {
        title: "Legacy System Modernization",
        description: "Strategic refactoring and incremental decoupling of monolithic legacy architectures into maintainable microservices or modular monoliths.",
      },
      {
        title: "UI/UX Design & Prototyping",
        description: "Design systems, clickable prototypes, and design tokens focused on enterprise workflows, clarity, and rapid cognitive comprehension.",
      },
      {
        title: "Quality Assurance & Test Automation",
        description: "End-to-end automated testing pipelines covering unit, integration, visual regression, and performance benchmarks.",
      },
    ],
    capabilities: [
      "Modular monolith & microservices architecture",
      "Full-stack TypeScript & Next.js systems",
      "Cross-platform mobile application development",
      "OpenAPI 3.0 / REST / GraphQL contract design",
      "Automated CI/CD test suites & regression testing",
      "Design system creation with Tailwind CSS & Figma",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Tailwind CSS",
      "React Native",
      "Docker",
      "Vitest",
      "Playwright",
    ],
    businessValue: [
      "Accelerated time-to-market without compromising code quality",
      "Lower total cost of ownership through decoupled, maintainable codebases",
      "Seamless scaling to support hundreds of thousands of concurrent users",
      "Strict data integrity and compliance ready from day one",
    ],
    deliverables: [
      "Fully documented, typed source code repository",
      "Automated testing suite with minimum 80% critical path coverage",
      "Interactive component design system & documentation",
      "Production deployment pipelines & container images",
      "Architecture blueprints and API contracts",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Technical Discovery & Scope",
        description: "Analyze technical constraints, user stories, performance targets, and data structures.",
      },
      {
        step: "02",
        title: "Architecture & System Design",
        description: "Produce component diagrams, database schemas, API schemas, and interactive wireframes.",
      },
      {
        step: "03",
        title: "Iterative Sprint Execution",
        description: "Bi-weekly agile sprints delivering demoable, fully tested vertical slices of functionality.",
      },
      {
        step: "04",
        title: "Verification & Production Readiness",
        description: "Rigorous load testing, security review, cross-browser audits, and zero-downtime deployment.",
      },
    ],
    faqs: [
      {
        question: "Do you build custom platforms or use off-the-shelf templates?",
        answer: "Every solution we deliver is custom-engineered to your organization's exact business requirements, security standards, and operational workflows.",
      },
      {
        question: "How do you handle intellectual property ownership?",
        answer: "Upon project completion and sign-off, all intellectual property, source code, designs, and architectural artifacts belong 100% to your organization.",
      },
      {
        question: "Can our internal engineering team contribute alongside Mindrift?",
        answer: "Yes. We frequently embed with client engineering teams, following your Git branching models, style guides, and Jira/Linear boards.",
      },
    ],
    relatedProjectSlugs: ["firstchoice-epos", "yumapos-mobile-suite", "odyssey-stream"],
  },
  {
    id: "ai-data-intelligence",
    slug: "ai-data-intelligence",
    title: "AI, Machine Learning & Data Intelligence",
    tagline: "Practical, enterprise-ready AI solutions that automate workflows and unlock proprietary data.",
    shortDescription:
      "We design generative AI applications, intelligent agent workflows, retrieval-augmented generation (RAG) systems, and predictive models grounded in verifiable corporate data.",
    fullDescription:
      "Rather than applying AI as a superficial novelty, Mindrift helps organizations deploy specialized AI systems that measurably streamline operations. We build secure RAG pipelines, fine-tuned models, autonomous workflow agents, and predictive algorithms while prioritizing privacy and hallucination mitigation.",
    iconName: "Cpu",
    subServices: [
      {
        title: "Enterprise AI Solutions",
        description: "Custom AI integrations that solve specific domain hurdles, from document processing to automated decision support.",
      },
      {
        title: "Generative AI & LLM Integration",
        description: "Production-grade integration of state-of-the-art models (OpenAI, Claude, open-weight models) with guardrails and deterministic outputs.",
      },
      {
        title: "Intelligent AI Agent Development",
        description: "Multi-agent systems capable of multi-step reasoning, external tool execution, API calls, and self-evaluating task completion.",
      },
      {
        title: "RAG & Vector Search Systems",
        description: "Enterprise knowledge retrieval pipelines utilizing vector embeddings, hybrid search, and semantic ranking over internal repositories.",
      },
      {
        title: "Predictive Analytics & ML Solutions",
        description: "Statistical and machine learning models for demand forecasting, anomaly detection, risk assessment, and customer churn analysis.",
      },
      {
        title: "Data Engineering & Pipelines",
        description: "High-throughput ETL/ELT pipelines transforming disparate unstructured data streams into clean analytical warehouses.",
      },
      {
        title: "Workflow Automation",
        description: "Automated event-triggered processes eliminating repetitive human data-entry, triage, and reconciliation tasks.",
      },
      {
        title: "AI Strategy & Feasibility Consulting",
        description: "Evaluation of potential AI initiatives, cost-benefit analysis, model selection, latency tradeoffs, and data readiness audits.",
      },
    ],
    capabilities: [
      "Vector embeddings & hybrid search (pgvector, Pinecone, Qdrant)",
      "Prompt engineering & deterministic structured outputs",
      "Local & open-weight model deployment (Llama, Mistral, vLLM)",
      "Semantic cache design to minimize API latency and inference costs",
      "Comprehensive evaluation benchmarks & hallucination guardrails",
      "Scalable data transformation pipelines with Python and SQL",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "Hugging Face",
      "PyTorch",
      "Pandas",
      "Scikit-Learn",
      "Docker",
    ],
    businessValue: [
      "Drastic reduction in manual document synthesis and extraction hours",
      "Grounded answers backed by verifiable source citations",
      "Sub-second semantic search across millions of corporate documents",
      "Predictable inference costs through smart caching and model routing",
    ],
    deliverables: [
      "Production-ready AI backend services with REST/gRPC endpoints",
      "Automated evaluation suites measuring answer accuracy and latency",
      "Secure vector database setup and ongoing synchronization jobs",
      "Comprehensive prompt templates and fallback strategies",
      "Executive and technical AI readiness documentation",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Data & Use Case Feasibility",
        description: "Inspect data quality, define accuracy metrics, and benchmark latency/cost targets.",
      },
      {
        step: "02",
        title: "Proof of Concept & Evaluation",
        description: "Build an isolated evaluation pipeline with golden datasets to validate answer quality.",
      },
      {
        step: "03",
        title: "System Integration & Hardening",
        description: "Integrate vector stores, caching layers, rate limiters, and human-in-the-loop controls.",
      },
      {
        step: "04",
        title: "Deployment & Telemetry",
        description: "Deploy behind secure API gateways with real-time prompt telemetry and drift monitoring.",
      },
    ],
    faqs: [
      {
        question: "How do you protect proprietary corporate data from training public models?",
        answer: "We strictly use enterprise tier APIs with zero-data-retention guarantees or deploy self-hosted open-weight models in your private cloud VPC.",
      },
      {
        question: "How do you prevent hallucinations in critical business workflows?",
        answer: "We employ deterministic retrieval-augmented generation (RAG) with strict source citation constraints, guardrails, and automated confidence scoring.",
      },
      {
        question: "What is the typical infrastructure cost for running AI pipelines?",
        answer: "We engineer multi-tier architectures using semantic caching and lightweight models for simple tasks, reducing inference expenses by up to 70%.",
      },
    ],
    relatedProjectSlugs: ["ab3-medical-emr", "odyssey-stream"],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud, DevOps & Platform Engineering",
    tagline: "Scalable cloud architecture, automated CI/CD pipelines, and bulletproof infrastructure as code.",
    shortDescription:
      "We build resilient cloud foundations on AWS, Azure, and Google Cloud using Terraform, Kubernetes, Docker, and GitOps workflows to guarantee 99.99% uptime and rapid deployment cadence.",
    fullDescription:
      "Modern businesses cannot afford fragile deployments, slow release cycles, or unpredictable cloud bills. Mindrift architects immutable, self-healing cloud platforms. We automate infrastructure provisioning, container orchestration, and continuous monitoring so your engineering team can ship with total confidence.",
    iconName: "Cloud",
    subServices: [
      {
        title: "Cloud Architecture & Consulting",
        description: "Designing high-availability, multi-region architectures aligned with the AWS Well-Architected and cloud-native standards.",
      },
      {
        title: "Cloud Migration",
        description: "Structured migration of on-premise workloads and legacy servers to cloud environments with zero unplanned downtime.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description: "Declarative infrastructure management using Terraform, OpenTofu, and CloudFormation for predictable environments.",
      },
      {
        title: "Docker & Containerization",
        description: "Containerizing microservices and monolithic applications into lightweight, secure, and reproducible Docker images.",
      },
      {
        title: "Kubernetes & Orchestration",
        description: "EKS, GKE, and self-managed Kubernetes deployments with horizontal pod autoscaling, ingress control, and service meshes.",
      },
      {
        title: "CI/CD Pipeline Automation",
        description: "Automated GitHub Actions, GitLab CI, and ArgoCD pipelines running automated tests, image scans, and progressive rollouts.",
      },
      {
        title: "Observability & Monitoring",
        description: "Unified telemetry systems combining Prometheus, Grafana, OpenTelemetry, and Datadog for distributed tracing and alerts.",
      },
      {
        title: "Site Reliability & FinOps",
        description: "Cloud spend audits, rightsizing instances, spot instance management, and SLA/SLO definition to maximize efficiency.",
      },
    ],
    capabilities: [
      "Multi-account AWS & Azure organization architecture",
      "Declarative Terraform modules with automated state locking",
      "Production Kubernetes cluster hardening and GitOps deployment",
      "Zero-downtime blue/green and canary deployment strategies",
      "Centralized logging, distributed tracing, and automated alert paging",
      "Cloud cost optimization with FinOps principles",
    ],
    technologies: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Terraform",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "ArgoCD",
    ],
    businessValue: [
      "Deployment frequency increased from weeks to multiple times per day",
      "Reduced cloud infrastructure costs through rigorous resource rightsizing",
      "Disaster recovery and automated failover capabilities tested and proven",
      "Elimination of manual configuration drift across environments",
    ],
    deliverables: [
      "Complete Infrastructure as Code (Terraform) repository",
      "Hardened CI/CD pipeline definitions with automated security scans",
      "Custom Grafana observability dashboards and alerting runbooks",
      "Disaster recovery plan with documented RTO/RPO targets",
      "Architectural documentation and team handoff sessions",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Infrastructure Audit",
        description: "Review current hosting architecture, security groups, billing logs, and deployment bottlenecks.",
      },
      {
        step: "02",
        title: "Target Architecture Design",
        description: "Produce Terraform modules, network VPC topology, ingress maps, and deployment workflow diagrams.",
      },
      {
        step: "03",
        title: "Pipeline & Environment Buildout",
        description: "Provision staging/production environments, configure secrets management, and set up CI/CD.",
      },
      {
        step: "04",
        title: "Workload Cutover & Validation",
        description: "Conduct dry-run migrations, test DNS failover, perform load tests, and transfer knowledge.",
      },
    ],
    faqs: [
      {
        question: "Which cloud providers do you specialize in?",
        answer: "Our primary expertise is in AWS, Google Cloud Platform (GCP), and Microsoft Azure, as well as modern edge platforms like Cloudflare and Vercel.",
      },
      {
        question: "Can you help us reduce runaway cloud bills?",
        answer: "Yes. Our FinOps audits typically uncover 20% to 45% in immediate savings through unused resource removal, commitment plans, and container rightsizing.",
      },
      {
        question: "How do you manage sensitive secrets in CI/CD?",
        answer: "We use enterprise secrets engines such as AWS Secrets Manager, HashiCorp Vault, and GitHub Secrets with short-lived OIDC tokens rather than long-lived credentials.",
      },
    ],
    relatedProjectSlugs: ["odyssey-stream", "firstchoice-epos"],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity & Defensive Engineering",
    tagline: "Rigorous security assessment, DevSecOps, and defensive application architecture.",
    shortDescription:
      "We build security into the software lifecycle from day one. Our services encompass application security audits, cloud posture hardening, identity & access management, and automated vulnerability scanning.",
    fullDescription:
      "In an era of sophisticated digital threats, security cannot be a post-launch afterthought. Mindrift applies defensive engineering principles across the entire application stack. Note: Specialized engagements such as red-team penetration testing and compliance assessments are conducted strictly when scoped under formal authorization and operational protocols.",
    iconName: "ShieldCheck",
    subServices: [
      {
        title: "Application Security Assessment",
        description: "In-depth code reviews, OWASP Top 10 threat modeling, and dependency vulnerability analysis.",
      },
      {
        title: "Cloud Security Posture",
        description: "Hardening cloud environments, IAM least-privilege configurations, network security groups, and audit trails.",
      },
      {
        title: "DevSecOps Implementation",
        description: "Integrating SAST, DAST, secret scanning, and software bill of materials (SBOM) checks directly into CI/CD pipelines.",
      },
      {
        title: "Secure Software Architecture",
        description: "Designing zero-trust network boundaries, cryptographic key management, and tamper-evident event logging.",
      },
      {
        title: "Identity & Access Management (IAM)",
        description: "Enterprise SSO, OAuth2, OpenID Connect, multi-factor authentication (MFA), and fine-grained role-based access control.",
      },
      {
        title: "Vulnerability Management",
        description: "Systematic identification, prioritization, and coordinated patching of zero-day vulnerabilities in production systems.",
      },
      {
        title: "Security Monitoring & Logging",
        description: "Centralized audit logs, SIEM integration, and automated alert triggering for anomalous traffic patterns.",
      },
      {
        title: "Defensive Security Engineering",
        description: "Data sanitization, API rate limiting, anti-CSRF, strict Content Security Policies, and DDoS mitigation strategies.",
      },
    ],
    capabilities: [
      "OWASP ASVS (Application Security Verification Standard) alignment",
      "Least-privilege IAM and role-based access controls (RBAC/ABAC)",
      "Automated pipeline security gates (Semgrep, Trivy, Snyk)",
      "Cryptographic protection for data at rest and data in transit (TLS 1.3)",
      "Defense-in-depth API gateway rate limiting and payload validation",
      "Audit logging compliant with SOC 2 and ISO 27001 requirements",
    ],
    technologies: [
      "Trivy",
      "Semgrep",
      "HashiCorp Vault",
      "AWS IAM",
      "Cloudflare WAF",
      "OAuth 2.0",
      "OIDC",
      "OpenSSL",
      "SonarQube",
    ],
    businessValue: [
      "Protection of customer trust, sensitive IP, and brand reputation",
      "Drastic reduction in zero-day vulnerabilities reaching production",
      "Smooth audit readiness for enterprise procurement and compliance checks",
      "Elimination of hardcoded secrets and accidental data leaks",
    ],
    deliverables: [
      "Threat model documentation and risk severity matrix",
      "Remediated codebase with verified vulnerability patches",
      "Automated SAST/DAST CI/CD integration scripts",
      "Least-privilege IAM configuration templates",
      "Security best-practices guide tailored to your engineering team",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Threat Modeling & Scope",
        description: "Map attack surfaces, identify sensitive data stores, and define threat actor profiles.",
      },
      {
        step: "02",
        title: "Automated & Manual Review",
        description: "Execute static and dynamic vulnerability scanners combined with deep manual code review.",
      },
      {
        step: "03",
        title: "Remediation & Hardening",
        description: "Directly patch discovered vulnerabilities, enforce security headers, and update vulnerable libraries.",
      },
      {
        step: "04",
        title: "Verification & Gatekeeping",
        description: "Re-scan to verify remediation, deploy automated pipeline gates, and deliver final security report.",
      },
    ],
    faqs: [
      {
        question: "Do you offer offensive red-team penetration testing?",
        answer: "We perform defensive application security reviews and authorized assessments strictly within pre-defined engagement scopes and authorized operational agreements.",
      },
      {
        question: "Can you help our startup pass enterprise vendor security reviews?",
        answer: "Yes. We help companies implement the technical controls, encryption policies, and logging systems required by enterprise procurement teams.",
      },
      {
        question: "What is your approach to third-party open-source dependencies?",
        answer: "We implement automated Software Bill of Materials (SBOM) tracking and automated dependabot/Trivy alerts to catch vulnerable packages immediately.",
      },
    ],
    relatedProjectSlugs: ["ab3-medical-emr", "firstchoice-epos"],
  },
  {
    id: "enterprise-systems",
    slug: "enterprise-systems",
    title: "Enterprise Solutions & System Integration",
    tagline: "Connecting disparate platforms, automating complex workflows, and breaking down data silos.",
    shortDescription:
      "We design custom internal tools, HRM systems, approval workflows, and mission-critical integrations connecting ERPs, CRMs, and legacy enterprise software into a synchronized ecosystem.",
    fullDescription:
      "Large organizations frequently suffer from fragmented databases, disjointed manual approvals, and duplicate data entry. Mindrift engineers unified enterprise solutions that bridge legacy software with modern web portals, automating operational workflows with precision and high reliability.",
    iconName: "Network",
    subServices: [
      {
        title: "Enterprise Software Solutions",
        description: "Purpose-built platforms tailored to multi-department enterprise workflows and strict operational guidelines.",
      },
      {
        title: "Business Process Automation",
        description: "Automated digital workflows replacing manual paper forms, email chains, and error-prone spreadsheets.",
      },
      {
        title: "ERP & CRM Integration",
        description: "Bi-directional data synchronization connecting Salesforce, SAP, HubSpot, or NetSuite with custom internal portals.",
      },
      {
        title: "HRM & Attendance Management Systems",
        description: "Complete employee life-cycle management platforms covering time-tracking, leaves, shifts, and payroll data feeds.",
      },
      {
        title: "Workflow & Multi-Level Approvals",
        description: "Configurable state machines enforcing corporate delegation of authority rules and multi-tier approval chains.",
      },
      {
        title: "Third-Party API Integration",
        description: "Resilient middleware handling external webhooks, retry queues, rate limits, and asynchronous data ingestion.",
      },
      {
        title: "Enterprise Application Integration (EAI)",
        description: "Event-driven message buses and messaging queues (RabbitMQ, Kafka) synchronizing core systems in real time.",
      },
      {
        title: "Custom Internal Business Tools",
        description: "High-productivity admin dashboards, operational portals, and customer service consoles.",
      },
    ],
    capabilities: [
      "State-machine driven workflow engines with audit logs",
      "Reliable webhook processing with dead-letter queues (DLQ)",
      "Role-based authorization matrices matching corporate org charts",
      "Bi-directional data sync with conflict resolution logic",
      "Exportable reporting engines (Excel, PDF, CSV, automated emails)",
      "High-throughput transactional integrity across multiple databases",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Prisma",
      "Docker",
      "REST & GraphQL",
      "Apache Kafka",
    ],
    businessValue: [
      "Elimination of manual double-entry errors between business tools",
      "Faster approval cycles reduced from days to minutes",
      "Single pane of glass for organizational operational oversight",
      "Full auditability and traceability for compliance and accounting",
    ],
    deliverables: [
      "Complete enterprise application or integration middleware",
      "Role-based permission schemas and user provisioning guides",
      "Interactive administrative dashboard and reporting modules",
      "Comprehensive API documentation and webhook retry runbooks",
      "End-user training guides and technical operations manual",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Process & Data Mapping",
        description: "Chart end-to-end departmental workflows, data ownership, approval hierarchies, and system boundaries.",
      },
      {
        step: "02",
        title: "Integration Architecture",
        description: "Design transactional boundaries, schema transformations, queuing models, and error-handling policies.",
      },
      {
        step: "03",
        title: "Incremental Integration Build",
        description: "Implement API adapters, state machines, dashboard interfaces, and robust retry queues.",
      },
      {
        step: "04",
        title: "Staged Rollout & Handoff",
        description: "Perform end-to-end data reconciliation, user acceptance testing (UAT), and phased production deployment.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with on-premise legacy databases?",
        answer: "Yes. We regularly build secure middleware bridges connecting on-premise SQL Server, Oracle, or AS400 systems to modern cloud applications via secure VPN tunnels or message brokers.",
      },
      {
        question: "How do you handle system downtime during third-party API outages?",
        answer: "We engineer resilient queuing architectures with exponential backoff retries and dead-letter queues, ensuring zero data loss during upstream partner downtime.",
      },
    ],
    relatedProjectSlugs: ["firstchoice-epos", "free-online-ordering"],
  },
  {
    id: "gis-location-intelligence",
    slug: "gis-location-intelligence",
    title: "GIS & Location Intelligence",
    tagline: "Geospatial data processing, interactive digital mapping, and location-aware platforms.",
    shortDescription:
      "We transform raw geographic coordinates into actionable business intelligence. We build custom GIS portals, point-of-interest search engines, geofencing solutions, and spatial analytics dashboards.",
    fullDescription:
      "Geographic data requires specialized database architectures and spatial algorithms. Mindrift builds high-performance geospatial platforms utilizing PostGIS, Mapbox, Leaflet, and open geospatial standards. From mobile field attendance to nationwide territory management, we turn spatial coordinates into competitive advantages.",
    iconName: "MapPin",
    subServices: [
      {
        title: "Geographic Information Systems (GIS)",
        description: "Web and desktop-grade geospatial portals visualizing complex spatial layers, shapefiles, and geo-data.",
      },
      {
        title: "Location-Based Applications",
        description: "Custom consumer and enterprise mobile applications leveraging real-time GPS, geofencing, and proximity triggers.",
      },
      {
        title: "GPS Tracking Solutions",
        description: "High-accuracy workforce attendance and fleet monitoring with location spoofing prevention and offline logging.",
      },
      {
        title: "Geospatial Data Processing",
        description: "Batch conversion, polygon simplification, coordinate re-projection, and spatial index optimization.",
      },
      {
        title: "Digital Mapping Solutions",
        description: "Custom vector tile maps, dynamic clustering, heatmaps, and customized interactive styling via Mapbox and Maplibre.",
      },
      {
        title: "Geocoding & Reverse Geocoding",
        description: "Sub-millisecond address resolution, administrative boundary matching, and reverse coordinate lookups.",
      },
      {
        title: "Point-of-Interest (POI) Data Engines",
        description: "Structured indexing, categorization, and spatial proximity queries across millions of location entries.",
      },
      {
        title: "Spatial Analytics Dashboards",
        description: "Executive dashboards visualizing density, service coverage radiuses, commute times, and spatial heat patterns.",
      },
    ],
    capabilities: [
      "PostGIS spatial indexing with R-Tree and GiST indices",
      "Vector tile generation (MVT) and WebGL-accelerated map rendering",
      "Geofence polygon containment algorithms and proximity buffering",
      "Anti-spoofing validation for mobile GPS coordinates",
      "Sub-10ms spatial k-nearest neighbor (k-NN) query execution",
      "GeoJSON, Shapefile, KML, and TopoJSON parsing pipelines",
    ],
    technologies: [
      "PostgreSQL",
      "PostGIS",
      "Mapbox GL",
      "MapLibre",
      "Leaflet",
      "Turf.js",
      "GeoJSON",
      "GDAL",
      "Node.js",
      "Python",
    ],
    businessValue: [
      "Real-time visibility over distributed field personnel and physical assets",
      "Sub-second location queries across millions of geospatial records",
      "Elimination of fraudulent mobile check-ins via location spoofing verification",
      "Data-driven territorial expansion and service route optimization",
    ],
    deliverables: [
      "High-performance spatial database schemas and GiST indexing setup",
      "Interactive map UI components optimized for desktop and mobile touch",
      "Microservice for geocoding, reverse geocoding, and distance calculations",
      "Anti-mock location verification libraries for mobile apps",
      "Spatial data ingestion scripts and automated validation routines",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Spatial Data Assessment",
        description: "Audit coordinate systems (EPSG:4326 vs Web Mercator), dataset precision, and query volume expectations.",
      },
      {
        step: "02",
        title: "Geospatial Architecture",
        description: "Define PostGIS database indexing, spatial tiling strategies, and vector tile server infrastructure.",
      },
      {
        step: "03",
        title: "Engine & Map Interface Build",
        description: "Implement custom map controls, cluster rendering, polygon geofences, and spatial search APIs.",
      },
      {
        step: "04",
        title: "Performance Tuning & Launch",
        description: "Benchmarking spatial queries under heavy load, optimizing polygon simplification, and production deploy.",
      },
    ],
    faqs: [
      {
        question: "How do you prevent employees from faking their GPS location on mobile apps?",
        answer: "We implement multi-layered verification: detecting mock provider flags, validating cell tower/Wi-Fi telemetry, checking speed plausibility, and cryptographic timestamp signing.",
      },
      {
        question: "Can your mapping engines operate offline in areas with poor internet?",
        answer: "Yes. We build offline-first tile caching and local SQLite/IndexedDB spatial storage that syncs automatically when connection is restored.",
      },
    ],
    relatedProjectSlugs: ["free-online-ordering", "firstchoice-epos"],
  },
  {
    id: "product-strategy",
    slug: "product-strategy",
    title: "Product Strategy & Technical Consulting",
    tagline: "Translating ambitious business visions into executable technical architecture and delivery roadmaps.",
    shortDescription:
      "We provide fractional CTO guidance, digital transformation consulting, technical feasibility studies, and detailed system architecture blueprints before committing capital to development.",
    fullDescription:
      "Building the wrong technology or choosing an unsuitable architecture can cost organizations months of engineering and millions in capital. Mindrift partners with leadership teams to validate technical feasibility, de-risk complex initiatives, select the right technology stacks, and create realistic, milestone-driven execution plans.",
    iconName: "Compass",
    subServices: [
      {
        title: "Digital Transformation Consulting",
        description: "Strategic roadmapping to modernize legacy business models into modern, scalable digital platforms.",
      },
      {
        title: "Technical Feasibility Studies",
        description: "Rigorous evaluation of emerging technologies, API constraints, and performance ceilings before buildout.",
      },
      {
        title: "Solution & Software Architecture",
        description: "Complete architectural blueprints, sequence diagrams, database schemas, and infrastructure specifications.",
      },
      {
        title: "Product Discovery & Scoping",
        description: "Facilitated discovery workshops defining user personas, user journeys, MVP boundaries, and milestone prioritization.",
      },
      {
        title: "Technology Roadmapping",
        description: "Multi-quarter phased technology roadmaps aligning development milestones with commercial business goals.",
      },
      {
        title: "Requirements Engineering",
        description: "Transforming ambiguous stakeholder expectations into precise, developer-ready functional and non-functional specs.",
      },
      {
        title: "Vendor & Tool Evaluation",
        description: "Objective evaluation of SaaS vendors, third-party APIs, and cloud services to avoid vendor lock-in.",
      },
      {
        title: "Fractional CTO Advisory",
        description: "Senior technical leadership guiding hiring, engineering culture, architectural reviews, and board presentations.",
      },
    ],
    capabilities: [
      "Comprehensive C4 model architecture diagrams",
      "Cost-benefit modeling for build vs. buy decisions",
      "Non-functional requirement (NFR) matrices (latency, throughput, RTO/RPO)",
      "Technical debt assessments and refactoring strategies",
      "Agile delivery governance and sprint velocity optimization",
      "Executive technical briefing and investor due-diligence prep",
    ],
    technologies: [
      "C4 Model",
      "UML",
      "Figma",
      "Jira",
      "Linear",
      "Notion",
      "OpenAPI",
      "Postman",
    ],
    businessValue: [
      "Avoidance of costly architectural missteps and catastrophic rewrites",
      "Clear engineering priorities that align directly with revenue generation",
      "Accurate budgeting, resource allocation, and realistic milestone targets",
      "Increased investor confidence through professional technical due diligence",
    ],
    deliverables: [
      "Executive Technology Roadmap & Strategy Document",
      "Detailed Architecture Specification & C4 Blueprint",
      "Developer-ready Product Requirement Document (PRD)",
      "Vendor & Tech Stack Evaluation Scorecard",
      "Resource allocation and budget projection model",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Stakeholder Alignment",
        description: "Interview business leaders, product owners, and engineering leads to align on vision and constraints.",
      },
      {
        step: "02",
        title: "Technical Audit & Research",
        description: "Analyze existing code, database schemas, operational bottlenecks, and external vendor dependencies.",
      },
      {
        step: "03",
        title: "Blueprint Synthesis",
        description: "Draft architecture specifications, delivery phases, cost projections, and risk mitigation strategies.",
      },
      {
        step: "04",
        title: "Executive Presentation & Handover",
        description: "Deliver final roadmap, facilitate Q&A with leadership, and establish sprint execution backlog.",
      },
    ],
    faqs: [
      {
        question: "When should a company engage Mindrift for technical consulting?",
        answer: "Before starting a major new software build, during an architectural pivot, when modernizing a legacy system, or when preparing for investor technical due diligence.",
      },
      {
        question: "Do you stay involved during the actual development phase?",
        answer: "Yes. Clients often transition from our Product Strategy phase directly into execution with our engineering teams to ensure the vision is faithfully implemented.",
      },
    ],
    relatedProjectSlugs: ["odyssey-stream", "ab3-medical-emr", "firstchoice-epos"],
  },
  {
    id: "database-engineering",
    slug: "database-engineering",
    title: "Database & Data Platform Engineering",
    tagline: "High-throughput data modeling, query optimization, migration, and resilient database architectures.",
    shortDescription:
      "We design robust relational, document, and vector database architectures. From PostgreSQL query tuning to zero-downtime database migrations, we keep your data layer fast, safe, and fault-tolerant.",
    fullDescription:
      "The database is the foundational core of every digital product. Slow queries, unindexed foreign keys, and poor schema normalization can cripple user experience. Mindrift specializes in relational database design, PostgreSQL optimization, PostGIS spatial queries, read-replica clustering, and secure data migration.",
    iconName: "Database",
    subServices: [
      {
        title: "Relational Database Design",
        description: "Normalized relational schemas with strict foreign key constraints, check constraints, and clean entity relationships.",
      },
      {
        title: "PostgreSQL Advanced Solutions",
        description: "Leveraging PostgreSQL power features: connection pooling with PgBouncer, row-level security, partition tables, and JSONB.",
      },
      {
        title: "Database Performance Optimization",
        description: "EXPLAIN ANALYZE execution plan debugging, index tuning (B-Tree, GiST, GIN, BRIN), and slow query elimination.",
      },
      {
        title: "Zero-Downtime Database Migration",
        description: "Dual-write patterns, continuous replication, and schema evolution without taking production applications offline.",
      },
      {
        title: "Data Modeling & Normalization",
        description: "Designing data models that scale gracefully from thousands to hundreds of millions of transactional records.",
      },
      {
        title: "Data Integration & ETL",
        description: "Automated synchronization pipelines extracting, transforming, and loading data between operational and reporting databases.",
      },
      {
        title: "Database Security & Hardening",
        description: "Transparent data encryption, column-level masking, automated snapshot backups, and point-in-time recovery.",
      },
      {
        title: "Data Platform Architecture",
        description: "Designing hybrid transactional and analytical processing (HTAP) setups, caching layers (Redis), and read replicas.",
      },
    ],
    capabilities: [
      "Advanced PostgreSQL query profiling (EXPLAIN ANALYZE / pg_stat_statements)",
      "Multi-AZ high availability with automated failover and read replicas",
      "Connection pool optimization with PgBouncer and Supabase / Prisma",
      "Vector database indexing for AI workloads (pgvector / HNSW)",
      "Point-in-time recovery (PITR) and automated backup retention policies",
      "Table partitioning strategies by date, range, and geographic tenant",
    ],
    technologies: [
      "PostgreSQL",
      "PostGIS",
      "pgvector",
      "Redis",
      "Prisma ORM",
      "Drizzle ORM",
      "MongoDB",
      "PgBouncer",
      "AWS RDS / Aurora",
      "Docker",
    ],
    businessValue: [
      "Query response times cut from seconds to sub-20 milliseconds",
      "Guaranteed data integrity with zero corruption or orphan records",
      "Continuous business operations with zero-downtime schema migrations",
      "Drastic reduction in expensive database instance upgrade requirements",
    ],
    deliverables: [
      "Normalized Entity-Relationship Diagrams (ERD) and DDL migration scripts",
      "Documented query performance benchmark and index optimization report",
      "Configured connection pooling and replica topology",
      "Automated backup, replication, and disaster recovery runbooks",
      "Prisma or Drizzle type-safe schema definitions",
    ],
    engagementProcess: [
      {
        step: "01",
        title: "Performance & Schema Audit",
        description: "Inspect slow query logs, table bloat, missing indexes, and lock contention bottlenecks.",
      },
      {
        step: "02",
        title: "Data Model Optimization",
        description: "Refactor schemas, define composite indexes, partition high-volume tables, and configure pooling.",
      },
      {
        step: "03",
        title: "Staged Migration & Testing",
        description: "Execute non-blocking migrations in staging, benchmark execution plans, and verify replica lag.",
      },
      {
        step: "04",
        title: "Production Cutover & Observability",
        description: "Deploy optimizations with zero downtime, configure real-time query metrics, and hand over runbooks.",
      },
    ],
    faqs: [
      {
        question: "Why does Mindrift emphasize PostgreSQL over other database systems?",
        answer: "PostgreSQL is the world's most versatile, robust open-source relational database. With extensions like PostGIS for spatial data and pgvector for AI, it provides unmatched reliability and performance without proprietary licensing costs.",
      },
      {
        question: "Can you optimize our slow application without rewriting the entire backend?",
        answer: "In most cases, yes! Adding targeted compound indexes, adjusting connection pooling, and eliminating N+1 ORM query patterns yields massive 10x-50x speed improvements without touching core business logic.",
      },
    ],
    relatedProjectSlugs: ["firstchoice-epos", "ab3-medical-emr"],
  },
];
