import CTABanner from "components/home/CTABanner";
import ContactSection from "components/home/ContactSection";
import HeroSection from "components/home/HeroSection";
import ServicesSection from "components/home/ServicesSection";
import SiteFooter from "components/home/SiteFooter";
import SiteHeader from "components/home/SiteHeader";
import StatsSection from "components/home/StatsSection";
import TestimonialsSection from "components/home/TestimonialsSection";
import WhyChooseUs from "components/home/WhyChooseUs";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <StatsSection />
        <TestimonialsSection />
        <CTABanner />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
