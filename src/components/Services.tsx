import { Gallery4, Gallery4Props } from "@/components/ui/gallery4";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const servicesData: Gallery4Props = {
  title: "Personalised Health Pathways",
  description: "Each condition pathway includes tailored testing profiles, a complimentary practitioner consultation, and personalised nutrition protocols designed around your results.",
  items: [
    {
      id: "womens-health",
      title: "Women's Health",
      description: "From puberty to healthy ageing, we support hormonal balance, fertility, pregnancy, and menopause.",
      href: "/treatments/womens-health",
      image: "/services/womens-health-v2.jpg",
    },
    {
      id: "mens-health",
      title: "Men's Health",
      description: "Targeted testing and personalised protocols designed to support testosterone balance, metabolic health and energy.",
      href: "/treatments/mens-health",
      image: "/services/mens-health-v2.jpg",
    },
    {
      id: "childrens-health",
      title: "Children's Health",
      description: "Supporting growth, brain development and immune health through personalised nutrition and preventative testing.",
      href: "/treatments/childrens-health",
      image: "/services/childrens-health-v2.jpg",
    },
    {
      id: "neurodivergence",
      title: "Neurodivergence",
      description: "Targeted nutrition strategies designed to support focus, cognitive health and brain function.",
      href: "/treatments/neurodivergence",
      image: "/services/neurodivergence-v2.jpg",
    },
    {
      id: "skin-health",
      title: "Skin Health",
      description: "Personalised testing helps identify factors influencing acne, inflammation and hormonal skin concerns.",
      href: "/treatments/skin-health",
      image: "/services/skin-health-v2.jpg",
    },
    {
      id: "sports-performance",
      title: "Sports Performance",
      description: "Science-led nutrition programmes designed to optimise energy, recovery and athletic performance.",
      href: "/treatments/sports-performance",
      image: "/services/sports-performance-v2.jpg",
    },
  ],
};

const Services = () => {
  return (
    <div className="bg-background pb-16 md:pb-24">
      <Gallery4 
        title={servicesData.title}
        description={servicesData.description}
        items={servicesData.items}
        compact={true}
      />
      <div className="container mx-auto px-4 sm:px-6 mt-0 md:mt-2 text-center max-w-4xl flex flex-col items-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-playfair font-heading mb-4 text-foreground">
          Every pathway begins with personalised testing
        </h3>
        <p className="font-montserrat text-[14px] leading-relaxed text-muted-foreground max-w-3xl mb-8">
          Your practitioner will review your health history and recommend a tailored blood testing profile, followed by a complimentary consultation to design your personalised nutrition protocol.
        </p>
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary/5 hover:text-primary transition-colors bg-transparent border-[1.5px] rounded-sm px-8 py-6 text-sm font-semibold uppercase tracking-wider group" 
          asChild
        >
          <a href="/treatments">
            Explore Pathway 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Services;
