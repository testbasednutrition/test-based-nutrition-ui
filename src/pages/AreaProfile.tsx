import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Building2, ArrowRight } from "lucide-react";
import { getSpecialistsByLocation } from "@/data/specialists";
import { clinics } from "@/data/clinics";

const AreaProfile = () => {
  const { area } = useParams<{ area: string }>();
  const navigate = useNavigate();

  // Clean up the URL slug for display (e.g., "london" -> "London", "new-york" -> "New York")
  const formattedAreaName = area 
    ? area.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "Unknown Area";

  // Filter our data models based on the area string
  const localSpecialists = getSpecialistsByLocation(formattedAreaName);
  
  // Custom simple filter for clinics since we didn't add a helper in clinics.ts
  const localClinics = clinics.filter(c => 
    c.location.toLowerCase().includes(formattedAreaName.toLowerCase()) || 
    c.address.toLowerCase().includes(formattedAreaName.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-secondary/30 font-sans">
      <Navbar />

      {/* Navigation Area */}
      <div className="pt-24 md:pt-32 pb-4">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <button
            onClick={() => navigate("/specialists")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Directory
          </button>
        </div>
      </div>

      {/* SEO Hero Area */}
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="bg-background border border-border rounded-3xl p-8 md:p-14 shadow-sm relative overflow-hidden text-center">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                 <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                Local Directory
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
                Test-Based Nutrition in {formattedAreaName}
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
                Discover our network of verified specialists and partnered clinics operating within the {formattedAreaName} area, dedicated to optimizing your health through functional testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Clinics Section */}
      {localClinics.length > 0 && (
         <section className="py-12 md:py-16">
           <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
             <div className="mb-10">
               <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
                 <Building2 className="w-6 h-6 text-primary" />
                 Partner Clinics in {formattedAreaName}
               </h2>
               <p className="text-muted-foreground">Premium physical locations offering targeted protocols.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {localClinics.map((clinic) => (
                 <div key={clinic.slug} className="bg-background rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                   <div className="aspect-[16/9] overflow-hidden relative bg-secondary">
                     <img src={clinic.image} alt={clinic.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                   </div>
                   <div className="p-6 md:p-8 flex flex-col flex-grow">
                     <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{clinic.name}</h3>
                     <p className="text-sm text-muted-foreground mb-6">{clinic.address}</p>
                     <div className="pt-6 mt-auto border-t border-border">
                       <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12 shadow-sm group-hover:shadow-md transition-all">
                         <Link to={`/clinics/${clinic.slug}`}>
                           View Clinic Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Local Specialists Grid */}
      {localSpecialists.length > 0 && (
        <section className="py-12 md:py-16 bg-background border-t border-border">
           <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
             <div className="mb-10">
               <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                 Specialists in {formattedAreaName}
               </h2>
               <p className="text-muted-foreground">Certified professionals available for consultations in your area.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
               {localSpecialists.map((specialist) => (
                 <div key={specialist.slug} className="bg-secondary/40 rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative">
                   <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                     {specialist.rating ? `★ ${specialist.rating}` : "Featured"}
                   </div>
                   
                   <div className="aspect-[4/3] overflow-hidden relative bg-background border-b border-border">
                     <img src={specialist.image} alt={specialist.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
                   </div>
   
                   <div className="relative p-6 md:p-8 flex flex-col flex-grow">
                     <p className="text-sm font-bold uppercase tracking-widest text-primary mb-1">{specialist.category}</p>
                     <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">{specialist.name}</h3>
                     <p className="text-sm text-foreground/70 mb-6">{specialist.role}</p>
   
                     <div className="pt-6 mt-auto border-t border-border/50">
                       <Button asChild className="w-full bg-background border border-border hover:bg-secondary text-foreground font-semibold rounded-xl h-12 shadow-sm transition-all">
                         <Link to={`/specialists/${specialist.slug}`}>
                           View Profile
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

      {/* Fallback Empty State / Global CTA */}
      <section className="py-16 md:py-24 bg-primary/5 border-t border-primary/10">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {localClinics.length === 0 && localSpecialists.length === 0 
              ? `We are expanding our physical presence in ${formattedAreaName}.` 
              : `Can't find exactly what you're looking for locally?`}
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Our global network of expert specialists offer comprehensive online consultations regardless of your geographical location.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 shadow-md rounded-xl">
             <Link to="/specialists">Browse Global Online Specialists</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreaProfile;
