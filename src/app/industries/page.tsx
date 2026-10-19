import { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Shield,
  Activity,
  ShoppingBag,
  Truck,
  Factory,
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Industries We Serve",
  description:
    "Explore how Mindrift Agency delivers tailored software engineering, GIS platforms, AI solutions, and secure cloud infrastructure across global enterprise industries.",
  path: "/industries",
});

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-[#1877F2]" />,
  Shield: <Shield className="w-6 h-6 text-[#0BCB91]" />,
  Activity: <Activity className="w-6 h-6 text-[#1877F2]" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#0BCB91]" />,
  Truck: <Truck className="w-6 h-6 text-[#1877F2]" />,
  Factory: <Factory className="w-6 h-6 text-[#0BCB91]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#1877F2]" />,
  Building2: <Building2 className="w-6 h-6 text-[#0BCB91]" />,
  Users: <Users className="w-6 h-6 text-[#1877F2]" />,
};

export default function IndustriesPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Industries" }]} />

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="blue">Domain Competencies</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
            Tailored Engineering for Critical Sectors.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Every vertical presents distinct compliance mandates, architectural bottlenecks, and operational workflows. We apply battle-tested software engineering to solve sector-specific challenges with confidence.
          </p>
        </div>

        {/* Industry Cards Full Directory */}
        <div className="space-y-12">
          {industriesData.map((ind, index) => (
            <div
              key={ind.slug}
              id={ind.slug}
              className="scroll-mt-28 rounded-3xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {iconMap[ind.iconName]}
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-400">SECTOR 0{index + 1}</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000B49] dark:text-white mt-1">
                      {ind.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#1877F2] dark:text-[#0BCB91] mt-1">
                      {ind.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Engineering Impact:
                    </span>
                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      {ind.keyHighlight}
                    </p>
                  </div>
                </div>

                {/* Right Challenges & Solutions */}
                <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l border-slate-100 dark:border-slate-800">
                  {/* Challenges */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span>Frequent Industry Bottlenecks:</span>
                    </div>
                    <div className="space-y-2">
                      {ind.challenges.map((c, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-[#0BCB91]" />
                      <span>How Mindrift Delivers:</span>
                    </div>
                    <div className="space-y-2">
                      {ind.solutions.map((s, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 text-xs text-slate-800 dark:text-slate-200 border border-blue-200/40 dark:border-blue-900/40 flex items-start gap-2"
                        >
                          <span className="text-[#1877F2] font-bold">✓</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Relevant Services */}
                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Recommended Disciplines:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.relevantServices.map((svcSlug) => {
                        const svc = servicesData.find((s) => s.slug === svcSlug);
                        if (!svc) return null;
                        return (
                          <Link
                            key={svcSlug}
                            href={`/services/${svcSlug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#1877F2] hover:text-white dark:hover:bg-[#1877F2] transition-colors"
                          >
                            <span>{svc.title.split("&")[0].trim()}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-[#000B49] via-[#05113A] to-[#000B49] p-8 md:p-12 text-white border border-blue-900/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Do You Operate in a Regulated or High-Throughput Industry?
            </h3>
            <p className="text-sm text-slate-300">
              Speak directly with engineers experienced in high-security, fault-tolerant digital architectures.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] btn-3d-elevated btn-animate-shimmer shadow-lg flex-shrink-0 group cursor-pointer"
          >
            <span>Start an Industry Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
