"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Cpu,
  Cloud,
  CheckCircle2,
  ChevronRight,
  FileText,
  ExternalLink,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"streaming" | "epos" | "medical">("streaming");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 dark:border-slate-800/80">
      {/* Background Tech Mesh and Dynamic Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-emerald-500/15 dark:bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Tech Agency Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tech Agency Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-ping" />
              <span>// HIGH-CONCURRENCY ENGINEERING &amp; AI SYSTEMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000B49] dark:text-white leading-[1.12]">
              Engineering Digital Solutions for a{" "}
              <span className="brand-gradient-text">Smarter Future.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-sans">
              Mindrift Agency architects and scales mission-critical digital systems: real-time 3D pixel streaming, cloud ePOS platforms, sports medical records, and enterprise mobile applications.
            </p>

            {/* CTAs including Company Profile Drive Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-all shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] group border border-blue-400/20"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Company Profile PDF Link Button */}
              <a
                href={siteConfig.companyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-[#000B49] dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors shadow-xs group"
              >
                <FileText className="w-4 h-4 text-[#0BCB91]" />
                <span>Company Profile (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors" />
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
              >
                <span>Explore Portfolio</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* High-Tech Terminal Metric Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <span className="text-[#0BCB91] font-bold">[✓]</span>
                <span>Real-Time 3D &amp; WebRTC</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <span className="text-[#0BCB91] font-bold">[✓]</span>
                <span>Hospitality ePOS &amp; KDS</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <span className="text-[#0BCB91] font-bold">[✓]</span>
                <span>HIPAA Healthcare EMR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Agency Console */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg rounded-2xl bg-[#03081E] p-6 shadow-2xl border border-blue-900/60 text-white overflow-hidden">
              {/* Corner Tech Brackets */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-blue-500/40">[ + ]</div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-blue-500/40">[ + ]</div>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-blue-500/40">[ + ]</div>
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-blue-500/40">[ + ]</div>

              {/* Console Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400">mindrift::runtime_core</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#0BCB91] font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-ping" />
                  <span>LIVE PROD</span>
                </div>
              </div>

              {/* Interactive Architecture Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/90 rounded-xl my-4 text-xs font-mono font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("streaming")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeTab === "streaming"
                      ? "bg-[#1877F2] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  3D Stream
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("epos")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeTab === "epos"
                      ? "bg-[#1877F2] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ePOS Cloud
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("medical")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeTab === "medical"
                      ? "bg-[#1877F2] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Athlete EMR
                </button>
              </div>

              {/* Dynamic Console Telemetry */}
              <div className="space-y-3 min-h-[200px] flex flex-col justify-center font-mono">
                {activeTab === "streaming" && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#00D8F6] font-bold">ODYSSEY.STREAM UE5 ENGINE</span>
                        <span className="text-[#0BCB91] text-[10px]">60 FPS · 4K</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans">
                        WebRTC pixel-streaming directly into browser canvases without download.
                      </p>
                      <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                        <span>Dolby.io Spatial Audio: Active</span>
                        <span className="text-emerald-400">Latency: 38ms</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-300">GPU Fleet: AWS G4dn Multi-Region</span>
                      <span className="text-[#0BCB91] text-[11px]">AUTOSCALING</span>
                    </div>
                  </div>
                )}

                {activeTab === "epos" && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-900/50 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#0BCB91] font-bold">FIRSTCHOICE ePOS IRELAND</span>
                        <span className="text-white text-[10px]">TILLS + KDS</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans">
                        Unified till software, kitchen display system, kiosks, and table ordering.
                      </p>
                      <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                        <span>MQTT Kitchen Chime: Sub-100ms</span>
                        <span className="text-emerald-400">Offline SQLite: Ready</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Thermal Printer Driver (ESC/POS)</span>
                      <span className="text-[#0BCB91] text-[11px]">ONLINE</span>
                    </div>
                  </div>
                )}

                {activeTab === "medical" && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-blue-400 font-bold">AB3 MEDICAL ATHLETE EMR</span>
                        <span className="text-[#0BCB91] text-[10px]">HIPAA COMPLIANT</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans">
                        Lifelong electronic health records owned by the athlete across transfers.
                      </p>
                      <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                        <span>Encrypted DICOM Viewer: Active</span>
                        <span className="text-emerald-400">Audit Trail: 100%</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Cryptographic Consent Engine</span>
                      <span className="text-[#0BCB91] text-[11px]">ENFORCED</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Real-time Telemetry Bar */}
              <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#0BCB91]" />
                  <span>GLOBAL UPTIME: 99.99%</span>
                </div>
                <span>NODE PROTOCOL: TLS 1.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
