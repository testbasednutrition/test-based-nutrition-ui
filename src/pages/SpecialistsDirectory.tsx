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
  placeholder 
}: { 
  icon: LucideIcon; 
  label: string; 
  placeholder: string;
}) => (
  <div className="flex bg-background items-center gap-3 px-4 py-2 flex-1 min-w-[200px] border-r border-border last:border-0">
    <Icon className="w-5 h-5 text-muted-foreground" />
    <div className="flex flex-col w-full">
      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="text-sm font-medium bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/60 w-full"
      />
    </div>
  </div>
);

const SpecialistsDirectory = () => {
  const [activeCategory, setActiveCategory] = useState<SpecialistCategory>("All");
  
  const { data: specialists = [], isLoading, error } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  // Apply a basic filter just for show
  const filtered =
    activeCategory === "All"
      ? specialists
      : specialists.filter((s) => s.category === activeCategory);

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
          <div className="flex flex-col md:flex-row items-stretch bg-background border border-border rounded-xl shadow-sm overflow-hidden">
            <SearchField 
              icon={Search} 
              label="Condition / Speciality" 
              placeholder="e.g. Hormone Health" 
            />
            <SearchField 
              icon={MapPin} 
              label="Location" 
              placeholder="City or Zip code" 
            />
            
            <div className="flex items-center gap-3 px-4 py-2 flex-1 min-w-[200px]">
              <Video className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-col w-full">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Consultation Type
                </span>
                <Select defaultValue="online-inperson">
                  <SelectTrigger className="h-auto p-0 border-none bg-transparent shadow-none focus:ring-0 text-sm font-medium px-0">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online-inperson">Online & In-person</SelectItem>
                    <SelectItem value="online-only">Online Only</SelectItem>
                    <SelectItem value="inperson-only">In-person Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="p-2 flex items-center bg-background md:border-l md:border-border">
              <Button className="w-full md:w-auto px-8 py-6 h-auto text-base whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground shadow-md rounded-lg break-keep flex gap-2">
                <Search className="w-4 h-4" />
                Search Doctors
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
            <aside className="w-full lg:w-64 shrink-0 space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <h3 className="font-semibold text-sm tracking-widest uppercase">Filters</h3>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Specialisation filter */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Specialisation</h4>
                <div className="space-y-3">
                  {[
                    "Functional Medicine", 
                    "Nutritional Therapy", 
                    "Hormone Health", 
                    "Gut Health"
                  ].map((spec) => (
                    <div className="flex items-center space-x-3" key={spec}>
                      <Checkbox id={`spec-${spec}`} className="rounded border-border data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                      <Label htmlFor={`spec-${spec}`} className="text-sm font-normal text-muted-foreground cursor-pointer">
                        {spec}
                      </Label>
                    </div>
                  ))}
                </div>
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

              {/* Experience */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Experience</h4>
                <Slider defaultValue={[15]} max={30} step={1} className="py-4" />
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>0 YEARS</span>
                  <span>30+ YEARS</span>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Languages</h4>
                <Select defaultValue="english">
                  <SelectTrigger className="w-full bg-background border-border">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </aside>

            {/* Results Grid */}
            <div className="flex-1 space-y-6">
              
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filtered.map((specialist) => (
                  <div 
                    key={specialist.slug}
                    className="flex flex-col overflow-hidden bg-background border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    {/* Top Image Box */}
                    <Link to={`/specialists/${specialist.slug}`} className="block w-full h-56 bg-secondary relative group cursor-pointer overflow-hidden">
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
                    <div className="flex-1 flex flex-col justify-between p-5">
                      <div className="space-y-3">
                        {/* Title Row */}
                        <div className="flex justify-between items-start gap-4">
                          <div className="pr-1">
                            <h3 className="text-xl font-bold line-clamp-1">{specialist.name}</h3>
                            <p className="text-[13px] font-semibold text-primary mt-1 line-clamp-1">
                              {specialist.category} {specialist.role && `• ${specialist.role.split("—")[0].trim()}`}
                            </p>
                          </div>
                          
                          {/* Rating Badge */}
                          {specialist.rating && (
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-secondary rounded-md text-sm font-bold shrink-0">
                              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                              <span>{specialist.rating}</span>
                            </div>
                          )}
                        </div>

                        {/* Details Row with Icons */}
                        <div className="flex flex-col gap-2.5 text-xs text-muted-foreground font-medium pt-2">
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

                        {/* Bio snippet */}
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mt-4">
                          {specialist.bio[0]}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 pt-5 border-t border-border/50">
                        <Link to={`/specialists/${specialist.slug}`} className="w-full sm:w-1/2">
                          <Button variant="outline" className="w-full font-semibold px-4 border-border hover:bg-secondary">
                            View Profile
                          </Button>
                        </Link>
                        <Button className="w-full sm:w-1/2 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-4 shadow-sm">
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
