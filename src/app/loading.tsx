import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      {/* Mindrift Official Logo */}
      <div className="relative px-4 py-2 rounded-xl bg-[#000B2B] border border-blue-900/40 shadow-md">
        <Image
          src="/assets/logos/logo.jpg"
          alt="Mindrift"
          width={160}
          height={50}
          priority
          className="h-7 w-auto object-contain"
        />
      </div>

      {/* Progress Line */}
      <div className="w-48 h-[2px] rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
        <div className="h-full rounded-full bg-gradient-to-r from-[#1877F2] via-[#00D8F6] to-[#0BCB91] animate-pulse" />
      </div>

      {/* Animated Loading Text */}
      <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 font-sans">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00D8F6] animate-ping" />
        <span className="bg-gradient-to-r from-[#1877F2] via-[#00D8F6] to-[#0BCB91] bg-clip-text text-transparent">
          Next Generation Future is Loading
        </span>
        <span className="flex gap-0.5 text-xs text-[#0BCB91] font-bold">
          <span className="animate-bounce [animation-delay:0ms]">.</span>
          <span className="animate-bounce [animation-delay:150ms]">.</span>
          <span className="animate-bounce [animation-delay:300ms]">.</span>
        </span>
      </div>
    </div>
  );
}
