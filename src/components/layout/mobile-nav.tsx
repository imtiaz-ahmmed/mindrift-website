"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navigationData } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { X, ChevronDown, ArrowRight, FileText, ExternalLink } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-[#070F28] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
          <Logo isCompact={false} />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-5 py-6 space-y-4">
          {/* Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between py-2 text-sm font-mono font-bold uppercase tracking-wider text-[#000B49] dark:text-white"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  servicesExpanded ? "rotate-180 text-[#1877F2]" : ""
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="mt-2 pl-3 space-y-2.5 border-l-2 border-slate-200 dark:border-slate-800 py-1 animate-in fade-in duration-150">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block text-xs font-mono font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline"
                >
                  All Capabilities Overview →
                </Link>
                {navigationData.servicesMegaMenu.flatMap((g) => g.items).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block text-xs text-slate-600 dark:text-slate-300 hover:text-[#1877F2] dark:hover:text-[#0BCB91] py-1 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/projects"
            onClick={onClose}
            className="block py-2 text-sm font-mono font-bold uppercase tracking-wider text-[#000B49] dark:text-white hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
          >
            Projects & Case Studies
          </Link>

          <Link
            href="/industries"
            onClick={onClose}
            className="block py-2 text-sm font-mono font-bold uppercase tracking-wider text-[#000B49] dark:text-white hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
          >
            Industries We Serve
          </Link>

          <Link
            href="/insights"
            onClick={onClose}
            className="block py-2 text-sm font-mono font-bold uppercase tracking-wider text-[#000B49] dark:text-white hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
          >
            Insights & Engineering
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className="block py-2 text-sm font-mono font-bold uppercase tracking-wider text-[#000B49] dark:text-white hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
          >
            About Mindrift
          </Link>

          {/* Company Profile Drive Link */}
          <a
            href={siteConfig.companyProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0BCB91]" />
              <span>Company Profile (PDF)</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Footer CTAs */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50 dark:bg-slate-900/50">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1877F2] hover:bg-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="text-center text-[10px] font-mono text-slate-400">
            ENTERPRISE TECHNOLOGY AGENCY · GLOBAL
          </div>
        </div>
      </div>
    </div>
  );
}
