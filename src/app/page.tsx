import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MetricsSection } from "@/components/MetricsSection";
import { CTASection } from "@/components/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <HeroSection />
      <FeaturesSection />
      <MetricsSection />
      <CTASection />
    </div>
  );
}
