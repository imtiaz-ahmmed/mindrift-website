import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/site-config";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ProjectsDirectory } from "@/components/projects/projects-directory";
import { FileText, ExternalLink, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Portfolio & Client Systems",
  description:
    "Explore production-grade platforms engineered by Mindrift Agency: Odyssey.stream (real-time 3D streaming), FirstChoice ePOS (hospitality tills & KDS), AB3 Medical (athlete EMR), YumaPOS mobile suite, and FreeOnlineOrdering marketplace.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Projects" }]} />

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#1877F2] dark:text-[#0BCB91] border border-blue-200/60 dark:border-blue-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91]" />
                Client Case Studies & Live Deployments
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-[#000B49] dark:text-white tracking-tight leading-tight">
              Mission-Critical Software. <br />
              <span className="brand-gradient-text">Engineered For Real-World Scale.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
              Inspect our production architectures, real-time pixel streaming pipelines, hospital-grade athlete EMR records, and multi-tenant point-of-sale networks across Ireland, the UK, and global cloud nodes.
            </p>
          </div>

          {/* Direct Actions: Company Profile Drive Link */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
            <a
              href={siteConfig.companyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 shadow-sm transition-colors group"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Company Profile (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 px-1 font-sans">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0BCB91]" />
                100% Live Deployments
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <Zap className="w-3.5 h-3.5 text-[#1877F2]" />
                Verified Production
              </span>
            </div>
          </div>
        </div>

        {/* Directory with search and filters */}
        <ProjectsDirectory projects={projectsData} />
      </div>
    </div>
  );
}
