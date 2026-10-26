import React from "react";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";

export function InsightsPreview() {
  const articles = insightsData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#040A24]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              Engineering Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
              Insights & Technical Architecture.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Read in-depth technical analysis, system design patterns, and strategic guides written by senior software engineers and cloud architects.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1877F2] dark:text-[#0BCB91] hover:underline self-start md:self-end group"
          >
            <span>View All Engineering Insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl bg-white dark:bg-[#070F2B] p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
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
                  <h3 className="font-bold text-lg text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{article.author.name}</span>
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
      </div>
    </section>
  );
}
