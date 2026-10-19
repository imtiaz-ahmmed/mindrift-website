import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { MockupVisual } from "@/components/ui/mockup-visual";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Server,
  ExternalLink,
  Smartphone,
  FileText,
  Activity,
  Layers,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} | Engineering Case Study`,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find related services
  const relatedServices = servicesData.filter((s) =>
    project.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />

        {/* Hero Section: Clean & Formal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#1877F2] dark:text-[#00D8F6] border border-blue-200/50 dark:border-blue-900/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91]" />
                {project.category}
              </span>

              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Status: {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-sans">
              {project.summary}
            </p>

            {/* External Actions: Live Platform & Company Profile */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 shadow-sm transition-all group"
                >
                  <Activity className="w-4 h-4 text-[#0BCB91]" />
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              <a
                href={siteConfig.companyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors group"
              >
                <FileText className="w-4 h-4 text-[#1877F2]" />
                <span>Company Profile (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1877F2]" />
              </a>
            </div>
          </div>

          {/* Quick System Architecture Metadata Card */}
          <div className="lg:col-span-4 rounded-3xl bg-white dark:bg-[#070F2B] p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technical Specifications
              </span>
              <span className="text-xs font-semibold text-[#0BCB91]">{project.status}</span>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-400">Industry Domain</span>
                <span className="font-semibold text-slate-800 dark:text-white">{project.category}</span>
              </div>
              {project.clientName && (
                <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-400">Client Partner</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{project.clientName}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-400">Delivery Status</span>
                <span className="font-semibold text-[#0BCB91]">{project.status}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Core Technology Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Mockup Showcase */}
        <div className="rounded-3xl bg-slate-950 p-4 sm:p-8 md:p-10 border border-slate-800 shadow-2xl flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <MockupVisual type={project.mockupType} title={project.title} />
          </div>
          <div className="mt-4 text-xs text-slate-400 text-center font-sans">
            Architectural and interactive visual interface preview for {project.title}
          </div>
        </div>

        {/* Multi-App Google Play Store Grid (if available, e.g. for YumaPOS) */}
        {project.appStoreLinks && project.appStoreLinks.length > 0 && (
          <div className="rounded-3xl bg-white dark:bg-[#070F2B] p-8 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1877F2] dark:text-[#00D8F6] flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  Live Mobile Applications ({project.appStoreLinks.length} Published Apps)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#000B49] dark:text-white">
                  Branded Customer Ordering Apps in Production
                </h3>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                UK & Ireland Hospitality Network
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.appStoreLinks.map((app, idx) => (
                <a
                  key={idx}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0BCB91] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-[#0BCB91] border border-emerald-200/50 dark:border-emerald-900/40">
                        Google Play
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0BCB91] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                      {app.name}
                    </h4>
                  </div>
                  <div className="pt-3 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-sans">
                    <span>Direct Store Link</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Problem vs Solution 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="rounded-3xl bg-white dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-3xl bg-white dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#0BCB91] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              The Architecture & Solution
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {project.solutionOverview}
            </p>
          </div>
        </div>

        {/* Key Features & System Capabilities */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              System Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#000B49] dark:text-white">
              Key Features & Architectural Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-xs hover:border-[#1877F2]/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0BCB91]" />
                  <span className="text-xs font-semibold text-slate-400">Feature 0{i + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0BCB91]">
              Infrastructure & Protocols
            </span>
            <h3 className="text-2xl font-black text-[#000B49] dark:text-white">
              Architecture & Data Flow Decisions
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
              Underlying technical decisions engineered for high throughput, sub-second latency, and fault tolerance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architectureHighlights.map((arch, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 shadow-xs"
              >
                <Server className="w-4 h-4 text-[#1877F2] dark:text-[#00D8F6] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {arch}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Challenges & Mitigations Table */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              Technical Journal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#000B49] dark:text-white">
              Challenges & Engineering Mitigations
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
              High-concurrency obstacles resolved through disciplined engineering.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-xs">
                <tr>
                  <th className="py-4 px-6">Identified Challenge</th>
                  <th className="py-4 px-6">Engineering Mitigation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#070F2B]">
                {project.challengesAndMitigations.map((item, i) => (
                  <tr key={i}>
                    <td className="py-4 px-6 font-semibold text-slate-800 dark:text-slate-200 align-top max-w-sm">
                      {item.challenge}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300 leading-relaxed align-top font-sans">
                      {item.mitigation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verified Results & Operational Impact */}
        <div className="rounded-3xl bg-gradient-to-br from-[#000B49] via-[#051347] to-[#0A1D6B] p-8 sm:p-12 text-white border border-blue-900/50 shadow-xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0BCB91]">
              Measurable Outcomes
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Verified Operational Results
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.resultsOrImpact.map((res, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 backdrop-blur-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0BCB91] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              Underlying Mindrift Engineering Disciplines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="p-5 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/50 shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-bold text-sm text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 font-sans">
                      {svc.tagline}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Technical Discovery CTA */}
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900/90 p-8 sm:p-12 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-[#000B49] dark:text-white">
              Architecting a Similar Enterprise System?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl font-sans">
              Consult with our principal engineers on real-time 3D streaming, cloud ePOS networks, or healthcare compliance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-colors shadow-sm group"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
