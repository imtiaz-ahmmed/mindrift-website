"use client";

import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ExternalLink,
} from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  description?: string;
  specs?: { label: string; value: string }[];
}

interface ImageLightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Handle keyboard events (Esc, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Reset zoom on image change or close
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex, isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.title}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-2xl text-white select-none animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-slate-900/60 border-b border-slate-800/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-3 min-w-0">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/30">
            {currentIndex + 1} / {images.length}
          </span>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-bold text-white truncate">
              {currentImage.title}
            </h2>
            {currentImage.subtitle && (
              <p className="text-xs text-slate-400 truncate font-sans">
                {currentImage.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isZoomed ? "Reset Zoom" : "Zoom 100%"}
          >
            {isZoomed ? (
              <ZoomOut className="w-4 h-4 text-[#0BCB91]" />
            ) : (
              <ZoomIn className="w-4 h-4" />
            )}
          </button>

          <a
            href={currentImage.src}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Open raw image in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 hover:text-white border border-rose-500/30 transition-colors ml-1 cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden cursor-zoom-out"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Previous Navigation Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-slate-900/80 hover:bg-[#1877F2] text-white border border-slate-700 hover:border-[#1877F2] shadow-2xl transition-all hover:scale-110 cursor-pointer"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Center Image Container */}
        <div
          className={`relative max-w-full max-h-full flex items-center justify-center transition-transform duration-300 ${
            isZoomed
              ? "scale-125 sm:scale-150 overflow-auto cursor-zoom-out"
              : "cursor-zoom-in"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[72vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl shadow-2xl border border-slate-800 ring-1 ring-white/10"
          />
        </div>

        {/* Next Navigation Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-slate-900/80 hover:bg-[#1877F2] text-white border border-slate-700 hover:border-[#1877F2] shadow-2xl transition-all hover:scale-110 cursor-pointer"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip & Technical Context */}
      <div className="bg-slate-900/70 border-t border-slate-800/80 p-4 sm:p-5 backdrop-blur-md z-20 space-y-3">
        {currentImage.description && (
          <p className="text-xs sm:text-sm text-slate-300 max-w-4xl mx-auto text-center font-sans">
            {currentImage.description}
          </p>
        )}

        {/* Technical Specs Tags */}
        {currentImage.specs && currentImage.specs.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {currentImage.specs.map((spec, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-800/90 border border-slate-700 text-slate-300"
              >
                <span className="text-slate-400 font-semibold">{spec.label}:</span>
                <span className="text-[#00D8F6] font-bold">{spec.value}</span>
              </span>
            ))}
          </div>
        )}

        {/* Thumbnail Selector (if multiple images) */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2.5 pt-1 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => {
                  setIsZoomed(false);
                  onNavigate(idx);
                }}
                className={`relative rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "border-[#1877F2] ring-2 ring-[#1877F2]/40 scale-105"
                    : "border-slate-800 opacity-60 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-16 h-10 object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
