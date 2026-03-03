import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/components/QuizContext";

interface TreatmentPageProps {
  title: string;
  subtitle: string;
  body: string[];
  image: string;
  quizUrl?: string;
  extraButtons?: { label: string; href: string }[];
}

const TreatmentPage = ({
  title,
  subtitle,
  body,
  image,
  quizUrl,
  extraButtons,
}: TreatmentPageProps) => {
  const { openQuiz } = useQuiz();
  // Derive goal ID from title
  const goalId = title.toLowerCase().replace(/['']/g, "").replace(/\s+/g, "-");
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {title}
              </h1>
              <p className="mt-5 text-lg md:text-xl font-medium text-foreground/80">
                {subtitle}
              </p>
              <div className="mt-6 space-y-4">
                {body.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="outline" className="text-base uppercase tracking-widest font-medium" onClick={() => openQuiz(goalId)}>
                  Take Quiz
                </Button>
                {extraButtons?.map((btn) => (
                  <Button key={btn.label} size="lg" variant="outline" asChild className="text-base uppercase tracking-widest font-medium">
                    <a href={btn.href} target="_blank" rel="noopener noreferrer">
                      {btn.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-muted">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-t border-border bg-background">
        <div className="container py-8 flex flex-wrap justify-center gap-8 md:gap-14 text-sm text-muted-foreground">
          <span className="font-semibold tracking-wider uppercase text-xs">St Michaels Falmouth</span>
          <span className="font-semibold tracking-wider uppercase text-xs">Showoff</span>
          <span className="font-semibold tracking-wider uppercase text-xs">Soho House</span>
          <span className="font-semibold tracking-wider uppercase text-xs">Hexagon Health</span>
          <span className="font-semibold tracking-wider uppercase text-xs">Hoar Cross Hall</span>
          <span className="font-semibold tracking-wider uppercase text-xs">Glass House</span>
          <span className="font-semibold tracking-wider uppercase text-xs">MyAe.</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TreatmentPage;
