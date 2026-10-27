"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

interface PhilosophyPortal {
  id: string;
  pillarIndex: string;
  shortLabel: string;
  badge: string;
  title: string;
  statement: string;
  video: string;
  poster: string;
  accentColor: string;
  glowColor: string;
  activeBorder: string;
  icon: React.ReactNode;
  tags: string[];
}

const portals: PhilosophyPortal[] = [
  {
    id: "system-design",
    pillarIndex: "01",
    shortLabel: "Architecture",
    badge: "System Design",
    title: "Blueprint Before Code.",
    statement:
      "Strict schemas and API contracts upfront. We eliminate costly architectural rewrites before shipping a single screen.",
    video: "/assets/philosophy/p-1.mp4",
    poster: "/assets/philosophy/p-1.png",
    accentColor: "from-[#00D8F6] to-[#1877F2]",
    glowColor: "rgba(0, 216, 246, 0.4)",
    activeBorder: "border-[#00D8F6]",
    icon: <Compass className="w-5 h-5 text-[#00D8F6]" />,
    tags: ["PostgreSQL Schemas", "TypeScript Contracts", "ADR Architecture"],
  },
  {
    id: "direct-collaboration",
    pillarIndex: "02",
    shortLabel: "Senior Team",
    badge: "Direct Engineering",
    title: "Senior Engineers Only.",
    statement:
      "No account managers. No juniors. You build directly with experienced engineers through weekly working releases.",
    video: "/assets/philosophy/p-2.mp4",
    poster: "/assets/philosophy/p-2.png",
    accentColor: "from-[#1877F2] to-[#0BCB91]",
    glowColor: "rgba(24, 119, 242, 0.45)",
    activeBorder: "border-[#1877F2]",
    icon: <ShieldCheck className="w-5 h-5 text-[#1877F2]" />,
    tags: ["GitHub Day 1 Access", "Weekly Staging Demos", "Zero Middlemen"],
  },
  {
    id: "sustainable-scale",
    pillarIndex: "03",
    shortLabel: "Scalability",
    badge: "Operational Scale",
    title: "Built for Longevity.",
    statement:
      "No premature microservice sprawl. Clean modular systems engineered for high throughput and lean cloud infrastructure.",
    video: "/assets/philosophy/p-3.mp4",
    poster: "/assets/philosophy/p-3.png",
    accentColor: "from-[#0BCB91] to-[#00D8F6]",
    glowColor: "rgba(11, 203, 145, 0.4)",
    activeBorder: "border-[#0BCB91]",
    icon: <Zap className="w-5 h-5 text-[#0BCB91]" />,
    tags: ["Modular Architecture", "Optimized Queries", "Lean Cloud Bills"],
  },
];

export function IntroPillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const isHoveringRef = useRef<boolean>(false);

  // Progressive Scroll Interaction:
  // Calibrated runway (250vh) and gentle thresholds give comfortable, slow scroll pacing.
  // Synchronized via requestAnimationFrame for silky 60fps/120fps display refresh.
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateScrollState = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      // When the user actively scrolls, reset hover override so scroll smoothly guides the experience
      isHoveringRef.current = false;

      if (totalScrollable > 100) {
        // Desktop sticky runway tracking
        const topOffset = window.innerWidth >= 1280 ? 64 : 56;
        const scrolled = topOffset - rect.top;
        const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

        if (progress < 0.34) {
          setActiveIdx(0); // 1st pillar
        } else if (progress < 0.67) {
          setActiveIdx(1); // 2nd pillar
        } else {
          setActiveIdx(2); // 3rd pillar
        }
      } else {
        // Mobile natural viewport tracking (< 1024px)
        const startPoint = windowHeight * 0.75;
        const endPoint = -rect.height * 0.2;
        const totalDistance = startPoint - endPoint;
        const currentProgress = (startPoint - rect.top) / totalDistance;
        const progress = Math.min(Math.max(currentProgress, 0), 1);

        if (progress < 0.34) {
          setActiveIdx(0);
        } else if (progress < 0.67) {
          setActiveIdx(1);
        } else {
          setActiveIdx(2);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterPanel = (idx: number) => {
    isHoveringRef.current = true;
    setActiveIdx(idx);
  };

  const handleMouseLeaveContainer = () => {
    isHoveringRef.current = false;
    // Re-sync back to current scroll position smoothly
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable > 100) {
      const topOffset = window.innerWidth >= 1280 ? 64 : 56;
      const scrolled = topOffset - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      if (progress < 0.34) setActiveIdx(0);
      else if (progress < 0.67) setActiveIdx(1);
      else setActiveIdx(2);
    }
  };

  const activePortal = portals[activeIdx];

  return (
    <section
      ref={containerRef}
      className="relative lg:min-h-[250vh] border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#02071A]"
    >
      {/* Background Ambient High-Tech Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Sticky Pinned Viewport Frame on Desktop (Vertically Centered with Ample Breathing Room) */}
      <div className="lg:sticky lg:top-14 xl:top-16 lg:h-[calc(100vh-3.5rem)] xl:h-[calc(100vh-4rem)] flex flex-col justify-center py-6 lg:py-2 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header: Minimal, Centered, Zero Redundancy */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-4 xl:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#1877F2] dark:text-[#0BCB91] border border-blue-200/60 dark:border-blue-900/50 shadow-xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span className="uppercase tracking-wider">The Mindrift Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight">
              Engineering Without Compromise.
            </h2>
          </div>

          {/* Mobile Pillar Switcher Tabs (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 mb-5 overflow-x-auto shadow-xs">
            {portals.map((p, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleMouseEnterPanel(idx)}
                  className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
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
          {/*
            Graceful, Slow & Velvety Transition Engine:
            - 1100ms slow, cinematic deceleration curve: cubic-bezier(0.25, 1, 0.3, 1).
            - Perfectly relaxed accordion expansion: gives user ample time to appreciate each pillar without rushing.
            - Stable video theater width (w-[210px] xl:w-[230px]) across both active & inactive states: ZERO resizing jumps!
            - Left text softly slides and fades in over 1100ms.
            - Persistent <video> tags in DOM to prevent re-buffering or thread freezing.
          */}
          <div
            onMouseLeave={handleMouseLeaveContainer}
            className="hidden lg:flex w-full h-[370px] xl:h-[390px] rounded-3xl overflow-hidden gap-3.5 p-3.5 bg-gradient-to-b from-[#000824] via-[#020B30] to-[#000516] border border-blue-900/40 shadow-2xl relative"
          >
            {portals.map((portal, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={portal.id}
                  onMouseEnter={() => handleMouseEnterPanel(idx)}
                  onClick={() => handleMouseEnterPanel(idx)}
                  style={{
                    flex: isActive ? 2.8 : 0.75,
                    transition:
                      "flex 1100ms cubic-bezier(0.25, 1, 0.3, 1), border-color 800ms ease, background-color 800ms ease, box-shadow 800ms ease",
                    willChange: "flex",
                  }}
                  className={`relative rounded-2xl overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-br from-[#020D38] via-[#010722] to-[#000412] border-2 border-[#1877F2]/80 shadow-[0_0_30px_rgba(24,119,242,0.25)] z-20"
                      : "bg-[#010619]/90 border border-slate-800/80 hover:border-slate-700 hover:bg-[#020c2b] cursor-pointer z-10"
                  }`}
                >
                  {/* Ambient Glow for Active Panel (Smooth 1000ms transition) */}
                  <div
                    className={`absolute -inset-1 rounded-2xl blur-2xl pointer-events-none -z-10 transition-opacity duration-1000 ${
                      isActive ? "opacity-35" : "opacity-0"
                    }`}
                    style={{ background: portal.glowColor }}
                  />

                  {/* Inner Two-Column Flex Container */}
                  <div className="w-full h-full flex items-center justify-between p-5 xl:p-6 relative z-10 overflow-hidden">
                    {/* LEFT: Short & Powerful Text (Slow & Velvety 1100ms slide & fade) */}
                    <div
                      style={{
                        transition:
                          "max-width 1100ms cubic-bezier(0.25, 1, 0.3, 1), opacity 850ms ease, transform 1100ms cubic-bezier(0.25, 1, 0.3, 1)",
                      }}
                      className={`h-full flex flex-col justify-center py-1 overflow-hidden ${
                        isActive
                          ? "max-w-[420px] xl:max-w-[460px] opacity-100 translate-x-0 pointer-events-auto"
                          : "max-w-0 opacity-0 -translate-x-6 pointer-events-none"
                      }`}
                    >
                      {/* Fixed width content wrapper to preserve typography structure */}
                      <div className="w-[300px] xl:w-[330px] flex-shrink-0 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-white/15 text-[#0BCB91] flex items-center justify-center font-mono font-bold text-xs border border-[#0BCB91]/30">
                            {portal.pillarIndex}
                          </span>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0BCB91]">
                            {portal.badge}
                          </span>
                        </div>

                        <h3 className="text-xl xl:text-2xl font-black text-white tracking-tight leading-snug">
                          {portal.title}
                        </h3>

                        <p className="text-xs xl:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                          {portal.statement}
                        </p>

                        {/* 3 Short, Crisp Tags */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {portal.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg text-[10px] xl:text-[11px] font-mono font-medium bg-white/5 border border-white/10 text-[#00D8F6] flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91]" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: Fixed-Width Video Theater (STABLE ACROSS ACTIVE & INACTIVE STATES) */}
                    <div className="h-full w-[210px] xl:w-[230px] flex-shrink-0 flex items-center justify-center">
                      <div className="relative w-full h-[320px] xl:h-[340px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#020A2B] via-[#010619] to-[#000412] border border-blue-900/60 shadow-xl flex items-center justify-center p-2">
                        {/* Video Element (Persistent, NEVER unmounts) */}
                        <video
                          src={portal.video}
                          poster={portal.poster}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className={`max-h-full max-w-full w-auto h-auto object-contain transition-opacity duration-1000 ${
                            isActive ? "opacity-100" : "opacity-60 hover:opacity-85"
                          }`}
                        />

                        {/* Subtle Holographic Scanline */}
                        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                          <div className="w-[180%] h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/4 animate-holographic" />
                        </div>

                        {/* Top HUD Tag */}
                        <div className="absolute top-2 inset-x-2.5 z-30 flex items-center justify-between text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-slate-300">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-ping" />
                            <span className="text-[#0BCB91] font-bold text-[9px]">STREAM</span>
                          </div>
                          <span className="text-slate-400 font-semibold text-[9px]">{portal.pillarIndex} · CORE</span>
                        </div>

                        {/* Collapsed Overlay Pill (Smoothly fades in when inactive over 700ms) */}
                        <div
                          style={{
                            transition: "opacity 700ms ease, transform 700ms ease",
                          }}
                          className={`absolute bottom-2.5 inset-x-2 z-30 flex flex-col items-center justify-center text-center py-1.5 px-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white ${
                            isActive ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"
                          }`}
                        >
                          <span className="text-[9px] font-mono text-[#0BCB91] font-bold uppercase tracking-wider">
                            Pillar {portal.pillarIndex}
                          </span>
                          <span className="text-xs font-bold truncate max-w-[120px]">
                            {portal.shortLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= MOBILE VIEW (< 1024px) ================= */}
          <div className="lg:hidden rounded-3xl overflow-hidden bg-gradient-to-b from-[#000824] via-[#020B30] to-[#000516] border border-blue-900/40 p-4 text-white shadow-xl space-y-3.5">
            {/* Mobile Active Uncropped Video */}
            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#020A2B] via-[#010619] to-[#000412] border border-blue-900/60 shadow-lg flex items-center justify-center p-2">
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
              <div className="absolute top-2 inset-x-2.5 z-20 flex items-center justify-between text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-slate-300">
                <span className="text-[#0BCB91] font-bold text-[9px]">● ACTIVE</span>
                <span className="text-slate-400 text-[9px]">{activePortal.pillarIndex} · CORE</span>
              </div>
            </div>

            {/* Mobile Active Editorial Text: Short & Punchy */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-white/15 text-[#0BCB91] flex items-center justify-center font-mono font-bold text-xs border border-[#0BCB91]/30">
                  {activePortal.pillarIndex}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0BCB91]">
                  {activePortal.badge}
                </span>
              </div>

              <h3 className="text-xl font-black text-white tracking-tight">
                {activePortal.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {activePortal.statement}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activePortal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/5 border border-white/10 text-[#00D8F6] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
