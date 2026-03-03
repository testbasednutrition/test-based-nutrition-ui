const experts = [
  {
    name: "Neil Parsley",
    role: "Consulting Performance Coach",
    org: "England FA & Manchester City",
    quote: "If You're Not Assessing, You're Guessing.",
  },
  {
    name: "Dr. Ishtiaq Rehman",
    role: "Consulting Doctor",
    org: "England FA",
    quote: "Understanding your internal health today for a better tomorrow.",
  },
];

const Experts = () => {
  return (
    <section id="experts" className="py-20 md:py-32">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Elite Experts
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Led by World-Leading Experts<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our specialists conduct in-depth consultations to optimise your well-being and health, focusing on preventive healthcare for the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-serif font-bold text-primary">
                  {expert.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold">
                <a href={expert.name === "Neil Parsley" ? "/specialist/neil-parsley" : "#"} className="hover:text-primary transition-colors">
                  {expert.name}
                </a>
              </h3>
              <p className="text-primary text-sm font-medium mt-1">{expert.role}</p>
              <p className="text-muted-foreground text-sm">{expert.org}</p>
              <blockquote className="mt-4 text-muted-foreground italic text-sm border-l-2 border-primary/30 pl-4">
                "{expert.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
