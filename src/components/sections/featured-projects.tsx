import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { MockupVisual } from "@/components/ui/mockup-visual";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ExternalLink, Smartphone } from "lucide-react";

export function FeaturedProjects() {
  const featured = projectsData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#040A24]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-[#1877F2] dark:text-[#00D8F6]">
              // VERIFIED CLIENT DELIVERABLES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
              Built to Solve Real-World Challenges.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Explore our real-world software architectures, 3D cloud streaming infrastructure, hospital EMR systems, and enterprise point-of-sale platforms currently powering international businesses.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91] hover:underline self-start md:self-end group"
          >
            <span>View All Client Systems ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Case Studies Stack */}
        <div className="space-y-12">
          {featured.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.slug}
                className="rounded-3xl bg-white dark:bg-[#070F28] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left (or Right): Project Content */}
                  <div
                    className={`space-y-5 ${
                      isReversed ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Badge variant="blue">{project.category}</Badge>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        STATUS: {project.status.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {project.summary}
                    </p>

                    {/* Key Architecture / Problem Highlights */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        // Core Implementation:
                      </div>
                      <div className="space-y-2">
                        {project.keyFeatures.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-[#0BCB91] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Link & Detail Link CTAs */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-colors shadow-sm group"
                      >
                        <span>Architecture Review</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors"
                        >
                          <span>Live System</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      )}
                    </div>

                    {/* App Store Chips (for YumaPOS) */}
                    {project.appStoreLinks && project.appStoreLinks.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase">
                          Featured Store Apps:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.appStoreLinks.slice(0, 4).map((app) => (
                            <a
                              key={app.name}
                              href={app.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-[#0BCB91] hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                            >
                              <Smartphone className="w-3 h-3" />
                              <span>{app.name}</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right (or Left): Interactive Product Mockup Visual */}
                  <div
                    className={`${
                      isReversed ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
                    }`}
                  >
                    <div className="p-2 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-100 dark:border-slate-800/80">
                      <MockupVisual
                        type={project.mockupType}
                        title={project.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
