import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "I came to Bryony after struggling with autoimmune symptoms. Her test-based protocol gave me direction and within 10 weeks my energy was back and the brain fog lifted. I now understand how inflammation was affecting me and I finally feel in control.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Client with Fibromyalgia",
    role: "via Bryony Alford (Holistic Therapist)",
  },
  {
    text: "After 15 years of trying to treat rosacea with antibiotics and creams, Nicola helped me understand that inflammation was the root cause. Her test-based approach gave me answers—and relief. My skin is clearer, and my confidence has returned.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Client with Rosacea",
    role: "via Nicola Michael (Skin Health Expert)",
  },
  {
    text: "Training daily demands strong recovery, and Zinzino BalanceOil has been a game changer. My elbow pain has completely gone, recovery feels instant, and my body composition improved. With Sarah’s expert support, my mobility and overall wellbeing have never felt better.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Fitness & Mobility Client",
    role: "via Sarah Abell (TBN Lead Expert)",
  },
  {
    text: "I had been suffering with reoccurring baby loss and the doctors just said try again! I wanted to feel confident in my body and its abilities so I decided to do the test based nutrition with Katherine. I was so shocked at what my body needed, it was so informative.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Fertility & Loss Client",
    role: "via Katherine Burchell (Baby Loss Coach)",
  },
  {
    text: "Sara combined osteopathic treatment with a personalised BalanceOil plan to address both persistent low back pain and worsening perimenopausal symptoms. Within weeks my pain reduced, my sleep improved and my energy returned. I feel stronger and more in control.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Perimenopausal Patient",
    role: "via Sara Lovett (Osteopath)",
  },
  {
    text: "I highly recommend Kareem. He taught me the tools and approaches I need to live a healthy and happy life. Kareem took the time to listen and learn about my lifestyle, then gave me the guidance and support to build good habits.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Mitesh",
    role: "Weight Loss & Performance Client via Dr. Kareem Ibrahim",
  },
  {
    text: "After surgery, I realised recovery isn’t just about what happens in theatre. Mel helped me understand omega balance, inflammation, gut health and healing in a way that made complete sense. I felt empowered, informed, and far more in control of my results.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Post-Operative Recovery Client",
    role: "via Mel Kingdom (Post-Op Specialist)",
  },
  {
    text: "An easy and simple way to check general health, with clear and achievable targets as a result. Particularly enjoyed the two-way communication approach (instead of being told what to do). Would definitely recommend it.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1eb761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Fanny Pierrat-Brichon",
    role: "Health Check Client via Dr. Kate Staveley (GP)",
  },
  {
    text: "As a busy working mum in my 50s, I was overwhelmed by fatigue, weight gain, and hormonal mood swings. Bryony guided me through a personalised protocol using BalanceOil and ZinoBiotic—the changes have been unbelievable. I feel like myself again.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=150",
    name: "Menopause Support Client",
    role: "via Bryony Alford (Holistic Therapist)",
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
