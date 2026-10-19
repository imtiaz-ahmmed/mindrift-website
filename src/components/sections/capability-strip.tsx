import React from "react";
import Link from "next/link";
import { Code2, Cpu, Cloud, ShieldCheck, Network, ChevronRight } from "lucide-react";

export function CapabilityStrip() {
  const capabilities = [
    {
      title: "Digital Product Engineering",
      href: "/services/software-engineering",
      icon: <Code2 className="w-4 h-4 text-[#1877F2]" />,
    },
    {
      title: "AI & Data Intelligence",
      href: "/services/ai-data-intelligence",
      icon: <Cpu className="w-4 h-4 text-[#0BCB91]" />,
    },
    {
      title: "Cloud & DevOps Architecture",
      href: "/services/cloud-devops",
      icon: <Cloud className="w-4 h-4 text-[#1877F2]" />,
    },
    {
      title: "Cybersecurity Engineering",
      href: "/services/cybersecurity",
      icon: <ShieldCheck className="w-4 h-4 text-[#0BCB91]" />,
    },
    {
      title: "Enterprise Systems Integration",
      href: "/services/enterprise-systems",
      icon: <Network className="w-4 h-4 text-[#1877F2]" />,
    },
  ];

  return (
    <section className="py-6 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2]" />
            Core Capabilities:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 flex-1">
            {capabilities.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-white dark:bg-slate-900 shadow-xs flex-shrink-0">
                    {c.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors truncate">
                    {c.title}
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
