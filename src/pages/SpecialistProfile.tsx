import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, Quote, Award } from "lucide-react";
import { getSpecialistBySlug } from "@/data/specialists";
import NotFound from "./NotFound";

const SpecialistProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const specialist = slug ? getSpecialistBySlug(slug) : undefined;

  if (!specialist) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container px-6">
          <button
            onClick={() => navigate("/specialists")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Specialists
          </button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                {specialist.category}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {specialist.name}<span className="text-primary">.</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {specialist.role}
              </p>

              {specialist.omegaResults && (
                <div className="mt-4 inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1.5 rounded-lg">
                  Omega Balance: {specialist.omegaResults}
                </div>
              )}

              {/* Quote */}
              <div className="mt-8 relative pl-6">
                <Quote className="absolute -left-1 -top-2 w-8 h-8 text-primary/20" />
                <blockquote className="text-muted-foreground italic leading-relaxed border-l-2 border-primary/30 pl-4">
                  "{specialist.quote}"
                </blockquote>
              </div>

              <div className="mt-8 flex gap-3">
                {specialist.bookingUrl && (
                  <Button asChild size="lg">
                    <a href={specialist.bookingUrl} target="_blank" rel="noopener noreferrer">
                      {specialist.bookingLabel || "Book Now"}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {specialist.currentOrg && (
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Currently at</p>
                  <p className="font-bold text-sm mt-1">{specialist.currentOrg}</p>
                </div>
              )}
              {specialist.experience && (
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Experience</p>
                  <p className="font-bold text-sm mt-1">{specialist.experience}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Biography</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bio<span className="text-primary">.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {specialist.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            {specialist.secondaryImage && (
              <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
                <img
                  src={specialist.secondaryImage}
                  alt={`${specialist.name} in action`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
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
            {specialist.credentials.map((cred) => (
              <div
                key={cred}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow flex items-start gap-3"
              >
                <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="font-medium text-sm">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {specialist.testimonials && specialist.testimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Client Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Proven Impact<span className="text-primary">.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialist.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <Quote className="w-6 h-6 text-primary/20 mb-3" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
                  <div className="mt-4">
                    <p className="font-bold text-sm">{t.name}</p>
                    {t.title && <p className="text-xs text-primary mt-0.5">{t.title}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to work with {specialist.name}? Get in touch to book a consultation.
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
            {specialist.bookingUrl && (
              <Button asChild size="lg" className="mt-10">
                <a href={specialist.bookingUrl} target="_blank" rel="noopener noreferrer">
                  {specialist.bookingLabel || "Book Now"}
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialistProfile;
