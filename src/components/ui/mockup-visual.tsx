"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. Odyssey 3D Pixel Streaming Images
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
      className={`w-full aspect-[16/10] bg-[#030718] rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group select-none ${className}`}
    >
      {/* 100% Clean Image Preview - Zero Text Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Left and Right Navigation Arrows */}
      <div className="absolute inset-y-0 inset-x-3 sm:inset-x-4 flex items-center justify-between pointer-events-none z-20">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous scene"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next scene"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide dot indicators ONLY (NO text overlay) */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center pointer-events-none">
        <div className="flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70 pointer-events-auto shadow-xl">
          {ODYSSEY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? "w-6 bg-[#1877F2]"
                  : "w-1.5 bg-slate-500/80 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. FirstChoice ePOS Images
const EPOS_IMAGES = [
  {
    src: "/assets/projects/FirstChoiceePOS/fig1.png",
    alt: "FirstChoice ePOS Countertop Terminal for Coffee Shops and Hospitality",
  },
  {
    src: "/assets/projects/FirstChoiceePOS/fig2.png",
    alt: "FirstChoice ePOS Mobile App & Handheld Online Ordering POS",
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
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group select-none ${className}`}
    >
      {/* 100% Clean Image Preview - Zero Text Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Left and Right Navigation Arrows */}
      <div className="absolute inset-y-0 inset-x-3 sm:inset-x-4 flex items-center justify-between pointer-events-none z-20">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous POS capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#0BCB91] hover:text-slate-950 text-white border border-slate-700/80 hover:border-[#0BCB91] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next POS capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#0BCB91] hover:text-slate-950 text-white border border-slate-700/80 hover:border-[#0BCB91] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide dot indicators ONLY (NO text overlay) */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center pointer-events-none">
        <div className="flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70 pointer-events-auto shadow-xl">
          {EPOS_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? "w-6 bg-[#0BCB91]"
                  : "w-1.5 bg-slate-500/80 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. AB3 Medical Images
const MEDICAL_IMAGES = [
  {
    src: "/assets/projects/AB3Medical/fig1.png",
    alt: "AB3 Medical Athlete Electronic Medical Record Platform",
  },
  {
    src: "/assets/projects/AB3Medical/fig2.png",
    alt: "AB3 Medical Athlete Health Passport & Clinical Consultation Mobile App",
  },
];

function MedicalMockupVisual({ className = "" }: { className?: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % MEDICAL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + MEDICAL_IMAGES.length) % MEDICAL_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % MEDICAL_IMAGES.length);
  };

  const current = MEDICAL_IMAGES[selectedIdx];

  return (
    <div
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group select-none ${className}`}
    >
      {/* 100% Clean Image Preview - Zero Text Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Left and Right Navigation Arrows */}
      <div className="absolute inset-y-0 inset-x-3 sm:inset-x-4 flex items-center justify-between pointer-events-none z-20">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous medical capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next medical capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide dot indicators ONLY (NO text overlay) */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center pointer-events-none">
        <div className="flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70 pointer-events-auto shadow-xl">
          {MEDICAL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? "w-6 bg-[#1877F2]"
                  : "w-1.5 bg-slate-500/80 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 4. YumaPOS Mobile Suite Images
const YUMAPOS_IMAGES = [
  {
    src: "/assets/projects/YumaPOS/fig1.jpg",
    alt: "DiFontaine's Pizzeria Customer App Login and Authentication Powered by YumaPOS",
  },
  {
    src: "/assets/projects/YumaPOS/fig2.jpg",
    alt: "DiFontaine's Pizzeria In-App Menu Store with 20-Inch Pies, Slices, and Calzones",
  },
  {
    src: "/assets/projects/YumaPOS/fig3.jpg",
    alt: "DiFontaine's Pizzeria The Uptown Pizza Details with Loyalty Points Redemption and Allergen Badges",
  },
];

function YumaPosMockupVisual({ className = "" }: { className?: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % YUMAPOS_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + YUMAPOS_IMAGES.length) % YUMAPOS_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % YUMAPOS_IMAGES.length);
  };

  const current = YUMAPOS_IMAGES[selectedIdx];

  return (
    <div
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group select-none ${className}`}
    >
      {/* Centered Phone Interface with Ambient Glow - Zero Text Overlay */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#070F2B]">
        {/* Soft Ambient Blurred Glow */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.alt}
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
        />
        {/* High-Resolution Centered Phone Capture */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="relative max-h-full max-w-full object-contain transition-all duration-700 py-1 drop-shadow-2xl"
        />
      </div>

      {/* Left and Right Navigation Arrows */}
      <div className="absolute inset-y-0 inset-x-3 sm:inset-x-4 flex items-center justify-between pointer-events-none z-20">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous mobile capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#0BCB91] hover:text-slate-950 text-white border border-slate-700/80 hover:border-[#0BCB91] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next mobile capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#0BCB91] hover:text-slate-950 text-white border border-slate-700/80 hover:border-[#0BCB91] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide dot indicators ONLY (NO text overlay) */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center pointer-events-none">
        <div className="flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70 pointer-events-auto shadow-xl">
          {YUMAPOS_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? "w-6 bg-[#0BCB91]"
                  : "w-1.5 bg-slate-500/80 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 5. FreeOnlineOrdering Images
const FREE_ONLINE_ORDERING_IMAGES = [
  {
    src: "/assets/projects/FreeOnlineOrdering/fig1.webp",
    alt: "FreeOnlineOrdering Delivery Zone Management System",
  },
  {
    src: "/assets/projects/FreeOnlineOrdering/fig2.webp",
    alt: "FreeOnlineOrdering Merchant Outlet Login and Start Point",
  },
  {
    src: "/assets/projects/FreeOnlineOrdering/fig3.webp",
    alt: "FreeOnlineOrdering Outlet Selection and Restaurant Management",
  },
];

function FreeOnlineOrderingMockupVisual({ className = "" }: { className?: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % FREE_ONLINE_ORDERING_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + FREE_ONLINE_ORDERING_IMAGES.length) % FREE_ONLINE_ORDERING_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % FREE_ONLINE_ORDERING_IMAGES.length);
  };

  const current = FREE_ONLINE_ORDERING_IMAGES[selectedIdx];

  return (
    <div
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group select-none ${className}`}
    >
      {/* Centered Interface with Ambient Glow - Zero Text Overlay */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#070F2B]">
        {/* Soft Ambient Blurred Glow */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.alt}
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
        />
        {/* High-Resolution Centered Capture */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="relative max-h-full max-w-full object-contain transition-all duration-700 py-1 drop-shadow-2xl"
        />
      </div>

      {/* Left and Right Navigation Arrows */}
      <div className="absolute inset-y-0 inset-x-3 sm:inset-x-4 flex items-center justify-between pointer-events-none z-20">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous management capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next management capture"
          className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-[#1877F2] backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide dot indicators ONLY (NO text overlay) */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center pointer-events-none">
        <div className="flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70 pointer-events-auto shadow-xl">
          {FREE_ONLINE_ORDERING_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? "w-6 bg-[#1877F2]"
                  : "w-1.5 bg-slate-500/80 hover:bg-slate-300"
              }`}
            />
          ))}
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
    return <MedicalMockupVisual className={className} />;
  }

  // Mobile App (YumaPOS Suite)
  if (type === "mobile") {
    return <YumaPosMockupVisual className={className} />;
  }

  // Multi-tenant Platform (FreeOnlineOrdering)
  return <FreeOnlineOrderingMockupVisual className={className} />;
}
