import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Experts from "@/components/Experts";
import CTA from "@/components/CTA";
import { BackgroundPaths } from "@/components/ui/background-paths";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Pillars />
      <HowItWorks />
      <Experts />
      
      <TestimonialsSection />
      <BackgroundPaths title="Your Health Journey Starts Here" />
      <Footer />
    </div>
  );
};

export default Index;
