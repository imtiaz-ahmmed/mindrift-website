"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectCaseStudy } from "@/types";
import { MockupVisual } from "@/components/ui/mockup-visual";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, ExternalLink, Play, Smartphone, Terminal, Radio } from "lucide-react";

interface ProjectsDirectoryProps {
  projects: ProjectCaseStudy[];
}

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "3D Cloud Streaming",
    "Enterprise POS",
    "Digital Healthcare",
    "Mobile Apps",
    "Marketplace",
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" ||
        p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        p.categorySlug.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.clientName && p.clientName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Filter and Search Bar with Tech Agency Styling */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-white/80 dark:bg-[#070F2B]/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono tracking-wider uppercase px-3.5 py-1.5 rounded-lg transition-all ${
                selectedCategory === cat
                  ? "bg-[#1877F2] text-white shadow-md shadow-[#1877F2]/20 font-bold"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input with Monospace Hint */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, client, or keyword..."
            className="w-full pl-10 pr-4 py-2 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-4">
          <Terminal className="w-10 h-10 text-slate-400 mx-auto" />
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
            [SYS::QUERY_EMPTY] No project records found matching current filter parameters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-mono font-bold uppercase text-[#1877F2] dark:text-[#0BCB91] hover:underline"
          >
            Reset Filters // Reload All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800/90 p-6 sm:p-8 shadow-xs hover:shadow-2xl hover:border-[#1877F2]/50 dark:hover:border-[#00D8F6]/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Tech Brackets */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-300 dark:text-slate-700 select-none">
                +--
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 dark:text-slate-700 select-none">
                --+
              </div>

              <div className="space-y-6">
                {/* Visual Preview */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#03081E] border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-inner">
                  <MockupVisual type={project.mockupType} title={project.title} />
                </div>

                <div className="space-y-3">
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-md bg-[#1877F2]/10 text-[#1877F2] dark:text-[#00D8F6] border border-[#1877F2]/20">
                      {project.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-[#0BCB91] border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91] animate-pulse" />
                      {project.status}
                    </span>

                    {project.appStoreLinks && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-[#1877F2] dark:text-blue-400 border border-blue-500/20">
                        <Smartphone className="w-3 h-3" />
                        {project.appStoreLinks.length} Play Store Apps
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-black text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#1877F2] dark:text-[#0BCB91] hover:underline"
                >
                  <span>Architecture & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#1877F2] hover:text-white dark:hover:bg-[#1877F2] transition-colors"
                  >
                    <span>Launch Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
