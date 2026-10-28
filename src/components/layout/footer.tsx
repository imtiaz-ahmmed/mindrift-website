"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const mainNavLinks = [
    { title: "Home", href: "/" },
    { title: "About Mindrift", href: "/about" },
    { title: "Client Projects", href: "/projects" },
    { title: "Engineering Services", href: "/services" },
    { title: "Industries We Serve", href: "/industries" },
    { title: "Technical Insights", href: "/insights" },
    { title: "Contact Us", href: "/contact" },
  ];

  const coreDisciplines = [
    { title: "Software & Web Engineering", href: "/services/software-engineering" },
    { title: "AI & Data Intelligence", href: "/services/ai-data-intelligence" },
    { title: "Cloud Architecture & DevOps", href: "/services/cloud-devops" },
    { title: "Cybersecurity Engineering", href: "/services/cybersecurity" },
    { title: "GIS & Location Platforms", href: "/services/gis-location-intelligence" },
  ];

  const featuredProjects = [
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
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#000B49] bg-[#0BCB91] hover:bg-[#09B882] transition-colors shadow-sm group flex-shrink-0 cursor-pointer"
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
                <span>Enterprise Security &amp; NDA Protected Engagements</span>
              </div>
            </div>

            {/* Social Links: LinkedIn & Facebook */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.linkedin.com/company/mindrift-tqtech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mindrift on LinkedIn"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#0077B5] text-slate-200 hover:text-white border border-slate-800 hover:border-[#0077B5] text-xs font-semibold transition-all duration-200 hover:scale-105 shadow-sm group"
              >
                <svg className="w-4 h-4 fill-current text-[#0077B5] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.facebook.com/share/1CQG83vYEy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mindrift on Facebook"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#1877F2] text-slate-200 hover:text-white border border-slate-800 hover:border-[#1877F2] text-xs font-semibold transition-all duration-200 hover:scale-105 shadow-sm group"
              >
                <svg className="w-4 h-4 fill-current text-[#1877F2] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {mainNavLinks.map((item) => (
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

          {/* Core Disciplines Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {coreDisciplines.map((item) => (
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

          {/* Featured Systems Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Projects</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {featuredProjects.map((item) => (
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
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Brand Horizon Showcase (Mindrift Brand Colors & Bottom Grounded) */}
      <div className="relative w-full overflow-hidden border-t border-slate-900/80 bg-[#020617]">
        <div
          className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[340px] bg-cover bg-bottom bg-no-repeat flex items-end justify-center relative select-none"
          style={{ backgroundImage: "url('/assets/footer/footer-horizon-bg.png')" }}
        >
          <Link
            href="/"
            aria-label="Mindrift — Home"
            className="relative z-10 flex flex-col items-center justify-end w-full group cursor-pointer overflow-hidden"
          >
            {/* Mindrift Grounded At The Very Bottom Edge With Subtle 50% Logo Gradient */}
            <h2
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #FFFFFF 0%, #A8D1FD 25%, #88E7F9 60%, #8DE8CB 100%)",
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text select-none leading-[0.82] translate-y-[6px] sm:translate-y-[12px] md:translate-y-[18px] lg:translate-y-[24px] drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)] hover:brightness-110 transition-all duration-300"
            >
              mindrift
            </h2>
          </Link>
        </div>
      </div>
    </footer>
  );
}
