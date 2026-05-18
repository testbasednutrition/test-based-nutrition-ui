import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, Quote, Award, BadgeCheck, Video, RefreshCcw, Star, Activity, CheckCircle2, ChevronRight, TestTube2, Image as ImageIcon } from "lucide-react";
import NotFound from "./NotFound";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";

const SpecialistProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  const specialist = specialists.find((s) => s.slug === slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!specialist) return <NotFound />;

  return (
    <div className="min-h-screen bg-secondary/30 font-montserrat">
      <Navbar alwaysSolid />

      {/* Navigation / Top Area */}
      <div className="pt-24 md:pt-32 pb-4">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <button
            onClick={() => navigate("/specialists")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Specialists Directory
          </button>
        </div>
      </div>

      {/* Hero Profile Area */}
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
            
            {/* Image Side - Left */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden border-[3px] border-secondary shadow-sm">
              <img
                src={specialist.image}
                alt={specialist.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Acceptance Badge overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max bg-background border border-border rounded-full px-5 py-2.5 shadow-md flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${specialist.accepting_new_clients !== false ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                <span className="text-sm font-bold tracking-wide">
                  {specialist.accepting_new_clients !== false ? 'Accepting New Clients' : 'Waitlist Only'}
                </span>
              </div>
            </div>

            {/* Info Side - Right */}
            <div className="flex flex-col pt-2 lg:pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">
                {specialist.category} {specialist.specific_title && `• ${specialist.specific_title}`}
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-8">
                {specialist.name}
              </h1>

              {/* Location & Experience Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-4 bg-background border border-border/80 rounded-xl p-4 shadow-sm">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                  <span className="text-sm font-medium">{specialist.address || specialist.location || "London, UK"}</span>
                </div>
                <div className="flex items-center gap-4 bg-background border border-border/80 rounded-xl p-4 shadow-sm">
                  <RefreshCcw className="w-5 h-5 text-muted-foreground shrink-0" />
                  <span className="text-sm font-medium">{specialist.experience || "10+ Years Exp."}</span>
                </div>
              </div>

              {/* Balance Impact Card */}
              {(specialist.first_balance_result || specialist.second_balance_result) && (
                <div className="bg-background border border-border/80 shadow-sm rounded-2xl p-6 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Omega 6:3 Balance Impact</p>
                    <Activity className="w-5 h-5 text-primary/40" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {specialist.first_balance_result && (
                      <div className="text-center flex-1">
                        <p className="text-xs text-muted-foreground mb-2 font-medium">Initial Test</p>
                        <p className="text-4xl font-bold text-destructive">{specialist.first_balance_result}</p>
                      </div>
                    )}
                    
                    {specialist.first_balance_result && specialist.second_balance_result && (
                      <div className="flex-shrink-0 px-4">
                        <ArrowLeft className="w-6 h-6 text-muted-foreground/30 rotate-180" />
                      </div>
                    )}
                    
                    {specialist.second_balance_result && (
                      <div className="text-center flex-1">
                        <p className="text-xs text-muted-foreground mb-2 font-medium">After Protocol</p>
                        <p className="text-4xl font-bold text-emerald-500">{specialist.second_balance_result}</p>
                      </div>
                    )}

                    {/* Chart Graphic representation */}
                    <div className="hidden sm:flex flex-1 items-end justify-end gap-1 h-12 ml-4">
                      <div className="w-4 bg-destructive/30 rounded-sm" style={{height: '100%'}}></div>
                      <div className="w-4 bg-destructive/50 rounded-sm" style={{height: '80%'}}></div>
                      <div className="w-4 bg-emerald-500/50 rounded-sm" style={{height: '30%'}}></div>
                      <div className="w-4 bg-emerald-500 rounded-sm" style={{height: '15%'}}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quote Block */}
              {specialist.quote && (
                <div className="relative pl-6 mb-10 mt-4">
                  <blockquote className="text-muted-foreground italic text-lg leading-relaxed border-l-2 border-primary/20 pl-5">
                    "{specialist.quote}"
                  </blockquote>
                </div>
              )}

              {/* Contact Button */}
              <div className="mt-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 h-auto text-sm font-bold tracking-wide uppercase rounded-xl w-max shadow-md">
                  <a href="#contact">Contact Clinic</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Testing Modalities */}
      {(specialist.specialization_tags?.length || specialist.primary_testing_methods?.length) && (
        <section className="py-16 bg-background border-y border-border/50">
          <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
             <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                
                {/* Specializations */}
                {specialist.specialization_tags && specialist.specialization_tags.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">Conditions & Support</h2>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                       {specialist.specialization_tags.map(tag => (
                         <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-transparent text-muted-foreground border border-border/80">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                )}

                {/* Testing Methods */}
                {specialist.primary_testing_methods && specialist.primary_testing_methods.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <TestTube2 className="w-5 h-5 text-primary" />
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">Testing & Diagnostics</h2>
                    </div>
                    <div className="flex flex-wrap gap-2.5 mb-4">
                       {specialist.primary_testing_methods.map(method => (
                         <span key={method} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-primary/5 text-muted-foreground border border-primary/20">
                           <TestTube2 className="w-3.5 h-3.5 mr-2 opacity-50" />
                           {method}
                         </span>
                       ))}
                    </div>
                    {specialist.other_blood_tests && (
                      <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-sm">
                        * {specialist.other_blood_tests}
                      </p>
                    )}
                  </div>
                )}

             </div>
          </div>
        </section>
      )}

      {/* Bio & Journey Component Area */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Main Bio */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">About specialist</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                Professional Bio
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
                {specialist.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            
            {/* "Why TBN" OR Secondary Image */}
            <div className="space-y-8 mt-4 lg:mt-0">
              {specialist.why_joined_tbn && (
                 <div className="bg-background border border-border/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] rounded-3xl p-10 relative">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 relative z-10">Test-Based Nutrition Journey</p>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 relative z-10">Why I test instead of guess.</h3>
                    <div className="relative">
                      <span className="text-5xl font-serif text-border absolute -top-4 -left-4">"</span>
                      <p className="text-muted-foreground leading-relaxed italic relative z-10 text-sm">
                        {specialist.why_joined_tbn}
                      </p>
                      <span className="text-5xl font-serif text-border absolute -bottom-8 -right-2">"</span>
                    </div>
                 </div>
              )}

              {specialist.secondaryImage && !specialist.why_joined_tbn && (
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border-[3px] border-secondary shadow-sm">
                  <img
                    src={specialist.secondaryImage}
                    alt={`${specialist.name} in action`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">
              Credentials & Expertise
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qualifications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {specialist.credentials
              .flatMap(cred => cred.split(/[•,]/).map(c => c.trim()))
              .filter(Boolean)
              .map((cred, idx) => (
              <div
                key={`${cred}-${idx}`}
                className="bg-background border border-border/60 rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="font-medium text-muted-foreground text-sm leading-snug">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {specialist.gallery_image_urls && specialist.gallery_image_urls.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-3 mb-8">
              <ImageIcon className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Clinic Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {specialist.gallery_image_urls.map((url, idx) => (
                 <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-border shadow-sm group">
                    <img src={url} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
               ))}
               {/* Pad with secondary image if we only have a few, just to look nice */}
               {specialist.gallery_image_urls.length < 3 && specialist.secondaryImage && (
                 <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-sm group">
                    <img src={specialist.secondaryImage} alt="Clinic Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
               )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {specialist.testimonials && specialist.testimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">
                Client Results
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Proven Impact
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialist.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-background border border-border/80 rounded-2xl p-8 relative flex flex-col shadow-sm"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 rotate-180" />
                  <p className="text-muted-foreground leading-relaxed italic relative z-10 mb-8 text-sm">"{t.text}"</p>
                  
                  <div className="mt-auto">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-widest">{t.name}</p>
                    {t.title && <p className="text-xs text-muted-foreground mt-1">{t.title}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="py-16 bg-background">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="bg-primary rounded-3xl p-8 md:p-12 w-full mx-auto shadow-xl">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              
              {/* Left: Text & CTA */}
              <div className="md:col-span-5 text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/80 mb-2">Get in Touch</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Book a Consultation</h2>
                <p className="text-white/80 text-sm mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
                  Ready to optimize your health with {specialist.name}? Contact their clinic directly using the details below.
                </p>
                {specialist.bookingUrl && (
                  <Button asChild className="bg-secondary text-primary hover:bg-white font-semibold px-8 py-5 h-auto rounded-xl transition-colors w-full sm:w-auto shadow-sm">
                    <a href={specialist.bookingUrl} target="_blank" rel="noopener noreferrer">
                      {specialist.bookingLabel || "Book Consultation Now"}
                    </a>
                  </Button>
                )}
              </div>

              {/* Right: Contact Details */}
              <div className="md:col-span-7 grid sm:grid-cols-12 gap-6 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-10">
                
                <div className="sm:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                  <MapPin className="w-5 h-5 text-secondary mb-3" />
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mb-1">Location</p>
                  <p className="text-sm font-semibold text-white">{specialist.clinic_name || specialist.currentOrg || "Private Clinic"}</p>
                  <p className="text-xs text-white/70 mt-1 whitespace-pre-wrap leading-relaxed">{specialist.address || specialist.location}</p>
                </div>

                <div className="sm:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                  <Phone className="w-5 h-5 text-secondary mb-3" />
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mb-1">Phone</p>
                  <a href={`tel:${specialist.phone_number || "+440000000000"}`} className="text-sm font-semibold text-white hover:text-secondary transition-colors block mt-1">
                    {specialist.phone_number || "Contact via Website"}
                  </a>
                </div>

                <div className="sm:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                  <Mail className="w-5 h-5 text-secondary mb-3" />
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mb-1">Email</p>
                  <a href={`mailto:${specialist.email_address || "info@testbased.com"}`} className="text-sm font-semibold text-white hover:text-secondary transition-colors block mt-1 whitespace-nowrap">
                    {specialist.email_address || "Unavailable"}
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialistProfile;
