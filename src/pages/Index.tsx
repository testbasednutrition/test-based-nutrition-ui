import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Experts from "@/components/Experts";
import CTA from "@/components/CTA";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Pillars />
      <GlowingEffectDemo />
      <HowItWorks />
      <Experts />
      <CTA />
      <BackgroundPaths title="Your Health Journey Starts Here" />
      <Footer />
    </div>
  );
};

export default Index;
