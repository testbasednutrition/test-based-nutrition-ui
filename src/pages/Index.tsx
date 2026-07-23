import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrainingTicker from "@/components/TrainingTicker";
import Pillars from "@/components/Pillars";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Experts from "@/components/Experts";
import ExpertsFocusRail from "@/components/ExpertsFocusRail";
import CTA from "@/components/CTA";
import { TestimonialsDemo } from "@/components/TestimonialsDemo";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ModernBackgroundDemo } from "@/components/ModernBackgroundDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Test-Based Nutrition | Science-Led Health & Performance"
        description="A New Era in Nutritional Preventative Healthcare. Personalised health pathways guided by lab-grade blood spot screening."
        canonical="https://testbasednutrition.com/"
      />
      <SchemaMarkup type="Organization" />
      <Navbar />
      <Hero />
      <TrainingTicker />
      <Services />
      <Experts />

      {/* Methodology & Meet the Experts Block */}
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 xl:px-12 py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2 flex overflow-hidden rounded-3xl shadow-sm">
            <Pillars />
          </div>
          <div className="w-full lg:w-1/2 flex overflow-hidden rounded-3xl shadow-sm">
            <ExpertsFocusRail />
          </div>
        </div>
      </div>

      <HowItWorks />
      
      <ModernBackgroundDemo />
      <TestimonialsDemo />
      <HeroGeometric 
        badge="Test-Based Nutrition"
        title1="Undecided how we can Help?"
        title2="Click the Personal Protocol Quiz"
      />
      <Footer />
    </div>
  );
};

export default Index;
