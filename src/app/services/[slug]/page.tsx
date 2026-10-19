import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Network,
  MapPin,
  Compass,
  Database,
  ArrowRight,
  CheckCircle2,
  Check,
  HelpCircle,
  Sparkles,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: `${service.title} Services`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8 text-[#1877F2]" />,
  Cpu: <Cpu className="w-8 h-8 text-[#0BCB91]" />,
  Cloud: <Cloud className="w-8 h-8 text-[#1877F2]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#0BCB91]" />,
  Network: <Network className="w-8 h-8 text-[#1877F2]" />,
  MapPin: <MapPin className="w-8 h-8 text-[#0BCB91]" />,
  Compass: <Compass className="w-8 h-8 text-[#1877F2]" />,
  Database: <Database className="w-8 h-8 text-[#0BCB91]" />,
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related projects if any
  const relatedProjects = service.relatedProjectSlugs
    ? projectsData.filter((p) => service.relatedProjectSlugs?.includes(p.slug))
    : [];

  // Find other services
  const otherServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center">
                {iconMap[service.iconName] || <Code2 className="w-8 h-8 text-[#1877F2]" />}
              </div>
              <Badge variant="blue">Specialized Practice</Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-xl font-medium text-[#1877F2] dark:text-[#0BCB91]">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              {service.fullDescription}
            </p>
          </div>

          {/* Quick Engagement Card */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-50 dark:bg-[#070F2B] p-6 border border-slate-200 dark:border-slate-800 space-y-5 shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Engagement Snapshot
            </h3>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="text-slate-400">Delivery Model</span>
                <span className="font-semibold text-slate-900 dark:text-white">Agile Sprints / Fixed Scope</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="text-slate-400">IP Ownership</span>
                <span className="font-semibold text-[#0BCB91]">100% Client Owned</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="text-slate-400">Security Standard</span>
                <span className="font-semibold text-slate-900 dark:text-white">OWASP & Zero Trust</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-colors shadow-sm group"
            >
              <span>Discuss {service.title.split("&")[0].trim()}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Sub-Services & Specific Deliverables Grid */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000B49] dark:text-white">
              Core Capabilities & Sub-Services
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Modular technical offerings delivered as integrated engagements or specialized micro-projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow space-y-2"
              >
                <div className="text-xs font-mono text-[#1877F2] dark:text-[#0BCB91]">0{i + 1}</div>
                <h3 className="font-bold text-base text-[#000B49] dark:text-white">
                  {sub.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Business Value Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Deliverables */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#070F2B] p-8 border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-[#000B49] dark:text-white">
              Tangible Deliverables
            </h3>
            <div className="space-y-3">
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <div className="p-1 rounded-full bg-blue-500/10 text-[#1877F2] dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Value */}
          <div className="rounded-3xl bg-gradient-to-br from-[#000B49] to-[#0A1744] p-8 border border-blue-900/50 shadow-md text-white space-y-6">
            <h3 className="text-xl font-bold text-white">
              Business Value & ROI
            </h3>
            <div className="space-y-3">
              {service.businessValue.map((val, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="p-1 rounded-full bg-[#0BCB91]/20 text-[#0BCB91] flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Step Engagement Process */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#0BCB91]">
              Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000B49] dark:text-white">
              Typical Engagement Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.engagementProcess.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl bg-white dark:bg-[#070F2B] p-6 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="text-2xl font-black font-mono text-slate-300 dark:text-slate-700">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#000B49] dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Validated Tech Stack & Libraries:
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-white dark:bg-[#070F2B] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Projects If Available */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-extrabold text-[#000B49] dark:text-white">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="p-6 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <Badge variant="blue" size="sm">
                      {p.category}
                    </Badge>
                    <h3 className="font-bold text-lg text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {p.summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#1877F2] dark:text-[#0BCB91]">
                    <span>Read Technical Review</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-extrabold text-[#000B49] dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white dark:bg-[#070F2B] p-6 border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#000B49] dark:text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#1877F2] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final Consultation Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#000B49] via-[#05113A] to-[#000B49] p-8 md:p-12 text-white border border-blue-900/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Discuss Your {service.title.split("&")[0].trim()} Initiative?
            </h3>
            <p className="text-sm text-slate-300">
              Our architects and senior engineers will review your requirements under mutual NDA.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#000B49] bg-[#0BCB91] hover:bg-[#09B882] transition-colors shadow-lg flex-shrink-0 group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
