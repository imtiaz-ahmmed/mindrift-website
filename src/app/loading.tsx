import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="relative px-4 py-2 rounded-xl bg-[#000B2B] border border-blue-900/40 shadow-md">
        <Image
          src="/assets/logos/logo.jpg"
          alt="Mindrift Agency"
          width={160}
          height={50}
          priority
          className="h-7 w-auto object-contain"
        />
      </div>

      <div className="w-36 h-[2px] rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
        <div className="h-full rounded-full bg-gradient-to-r from-[#1877F2] via-[#00D8F6] to-[#0BCB91] animate-pulse" />
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans tracking-wide">
        Loading...
      </p>
    </div>
  );
}
