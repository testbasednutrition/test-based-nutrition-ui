const experts = [
  {
    name: "Natasha Sundharawipata",
    role: "Founder & Director",
    org: "Founder of Test-Based Nutrition, Natasha leads the vision and growth of the TBN collective. With over two decades of experience in marketing and strategic business development, she specialises in integrating test-based nutrition systems into clinics, pharmacies and health clubs, helping practitioners deliver personalised preventative healthcare.",
    link: "/specialists/natasha-sundharawipata",
    image: "/experts/natasha-latest.png",
  },
  {
    name: "Dr Ishtiaq Rehman",
    role: "Medical Director",
    org: "Current England FA Doctor, Dr Rehman leads the medical development of Test-Based Nutrition. His experience in elite sports medicine and preventative health helps guide the clinical principles behind TBN, supporting programmes focused on performance, resilience and long-term health optimisation.",
    link: "/specialists/dr-ishtiaq-rehman",
    image: "/experts/dr-rehman-v3.png",
  },
  {
    name: "Neil Parsley",
    role: "Performance Director",
    org: "Former Team GB performance coach with leadership roles across elite sport including Manchester City and England FA. Neil brings extensive experience in athlete performance, recovery and development, helping integrate test-based nutrition strategies within high-performance environments.",
    link: "/specialists/neil-parsley",
    image: "/experts/neil-parsley-v3.png",
  },
];

const Experts = () => {
  return (
    <section id="experts" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair font-heading mb-6">
            Our Purpose-Driven Mission<span className="text-primary">.</span>
          </h2>
          <p className="font-montserrat text-[14px] leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Born from personal transformation and developed with world-leading medical and performance expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-8 xl:gap-12">
          {experts.map((expert, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Expert Top Image */}
              <a href={expert.link} className="w-full relative group block overflow-hidden rounded-xl mb-6 bg-transparent shadow-sm">
                <div className="w-full h-auto overflow-hidden bg-muted">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </a>

              {/* Text Content */}
              <div className="text-center px-4">
                <a href={expert.link} className="hover:text-primary transition-colors inline-block mb-2">
                  <h3 className="text-xl md:text-2xl font-serif text-foreground/90 mb-3">{expert.name}</h3>
                </a>
                <p className="text-sm font-medium text-muted-foreground/90 mb-1">{expert.role}</p>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {expert.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
