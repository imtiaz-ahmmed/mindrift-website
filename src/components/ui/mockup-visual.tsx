"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideImage {
  src: string;
  alt: string;
}

interface ProjectImageSlideshowProps {
  images: SlideImage[];
  accentColor?: string;
  renderMode?: "cover" | "contain";
  className?: string;
}

/**
 * Reusable, accessible project image slideshow with auto-looping,
 * manual directional controls, and responsive slide indicator dots.
 */
function ProjectImageSlideshow({
  images,
  accentColor = "#1877F2",
  renderMode = "cover",
  className = "",
}: ProjectImageSlideshowProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % images.length);
  };

  const current = images[selectedIdx];
  if (!current) return null;

  return (
    <div
      className={`w-full aspect-[16/10] bg-[#070F2B] rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden group select-none ${className}`}
    >
      {renderMode === "cover" ? (
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#070F2B]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="relative max-h-full max-w-full object-contain transition-all duration-700 py-1 drop-shadow-2xl"
          />
        </div>
      )}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <div className="absolute inset-y-0 inset-x-3 sm:inset-x-4 flex items-center justify-between pointer-events-none z-20">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous capture"
            className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-white/50 backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next capture"
            className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-[#1877F2] text-white border border-slate-700/80 hover:border-white/50 backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}

      {/* Slide Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center pointer-events-none">
          <div className="flex items-center gap-1.5 p-1.5 px-3 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/70 pointer-events-auto shadow-xl">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedIdx === idx
                    ? "w-6"
                    : "w-1.5 bg-slate-500/80 hover:bg-slate-300"
                }`}
                style={{
                  backgroundColor: selectedIdx === idx ? accentColor : undefined,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 1. Odyssey.stream Real Captures
const ODYSSEY_IMAGES: SlideImage[] = [
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

// 2. FirstChoice ePOS Real Captures
const EPOS_IMAGES: SlideImage[] = [
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

// 3. AB3 Medical Real Captures
const MEDICAL_IMAGES: SlideImage[] = [
  {
    src: "/assets/projects/AB3Medical/fig1.png",
    alt: "AB3 Medical Athlete Electronic Medical Record Platform",
  },
  {
    src: "/assets/projects/AB3Medical/fig2.png",
    alt: "AB3 Medical Athlete Health Passport & Clinical Consultation Mobile App",
  },
];

// 4. YumaPOS Mobile Suite Real Captures
const YUMAPOS_IMAGES: SlideImage[] = [
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

// 5. FreeOnlineOrdering Real Captures
const FREE_ONLINE_ORDERING_IMAGES: SlideImage[] = [
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

interface MockupVisualProps {
  type: "mobile" | "dashboard" | "gis" | "cloud" | "security" | "streaming" | "epos" | "medical";
  title?: string;
  className?: string;
}

export function MockupVisual({ type, className = "" }: MockupVisualProps) {
  switch (type) {
    case "streaming":
      return (
        <ProjectImageSlideshow
          images={ODYSSEY_IMAGES}
          accentColor="#1877F2"
          renderMode="cover"
          className={className}
        />
      );
    case "epos":
      return (
        <ProjectImageSlideshow
          images={EPOS_IMAGES}
          accentColor="#0BCB91"
          renderMode="cover"
          className={className}
        />
      );
    case "medical":
      return (
        <ProjectImageSlideshow
          images={MEDICAL_IMAGES}
          accentColor="#1877F2"
          renderMode="cover"
          className={className}
        />
      );
    case "mobile":
      return (
        <ProjectImageSlideshow
          images={YUMAPOS_IMAGES}
          accentColor="#0BCB91"
          renderMode="contain"
          className={className}
        />
      );
    case "dashboard":
    default:
      return (
        <ProjectImageSlideshow
          images={FREE_ONLINE_ORDERING_IMAGES}
          accentColor="#1877F2"
          renderMode="contain"
          className={className}
        />
      );
  }
}
