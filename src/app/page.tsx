import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
