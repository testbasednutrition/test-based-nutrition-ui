const steps = [
  {
    number: "01",
    title: "Book Your Consultation",
    description: "Online or in clinic, our elite experts provide a thorough health consultation.",
  },
  {
    number: "02",
    title: "Take Your Test",
    description: "A quick and simple dry spot test, either in clinic or at home.",
  },
  {
    number: "03",
    title: "Review Your Results",
    description: "Our experts create a personalised plan based on your results.",
  },
  {
    number: "04",
    title: "Follow Your 120-Day Plan",
    description: "Stick to your tailored plan and re-test at 120 days for improved health.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            4 Seamless Steps<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-6xl font-serif font-bold text-primary/10">
                {step.number}
              </span>
              <h3 className="text-lg font-bold mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://calendar.app.google/CDYDAvjFmMvJP3S88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
