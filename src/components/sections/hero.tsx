"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Zap,
  ShieldCheck,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Ambient Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-500/15 via-cyan-400/10 to-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-[300px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Centered Formal Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0BCB91] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0BCB91]" />
          </span>
          <span className="tracking-wide">Enterprise Technology Partner · High-Scale Systems</span>
        </div>

        {/* Centered Main Headline with 3D Depth & Fancy Gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-[#000B49] dark:text-white text-3d-formal max-w-4xl mx-auto">
          Engineering Digital Solutions <br className="hidden sm:inline" />
          <span className="text-3d-gradient inline-block mt-1">for a Smarter, Scalable Future.</span>
        </h1>

        {/* Centered Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-sans">
          Mindrift Agency architects and scales mission-critical digital systems: real-time 3D pixel streaming, cloud ePOS platforms, sports medical records (EMR), and high-scale consumer applications across Ireland, the UK, and international enterprises.
        </p>

        {/* Centered Action Buttons with Shimmer & 3D Interactive Elevation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#000B49] dark:bg-[#1877F2] hover:bg-[#1877F2] dark:hover:bg-blue-600 btn-3d-elevated btn-animate-shimmer shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] group cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-slate-800 dark:text-white bg-white/90 dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300/90 dark:border-slate-700/80 btn-secondary-elevated shadow-xs group cursor-pointer"
          >
            <span>Explore Client Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-4 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
          >
            <span>About Mindrift</span>
          </Link>
        </div>

        {/* Centered Enterprise Feature Indicators */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-[#1877F2]/40 transition-all">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#1877F2] flex-shrink-0">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Real-Time 3D</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">Sub-80ms WebRTC</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-[#0BCB91]/40 transition-all">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] flex-shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Cloud ePOS</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">99.99% Till Uptime</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-[#1877F2]/40 transition-all">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#1877F2] flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Athlete EMR</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">HIPAA & GDPR</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-[#0BCB91]/40 transition-all">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] flex-shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100">8+ Store Apps</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">Live Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
