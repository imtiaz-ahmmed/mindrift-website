import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Globe, ShieldCheck, Layers } from "lucide-react";

export function IndustriesGrid() {
  const domainTags = [
    "Financial Services & Banking",
    "Retail & Omni-Commerce",
    "Manufacturing & Industrial IoT",
    "Logistics, Supply Chain & GIS",
    "Government & Public Sector",
    "Healthcare & Health Technology",
    "Education & EdTech",
    "Technology & Multi-Tenant SaaS",
  ];

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081E] relative overflow-hidden">
      {/* Background Ambient Cyber Lights */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[300px] bg-blue-600/10 dark:bg-blue-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[250px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            suppressHydrationWarning
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#1877F2] dark:text-[#0BCB91] border border-blue-200/60 dark:border-blue-900/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span className="uppercase tracking-wider">Domain Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight">
              Industries We Serve.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              We apply proven software architectures, low-latency infrastructure, and deep operational understanding to solve high-stakes challenges across diverse industries worldwide.
            </p>
          </div>
          <Link
            href="/industries"
            data-aos="fade-left"
            data-aos-duration="750"
            suppressHydrationWarning
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline self-start md:self-end group"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ================= HIGH-TECH VIDEO SHOWCASE THEATER ================= */}
        <div
          data-aos="fade-up"
          data-aos-duration="850"
          suppressHydrationWarning
          className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#020B30] via-[#010824] to-[#000412] border border-blue-900/50 shadow-2xl group"
        >
          {/* Subtle Ambient Background Glow Behind Video */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-[#00D8F6]/15 to-[#0BCB91]/20 blur-2xl pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

          {/* Top HUD Overlay Tag Bar */}
          <div className="relative z-20 flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-ping" />
              <span className="text-[#0BCB91] font-bold">ACTIVE STREAM</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
                Cross-Domain Architecture Ecosystem
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-[#00D8F6]" />
                <span>Global Production Systems</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0BCB91]" />
                <span>Enterprise Certified</span>
              </span>
            </div>
          </div>

          {/* Media Container Frame */}
          <div className="relative z-10 w-full overflow-hidden flex items-center justify-center p-2 sm:p-4 bg-black/60">
            <Image
              src="/assets/domain/domain.gif"
              alt="Mindrift Domain Architecture Overview"
              width={1280}
              height={720}
              unoptimized
              priority
              className="w-full h-auto max-h-[580px] sm:max-h-[640px] rounded-2xl object-contain shadow-2xl block"
            />
          </div>

          {/* Bottom Interactive Breadth Strip: Industry Tags */}
          <div className="relative z-20 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00D8F6]">
                <Layers className="w-4 h-4 text-[#0BCB91]" />
                <span className="uppercase tracking-wider">Operational Domains:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {domainTags.map((tag) => (
                  <Link
                    key={tag}
                    href="/industries"
                    className="px-3 py-1 rounded-lg text-xs font-medium font-sans bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10 transition-all cursor-pointer"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
