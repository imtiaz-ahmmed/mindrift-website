"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  isCompact?: boolean;
  priority?: boolean;
}

export function Logo({ className = "", isCompact = false, priority = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Mindrift Agency — Home"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] rounded-xl transition-all ${className}`}
    >
      <div className="relative flex items-center overflow-hidden rounded-xl bg-[#000B2B] px-2.5 py-1 border border-blue-900/40 shadow-xs group-hover:border-[#1877F2]/60 transition-colors">
        <Image
          src="/assets/logos/logo.jpg"
          alt="Mindrift Agency — Enterprise Software & AI Engineering"
          width={220}
          height={68}
          className={isCompact ? "h-7 w-auto object-contain" : "h-8 sm:h-9 md:h-10 w-auto object-contain"}
          priority={priority}
        />
      </div>
    </Link>
  );
}

export function OriginalImageLogo({
  width = 220,
  height = 68,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#000B2B] px-2.5 py-1.5 border border-blue-900/40 ${className}`}>
      <Image
        src="/assets/logos/logo.jpg"
        alt="Mindrift Agency"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
