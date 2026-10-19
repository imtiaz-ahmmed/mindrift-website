import React from "react";
import { Search, Compass, Palette, Code2, CheckCircle2, Rocket } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      phase: "01",
      title: "Discover",
      subtitle: "Requirements & Feasibility",
      description:
        "We interview key stakeholders to understand business objectives, technical constraints, security compliance needs, and existing system boundaries.",
      icon: <Search className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      phase: "02",
      title: "Define",
      subtitle: "Architecture & Milestones",
      description:
        "We create C4 architecture diagrams, evaluate technology choices, design entity schemas, and map out sprint deliverables with explicit milestones.",
      icon: <Compass className="w-5 h-5 text-[#0BCB91]" />,
    },
    {
      phase: "03",
      title: "Design",
      subtitle: "Workflows & Technical Specs",
      description:
        "We design intuitive user flows, enterprise design systems, API contracts (OpenAPI), and database normalization schemas before code implementation.",
      icon: <Palette className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      phase: "04",
      title: "Build",
      subtitle: "Iterative Sprint Execution",
      description:
        "We engineer clean, strictly-typed codebases in bi-weekly agile sprints with continuous peer reviews, unit tests, and demoable vertical slices.",
      icon: <Code2 className="w-5 h-5 text-[#0BCB91]" />,
    },
    {
      phase: "05",
      title: "Validate",
      subtitle: "Rigorous Testing & Hardening",
      description:
        "We execute automated integration tests, load tests, cross-browser audits, accessibility evaluations (WCAG 2.2 AA), and security scans.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#1877F2]" />,
    },
    {
      phase: "06",
      title: "Deliver & Evolve",
      subtitle: "Zero-Downtime Launch & Telemetry",
      description:
        "We perform phased blue/green production deployment, configure real-time telemetry (Prometheus/Grafana), and provide technical handover documentation.",
      icon: <Rocket className="w-5 h-5 text-[#0BCB91]" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#03081E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
            Delivery Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight">
            From Idea to Reliable Implementation.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Our disciplined engineering lifecycle eliminates guesswork. Every stage produces verifiable artifacts, keeping technical risk minimal and velocity high.
          </p>
        </div>

        {/* 6-Step Connected Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.phase}
              className="rounded-3xl bg-slate-50/80 dark:bg-[#070F2B] p-8 border border-slate-200/80 dark:border-slate-800 hover:border-[#1877F2]/40 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800/90 shadow-xs flex items-center justify-center border border-slate-200/60 dark:border-slate-700">
                    {step.icon}
                  </div>
                  <span className="text-xl font-black text-slate-300 dark:text-slate-700">
                    {step.phase}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#1877F2] dark:text-[#0BCB91] mt-0.5">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0BCB91]" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
