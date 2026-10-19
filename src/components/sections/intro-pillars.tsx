import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Zap, Layers } from "lucide-react";

export function IntroPillars() {
  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#040A24]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              The Mindrift Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
              Technology That Moves Your Business Forward.
            </h2>
          </div>
          <div className="lg:col-span-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              Mindrift Agency unifies strategic foresight, precision software engineering, and disciplined cloud implementation. We eliminate technical ambiguity to build resilient digital systems that scale seamlessly with your commercial goals.
            </p>
          </div>
        </div>

        {/* Refined Asymmetric Editorial 3-Pillar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Strategic Thinking */}
          <div className="relative rounded-2xl bg-white dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-[#1877F2] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400">PILLAR 01</div>
              <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
                Strategic Thinking
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We begin by dissecting your commercial objectives, compliance boundaries, and competitive landscape. We evaluate build-versus-buy trade-offs, draft non-functional requirement specs, and de-risk technical investments before writing code.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <Link
                href="/services/product-strategy"
                className="text-xs font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline inline-flex items-center gap-1.5 group"
              >
                <span>Explore Technical Consulting</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Engineering Excellence (Featured Highlight) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#000B49] to-[#0A1647] p-8 border border-blue-900/50 shadow-xl text-white flex flex-col justify-between lg:-translate-y-2">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0BCB91]/20 text-[#0BCB91] flex items-center justify-center border border-[#0BCB91]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#0BCB91]">PILLAR 02 · CORE STANDARD</div>
              <h3 className="text-xl font-bold text-white">
                Engineering Excellence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We hold our engineering to strict quality bars: strictly-typed TypeScript, deterministic database schemas, zero-trust network boundaries, automated regression test suites, and clean modular boundaries that outlive shifting tech fads.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="/services/software-engineering"
                className="text-xs font-bold text-[#0BCB91] hover:text-white inline-flex items-center gap-1.5 group"
              >
                <span>Explore Software Engineering</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Scalable Innovation */}
          <div className="relative rounded-2xl bg-white dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400">PILLAR 03</div>
              <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
                Scalable Innovation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We integrate emerging capabilities—from practical agentic AI workflows and spatial location intelligence to automated cloud FinOps—ensuring your architecture effortlessly handles tenfold user growth without exponential cost.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <Link
                href="/services/ai-data-intelligence"
                className="text-xs font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline inline-flex items-center gap-1.5 group"
              >
                <span>Explore AI & Data Intelligence</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
