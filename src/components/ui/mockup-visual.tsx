"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Server,
  Activity,
  Layers,
  ShoppingBag,
  ExternalLink,
  Play,
  Volume2,
  Sliders,
  HeartPulse,
  FileText,
  Smartphone,
  Printer,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ODYSSEY_IMAGES = [
  {
    src: "/assets/projects/odyssey-stream/fig-1.png",
    alt: "Odyssey Platform Real-Time Unreal Engine 5 Cloud Pixel Streaming",
  },
  {
    src: "/assets/projects/odyssey-stream/fig-2.png",
    alt: "Live Production ArchViz Demo on app.odyssey.stream",
  },
  {
    src: "/assets/projects/odyssey-stream/fig-3.png",
    alt: "Unreal Engine 5 Editor Bridge and Variant Manager",
  },
];

function StreamingMockupVisual({ className = "" }: { className?: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Auto switch images periodically every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % ODYSSEY_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + ODYSSEY_IMAGES.length) % ODYSSEY_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % ODYSSEY_IMAGES.length);
  };

  const current = ODYSSEY_IMAGES[selectedIdx];

  return (
    <div
      className={`w-full aspect-[16/10] bg-[#030718] rounded-2xl border border-blue-900/60 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between group ${className}`}
    >
      {/* Background Image Preview */}
      <div className="absolute inset-0 overflow-hidden select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover transition-all duration-700 brightness-95"
        />
        {/* Subtle gradient vignette to keep HUD and tickers legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030718]/90 via-black/10 to-[#030718]/80 pointer-events-none" />
      </div>

      {/* HUD Header */}
      <div className="relative flex items-center justify-between border-b border-slate-800/80 p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md z-10 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-white tracking-wide">
            UE5 CLOUD STREAMING ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-300">
          <span className="text-emerald-400 font-bold">60 FPS · 4K</span>
          <span className="text-[#00D8F6] hidden sm:inline">WebRTC NVENC</span>
          <span className="bg-blue-500/20 px-2 py-0.5 rounded text-blue-200 border border-blue-500/30">
            Latency: 42ms
          </span>
        </div>
      </div>

      {/* Left and Right Navigation Arrows */}
      <div className="relative z-10 flex items-center justify-between px-3 sm:px-4 pointer-events-none my-auto">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous scene capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-75 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next scene capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-75 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Bottom Status Ticker with subtle dot indicators (NO 'View: Fig 01' text) */}
      <div className="relative z-10 border-t border-slate-800/80 p-3 bg-slate-950/85 backdrop-blur-md flex items-center justify-between gap-2 text-[10px] font-mono text-slate-300">
        {/* Subtle slide dot indicators */}
        <div className="flex items-center gap-1.5 pointer-events-auto">
          {ODYSSEY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? "w-5 bg-[#1877F2]"
                  : "w-1.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span className="hidden sm:inline">Multiplayer Nodes: 4 Clusters Active</span>
          <span className="text-[#0BCB91] font-bold">Browser Zero-Install Stream</span>
        </div>
      </div>
    </div>
  );
}

const EPOS_IMAGES = [
  {
    src: "/assets/projects/FirstChoiceePOS/fig1.png",
    alt: "FirstChoice ePOS Countertop Terminal for Coffee Shops and Hospitality",
  },
  {
    src: "/assets/projects/FirstChoiceePOS/fig2.png",
    alt: "FirstChoice ePOS Mobile App and Handheld Online Ordering POS",
  },
  {
    src: "/assets/projects/FirstChoiceePOS/fig3.png",
    alt: "FirstChoice ePOS QR Order and Pay at Table Solution",
  },
  {
    src: "/assets/projects/FirstChoiceePOS/fig4.png",
    alt: "FirstChoice ePOS Dual-Screen Sunmi Countertop Terminals",
  },
];

function EposMockupVisual({ className = "" }: { className?: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Auto switch images periodically every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % EPOS_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + EPOS_IMAGES.length) % EPOS_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % EPOS_IMAGES.length);
  };

  const current = EPOS_IMAGES[selectedIdx];

  return (
    <div
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl border border-emerald-900/60 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between group ${className}`}
    >
      {/* Background Image Preview */}
      <div className="absolute inset-0 overflow-hidden select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover transition-all duration-700 brightness-95"
        />
        {/* Subtle gradient overlay to keep HUD and tickers legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070F2B]/95 via-black/15 to-[#070F2B]/85 pointer-events-none" />
      </div>

      {/* HUD Header */}
      <div className="relative flex items-center justify-between border-b border-slate-800/80 p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md z-10 pointer-events-none">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-[#0BCB91]" />
          <span className="text-xs font-bold text-white font-mono tracking-wide">
            FirstChoice ePOS Ireland · Till #01 (Dublin)
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-300">
          <span className="text-[#0BCB91] font-bold">Offline Resilient</span>
          <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-200 border border-emerald-500/30">
            KDS Linked
          </span>
        </div>
      </div>

      {/* Left and Right Navigation Arrows */}
      <div className="relative z-10 flex items-center justify-between px-3 sm:px-4 pointer-events-none my-auto">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous POS capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#0BCB91] hover:text-slate-950 text-white border border-slate-700/80 hover:border-[#0BCB91] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-75 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next POS capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#0BCB91] hover:text-slate-950 text-white border border-slate-700/80 hover:border-[#0BCB91] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-75 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Bottom Status Ticker with subtle dot indicators */}
      <div className="relative z-10 border-t border-slate-800/80 p-3 bg-slate-950/85 backdrop-blur-md flex items-center justify-between gap-2 text-[10px] font-mono text-slate-300">
        {/* Subtle slide dot indicators */}
        <div className="flex items-center gap-1.5 pointer-events-auto">
          {EPOS_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? "w-5 bg-[#0BCB91]"
                  : "w-1.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <div className="flex items-center gap-1.5">
            <Printer className="w-3.5 h-3.5 text-[#0BCB91]" />
            <span className="hidden sm:inline">KDS & ESC/POS Printer: Active</span>
          </div>
          <span className="text-[#0BCB91] font-bold">Cloud Sync: 100%</span>
        </div>
      </div>
    </div>
  );
}

interface MockupVisualProps {
  type: "mobile" | "dashboard" | "gis" | "cloud" | "security" | "streaming" | "epos" | "medical";
  title: string;
  className?: string;
}

export function MockupVisual({ type, title, className = "" }: MockupVisualProps) {
  // 3D Pixel Streaming (Odyssey.stream)
  if (type === "streaming") {
    return <StreamingMockupVisual className={className} />;
  }

  // Enterprise ePOS (FirstChoice ePOS)
  if (type === "epos") {
    return <EposMockupVisual className={className} />;
  }

  // Athlete EMR (AB3 Medical)
  if (type === "medical") {
    return (
      <div
        className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl p-4 border border-blue-900/60 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between ${className}`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-bold text-white font-mono">AB3 Athlete EMR Portal</span>
          </div>
          <span className="text-[10px] font-mono text-[#0BCB91] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Athlete Owned · HIPAA Compliant
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 my-auto py-2">
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono">CLINICAL STATUS</span>
            <div className="text-sm font-bold text-emerald-400">Cleared for Match</div>
            <p className="text-[9px] text-slate-400">Return-to-Play validated</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono">REHAB TIMELINE</span>
            <div className="text-sm font-bold text-[#1877F2]">Phase 4 of 4</div>
            <p className="text-[9px] text-slate-400">ACL reconstruction</p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono">CONSENT ACCESS</span>
            <div className="text-sm font-bold text-white">Active 14 Days</div>
            <p className="text-[9px] text-slate-400">Club Medical Staff</p>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-[#1877F2]" />
            <span className="text-[11px] font-mono">MRI Diagnostic Scan (DICOM) · Encrypted</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">VERIFIED SIGNATURE</span>
        </div>
      </div>
    );
  }

  // Mobile App (YumaPOS Suite)
  if (type === "mobile") {
    return (
      <div
        className={`relative w-full max-w-sm mx-auto aspect-[9/16] max-h-[460px] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-700/60 dark:border-slate-800 ${className}`}
      >
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-800 rounded-full z-20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-900 mr-1.5" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
        </div>

        {/* Screen */}
        <div className="w-full h-full bg-[#050B20] rounded-[2rem] overflow-hidden flex flex-col p-4 text-white relative">
          <div className="pt-5 pb-2.5 border-b border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-[9px] text-[#0BCB91] font-mono uppercase tracking-wider">
                YumaPOS Hospitality App
              </span>
              <h5 className="text-xs font-bold text-white">DiFontaine&rsquo;s Pizzeria (Dublin)</h5>
            </div>
            <div className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              OPEN NOW
            </div>
          </div>

          {/* Menu Items Preview */}
          <div className="my-auto py-2 space-y-2">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white">NYC Pepperoni Slice</div>
                <div className="text-[9px] text-slate-400">San Marzano sauce, whole milk mozz</div>
              </div>
              <span className="text-xs font-bold text-[#0BCB91]">€5.50</span>
            </div>

            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white">20&quot; Whole Pie Deal</div>
                <div className="text-[9px] text-slate-400">Feeds 4-5 · Choose 3 toppings</div>
              </div>
              <span className="text-xs font-bold text-[#0BCB91]">€26.00</span>
            </div>

            {/* Loyalty Stamp Card */}
            <div className="p-2 rounded-xl bg-blue-950/40 border border-blue-800/40 space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-blue-200">
                <span>Loyalty Stamps: 4 / 6</span>
                <span className="text-emerald-400">Next Slice Free!</span>
              </div>
              <div className="flex gap-1.5 pt-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 h-1.5 rounded-full bg-[#0BCB91]" />
                ))}
                {[5, 6].map((i) => (
                  <div key={i} className="flex-1 h-1.5 rounded-full bg-slate-700" />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Checkout Button */}
          <div className="mt-auto space-y-1.5">
            <div className="w-full py-2 rounded-xl bg-gradient-to-r from-[#1877F2] to-[#0BCB91] text-center text-xs font-bold text-white shadow">
              Checkout · 1 Item (€5.50)
            </div>
            <div className="text-center text-[9px] font-mono text-slate-400">
              Kitchen Printing & FCM Push Integrated
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Marketplace / Multi-tenant Dashboard (FreeOnlineOrdering)
  return (
    <div
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl p-4 border border-slate-800 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#1877F2]" />
          <span className="text-xs font-bold text-white font-mono">{title}</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Commission-Free Active
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 my-auto py-2">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
          <div className="text-[10px] font-mono text-slate-400">TODAY ORDERS</div>
          <div className="text-lg font-bold text-white">1,482 Orders</div>
          <div className="text-[10px] text-[#0BCB91]">Direct In-Store Print</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
          <div className="text-[10px] font-mono text-slate-400">EST. SAVINGS</div>
          <div className="text-lg font-bold text-emerald-400">£4,290 / mo</div>
          <div className="text-[10px] text-slate-400">0% Aggregator Fee</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
          <div className="text-[10px] font-mono text-slate-400">DISPATCH TIME</div>
          <div className="text-lg font-bold text-[#1877F2]">1.8 Seconds</div>
          <div className="text-[10px] text-slate-400">Cloud to Thermal</div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>PostGIS Postcode Radius Boundary: Enforced</span>
        <span className="text-white">Live UK Network</span>
      </div>
    </div>
  );
}
