import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const clientResults = [
  {
    name: "Dave Ryding",
    title: "English World Cup alpine ski racer, slalom specialist",
    text: "After incorporating omega-3-rich oily fish into my daily routine for over three years, my performance skyrocketed. From competing in four Olympic Games to securing victories in GB's only World Cup Race, the marginal gains were undeniable. My Omega 3 ratio improved from 5:1 to an impressive 2:1.",
  },
  {
    name: "Mike Grundy",
    title: "English professional mixed martial artist",
    text: "As an ex-Olympic freestyle wrestler and Commonwealth Medalist turned UFC contracted athlete, optimal performance is non-negotiable. My Omega 6:3 ratio drastically shifted from 18:1 to a balanced 3:1, enhancing my alertness and reducing post-training aches.",
  },
  {
    name: "Neil Parsley",
    title: "Professional Rugby Player, Warrington Wolves & Lancashire Lynx RLFC",
    text: "As a professional rugby player battling asthma, eczema, and frequent illnesses, maintaining peak performance seemed like an uphill battle. By focusing on optimising my Omega 6:3 ratio, I went from a concerning 11:1 ratio to a reassuring 2:1 balance.",
  },
];

const credentials = [
  "BSc Sport Science",
  "UK SCA Credited Professional",
  "25+ Years Elite Coaching Experience",
  "Multiple Olympic Cycles (Summer & Winter)",
  "International Rugby & Football",
];

const Specialist = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
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
            {/* Left: Info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                Consulting Performance Coach
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Neil Parsley<span className="text-primary">.</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                An elite performance coach with over 25 years of experience, currently consulting for England FA and Manchester City, having worked with Olympic and professional athletes internationally.
              </p>

              {/* Quote */}
              <div className="mt-8 relative pl-6">
                <Quote className="absolute -left-1 -top-2 w-8 h-8 text-primary/20" />
                <blockquote className="text-muted-foreground italic leading-relaxed border-l-2 border-primary/30 pl-4">
                  "If You're Not Assessing, You're Guessing — This principle has guided my training and coaching philosophy throughout my 25 year career. It reflects my commitment to precision and individualised approaches. I am excited to partner with Test-Based Nutrition, as our ethos aligns perfectly."
                </blockquote>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="mailto:info@optimiseperfomance.com">Book a Consultation</a>
                </Button>
              </div>
            </div>

            {/* Right: Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
                <img
                  src="https://test-basednutrition.com/assets/images/optimise-gallery-9-1256x852.jpeg"
                  alt="Neil Parsley celebrating with trophy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Currently at</p>
                <p className="font-bold text-sm mt-1">England FA & Manchester City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Biography</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bio<span className="text-primary">.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Neil Parsley is a passionate elite performance coach, having worked with Olympic and professional athletes. He is currently consulting to England FA and Manchester City. Neil also privately trains numerous English Premiership footballers over the last 5 seasons; both in season and abroad on multiple training camps.
              </p>
              <p>
                With over 25 years of dedicated experience in the world of sports, his expertise lies in connecting with athletes, coaches, leaders, and key stakeholders at a high level. Neil's experience extends to the international stage, having coached senior podium athletes across multiple Summer and Winter Olympic cycles, international rugby, and international football.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Credentials & Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Qualifications<span className="text-primary">.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((cred) => (
              <div
                key={cred}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-3" />
                <p className="font-medium text-sm">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Client Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Proven Impact<span className="text-primary">.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {clientResults.map((client) => (
              <div
                key={client.name}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg">{client.name}</h3>
                <p className="text-primary text-xs font-medium mt-1">{client.title}</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {client.text}
                </p>
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
              Contact Info<span className="text-primary">.</span>
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
              <a href="mailto:info@optimiseperfomance.com">Book Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Specialist;
