import { Brain, Heart, Baby, Dumbbell, Shield } from "lucide-react";

const services = [
  { icon: Baby, title: "Children's Health", description: "Brain development, immune support, and growth through balanced nutrition." },
  { icon: Shield, title: "Men's Health", description: "Heart health, muscle maintenance, and vitality through targeted nutrition." },
  { icon: Heart, title: "Women's Wellbeing", description: "Hormonal balance, bone density, and immune function across life stages." },
  { icon: Brain, title: "Skin Health", description: "Targeted nutrition for radiant skin, collagen support, and protection from oxidative stress." },
  { icon: Dumbbell, title: "Sport Performance", description: "Optimise energy, endurance, and recovery for elite and amateur athletes." },
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What We Treat
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Comprehensive Health Solutions<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
