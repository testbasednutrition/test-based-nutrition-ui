import { ArrowRight, Beaker, CalendarClock, ClipboardList, Stethoscope, Activity, LineChart } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Health Quiz",
    icon: ClipboardList,
    description: "Your journey begins with a short online health questionnaire. This helps identify patterns in symptoms, lifestyle factors and health goals.",
    bullets: [
      "Identify areas of health needing deeper insight",
      "Fully dynamic and tailored to your specific health track",
    ]
  },
  {
    id: "02",
    title: "Free Consultation",
    icon: CalendarClock,
    description: "After completing the quiz, you can book a free consultation with a trained practitioner to explore your health history, current symptoms and goals.",
    bullets: [
      "Online, from anywhere in the UK",
      "In person, at selected partner clinics and health clubs",
      "Determines whether testing may provide helpful insight"
    ]
  },
  {
    id: "03",
    title: "Foundation-Led Testing",
    icon: Beaker,
    description: "Many programmes begin with two key tests designed to explore fundamental biological systems that influence many areas of wellbeing.",
    bullets: [
      "Omega Balance Test: A finger-prick blood test measuring essential fatty acids, inflammation and cellular health",
      "Gut Health Test: A blood-based test assessing markers linked to intestinal barrier function"
    ]
  },
  {
    id: "04",
    title: "Personalised Blood Testing",
    icon: Activity,
    description: "Where appropriate, further testing may be recommended to explore specific health concerns. Analysis can be done at home or in selected clinics.",
    bullets: [
      "Hormones & Thyroid function",
      "Metabolic health & nutrient status",
      "Inflammation markers"
    ]
  },
  {
    id: "05",
    title: "Personalised Protocols",
    icon: Stethoscope,
    description: "Once results are reviewed, practitioners guide individuals through a personalised strategy designed around their results and health goals.",
    bullets: [
      "Nutritional guidance & lifestyle strategies",
      "Practitioner-led programmes",
      "Carefully selected supplementation"
    ]
  },
  {
    id: "06",
    title: "Review and Retesting",
    icon: LineChart,
    description: "Progress is monitored through follow-up consultations and optional retesting to track changes in key markers.",
    bullets: [
      "Understand how your body responds over time",
      "Clear, measurable pathway for long-term health improvement"
    ]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-stone-50/50 border-t border-border">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Sticky Header Panel */}
          <div className="lg:w-5/12">
            <div className="sticky top-32">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                The Process
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
                Understanding Your Health From the Inside Out<span className="text-primary">.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-10 text-lg">
                <p>
                  Energy levels, hormone balance, mental clarity, immune resilience and recovery all depend on systems inside the body working in balance.
                </p>
                <p>
                  Test-Based Nutrition helps uncover these systems through expert guidance, accessible testing and personalised strategies, allowing individuals to make informed decisions about their health.
                </p>
              </div>
              
              <div className="hidden lg:block p-6 rounded-2xl bg-white border border-border shadow-sm">
                 <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                   <Stethoscope className="w-5 h-5 text-primary" />
                   Specialist Doctor Support
                 </h3>
                 <p className="text-sm text-muted-foreground mb-4">
                   Clients also have the option to book consultations with specialist doctors for further insight and prescription support.
                 </p>
                 <ul className="text-sm font-medium space-y-2">
                   <li className="flex justify-between items-center border-b border-border pb-2">
                     <span>Doctor Results Review</span>
                     <span className="text-primary">£95</span>
                   </li>
                   <li className="flex justify-between items-center pt-1">
                     <span>Doctor Consultation & Follow-Up</span>
                     <span className="text-primary">£195</span>
                   </li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Timeline */}
          <div className="lg:w-7/12 relative">
            {/* The structural vertical line connecting steps */}
            <div className="absolute left-[39px] top-8 bottom-8 w-px bg-border/80 hidden sm:block" />
            
            <div className="space-y-12 md:space-y-8">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative flex gap-6 md:gap-8 group">
                    {/* Step Node (Timeline circle) */}
                    <div className="hidden sm:flex shrink-0 w-20 h-20 rounded-full bg-background border-2 border-border/60 items-center justify-center relative z-10 group-hover:border-primary group-hover:bg-primary/5 group-hover:shadow-[0_0_20px_rgba(182,143,101,0.15)] transition-all duration-500">
                      <span className="text-xl font-serif font-bold text-primary mr-1">{step.id}</span>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-background border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500 group-hover:border-primary/30 group-hover:-translate-y-1 origin-bottom">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="sm:hidden text-2xl font-serif font-bold text-primary/40 leading-none">
                          {step.id}.
                        </span>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                           <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight">{step.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed mb-5">
                        {step.description}
                      </p>
                      
                      <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
                        <ul className="space-y-3">
                          {step.bullets.map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm md:text-[15px] text-foreground/80 leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 opacity-60" />
                              <span className="flex-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Mobile Specialist Doctor Support Callout */}
            <div className="lg:hidden mt-12 p-6 rounded-3xl bg-white border border-border shadow-md">
               <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                 <Stethoscope className="w-6 h-6 text-primary" />
                 Specialist Doctor Support
               </h3>
               <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                 Clients also have the option to book consultations with specialist doctors for further insight and prescription support.
               </p>
               <ul className="text-sm font-medium space-y-3">
                 <li className="flex justify-between items-center border-b border-border pb-3">
                   <span>Doctor Results Review</span>
                   <span className="text-primary font-bold">£95</span>
                 </li>
                 <li className="flex justify-between items-center pt-1">
                   <span>Doctor Consultation & Follow-Up</span>
                   <span className="text-primary font-bold">£195</span>
                 </li>
               </ul>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
