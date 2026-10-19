"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { navigationData } from "@/data/navigation";
import { ArrowRight, Sparkles, Shield, Cpu, Code2, Database, Network, MapPin, Compass } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  "/services/software-engineering": <Code2 className="w-5 h-5 text-[#1877F2]" />,
  "/services/ai-data-intelligence": <Cpu className="w-5 h-5 text-[#0BCB91]" />,
  "/services/cloud-devops": <Sparkles className="w-5 h-5 text-[#1877F2]" />,
  "/services/cybersecurity": <Shield className="w-5 h-5 text-[#0BCB91]" />,
  "/services/enterprise-systems": <Network className="w-5 h-5 text-[#1877F2]" />,
  "/services/gis-location-intelligence": <MapPin className="w-5 h-5 text-[#0BCB91]" />,
  "/services/product-strategy": <Compass className="w-5 h-5 text-[#1877F2]" />,
  "/services/database-engineering": <Database className="w-5 h-5 text-[#0BCB91]" />,
};

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-0 right-0 w-full bg-white dark:bg-[#070F2B] border-b border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {navigationData.servicesMegaMenu.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                {group.group}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800/80 group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                      {iconMap[item.href] || <Code2 className="w-5 h-5 text-[#1877F2]" />}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors flex items-center gap-1">
                        {item.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#1877F2] dark:text-[#0BCB91]" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Featured Highlights Callout */}
          <div className="bg-gradient-to-br from-[#000B49] to-[#0A1D56] rounded-xl p-5 text-white flex flex-col justify-between border border-blue-900/50 shadow-inner">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#1877F2]/20 text-[#0BCB91] border border-[#0BCB91]/30 mb-3">
                <Sparkles className="w-3 h-3" /> Featured Case Study
              </span>
              <h4 className="font-bold text-base text-white mb-1.5">LYFE Attend</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Location-validated workforce attendance platform with anti-spoofing GPS and real-time enterprise management portal.
              </p>
            </div>
            <div className="space-y-3 pt-3 border-t border-white/10">
              <Link
                href="/projects/lyfe-attend"
                onClick={onClose}
                className="text-xs font-semibold text-[#0BCB91] hover:text-white flex items-center justify-between group"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center text-xs font-semibold py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                View All Capabilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
