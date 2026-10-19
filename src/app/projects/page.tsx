import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ProjectsDirectory } from "@/components/projects/projects-directory";

export const metadata: Metadata = constructMetadata({
  title: "Projects & Technical Case Studies",
  description:
    "Review technical case studies and software solutions engineered by Mindrift Agency, including LYFE Attend, GeoConnect, and enterprise workflow platforms.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Projects" }]} />

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="blue">Portfolio & Engineering Systems</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight leading-tight">
            Built to Solve Real-World Challenges.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Examine our architectures, code patterns, and deployment solutions. We clearly differentiate between enterprise production deployments and research concepts.
          </p>
        </div>

        {/* Directory with search and filters */}
        <ProjectsDirectory projects={projectsData} />
      </div>
    </div>
  );
}
