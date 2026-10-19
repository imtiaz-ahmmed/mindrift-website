import React from "react";
import { ShieldCheck, Zap, Activity, Smartphone, CheckCircle2 } from "lucide-react";

export function ImpactStats() {
  const stats = [
    {
      value: "100%",
      label: "Client IP Ownership",
      subtext: "Complete source code & configuration handover",
      icon: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
    },
    {
      value: "<80ms",
      label: "3D Cloud Latency",
      subtext: "Real-time Unreal Engine 5 WebRTC streaming",
      icon: <Activity className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      value: "99.99%",
      label: "Operational SLA",
      subtext: "Zero-downtime tills and hospital EMR databases",
      icon: <Zap className="w-5 h-5 text-[#0BCB91]" />,
    },
    {
      value: "8+",
      label: "Store Applications",
      subtext: "Published on Google Play & App Store",
      icon: <Smartphone className="w-5 h-5 text-[#1877F2]" />,
    },
  ];

  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03071E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50/80 dark:bg-[#070F2B]/90 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-[#1877F2]/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs">
                  {s.icon}
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] border border-emerald-200/50 dark:border-emerald-800/50">
                  Verified
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#000B49] dark:text-white tracking-tight group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                {s.value}
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {s.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-sans leading-relaxed">
                {s.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
