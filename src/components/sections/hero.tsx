"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Hero3DScene } from "@/components/ui/hero-3d-scene";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Formal Enterprise Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Elegant Clean Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0BCB91]" />
              <span>Enterprise Technology Agency · Global Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#000B49] dark:text-white leading-[1.12]">
              Engineering Digital Solutions for a{" "}
              <span className="brand-gradient-text">Smarter Future.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-sans">
              Mindrift Agency architects and scales mission-critical digital systems: real-time 3D pixel streaming, cloud ePOS platforms, sports medical records (EMR), and high-scale consumer applications across Ireland, the UK, and international enterprises.
            </p>

            {/* CTAs including Company Profile Drive Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-all shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Company Profile PDF Link Button */}
              <a
                href={siteConfig.companyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors shadow-xs group"
              >
                <FileText className="w-4 h-4 text-[#0BCB91]" />
                <span>Company Profile (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors" />
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Enterprise Feature Trust Indicators */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <Globe2 className="w-4 h-4 text-[#1877F2]" />
                <span className="font-medium">Real-Time 3D & WebRTC</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <Zap className="w-4 h-4 text-[#0BCB91]" />
                <span className="font-medium">Hospitality ePOS & KDS</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#1877F2]" />
                <span className="font-medium">Athlete EMR & HIPAA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive 3D WebGL Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full rounded-3xl bg-slate-950/90 dark:bg-[#03071E] border border-slate-200/20 dark:border-blue-900/40 shadow-2xl overflow-hidden p-2">
              {/* Interactive Three.js 3D Sphere Component */}
              <Hero3DScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
