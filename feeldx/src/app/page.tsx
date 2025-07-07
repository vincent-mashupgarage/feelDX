import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import OurImpactSection from "@/components/our-impact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <OurImpactSection />
    </div>
  );
}
