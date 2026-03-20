import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, Building2, ArrowRight } from "lucide-react";
import { getClinicBySlug } from "@/data/clinics";
import { getSpecialistBySlug } from "@/data/specialists";
import NotFound from "./NotFound";

const ClinicProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const clinic = slug ? getClinicBySlug(slug) : undefined;

  if (!clinic) return <NotFound />;

  // Hydrate the specialist slugs into actual specialist objects for rendering
  const linkedSpecialists = clinic.specialistSlugs
    .map(specialistSlug => getSpecialistBySlug(specialistSlug))
    .filter(specialist => specialist !== undefined);

  return (
    <div className="min-h-screen bg-secondary/30 font-sans">
      <Navbar alwaysSolid />

      {/* Navigation Area */}
      <div className="pt-24 md:pt-32 pb-4">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <button
            onClick={() => navigate("/clinics")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Clinics Directory
          </button>
        </div>
      </div>

      {/* Hero Clinic Area */}
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="bg-background border border-border rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Image Side */}
              <div className="lg:col-span-6 relative">
                <div className="aspect-[16/10] rounded-2xl bg-secondary overflow-hidden border border-border shadow-md">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info Side */}
              <div className="lg:col-span-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Clinic Partner
                </p>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-4">
                  {clinic.name}
                </h1>
                
                <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium mb-6">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>{clinic.address}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {clinic.specialties.map(specialty => (
                    <span key={specialty} className="inline-flex items-center px-3 py-1 rounded-md text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 flex-1 rounded-xl shadow-md">
                    <a href={`mailto:${clinic.contactEmail}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email Clinic
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-border hover:bg-secondary font-semibold px-8 flex-1 rounded-xl" asChild>
                    <a href={`tel:${clinic.contactPhone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Clinic
                    </a>
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background border-y border-border">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              About {clinic.name}
            </h2>
            <p className="text-xl leading-relaxed text-foreground/80">
              {clinic.description}
            </p>
          </div>
        </div>
      </section>

      {/* Linked Specialists Grid */}
      {linkedSpecialists.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/30">
           <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div>
                 <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Our Practitioners</p>
                 <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Meet the Specialists
                 </h2>
               </div>
               <p className="text-muted-foreground text-lg max-w-xl">
                 Highly qualified test-based nutrition specialists offering consultations directly through {clinic.name}.
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
               {linkedSpecialists.map((specialist) => (
                 <div
                   key={specialist.slug}
                   className="bg-background rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative"
                 >
                   <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                     {specialist.rating ? `★ ${specialist.rating}` : "Featured"}
                   </div>
                   
                   <div className="aspect-[4/3] overflow-hidden relative bg-secondary">
                     <img
                       src={specialist.image}
                       alt={specialist.name}
                       className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                   </div>
   
                   <div className="relative p-6 md:p-8 flex flex-col flex-grow bg-background -mt-8 rounded-t-3xl border-t border-transparent group-hover:border-border transition-colors">
                     <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">
                       {specialist.category}
                     </p>
                     <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors text-foreground">
                       {specialist.name}
                     </h3>
                     <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                       {specialist.role}
                     </p>
   
                     <div className="space-y-2 mb-6 text-sm text-foreground/80">
                       <div className="flex flex-wrap gap-2 mb-2">
                         {specialist.testingExpertise?.[0] && (
                           <span className="px-2 py-1 rounded-md bg-secondary border border-border text-xs font-medium">
                             {specialist.testingExpertise[0]}
                           </span>
                         )}
                         {specialist.testingExpertise?.[1] && (
                           <span className="px-2 py-1 rounded-md bg-secondary border border-border text-xs font-medium">
                             {specialist.testingExpertise[1]}
                           </span>
                         )}
                       </div>
                     </div>
   
                     <div className="pt-6 mt-auto border-t border-border">
                       <Button
                         asChild
                         className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12 shadow-sm group-hover:shadow-md transition-all"
                       >
                         <Link to={`/specialists/${specialist.slug}`}>
                           View Profile
                           <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                         </Link>
                       </Button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ClinicProfile;
