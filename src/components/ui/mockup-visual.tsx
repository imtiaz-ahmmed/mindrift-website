import React from "react";
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
} from "lucide-react";

interface MockupVisualProps {
  type: "mobile" | "dashboard" | "gis" | "cloud" | "security" | "streaming" | "epos" | "medical";
  title: string;
  className?: string;
}

export function MockupVisual({ type, title, className = "" }: MockupVisualProps) {
  // 3D Pixel Streaming (Odyssey.stream)
  if (type === "streaming") {
    return (
      <div
        className={`w-full aspect-[16/10] bg-[#030718] rounded-2xl p-4 border border-blue-900/60 shadow-2xl text-white relative overflow-hidden flex flex-col justify-between ${className}`}
      >
        {/* HUD Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-white tracking-wide">
              UE5 CLOUD STREAMING ENGINE
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="text-emerald-400">60 FPS · 4K</span>
            <span className="text-[#1877F2]">WebRTC NVENC</span>
            <span className="bg-blue-500/10 px-2 py-0.5 rounded text-blue-300 border border-blue-500/20">
              Latency: 42ms
            </span>
          </div>
        </div>

        {/* Center 3D Viewport Simulation */}
        <div className="relative my-auto py-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-sm h-32 rounded-xl bg-gradient-to-tr from-blue-950/60 via-slate-900/40 to-emerald-950/40 border border-blue-500/30 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            
            {/* 3D Wireframe / Mesh Graphic */}
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-[#1877F2]/40 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="absolute w-14 h-14 rounded-lg border-2 border-[#0BCB91]/50 rotate-45" />
              <div className="absolute text-[10px] font-mono font-bold text-[#0BCB91] bg-slate-950/80 px-2 py-0.5 rounded border border-[#0BCB91]/30">
                UE5 SCENE ACTIVE
              </div>
            </div>

            {/* Overlaid UI Controls */}
            <div className="absolute top-2 left-2 flex items-center gap-1.5 text-[9px] font-mono text-slate-300 bg-black/60 px-2 py-1 rounded">
              <Sliders className="w-3 h-3 text-[#1877F2]" />
              <span>Configurator: Titanium Gray</span>
            </div>
            <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-mono text-slate-300 bg-black/60 px-2 py-1 rounded">
              <Volume2 className="w-3 h-3 text-[#0BCB91]" />
              <span>Dolby Spatial Audio</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-800/80 pt-2 text-slate-400 z-10">
          <div>Multiplayer Nodes: 4 Clusters Active</div>
          <div className="text-[#0BCB91]">Browser Zero-Install Stream</div>
        </div>
      </div>
    );
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
