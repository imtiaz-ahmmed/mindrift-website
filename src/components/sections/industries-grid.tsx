import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
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
} from "lucide-react";

const industryIconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-[#1877F2]" />,
  Shield: <Shield className="w-5 h-5 text-[#0BCB91]" />,
  Activity: <Activity className="w-5 h-5 text-[#1877F2]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#0BCB91]" />,
  Truck: <Truck className="w-5 h-5 text-[#1877F2]" />,
  Factory: <Factory className="w-5 h-5 text-[#0BCB91]" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#1877F2]" />,
  Building2: <Building2 className="w-5 h-5 text-[#0BCB91]" />,
  Users: <Users className="w-5 h-5 text-[#1877F2]" />,
};

export function IndustriesGrid() {
  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              Domain Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
              Industries We Serve.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We apply proven software architectures and deep operational understanding to solve high-stakes challenges across diverse industries.
            </p>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline self-start md:self-end group"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.slug}
              className="rounded-2xl bg-slate-50 dark:bg-[#070F2B] p-6 border border-slate-200/80 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 shadow-xs">
                    {industryIconMap[ind.iconName] || <Code className="w-5 h-5 text-[#1877F2]" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#000B49] dark:text-white">
                      {ind.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {ind.description}
                </p>

                <div className="pt-2 text-xs font-medium text-slate-700 dark:text-slate-300 border-t border-slate-200/60 dark:border-slate-800/60">
                  <span className="text-[#1877F2] dark:text-[#0BCB91] font-semibold">Impact: </span>
                  {ind.keyHighlight}
                </div>
              </div>

              <div className="pt-4 mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[10px]">VERIFIED ARCHITECTURES</span>
                <Link
                  href="/industries"
                  className="font-semibold text-[#1877F2] dark:text-[#0BCB91] hover:underline flex items-center gap-1"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
