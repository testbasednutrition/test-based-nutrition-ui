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
    <div className="min-h-screen bg-secondary/30 font-sans">
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
          <div className="bg-background border border-border rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Image Side - Left on Desktop */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="relative aspect-[4/5] rounded-2xl bg-secondary overflow-hidden border-4 border-background shadow-md">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg border-2 border-primary/20">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Acceptance Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max bg-background border border-border rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${specialist.accepting_new_clients !== false ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span className="text-sm font-bold">
                    {specialist.accepting_new_clients !== false ? 'Accepting New Clients' : 'Waitlist Only'}
                  </span>
                </div>
              </div>

              {/* Info Side - Right on Desktop */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                  {specialist.category} {specialist.role && `• ${specialist.role.split("—")[0].trim()}`}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-foreground">
                    {specialist.name}
                  </h1>
                  {specialist.rating && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-lg font-bold shrink-0 shadow-sm border border-border">
                      <Star className="w-5 h-5 fill-primary text-primary" />
                      <span>{specialist.rating}</span>
                      <span className="text-muted-foreground font-normal text-sm ml-1">
                        ({specialist.reviewCount} reviews)
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Row */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground font-medium mb-8 bg-secondary/50 p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span>{specialist.location || "London, UK"} • {specialist.currentOrg || "Private Practice"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary shrink-0" />
                    <span>{specialist.consultationType || "Online & In-person"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCcw className="w-5 h-5 text-primary shrink-0" />
                    <span>{specialist.experience || "10+ Years Exp."}</span>
                  </div>
                </div>

                {/* Balance Impact Card */}
                {(specialist.first_balance_result || specialist.second_balance_result) && (
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex-1 flex flex-col justify-center relative overflow-hidden">
                       <Activity className="absolute -right-4 -bottom-4 w-24 h-24 text-primary/5 pointer-events-none" />
                       <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2 relative z-10">Omega 6:3 Balance Impact</p>
                       <div className="flex items-center gap-3 relative z-10">
                          {specialist.first_balance_result && (
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground mb-1 font-medium">Initial Test</p>
                              <p className="text-2xl font-bold text-foreground">{specialist.first_balance_result}</p>
                            </div>
                          )}
                          {specialist.first_balance_result && specialist.second_balance_result && (
                            <ChevronRight className="w-6 h-6 text-primary mx-2" />
                          )}
                          {specialist.second_balance_result && (
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground mb-1 font-medium">After Protocol</p>
                              <p className="text-2xl font-bold text-primary">{specialist.second_balance_result}</p>
                            </div>
                          )}
                       </div>
                    </div>
                  </div>
                )}

                {/* Quote Block */}
                <div className="relative pl-6 mb-10">
                  <Quote className="absolute -left-2 -top-3 w-10 h-10 text-primary/10 rotate-180" />
                  <blockquote className="text-muted-foreground italic text-lg leading-relaxed border-l-4 border-primary pl-5">
                    "{specialist.quote}"
                  </blockquote>
                </div>

                <div className="flex flex-wrap gap-4 pt-2 mt-auto">
                  {specialist.bookingUrl && (
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold shadow-md text-base rounded-xl">
                      <a href={specialist.bookingUrl} target="_blank" rel="noopener noreferrer">
                        {specialist.bookingLabel || "Book Consultation"}
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="lg" className="border-border hover:bg-secondary font-semibold text-base px-8 rounded-xl" asChild>
                    <a href="#contact">Contact Clinic</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Testing Modalities (New) */}
      {(specialist.specialization_tags?.length || specialist.primary_testing_methods?.length) && (
        <section className="py-16 md:py-24 bg-background border-y border-border">
          <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                {/* Specializations */}
                {specialist.specialization_tags && specialist.specialization_tags.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">Conditions & Support</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {specialist.specialization_tags.map(tag => (
                         <span key={tag} className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-semibold bg-secondary/80 text-foreground border border-border">
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
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <TestTube2 className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">Testing & Diagnostics</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                       {specialist.primary_testing_methods.map(method => (
                         <span key={method} className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                           {method}
                         </span>
                       ))}
                    </div>
                    {specialist.other_blood_tests && (
                      <p className="text-sm text-muted-foreground italic pl-3 border-l-2 border-primary/30 mt-4 leading-relaxed">
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
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Main Bio */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">About specialist</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Professional Bio
              </h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                {specialist.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            
            {/* "Why TBN" OR Secondary Image */}
            <div className="space-y-8">
              {specialist.why_joined_tbn && (
                 <div className="bg-background border border-border rounded-3xl p-8 shadow-sm relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5 rotate-180" />
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4 relative z-10">Test-Based Nutrition Journey</p>
                    <h3 className="text-2xl font-bold mb-6 relative z-10">Why I test instead of guess.</h3>
                    <p className="text-foreground/80 leading-relaxed italic relative z-10">
                      "{specialist.why_joined_tbn}"
                    </p>
                 </div>
              )}

              {specialist.secondaryImage && !specialist.why_joined_tbn && (
                <div className="aspect-[4/3] rounded-3xl bg-secondary overflow-hidden border border-border shadow-sm">
                  <img
                    src={specialist.secondaryImage}
                    alt={`${specialist.name} in action`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24 bg-background border-y border-border">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Credentials & Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Qualifications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialist.credentials.map((cred) => (
              <div
                key={cred}
                className="bg-secondary/40 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground/90 leading-snug">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {specialist.gallery_image_urls && specialist.gallery_image_urls.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-3 mb-10">
              <ImageIcon className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Clinic Gallery</h2>
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
        <section className="py-16 md:py-24 bg-background border-y border-border">
          <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                Client Results
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Proven Impact
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialist.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-secondary/40 border border-border rounded-3xl p-8 hover:bg-secondary/60 transition-colors relative"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 rotate-180" />
                  <p className="text-foreground/80 leading-relaxed italic relative z-10 mb-6 break-words">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-lg text-foreground">{t.name}</p>
                    {t.title && <p className="text-sm font-medium text-primary mt-1">{t.title}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Book a Consultation
            </h2>
            <p className="text-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
              Ready to optimize your health with {specialist.name}? Contact their clinic directly using the details below.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 text-left mb-10">
              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:border-primary/50 transition-colors">
                <MapPin className="w-8 h-8 text-primary mb-4 p-1.5 bg-primary/10 rounded-lg" />
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Location</p>
                <p className="text-sm font-semibold">{specialist.clinic_name || specialist.currentOrg || "Private Clinic"}</p>
                <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{specialist.address || specialist.location}</p>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:border-primary/50 transition-colors">
                <Phone className="w-8 h-8 text-primary mb-4 p-1.5 bg-primary/10 rounded-lg" />
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Phone</p>
                <a href={`tel:${specialist.phone_number || "+440000000000"}`} className="text-sm font-semibold hover:text-primary transition-colors block mt-1">
                  {specialist.phone_number || "Contact via Website"}
                </a>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:border-primary/50 transition-colors overflow-hidden">
                <Mail className="w-8 h-8 text-primary mb-4 p-1.5 bg-primary/10 rounded-lg" />
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Email</p>
                <a href={`mailto:${specialist.email_address || "info@testbased.com"}`} className="text-sm font-semibold hover:text-primary transition-colors break-all block mt-1">
                  {specialist.email_address || "Unavailable"}
                </a>
              </div>
            </div>
            
            {specialist.bookingUrl && (
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 h-auto text-lg shadow-md rounded-xl">
                <a href={specialist.bookingUrl} target="_blank" rel="noopener noreferrer">
                  {specialist.bookingLabel || "Book Consultation Now"}
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
