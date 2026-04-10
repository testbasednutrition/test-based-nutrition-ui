import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { type SpecialistCategory } from "@/data/specialists";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import { 
  Search, 
  MapPin, 
  Video, 
  BadgeCheck, 
  Star, 
  RefreshCcw,
  LucideIcon,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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
  <div className="flex bg-background items-center gap-3 px-5 py-3 flex-1 min-w-[200px] border-b md:border-b-0 md:border-r border-border last:border-0 hover:bg-secondary/30 transition-colors">
    <Icon className="w-5 h-5 text-muted-foreground" />
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

const SpecialistsDirectory = () => {
  const [activeCategory, setActiveCategory] = useState<SpecialistCategory>("All");
  const [locationSearch, setLocationSearch] = useState("");
  
  const { data: specialists = [], isLoading, error } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  // Apply a basic filter just for show (only show approved profiles in the grid)
  const approvedSpecialists = specialists.filter(s => s.is_approved !== false);
  const filtered = approvedSpecialists.filter((s) => {
    let matchesCategory = true;
    
    if (activeCategory !== "All") {
      const pathwayKeywords: Record<string, string[]> = {
        "Women's Health": ["women", "pregnancy", "postnatal", "perimenopause", "menopause", "hormonal conditions", "fertility & conception", "hormonal skin", "pcos", "endometriosis"],
        "Men's Health": ["men", "testosterone", "male"],
        "Children's Health": ["child", "teen", "youth", "puberty", "growth & development", "paediatric"],
        "Neurodivergence": ["neurodivergen", "adhd", "focus", "brain fog", "cognitive", "autism"],
        "Skin Health": ["skin", "acne", "collagen", "eczema", "psoriasis"],
        "Sports Performance": ["performance", "athlete", "competition", "coach", "sport"],
        "Pain, Fatigue & Inflammation": ["pain", "fatigue", "inflammation", "stress", "burnout", "immunity", "gut health", "metabolic", "weight", "joint"]
      };

      const keywords = pathwayKeywords[activeCategory] || [activeCategory.toLowerCase()];
      
      const tagsMatch = s.specialization_tags && s.specialization_tags.some(tag => {
        const lowerTag = tag.toLowerCase();
        return keywords.some(kw => lowerTag.includes(kw));
      });
      
      const catMatch = s.category && s.category === activeCategory;
      matchesCategory = !!(catMatch || tagsMatch);
    }
      
    const matchesLocation = !locationSearch || 
      (s.location && s.location.toLowerCase().includes(locationSearch.toLowerCase())) ||
      (s.address && s.address.toLowerCase().includes(locationSearch.toLowerCase()));
    
    return matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-secondary/30 font-sans">
      <Navbar alwaysSolid />

      {/* Header & Search Area */}
      <section className="pt-24 md:pt-32 pb-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Find the right specialist for your health journey
          </h1>

          {/* Search Bar container */}
          <div className="flex flex-col md:flex-row items-stretch bg-background border border-border rounded-xl shadow-sm overflow-hidden transition-shadow focus-within:shadow-md focus-within:border-primary/20">
            <div className="flex bg-background items-center gap-3 px-5 py-3 flex-1 min-w-[200px] border-b md:border-b-0 md:border-r border-border hover:bg-secondary/30 transition-colors">
              <Search className="w-5 h-5 text-muted-foreground" />
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
            
            <div className="flex bg-background items-center gap-3 px-5 py-3 flex-1 min-w-[200px] hover:bg-secondary/30 transition-colors">
              <Video className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-col w-full gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                  Consultation Type
                </span>
                <Select>
                  <SelectTrigger className="h-5 p-0 border-none bg-transparent shadow-none focus:ring-0 text-sm font-semibold px-0 text-foreground [&>span:first-child[data-placeholder]]:text-muted-foreground/50 [&>span:first-child[data-placeholder]]:font-medium">
                    <SelectValue placeholder="Specialist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="specialist">Specialist</SelectItem>
                    <SelectItem value="partner">Partner Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="p-2 flex items-center bg-background border-t md:border-t-0 md:border-l md:border-border">
              <Button className="w-full md:w-auto px-8 py-5 md:py-0 h-full md:h-12 text-[15px] font-bold whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-sm flex gap-2">
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-full lg:w-64 shrink-0 space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <h3 className="font-semibold text-sm tracking-widest uppercase">Filters</h3>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>

              {/* TBN Pathways filter */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">TBN Pathways</h4>
                <div className="space-y-3">
                  {[
                    "All",
                    "Women's Health", 
                    "Men's Health", 
                    "Children's Health", 
                    "Neurodivergence",
                    "Skin Health",
                    "Sports Performance",
                    "Pain, Fatigue & Inflammation"
                  ].map((spec) => (
                    <div className="flex items-center space-x-3" key={spec}>
                      <Checkbox 
                        id={`spec-${spec}`} 
                        className="rounded border-border data-[state=checked]:bg-primary data-[state=checked]:text-white" 
                        checked={activeCategory === spec}
                        onCheckedChange={() => setActiveCategory(spec as SpecialistCategory)}
                      />
                      <Label htmlFor={`spec-${spec}`} className="text-sm font-normal text-muted-foreground cursor-pointer">
                        {spec}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location filter */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Location</h4>
                <Input 
                  placeholder="Enter city or region" 
                  className="bg-background border-border text-sm h-10" 
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                />
              </div>

              {/* Testing Expertise */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Testing Expertise</h4>
                <div className="space-y-3">
                  {["Functional Labs", "Microbiome Analysis", "Genomic Testing"].map((exp) => (
                    <div className="flex items-center space-x-3" key={exp}>
                      <Checkbox id={`exp-${exp}`} className="rounded border-border data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor={`exp-${exp}`} className="text-sm font-normal text-muted-foreground cursor-pointer">
                        {exp}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>


            </aside>

            {/* Results Grid */}
            <div className="flex-1 space-y-6 overflow-hidden">
              
              {/* Mobile Filter Tabs */}
              <div className="flex lg:hidden overflow-x-auto pb-4 gap-2 no-scrollbar w-full border-b border-border">
                {[
                  "All",
                  "Women's Health", 
                  "Men's Health", 
                  "Children's Health", 
                  "Neurodivergence",
                  "Skin Health",
                  "Sports Performance",
                  "Pain, Fatigue & Inflammation"
                ].map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setActiveCategory(spec as SpecialistCategory)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                      activeCategory === spec 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-background text-muted-foreground hover:bg-secondary border border-border transition-all"
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>

              {/* Results Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">{specialists.length * 10}+ Top-rated Specialists</h2>
                  <p className="text-sm text-muted-foreground">
                    Showing results for your health profile
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-36 h-8 text-sm border-none bg-transparent shadow-none focus:ring-0 font-medium px-0 gap-1">
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="highest-rated">Highest Rated</SelectItem>
                      <SelectItem value="most-experienced">Most Experienced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Specialist Cards list */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6">
                {filtered.map((specialist) => (
                  <div 
                    key={specialist.slug}
                    className="flex flex-col overflow-hidden bg-background border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    {/* Top Image Box */}
                    <Link to={`/specialists/${specialist.slug}`} className="block w-full h-32 sm:h-56 bg-secondary relative group cursor-pointer overflow-hidden">
                      <img
                        src={specialist.image}
                        alt={specialist.name}
                        className="w-full h-full object-cover origin-top transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md border border-primary/20">
                         <BadgeCheck className="w-4 h-4" />
                      </div>
                    </Link>

                    {/* Bottom Info Box */}
                    <div className="flex-1 flex flex-col justify-between p-3 sm:p-5">
                      <div className="space-y-3">
                        {/* Title Row */}
                        <div className="flex justify-between items-start gap-4">
                          <div className="pr-1">
                            <h3 className="text-[13px] sm:text-xl font-bold line-clamp-1">{specialist.name}</h3>
                            <p className="text-[10px] sm:text-[13px] font-semibold text-primary mt-0.5 sm:mt-1 line-clamp-1">
                              {specialist.category} {specialist.role && `• ${specialist.role.split("—")[0].trim()}`}
                            </p>
                          </div>
                          
                          {/* Rating Badge */}
                          {specialist.rating && (
                            <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-secondary rounded-md text-[10px] sm:text-sm font-bold shrink-0">
                              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary" />
                              <span>{specialist.rating}</span>
                            </div>
                          )}
                        </div>

                        {/* Details Row with Icons */}
                        <div className="hidden sm:flex flex-col gap-2.5 text-xs text-muted-foreground font-medium pt-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span className="line-clamp-1">{specialist.location || "London, UK"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4 text-primary shrink-0" />
                            <span className="line-clamp-1">{specialist.consultationType || "Online & In-person"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <RefreshCcw className="w-4 h-4 text-primary shrink-0" />
                            <span className="line-clamp-1">{specialist.experience || "10+ Years Exp."}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col items-center gap-1.5 sm:gap-3 mt-3 sm:mt-6 pt-3 sm:pt-5 border-t border-border/50">
                        <Link to={`/specialists/${specialist.slug}`} className="w-full text-center">
                          <Button variant="outline" className="w-full font-semibold px-2 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm h-auto border-border hover:bg-secondary">
                            View Profile
                          </Button>
                        </Link>
                        <Button className="w-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-2 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm h-auto shadow-sm">
                          Book
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {filtered.length > 0 && (
                <div className="pt-8 flex items-center justify-center gap-2">
                  <Button variant="outline" size="icon" className="w-8 h-8 rounded-md border-border text-muted-foreground hover:bg-secondary">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button className="w-8 h-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                    1
                  </Button>
                  <Button variant="outline" className="w-8 h-8 rounded-md border-border hover:bg-secondary">
                    2
                  </Button>
                  <Button variant="outline" className="w-8 h-8 rounded-md border-border hover:bg-secondary">
                    3
                  </Button>
                  <div className="w-8 h-8 flex items-center justify-center text-muted-foreground">
                    ...
                  </div>
                  <Button variant="outline" className="w-8 h-8 rounded-md border-border hover:bg-secondary">
                    12
                  </Button>
                  <Button variant="outline" size="icon" className="w-8 h-8 rounded-md border-border text-muted-foreground hover:bg-secondary">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-20 bg-background border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-2">No specialists found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialistsDirectory;
