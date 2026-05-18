import { HeroSection } from "@/components/home/hero-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { AgentsSection } from "@/components/home/agents-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <AgentsSection />
      <WhyChooseUs />
    </>
  );
}
