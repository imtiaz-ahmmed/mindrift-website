import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
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

const iconComponentMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-[#1877F2]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#0BCB91]" />,
  Cloud: <Cloud className="w-6 h-6 text-[#1877F2]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0BCB91]" />,
  Network: <Network className="w-6 h-6 text-[#1877F2]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#0BCB91]" />,
  Compass: <Compass className="w-6 h-6 text-[#1877F2]" />,
  Database: <Database className="w-6 h-6 text-[#0BCB91]" />,
};

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              Full-Spectrum Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
              End-to-End Technology Capabilities.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We engineer mission-critical systems across eight specialized disciplines. Every solution is tailored to your organization’s security requirements and business workflows.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline self-start md:self-end group"
          >
            <span>View All Service Specifications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group relative rounded-2xl bg-slate-50 dark:bg-[#070F2B] p-6 border border-slate-200/80 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800/80 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                  {iconComponentMap[svc.iconName] || <Code2 className="w-6 h-6 text-[#1877F2]" />}
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {svc.shortDescription}
                  </p>
                </div>

                {/* Subservice Pills Preview */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {svc.subServices.slice(0, 2).map((sub, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {sub.title}
                    </span>
                  ))}
                  {svc.subServices.length > 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-slate-400">
                      +{svc.subServices.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-[#1877F2] dark:text-[#0BCB91]">
                <span>Explore Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
