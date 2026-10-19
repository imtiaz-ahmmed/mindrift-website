import React from "react";
import { Code2, Server, Database, Cpu, Cloud, ShieldCheck, Gamepad2, Smartphone, Terminal, Zap } from "lucide-react";

export function TechStack() {
  const domains = [
    {
      title: "Real-Time 3D & Cloud Pixel Streaming",
      code: "SYS::PIXEL_STREAM",
      icon: <Gamepad2 className="w-5 h-5 text-[#00D8F6]" />,
      techs: ["Unreal Engine 5", "WebRTC", "Dolby.io Spatial Audio", "Sketchfab 3D", "GPU Containers"],
      value: "Sub-80ms interactive 60 FPS 3D experiences streamed directly to mobile & web browsers with zero client downloads.",
    },
    {
      title: "Enterprise POS, Hardware & IoT",
      code: "SYS::HOSPITALITY_IOT",
      icon: <Zap className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["Electron", "MQTT Brokers", "ESC/POS Thermal Drivers", "Stripe Terminal", "Local-First SQLite"],
      value: "Resilient point-of-sale runtimes with offline transaction buffering, kitchen screen sync, and hardware device drivers.",
    },
    {
      title: "Mobile App Engineering",
      code: "SYS::MOBILE_NATIVE",
      icon: <Smartphone className="w-5 h-5 text-[#1877F2]" />,
      techs: ["React Native", "Android SDK / Kotlin", "iOS Swift", "FCM Push Notifications", "Fastlane CI/CD"],
      value: "Branded native consumer applications deployed on Google Play Store & Apple App Store with direct POS and kitchen integration.",
    },
    {
      title: "Modern Frontend Engineering",
      code: "SYS::WEB_CLIENT",
      icon: <Code2 className="w-5 h-5 text-[#1877F2]" />,
      techs: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "WebSockets"],
      value: "Sub-second initial page loads, optimal Core Web Vitals, and responsive enterprise interfaces.",
    },
    {
      title: "Cloud Infrastructure & FinOps",
      code: "SYS::CLOUD_INFRA",
      icon: <Cloud className="w-5 h-5 text-[#00D8F6]" />,
      techs: ["AWS G4dn/G5 GPUs", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
      value: "Declarative Infrastructure as Code, automated warm GPU fleet scaling, and 99.99% uptime guarantees.",
    },
    {
      title: "High-Throughput Databases",
      code: "SYS::DATA_PLATFORM",
      icon: <Database className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["PostgreSQL", "PostGIS", "Redis BullMQ", "Prisma ORM", "pgvector"],
      value: "ACID transactional reliability, GiST spatial polygon indexing, and sub-10ms query execution.",
    },
    {
      title: "Healthcare Compliance & Defensive Security",
      code: "SYS::SEC_COMPLIANCE",
      icon: <ShieldCheck className="w-5 h-5 text-[#0BCB91]" />,
      techs: ["HIPAA & GDPR Standards", "FHIR Data Models", "OAuth 2.0 / OIDC", "Encrypted S3", "Trivy / Semgrep"],
      value: "End-to-end encrypted medical EMR records, audit trails, and automated container vulnerability scanning.",
    },
    {
      title: "AI, Agents & Intelligent Pipelines",
      code: "SYS::AI_INTELLIGENCE",
      icon: <Cpu className="w-5 h-5 text-[#1877F2]" />,
      techs: ["Python", "FastAPI", "LangChain", "Vector Embeddings", "Deterministic RAG"],
      value: "Enterprise RAG workflows, intelligent document extraction, and cost-optimized semantic caching.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#040A24]/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase font-semibold bg-[#1877F2]/10 text-[#1877F2] dark:text-[#00D8F6] border border-[#1877F2]/20">
            <Terminal className="w-3.5 h-3.5 text-[#0BCB91]" />
            SYS::ENGINEERING_STACK // BATTLE-TESTED STANDARDS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000B49] dark:text-white tracking-tight">
            Battle-Tested Technologies. <br />
            <span className="brand-gradient-text">Engineered For Production.</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            We avoid fragile fads. We select open standards, high-throughput cloud primitives, and resilient runtime environments that guarantee long-term stability and effortless maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div
              key={d.title}
              className="rounded-3xl bg-white dark:bg-[#070F2B] p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-xl hover:border-[#1877F2]/40 dark:hover:border-[#00D8F6]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                    {d.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    {d.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 font-sans">
                    {d.value}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {d.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Architecture Commitment Box */}
          <div className="rounded-3xl bg-gradient-to-br from-[#000B49] via-[#051347] to-[#0A1D6B] p-7 border border-blue-900/60 shadow-xl text-white flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <span className="text-[10px] font-mono tracking-wider text-[#0BCB91] uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0BCB91]" />
                STANDARD::IP_GUARANTEE
              </span>
              <h3 className="text-lg font-black text-white">
                Zero Lock-In. 100% Client IP Ownership.
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Every line of source code, architectural diagram, and Dockerized deployment script engineered by Mindrift belongs 100% to your enterprise upon delivery. Clean handover, zero hidden runtime fees.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono font-bold text-[#0BCB91] flex items-center justify-between relative z-10">
              <span>LEGAL_TRANSFER_VERIFIED</span>
              <span>100% COMPLETE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
