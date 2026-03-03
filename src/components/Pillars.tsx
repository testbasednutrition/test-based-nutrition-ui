import { Microscope, Apple, HeartPulse, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Microscope,
    title: "Scientific Precision",
    description:
      "Using leading laboratories and advanced testing, we identify deficiencies and develop personalised health protocols.",
  },
  {
    icon: Apple,
    title: "Personalised Nutrition",
    description:
      "Tailored plans based on your test results, targeting health concerns and supporting long-term well-being.",
  },
  {
    icon: HeartPulse,
    title: "Cellular Health",
    description:
      "Restoring cellular balance to improve nutrient absorption and create the foundation for long-term vitality.",
  },
  {
    icon: BookOpen,
    title: "Education & Empowerment",
    description:
      "Empowering you to make informed supplement choices based on your own deficiencies, not guesswork.",
  },
];

const Pillars = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Four Pillars
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Expertly Designed to Elevate Your Health<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
