"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Terminal, Shield, Wifi, Cpu, Activity, Radio } from "lucide-react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const techLogs = [
    "[KERNEL] Initializing Mindrift Digital Core v4.8...",
    "[NET] Establishing WebRTC 3D Pixel Streaming Cluster... [SYNCED]",
    "[POS] Calibrating Offline-First Cloud Till Architecture... [OK]",
    "[EMR] Validating HIPAA Encrypted Athletic Data Ledger... [VERIFIED]",
    "[DEPLOY] 8 Production Enterprise Nodes Online. Launching...",
  ];

  useEffect(() => {
    // Quick session check: if already visited, run brief 600ms micro-boot
    const hasSeenLoader = sessionStorage.getItem("mindrift-tech-loader-seen");
    const targetDuration = hasSeenLoader ? 750 : 1800;
    const intervalTime = targetDuration / 100;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      if (current === 20) setLogIndex(1);
      if (current === 45) setLogIndex(2);
      if (current === 70) setLogIndex(3);
      if (current === 90) setLogIndex(4);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem("mindrift-tech-loader-seen", "true");
          // Remove from DOM after blast-door transition completes
          setTimeout(() => {
            setIsRemoved(true);
          }, 700);
        }, 220);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (isRemoved) return null;

  // Calculate 16-segment power cell blocks
  const totalSegments = 16;
  const activeSegments = Math.round((progress / 100) * totalSegments);

  return (
    <div
      aria-hidden={isComplete}
      className={`fixed inset-0 z-[99999] overflow-hidden bg-[#01040f] text-slate-200 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isComplete ? "pointer-events-none opacity-0 scale-105" : "opacity-100"
      }`}
    >
      {/* Background Cybernetic Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Rotating Radar Sweep Cone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none rounded-full overflow-hidden opacity-30">
        <div
          className="w-full h-full animate-radar"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(0, 216, 246, 0.25) 360deg)",
          }}
        />
      </div>

      {/* Concentric Radar Measurement Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-blue-500/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-blue-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-cyan-500/10 pointer-events-none" />

      {/* Ambient Pulsing Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-emerald-500/15 blur-[100px] pointer-events-none" />

      {/* Tech Corner HUD Metadata (Desktop) */}
      <div className="hidden md:flex absolute top-6 left-8 items-start gap-2.5 text-[10px] font-mono text-slate-400">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D8F6] animate-ping mt-1" />
        <div>
          <div className="text-white font-bold tracking-wider">SYSTEM TELEMETRY // ACTIVE</div>
          <div className="text-slate-400">LATENCY: 12ms · NODE: EU_WEST_1</div>
          <div className="text-slate-400">COORDINATES: 53.3498° N, 6.2603° W</div>
        </div>
      </div>

      <div className="hidden md:flex absolute top-6 right-8 text-right flex-col items-end text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5 text-[#0BCB91] font-bold tracking-wider">
          <Wifi className="w-3 h-3" />
          <span>ENCRYPTED TLS 1.3</span>
        </div>
        <div className="text-slate-400">CIPHER: AES_256_GCM</div>
        <div className="text-slate-400">PROTOCOL: WEBRTC_QUIC</div>
      </div>

      <div className="hidden md:flex absolute bottom-6 left-8 items-center gap-4 text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#1877F2]" />
          <span>UE5 PIXEL STREAMING</span>
        </span>
        <span className="text-slate-700">|</span>
        <span className="flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-[#0BCB91]" />
          <span>CLOUD ePOS SQLite SYNC</span>
        </span>
      </div>

      <div className="hidden md:flex absolute bottom-6 right-8 items-center gap-2 text-[10px] font-mono text-slate-400">
        <Shield className="w-3 h-3 text-[#00D8F6]" />
        <span>VERIFIED SLA 99.99% · HIPAA & GDPR AUDITED</span>
      </div>

      {/* Central Cybernetic Reactor & HUD Reticle */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Core HUD Container */}
        <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80">
          {/* Outer Rotating Degree Ticks Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-spin [animation-duration:22s] pointer-events-none flex items-center justify-center">
            <span className="absolute top-1 text-[9px] font-mono text-[#00D8F6] font-bold">000°</span>
            <span className="absolute right-1 text-[9px] font-mono text-[#00D8F6] font-bold">090°</span>
            <span className="absolute bottom-1 text-[9px] font-mono text-[#00D8F6] font-bold">180°</span>
            <span className="absolute left-1 text-[9px] font-mono text-[#00D8F6] font-bold">270°</span>
          </div>

          {/* Middle Counter-Rotating Octagonal Reticle */}
          <div className="absolute inset-4 rounded-full border border-cyan-400/25 animate-spin-reverse pointer-events-none">
            {/* Reticle Corner Brackets */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#00D8F6]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#00D8F6]" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#0BCB91]" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#0BCB91]" />
          </div>

          {/* Center Logo Chamber with Laser Scanner */}
          <div className="relative z-10 flex flex-col items-center justify-center p-4 rounded-2xl bg-[#000822] border border-blue-500/40 shadow-[0_0_40px_rgba(24,119,242,0.35)] overflow-hidden">
            {/* Laser Scanning Line */}
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D8F6] to-transparent shadow-[0_0_12px_#00D8F6] animate-laser-scan pointer-events-none z-20" />

            {/* Mindrift Official Logo */}
            <div className="relative px-3 py-1.5">
              <Image
                src="/assets/logos/logo.jpg"
                alt="Mindrift Agency"
                width={200}
                height={62}
                priority
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>

            {/* Micro Badge under Logo */}
            <div className="flex items-center gap-1.5 mt-2 pt-1 border-t border-blue-900/40 text-[9px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-pulse" />
              <span>DIGITAL PRODUCT ENGINEERING</span>
            </div>
          </div>
        </div>

        {/* High-Tech Gauge & Telemetry Box */}
        <div className="w-full max-w-md mt-6 space-y-3 font-mono">
          {/* Top Line: Progress Status & Hex Counter */}
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#00D8F6]" />
              <span className="text-slate-400 tracking-wider">BOOT_SEQUENCE</span>
            </div>

            {/* Monospace Digital Counter */}
            <div className="flex items-center gap-1 text-sm font-bold text-white drop-shadow-[0_0_10px_rgba(0,216,246,0.6)]">
              <span className="text-slate-400 text-xs">[</span>
              <span className="text-[#00D8F6]">{String(progress).padStart(3, "0")}%</span>
              <span className="text-slate-400 text-xs">]</span>
            </div>
          </div>

          {/* 16-Segment Neon Reactor Progress Cell */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[#000B22] border border-slate-800 shadow-inner">
            {Array.from({ length: totalSegments }).map((_, i) => {
              const isFilled = i < activeSegments;
              return (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-xs transition-all duration-100 ${
                    isFilled
                      ? "bg-gradient-to-t from-[#1877F2] to-[#00D8F6] shadow-[0_0_8px_rgba(0,216,246,0.9)]"
                      : "bg-slate-800/80"
                  }`}
                />
              );
            })}
          </div>

          {/* Real-time Terminal Log Feed */}
          <div className="h-6 flex items-center justify-center px-3 py-1 rounded-md bg-[#000820]/90 border border-blue-900/30 text-[11px] text-[#0BCB91] truncate shadow-xs">
            <span className="text-slate-400 mr-1.5">&gt;</span>
            <span className="animate-pulse truncate">{techLogs[logIndex]}</span>
          </div>

          {/* Live Frequency Equalizer Bars */}
          <div className="flex items-center justify-center gap-1 pt-1">
            <div className="w-1 h-2 rounded-full bg-[#1877F2] animate-pulse" />
            <div className="w-1 h-3.5 rounded-full bg-[#00D8F6] animate-pulse [animation-delay:150ms]" />
            <div className="w-1 h-5 rounded-full bg-[#0BCB91] animate-pulse [animation-delay:300ms]" />
            <div className="w-1 h-3 rounded-full bg-[#00D8F6] animate-pulse [animation-delay:450ms]" />
            <div className="w-1 h-1.5 rounded-full bg-[#1877F2] animate-pulse [animation-delay:600ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}
