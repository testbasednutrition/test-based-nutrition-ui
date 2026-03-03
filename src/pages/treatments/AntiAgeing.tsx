import TreatmentPage from "@/components/TreatmentPage";
import heroImg from "@/assets/treatments/anti-ageing.jpg";

const AntiAgeing = () => (
  <TreatmentPage
    title="Bespoke Anti-Ageing: Where Cellular Health Meets Skin Longevity"
    subtitle="Up to 80% of visible skin ageing is linked to internal biological processes — including inflammation, oxidative stress and collagen decline."
    body={[
      "We specialise in supporting anti-ageing skin from within by focusing on cellular health, Omega balance and natural collagen synthesis. Led by experts in test-based nutrition and preventative skin health, we identify internal imbalances that may influence inflammation, gut health and nutrient absorption — key factors in skin ageing.",
      "Through personalised testing and targeted protocols, we support the body's ability to produce collagen naturally, optimise cellular function and nourish skin at its foundation.",
      "Take a bespoke, science-led approach to skin longevity — supporting healthier, stronger, more radiant skin from within with test-based nutrition.",
    ]}
    image={heroImg}
  />
);

export default AntiAgeing;
