import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import OurImpactSection from "@/components/our-impact-section";
import IndustryLeadersSection from "@/components/industry-leaders-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaFooterSection from "@/components/cta-footer-section";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />

      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <OurImpactSection />
        <IndustryLeadersSection />
        <TestimonialsSection />
        <CtaFooterSection />
      </main>
    </div>
  );
}
