import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
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
  Layers,
  ArrowUpRight,
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
    title: `${project.title} | Case Study`,
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

  // Other projects for recommendation
  const otherProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="blue">{project.category}</Badge>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Deployment Status: {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              {project.summary}
            </p>
          </div>

          {/* Quick Meta Card */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-50 dark:bg-[#070F2B] p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technical Overview
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="text-slate-400">Category</span>
                <span className="font-semibold text-slate-800 dark:text-white">{project.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="text-slate-400">Verification</span>
                <span className="font-semibold text-[#0BCB91]">{project.status}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Mockup Showcase */}
        <div className="rounded-3xl bg-slate-900 p-6 sm:p-10 border border-slate-800 shadow-2xl flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <MockupVisual type={project.mockupType} title={project.title} />
          </div>
          <div className="mt-4 text-xs font-mono text-slate-400 text-center">
            Figure: Architectural and interface design layout for {project.title}
          </div>
        </div>

        {/* Problem vs Solution 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#0BCB91] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              The Architecture & Solution
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.solutionOverview}
            </p>
          </div>
        </div>

        {/* Key Features & System Capabilities */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-[#000B49] dark:text-white">
            System Capabilities & Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0BCB91]" />
                  <span className="font-mono text-xs text-slate-400">FEATURE 0{i + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              Architecture & Data Flow Highlights
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Under-the-hood technical choices engineered for high throughput and security.
            </p>
          </div>

          <div className="space-y-3">
            {project.architectureHighlights.map((arch, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3"
              >
                <Server className="w-4 h-4 text-[#1877F2] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {arch}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Challenges & Mitigations Table */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-[#000B49] dark:text-white">
              Challenges & Engineering Mitigations
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Unplanned technical hurdles encountered during design and how they were systematically resolved.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-6">Identified Challenge</th>
                  <th className="py-3.5 px-6">Engineering Mitigation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#070F2B]">
                {project.challengesAndMitigations.map((item, i) => (
                  <tr key={i}>
                    <td className="py-4 px-6 font-medium text-slate-800 dark:text-slate-200 align-top max-w-xs">
                      {item.challenge}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                      {item.mitigation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verified Results */}
        <div className="rounded-3xl bg-gradient-to-br from-[#000B49] to-[#0A1647] p-8 sm:p-10 text-white border border-blue-900/50 shadow-xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#0BCB91] uppercase tracking-wider">
              Measurable Outcomes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Verified Results & Operational Impact
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.resultsOrImpact.map((res, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0BCB91] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 leading-relaxed">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              Underlying Practice Disciplines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="p-5 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-bold text-sm text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {svc.tagline}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Callout */}
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900/80 p-8 sm:p-10 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              Building a Similar System?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              We can help you architect, scope, and engineer an enterprise solution tailored to your operational specifications.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-colors shadow-sm flex-shrink-0 group"
          >
            <span>Request Technical Discovery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
