import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative flex items-center justify-center mb-6">
        {/* Glowing Aura */}
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#1877F2]/30 via-[#00D8F6]/25 to-[#0BCB91]/30 blur-lg animate-pulse" />
        
        {/* Rotating Accent Ring */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-[#1877F2] via-[#00D8F6] to-[#0BCB91] opacity-60 animate-spin [animation-duration:3s]" />
        
        {/* Emblem Container */}
        <div className="relative z-10 px-5 py-2.5 rounded-xl bg-[#000B2B] border border-blue-500/40 shadow-xl">
          <Image
            src="/assets/logos/logo.jpg"
            alt="Mindrift Agency"
            width={180}
            height={55}
            priority
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-ping" />
          <span>Synchronizing System Architecture</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
          Loading enterprise data & assets...
        </p>
      </div>
    </div>
  );
}
