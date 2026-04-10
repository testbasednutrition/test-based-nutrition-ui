import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/components/QuizContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ClientLogos from "@/components/ClientLogos";

const slides = [
  {
    videoUrl: "/videos/vital-organs.mp4",
    heading1: "A New Era in Personalised,",
    heading2: "Preventative Nutrition",
    subheading: "Where advanced testing, practitioner insight and science-led nutrition come together to support long-term health, performance and longevity.",
    cta: "Take the Personalised Protocol Quiz",
    action: "quiz"
  },
  {
    videoUrl: "/videos/hero-bg.mp4",
    heading1: "Transform Your Health,",
    heading2: "Client Examples",
    subheading: "See how test-based nutrition has changed the lives of our clients.",
    cta: "View Client Stories",
    action: "scroll"
  }
];

const Hero = () => {
  const { openQuiz } = useQuiz();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  const handleCta = () => {
    if (slide.action === "quiz") {
      openQuiz();
    } else {
      document.getElementById("transformations")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      {slides.map((s, index) => (
        <div 
          key={s.videoUrl}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={s.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container text-center px-6 py-32 md:py-0">
        <h1 key={`heading-${currentSlide}`} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in">
          {slide.heading1}{" "}
          <span className="block">{slide.heading2}</span>
        </h1>
        <p key={`subheading-${currentSlide}`} className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {slide.subheading}
        </p>
        <div key={`cta-${currentSlide}`} className="mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 border border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground bg-transparent" onClick={handleCta}>
            {slide.cta}
          </Button>
        </div>
      </div>

      {/* Slider Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>


      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="w-full px-1 sm:px-8 py-3 md:py-4 flex flex-nowrap justify-center sm:justify-center gap-2 sm:gap-6 md:gap-12 text-[11.5px] min-[390px]:text-[12.5px] sm:text-[13px] md:text-sm tracking-tight sm:tracking-normal text-muted-foreground whitespace-nowrap overflow-x-auto">
            <span className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Foundational Testing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Rapid Point-of-Care Testing
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Expert-Led Protocols
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Personalised Preventative Programmes
            </span>
          </div>
        </div>

        {/* Sliding Partners */}
        <ClientLogos />
      </div>
    </section>
  );
};

export default Hero;