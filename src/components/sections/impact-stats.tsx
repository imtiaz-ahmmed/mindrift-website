import React from "react";
import {
  FolderCheck,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function ImpactStats() {
  const stats = [
    {
      value: "50+",
      label: "Projects Delivered",
      subtext: "Enterprise web, 3D streaming, POS & AI systems",
      badge: "Verified",
      icon: <FolderCheck className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      subtext: "Highest satisfaction rating across UK & Ireland",
      badge: "Top Rated",
      icon: <Users className="w-5 h-5 text-[#0BCB91]" />,
    },
    {
      value: "99.4%",
      label: "Success Rate",
      subtext: "On-time milestone delivery with strict SLA adherence",
      badge: "Proven",
      icon: <TrendingUp className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      value: "100%",
      label: "Client IP Ownership",
      subtext: "Full source code, IP rights & architecture handover",
      badge: "Zero Lock-in",
      icon: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
    },
  ];

  return (
    <section className="py-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#03071E]/50 backdrop-blur-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="relative p-[1.5px] rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 cursor-pointer shadow-xs hover:shadow-2xl"
            >
              {/* Animated Moving Color Border Beam on Hover */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,#1877F2_0deg,#00D8F6_90deg,#0BCB91_180deg,#1877F2_270deg,#00D8F6_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin [animation-duration:3s] transition-opacity duration-300 pointer-events-none" />

              {/* Default Border Mask */}
              <div className="absolute inset-0 rounded-3xl border border-slate-200/80 dark:border-slate-800 group-hover:border-transparent transition-colors duration-300 pointer-events-none" />

              {/* Card Inner Content */}
              <div className="relative h-full w-full rounded-[22.5px] bg-slate-50/90 dark:bg-[#070F28]/95 p-6 z-10 flex flex-col justify-between backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs group-hover:scale-110 transition-transform duration-300">
                      {s.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] border border-emerald-200/50 dark:border-emerald-800/50">
                      {s.badge}
                    </span>
                  </div>

                  {/* Metric Value */}
                  <div className="text-3xl sm:text-4xl font-black text-[#000B49] dark:text-white tracking-tight group-hover:text-[#1877F2] dark:group-hover:text-[#00D8F6] transition-colors duration-300">
                    {s.value}
                  </div>

                  {/* Metric Label */}
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                    {s.label}
                  </div>
                </div>

                {/* Metric Subtext */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans leading-relaxed">
                  {s.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
