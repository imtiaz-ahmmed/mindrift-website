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
  Terminal,
} from "lucide-react";

const iconComponentMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-[#1877F2] dark:text-[#00D8F6]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#0BCB91]" />,
  Cloud: <Cloud className="w-5 h-5 text-[#1877F2] dark:text-[#00D8F6]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
  Network: <Network className="w-5 h-5 text-[#1877F2] dark:text-[#00D8F6]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#0BCB91]" />,
  Compass: <Compass className="w-5 h-5 text-[#1877F2] dark:text-[#00D8F6]" />,
  Database: <Database className="w-5 h-5 text-[#0BCB91]" />,
};

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081E] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase font-semibold bg-[#1877F2]/10 text-[#1877F2] dark:text-[#00D8F6] border border-[#1877F2]/20">
              <Terminal className="w-3.5 h-3.5 text-[#0BCB91]" />
              SYS::PRACTICE_DISCIPLINES // 08 DOMAINS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight">
              Full-Spectrum Engineering. <br />
              <span className="brand-gradient-text">Zero Architectural Compromise.</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              From real-time 3D pixel streaming and hospital-grade EMR databases to multi-tenant cloud ePOS networks, we engineer scalable digital platforms with absolute precision.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#1877F2] dark:text-[#0BCB91] hover:underline self-start md:self-end group"
          >
            <span>All Service Specifications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc, idx) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group relative rounded-3xl bg-slate-50/80 dark:bg-[#070F2B] p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 hover:border-[#1877F2]/50 dark:hover:border-[#00D8F6]/50 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800/90 shadow-xs border border-slate-200/60 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconComponentMap[svc.iconName] || <Code2 className="w-5 h-5 text-[#1877F2]" />}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    // MOD_0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-base text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed font-sans">
                    {svc.shortDescription}
                  </p>
                </div>

                {/* Subservice Pills Preview */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {svc.subServices.slice(0, 2).map((sub, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700 font-medium"
                    >
                      {sub.title}
                    </span>
                  ))}
                  {svc.subServices.length > 2 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{svc.subServices.length - 2}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-[#1877F2] dark:text-[#0BCB91]">
                <span>Inspect Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
