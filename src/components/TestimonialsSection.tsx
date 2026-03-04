import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "The personalised nutrition plan transformed my energy levels and overall wellbeing. The science-backed approach gave me confidence that every recommendation was tailored specifically to my body's needs.",
    name: "Dr. Sarah Mitchell",
    designation: "Sports Medicine Physician",
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "After years of guesswork with supplements, the test-based approach finally gave me clarity. My omega balance and vitamin D levels are now optimal, and I can feel the difference in my recovery and performance.",
    name: "James Harrington",
    designation: "Professional Athlete",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "As a practitioner, I recommend test-based nutrition to all my patients. The data-driven protocols and expert support make it easy to integrate into any health optimisation programme.",
    name: "Dr. Elena Vasquez",
    designation: "Integrative Health Specialist",
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964ae17?q=80&w=1368&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary font-sans">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight font-heading text-foreground">
            Trusted by Experts & Athletes
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Hear from the professionals and individuals who've transformed their health with our science-led approach.
          </p>
        </div>
        <CircularTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
};

export default TestimonialsSection;
