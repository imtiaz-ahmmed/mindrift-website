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
  const [isInView, setIsInView] = useState<boolean>(false);
  const manualOverrideRef = useRef<boolean>(false);
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  // IntersectionObserver to pause playback when section is outside viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Synchronize desktop video playback: ONLY the active pillar's video plays!
  useEffect(() => {
    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;
      if (idx === activeIdx && isInView) {
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        videoEl.pause();
        if (idx !== activeIdx) {
          videoEl.currentTime = 0;
        }
      }
    });
  }, [activeIdx, isInView]);

  // Synchronize mobile video playback with viewport
  useEffect(() => {
    const el = mobileVideoRef.current;
    if (!el) return;
    if (isInView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [activeIdx, isInView]);

  // Progressive Scroll Interaction:
  // Desktop Runway: Exactly 600px of scroll.
  // 0 - 200px: Pillar 01 (Architecture)
  // 200px - 400px: Pillar 02 (Senior Team)
  // 400px - 600px: Pillar 03 (Scalability)
  // >= 600px: Sticky container unpins immediately, rolling directly into ServicesOverview with ZERO empty space!
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      // If user clicked manually, temporarily let click state hold
      if (manualOverrideRef.current) return;

      const container = containerRef.current;
      if (!container) return;

      if (window.innerWidth >= 1024) {
        // Desktop sticky runway tracking
        const rect = container.getBoundingClientRect();
        const topOffset = 80; // 80px fixed header height
        const scrolled = topOffset - rect.top;
        const runway = 600; // calibrated runway distance
        const progress = Math.min(Math.max(scrolled / runway, 0), 1);

        if (progress < 0.33) {
          setActiveIdx(0); // Pillar 01: System Design
        } else if (progress < 0.67) {
          setActiveIdx(1); // Pillar 02: Direct Engineering
        } else {
          setActiveIdx(2); // Pillar 03: Operational Scale
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, []);

  const handleSelectPanel = (idx: number) => {
    setActiveIdx(idx);
    manualOverrideRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      manualOverrideRef.current = false;
    }, 700);

    // Instantly start selected video from beginning and pause other desktop videos
    videoRefs.current.forEach((videoEl, i) => {
      if (!videoEl) return;
      if (i === idx) {
        videoEl.currentTime = 0;
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  };

  const activePortal = portals[activeIdx];

  return (
    <section
      ref={containerRef}
      className="relative lg:h-[calc(100vh-80px+600px)] border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#02071A] py-12 lg:py-0"
    >
      {/* Background Ambient High-Tech Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Viewport-Filling Sticky Frame on Desktop (starts cleanly below 80px header, zero empty space) */}
      <div
        className="w-full lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:min-h-[560px] lg:flex lg:flex-col lg:justify-center overflow-hidden relative z-10 py-4 lg:py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-3 xl:mb-5">
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              suppressHydrationWarning
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#1877F2] dark:text-[#0BCB91] border border-blue-200/60 dark:border-blue-900/50 shadow-xs mb-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span className="uppercase tracking-wider">The Mindrift Philosophy</span>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              suppressHydrationWarning
              className="text-2xl sm:text-3xl xl:text-4xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight"
            >
              Engineering Without Compromise.
            </h2>
          </div>

          {/* Mobile Pillar Switcher Tabs (< 1024px) */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            suppressHydrationWarning
            className="flex lg:hidden items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 mb-5 overflow-x-auto shadow-xs"
          >
            {portals.map((p, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPanel(idx)}
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
          <div
            className="hidden lg:flex w-full h-[370px] xl:h-[390px] rounded-3xl overflow-hidden gap-3.5 p-3.5 bg-gradient-to-b from-[#000824] via-[#020B30] to-[#000516] border border-blue-900/40 shadow-2xl relative"
          >
            {portals.map((portal, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={portal.id}
                  onClick={() => handleSelectPanel(idx)}
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
                        {/* Video Element (Controlled playback: only active pillar plays) */}
                        <video
                          ref={(el) => {
                            videoRefs.current[idx] = el;
                          }}
                          src={portal.video}
                          poster={portal.poster}
                          loop
                          muted
                          playsInline
                          preload="auto"
                          onCanPlay={(e) => {
                            if (idx === activeIdx && isInView) {
                              e.currentTarget.play().catch(() => {});
                            } else {
                              e.currentTarget.pause();
                              e.currentTarget.currentTime = 0;
                            }
                          }}
                          className={`max-h-full max-w-full w-auto h-auto object-contain transition-opacity duration-700 ${
                            isActive ? "opacity-100" : "opacity-45 hover:opacity-75"
                          }`}
                        />

                        {/* Subtle Holographic Scanline */}
                        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                          <div className="w-[180%] h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/4 animate-holographic" />
                        </div>

                        {/* Top HUD Tag */}
                        <div className="absolute top-2 inset-x-2.5 z-30 flex items-center justify-between text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-slate-300">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isActive ? "bg-[#0BCB91] animate-ping" : "bg-slate-500"
                              }`}
                            />
                            <span
                              className={`font-bold text-[9px] ${
                                isActive ? "text-[#0BCB91]" : "text-slate-400"
                              }`}
                            >
                              {isActive ? "LIVE STREAM" : "STANDBY"}
                            </span>
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

          {/* Desktop Step Indicator Pill Bar */}
          <div className="hidden lg:flex items-center justify-center gap-2.5 mt-4">
            {portals.map((p, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPanel(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-blue-600/20 text-[#00D8F6] border border-[#1877F2]/70 shadow-[0_0_15px_rgba(24,119,242,0.3)] scale-105"
                      : "bg-[#000824]/80 text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-[#0BCB91] shadow-[0_0_8px_#0BCB91]" : "bg-slate-600"
                    }`}
                  />
                  <span>Pillar {p.pillarIndex}</span>
                  <span className="text-slate-500">·</span>
                  <span>{p.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* ================= MOBILE VIEW (< 1024px) ================= */}
          <div className="lg:hidden rounded-3xl overflow-hidden bg-gradient-to-b from-[#000824] via-[#020B30] to-[#000516] border border-blue-900/40 p-4 text-white shadow-xl space-y-3.5">
            {/* Mobile Active Uncropped Video */}
            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#020A2B] via-[#010619] to-[#000412] border border-blue-900/60 shadow-lg flex items-center justify-center p-2">
              <video
                ref={mobileVideoRef}
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
