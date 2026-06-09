import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, Quote, Award, BadgeCheck, Video, RefreshCcw, Star, Activity, CheckCircle2, ChevronRight, TestTube2, Search, Image as ImageIcon } from "lucide-react";
import NotFound from "./NotFound";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type SpecialistCategory } from "@/data/specialists";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const summarizeQuote = (text?: string, maxWords = 50): string => {
  if (!text) return "";
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const SpecialistProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  const specialist = specialists.find((s) => s.slug === slug);

  const [activeImage, setActiveImage] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<SpecialistCategory>("All");
  const [searchLocation, setSearchLocation] = useState("");

  const handleCategorySelect = (category: SpecialistCategory) => {
    setSelectedCategory(category);
    navigate("/specialists", { state: { category, search: searchLocation } });
  };

  const handleSearchSubmit = () => {
    navigate("/specialists", { state: { category: selectedCategory, search: searchLocation } });
  };

  useEffect(() => {
    if (specialist) {
      setActiveImage(specialist.image);
    }
  }, [specialist]);

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

      {/* Header & Search Area */}
      <section id="search-header" className="pt-24 md:pt-32 pb-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="mb-6">
            <button
              onClick={() => navigate("/specialists")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Specialists Directory
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Find the right specialist for your health journey
          </h1>

          {/* Search Bar container */}
          <div className="flex flex-col md:flex-row items-stretch bg-background border border-border rounded-xl shadow-sm overflow-hidden transition-shadow focus-within:shadow-md focus-within:border-primary/20">
            <div className="flex bg-background items-center gap-2.5 px-4 py-2 flex-1 min-w-[200px] border-b md:border-b-0 md:border-r border-border hover:bg-secondary/30 transition-colors">
              <Search className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-col w-full gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                  TBN Pathway
                </span>
                <Select value={selectedCategory} onValueChange={(val) => handleCategorySelect(val as SpecialistCategory)}>
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
            
            <div className="flex bg-background items-center gap-2.5 px-4 py-2 flex-1 min-w-[200px] border-b md:border-b-0 md:border-r border-border hover:bg-secondary/30 transition-colors">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-col w-full gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                  Location
                </span>
                <input 
                  type="text" 
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearchSubmit();
                  }}
                  placeholder="e.g. Essex" 
                  className="text-sm font-semibold bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 w-full p-0 h-5"
                />
              </div>
            </div>

            <div className="p-1.5 flex items-center bg-background border-t md:border-t-0 md:border-l md:border-border">
              <Button onClick={handleSearchSubmit} className="w-full md:w-auto px-6 py-3 md:py-0 h-full md:h-10 text-[14px] font-bold whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-sm flex gap-2">
                <Search className="w-3.5 h-3.5" />
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
                <button 
                  onClick={() => navigate("/specialists")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
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
                  ].map((category) => (
                    <div className="flex items-center space-x-3" key={category}>
                      <Checkbox 
                        id={`spec-${category}`} 
                        className="rounded border-border data-[state=checked]:bg-primary data-[state=checked]:text-white" 
                        checked={selectedCategory === category}
                        onCheckedChange={() => handleCategorySelect(category as SpecialistCategory)}
                      />
                      <Label htmlFor={`spec-${category}`} className="text-sm font-normal text-muted-foreground cursor-pointer">
                        {category}
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
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearchSubmit();
                  }}
                />
              </div>

              {/* Testing Expertise */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Testing Expertise</h4>
                <div className="space-y-4">
                  {[
                    { id: "foundational", title: "Foundational Testing", subtext: "In-clinic or online" },
                    { id: "baseline", title: "Baseline Screening", subtext: "Rapid finger-prick point-of-care" },
                    { id: "advanced", title: "Advanced Screening", subtext: "Phlebotomy (where required)" }
                  ].map((exp) => (
                    <div className="flex items-start space-x-3" key={exp.id}>
                      <Checkbox 
                        id={`exp-${exp.id}`} 
                        className="rounded border-border mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:text-white" 
                        onCheckedChange={(checked) => {
                          if (checked) {
                            navigate("/specialists", { state: { category: selectedCategory, search: searchLocation, testingTier: exp.id } });
                          }
                        }}
                      />
                      <div className="grid gap-1 leading-none">
                        <Label 
                          htmlFor={`exp-${exp.id}`} 
                          className="text-xs font-bold uppercase tracking-wider text-foreground cursor-pointer"
                        >
                          {exp.title}
                        </Label>
                        <p className="text-[11px] text-muted-foreground font-medium">
                          {exp.subtext}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Column: Specialist Profile Content */}
            <div className="flex-1 space-y-8 overflow-hidden">
              
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
                ].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category as SpecialistCategory)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                      selectedCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-background text-muted-foreground hover:bg-secondary border border-border transition-all"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Hero Profile Panel */}
              <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start relative z-10">
                  {/* Image Side - Left */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="relative w-full max-w-[280px] mx-auto md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-secondary shadow-sm bg-secondary">
                      <img
                        src={activeImage || specialist.image}
                        alt={specialist.name}
                        className="w-full h-full object-cover transition-all duration-300"
                        style={{ objectPosition: specialist.imagePosition || 'center top' }}
                      />
                      {/* Acceptance Badge overlay */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max bg-background border border-border rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                        <span className={`w-2 h-2 rounded-full ${specialist.accepting_new_clients !== false ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                        <span className="text-[10px] font-bold tracking-wide uppercase text-foreground">
                          {specialist.accepting_new_clients !== false ? 'Accepting Clients' : 'Waitlist Only'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info Side - Right */}
                  <div className="flex flex-col pt-2 md:pt-0">
                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground uppercase mb-2">
                      {specialist.name}
                    </h1>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-[#9f1e13] border border-primary/20">
                        {specialist.category}
                      </span>
                    </div>

                    {/* Professional Title/Role */}
                    {specialist.role && (
                      <p className="text-sm md:text-base font-bold text-black uppercase tracking-wider mb-4">
                        {specialist.role}
                      </p>
                    )}

                    {/* Slick Single-Row Balance Impact Bar */}
                    {(specialist.first_balance_result || specialist.second_balance_result) && (
                      <div className="bg-background border border-border/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)] rounded-lg p-2.5 mb-5 flex flex-wrap items-center justify-between gap-3 max-w-md">
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="w-6 h-6 rounded-full bg-[#dbd4c9] flex items-center justify-center border border-[#dbd4c9]">
                            <Activity className="w-3 h-3 text-[#9f1e13]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-900 tracking-wider font-montserrat uppercase leading-none">
                              Omega 6:3 Balance
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 flex-wrap text-[11px]">
                          {specialist.first_balance_result && (
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">Initial</span>
                              <span className="text-[11px] font-extrabold text-gray-900 bg-muted/30 border border-border/60 px-1.5 py-0.5 rounded font-mono">
                                {specialist.first_balance_result}
                              </span>
                            </div>
                          )}
                          
                          {specialist.first_balance_result && specialist.second_balance_result && (
                            <ChevronRight className="w-3 h-3 text-muted-foreground/40 shrink-0" />
                          )}
                          
                          {specialist.second_balance_result && (
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] uppercase tracking-wider text-emerald-800 font-bold">After</span>
                              <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded font-mono">
                                {specialist.second_balance_result}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Location & Experience Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-xl">
                      <div className="flex items-center gap-3 bg-background border border-border/80 rounded-lg p-3 shadow-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span className="text-xs font-semibold text-zinc-700">{specialist.address || specialist.location || "London, UK"}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-background border border-border/80 rounded-lg p-3 shadow-sm">
                        <RefreshCcw className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span className="text-xs font-semibold text-zinc-700">{specialist.experience || "10+ Years Exp."}</span>
                      </div>
                    </div>

                    {/* Quote Block */}
                    {specialist.why_joined_tbn && (
                      <div className="relative pl-4 mb-6 mt-2">
                        <blockquote className="text-zinc-650 italic text-sm leading-relaxed border-l border-primary/20 pl-4">
                          "{summarizeQuote(specialist.why_joined_tbn, 50)}"
                        </blockquote>
                      </div>
                    )}

                    {/* Contact Button */}
                    <div className="mt-4">
                      <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 h-10 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm w-max cursor-pointer">
                        <a href="#contact">Contact Clinic</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Journey Panel */}
              <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Main Bio */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">About specialist</p>
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                      Professional Bio
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                      {specialist.bio.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                  
                  {/* "Why TBN" OR Secondary Image */}
                  <div className="space-y-6 mt-4 md:mt-0">
                    {specialist.quote && (
                       <div className="bg-secondary/15 border border-border/40 rounded-2xl p-6 relative">
                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2 relative z-10">Test-Based Nutrition Journey</p>
                          <h3 className="text-lg font-bold mb-4 relative z-10">This is why I partnered with TBN.</h3>
                          <div className="relative">
                            <span className="text-4xl font-serif text-border/60 absolute -top-4 -left-3">"</span>
                            <p className="text-muted-foreground leading-relaxed italic relative z-10 text-sm">
                              {summarizeQuote(specialist.quote, 50)}
                            </p>
                            <span className="text-4xl font-serif text-border/60 absolute -bottom-6 -right-1">"</span>
                          </div>
                       </div>
                    )}

                    {specialist.secondaryImage && !specialist.quote && (
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-secondary shadow-sm">
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

              {/* Testimonials Panel */}
              {specialist.testimonials && specialist.testimonials.length > 0 && (
                <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                      Client Results
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      Proven Impact
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {specialist.testimonials.map((t) => (
                      <div
                        key={t.name}
                        className="bg-secondary/15 border border-border/50 rounded-2xl p-6 relative flex flex-col shadow-sm"
                      >
                        <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/10 rotate-180" />
                        <p className="text-muted-foreground leading-relaxed italic relative z-10 mb-6 text-xs">"{t.text}"</p>
                        
                        <div className="mt-auto">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">{t.name}</p>
                          {t.title && <p className="text-[10px] text-muted-foreground mt-0.5">{t.title}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Conditions & Support Panel */}
              {specialist.specialization_tags && specialist.specialization_tags.length > 0 && (
                <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">Conditions & Support</h2>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                     {specialist.specialization_tags.map((tag, index) => (
                       <span key={`${tag}-${index}`} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-transparent text-muted-foreground border border-border/80">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
              )}

              {/* Testing & Diagnostics Panel */}
              {specialist.primary_testing_methods && specialist.primary_testing_methods.length > 0 && (
                <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <TestTube2 className="w-5 h-5 text-primary" />
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">Testing & Diagnostics</h2>
                  </div>
                  <div className="flex flex-wrap gap-2.5 mb-4">
                     {specialist.primary_testing_methods.map((method, index) => (
                       <span key={`${method}-${index}`} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-primary/5 text-muted-foreground border border-primary/20">
                         <TestTube2 className="w-3.5 h-3.5 mr-2 opacity-50" />
                         {method}
                       </span>
                     ))}
                  </div>
                  {specialist.other_blood_tests && (
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                      * {specialist.other_blood_tests}
                    </p>
                  )}
                </div>
              )}

              {/* Credentials Panel */}
              <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                    Credentials & Expertise
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Qualifications
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                  {specialist.credentials
                    .flatMap(cred => cred.split(/[•,]/).map(c => c.trim()))
                    .filter(Boolean)
                    .map((cred, idx) => (
                    <div
                      key={`${cred}-${idx}`}
                      className="bg-background border border-border/60 rounded-xl p-4 flex items-center gap-3 hover:border-[#bdae97] transition-colors"
                    >
                      <div className="w-8 h-8 shrink-0 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="font-medium text-muted-foreground text-xs leading-snug">{cred}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Panel */}
              {(() => {
                const uniqueImages = Array.from(
                  new Set(
                    [
                      specialist.image,
                      ...(specialist.gallery_image_urls || []),
                      specialist.secondaryImage,
                    ].filter((url): url is string => !!url)
                  )
                );
                
                if (uniqueImages.length <= 1) return null;

                return (
                  <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                        Gallery
                      </p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">
                        Specialist & Practice Gallery
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {uniqueImages.map((url, idx) => (
                        <div 
                          key={url}
                          className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-border bg-secondary shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                          onClick={() => {
                            setActiveImage(url);
                            const headerEl = document.getElementById('search-header');
                            if (headerEl) {
                              headerEl.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }}
                        >
                          <img 
                            src={url} 
                            alt={`${specialist.name} gallery image ${idx + 1}`} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-[9px] font-bold uppercase tracking-widest bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                              View Photo
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Contact Panel */}
              <div id="contact" className="bg-primary rounded-2xl p-6 md:p-8 shadow-lg text-white">
                <div className="grid md:grid-cols-12 gap-8 items-stretch">
                  {/* Left: Text, CTA & Details */}
                  <div className="md:col-span-6 flex flex-col justify-between gap-6 text-center md:text-left">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-secondary/80 mb-2">Get in Touch</p>
                      <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">Book a Consultation</h2>
                      <p className="text-white/80 text-xs mb-6 leading-relaxed max-w-sm mx-auto md:mx-0">
                        Ready to optimize your health with {specialist.name}? Contact their clinic directly using the details below.
                      </p>
                      {specialist.bookingUrl && (
                        <Button asChild className="bg-secondary text-primary hover:bg-white font-semibold px-6 py-4 h-auto rounded-xl transition-colors w-full sm:w-auto shadow-sm text-xs">
                          <a href={specialist.bookingUrl} target="_blank" rel="noopener noreferrer">
                            {specialist.bookingLabel || "Book Consultation Now"}
                          </a>
                        </Button>
                      )}
                    </div>

                    <div className="border-t border-white/10 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1.5 text-secondary">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Location</span>
                        </div>
                        <p className="text-xs font-semibold text-white">{specialist.clinic_name || specialist.currentOrg || "Private Clinic"}</p>
                        <p className="text-[10px] text-white/70 mt-1 whitespace-pre-wrap leading-relaxed">{specialist.address || specialist.location}</p>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1.5 text-secondary">
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Phone</span>
                        </div>
                        <a href={`tel:${specialist.phone_number || "+440000000000"}`} className="text-xs font-semibold text-white hover:text-secondary transition-colors block mt-0.5 leading-normal break-words">
                          {specialist.phone_number || "Website Contact"}
                        </a>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1.5 text-secondary">
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Email</span>
                        </div>
                        <a href={`mailto:${specialist.email_address || "info@testbased.com"}`} className="text-xs font-semibold text-white hover:text-secondary transition-colors block mt-0.5 leading-normal break-all">
                          {specialist.email_address || "Unavailable"}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right: Google Map */}
                  <div className="md:col-span-6 w-full min-h-[250px] flex items-stretch">
                    {(specialist.address || specialist.location) && (
                      <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative bg-white/5 flex flex-1">
                        <iframe
                          title="Clinic Map Location"
                          width="100%"
                          height="100%"
                          style={{ border: 0, minHeight: '250px', height: '100%' }}
                          loading="lazy"
                          allowFullScreen
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(specialist.address || specialist.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                        />
                      </div>
                    )}
                  </div>
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
