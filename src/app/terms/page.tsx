import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of Mindrift Agency's website, architectural consulting, and software engineering engagements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ label: "Terms of Service" }]} />

        <div className="space-y-4">
          <Badge variant="blue">Legal Terms</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Last Updated: October 2026 · Mindrift Agency
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              2. Professional Services & Statements of Work
            </h2>
            <p>
              All software engineering, AI integration, cloud consulting, and cybersecurity engagements delivered by Mindrift Agency are governed by formal Statements of Work (SOW) or Master Services Agreements (MSA) executed separately between authorized representatives of Mindrift Agency and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              3. Intellectual Property Ownership
            </h2>
            <p>
              Unless otherwise agreed in a specific Statement of Work, all custom software code, application architecture specifications, and custom deliverables developed specifically for a client become 100% the property of the client upon final payment and milestone sign-off.
            </p>
            <p>
              Mindrift Agency retains all rights to its pre-existing foundational libraries, generic developer tooling, and proprietary workflow automation frameworks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              4. Disclaimer of Warranties
            </h2>
            <p>
              The materials and information on this website are provided on an &ldquo;as is&rdquo; basis for informational purposes regarding our capabilities. Mindrift Agency makes no warranties, expressed or implied, regarding the website&rsquo;s continuous operation or freedom from technical errors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              5. Governing Law & Contact
            </h2>
            <p>
              Any disputes arising out of these terms shall be governed by applicable corporate commercial law. For contractual or legal inquiries, please contact{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#1877F2] dark:text-[#0BCB91] underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
