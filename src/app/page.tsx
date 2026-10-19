import { Hero } from "@/components/sections/hero";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import { ImpactStats } from "@/components/sections/impact-stats";
import { IntroPillars } from "@/components/sections/intro-pillars";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HowWeWork } from "@/components/sections/how-we-work";
import { TechStack } from "@/components/sections/tech-stack";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <ScrollReveal direction="up" delay={50}>
        <ImpactStats />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={80}>
        <CapabilityStrip />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <IntroPillars />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <ServicesOverview />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <FeaturedProjects />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <HowWeWork />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <TechStack />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <IndustriesGrid />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <InsightsPreview />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <CtaBanner />
      </ScrollReveal>
    </div>
  );
}
