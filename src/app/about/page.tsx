import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site-config";
import {
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  HeartHandshake,
  Target,
  FileText,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Mindrift Agency",
  description:
    "Engineering with Purpose. Innovating with Intelligence. Discover how Mindrift Agency partners with organizations to build modern software, cloud systems, and AI platforms.",
  path: "/about",
});

export default function AboutPage() {
  const principles = [
    {
      title: "Architecture Before Code",
      description:
        "Writing code without rigorous system design leads to compounding technical debt. We invest early in schema design, API contracts, and security boundaries.",
      icon: <Layers className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      title: "Zero Vendor Lock-In",
      description:
        "We build exclusively using open, standard protocols, Docker containers, and clean TypeScript/SQL code. Our clients own 100% of the code, IP, and configurations.",
      icon: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
    },
    {
      title: "Deterministic Intelligence",
      description:
        "AI is an operational tool, not a marketing gimmick. We engineer AI and machine learning systems with strict evaluation benchmarks and zero hallucination tolerances.",
      icon: <Cpu className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      title: "Radical Transparency",
      description:
        "No inflated progress reports or hidden roadblocks. We work in transparent agile sprints with direct code repository access, continuous demos, and measurable deliverables.",
      icon: <HeartHandshake className="w-5 h-5 text-[#0BCB91]" />,
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          suppressHydrationWarning
          className="max-w-3xl space-y-4"
        >
          <Badge variant="blue">Our Identity & Mission</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
            Engineering with Purpose. Innovating with Intelligence.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Mindrift Agency is a specialized technology agency built by senior software engineers, cloud architects, and data strategists. We build production systems that bridge complex business logic with modern digital infrastructure.
          </p>
        </div>

        {/* Mission & Vision 2-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            suppressHydrationWarning
            className="rounded-3xl bg-white dark:bg-[#070F2B] p-8 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-[#1877F2] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#000B49] dark:text-white">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower modern enterprises and visionary founders with robust, scalable, and secure digital software. We eliminate the frustration of brittle legacy systems by delivering maintainable, well-architected platforms that drive measurable commercial growth.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="750"
            suppressHydrationWarning
            className="rounded-3xl bg-white dark:bg-[#070F2B] p-8 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#000B49] dark:text-white">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              A future where software systems are built with enduring craftsmanship. Where AI automates tedious workflows reliably, where cloud infrastructure is resilient and cost-optimized, and where enterprise software is as intuitive and delightful as the best consumer products.
            </p>
          </div>
        </div>

        {/* Dedicated Company Profile & Capability Deck Section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          suppressHydrationWarning
          className="rounded-3xl bg-gradient-to-br from-[#000B49] via-[#05113A] to-[#0A1D6B] p-8 sm:p-12 text-white border border-blue-900/50 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0BCB91]/20 text-[#0BCB91] border border-[#0BCB91]/30">
              <FileText className="w-3.5 h-3.5" />
              Official Credentials & Presentation Deck
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Mindrift Agency Capability Profile
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Download our comprehensive agency capability document detailing our verified enterprise architectures, client case studies, technical governance frameworks, and international engagement terms.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-sans pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91]" />
                Architecture Specifications
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91]" />
                Client Case Studies
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91]" />
                Verified Cloud SLA Standards
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 relative z-10 w-full lg:w-auto">
            <a
              href={siteConfig.companyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#00D8F6] btn-3d-elevated btn-animate-shimmer shadow-lg group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#000B49]" />
              <span>View Company Profile (PDF)</span>
              <ExternalLink className="w-4 h-4 text-[#000B49] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            <span className="text-center text-xs text-slate-400 font-sans">
              Opens in separate tab
            </span>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              The Standard
            </span>
            <h2 className="text-3xl font-extrabold text-[#000B49] dark:text-white">
              Our Engineering Principles
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The operational tenets that govern how we design, write, test, and maintain code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr, idx) => (
              <div
                key={pr.title}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={idx * 100}
                suppressHydrationWarning
                className="rounded-2xl bg-slate-50 dark:bg-[#070F2B] p-6 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-xs flex items-center justify-center">
                  {pr.icon}
                </div>
                <h3 className="font-bold text-base text-[#000B49] dark:text-white">
                  {pr.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery & Collaboration Model */}
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          suppressHydrationWarning
          className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-8"
        >
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              Engagement Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000B49] dark:text-white">
              How We Collaborate
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              We offer flexible engagement structures suited to your organizational maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="600"
              data-aos-delay="100"
              suppressHydrationWarning
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
            >
              <span className="text-xs font-mono text-[#1877F2]">MODEL 01</span>
              <h3 className="font-bold text-lg text-[#000B49] dark:text-white">
                Turnkey Product Delivery
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We take end-to-end responsibility from discovery to production launch. Best for new software builds, mobile apps, and dedicated internal tools.
              </p>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-duration="600"
              data-aos-delay="200"
              suppressHydrationWarning
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
            >
              <span className="text-xs font-mono text-[#0BCB91]">MODEL 02</span>
              <h3 className="font-bold text-lg text-[#000B49] dark:text-white">
                Embedded Team Augmentation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Senior Mindrift engineers embed directly into your existing engineering sprints to inject specialized expertise in AI, PostGIS, or Kubernetes.
              </p>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-duration="600"
              data-aos-delay="300"
              suppressHydrationWarning
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3"
            >
              <span className="text-xs font-mono text-[#1877F2]">MODEL 03</span>
              <h3 className="font-bold text-lg text-[#000B49] dark:text-white">
                Strategic Technical Advisory
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Fractional CTO guidance, architectural peer reviews, cloud security audits, and investor due diligence preparation for executive leadership.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="750"
          suppressHydrationWarning
          className="rounded-3xl bg-gradient-to-r from-[#000B49] via-[#05113A] to-[#000B49] p-8 md:p-12 text-white border border-blue-900/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Partner with an Engineering-First Agency
            </h3>
            <p className="text-sm text-slate-300">
              Let’s discuss your technical roadmap, upcoming milestones, and delivery schedule.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#09B882] transition-colors shadow-lg flex-shrink-0 group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
