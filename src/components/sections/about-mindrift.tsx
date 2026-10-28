"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Target,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
} from "lucide-react";

export function AboutMindrift() {
  const missionBullets = [
    "Deterministic architecture before writing a line of code",
    "Zero vendor lock-in with 100% full IP and source code ownership",
    "Mission-critical resilience, privacy safeguards, and strict SLAs",
  ];

  const visionBullets = [
    "Enduring craftsmanship bridging complex enterprise workflows",
    "Deterministic AI platforms tested against strict reliability benchmarks",
    "High-performance cloud architectures scaling without compounding debt",
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#02071B] relative overflow-hidden">
      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[300px] bg-blue-600/10 dark:bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[250px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= TOP FULL BANNER: ABOUT MINDRIFT WITH IMAGE & TEXT OVERLAY ================= */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          suppressHydrationWarning
          className="relative w-full rounded-3xl overflow-hidden border border-blue-900/50 shadow-2xl group min-h-[480px] sm:min-h-[520px] md:min-h-[540px] flex flex-col justify-between p-6 sm:p-10 md:p-12 mb-8"
        >
          {/* Full Background Image (team visible on the right) */}
          <Image
            src="/assets/about/about-team.png"
            alt="Mindrift Engineering & Architecture Command Center"
            fill
            priority
            className="object-cover object-right lg:object-center group-hover:scale-[1.015] transition-transform duration-700 -z-20"
          />

          {/* Directional Gradient Overlays: Darker on Left for Text, Clear on Right for Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#01061C] via-[#01061C]/92 md:via-[#01061C]/80 lg:via-[#01061C]/70 to-[#01061C]/35 -z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#01061C] via-transparent to-[#01061C]/50 -z-10 pointer-events-none" />

          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Telemetry Header Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 w-full">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-ping" />
              <span className="text-[#0BCB91] font-bold">OPERATIONAL HUB</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-200 font-semibold tracking-wider uppercase text-[11px]">
                Dhaka Command Center
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span className="text-slate-300">Enterprise Certified</span>
            </div>
          </div>

          {/* Left Content Area Overlaid on the Image */}
          <div className="relative z-10 max-w-2xl space-y-5 pt-8 sm:pt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-[#00D8F6] border border-blue-400/30 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span className="uppercase tracking-wider">About Mindrift</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              Engineering with Purpose. <br />
              <span className="bg-gradient-to-r from-white via-cyan-100 to-[#00D8F6] bg-clip-text text-transparent">
                Innovating with Intelligence.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-200/95 leading-relaxed font-sans drop-shadow-sm max-w-xl">
              Mindrift is an elite software engineering and architecture studio founded by senior engineers, cloud architects, and data strategists. We partner with ambitious founders, tech companies, and modern enterprises globally to design, build, and scale mission-critical digital systems.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#1877F2] hover:bg-[#1567d3] transition-all shadow-lg hover:shadow-blue-500/25 group/btn cursor-pointer"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-200 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl backdrop-blur-xs">
                <Globe className="w-3.5 h-3.5 text-[#00D8F6]" />
                <span>Serving UK, Ireland, UAE, USA &amp; BD</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SIDE-BY-SIDE CARDS: OUR MISSION & OUR VISION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Mission Card */}
          <div
            data-aos="fade-up"
            data-aos-duration="750"
            suppressHydrationWarning
            className="rounded-3xl p-7 sm:p-9 bg-slate-50/90 dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-xs hover:border-[#1877F2]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-colors" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-[#1877F2] flex items-center justify-center border border-blue-200/50 dark:border-blue-800/40 shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#1877F2] dark:text-[#2B87FF] px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-900/40">
                  Purpose &amp; Commitment
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#000B49] dark:text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-2">
                  To empower modern enterprises and visionary founders with robust, scalable, and secure digital software. We eliminate the frustration of brittle legacy systems by delivering maintainable, well-architected platforms that drive measurable commercial growth.
                </p>
              </div>

              <div className="pt-4 space-y-2.5 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 font-sans">
                {missionBullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1877F2] flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Vision Card */}
          <div
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="150"
            suppressHydrationWarning
            className="rounded-3xl p-7 sm:p-9 bg-slate-50/90 dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-xs hover:border-[#0BCB91]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-500/20 transition-colors" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-[#0BCB91] flex items-center justify-center border border-emerald-200/50 dark:border-emerald-800/40 shadow-xs">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#0BCB91] px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/50 dark:border-emerald-900/40">
                  Forward Outlook
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#000B49] dark:text-white tracking-tight">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-2">
                  A future where software systems are built with enduring craftsmanship. Where AI automates tedious workflows reliably, where cloud infrastructure is resilient and cost-optimized, and where enterprise software is as intuitive and delightful as the best consumer products.
                </p>
              </div>

              <div className="pt-4 space-y-2.5 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 font-sans">
                {visionBullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0BCB91] flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
