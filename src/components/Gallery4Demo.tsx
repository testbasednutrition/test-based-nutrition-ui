import { Gallery4, Gallery4Props } from "@/components/ui/gallery4";

const demoData: Gallery4Props = {
  title: "Case Studies",
  description:
    "Discover how our specialists are leveraging test-based nutrition protocols to build exceptional patient outcomes. These case studies showcase real-world health transformations.",
  items: [
    {
      id: "gut-health",
      title: "Gut Microbiome Repair",
      description:
        "Explore how targeted probiotic therapy combined with dietary shifts drastically reduced systemic inflammation in a 42-year-old patient suffering from chronic IBS.",
      href: "/news",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "omega-balance",
      title: "Omega 6:3 Rebalancing",
      description:
        "Discover how a professional athlete improved their recovery times and reduced muscle soreness by optimising their Omega 6:3 ratio from a highly inflamed 18:1 down to a balanced 3:1.",
      href: "/news",
      image:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "heart-health",
      title: "Cardiovascular Risk Reduction",
      description:
        "Learn how a combination of rigorous lipid panel testing and lifestyle interventions dropped a patient's cardiovascular risk indicators to baseline within 4 months.",
      href: "/news",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "mental-health",
      title: "Optimising Mental Resilience",
      description:
        "See how correcting Vitamin D deficiencies and adjusting micronutrient intake significantly improved mood stability and cognitive function in high-stress professionals.",
      href: "/news",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
