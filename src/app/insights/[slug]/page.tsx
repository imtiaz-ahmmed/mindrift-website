import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, User, ArrowRight, CheckCircle2, Share2 } from "lucide-react";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) return {};

  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    ogType: "article",
  });
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = insightsData
    .filter((a) => article.relatedSlugs.includes(a.slug) || (a.slug !== article.slug && a.category === article.category))
    .slice(0, 2);

  return (
    <article className="py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Insights", href: "/insights" },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="blue">{article.category}</Badge>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishedAt}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between py-4 border-y border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                MR
              </div>
              <div>
                <div className="font-bold text-slate-800 dark:text-white">{article.author.name}</div>
                <div className="text-slate-500 dark:text-slate-400">{article.author.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="rounded-3xl bg-blue-50/70 dark:bg-[#070F2B] p-6 sm:p-8 border border-blue-200/60 dark:border-blue-900/40 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#000B49] dark:text-white">
              Executive & Technical Takeaways:
            </h3>
          </div>
          <div className="space-y-2.5">
            {article.keyTakeaways.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#0BCB91] flex-shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {article.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000B49] dark:text-white tracking-tight pt-2">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}

              {sec.codeSnippet && (
                <div className="rounded-2xl bg-slate-950 p-5 border border-slate-800 text-slate-200 text-xs sm:text-sm font-mono overflow-x-auto my-6 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                    <span>Source: {sec.codeSnippet.language}</span>
                    <span className="text-[#0BCB91]">Verified Pattern</span>
                  </div>
                  <pre>
                    <code>{sec.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              Related Engineering Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <Badge variant="blue" size="sm">
                      {rel.category}
                    </Badge>
                    <h4 className="font-bold text-base text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-[#1877F2] dark:text-[#0BCB91]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Callout */}
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900/80 p-8 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              Have questions about this architecture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Speak directly with the Mindrift engineering team about implementing these patterns in your codebase.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-colors shadow-sm flex-shrink-0 group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
