import { Button } from "@/components/ui/button";
import { useQuiz } from "@/components/QuizContext";

const partners = [
  "St Michaels Falmouth",
  "Showoff",
  "Soho House",
  "Hexagon Health",
  "Hoar Cross Hall",
  "Glass House",
  "MyAe",
];

const Hero = () => {
  const { openQuiz } = useQuiz();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
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
        <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="text-base px-8 py-6" onClick={() => openQuiz()}>
            Take the Personalised Protocol Quiz
          </Button>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-background/95 backdrop-blur-sm border-t border-border">
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

        {/* Sliding Partners */}
        <div className="bg-secondary border-t border-border overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...partners, ...partners, ...partners].map((name, i) => (
              <span
                key={i}
                className="mx-8 md:mx-12 text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;