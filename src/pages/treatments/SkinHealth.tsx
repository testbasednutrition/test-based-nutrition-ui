import TreatmentPage from "@/components/TreatmentPage";
import heroImg from "@/assets/treatments/skin-health.jpg";

const SkinHealth = () => (
  <TreatmentPage
    title="Healing Skin from Within: The Root Cause Approach"
    subtitle="Over 60% of People with Skin Conditions Have Underlying Nutritional Deficiencies"
    body={[
      "Chronic skin conditions like eczema, psoriasis, rosacea, and acne are often treated from the outside, but the real cause lies deep within—at the cellular level. Inflammation, Omega-3 to Omega-6 imbalance, poor gut health, and hidden nutrient deficiencies are key drivers of persistent skin issues, disrupting the body's ability to heal and protect itself.",
      "Our science-backed, test-based nutrition approach identifies these imbalances, providing targeted solutions to restore skin health from within. The Zinzino health protocol has transformed lives in as little as 6–8 weeks, reducing inflammation, repairing the gut, and optimising cellular function for lasting results.",
    ]}
    image={heroImg}
  />
);

export default SkinHealth;
