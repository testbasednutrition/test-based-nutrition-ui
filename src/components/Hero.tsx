import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Athletic performance"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6 py-32 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in">
          Your Health,{" "}
          <span className="block">Backed by Science</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Personalised nutrition and performance protocols guided by world-leading experts and advanced testing.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" asChild className="text-base px-8 py-6">
            <a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer">Take Quiz

            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
            <a href="#services">Treatments

            </a>
          </Button>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="container py-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            150+ Elite Athletes
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            England FA Experts
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Personalised Protocols
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Science-Led Approach
          </span>
        </div>
      </div>
    </section>);

};

export default Hero;