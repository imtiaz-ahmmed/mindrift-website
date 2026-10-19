export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  slug: string;
  description: string;
  items: NavItem[];
}

export const navigationData = {
  mainNav: [
    {
      title: "Services",
      href: "/services",
      isMegaMenu: true,
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Industries",
      href: "/industries",
    },
    {
      title: "Insights",
      href: "/insights",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  servicesMegaMenu: [
    {
      group: "Core Engineering",
      items: [
        {
          title: "Software & Digital Products",
          href: "/services/software-engineering",
          description: "Full-stack web, mobile, and custom enterprise software architectures.",
        },
        {
          title: "AI, ML & Data Intelligence",
          href: "/services/ai-data-intelligence",
          description: "Enterprise LLM integration, intelligent agent systems, and predictive models.",
        },
        {
          title: "Cloud & DevOps Engineering",
          href: "/services/cloud-devops",
          description: "Kubernetes, Terraform IaC, multi-cloud migrations, and CI/CD automation.",
        },
      ],
    },
    {
      group: "Specialized Systems",
      items: [
        {
          title: "Cybersecurity Engineering",
          href: "/services/cybersecurity",
          description: "Application security audits, DevSecOps gates, IAM, and defensive architecture.",
        },
        {
          title: "Enterprise Solutions & Integration",
          href: "/services/enterprise-systems",
          description: "HRM, multi-level approval workflows, and ERP/CRM system integration.",
        },
        {
          title: "GIS & Location Intelligence",
          href: "/services/gis-location-intelligence",
          description: "PostGIS spatial engines, POI databases, GPS tracking, and digital mapping.",
        },
      ],
    },
    {
      group: "Strategy & Platforms",
      items: [
        {
          title: "Product Strategy & Consulting",
          href: "/services/product-strategy",
          description: "Fractional CTO advisory, feasibility studies, and C4 architecture specs.",
        },
        {
          title: "Database Platform Engineering",
          href: "/services/database-engineering",
          description: "PostgreSQL query tuning, data modeling, and zero-downtime migrations.",
        },
      ],
    },
  ],
  footerLinks: {
    services: [
      { title: "Software & Digital Products", href: "/services/software-engineering" },
      { title: "AI & Data Intelligence", href: "/services/ai-data-intelligence" },
      { title: "Cloud & DevOps Architecture", href: "/services/cloud-devops" },
      { title: "Cybersecurity Engineering", href: "/services/cybersecurity" },
      { title: "Enterprise Solutions & Integration", href: "/services/enterprise-systems" },
      { title: "GIS & Location Intelligence", href: "/services/gis-location-intelligence" },
      { title: "Product Strategy & Consulting", href: "/services/product-strategy" },
      { title: "Database Engineering", href: "/services/database-engineering" },
    ],
    projects: [
      { title: "LYFE Attend (GPS Attendance)", href: "/projects/lyfe-attend" },
      { title: "GeoConnect (GIS & POI Engine)", href: "/projects/geoconnect" },
      { title: "Leave Management System", href: "/projects/leave-management-system" },
      { title: "Cloud Infrastructure FinOps", href: "/projects/cloud-core-finops" },
      { title: "Zero-Trust IAM Gateway", href: "/projects/secure-vault-iam" },
      { title: "All Featured Projects", href: "/projects" },
    ],
    company: [
      { title: "About Mindrift", href: "/about" },
      { title: "Industries We Serve", href: "/industries" },
      { title: "Engineering Insights", href: "/insights" },
      { title: "Start a Conversation", href: "/contact" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
};
