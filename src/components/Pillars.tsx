import { Microscope, Stethoscope, ClipboardList, LineChart } from "lucide-react";

const foundations = [
  {
    icon: Microscope,
    title: "Advanced Testing",
    description: "Using both rapid point-of-care testing and laboratory analysis, we assess key biomarkers including omega balance, gut health, inflammation and metabolic markers. These insights help uncover the biological drivers influencing health and performance.",
  },
  {
    icon: Stethoscope,
    title: "Expert Practitioner Guidance",
    description: "A network of clinicians, pharmacists, nutrition practitioners and performance specialists trained in the Test-Based Nutrition methodology. Practitioners interpret test results and guide personalised health strategies.",
  },
  {
    icon: ClipboardList,
    title: "Personalised Health Protocols",
    description: "Each programme is built around your unique biology and health goals. Tailored nutrition, lifestyle and supplementation strategies are designed to support preventative care.",
  },
];

const Pillars = () => {
  return (
    <div id="foundations" className="w-full h-full bg-stone-50/50 flex flex-col justify-start py-16 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-2xl lg:max-w-none mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair font-heading leading-tight mb-4">
            The Foundations of <br className="hidden sm:block" />
            <span className="text-primary font-playfair font-heading pr-2">Test-Based Nutrition</span>.
          </h2>
          <p className="font-montserrat text-[14px] text-muted-foreground leading-relaxed">
            A preventative health system combining advanced testing, practitioner expertise and personalised nutrition programmes, designed to identify biological imbalances and support long-term health, performance and wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10 w-full max-w-4xl mx-auto">
          {foundations.map((foundation, i) => {
            const Icon = foundation.icon;
            return (
              <div
                key={foundation.title}
                className={`group relative bg-white rounded-2xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col ${
                  i === 0 ? "md:col-span-2 md:max-w-lg md:mx-auto w-full" : ""
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Decorative background gradient on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:bg-primary/10 transition-colors duration-500 ease-in-out" />
                
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/80 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 flex-shrink-0 relative z-10">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors relative z-10 leading-tight">{foundation.title}</h3>
                
                <p className="text-muted-foreground text-xs leading-relaxed flex-grow relative z-10">
                  {foundation.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pillars;
