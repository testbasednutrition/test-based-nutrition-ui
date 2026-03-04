import { useState } from "react";
import { Brain, Heart, Baby, Dumbbell, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Link } from "react-router-dom";
import childrensImg from "@/assets/treatments/childrens-health.jpg";
import mensImg from "@/assets/treatments/mens-health.jpg";
import womensImg from "@/assets/treatments/womens-health.jpg";
import skinImg from "@/assets/treatments/skin-health.jpg";
import fertilityImg from "@/assets/treatments/fertility.jpg";

const services = [
  {
    icon: Baby,
    title: "Children's Health",
    description: "Brain development, immune support, and growth through balanced nutrition.",
    detail: "We specialise in supporting neurodivergent children and picky eaters with science-backed nutritional protocols. Our team of doctors and scientists help families address deficiencies that affect focus, mood, and sleep — transforming mealtimes and long-term wellbeing.",
    link: "/treatments/childrens-health",
    image: childrensImg,
  },
  {
    icon: Shield,
    title: "Men's Health",
    description: "Heart health, muscle maintenance, and vitality through targeted nutrition.",
    detail: "From puberty to healthy ageing, we identify hidden nutritional deficiencies that compromise cellular health — leading to hormonal imbalances, inflammation, and cognitive decline. Our test-based approach optimises strength, energy, and resilience at every stage.",
    link: "/treatments/mens-health",
    image: mensImg,
  },
  {
    icon: Heart,
    title: "Women's Wellbeing",
    description: "Hormonal balance, bone density, and immune function across life stages.",
    detail: "With up to 70% of women facing hidden deficiencies disrupting hormones, energy, and mental health, we translate cutting-edge science into effective solutions — from fertility and pregnancy to perimenopause and menopause.",
    link: "/treatments/womens-health",
    image: womensImg,
  },
  {
    icon: Brain,
    title: "Skin Health",
    description: "Targeted nutrition for radiant skin, collagen support, and protection from oxidative stress.",
    detail: "Chronic skin conditions are often driven by inflammation, poor gut health, and nutrient deficiencies at the cellular level. Our test-based approach restores balance from within, delivering visible results in as little as 6–8 weeks.",
    link: "/treatments/skin-health",
    image: skinImg,
  },
  {
    icon: Dumbbell,
    title: "Sport Performance",
    description: "Optimise energy, endurance, and recovery for elite and amateur athletes.",
    detail: "We work with professional athletes and active individuals to identify nutritional gaps that limit performance. Through precision testing and personalised protocols, we help you train harder, recover faster, and perform at your peak.",
    link: "/specialists",
    image: fertilityImg,
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = services[active].icon;

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What We Treat
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
            Comprehensive Health Solutions<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {services.map((s, i) => (
            <div key={s.title} className="relative group/container">
              <GlowingEffect
                spread={30}
                glow={i === active}
                disabled={false}
                proximity={48}
                inactiveZone={0.01}
                borderWidth={1}
                blur={4}
              />
              <button
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all border ${
                  i === active
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                <s.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Content panel */}
        <div className="max-w-5xl mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 h-56 md:h-auto">
              <img
                src={services[active].image}
                alt={services[active].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <ActiveIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2">{services[active].title}</h3>
              <p className="text-muted-foreground text-sm font-medium mb-4">
                {services[active].description}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {services[active].detail}
              </p>
              <Link
                to={services[active].link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
