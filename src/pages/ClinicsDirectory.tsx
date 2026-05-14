import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Search, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { clinics } from "@/data/clinics";
import { type SpecialistCategory } from "@/data/specialists";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchField = ({ 
  icon: Icon, 
  label, 
  placeholder,
  value,
  onChange
}: { 
  icon: LucideIcon; 
  label: string; 
  placeholder: string;
  value?: string;
  onChange?: (val: string) => void;
}) => (
  <div className="flex bg-background items-center gap-2.5 px-4 py-2 flex-1 min-w-[200px] border-b md:border-b-0 md:border-r border-border last:border-0 hover:bg-secondary/30 transition-colors">
    <Icon className="w-4 h-4 text-muted-foreground" />
    <div className="flex flex-col w-full gap-0.5">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
        {label}
      </span>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder} 
        className="text-sm font-semibold bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 w-full p-0 h-5"
      />
    </div>
  </div>
);

const ClinicsDirectory = () => {
  const [activeCategory, setActiveCategory] = useState<SpecialistCategory>("All");
  const [locationSearch, setLocationSearch] = useState("");

  const dynamicClinics = clinics.filter(c => {
    let matchesCategory = true;
    if (activeCategory !== "All") {
        const pathwayKeywords: Record<string, string[]> = {
          "Women's Health": ["women", "pregnancy", "postnatal", "perimenopause", "menopause", "hormonal conditions", "fertility", "hormonal", "pcos", "endometriosis"],
          "Men's Health": ["men", "testosterone", "male"],
          "Children's Health": ["child", "teen", "youth", "puberty", "growth", "paediatric"],
          "Neurodivergence": ["neurodivergen", "adhd", "focus", "brain fog", "cognitive", "autism"],
          "Skin Health": ["skin", "acne", "collagen", "eczema", "psoriasis"],
          "Sports Performance": ["performance", "athlete", "competition", "coach", "sport"],
          "Pain, Fatigue & Inflammation": ["pain", "fatigue", "inflammation", "stress", "burnout", "immunity", "gut health", "metabolic", "weight", "joint"]
        };
        const keywords = pathwayKeywords[activeCategory] || [activeCategory.toLowerCase()];
        matchesCategory = c.specialties.some(tag => {
            const lowerTag = tag.toLowerCase();
            return keywords.some(kw => lowerTag.includes(kw));
        });
    }
    const matchesLocation = !locationSearch || 
      c.location.toLowerCase().includes(locationSearch.toLowerCase()) || 
      c.address.toLowerCase().includes(locationSearch.toLowerCase());

    return matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-secondary/30 font-sans">
      <Navbar alwaysSolid />

      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Collectives
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Find esteemed practice locations offering targeted test-based nutrition protocols.
            </p>
          </div>

          {/* Search Bar container */}
          <div className="flex flex-col md:flex-row items-stretch bg-background border border-border rounded-xl shadow-sm overflow-hidden transition-shadow focus-within:shadow-md focus-within:border-primary/20 max-w-4xl">
            <div className="flex bg-background items-center gap-2.5 px-4 py-2 flex-1 min-w-[200px] border-b md:border-b-0 md:border-r border-border hover:bg-secondary/30 transition-colors">
              <Search className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-col w-full gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                  TBN Pathway
                </span>
                <Select value={activeCategory} onValueChange={(val) => setActiveCategory(val as SpecialistCategory)}>
                  <SelectTrigger className="h-5 p-0 border-none bg-transparent shadow-none focus:ring-0 text-sm font-semibold px-0 text-foreground text-left">
                    <SelectValue placeholder="Select Pathway" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Pathways</SelectItem>
                    <SelectItem value="Women's Health">Women's Health</SelectItem>
                    <SelectItem value="Men's Health">Men's Health</SelectItem>
                    <SelectItem value="Children's Health">Children's Health</SelectItem>
                    <SelectItem value="Neurodivergence">Neurodivergence</SelectItem>
                    <SelectItem value="Skin Health">Skin Health</SelectItem>
                    <SelectItem value="Sports Performance">Sports Performance</SelectItem>
                    <SelectItem value="Pain, Fatigue & Inflammation">Pain, Fatigue & Inflammation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <SearchField 
              icon={MapPin} 
              label="Location" 
              placeholder="e.g. Essex" 
              value={locationSearch}
              onChange={setLocationSearch}
            />

            <div className="p-1.5 flex items-center bg-background border-t md:border-t-0 md:border-l md:border-border">
              <Button className="w-full md:w-auto px-6 py-3 md:py-0 h-full md:h-10 text-[14px] font-bold whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-sm flex gap-2">
                <Search className="w-3.5 h-3.5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl">
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
                          alt={clinic.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border border-border/50">
                          <Building2 className="w-3.5 h-3.5 text-primary" />
                          Collective
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
                          {clinic.name}
                        </h3>
                        
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="font-medium line-clamp-1">{clinic.location || "Consult directly"}</span>
                        </div>

                        <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-3">
                          {clinic.description}
                        </p>

                        {/* Specialties Pills */}
                        {clinic.specialties && clinic.specialties.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-8">
                            {clinic.specialties.slice(0, 3).map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                              >
                                {specialty}
                              </span>
                            ))}
                            {clinic.specialties.length > 3 && (
                              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-muted-foreground border border-border">
                                +{clinic.specialties.length - 3}
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
                            <Link to={`/collectives/${clinic.slug}`}>
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
                  <h3 className="text-lg font-bold mb-2">No partner businesses found</h3>
                  <p className="text-muted-foreground">Currently there are no partner businesses listed.</p>
                </div>
              )}
          </>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClinicsDirectory;

