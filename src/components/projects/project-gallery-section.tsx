"use client";

import React, { useState } from "react";
import { ProjectGalleryItem } from "@/types";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { Maximize2, Sparkles, Layers, Eye, CheckCircle2 } from "lucide-react";

interface ProjectGallerySectionProps {
  images: ProjectGalleryItem[];
  projectTitle: string;
}

export function ProjectGallerySection({
  images,
  projectTitle,
}: ProjectGallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1877F2] dark:text-[#00D8F6]">
            <Layers className="w-4 h-4 text-[#0BCB91]" />
            Production Visuals & Architecture Verifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#000B49] dark:text-white tracking-tight">
            High-Resolution System Captures & Live Deployments
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl font-sans">
            Direct production captures and engine authoring views for {projectTitle}. Click any capture to inspect in high-resolution full screen.
          </p>
        </div>

        <button
          type="button"
          onClick={() => handleOpenLightbox(0)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 shadow-xs transition-all cursor-pointer self-start md:self-end"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Launch Fullscreen Gallery ({images.length} Captures)</span>
        </button>
      </div>

      {/* Grid of Captures */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {images.map((item, index) => (
          <div
            key={item.id}
            className="group rounded-3xl bg-white dark:bg-[#070F2B] border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-2xl hover:border-[#1877F2]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Interactive Image Preview */}
            <div
              onClick={() => handleOpenLightbox(index)}
              className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Figure Pill */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-pulse" />
                <span>FIG 0{index + 1}</span>
              </div>

              {/* Hover Overlay with Expand Hint */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/90 text-white border border-white/20 text-xs font-semibold shadow-xl group-hover:scale-105 transition-transform">
                  <Maximize2 className="w-4 h-4 text-[#00D8F6]" />
                  <span>Click to view full size</span>
                </div>
              </div>
            </div>

            {/* Content & Technical Breakdown */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#1877F2] dark:text-[#00D8F6] uppercase font-bold tracking-wider">
                  {item.subtitle}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#00D8F6] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Technical Specifications Pills */}
              {item.specs && item.specs.length > 0 && (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    Technical Specifications:
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {item.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between text-[11px] font-mono p-1.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800"
                      >
                        <span className="text-slate-500 dark:text-slate-400">{spec.label}</span>
                        <span className="text-slate-900 dark:text-slate-200 font-bold truncate max-w-[55%] text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Expand Button */}
              <button
                type="button"
                onClick={() => handleOpenLightbox(index)}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-[#1877F2] hover:text-white dark:bg-slate-800 dark:hover:bg-[#1877F2] transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Capture in Full Screen</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </section>
  );
}
