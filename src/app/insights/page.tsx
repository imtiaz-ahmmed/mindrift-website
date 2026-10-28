import { Metadata } from "next";
import { insightsData } from "@/data/insights";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { InsightsDirectory } from "@/components/insights/insights-directory";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Insights & Strategy",
  description:
    "Technical perspectives, architecture breakdowns, and system design patterns from Mindrift Agency's senior software and cloud engineers.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Insights" }]} />

        {/* Hero */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          suppressHydrationWarning
          className="max-w-3xl space-y-4"
        >
          <Badge variant="blue">Technical Thought Leadership</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
            Engineering Insights & System Design.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            In-depth technical guides, architecture trade-offs, and lessons learned from deploying mission-critical software, spatial databases, and enterprise AI workflows.
          </p>
        </div>

        {/* Directory */}
        <div data-aos="fade-up" data-aos-duration="750" data-aos-delay="100" suppressHydrationWarning>
          <InsightsDirectory articles={insightsData} />
        </div>
      </div>
    </div>
  );
}
