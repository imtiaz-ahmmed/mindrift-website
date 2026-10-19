"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/data/site-config";
import { ChevronDown, Menu, ArrowRight, FileText, ExternalLink } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md"
          : "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Tech Badge */}
          <div className="flex items-center gap-3">
            <Logo priority />
            <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-[#0BCB91]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-ping" />
              <span>SYS::ONLINE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* Services with Mega Menu Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-md transition-colors ${
                  pathname.startsWith("/services") || isServicesOpen
                    ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/60 dark:bg-slate-800/60"
                    : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <Link
              href="/projects"
              className={`px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-md transition-colors ${
                pathname.startsWith("/projects")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/60 dark:bg-slate-800/60"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
              }`}
            >
              Projects
            </Link>

            <Link
              href="/industries"
              className={`px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-md transition-colors ${
                pathname.startsWith("/industries")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/60 dark:bg-slate-800/60"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-md transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/60 dark:bg-slate-800/60"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
              }`}
            >
              Insights
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-md transition-colors ${
                pathname.startsWith("/about")
                  ? "text-[#1877F2] dark:text-[#0BCB91] bg-slate-100/60 dark:bg-slate-800/60"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-[#0BCB91] hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
              }`}
            >
              About
            </Link>

            {/* Company Profile Drive Link */}
            <a
              href={siteConfig.companyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Company Profile PDF (Opens in new tab)"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-[#0BCB91] rounded-md transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-800/50 group"
            >
              <FileText className="w-3.5 h-3.5 text-[#0BCB91]" />
              <span>Company Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0BCB91] transition-colors" />
            </a>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Desktop Contact CTA */}
            <div className="hidden sm:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-all shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] group border border-blue-500/20"
              >
                <span>Discuss Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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

      <MegaMenu isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}
