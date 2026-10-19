"use client";

import React, { useState } from "react";
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
  Maximize2,
  Eye,
} from "lucide-react";
import { ImageLightbox, LightboxImage } from "@/components/ui/image-lightbox";

const ODYSSEY_IMAGES: LightboxImage[] = [
  {
    src: "/assets/projects/odyssey-stream/fig-1.png",
    alt: "Odyssey Platform Real-Time Unreal Engine 5 Cloud Pixel Streaming",
    title: "Odyssey Platform — Real-Time Cloud Pixel Streaming",
    subtitle: "Global Zero-Install Unreal Engine 5 WebRTC Streaming Infrastructure",
    description: "Official Odyssey.stream platform hero showcasing photorealistic Unreal Engine 5 jungle environment streamed in real time to web browsers worldwide with zero downloads or hardware friction.",
    specs: [
      { label: "Rendering Engine", value: "Unreal Engine 5 (Nanite & Lumen)" },
      { label: "Streaming Protocol", value: "WebRTC with NVENC Acceleration" },
      { label: "Performance", value: "60 FPS · 4K Resolution" },
      { label: "Interactive Latency", value: "<80ms Global Edge Routing" },
    ],
  },
  {
    src: "/assets/projects/odyssey-stream/fig-2.png",
    alt: "Live Production ArchViz Demo & Interactive 3D Configurator on app.odyssey.stream",
    title: "Live Production System — In-Browser ArchViz & Interactive 3D Configurator",
    subtitle: "Commercial Deployment for Luxury Retail & Architecture on app.odyssey.stream",
    description: "Live session of the 'Edinburgh' Mid-Century furniture collection configurator running on app.odyssey.stream. Allows users to swap fabric styles, wood bases, inspect spatial annotation hotspots (i), and execute direct e-commerce checkout (£1,199) inside Google Chrome.",
    specs: [
      { label: "Live Deployment", value: "app.odyssey.stream" },
      { label: "Interactivity", value: "Real-Time Material Swapping & Spatial Hotspots" },
      { label: "E-Commerce", value: "Direct Cart & Checkout Integration" },
      { label: "Client Support", value: "Zero-Install Chrome, Safari, Edge, Mobile" },
    ],
  },
  {
    src: "/assets/projects/odyssey-stream/fig-3.png",
    alt: "Unreal Engine 5 Editor Bridge & Variant Manager Integration",
    title: "Unreal Engine 5 Editor Bridge & Variant Manager Pipeline",
    subtitle: "Native UE5 Authoring Pipeline with Real-Time Property Binding",
    description: "Direct Unreal Engine 5 editor integration showcasing the Variant Manager pipeline. Content creators author controller variants (White/Black colors, Elite/Normal joysticks) and bind them instantaneously to web client configurators via no-code modules.",
    specs: [
      { label: "Authoring Tool", value: "Native Unreal Engine 5 Plugin" },
      { label: "Variant System", value: "UE5 Variant Manager to DataChannel Sync" },
      { label: "Dynamic Assets", value: "Runtime Sketchfab & GLTF Ingestion" },
      { label: "Audio Integration", value: "Dolby.io 3D Spatial Audio" },
    ],
  },
];

function StreamingMockupVisual({ className = "" }: { className?: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const current = ODYSSEY_IMAGES[selectedIdx];

  return (
    <>
      <div
        className={`w-full aspect-[16/10] bg-[#030718] rounded-2xl border border-blue-900/60 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between group ${className}`}
      >
        {/* Background Image Preview */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 cursor-pointer overflow-hidden"
          title="Click to view full size"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
          />
          {/* Gradient overlay to ensure HUD readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030718] via-black/20 to-[#030718]/80 pointer-events-none" />
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

        {/* Center Hover Action: Click to Expand Full Screen */}
        <div className="relative z-10 flex flex-col items-center justify-center p-4 pointer-events-none my-auto">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/90 text-white border border-[#1877F2]/60 shadow-2xl backdrop-blur-md text-xs font-bold hover:bg-[#1877F2] cursor-pointer"
          >
            <Maximize2 className="w-4 h-4 text-[#00D8F6]" />
            <span>Click to view full size</span>
          </div>
        </div>

        {/* Bottom Status Ticker & Scene Switcher */}
        <div className="relative z-10 border-t border-slate-800/80 p-3 bg-slate-950/85 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-300">
          {/* Quick Scene Switcher Pills */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            <span className="text-slate-400 font-bold hidden sm:inline mr-1">View:</span>
            {ODYSSEY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx(idx);
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? "bg-[#1877F2] text-white font-bold shadow-xs"
                    : "bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                Fig 0{idx + 1}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="hidden md:inline">Multiplayer Nodes: 4 Clusters Active</span>
            <span className="text-[#0BCB91] font-bold">Browser Zero-Install Stream</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={ODYSSEY_IMAGES}
        currentIndex={selectedIdx}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedIdx(newIdx)}
      />
    </>
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
    return (
      <div
        className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl p-4 border border-emerald-900/50 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between ${className}`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#0BCB91]" />
            <span className="text-xs font-bold text-white font-mono">FirstChoice ePOS Till #01 (Dublin)</span>
          </div>
          <span className="text-[10px] font-mono text-[#0BCB91] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Offline Resilient · KDS Linked
          </span>
        </div>

        {/* POS Grid View */}
        <div className="grid grid-cols-12 gap-3 my-auto py-2">
          {/* Order Ticket Panel */}
          <div className="col-span-6 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold border-b border-slate-800 pb-1">
              <span>Table 12 · 3 Guests</span>
              <span className="text-[#0BCB91]">€48.50</span>
            </div>
            <div className="space-y-1 text-[10px] font-mono text-slate-300">
              <div className="flex justify-between">
                <span>1x Artisan Sourdough Pizza</span>
                <span>€16.50</span>
              </div>
              <div className="flex justify-between text-slate-400 pl-2">
                <span>+ Extra Mozzarella & Basil</span>
                <span>€2.00</span>
              </div>
              <div className="flex justify-between">
                <span>2x Craft Cider (Pint)</span>
                <span>€14.00</span>
              </div>
            </div>
          </div>

          {/* Quick Menu Touch Tiles */}
          <div className="col-span-6 grid grid-cols-2 gap-1.5 text-center text-[10px] font-bold">
            <div className="p-2.5 rounded-lg bg-[#1877F2]/20 border border-[#1877F2]/40 text-blue-200 flex flex-col justify-center">
              <span>Table Order</span>
              <span className="text-[8px] font-mono text-slate-400">QR Synced</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0BCB91]/20 border border-[#0BCB91]/40 text-emerald-200 flex flex-col justify-center">
              <span>Send to KDS</span>
              <span className="text-[8px] font-mono text-emerald-400">Kitchen Disp</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 flex flex-col justify-center">
              <span>Thermal Receipt</span>
              <span className="text-[8px] font-mono text-slate-400">ESC/POS</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-600 text-white flex flex-col justify-center shadow">
              <span>Pay & Close</span>
              <span className="text-[8px] font-mono">Card / Cash</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-800 pt-2 text-slate-400">
          <div className="flex items-center gap-1.5">
            <Printer className="w-3.5 h-3.5 text-[#0BCB91]" />
            <span>Kitchen Display System: Connected</span>
          </div>
          <span className="text-[#0BCB91]">Cloud Sync: 100%</span>
        </div>
      </div>
    );
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
