import React from "react";
import { ArrowRight } from "lucide-react";

const experts = [
  {
    name: "Natasha Sundharawipata",
    role: "Founder & Director",
    org: "Founder of TBN, Natasha brings over two decades of experience integrating preventative test-based systems into global clinics.",
    link: "/specialists/natasha-sundharawipata",
    image: "/experts/natasha-latest.png",
  },
  {
    name: "Dr Ishtiaq Rehman",
    role: "Medical Director",
    org: "Current England FA Doctor. Leads the medical development of TBN, guiding our clinical principles through elite sports medicine.",
    link: "/specialists/dr-ishtiaq-rehman",
    image: "/experts/dr-rehman-v3.png",
  },
  {
    name: "Neil Parsley",
    role: "Performance Director",
    org: "Former Team GB coach. Brings extensive experience integrating test-based nutrition strategies within high-performance environments.",
    link: "/specialists/neil-parsley",
    image: "/experts/neil-parsley-v3.png",
  },
];

const Experts = () => {
  return (
    <section id="experts" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Team Grid */}
          <div className="flex flex-col gap-10 order-1 lg:order-1">
            {/* Natasha - Full Width */}
            <div className="flex flex-col items-center">
              <a href={experts[0].link} className="w-[85%] md:w-[75%] lg:w-[70%] max-w-[400px] mx-auto relative group block overflow-hidden rounded-[20px] mb-6 bg-transparent shadow-sm">
                <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={experts[0].image} 
                    alt={experts[0].name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
              <div className="text-center px-4 w-full">
                <a href={experts[0].link} className="hover:text-primary transition-colors inline-block mb-1">
                  <h3 className="text-xl md:text-2xl font-serif text-foreground/90">{experts[0].name}</h3>
                </a>
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3">{experts[0].role}</p>
                <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  {experts[0].org}
                </p>
              </div>
            </div>

            {/* Dr Rehman and Neil - Split Width */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {experts.slice(1).map((expert, index) => (
                <div key={index} className="flex flex-col items-center">
                  <a href={expert.link} className="w-[90%] md:w-[85%] max-w-[240px] mx-auto relative group block overflow-hidden rounded-2xl mb-5 bg-transparent shadow-sm">
                    <div className="w-full aspect-square md:aspect-[4/5] overflow-hidden bg-muted">
                      <img 
                        src={expert.image} 
                        alt={expert.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>
                  <div className="text-center px-2 w-full">
                    <a href={expert.link} className="hover:text-primary transition-colors inline-block mb-1">
                      <h3 className="text-lg md:text-xl font-serif text-foreground/90">{expert.name}</h3>
                    </a>
                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-primary mb-2">{expert.role}</p>
                    <p className="text-[12px] md:text-[13px] text-muted-foreground leading-relaxed">
                      {expert.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Story */}
          <div className="flex flex-col justify-center order-2 lg:order-2 lg:sticky lg:top-32 pt-4 lg:pt-12">
             <div className="max-w-xl mx-auto lg:mx-0 lg:pl-6 xl:pl-10">
               <p className="text-[12px] font-bold tracking-widest uppercase text-primary mb-4">Our Story</p>
               <h2 className="text-[32px] md:text-4xl xl:text-[46px] font-bold font-playfair font-heading mb-8 leading-[1.15] tracking-tight">
                 Our Purpose-Driven Mission<span className="text-primary">.</span>
               </h2>
               
               <div className="space-y-6 font-montserrat text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                 <p>
                   Born from personal transformation and developed with world-leading medical and performance expertise, Test-Based Nutrition (TBN) was created to bridge the gap between reactive treatment and proactive health.
                 </p>
                 <p>
                   What began as a personal journey to find answers has evolved into a clinical framework used by leading practitioners, aesthetic clinics, and elite sports teams to deliver personalised preventative healthcare.
                 </p>
               </div>
               
               <div className="mt-12 pt-8 border-t border-border">
                 <a href="/treatments/testing" className="inline-flex items-center font-bold text-[13px] uppercase tracking-widest text-foreground hover:text-primary transition-colors group">
                   Explore Our Method
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
