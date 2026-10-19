"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  const handleMouseEnterServices = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const handleMouseEnterOtherLink = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-xs"
          : "bg-white/90 dark:bg-[#020617]/90 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo priority />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* Services with Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <div className="flex items-center">
                <Link
                  href="/services"
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    pathname.startsWith("/services") || isServicesOpen
                      ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/70 dark:bg-slate-800/70 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-label="Toggle services menu"
                  aria-expanded={isServicesOpen}
                  className="p-1.5 -ml-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180 text-[#1877F2] dark:text-[#0BCB91]" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            <Link
              href="/projects"
              onMouseEnter={handleMouseEnterOtherLink}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith("/projects")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/70 dark:bg-slate-800/70 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              Projects
            </Link>

            <Link
              href="/industries"
              onMouseEnter={handleMouseEnterOtherLink}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith("/industries")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/70 dark:bg-slate-800/70 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/insights"
              onMouseEnter={handleMouseEnterOtherLink}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/70 dark:bg-slate-800/70 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              Insights
            </Link>

            <Link
              href="/about"
              onMouseEnter={handleMouseEnterOtherLink}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith("/about")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/70 dark:bg-slate-800/70 font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Desktop Contact CTA */}
            <div className="hidden sm:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 btn-3d-elevated btn-animate-shimmer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] group cursor-pointer"
              >
                <span>Discuss Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <MegaMenu
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        onMouseEnter={handleMouseEnterServices}
        onMouseLeave={handleMouseLeaveServices}
      />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}
