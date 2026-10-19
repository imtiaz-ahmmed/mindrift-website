"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, Shield, Cpu } from "lucide-react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const statusMessages = [
    "INITIALIZING CORE SYSTEMS",
    "CONNECTING HIGH-SPEED TELEMETRY",
    "VERIFYING ENTERPRISE ARCHITECTURE",
    "MINDRIFT AGENCY READY",
  ];

  useEffect(() => {
    // Check if user already saw the loader in this session
    // If not, run full fancy loader. If already seen, run swift micro-transition
    const hasSeenLoader = sessionStorage.getItem("mindrift-preloader-seen");
    const targetDuration = hasSeenLoader ? 700 : 1600;
    const intervalTime = targetDuration / 100;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      if (current === 25) setStatusIndex(1);
      if (current === 60) setStatusIndex(2);
      if (current === 90) setStatusIndex(3);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem("mindrift-preloader-seen", "true");
          // Remove from DOM after smooth slide/fade animation
          setTimeout(() => {
            setIsRemoved(true);
          }, 650);
        }, 180);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      aria-hidden={isComplete}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#000824] text-white transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isComplete
          ? "opacity-0 -translate-y-full pointer-events-none scale-102"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background Animated Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Ambient Pulsing Glow Orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-emerald-500/15 blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center space-y-7">
        {/* Holographic Logo Emblem with Orbiting Ring */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#1877F2]/40 via-[#00D8F6]/30 to-[#0BCB91]/40 blur-xl opacity-75 animate-pulse" />

          {/* Rotating Conic Ring */}
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#1877F2] via-[#00D8F6] to-[#0BCB91] opacity-60 animate-spin [animation-duration:4s]" />

          {/* Core Logo Container */}
          <div className="relative z-10 flex items-center justify-center px-6 py-3.5 rounded-2xl bg-[#000B2B] border border-blue-500/40 shadow-2xl backdrop-blur-md">
            <Image
              src="/assets/logos/logo.jpg"
              alt="Mindrift Agency"
              width={220}
              height={68}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Dynamic Percentage & Status Tracker */}
        <div className="w-full space-y-3 pt-2">
          {/* Percentage Counter */}
          <div className="flex items-baseline justify-between text-xs tracking-wider font-semibold">
            <span className="text-slate-400 font-sans flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0BCB91] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0BCB91]" />
              </span>
              SYSTEM BOOT
            </span>
            <span className="font-mono text-xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,216,246,0.5)]">
              {String(progress).padStart(2, "0")}
              <span className="text-xs text-[#0BCB91] font-sans ml-0.5">%</span>
            </span>
          </div>

          {/* Fancy Progress Track with Gradient Glow */}
          <div className="h-1.5 w-full rounded-full bg-slate-800/90 overflow-hidden p-0.5 border border-slate-700/60 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#1877F2] via-[#00D8F6] to-[#0BCB91] transition-all duration-75 ease-out shadow-[0_0_14px_rgba(0,216,246,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Cycling Status Label */}
          <div className="h-5 flex items-center justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#00D8F6] font-sans animate-pulse">
              {statusMessages[statusIndex]}
            </p>
          </div>
        </div>

        {/* Formal Security & Architecture Trust Footnote */}
        <div className="pt-2 flex items-center gap-4 text-[10px] text-slate-500 font-sans uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-[#1877F2]" />
            Enterprise Engine
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-[#0BCB91]" />
            Verified SLA
          </span>
        </div>
      </div>
    </div>
  );
}
