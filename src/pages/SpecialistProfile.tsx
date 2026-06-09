import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Quote, 
  Award, 
  BadgeCheck, 
  Video, 
  RefreshCcw, 
  Star, 
  Activity, 
  CheckCircle2, 
  ChevronRight, 
  TestTube2, 
  Search, 
  Image as ImageIcon, 
  X, 
  ChevronLeft,
  ChevronDown,
  Check,
  Brain,
  Heart,
  Shield,
  Sparkles,
  Zap,
  Smile,
  Flame
} from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";


const summarizeQuote = (text?: string, maxWords = 50): string => {
  if (!text) return "";
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const FOUNDATIONAL_TESTS = [
  "Foundational Testing",
  "Omega Balance",
  "Gut Microbiome",
  "Intolerance Testing",
  "Finger Prick Balance Testing (Omega 6:3)",
  "Finger Prick Gut Health Testing"
];

const BASELINE_TESTS = [
  "Baseline Screening",
  "Vitamin D",
  "Vitamin D Levels (FP)",
  "HbA1c",
  "HbA1c - Diabetes (FP)",
  "hS-CRP Heart Screening (FP)",
  "CRP / hs-CRP",
  "CRP Inflammation (FP)",
  "RF Rheumatoid Screening (FP)",
  "Cortisol Stress Hormone (FP)",
  "Ferritin",
  "Ferritin Iron Levels (FP)",
  "Cystatin C",
  "Cystatin C Kidney Screening (FP)",
  "HCG+B Pregnancy Indication (FP)",
  "AMH Ovarian Reserve (FP)",
  "Progesterone",
  "Progesterone Ovulation (FP)",
  "Folate",
  "Folate (FP)",
  "NT-proBNP Heart Monitoring (VBD)",
  "TSH Thyroid Screening (VBD)",
  "FSH Menopause (VBD)",
  "FSH",
  "Vitamin B12 Levels (VBD+C)",
  "Testosterone (VBD+C)",
  "RSV/Influenza A/B (NS)"
];

const ADVANCED_TESTS = [
  "Advanced Screening",
  "Testosterone",
  "Thyroid (TSH)",
  "Vitamin B12",
  "FSH Menopause",
  "FSH"
];

const formatExperience = (exp?: string | number) => {
  if (!exp) return "10+ Years Exp.";
  const trimmed = String(exp).trim();
  if (/^\d+$/.test(trimmed)) {
    return `${trimmed}+ Years Exp.`;
  }
  if (/^\d+\+$/.test(trimmed)) {
    return `${trimmed} Years Exp.`;
  }
  return trimmed;
};

const CATEGORY_ICONS: Record<string, React.ComponentType<any>> = {
  "All": Activity,
  "Women's Health": Heart,
  "Men's Health": Shield,
  "Children's Health": Smile,
  "Neurodivergence": Brain,
  "Skin Health": Sparkles,
  "Sports Performance": Zap,
  "Pain, Fatigue & Inflammation": Flame,
};

const getTestingButtonLabel = (selected: string[]) => {
  const activeTiers = selected.filter(id => id === "foundational" || id === "baseline" || id === "advanced");
  if (activeTiers.length === 0) return "ALL TESTING";
  if (activeTiers.length === 1) {
    if (activeTiers[0] === "foundational") return "FOUNDATIONAL";
    if (activeTiers[0] === "baseline") return "BASELINE";
    if (activeTiers[0] === "advanced") return "ADVANCED";
  }
  return `${activeTiers.length} TIERS SELECTED`;
};

const SpecialistProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  const specialist = specialists.find((s) => s.slug === slug && s.is_approved === true);

  const [activeImage, setActiveImage] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<SpecialistCategory>("All");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedTestingTiers, setSelectedTestingTiers] = useState<string[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.75;
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCategorySelect = (category: SpecialistCategory) => {
    setSelectedCategory(category);
    navigate("/specialists", { state: { category, search: searchLocation } });
  };

  const handleTestingTierToggle = (tierId: string) => {
    const isSelected = selectedTestingTiers.includes(tierId);
    let newTiers = [...selectedTestingTiers];
    if (!isSelected) {
      newTiers = [...newTiers, tierId];
    } else {
      const testsToRemove = tierId === "foundational" 
        ? ["Omega Balance", "Gut Microbiome", "Intolerance Testing"]
        : tierId === "baseline"
        ? [
            "Vitamin D Levels (FP)",
            "HbA1c - Diabetes (FP)",
            "hS-CRP Heart Screening (FP)",
            "CRP Inflammation (FP)",
            "RF Rheumatoid Screening (FP)",
            "Cortisol Stress Hormone (FP)",
            "Ferritin Iron Levels (FP)",
            "Cystatin C Kidney Screening (FP)",
            "HCG+B Pregnancy Indication (FP)",
            "AMH Ovarian Reserve (FP)",
            "Progesterone Ovulation (FP)",
            "Folate (FP)",
            "NT-proBNP Heart Monitoring (VBD)",
            "TSH Thyroid Screening (VBD)",
            "FSH Menopause (VBD)",
            "Vitamin B12 Levels (VBD+C)",
            "Testosterone (VBD+C)",
            "RSV/Influenza A/B (NS)"
          ]
        : ["Testosterone", "Thyroid (TSH)", "Vitamin B12", "FSH Menopause"];
      newTiers = newTiers.filter(id => id !== tierId && !testsToRemove.includes(id));
    }
    setSelectedTestingTiers(newTiers);
    navigate("/specialists", { 
      state: { 
        category: selectedCategory, 
        search: searchLocation, 
        testingTiers: newTiers 
      } 
    });
  };

  const handleSearchSubmit = () => {
    navigate("/specialists", { state: { category: selectedCategory, search: searchLocation } });
  };

  useEffect(() => {
    if (specialist) {
      setActiveImage(specialist.image);
    }
  }, [specialist]);

  // Automatic scrolling for gallery
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollTo({
            left: scrollLeft + 300,
            behavior: 'smooth'
          });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-center">
            Find the right TBN Specialist <br /> for your health journey.
          </h1>

          {/* Search Bar container */}
          <div className="flex flex-col md:flex-row items-stretch bg-background border border-border rounded-2xl md:rounded-xl shadow-sm overflow-hidden md:h-14">
            <div className="flex flex-row flex-1 border-b md:border-b-0 border-border h-12 md:h-auto">
              <div className="flex bg-background items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 flex-1 min-w-0 border-r border-border hover:bg-secondary/35 transition-colors">
                <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <div className="flex flex-col w-full gap-0 min-w-0">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/85 leading-none hidden md:block">
                    TBN Pathway
                  </span>
                  <Select value={selectedCategory} onValueChange={(val) => handleCategorySelect(val as SpecialistCategory)}>
                    <SelectTrigger className="h-5 p-0 border-none bg-transparent shadow-none focus:ring-0 text-xs md:text-sm font-semibold px-0 text-foreground text-left min-w-0 truncate">
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
              
              <div className="flex bg-background items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 flex-1 min-w-0 hover:bg-secondary/35 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <div className="flex flex-col w-full gap-0 min-w-0">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/85 leading-none hidden md:block">
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
                    className="text-xs md:text-sm font-semibold bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 w-full p-0 h-5 min-w-0"
                  />
                </div>
              </div>
            </div>

            <div className="p-1 flex items-center bg-background shrink-0 w-full md:w-auto h-12 md:h-full md:border-l md:border-border">
              <Button onClick={handleSearchSubmit} className="w-full md:w-auto h-full px-5 text-xs md:text-sm font-bold whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-sm flex items-center justify-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
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
                 <h3 className="font-semibold text-sm tracking-widest uppercase">FILTERS</h3>
                 <button 
                   onClick={() => navigate("/specialists")} 
                   className="text-muted-foreground hover:text-primary transition-colors"
                 >
                   <RefreshCcw className="w-4 h-4" />
                 </button>
               </div>
 
               {/* TBN Pathways filter */}
               <div className="space-y-4">
                 <h4 className="font-bold text-xs uppercase tracking-wider text-foreground">TBN PATHWAYS</h4>
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
                 <h4 className="font-bold text-xs uppercase tracking-wider text-foreground">LOCATION</h4>
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
                 <h4 className="font-bold text-xs uppercase tracking-wider text-foreground">TESTING EXPERTISE</h4>
                <div className="space-y-4">
                  {[
                    { id: "foundational", title: "Foundational Testing", subtext: "In-clinic or online", tests: ["Omega Balance", "Gut Microbiome", "Intolerance Testing"] },
                    { 
                      id: "baseline", 
                      title: "Baseline Screening", 
                      subtext: "Rapid finger-prick point-of-care", 
                      tests: [
                        "Vitamin D Levels (FP)",
                        "HbA1c - Diabetes (FP)",
                        "hS-CRP Heart Screening (FP)",
                        "CRP Inflammation (FP)",
                        "RF Rheumatoid Screening (FP)",
                        "Cortisol Stress Hormone (FP)",
                        "Ferritin Iron Levels (FP)",
                        "Cystatin C Kidney Screening (FP)",
                        "HCG+B Pregnancy Indication (FP)",
                        "AMH Ovarian Reserve (FP)",
                        "Progesterone Ovulation (FP)",
                        "Folate (FP)",
                        "NT-proBNP Heart Monitoring (VBD)",
                        "TSH Thyroid Screening (VBD)",
                        "FSH Menopause (VBD)",
                        "Vitamin B12 Levels (VBD+C)",
                        "Testosterone (VBD+C)",
                        "RSV/Influenza A/B (NS)"
                      ] 
                    },
                    { id: "advanced", title: "Advanced Screening", subtext: "Phlebotomy (where required)", tests: ["Testosterone", "Thyroid (TSH)", "Vitamin B12", "FSH Menopause"] }
                  ].map((exp) => (
                    <div className="space-y-2" key={exp.id}>
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id={`exp-${exp.id}`} 
                          className="rounded border-border mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:text-white" 
                          checked={selectedTestingTiers.includes(exp.id)}
                          onCheckedChange={(checked) => {
                            let newTiers = [...selectedTestingTiers];
                            if (checked) {
                              newTiers = [...newTiers, exp.id];
                            } else {
                              newTiers = newTiers.filter(id => id !== exp.id && !exp.tests.includes(id));
                            }
                            setSelectedTestingTiers(newTiers);
                            navigate("/specialists", { 
                              state: { 
                                category: selectedCategory, 
                                search: searchLocation, 
                                testingTiers: newTiers 
                              } 
                            });
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
                      
                      {/* Sub-checkboxes */}
                      {selectedTestingTiers.includes(exp.id) && (
                        <div className={`pl-6 space-y-2 border-l border-border/80 ml-2 py-1 animate-[fadeIn_0.2s_ease-out] ${exp.id === 'baseline' ? 'max-h-[160px] overflow-y-auto pr-1' : ''}`}>
                          {exp.tests.map((subtest) => (
                            <div className="flex items-center space-x-2.5" key={subtest}>
                              <Checkbox 
                                id={`sub-${subtest}`}
                                className="rounded border-border w-3.5 h-3.5 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                                checked={selectedTestingTiers.includes(subtest)}
                                onCheckedChange={(checked) => {
                                  let newTiers = [...selectedTestingTiers];
                                  if (checked) {
                                    newTiers = [...newTiers, subtest];
                                  } else {
                                    newTiers = newTiers.filter(id => id !== subtest);
                                  }
                                  setSelectedTestingTiers(newTiers);
                                  navigate("/specialists", { 
                                    state: { 
                                      category: selectedCategory, 
                                      search: searchLocation, 
                                      testingTiers: newTiers 
                                    } 
                                  });
                                }}
                              />
                              <Label 
                                htmlFor={`sub-${subtest}`} 
                                className="text-[11px] text-muted-foreground font-medium cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis mr-1 max-w-[170px]"
                                title={subtest}
                              >
                                {subtest.replace(/ \((FP|VBD|VBD\+C|NS)\)$/, '')}
                              </Label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Column: Specialist Profile Content */}
            <div className="flex-1 space-y-8 overflow-hidden">
              
              {/* Mobile Filter Dropdowns */}
              <div className="flex lg:hidden pb-3 border-b border-border w-full gap-2">
                {/* Left: Pathway Dropdown */}
                <div className="flex-1 min-w-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-between px-2.5 py-1.5 h-9 bg-background border-border text-foreground font-semibold text-[10px] sm:text-xs tracking-wider uppercase rounded-lg hover:bg-secondary/20 shadow-sm transition-all"
                      >
                        <div className="flex items-center gap-1.5 min-w-0 truncate">
                          {(() => {
                            const IconComponent = CATEGORY_ICONS[selectedCategory] || Activity;
                            return <IconComponent className="w-3.5 h-3.5 text-primary shrink-0" />;
                          })()}
                          <span className="truncate">
                            {selectedCategory === "All" ? "ALL PATHWAYS" : selectedCategory.toUpperCase()}
                          </span>
                        </div>
                        <ChevronDown className="w-3 h-3 text-muted-foreground shrink-0 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)] bg-background border border-border p-1.5 rounded-xl shadow-md z-50">
                      <DropdownMenuLabel className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase px-2.5 py-1.5">
                        Select Pathway
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-border/60 my-1" />
                      {[
                        "All",
                        "Women's Health", 
                        "Men's Health", 
                        "Children's Health", 
                        "Neurodivergence",
                        "Skin Health",
                        "Sports Performance",
                        "Pain, Fatigue & Inflammation"
                      ].map((spec) => {
                        const IconComponent = CATEGORY_ICONS[spec] || Activity;
                        const isSelected = selectedCategory === spec;
                        return (
                          <DropdownMenuItem
                            key={spec}
                            onClick={() => handleCategorySelect(spec as SpecialistCategory)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                              isSelected 
                                ? "bg-primary/10 text-primary" 
                                : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <IconComponent className={`w-3.5 h-3.5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                              <span>{spec === "All" ? "All Pathways" : spec}</span>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Right: Testing Categories Dropdown */}
                <div className="flex-1 min-w-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-between px-2.5 py-1.5 h-9 bg-background border-border text-foreground font-semibold text-[10px] sm:text-xs tracking-wider uppercase rounded-lg hover:bg-secondary/20 shadow-sm transition-all"
                      >
                        <div className="flex items-center gap-1.5 min-w-0 truncate">
                          <TestTube2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="truncate">
                            {getTestingButtonLabel(selectedTestingTiers)}
                          </span>
                        </div>
                        <ChevronDown className="w-3 h-3 text-muted-foreground shrink-0 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[var(--radix-dropdown-menu-trigger-width)] bg-background border border-border p-1.5 rounded-xl shadow-md z-50">
                      <DropdownMenuLabel className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase px-2.5 py-1.5">
                        Testing Categories
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-border/60 my-1" />
                      {[
                        { id: "foundational", title: "Foundational Testing" },
                        { id: "baseline", title: "Baseline Screening" },
                        { id: "advanced", title: "Advanced Screening" }
                      ].map((tier) => {
                        const isSelected = selectedTestingTiers.includes(tier.id);
                        return (
                          <DropdownMenuCheckboxItem
                            key={tier.id}
                            checked={isSelected}
                            onCheckedChange={() => handleTestingTierToggle(tier.id)}
                            className={`flex items-center px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                              isSelected 
                                ? "bg-primary/10 text-primary focus:bg-primary/10 focus:text-primary" 
                                : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                            }`}
                          >
                            <span>{tier.title}</span>
                          </DropdownMenuCheckboxItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Unified Profile Card - White Background from Hero to Qualifications */}
              <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm space-y-8 md:space-y-10">
                {/* Hero Profile Panel */}
                <div>
                  {/* Mobile Profile Header (Visible on mobile only, above the photo) */}
                  <div className="flex flex-col items-center text-center md:hidden mb-6">
                    <h1 className="text-2xl font-extrabold tracking-tight text-foreground uppercase mb-2">
                      {specialist.name}
                    </h1>
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-[#9f1e13] border border-primary/20">
                        {specialist.category}
                      </span>
                    </div>
                  </div>

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
                      <h1 className="hidden md:block text-2xl md:text-3xl font-extrabold tracking-tight text-foreground uppercase mb-2">
                        {specialist.name}
                      </h1>

                      {/* Category Badge */}
                      <div className="hidden md:block mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-[#9f1e13] border border-primary/20">
                          {specialist.category}
                        </span>
                      </div>

                      {/* Professional Title/Role */}
                      {specialist.role && (
                        <p className="text-sm md:text-base font-bold text-black uppercase tracking-wider mb-4 text-center md:text-left">
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
                          <span className="text-xs font-semibold text-zinc-700">{formatExperience(specialist.experience)}</span>
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
                      <div className="mt-4 flex justify-center md:justify-start">
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 h-10 text-xs font-bold tracking-wider uppercase rounded-lg shadow-sm w-max cursor-pointer">
                          <a href="#contact">Contact Clinic</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/60" />

                {/* Bio & Journey Panel */}
                <div>
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Main Bio */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">ABOUT SPECIALIST</p>
                      <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground uppercase tracking-wider">
                        PROFESSIONAL BIO
                      </h2>
                      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        {specialist.bio.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                    
                    {/* First gallery photo (or fallback placeholder) */}
                    <div className="mt-4 md:mt-0">
                      {(() => {
                        const firstGalleryPhoto = (specialist.gallery_image_urls && specialist.gallery_image_urls.length > 0)
                          ? specialist.gallery_image_urls[0]
                          : (specialist.secondaryImage || "/placeholder.svg");

                        return (
                          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/85 bg-secondary flex items-center justify-center shadow-sm">
                            <img
                              src={firstGalleryPhoto}
                              alt={`${specialist.name} uploaded photo`}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                {/* Test-Based Nutrition Journey Panel */}
                {specialist.quote && (
                  <>
                    <div className="border-t border-border/60" />
                    <div>
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                          TEST-BASED NUTRITION JOURNEY
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">
                          WHY I PARTNERED WITH TBN
                        </h2>
                      </div>
                      <div className="bg-secondary/15 border border-border/40 rounded-2xl p-6 relative">
                        <span className="text-4xl font-serif text-border/60 absolute -top-4 -left-3">"</span>
                        <p className="text-muted-foreground leading-relaxed italic relative z-10 text-sm">
                          {specialist.quote}
                        </p>
                        <span className="text-4xl font-serif text-border/60 absolute -bottom-6 -right-1">"</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Testimonials Panel */}
                {specialist.testimonials && specialist.testimonials.length > 0 && (
                  <>
                    <div className="border-t border-border/60" />
                    <div>
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                          CLIENT RESULTS
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">
                          TESTIMONIALS
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
                  </>
                )}

                {/* Conditions & Support Panel */}
                {specialist.specialization_tags && specialist.specialization_tags.length > 0 && (
                  <>
                    <div className="border-t border-border/60" />
                    <div className="py-4 md:py-6">
                      <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">CONDITIONS & SUPPORT</h2>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3.5 gap-x-8">
                         {specialist.specialization_tags.map((tag, index) => (
                           <div key={`${tag}-${index}`} className="flex items-start gap-2.5 text-[14px] text-muted-foreground leading-normal">
                             <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                             <span>{tag}</span>
                           </div>
                         ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Testing & Diagnostics Panel */}
                {specialist.primary_testing_methods && specialist.primary_testing_methods.length > 0 && (() => {
                  const foundationalMethods = specialist.primary_testing_methods.filter(m => 
                    FOUNDATIONAL_TESTS.some(t => t.toLowerCase() === m.trim().toLowerCase())
                  );
                  const baselineMethods = specialist.primary_testing_methods.filter(m => 
                    BASELINE_TESTS.some(t => t.toLowerCase() === m.trim().toLowerCase())
                  );
                  const advancedMethods = specialist.primary_testing_methods.filter(m => 
                    ADVANCED_TESTS.some(t => t.toLowerCase() === m.trim().toLowerCase())
                  );

                  const hasFoundational = foundationalMethods.length > 0;
                  const hasBaseline = baselineMethods.length > 0;
                  const hasAdvanced = advancedMethods.length > 0;

                  const colsCount = [hasFoundational, hasBaseline, hasAdvanced].filter(Boolean).length;
                  if (colsCount === 0) return null;

                  const gridColsClass = colsCount === 3 
                    ? "grid-cols-1 md:grid-cols-3" 
                    : colsCount === 2 
                      ? "grid-cols-1 md:grid-cols-2" 
                      : "grid-cols-1 max-w-md";

                  return (
                    <>
                      <div className="border-t border-border/60" />
                      <div>
                        <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-4">
                          <TestTube2 className="w-5 h-5 text-primary hidden md:block" />
                          <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">TESTING & DIAGNOSTICS</h2>
                        </div>

                        <div className={`grid ${gridColsClass} gap-8 items-start`}>
                          {/* Foundational Testing */}
                          {hasFoundational && (
                            <div className="space-y-4">
                              <div className="border-b border-primary/20 pb-2">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-wider font-montserrat">Foundational Testing</h3>
                                <p className="text-[10px] text-muted-foreground mt-0.5">In-clinic or online</p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {foundationalMethods.map((method, index) => (
                                  <span key={`${method}-${index}`} className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-secondary/15 text-muted-foreground border border-secondary/30 justify-start">
                                    <TestTube2 className="w-3.5 h-3.5 mr-2 opacity-60 text-primary shrink-0" />
                                    <span className="truncate" title={method}>{method.replace(/ \((FP|VBD|VBD\+C|NS)\)$/, '')}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Baseline Screening */}
                          {hasBaseline && (
                            <div className="space-y-4">
                              <div className="border-b border-primary/20 pb-2">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-wider font-montserrat">Baseline Screening</h3>
                                <p className="text-[10px] text-muted-foreground mt-0.5">Rapid finger-prick point-of-care</p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {baselineMethods.map((method, index) => (
                                  <span key={`${method}-${index}`} className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-secondary/15 text-muted-foreground border border-secondary/30 justify-start">
                                    <TestTube2 className="w-3.5 h-3.5 mr-2 opacity-60 text-primary shrink-0" />
                                    <span className="truncate" title={method}>{method.replace(/ \((FP|VBD|VBD\+C|NS)\)$/, '')}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Advanced Screening */}
                          {hasAdvanced && (
                            <div className="space-y-4">
                              <div className="border-b border-primary/20 pb-2">
                                <h3 className="text-xs font-bold text-primary uppercase tracking-wider font-montserrat">Advanced Screening</h3>
                                <p className="text-[10px] text-muted-foreground mt-0.5">Phlebotomy (where required)</p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {advancedMethods.map((method, index) => (
                                  <span key={`${method}-${index}`} className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-secondary/15 text-muted-foreground border border-secondary/30 justify-start">
                                    <TestTube2 className="w-3.5 h-3.5 mr-2 opacity-60 text-primary shrink-0" />
                                    <span className="truncate" title={method}>{method.replace(/ \((FP|VBD|VBD\+C|NS)\)$/, '')}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {specialist.other_blood_tests && (
                          <p className="text-xs text-muted-foreground mt-8 leading-relaxed border-t border-border/50 pt-4">
                            * {specialist.other_blood_tests}
                          </p>
                        )}
                      </div>
                    </>
                  );
                })()}

                {/* Credentials Panel */}
                <div className="border-t border-border/60 pt-2">
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                      CREDENTIALS & EXPERTISE
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">
                      QUALIFICATIONS
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
                        <div className="w-8 h-8 shrink-0 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <p className="font-medium text-muted-foreground text-xs leading-snug">{cred}</p>
                      </div>
                    ))}
                  </div>
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
                  <div className="bg-background border border-border/85 rounded-2xl p-6 md:p-8 shadow-sm relative group/slider">
                    <div className="mb-6 flex justify-between items-end">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">
                          GALLERY
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">
                          SPECIALIST & PRACTICE GALLERY
                        </h2>
                      </div>
                      
                      {/* Navigation buttons */}
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="w-8 h-8 rounded-full border border-border bg-background hover:bg-secondary flex items-center justify-center shrink-0"
                          onClick={() => scrollSlider('left')}
                        >
                          <ChevronLeft className="w-4 h-4 text-foreground" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="w-8 h-8 rounded-full border border-border bg-background hover:bg-secondary flex items-center justify-center shrink-0"
                          onClick={() => scrollSlider('right')}
                        >
                          <ChevronRight className="w-4 h-4 text-foreground" />
                        </Button>
                      </div>
                    </div>
                    
                    <div 
                      ref={sliderRef}
                      className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-2"
                      style={{ scrollbarWidth: 'none' }}
                    >
                      {uniqueImages.map((url, idx) => (
                        <div 
                          key={url}
                          className="flex-shrink-0 w-[240px] sm:w-[280px] aspect-[4/5] rounded-xl overflow-hidden border border-border bg-secondary shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer snap-start group relative"
                          onClick={() => {
                            if (uniqueImages.length > 5) {
                              setLightboxImage(url);
                            } else {
                              setActiveImage(url);
                              const headerEl = document.getElementById('search-header');
                              if (headerEl) {
                                headerEl.scrollIntoView({ behavior: 'smooth' });
                              } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }
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
                              {uniqueImages.length > 5 ? "Zoom Photo" : "View Photo"}
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
                  <div className="md:col-span-8 flex flex-col justify-between gap-6 text-center md:text-left">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-secondary/80 mb-2">GET IN TOUCH</p>
                      <h2 className="text-xl md:text-2xl font-bold mb-3 text-white uppercase tracking-wider">BOOK A CONSULTATION</h2>
                      <p className="text-white/80 text-xs mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
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
                  <div className="md:col-span-4 w-full min-h-[250px] flex items-stretch">
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

      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img 
              src={lightboxImage} 
              alt="Full view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SpecialistProfile;
