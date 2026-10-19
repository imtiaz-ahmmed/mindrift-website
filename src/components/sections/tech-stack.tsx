import React from "react";
import { Code2, Server, Database, Cpu, Cloud, ShieldCheck, MapPin } from "lucide-react";

export function TechStack() {
  const domains = [
    {
      title: "Frontend Engineering",
      icon: <Code2 className="w-5 h-5 text-[#1877F2]" />,
      techs: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
      value: "Sub-second initial page loads, optimal Core Web Vitals, and responsive enterprise interfaces.",
    },
    {
      title: "Backend & Microservices",
      icon: <Server className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["Node.js", "NestJS", "Express", "REST & GraphQL", "gRPC"],
      value: "Type-safe distributed services, contract-first APIs, and resilient queue-driven processing.",
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-[#1877F2]" />,
      techs: ["PostgreSQL", "Prisma ORM", "Redis", "MongoDB", "pgvector"],
      value: "ACID transactional reliability, GiST spatial indexing, and sub-10ms query performance.",
    },
    {
      title: "AI, ML & Data Pipelines",
      icon: <Cpu className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["Python", "FastAPI", "LangChain", "LLM APIs", "Pandas"],
      value: "Deterministic RAG pipelines, semantic vector search, and automated data extraction.",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-[#1877F2]" />,
      techs: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      value: "Declarative Infrastructure as Code, immutable container builds, and zero-downtime releases.",
    },
    {
      title: "Defensive Security",
      icon: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["OAuth 2.0 / OIDC", "Trivy", "Semgrep", "HashiCorp Vault", "WAF"],
      value: "Automated vulnerability scanning in CI/CD, least-privilege IAM, and zero-trust policies.",
    },
    {
      title: "GIS & Spatial Intelligence",
      icon: <MapPin className="w-5 h-5 text-[#1877F2]" />,
      techs: ["PostGIS", "MapLibre GL", "Turf.js", "GeoJSON", "GDAL"],
      value: "Sub-15ms radius searches, geofence polygon checks, and interactive vector mapping.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#040A24]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
            Technology Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
            Proven Technologies Built for Scale.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            We deliberately select battle-tested, open standards and modern frameworks that deliver enterprise stability, developer ergonomics, and clear long-term support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl bg-white dark:bg-[#070F2B] p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80">
                    {d.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#000B49] dark:text-white">
                    {d.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {d.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                  {d.value}
                </p>
              </div>
            </div>
          ))}

          {/* Architecture Commitment Box */}
          <div className="rounded-2xl bg-gradient-to-br from-[#000B49] to-[#0A1A4A] p-6 border border-blue-900/60 shadow-md text-white flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-wider text-[#0BCB91] uppercase">
                Architecture Standard
              </span>
              <h3 className="text-base font-bold text-white">
                Zero Lock-In, 100% Owned
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All software delivered by Mindrift belongs wholly to your enterprise. Clean source code, comprehensive documentation, and Dockerized environments guarantee zero vendor lock-in.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-[#0BCB91]">
              Strict IP Ownership Transfer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
