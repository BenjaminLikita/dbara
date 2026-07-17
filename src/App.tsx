import { AboutSection } from "@/components/sections/AboutSection";
import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesDarkSection } from "@/components/sections/ServicesDarkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";

function App() {
  return (
    <div className="px-0 md:px-8">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesDarkSection />
      <TestimonialsSection />
      <PricingSection />
      <AppDownloadSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}

export default App;
