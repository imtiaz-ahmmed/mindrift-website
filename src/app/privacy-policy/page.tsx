import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Mindrift Agency's commitment to enterprise confidentiality, data privacy, and secure information handling.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        <div className="space-y-4">
          <Badge variant="blue">Compliance & Governance</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Last Updated: October 2026 · Mindrift Agency Legal & Security
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              1. Overview and Scope
            </h2>
            <p>
              Mindrift Agency (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and confidentiality of visitors, clients, and partners. This Privacy Policy outlines how we collect, process, and safeguard information submitted through our website and digital channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide when inquiring about our services, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
              <li>Contact details (Full Name, Work Email Address, Phone Number).</li>
              <li>Company and organizational details (Company Name, Industry Sector).</li>
              <li>Project scope specifications, technical requirements, and estimated budgets.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              3. Purpose of Processing
            </h2>
            <p>
              Your information is used strictly to evaluate your technical requirements, prepare tailored project proposals, execute non-disclosure agreements, and facilitate communication between your team and our senior engineering leads.
            </p>
            <p>
              We do not sell, rent, or lease your personal or organizational data to any third-party advertisers or commercial brokers under any circumstance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              4. Confidentiality & Non-Disclosure
            </h2>
            <p>
              Mindrift Agency treats all project briefs, system architecture details, and technical inquiry data as strictly confidential business information. We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to in-depth technical evaluations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              5. Data Security Standards
            </h2>
            <p>
              We implement industry-standard technical and organizational security measures, including Transport Layer Security (TLS 1.3) encryption in transit, strict access control, and audited server environments. Sensitive contact data is not stored in unencrypted browser storage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#000B49] dark:text-white">
              6. Your Rights & Inquiries
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal data submitted to Mindrift Agency. To exercise these rights or make privacy-related inquiries, please contact our privacy team at{" "}
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
