import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Quote, Trophy, Target, TrendingUp, Flame, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const career = [
  { year: "2024", achievement: "Commonwealth Games Gold Medal" },
  { year: "2023", achievement: "World Championship Bronze Medal" },
  { year: "2022", achievement: "Olympic Games — Quarter Finals" },
  { year: "2021", achievement: "European Championship Silver Medal" },
  { year: "2020", achievement: "National Champion — 3rd Consecutive Title" },
];

const stats = [
  { label: "International Caps", value: "85+" },
  { label: "Career Medals", value: "14" },
  { label: "Olympic Cycles", value: "3" },
  { label: "Years Competing", value: "12" },
];

const nutritionJourney = {
  before: {
    omega: "14:1",
    label: "Before Programme",
    issues: ["Frequent injuries", "Slow recovery times", "Low energy in training"],
  },
  after: {
    omega: "3:1",
    label: "After 6 Months",
    improvements: ["60% fewer injuries", "Faster post-match recovery", "Consistent high performance"],
  },
};

const testimonial = {
  text: "Working with the Test-Based Nutrition team completely transformed my approach to fuelling my body. The personalised protocol based on my blood work showed me exactly where I was deficient. Within six months, my Omega 6:3 ratio went from 14:1 to 3:1, and the difference in my recovery and performance was night and day. I wish I'd done this years ago.",
};

const AthleteProfile = () => {
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
                Professional Athlete
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Dave Ryding<span className="text-primary">.</span>
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                English World Cup Alpine Ski Racer & Slalom Specialist
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                A world-class alpine ski racer who has competed in four Olympic Games and secured GB's only ever World Cup race victory. Dave's commitment to marginal gains through test-based nutrition has been a cornerstone of his sustained elite performance.
              </p>

              {/* Stats bar */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="mailto:info@optimiseperfomance.com">Get the Same Protocol</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Trophy className="w-24 h-24 text-primary/20" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Sport</p>
                <p className="font-bold text-sm mt-1">Alpine Skiing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Quote */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
              "{testimonial.text}"
            </blockquote>
            <p className="mt-6 font-bold">Dave Ryding</p>
            <p className="text-sm text-primary">World Cup Alpine Ski Racer</p>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Career Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Achievements<span className="text-primary">.</span>
          </h2>
          <div className="max-w-2xl space-y-3">
            {career.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 rounded-lg px-3 py-2 shrink-0">
                  <span className="font-bold text-primary text-sm">{item.year}</span>
                </div>
                <p className="font-medium text-sm">{item.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Transformation */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Nutrition Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            The Transformation<span className="text-primary">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* Before */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-muted-foreground" />
                <p className="font-bold text-sm">{nutritionJourney.before.label}</p>
              </div>
              <p className="text-3xl font-bold text-muted-foreground mb-4">
                Omega 6:3 — <span className="text-destructive">{nutritionJourney.before.omega}</span>
              </p>
              <ul className="space-y-2">
                {nutritionJourney.before.issues.map((issue) => (
                  <li key={issue} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-card border border-primary/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <p className="font-bold text-sm">{nutritionJourney.after.label}</p>
              </div>
              <p className="text-3xl font-bold mb-4">
                Omega 6:3 — <span className="text-primary">{nutritionJourney.after.omega}</span>
              </p>
              <ul className="space-y-2">
                {nutritionJourney.after.improvements.map((imp) => (
                  <li key={imp} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Flame className="w-3.5 h-3.5 text-primary shrink-0" />
                    {imp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Want the Same Results?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Journey<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Get the same personalised, test-based nutrition protocol used by elite athletes.
            </p>
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
              <a href="mailto:info@optimiseperfomance.com">Get Started</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AthleteProfile;
