"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Network,
  MapPin,
  Compass,
  Database,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

const iconComponentMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-[#1877F2]" />,
  Cpu: <Cpu className="w-4 h-4 text-[#0BCB91]" />,
  Cloud: <Cloud className="w-4 h-4 text-[#1877F2]" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#0BCB91]" />,
  Network: <Network className="w-4 h-4 text-[#1877F2]" />,
  MapPin: <MapPin className="w-4 h-4 text-[#0BCB91]" />,
  Compass: <Compass className="w-4 h-4 text-[#1877F2]" />,
  Database: <Database className="w-4 h-4 text-[#0BCB91]" />,
};

export function ServicesOverview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081E] relative overflow-hidden">
      {/* Ambient Cyber Backlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-blue-600/10 via-teal-500/10 to-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            suppressHydrationWarning
            className="space-y-3.5 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#1877F2] dark:text-[#0BCB91] border border-blue-200/60 dark:border-blue-900/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span className="uppercase tracking-wider">
                Full-Spectrum Capabilities · 8 Practice Disciplines
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight">
              End-to-End Technology Capabilities.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              From real-time 3D pixel streaming and hospital-grade EMR databases to multi-tenant cloud ePOS networks, we engineer scalable digital platforms with absolute architectural precision.
            </p>
          </div>

          <Link
            href="/services"
            data-aos="fade-left"
            data-aos-duration="750"
            suppressHydrationWarning
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] transition-colors shadow-md group cursor-pointer self-start md:self-end flex-shrink-0"
          >
            <span>View All Service Specifications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ================= FULL-SPECTRUM HIGH-TECH GIF SHOWCASE ================= */}
        {/*
          Redesigned Showcase Theater:
          - Replaces the 8 cluttered static cards with an animated, high-fidelity pipeline showcase.
          - Smooth 800ms hover and scroll transition.
          - Glassmorphism HUD frame with live telemetry.
        */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="850"
          data-aos-delay="150"
          suppressHydrationWarning
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#020B30] via-[#010824] to-[#000412] border border-blue-900/50 hover:border-[#1877F2]/60 shadow-[0_0_50px_rgba(24,119,242,0.12)] hover:shadow-[0_0_60px_rgba(0,216,246,0.22)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] group"
        >
          {/* Ambient Inner Lighting */}
          <div
            className={`absolute -inset-1 rounded-3xl blur-3xl pointer-events-none transition-opacity duration-700 ${
              isHovered ? "opacity-30" : "opacity-15"
            }`}
            style={{
              background:
                "radial-gradient(circle, rgba(0, 216, 246, 0.4) 0%, rgba(24, 119, 242, 0.2) 50%, transparent 80%)",
            }}
          />

          {/* Top HUD Telemetry Header */}
          <div className="relative z-20 flex items-center justify-between px-5 sm:px-7 py-3 border-b border-white/10 bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider font-bold text-[#0BCB91]">
                <span className="w-2 h-2 rounded-full bg-[#0BCB91] animate-ping" />
                PIPELINE MATRIX
              </span>
              <span className="hidden sm:inline text-slate-500 font-mono text-xs">·</span>
              <span className="hidden sm:inline text-[11px] font-mono text-slate-400">
                8 Integrated Disciplines
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-[#00D8F6]">
                FULL-SPECTRUM
              </span>
              <Link
                href="/services"
                className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-300 hover:text-white transition-colors"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Main Full-Spectrum GIF Canvas */}
          <div className="relative z-10 w-full p-3 sm:p-5 flex items-center justify-center overflow-hidden">
            <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-white/5 shadow-2xl">
              <Image
                src="/assets/full-spectrum/full-spectrum.gif"
                alt="Mindrift Full-Spectrum Capabilities · 8 Practice Disciplines"
                width={1400}
                height={467}
                unoptimized
                priority
                className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.35,1)] group-hover:scale-[1.01]"
              />

              {/* Holographic Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <div className="w-[180%] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/4 animate-holographic" />
              </div>
            </div>
          </div>

          {/* Bottom Fast-Access Practice Disciplines Strip */}
          <div className="relative z-20 px-4 sm:px-6 py-4 border-t border-white/10 bg-black/50 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
                <Layers className="w-3.5 h-3.5 text-[#00D8F6]" />
                <span className="uppercase tracking-wider">Practice Disciplines</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                Click any discipline to inspect technical blueprints
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-1">
              {servicesData.map((svc, idx) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group/item flex flex-col p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00D8F6]/50 transition-all duration-300 cursor-pointer shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover/item:text-[#0BCB91] transition-colors">
                      0{idx + 1}
                    </span>
                    <div className="p-1 rounded-md bg-black/40 border border-white/10 group-hover/item:border-[#00D8F6]/40 transition-colors">
                      {iconComponentMap[svc.iconName] || (
                        <Code2 className="w-3.5 h-3.5 text-[#1877F2]" />
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 group-hover/item:text-white transition-colors leading-tight line-clamp-2">
                    {svc.title.split("&")[0].trim()}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
