import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, Quote, GraduationCap, Award, Stethoscope, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const specialisations = [
  "Sports Medicine & Musculoskeletal Health",
  "Preventive Health Screening",
  "Cardiovascular Risk Assessment",
  "Hormonal & Metabolic Optimisation",
  "Nutritional Medicine",
  "Executive Health Programmes",
];

const qualifications = [
  { title: "MBBS / MBChB", subtitle: "Medical Degree" },
  { title: "MRCGP", subtitle: "Royal College of General Practitioners" },
  { title: "PGCE Sports Medicine", subtitle: "Postgraduate Certificate" },
  { title: "DipION", subtitle: "Institute of Optimum Nutrition" },
];

const publications = [
  {
    title: "The Role of Omega-3 Fatty Acids in Elite Athlete Recovery",
    journal: "British Journal of Sports Medicine, 2023",
  },
  {
    title: "Preventive Health Screening in Professional Football",
    journal: "The Lancet Sports & Exercise, 2022",
  },
  {
    title: "Biomarker-Guided Nutritional Interventions",
    journal: "Journal of Clinical Nutrition, 2021",
  },
];

const testimonials = [
  {
    name: "Premier League Club",
    text: "Dr. Rehman's comprehensive health screening programme identified several subclinical issues in our squad that were addressed before they became performance-limiting injuries.",
  },
  {
    name: "Corporate Executive",
    text: "The executive health assessment was thorough, insightful, and life-changing. The personalised plan has transformed my energy levels and overall wellbeing.",
  },
];

const DoctorProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container px-6">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                Consulting Doctor
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Dr. Ishtiaq Rehman<span className="text-primary">.</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                A highly experienced medical doctor specialising in sports medicine, preventive health, and performance optimisation. Currently consulting for England FA, with extensive experience in elite and corporate healthcare settings.
              </p>

              <div className="mt-8 relative pl-6">
                <Quote className="absolute -left-1 -top-2 w-8 h-8 text-primary/20" />
                <blockquote className="text-muted-foreground italic leading-relaxed border-l-2 border-primary/30 pl-4">
                  "Understanding your internal health today for a better tomorrow — prevention is always more powerful than cure. My approach combines cutting-edge diagnostics with personalised, evidence-based interventions."
                </blockquote>
              </div>

              <div className="mt-8 flex gap-3">
                <Button asChild size="lg">
                  <a href="mailto:info@optimiseperfomance.com">Book a Consultation</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#publications">View Research</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Stethoscope className="w-24 h-24 text-primary/20" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Currently at</p>
                <p className="font-bold text-sm mt-1">England FA</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Experience</p>
                <p className="font-bold text-sm mt-1">20+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Biography</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About<span className="text-primary">.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Ishtiaq Rehman is a passionate and experienced medical doctor with a deep commitment to preventive healthcare and performance medicine. With over 20 years of clinical experience, he brings a holistic, evidence-based approach to patient care.
              </p>
              <p>
                His expertise spans sports medicine, cardiovascular screening, metabolic health, and nutritional interventions. He has worked with elite athletes, professional sports teams, and corporate executives, delivering bespoke health programmes tailored to individual needs.
              </p>
              <p>
                Dr. Rehman's philosophy centres on understanding each patient's unique biochemistry through advanced diagnostic testing, enabling truly personalised healthcare strategies that deliver measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Medical Qualifications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Credentials<span className="text-primary">.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualifications.map((q) => (
              <div
                key={q.title}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <GraduationCap className="w-5 h-5 text-primary mb-3" />
                <p className="font-bold text-sm">{q.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{q.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Areas of Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Specialisations<span className="text-primary">.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialisations.map((spec) => (
              <div
                key={spec}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3"
              >
                <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="font-medium text-sm">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 md:py-24">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Research & Publications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Published Work<span className="text-primary">.</span>
          </h2>
          <div className="max-w-3xl space-y-4">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <BookOpen className="w-5 h-5 text-primary mb-3" />
                <p className="font-bold text-sm">{pub.title}</p>
                <p className="text-xs text-muted-foreground mt-1 italic">{pub.journal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Patient Outcomes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Testimonials<span className="text-primary">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <Quote className="w-6 h-6 text-primary/20 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
                <p className="font-bold text-sm mt-4">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Contact<span className="text-primary">.</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-card border border-border rounded-xl p-5">
                <MapPin className="w-5 h-5 text-primary mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Address</p>
                <p className="text-sm font-medium">The Underground Training Station</p>
                <p className="text-sm text-muted-foreground">Newhall Lane, Hoylake, Wirral, CH47 4BP</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <Phone className="w-5 h-5 text-primary mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+441516326409" className="text-sm font-medium hover:text-primary transition-colors">
                  0151 632 6409
                </a>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <Mail className="w-5 h-5 text-primary mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:info@optimiseperfomance.com" className="text-sm font-medium hover:text-primary transition-colors break-all">
                  info@optimiseperfomance.com
                </a>
              </div>
            </div>
            <Button asChild size="lg" className="mt-10">
              <a href="mailto:info@optimiseperfomance.com">Book a Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorProfile;
