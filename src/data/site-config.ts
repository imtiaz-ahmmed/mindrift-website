import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mindrift Agency",
  tagline: "Engineering Digital Solutions for a Smarter Future.",
  description:
    "Mindrift Agency helps businesses transform complex challenges into intelligent digital products through software engineering, AI, cloud, cybersecurity, GIS, and enterprise technology solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mindriftagency.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@mindriftagency.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (800) 555-0199",
  location: "Global Technology Services · Available Worldwide",
  companyProfileUrl: "https://drive.google.com/file/d/1XW_0XPNOy8KDgS5QV-yOv2QhHHcWsh0g/view?usp=sharing",
  socials: [
    { platform: "GitHub", url: "https://github.com/mindrift" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/mindrift" },
    { platform: "X", url: "https://x.com/mindriftagency" },
  ],
};

export const capabilityTicker = [
  "Software Engineering",
  "AI & Data Intelligence",
  "Cloud Architecture & DevOps",
  "Cybersecurity Engineering",
  "Enterprise Systems Integration",
  "GIS & Location Intelligence",
  "Product Strategy & Consulting",
  "Database Engineering",
];
