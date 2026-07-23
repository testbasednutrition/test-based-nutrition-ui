import React from "react";
import { ArrowRight } from "lucide-react";

const experts = [
  {
    name: "Natasha Sundharawipata",
    role: "Founder & Director",
    org: "Over 25 years of experience in marketing, commercial growth and brand development, scaling luxury lifestyle, hospitality, health club and wellness businesses.",
    link: "/specialists/natasha-sundharawipata",
    image: "/experts/natasha-hq-new.jpg",
  },
  {
    name: "Dr Ishtiaq Rehman",
    role: "Medical Director",
    org: "Current England FA Doctor and specialist in sports and lifestyle medicine. Dr Rehman leads the clinical, educational and preventative health framework behind TBN.",
    link: "/specialists/ishtiaq-rehman",
    image: "/experts/ishtiaq-rehman-v4.jpg",
  },
  {
    name: "Neil Parsley",
    role: "Elite Performance Director",
    org: "Former Team GB, England FA and Manchester City performance coach. As founder of UTS Gym, Neil also leads TBN’s gym integration and sports performance pathways.",
    link: "/specialists/neil-parsley",
    image: "/experts/neil-parsley-new.jpg",
  },
];

const Experts = () => {
  return (
    <section id="experts" className="relative py-10 md:py-16 bg-secondary">
      {/* Top Fade Transition */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      
      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1300px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Team Grid */}
          <div className="flex flex-col gap-10 order-1 lg:order-1 items-start w-full">
            {/* Natasha - Full Width */}
            <div className="flex flex-col items-center text-center w-full max-w-xl mx-auto">
              <a href={experts[0].link} className="w-[85%] md:w-[75%] lg:w-[70%] max-w-[320px] mx-auto relative group block overflow-hidden rounded-[20px] mb-4 bg-transparent shadow-sm">
                <div className="w-full aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={experts[0].image} 
                    alt={`${experts[0].name} - ${experts[0].role} at Test-Based Nutrition`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
              <div className="text-center w-full flex flex-col items-center">
                <a href={experts[0].link} className="hover:text-primary transition-colors inline-block mb-1">
                  <h3 className="text-xl md:text-2xl font-serif text-foreground/90 text-center">{experts[0].name}</h3>
                </a>
                <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-primary mb-2 text-center whitespace-pre-line">{experts[0].role}</p>
                <p className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed text-left max-w-xl">
                  {experts[0].org}
                </p>
              </div>
            </div>

            {/* Dr Rehman and Neil - Split Width */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 w-full">
              {experts.slice(1).map((expert, index) => (
                <div key={index} className="flex flex-col items-start text-left">
                  <a href={expert.link} className="w-[95%] md:w-[90%] max-w-[210px] relative group block overflow-hidden rounded-2xl mb-4 bg-transparent shadow-sm">
                    <div className="w-full aspect-[4/5] overflow-hidden bg-muted">
                      <img 
                        src={expert.image} 
                        alt={`${expert.name} - ${expert.role} at Test-Based Nutrition`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>
                  <div className="text-left w-full flex flex-col items-start">
                    <a href={expert.link} className="hover:text-primary transition-colors inline-block mb-1">
                      <h3 className="text-lg md:text-xl font-serif text-foreground/90 text-left">{expert.name}</h3>
                    </a>
                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary mb-2 text-left whitespace-pre-line">{expert.role}</p>
                    <p className="text-[12px] md:text-[13px] text-muted-foreground leading-relaxed text-left">
                      {expert.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Story */}
          <div className="flex flex-col justify-start order-2 lg:order-2 lg:sticky lg:top-32">
             <div className="max-w-xl mx-auto lg:mx-0 lg:pl-6 xl:pl-10">
               <p className="text-[12px] font-bold tracking-widest uppercase text-primary mb-4">Our Story</p>
               <h2 className="text-[32px] md:text-4xl xl:text-[46px] font-bold font-playfair font-heading mb-8 leading-[1.15] tracking-tight">
                 A Purpose-Driven Movement Transforming Preventative Health<span className="text-primary">.</span>
               </h2>
               
               <div className="space-y-6 font-montserrat text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                 <p className="font-semibold text-foreground/90">
                   Supporting clinics, practitioners, health clubs and performance environments through science-led testing, education and integrated health systems.
                 </p>
                 <p>
                   Born from personal transformation and developed alongside leading specialists in medicine, performance and nutritional science, Test-Based Nutrition (TBN) was created to bridge the gap between reactive healthcare and personalised preventive wellness.
                 </p>
                 <p>
                   Today, TBN supports clinics, practitioners, coaches and wellness environments through world-leading Omega Balance, Gut Health and rapid point-of-care biomarker testing—combined with expert-led protocols, workshops, live events and academy education pathways.
                 </p>
                 <p>
                   Through the TBN Collective, we are building regional preventive health ecosystems powered by testing, education and practitioner collaboration. From elite sports performance events and CPD-accredited training to clinic integration and health club optimisation, we help professionals better understand the science behind symptoms and deliver more personalised, foundational health support.
                 </p>
                 <p>
                   TBN is redefining how preventive healthcare is delivered across modern clinical, wellness and performance environments.
                 </p>
               </div>
               
               <div className="mt-12 pt-8 border-t border-border">
                 <a href="/tbn-method" className="inline-flex items-center font-bold text-[13px] uppercase tracking-widest text-foreground hover:text-primary transition-colors group">
                   Discover The TBN Method
                   <ArrowRight className="ml-3 size-4 transition-transform group-hover:translate-x-1" />
                 </a>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experts;
