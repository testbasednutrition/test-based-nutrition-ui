import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";

const ClinicsDirectory = () => {
  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  // Filter for approved partner businesses: profiles with a clinic_name
  const dynamicClinics = specialists.filter(s => s.is_approved !== false && s.clinic_name);

  return (
    <div className="min-h-screen bg-secondary/30 font-sans">
      <Navbar alwaysSolid />

      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-background relative overflow-hidden border-b border-border">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Partner Clinics
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              Find esteemed practice locations offering targeted test-based nutrition protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              {dynamicClinics.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
                  {dynamicClinics.map((clinic) => (
                    <div
                      key={clinic.slug}
                      className="bg-background rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative"
                    >
                      {/* Clinic Image */}
                      <div className="aspect-[16/9] overflow-hidden relative bg-secondary">
                        <img
                          src={clinic.image}
                          alt={clinic.clinic_name || clinic.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border border-border/50">
                          <Building2 className="w-3.5 h-3.5 text-primary" />
                          Clinic Partner
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
                          {clinic.clinic_name || clinic.name}
                        </h3>
                        
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="font-medium line-clamp-1">{clinic.address || clinic.location || "Consult directly"}</span>
                        </div>

                        <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-3">
                          {clinic.bio && clinic.bio[0] ? clinic.bio[0] : ""}
                        </p>

                        {/* Specialties Pills */}
                        {clinic.specialization_tags && clinic.specialization_tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-8">
                            {clinic.specialization_tags.slice(0, 3).map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                              >
                                {specialty}
                              </span>
                            ))}
                            {clinic.specialization_tags.length > 3 && (
                              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-muted-foreground border border-border">
                                +{clinic.specialization_tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Footer Button - Pushed to bottom */}
                        <div className="pt-6 mt-auto border-t border-border">
                          <Button
                            asChild
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12 shadow-sm group-hover:shadow-md transition-all"
                          >
                            <Link to={`/specialists/${clinic.slug}`}>
                              View Profile
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-background border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-2">No clinics found</h3>
                  <p className="text-muted-foreground">Currently there are no partner clinics listed.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClinicsDirectory;

