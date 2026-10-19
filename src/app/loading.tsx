import React from "react";
import Image from "next/image";
import { Terminal, Cpu } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center font-mono">
      {/* Central Rotating HUD Ring */}
      <div className="relative flex items-center justify-center w-48 h-48 mb-4">
        {/* Outer Rotating Degree Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-spin [animation-duration:14s] pointer-events-none" />
        
        {/* Inner Counter-Rotating Reticle */}
        <div className="absolute inset-2 rounded-full border border-cyan-400/30 animate-spin-reverse pointer-events-none">
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00D8F6]" />
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0BCB91]" />
        </div>

        {/* Central Logo with Laser Scanner */}
        <div className="relative z-10 px-4 py-2 rounded-xl bg-[#000822] border border-blue-500/40 shadow-xl overflow-hidden">
          <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D8F6] to-transparent shadow-[0_0_8px_#00D8F6] animate-laser-scan pointer-events-none" />
          <Image
            src="/assets/logos/logo.jpg"
            alt="Mindrift Agency"
            width={160}
            height={50}
            priority
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </div>
      </div>

      {/* High-Tech Telemetry Status */}
      <div className="space-y-2 max-w-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-[#00D8F6]">
          <Terminal className="w-3 h-3 text-[#0BCB91]" />
          <span>SYNCHRONIZING_ARCHITECTURE...</span>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-1 h-2 rounded-full bg-[#1877F2] animate-pulse" />
          <div className="w-1 h-3.5 rounded-full bg-[#00D8F6] animate-pulse [animation-delay:150ms]" />
          <div className="w-1 h-4 rounded-full bg-[#0BCB91] animate-pulse [animation-delay:300ms]" />
          <div className="w-1 h-2.5 rounded-full bg-[#00D8F6] animate-pulse [animation-delay:450ms]" />
        </div>
      </div>
    </div>
  );
}
