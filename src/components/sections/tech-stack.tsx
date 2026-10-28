import React from "react";
import { Code2, Database, Cpu, Cloud, ShieldCheck, Gamepad2, Smartphone, Zap } from "lucide-react";

export function TechStack() {
  const domains = [
    {
      title: "Real-Time 3D & Cloud Pixel Streaming",
      domain: "Interactive 3D",
      icon: <Gamepad2 className="w-5 h-5 text-[#00D8F6]" />,
      techs: ["Unreal Engine 5", "WebRTC", "Dolby.io Spatial Audio", "Sketchfab 3D", "GPU Containers"],
      value: "Sub-80ms interactive 60 FPS 3D experiences streamed directly to mobile & web browsers with zero client downloads.",
    },
    {
      title: "Enterprise POS, Hardware & IoT",
      domain: "Hospitality IoT",
      icon: <Zap className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["Electron", "MQTT Brokers", "ESC/POS Thermal Drivers", "Stripe Terminal", "Local-First SQLite"],
      value: "Resilient point-of-sale runtimes with offline transaction buffering, kitchen screen sync, and hardware device drivers.",
    },
    {
      title: "Mobile App Engineering",
      domain: "Mobile Native",
      icon: <Smartphone className="w-5 h-5 text-[#1877F2]" />,
      techs: ["React Native", "Android SDK / Kotlin", "iOS Swift", "FCM Push Notifications", "Fastlane CI/CD"],
      value: "Branded native consumer applications deployed on Google Play Store & Apple App Store with direct POS and kitchen integration.",
    },
    {
      title: "Modern Frontend Engineering",
      domain: "Web Architecture",
      icon: <Code2 className="w-5 h-5 text-[#1877F2]" />,
      techs: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "WebSockets"],
      value: "Sub-second initial page loads, optimal Core Web Vitals, and responsive enterprise interfaces.",
    },
    {
      title: "Cloud Infrastructure & FinOps",
      domain: "Cloud Platforms",
      icon: <Cloud className="w-5 h-5 text-[#00D8F6]" />,
      techs: ["AWS G4dn/G5 GPUs", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
      value: "Declarative Infrastructure as Code, automated warm GPU fleet scaling, and 99.99% uptime guarantees.",
    },
    {
      title: "High-Throughput Databases",
      domain: "Data Layer",
      icon: <Database className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["PostgreSQL", "PostGIS", "Redis BullMQ", "Prisma ORM", "pgvector"],
      value: "ACID transactional reliability, GiST spatial polygon indexing, and sub-10ms query execution.",
    },
    {
      title: "Healthcare Compliance & Defensive Security",
      domain: "Security & Health",
      icon: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["HIPAA & GDPR Standards", "FHIR Data Models", "OAuth 2.0 / OIDC", "Encrypted S3", "Trivy / Semgrep"],
      value: "End-to-end encrypted medical EMR records, audit trails, and automated container vulnerability scanning.",
    },
    {
      title: "AI, Agents & Intelligent Pipelines",
      domain: "AI Intelligence",
      icon: <Cpu className="w-5 h-5 text-[#1877F2]" />,
      techs: ["Python", "FastAPI", "LangChain", "Vector Embeddings", "Deterministic RAG"],
      value: "Enterprise RAG workflows, intelligent document extraction, and cost-optimized semantic caching.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#040A24]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          suppressHydrationWarning
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
            Engineering Standards & Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight">
            Battle-Tested Technologies. <br />
            <span className="brand-gradient-text">Engineered For Production.</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            We avoid fragile fads. We select open standards, high-throughput cloud primitives, and resilient runtime environments that guarantee long-term stability and effortless maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d, idx) => (
            <div
              key={d.title}
              data-aos="fade-up"
              data-aos-duration="650"
              data-aos-delay={(idx % 3) * 100}
              suppressHydrationWarning
              className="rounded-3xl bg-white dark:bg-[#070F2B] p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-[#1877F2]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                    {d.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {d.domain}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 font-sans">
                    {d.value}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {d.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Architecture Commitment Box: Clean & Formal */}
          <div className="rounded-3xl bg-gradient-to-br from-[#000B49] via-[#051347] to-[#0A1D6B] p-7 border border-blue-900/60 shadow-xl text-white flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#0BCB91] uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0BCB91]" />
                Client Ownership Guarantee
              </span>
              <h3 className="text-lg font-bold text-white">
                Zero Vendor Lock-In. 100% Client IP Ownership.
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Every line of source code, architectural diagram, and Dockerized deployment script engineered by Mindrift belongs 100% to your enterprise upon delivery. Clean handover, zero hidden runtime fees.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-semibold text-[#0BCB91] flex items-center justify-between">
              <span>Full Intellectual Property Transfer</span>
              <span>100% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
