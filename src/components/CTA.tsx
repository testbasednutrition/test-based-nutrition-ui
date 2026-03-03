import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
          Ready to Transform Your Health<span className="text-primary">?</span>
        </h2>
        <p className="mt-6 text-background/70 max-w-xl mx-auto text-lg">
          Book your free consultation and discover how personalised nutrition can optimise your health and performance.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="text-base px-10 py-6">
            <a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer">
              Book Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
