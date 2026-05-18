import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { CategoriesSection } from "@/components/home/categories-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { InvestmentCta } from "@/components/home/investment-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <CategoriesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <InvestmentCta />
    </>
  );
}
