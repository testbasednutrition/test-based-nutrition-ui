import TreatmentPage from "@/components/TreatmentPage";
import heroImg from "@/assets/treatments/mens-health.jpg";

const MensHealth = () => (
  <TreatmentPage
    title="The Science of Men's Health: Optimising Every Generation"
    subtitle="1 in 2 Men Will Face a Chronic Health Condition—Nutritional Deficiencies Are the Root Cause."
    body={[
      "Men's health evolves across generations, from puberty and peak performance years to midlife vitality and healthy ageing. Yet, many men suffer from hidden nutritional deficiencies that compromise cellular health, leading to hormonal imbalances, inflammation, gut dysfunction, and cognitive decline.",
      "Our science-backed, test-based nutrition approach identifies these deficiencies, helping to optimise men's health at every stage of life. We create personalised strategies to support strength, energy, and resilience through every phase of life.",
      "Take control of your health—start with precision testing to fuel a stronger, healthier future.",
    ]}
    image={heroImg}
  />
);

export default MensHealth;
