"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ParticleField } from "@/components/ui/particle-field";
import { MockupVisual } from "@/components/ui/mockup-visual";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"streaming" | "epos" | "medical">("streaming");

  const tabConfig = {
    streaming: {
      name: "Odyssey.stream",
      domain: "Real-Time 3D & WebRTC",
      metric: "60 FPS · Sub-80ms",
      desc: "Unreal Engine 5 cloud pixel streaming with zero client installation.",
      link: "/projects/odyssey-stream",
    },
    epos: {
      name: "FirstChoice ePOS",
      domain: "Hospitality & KDS System",
      metric: "99.99% Till Uptime",
      desc: "Synchronized cloud tills, kitchen display screens, and offline SQLite resilience.",
      link: "/projects/firstchoice-epos",
    },
    medical: {
      name: "AB3 Medical",
      domain: "Athlete EMR & Health",
      metric: "HIPAA & GDPR Audited",
      desc: "Longitudinal athletic injury tracking and encrypted medical timelines.",
      link: "/projects/ab3-medical-emr",
    },
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Living Dynamic Particle Field across Hero Background */}
      <ParticleField particleCount={70} interactive={true} className="opacity-75" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Formal Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Elegant Clean Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-pulse" />
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

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-all shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors shadow-xs group"
              >
                <span>Explore Client Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
              >
                <span>About Mindrift</span>
              </Link>
            </div>

            {/* Enterprise Feature Trust Indicators */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <Globe2 className="w-4 h-4 text-[#1877F2]" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Real-Time 3D & WebRTC</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <Zap className="w-4 h-4 text-[#0BCB91]" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Hospitality ePOS & KDS</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#1877F2]" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Athlete EMR & HIPAA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Systems Showcase with Alive Particles */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white/95 dark:bg-[#070F28]/95 backdrop-blur-md p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
              {/* Interactive Platform Tabs */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setActiveTab("streaming")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === "streaming"
                        ? "bg-white dark:bg-slate-700 text-[#1877F2] dark:text-[#00D8F6] shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    3D Streaming
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("epos")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === "epos"
                        ? "bg-white dark:bg-slate-700 text-[#0BCB91] shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Cloud ePOS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("medical")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === "medical"
                        ? "bg-white dark:bg-slate-700 text-[#1877F2] shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Sports EMR
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0BCB91]">
                  <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-ping" />
                  <span className="hidden sm:inline">Live Deployment</span>
                </div>
              </div>

              {/* Dynamic Interactive Visual Preview */}
              <div className="rounded-2xl bg-slate-50 dark:bg-[#03071E] p-3 border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-inner">
                <MockupVisual
                  type={activeTab}
                  title={tabConfig[activeTab].name}
                />
              </div>

              {/* Active Tab Metadata */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#000B49] dark:text-white">
                      {tabConfig[activeTab].name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                      {tabConfig[activeTab].domain}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] border border-emerald-200/50 dark:border-emerald-800/50">
                    {tabConfig[activeTab].metric}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  {tabConfig[activeTab].desc}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={tabConfig[activeTab].link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline group"
                  >
                    <span>View Architecture Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-slate-400 font-sans">
                    Production Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
