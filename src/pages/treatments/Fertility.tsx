import TreatmentPage from "@/components/TreatmentPage";
import heroImg from "@/assets/treatments/fertility.jpg";

const Fertility = () => (
  <TreatmentPage
    title="The science of nutrition in fertility for men + women"
    subtitle="We have collaborated with leading fertility clinics to create a comprehensive hub, empowering your conception journey."
    body={[
      "1 in 7 Couples in the UK Struggle with Fertility which is deeply influenced by cellular health + your nutritional status.",
      "Our specialised, personalised approach focuses on ensuring that both the embryo and sperm are in their best condition essential for conception and providing the best support for Mummy to be and your unborn baby. Whether you are just beginning your journey to conception, facing difficulties along the way, or undergoing IVF, our elite team of experts are here to support you every step of the way.",
    ]}
    image={heroImg}
  />
);

export default Fertility;
