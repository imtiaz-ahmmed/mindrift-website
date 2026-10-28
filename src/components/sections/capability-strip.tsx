import React from "react";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Network,
  Tv,
  Store,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

export function CapabilityStrip() {
  const capabilities = [
    {
      title: "Digital Product Engineering",
      tag: "Next.js · Node.js",
      href: "/services/software-engineering",
      icon: <Code2 className="w-4 h-4 text-[#1877F2]" />,
    },
    {
      title: "AI & Data Intelligence",
      tag: "LLMs · Analytics",
      href: "/services/ai-data-intelligence",
      icon: <Cpu className="w-4 h-4 text-[#0BCB91]" />,
    },
    {
      title: "Real-Time 3D & WebRTC",
      tag: "UE5 · Pixel Streaming",
      href: "/projects/odyssey-stream",
      icon: <Tv className="w-4 h-4 text-[#00D8F6]" />,
    },
    {
      title: "Cloud & DevOps Architecture",
      tag: "AWS · Kubernetes",
      href: "/services/cloud-devops",
      icon: <Cloud className="w-4 h-4 text-[#1877F2]" />,
    },
    {
      title: "Hospitality ePOS & KDS",
      tag: "SQLite · Offline Sync",
      href: "/projects/firstchoice-epos",
      icon: <Store className="w-4 h-4 text-[#0BCB91]" />,
    },
    {
      title: "Cybersecurity & DevSecOps",
      tag: "Zero Trust · SOC2",
      href: "/services/cybersecurity",
      icon: <ShieldCheck className="w-4 h-4 text-[#1877F2]" />,
    },
    {
      title: "Athlete EMR & Health Systems",
      tag: "HIPAA · Encrypted",
      href: "/projects/ab3-medical-emr",
      icon: <HeartPulse className="w-4 h-4 text-[#00D8F6]" />,
    },
    {
      title: "Enterprise Systems Integration",
      tag: "APIs · Microservices",
      href: "/services/enterprise-systems",
      icon: <Network className="w-4 h-4 text-[#0BCB91]" />,
    },
  ];

  // Duplicate for seamless 360-degree marquee loop
  const marqueeItems = [...capabilities, ...capabilities];

  return (
    <section className="py-4 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Label Pill */}
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            suppressHydrationWarning
            className="flex items-center gap-2 flex-shrink-0 pr-4 border-r-0 md:border-r border-slate-200 dark:border-slate-800"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1877F2] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1877F2]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 whitespace-nowrap">
              Core Capabilities:
            </span>
          </div>

          {/* Marquee Track with Edge Fades */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="100"
            suppressHydrationWarning
            className="relative flex-1 overflow-hidden animate-marquee-container group"
          >
            {/* Left Edge Gradient Mask */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />

            {/* Moving Track - Pauses on Hover */}
            <div className="animate-marquee flex items-center gap-3">
              {marqueeItems.map((c, idx) => (
                <Link
                  key={`${c.title}-${idx}`}
                  href={c.href}
                  className="group/item flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#1877F2]/50 dark:hover:border-[#0BCB91]/50 shadow-xs hover:shadow-md transition-all flex-shrink-0 whitespace-nowrap cursor-pointer"
                >
                  <div className="p-1 rounded-lg bg-white dark:bg-slate-900 shadow-xs flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-[#1877F2] dark:group-hover/item:text-[#0BCB91] transition-colors">
                      {c.title}
                    </span>
                    <span className="text-[10px] text-slate-600 dark:text-slate-300 font-sans">
                      {c.tag}
                    </span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all ml-1 flex-shrink-0" />
                </Link>
              ))}
            </div>

            {/* Right Edge Gradient Mask */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

