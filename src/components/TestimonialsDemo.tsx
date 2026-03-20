import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The test-based approach completely changed my understanding of my own health. My energy levels are transformed.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "Sarah Jenkins",
    role: "Marathon Runner",
  },
  {
    text: "Finally, a nutrition plan based on actual blood markers rather than guesswork. The results speak for themselves.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "Marcus Thorne",
    role: "Business Executive",
  },
  {
    text: "As an athlete, reducing inflammation is key. The Omega 6:3 ratio testing gave me the exact insights I needed to recover faster.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "Elena Rodriguez",
    role: "Professional Cyclist",
  },
  {
    text: "The continuous support from my specialist and the clear, data-driven protocols have significantly improved my gut health.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "David Chen",
    role: "Software Engineer",
  },
  {
    text: "I was struggling with chronic fatigue for years. The personalized supplement strategy based on my test results gave me my life back.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "Rachel Foster",
    role: "Teacher",
  },
  {
    text: "Clear, objective, and incredibly effective. Seeing my markers improve on paper as I felt better physically was incredibly motivating.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "Amina Patel",
    role: "Yoga Instructor",
  },
  {
    text: "This isn't just another diet plan. It's truly personalized cellular health management. Highly recommended.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "James Wilson",
    role: "Fitness Coach",
  },
  {
    text: "A game changer for my hormonal balance. The experts here really understand how to interpret the data and apply it practically.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1eb761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "Sophie Dubois",
    role: "Marketing Director",
  },
  {
    text: "My mental clarity and focus have skyrocketed since optimizing my vitamin D and Omega levels through their protocols.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=150",
    name: "Thomas Wright",
    role: "Creative Director",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsDemo = () => {
  return (
    <section className="bg-background py-20 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-border text-primary font-medium tracking-wide text-xs uppercase py-1 px-4 rounded-full bg-primary/5">
              Success Stories
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mt-2 text-foreground">
            What our clients say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how test-based nutrition is transforming lives through measurable, science-backed results.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export { TestimonialsDemo };
