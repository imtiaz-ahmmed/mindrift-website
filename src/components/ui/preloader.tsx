"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    let hasSeenLoader = false;
    try {
      hasSeenLoader = Boolean(sessionStorage.getItem("mindrift-loader-seen"));
    } catch {
      // Ignore sessionStorage errors
    }

    if (hasSeenLoader) {
      const timer = setTimeout(() => setIsRemoved(true), 0);
      return () => clearTimeout(timer);
    }

    const duration = 580;
    const intervalTime = duration / 25;

    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem("mindrift-loader-seen", "true");
          setTimeout(() => {
            setIsRemoved(true);
          }, 320);
        }, 120);
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
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-5 px-4 text-center">
        {/* Mindrift Official Corporate Logo */}
        <div className="relative flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#000B2B] border border-blue-900/50 shadow-2xl">
          <Image
            src="/assets/logos/logo.jpg"
            alt="Mindrift"
            width={180}
            height={55}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </div>

        {/* Minimal High-Speed Progress Line */}
        <div className="w-52 h-[2.5px] rounded-full bg-slate-800 overflow-hidden relative shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1877F2] via-[#00D8F6] to-[#0BCB91] transition-all duration-75 ease-out shadow-[0_0_10px_#00D8F6]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Animated Loading Text: Next Generation Future is Loading */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <span className="w-2 h-2 rounded-full bg-[#00D8F6] animate-ping" />
          <p className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-[#1877F2] via-[#00D8F6] to-[#0BCB91] bg-clip-text text-transparent font-sans">
            Next Generation Future is Loading
          </p>
          <span className="flex gap-0.5 text-xs text-[#0BCB91] font-bold">
            <span className="animate-bounce [animation-delay:0ms]">.</span>
            <span className="animate-bounce [animation-delay:150ms]">.</span>
            <span className="animate-bounce [animation-delay:300ms]">.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
