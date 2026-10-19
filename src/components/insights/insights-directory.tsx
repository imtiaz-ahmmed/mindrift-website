"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { InsightArticle } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Calendar, ArrowRight, User } from "lucide-react";

interface InsightsDirectoryProps {
  articles: InsightArticle[];
}

export function InsightsDirectory({ articles }: InsightsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "AI & Machine Learning", "Cloud & Cybersecurity", "GIS & Database Engineering", "Software Engineering & Strategy"];

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory =
        selectedCategory === "All" ||
        a.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesSearch =
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featured = articles[0];

  return (
    <div className="space-y-12">
      {/* Featured Article Hero Card */}
      {featured && selectedCategory === "All" && !searchQuery && (
        <div className="rounded-3xl bg-gradient-to-br from-[#000B49] via-[#0A1647] to-[#000B49] p-8 sm:p-12 text-white border border-blue-900/50 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="emerald">Featured Insight</Badge>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#0BCB91]" />
                <span>{featured.readTime}</span>
              </div>
            </div>

            <Link href={`/insights/${featured.slug}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white hover:text-[#0BCB91] transition-colors leading-tight">
                {featured.title}
              </h2>
            </Link>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {featured.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0BCB91]" />
                <span>{featured.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>{featured.publishedAt}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/insights/${featured.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0BCB91] hover:text-white transition-colors group"
              >
                <span>Read Full Technical Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === cat
                  ? "bg-[#1877F2] text-white shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, keywords, tags..."
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="py-20 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
          <p className="text-base text-slate-500 dark:text-slate-400">
            No articles found matching your criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="rounded-3xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="blue" size="sm">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <Link href={`/insights/${article.slug}`}>
                  <h3 className="font-bold text-xl text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{article.publishedAt}</span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-bold text-[#1877F2] dark:text-[#0BCB91] flex items-center gap-1 group-hover:underline"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
