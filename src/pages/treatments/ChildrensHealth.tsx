import TreatmentPage from "@/components/TreatmentPage";
import heroImg from "@/assets/treatments/childrens-health.jpg";

const ChildrensHealth = () => (
  <TreatmentPage
    title="Brain Health + Nourishing Neurodivergent Children to Teens"
    subtitle="97% of neurodivergent children have nutritional deficiencies proven effecting focus, mood, and sleep."
    body={[
      "We specialise in taking charge of picky eating habits and elevating family nutrition to a profound, life-changing level. Led by a team of esteemed doctors and scientists in neurodiversity, we provide authoritative guidance to help neurodiverse families thrive. With our expert strategies and protocols, we alleviate the stress from mealtimes and address deficiencies effectively.",
      "It's time to take control of yours and your family's nutrition and embark on a journey to transformative wellness test-based nutrition.",
    ]}
    image={heroImg}
    quizUrl="https://calendar.app.google/CDYDAvjFmMvJP3S88"
  />
);

export default ChildrensHealth;
