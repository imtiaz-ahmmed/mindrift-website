import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Network,
  MapPin,
  Compass,
  Database,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Services & Capabilities",
  description:
    "Explore Mindrift Agency's eight core technology practices: custom software engineering, enterprise AI, cloud architecture, cybersecurity, GIS, enterprise integrations, and database engineering.",
  path: "/services",
});

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-7 h-7 text-[#1877F2]" />,
  Cpu: <Cpu className="w-7 h-7 text-[#0BCB91]" />,
  Cloud: <Cloud className="w-7 h-7 text-[#1877F2]" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#0BCB91]" />,
  Network: <Network className="w-7 h-7 text-[#1877F2]" />,
  MapPin: <MapPin className="w-7 h-7 text-[#0BCB91]" />,
  Compass: <Compass className="w-7 h-7 text-[#1877F2]" />,
  Database: <Database className="w-7 h-7 text-[#0BCB91]" />,
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Services" }]} className="mb-8" />

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="blue">End-to-End Technology Capabilities</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
            Specialized Engineering for Demanding Enterprises.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We provide deep technical expertise across eight core disciplines. From high-concurrency cloud architecture and custom software to spatial databases and generative AI pipelines, every engagement is tailored to your organization’s operational realities.
          </p>
        </div>

        {/* Quick Nav Anchor Bar */}
        <div className="mb-14 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
          {servicesData.map((svc) => (
            <a
              key={svc.slug}
              href={`#${svc.slug}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white dark:bg-[#070F2B] text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] border border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs"
            >
              {svc.title.split("&")[0].trim()}
            </a>
          ))}
        </div>

        {/* Detailed Service Category Cards */}
        <div className="space-y-16">
          {servicesData.map((svc, index) => (
            <div
              key={svc.slug}
              id={svc.slug}
              className="scroll-mt-28 rounded-3xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview Column */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center">
                    {iconMap[svc.iconName]}
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-400">PRACTICE AREA 0{index + 1}</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000B49] dark:text-white mt-1">
                      {svc.title}
                    </h2>
                    <p className="text-sm font-medium text-[#1877F2] dark:text-[#0BCB91] mt-1">
                      {svc.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {svc.fullDescription}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-colors shadow-sm group"
                    >
                      <span>Detailed Specifications</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Breakdown Column: Sub-Services & Capabilities */}
                <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Sub-Services & Focus Areas:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.subServices.map((sub, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1"
                        >
                          <div className="text-xs font-bold text-[#000B49] dark:text-white">
                            {sub.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                            {sub.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Primary Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Consultation Callout */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#000B49] via-[#05113A] to-[#000B49] p-8 md:p-12 text-white border border-blue-900/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <Badge variant="emerald">Technical Discovery</Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need a Custom Architecture Assessment?
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a confidential discovery session with our senior engineering leads to evaluate feasibility, timelines, and stack selection.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] btn-3d-elevated btn-animate-shimmer shadow-lg flex-shrink-0 group cursor-pointer"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
