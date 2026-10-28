import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-[#000B49] via-[#051138] to-[#000B49] text-white">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1877F2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0BCB91]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          suppressHydrationWarning
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#0BCB91] border border-white/10 text-xs font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Engineering Partnership</span>
        </div>

        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          suppressHydrationWarning
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
        >
          Have a Complex Technology Challenge?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          suppressHydrationWarning
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Let’s turn your business requirements into a practical, well-engineered digital solution. Speak with senior engineers directly.
        </p>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="700"
          data-aos-delay="300"
          suppressHydrationWarning
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] btn-3d-elevated btn-animate-shimmer shadow-lg group cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white bg-white/10 hover:bg-white/15 border border-white/20 btn-secondary-elevated cursor-pointer"
          >
            <span>Explore Our Services</span>
          </Link>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          suppressHydrationWarning
          className="pt-6 text-xs text-slate-300 font-sans"
        >
          Non-Disclosure Agreements Available · Confidential Technical Consultation
        </div>
      </div>
    </section>
  );
}
