"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  isCompact?: boolean;
  priority?: boolean;
}

export function Logo({ className = "", isCompact = false, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Mindrift Agency Home"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] rounded-md ${className}`}
    >
      {/* Brand Brain & Arrow Symbol SVG */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className={isCompact ? "w-8 h-8" : "w-10 h-10"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mindriftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1877F2" />
              <stop offset="60%" stopColor="#0BCB91" />
              <stop offset="100%" stopColor="#00E599" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Brain Contour & Circuited Neural Pathways */}
          <path
            d="M 45 82 C 28 82 12 70 12 52 C 12 40 20 28 32 24 C 34 16 42 12 50 14 C 54 10 64 10 70 16 C 76 22 76 30 74 34"
            stroke="url(#mindriftGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Internal Radiating Neural Branches with Circuit Nodes */}
          <path
            d="M 44 80 C 30 76 22 65 24 50 C 25 42 30 35 38 32"
            stroke="url(#mindriftGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="38" cy="32" r="3" fill="#1877F2" />

          <path
            d="M 46 80 C 36 68 32 54 36 42 C 38 38 45 35 50 36"
            stroke="url(#mindriftGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="50" cy="36" r="3" fill="#1877F2" />

          <path
            d="M 48 80 C 44 65 46 52 54 44 C 58 40 64 42 66 45"
            stroke="url(#mindriftGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="66" cy="45" r="2.8" fill="#0BCB91" />

          {/* Dynamic Upward Growth Arrow swooping from brain base */}
          <path
            d="M 32 80 C 46 84 64 82 76 68 C 84 58 88 44 90 28"
            stroke="url(#mindriftGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Arrowhead */}
          <polygon
            points="90,20 80,32 94,30"
            fill="#0BCB91"
            filter="url(#glowFilter)"
          />

          {/* Digital Tech Pixels / Innovation Data Blocks */}
          <rect x="74" y="32" width="4" height="4" rx="1" fill="#0BCB91" opacity="0.9" />
          <rect x="80" y="42" width="3.5" height="3.5" rx="0.8" fill="#1877F2" opacity="0.8" />
          <rect x="84" y="56" width="3" height="3" rx="0.6" fill="#0BCB91" opacity="0.75" />
          <rect x="70" y="24" width="3" height="3" rx="0.6" fill="#1877F2" opacity="0.85" />
        </svg>
      </div>

      {/* Brand Logotype */}
      {!isCompact && (
        <div className="flex flex-col select-none">
          <span className="font-extrabold text-xl tracking-tight leading-none text-[#000B49] dark:text-white transition-colors duration-200">
            mindrift
          </span>
          <span className="text-[9px] font-bold tracking-[0.28em] text-[#0BCB91] leading-tight uppercase mt-0.5">
            AGENCY
          </span>
        </div>
      )}
    </Link>
  );
}

/**
 * Full Original Image Logo presentation component
 */
export function OriginalImageLogo({
  width = 200,
  height = 60,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src="/assets/logos/logo.jpg"
        alt="Mindrift Agency — Software, AI, Cloud, Cybersecurity"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
