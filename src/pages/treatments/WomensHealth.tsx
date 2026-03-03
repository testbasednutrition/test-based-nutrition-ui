import TreatmentPage from "@/components/TreatmentPage";
import heroImg from "@/assets/treatments/womens-health.jpg";

const WomensHealth = () => (
  <TreatmentPage
    title="The science behind women's health + wellbeing"
    subtitle="1 in 3 women in the UK face significant health challenges, profoundly influenced by cellular health and nutritional status."
    body={[
      "Results Driven Solutions Nutrition for Coaches, Therapists & Their Clients.",
      "Our specialised, science-led approach empowers professionals to integrate test-based nutrition into their practice, while giving clients free consultations and personalised protocols. With up to 70% of women facing hidden deficiencies disrupting hormones, energy, and mental health, we translate cutting-edge science into simple, effective solutions. From fertility and pregnancy to perimenopause and menopause, we help women unlock their best health through measurable results.",
    ]}
    image={heroImg}
    extraButtons={[{ label: "Partner With Us", href: "https://calendar.app.google/CDYDAvjFmMvJP3S88" }]}
  />
);

export default WomensHealth;
