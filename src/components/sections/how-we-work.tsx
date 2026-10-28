"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

interface MethodologyStep {
  phase: string;
  title: string;
  subtitle: string;
  image: string;
  accentColor: string;
  glowColor: string;
}

const steps: MethodologyStep[] = [
  {
    phase: "01",
    title: "Discover",
    subtitle: "Requirements & Feasibility",
    image: "/assets/methodology/step-1.jpg",
    accentColor: "#00D8F6",
    glowColor: "rgba(0, 216, 246, 0.4)",
  },
  {
    phase: "02",
    title: "Define",
    subtitle: "Architecture & Roadmap",
    image: "/assets/methodology/step-2.jpg",
    accentColor: "#1877F2",
    glowColor: "rgba(24, 119, 242, 0.45)",
  },
  {
    phase: "03",
    title: "Design",
    subtitle: "UI/UX & Schema Specs",
    image: "/assets/methodology/step-3.jpg",
    accentColor: "#0BCB91",
    glowColor: "rgba(11, 203, 145, 0.4)",
  },
  {
    phase: "04",
    title: "Build",
    subtitle: "Sprint Code & CI/CD",
    image: "/assets/methodology/step-4.jpg",
    accentColor: "#00D8F6",
    glowColor: "rgba(0, 216, 246, 0.4)",
  },
  {
    phase: "05",
    title: "Validate",
    subtitle: "Security & QA Hardening",
    image: "/assets/methodology/step-5.jpg",
    accentColor: "#1877F2",
    glowColor: "rgba(24, 119, 242, 0.45)",
  },
  {
    phase: "06",
    title: "Launch",
    subtitle: "Zero-Downtime Deploy",
    image: "/assets/methodology/step-6.jpg",
    accentColor: "#0BCB91",
    glowColor: "rgba(11, 203, 145, 0.4)",
  },
];

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Animated sequential step flow: 01 ➔ 02 ➔ 03 ➔ 04 ➔ 05 ➔ 06
  // Automatically pauses when user hovers so steps NEVER jump or advance away!
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentHighlight = activeStep;

  return (
    <section className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081E] relative overflow-hidden">
      {/* Background Ambient Cyber Lights */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[250px] bg-blue-600/10 dark:bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[200px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            suppressHydrationWarning
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#1877F2] dark:text-[#0BCB91] border border-blue-200/60 dark:border-blue-900/50 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0BCB91]" />
            <span className="uppercase tracking-wider">Delivery Methodology</span>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            suppressHydrationWarning
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight"
          >
            From Idea to Reliable Implementation.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            suppressHydrationWarning
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium"
          >
            Our 6-phase engineering lifecycle. Connected step-by-step with verifiable milestones.
          </p>
        </div>

        {/* ================= COMPACT STEP-BY-STEP FLOW PIPELINE ================= */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          suppressHydrationWarning
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="hidden lg:flex items-center justify-between gap-1 xl:gap-2"
        >
          {steps.map((step, idx) => {
            const isHighlighted = currentHighlight === idx;
            const isNextArrowActive = currentHighlight === idx;

            return (
              <React.Fragment key={step.phase}>
                {/* Step Card: Locked in place, absolutely zero vertical movement on hover */}
                <div
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  style={{ transform: "none" }}
                  className={`flex-1 max-w-[190px] p-3 xl:p-3.5 rounded-2xl transition-colors duration-300 flex flex-col items-center text-center cursor-pointer relative overflow-hidden group ${
                    isHighlighted
                      ? "bg-gradient-to-b from-[#020E36] via-[#010826] to-[#000414] border-2 border-[#1877F2] shadow-[0_0_25px_rgba(24,119,242,0.35)] z-20 text-white"
                      : "bg-slate-50/90 dark:bg-[#070F2B]/90 border-2 border-slate-200/90 dark:border-slate-800/90 hover:border-blue-400 dark:hover:border-blue-600 shadow-xs hover:shadow-md z-10 text-slate-900 dark:text-white"
                  }`}
                >
                  {/* Subtle Inner Glow */}
                  <div
                    className={`absolute -inset-1 rounded-2xl blur-xl pointer-events-none transition-opacity duration-300 ${
                      isHighlighted ? "opacity-35" : "opacity-0"
                    }`}
                    style={{ background: step.glowColor }}
                  />

                  {/* Top Phase Pill */}
                  <div className="relative z-10 mb-2">
                    <span
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold tracking-wider transition-colors ${
                        isHighlighted
                          ? "bg-white/15 text-[#00D8F6] border border-[#00D8F6]/40"
                          : "bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                      }`}
                    >
                      PHASE {step.phase}
                    </span>
                  </div>

                  {/* Compact 3D Isometric Visual (80x80px, completely stable in place) */}
                  <div className="relative z-10 w-20 h-20 rounded-xl overflow-hidden bg-black/50 border border-white/10 shadow-md mb-2.5 flex items-center justify-center">
                    <Image
                      src={step.image}
                      alt={`${step.phase} · ${step.title}`}
                      width={160}
                      height={160}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="relative z-10 space-y-1 w-full">
                    <h3
                      className={`text-sm font-black tracking-tight leading-tight transition-colors ${
                        isHighlighted
                          ? "text-white"
                          : "text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div className="w-full min-h-[34px] flex items-center justify-center px-0.5">
                      <p
                        className={`text-[11px] font-semibold leading-snug font-sans text-center transition-colors break-words ${
                          isHighlighted
                            ? "text-[#0BCB91] drop-shadow-[0_0_8px_rgba(11,203,145,0.6)]"
                            : "text-[#1877F2] dark:text-[#00D8F6]/90"
                        }`}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Active bottom indicator line */}
                  <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden mt-2.5">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        isHighlighted
                          ? "w-full bg-[#00D8F6] shadow-[0_0_6px_#00D8F6]"
                          : "w-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Animated Flow Arrow Connector between steps */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center px-1 text-slate-300 dark:text-slate-600">
                    <div
                      className={`flex items-center transition-colors duration-300 ${
                        isNextArrowActive
                          ? "text-[#00D8F6]"
                          : "text-slate-300 dark:text-slate-700"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* ================= TABLET & MOBILE VIEW (< 1024px) ================= */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          suppressHydrationWarning
          className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 lg:hidden"
        >
          {steps.map((step, idx) => {
            const isHighlighted = currentHighlight === idx;

            return (
              <div
                key={step.phase}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPaused(true);
                }}
                style={{ transform: "none" }}
                className={`p-3 rounded-2xl transition-colors duration-300 flex flex-col items-center text-center cursor-pointer relative overflow-hidden ${
                  isHighlighted
                    ? "bg-gradient-to-b from-[#020E36] via-[#010826] to-[#000412] border-2 border-[#1877F2] shadow-lg text-white"
                    : "bg-slate-50/90 dark:bg-[#070F2B]/90 border-2 border-slate-200/90 dark:border-slate-800 shadow-xs text-slate-900 dark:text-white"
                }`}
              >
                <div className="w-full flex items-center justify-between mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold ${
                      isHighlighted
                        ? "bg-[#00D8F6]/20 text-[#00D8F6]"
                        : "bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    PHASE {step.phase}
                  </span>
                  {idx < steps.length - 1 && (
                    <ChevronRight
                      className={`w-3.5 h-3.5 ${
                        isHighlighted ? "text-[#00D8F6]" : "text-slate-400"
                      }`}
                    />
                  )}
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-black/50 border border-white/10 shadow-sm mb-2 flex items-center justify-center">
                  <Image
                    src={step.image}
                    alt={`${step.phase} · ${step.title}`}
                    width={140}
                    height={140}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-xs sm:text-sm font-black tracking-tight leading-tight">
                  {step.title}
                </h4>
                <div className="w-full min-h-[30px] flex items-center justify-center mt-1 px-1">
                  <p
                    className={`text-[10px] sm:text-[11px] font-semibold text-center leading-snug font-sans transition-colors break-words ${
                      isHighlighted
                        ? "text-[#00D8F6]"
                        : "text-[#1877F2] dark:text-[#00D8F6]/90"
                    }`}
                  >
                    {step.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
