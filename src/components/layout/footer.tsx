"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/data/site-config";
import { navigationData } from "@/data/navigation";
import { ArrowRight, Mail, MapPin, ShieldCheck, ArrowUpRight, FileText } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const realProjectLinks = [
    { title: "Odyssey.stream (3D Cloud Streaming)", href: "/projects/odyssey-stream" },
    { title: "FirstChoice ePOS (Hospitality Platform)", href: "/projects/firstchoice-epos" },
    { title: "AB3 Medical (Athlete EMR System)", href: "/projects/ab3-medical-emr" },
    { title: "YumaPOS Hospitality Suite (Mobile)", href: "/projects/yumapos-mobile-suite" },
    { title: "FreeOnlineOrdering (UK Marketplace)", href: "/projects/free-online-ordering" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 dark:bg-[#010410] border-t border-slate-800 transition-colors">
      {/* Pre-footer Consultation CTA Bar */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-[#000B49] via-[#05113A] to-[#000B49]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0BCB91]">
                Enterprise Technology Advisory
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Ready to engineer your next digital solution?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl font-sans">
                Speak directly with senior engineers and architects about your software, AI, 3D streaming, or cloud roadmap.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.companyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#0BCB91]" />
                <span>Company Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#000B49] bg-[#0BCB91] hover:bg-[#09B882] transition-colors shadow-sm group flex-shrink-0"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Mindrift Agency delivers enterprise software engineering, real-time 3D streaming, ePOS architectures, healthcare platforms, and cloud solutions for modern organizations.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-400 font-sans">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1877F2]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#0BCB91]" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1877F2]" />
                <span>Enterprise Security & NDA Protected Engagements</span>
              </div>
            </div>

            {/* Social Links & Company Profile PDF */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.companyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-xs font-semibold text-[#00D8F6] border border-[#1877F2]/40 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#0BCB91]" />
                <span>Company Profile (PDF)</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              {siteConfig.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>{s.platform}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Capabilities Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Capabilities</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {navigationData.footerLinks.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0BCB91] transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Projects Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Featured Work</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {realProjectLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0BCB91] transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {navigationData.footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0BCB91] transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Legal
                </span>
                <div className="space-y-1.5">
                  {navigationData.footerLinks.legal.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="hover:text-[#0BCB91] transition-colors block text-xs py-0.5 text-slate-400"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} Mindrift Agency. Engineered for performance.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
