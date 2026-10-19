"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Ultra-snappy corporate loading: ~450ms on first load, instant if already seen
    const hasSeenLoader = sessionStorage.getItem("mindrift-loader-seen");
    if (hasSeenLoader) {
      setIsRemoved(true);
      return;
    }

    const duration = 480; // Fast and snappy
    const intervalTime = duration / 20;

    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem("mindrift-loader-seen", "true");
          setTimeout(() => {
            setIsRemoved(true);
          }, 300);
        }, 80);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      onClick={() => {
        setIsComplete(true);
        setTimeout(() => setIsRemoved(true), 200);
      }}
      aria-hidden={isComplete}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#000824] text-white transition-opacity duration-300 cursor-pointer ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient subtle glow */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-4 px-4 text-center">
        {/* Mindrift Official Corporate Logo */}
        <div className="relative flex items-center justify-center px-4 py-2 rounded-xl bg-[#000B2B] border border-blue-900/40 shadow-xl">
          <Image
            src="/assets/logos/logo.jpg"
            alt="Mindrift Agency"
            width={180}
            height={55}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </div>

        {/* Minimal High-Speed Corporate Progress Line */}
        <div className="w-44 h-[2px] rounded-full bg-slate-800 overflow-hidden relative">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1877F2] via-[#00D8F6] to-[#0BCB91] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Formal Corporate Subtext */}
        <p className="text-[11px] font-medium tracking-wider text-slate-400 font-sans uppercase">
          Enterprise Technology Partner
        </p>
      </div>
    </div>
  );
}
