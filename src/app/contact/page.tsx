import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/contact-form";
import {
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  Lock,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Project Consultation",
  description:
    "Schedule a confidential technical consultation with Mindrift Agency. Discuss custom software development, enterprise AI, cloud architecture, or cybersecurity.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Contact" }]} />

        {/* Hero */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          suppressHydrationWarning
          className="max-w-3xl space-y-4"
        >
          <Badge variant="blue">Confidential Consultation</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
            Start a Technical Conversation.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you are planning a greenfield software platform, scaling an enterprise AI pipeline, or hardening cloud infrastructure, our engineering partners are ready to review your requirements.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left, Contact Meta on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form Column */}
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            suppressHydrationWarning
            className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#070F2B] p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white mb-6">
              Project Inquiry & Scope Details
            </h2>
            <ContactForm />
          </div>

          {/* Right Info Column */}
          <div
            data-aos="fade-left"
            data-aos-duration="750"
            suppressHydrationWarning
            className="lg:col-span-5 space-y-8"
          >
            {/* Direct Contact Card */}
            <div className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-[#000B49] dark:text-white">
                Direct Communication
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-[#1877F2] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Inquiries</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold text-slate-800 dark:text-white hover:text-[#1877F2] dark:hover:text-[#0BCB91] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-[#0BCB91] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Global Availability</div>
                    <div className="font-semibold text-slate-800 dark:text-white">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-[#1877F2] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Response SLA</div>
                    <div className="font-semibold text-slate-800 dark:text-white">
                      Within 1 Business Day
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA & Security Guarantee Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#000B49] to-[#0A1647] p-8 text-white border border-blue-900/50 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0BCB91]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Mutual Confidentiality & NDA
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We handle every technical submission with strict confidentiality. If you have an active organizational NDA requirement before sharing architecture details, we are pleased to execute our standard agreement or review yours.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#0BCB91] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise Data Privacy Standard</span>
              </div>
            </div>

            {/* What to Expect Next */}
            <div className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                What Happens Next
              </h3>
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#1877F2]">1.</span>
                  <span>Senior engineering partners review your requirements and system constraints.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#1877F2]">2.</span>
                  <span>We schedule an initial 30-minute discovery video call to clarify scope.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-[#1877F2]">3.</span>
                  <span>You receive an actionable architectural summary and delivery estimate.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
