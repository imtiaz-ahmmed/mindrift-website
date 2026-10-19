"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Cpu, Cloud, CheckCircle2, ChevronRight } from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"architecture" | "intelligence" | "security">("architecture");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 dark:border-slate-800/80">
      {/* Background Tech Mesh and Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Capability Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-pulse" />
              <span>Software Engineering · AI · Cloud · Cybersecurity</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#000B49] dark:text-white leading-[1.12]">
              Engineering Digital Solutions for a{" "}
              <span className="brand-gradient-text">Smarter Future.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Mindrift Agency helps businesses transform complex challenges into intelligent digital products through software engineering, AI, cloud, cybersecurity, and enterprise technology solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-all shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Engineering Principles Mini Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91] flex-shrink-0" />
                <span>Production-Ready Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91] flex-shrink-0" />
                <span>Strict Architectural Rigor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91] flex-shrink-0" />
                <span>Enterprise SLA & Security</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg rounded-2xl bg-gradient-to-b from-slate-900 to-[#050B20] p-6 shadow-2xl border border-slate-700/80 text-white">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">mindrift-engine::v3.4</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#0BCB91] font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-ping" />
                  ONLINE
                </div>
              </div>

              {/* Interactive Layer Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-800/80 rounded-lg my-4 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab("architecture")}
                  className={`py-1.5 rounded-md transition-all ${
                    activeTab === "architecture"
                      ? "bg-[#1877F2] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("intelligence")}
                  className={`py-1.5 rounded-md transition-all ${
                    activeTab === "intelligence"
                      ? "bg-[#1877F2] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  AI & Data
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("security")}
                  className={`py-1.5 rounded-md transition-all ${
                    activeTab === "security"
                      ? "bg-[#1877F2] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Zero Trust
                </button>
              </div>

              {/* Dynamic Diagram Content based on Tab */}
              <div className="space-y-3 min-h-[220px] flex flex-col justify-center">
                {activeTab === "architecture" && (
                  <div className="space-y-2.5 animate-in fade-in duration-200">
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#1877F2] flex items-center justify-center font-bold text-xs">
                          FE
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Next.js App Router & Edge</div>
                          <div className="text-[10px] text-slate-400">Server Components · Sub-second TTFB</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#0BCB91]">ACTIVE</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#0BCB91] flex items-center justify-center font-bold text-xs">
                          API
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">NestJS / Node.js Microservices</div>
                          <div className="text-[10px] text-slate-400">Rate-limited REST & GraphQL contracts</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#0BCB91]">OPTIMIZED</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                          DB
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">PostgreSQL + PostGIS + pgvector</div>
                          <div className="text-[10px] text-slate-400">Read Replicas · Automated PITR</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#0BCB91]">SYNCED</span>
                    </div>
                  </div>
                )}

                {activeTab === "intelligence" && (
                  <div className="space-y-2.5 animate-in fade-in duration-200">
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-300">RAG Hybrid Semantic Retrieval</span>
                        <span className="font-mono text-[#0BCB91] text-[10px]">99.4% Accuracy</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#1877F2] to-[#0BCB91] h-full w-[94%]" />
                      </div>
                      <div className="text-[10px] text-slate-400 flex justify-between">
                        <span>BM25 + Dense Vector Embeddings</span>
                        <span>Latency: 18ms</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-[#0BCB91]" />
                        <div>
                          <div className="text-xs font-bold text-white">Deterministic Guardrails</div>
                          <div className="text-[10px] text-slate-400">Zero Hallucination Output Verification</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-blue-400">ENFORCED</span>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-2.5 animate-in fade-in duration-200">
                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-[#0BCB91]" />
                        <div>
                          <div className="text-xs font-bold text-white">OAuth 2.0 / OIDC Gateway</div>
                          <div className="text-[10px] text-slate-400">Contextual MFA & Ephemeral Tokens</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#0BCB91]">PASS</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cloud className="w-5 h-5 text-[#1877F2]" />
                        <div>
                          <div className="text-xs font-bold text-white">Default-Deny Network Policies</div>
                          <div className="text-[10px] text-slate-400">Pod-to-Pod Mutual TLS Encryption</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#0BCB91]">LOCKED</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Real-time Telemetry Bar */}
              <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2]" />
                  <span>Global Availability: 99.99%</span>
                </div>
                <span>TLS 1.3 · Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
