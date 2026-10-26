"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Compass,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  GitBranch,
} from "lucide-react";

interface PhilosophyPortal {
  id: string;
  pillarIndex: string;
  shortLabel: string;
  badge: string;
  title: string;
  tagline: string;
  summary: string;
  video: string;
  poster: string;
  accentColor: string;
  glowColor: string;
  activeBorder: string;
  icon: React.ReactNode;
  deliverables: string[];
  link: string;
  linkText: string;
}

const portals: PhilosophyPortal[] = [
  {
    id: "system-design",
    pillarIndex: "01",
    shortLabel: "Architecture",
    badge: "Disciplined System Design",
    title: "System Blueprint Before Code",
    tagline: "Preventing costly rewrites through concrete schemas and API contracts.",
    summary:
      "We define data models and API contracts upfront so development proceeds fast without costly mid-stream pivots.",
    video: "/assets/philosophy/p-1.mp4",
    poster: "/assets/philosophy/p-1.png",
    accentColor: "from-[#00D8F6] to-[#1877F2]",
    glowColor: "rgba(0, 216, 246, 0.4)",
    activeBorder: "border-[#00D8F6]",
    icon: <Compass className="w-5 h-5 text-[#00D8F6]" />,
    deliverables: [
      "Documented Architecture Records (ADRs)",
      "Normalized Relational Schemas (PostgreSQL)",
      "Strict OpenAPI & TypeScript Contracts",
    ],
    link: "/services/product-strategy",
    linkText: "Explore Architecture",
  },
  {
    id: "direct-collaboration",
    pillarIndex: "02",
    shortLabel: "Senior Team",
    badge: "Direct Engineering Synergy",
    title: "Direct Senior Engineering Access",
    tagline: "No account managers or opaque offshore pass-throughs.",
    summary:
      "You collaborate directly with senior software engineers through weekly staging demos, open GitHub access, and transparent sprint cycles.",
    video: "/assets/philosophy/p-2.mp4",
    poster: "/assets/philosophy/p-2.png",
    accentColor: "from-[#1877F2] to-[#0BCB91]",
    glowColor: "rgba(24, 119, 242, 0.45)",
    activeBorder: "border-[#1877F2]",
    icon: <ShieldCheck className="w-5 h-5 text-[#1877F2]" />,
    deliverables: [
      "Direct GitHub access & commit history from Day 1",
      "Weekly working builds on private staging",
      "Direct technical communication with senior engineers",
    ],
    link: "/services/software-engineering",
    linkText: "Explore Software Engineering",
  },
  {
    id: "sustainable-scale",
    pillarIndex: "03",
    shortLabel: "Scalability",
    badge: "Maintainable Architecture",
    title: "Sensible, Scalable Architecture",
    tagline: "Proven technologies chosen for operational durability and low overhead.",
    summary:
      "We avoid premature microservice over-engineering. We build modular, containerized systems that handle real growth with lean cloud bills.",
    video: "/assets/philosophy/p-3.mp4",
    poster: "/assets/philosophy/p-3.png",
    accentColor: "from-[#0BCB91] to-[#00D8F6]",
    glowColor: "rgba(11, 203, 145, 0.4)",
    activeBorder: "border-[#0BCB91]",
    icon: <Zap className="w-5 h-5 text-[#0BCB91]" />,
    deliverables: [
      "Modular monoliths & clean domain separation",
      "Dockerized setups with reproducible environments",
      "Automated indexing, query optimization & caching",
    ],
    link: "/services/cloud-devops",
    linkText: "Explore Cloud & Scalability",
  },
];

export function IntroPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const isHoveringRef = useRef<boolean>(false);
  const lastScrollY = useRef<number>(0);

  // Scroll-linked progressive activation (Pillar 1 -> Pillar 2 -> Pillar 3)
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolled significantly, allow scroll tracking to take over
      if (Math.abs(window.scrollY - lastScrollY.current) > 140) {
        isHoveringRef.current = false;
      }

      if (isHoveringRef.current) return;

      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Track progress as section moves through the viewport:
      // Start measuring when section top reaches 75% of viewport
      const startPoint = windowHeight * 0.75;
      const endPoint = -rect.height * 0.2;
      const totalDistance = startPoint - endPoint;
      const currentProgress = (startPoint - rect.top) / totalDistance;

      const progress = Math.min(Math.max(currentProgress, 0), 1);

      if (progress < 0.36) {
        setActiveIdx(0); // 1st: Pillar 01
      } else if (progress < 0.72) {
        setActiveIdx(1); // 2nd: Pillar 02
      } else {
        setActiveIdx(2); // 3rd: Pillar 03
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterPanel = (idx: number) => {
    isHoveringRef.current = true;
    setActiveIdx(idx);
    lastScrollY.current = window.scrollY;
  };

  const handleMouseLeaveContainer = () => {
    isHoveringRef.current = false;
  };

  const activePortal = portals[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#02071A] relative overflow-hidden"
    >
      {/* Background Ambient High-Tech Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#1877F2] dark:text-[#0BCB91] border border-blue-200/60 dark:border-blue-900/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span className="uppercase tracking-wider">The Mindrift Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight">
              Engineering Disciplines That Drive Real Business Value.
            </h2>
          </div>
          <div className="max-w-md text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              We don&apos;t hide behind buzzwords. We design deterministic systems, work directly as senior engineering partners, and build sensible architectures that scale predictably.
            </p>
          </div>
        </div>

        {/* Desktop Synchronized Step Indicators */}
        <div className="hidden lg:flex items-center justify-center gap-3 mb-6">
          {portals.map((p, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleMouseEnterPanel(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#1877F2]/20 text-[#00D8F6] border border-[#00D8F6]/60 shadow-sm scale-105"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-[#00D8F6] animate-ping" : "bg-slate-500"
                  }`}
                />
                <span>Pillar {p.pillarIndex}</span>
                <span>·</span>
                <span>{p.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Pillar Switcher Tabs (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 mb-6 overflow-x-auto shadow-xs">
          {portals.map((p, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleMouseEnterPanel(idx)}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#000B49] text-white dark:bg-gradient-to-r dark:from-[#1877F2] dark:to-[#0BCB91] shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{p.pillarIndex}</span>
                <span>·</span>
                <span>{p.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ================= DESKTOP EXPANDING VIDEO PORTALS (>= 1024px) ================= */}
        <div
          onMouseLeave={handleMouseLeaveContainer}
          className="hidden lg:flex w-full h-[540px] rounded-3xl overflow-hidden gap-3.5 p-3.5 bg-gradient-to-b from-[#000824] via-[#020B30] to-[#000516] border border-blue-900/40 shadow-2xl relative"
        >
          {portals.map((portal, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={portal.id}
                onMouseEnter={() => handleMouseEnterPanel(idx)}
                onClick={() => handleMouseEnterPanel(idx)}
                style={{ willChange: "flex-grow" }}
                className={`relative rounded-2xl overflow-hidden transition-[flex-grow,border-color,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "flex-[2.8] bg-gradient-to-br from-[#020D38] via-[#010722] to-[#000412] border-2 border-[#1877F2]/80 shadow-2xl z-20"
                    : "flex-[0.8] hover:flex-[0.95] bg-[#010619]/90 border border-slate-800/80 hover:border-slate-700 cursor-pointer z-10"
                }`}
              >
                {/* Ambient Glow for Active Panel */}
                <div
                  className={`absolute -inset-1 rounded-2xl blur-2xl pointer-events-none -z-10 transition-opacity duration-500 ${
                    isActive ? "opacity-35" : "opacity-0"
                  }`}
                  style={{ background: portal.glowColor }}
                />

                {/* Inner Two-Column Flex Container */}
                <div className="w-full h-full flex items-center justify-between p-6 relative z-10 overflow-hidden">
                  {/* LEFT: Crisp, Punchy Text (Reveals smoothly when active) */}
                  <div
                    className={`h-full flex flex-col justify-between py-2 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 translate-x-0 w-[55%] pointer-events-auto"
                        : "opacity-0 -translate-x-6 w-0 pointer-events-none overflow-hidden"
                    }`}
                  >
                    {/* Header Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-white/15 text-[#0BCB91] flex items-center justify-center font-mono font-bold text-xs border border-[#0BCB91]/30">
                          {portal.pillarIndex}
                        </span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0BCB91]">
                          {portal.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                        {portal.title}
                      </h3>

                      <p className="text-xs text-[#00D8F6]/90 font-medium">
                        {portal.tagline}
                      </p>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                        {portal.summary}
                      </p>
                    </div>

                    {/* Concise Deliverables Checklist */}
                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs">
                        {portal.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#0BCB91]" />
                            <span className="text-xs leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href={portal.link}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] transition-colors shadow-md group cursor-pointer"
                      >
                        <span>{portal.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT: Persistent Uncropped Video Theatre */}
                  <div
                    className={`h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "w-[42%] max-w-[270px] xl:max-w-[290px]"
                        : "w-full"
                    }`}
                  >
                    <div className="relative w-full h-[450px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#020A2B] via-[#010619] to-[#000412] border border-blue-900/60 shadow-xl flex items-center justify-center p-2">
                      {/* Video Element (Persistent, NEVER unmounts) */}
                      <video
                        src={portal.video}
                        poster={portal.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className={`max-h-full max-w-full w-auto h-auto object-contain transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-60 group-hover:opacity-85"
                        }`}
                      />

                      {/* Subtle Holographic Scanline */}
                      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                        <div className="w-[180%] h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/4 animate-holographic" />
                      </div>

                      {/* Top HUD Tag */}
                      <div className="absolute top-2.5 inset-x-3 z-30 flex items-center justify-between text-[10px] font-mono tracking-wider px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-ping" />
                          <span className="text-[#0BCB91] font-bold">STREAM</span>
                        </div>
                        <span className="text-slate-400 font-semibold">{portal.pillarIndex} · CORE</span>
                      </div>

                      {/* Collapsed Overlay Pill (Visible only when inactive) */}
                      {!isActive && (
                        <div className="absolute bottom-3 inset-x-2 z-30 flex flex-col items-center justify-center text-center p-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white">
                          <span className="text-[10px] font-mono text-[#0BCB91] font-bold uppercase tracking-wider">
                            Pillar {portal.pillarIndex}
                          </span>
                          <span className="text-xs font-bold truncate max-w-[140px]">
                            {portal.shortLabel}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MOBILE VIEW (< 1024px) ================= */}
        <div className="lg:hidden rounded-3xl overflow-hidden bg-gradient-to-b from-[#000824] via-[#020B30] to-[#000516] border border-blue-900/40 p-5 text-white shadow-xl space-y-5">
          {/* Mobile Active Uncropped Video */}
          <div className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#020A2B] via-[#010619] to-[#000412] border border-blue-900/60 shadow-lg flex items-center justify-center p-2">
            <video
              key={activePortal.video}
              src={activePortal.video}
              poster={activePortal.poster}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="max-h-full max-w-full w-auto h-auto object-contain z-10"
            />
            {/* Top HUD */}
            <div className="absolute top-2.5 inset-x-3 z-20 flex items-center justify-between text-[10px] font-mono px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-slate-300">
              <span className="text-[#0BCB91] font-bold">● ACTIVE</span>
              <span className="text-slate-400">{activePortal.pillarIndex} · CORE</span>
            </div>
          </div>

          {/* Mobile Active Editorial Text */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-white/15 text-[#0BCB91] flex items-center justify-center font-mono font-bold text-xs border border-[#0BCB91]/30">
                {activePortal.pillarIndex}
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0BCB91]">
                {activePortal.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              {activePortal.title}
            </h3>

            <p className="text-xs text-[#00D8F6]/90 font-medium">
              {activePortal.tagline}
            </p>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {activePortal.summary}
            </p>

            {/* Deliverables */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Deliverables:
              </span>
              <ul className="space-y-1.5 text-xs">
                {activePortal.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#0BCB91]" />
                    <span className="text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href={activePortal.link}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] transition-colors"
              >
                <span>{activePortal.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Grounded Technical Assurance Footer Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#000B49] via-[#05113A] to-[#000B49] text-white border border-blue-900/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white/10 text-[#0BCB91] flex items-center justify-center border border-white/10 flex-shrink-0">
              <GitBranch className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0BCB91]">
                Our Non-Negotiable Commitment
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                You own 100% of your source code, schemas, and configurations from Day 1.
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl font-sans">
                No proprietary vendor lock-in, no hidden IP clauses, and clean documentation so any competent developer can take over if needed.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] transition-colors shadow-md group cursor-pointer"
            >
              <span>Discuss Your Architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
