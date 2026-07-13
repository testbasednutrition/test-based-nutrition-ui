import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { type SpecialistCategory, AMBASSADOR_SLUGS } from "@/data/specialists";
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
  MoreHorizontal,
  ChevronDown,
  Check,
  Brain,
  Heart,
  Activity,
  Shield,
  Sparkles,
  Zap,
  Smile,
  Flame,
  TestTube2,
  Users,
  X
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
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
  <div className="flex bg-background items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 flex-1 min-w-0 hover:bg-secondary/35 transition-colors">
    <Icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
    <div className="flex flex-col w-full gap-0 min-w-0">
      <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/85 leading-none hidden md:block">
        {label}
      </span>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder} 
        className="text-xs md:text-sm font-semibold bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 w-full p-0 h-5 min-w-0"
      />
    </div>
  </div>
);

const extractTown = (address?: string): string => {
  if (!address) return '';
  let cleanAddress = address.replace(/\b(UK|United Kingdom|England|Wales|Scotland)\b/ig, '').trim();
  let parts = cleanAddress.split(/[,\n]/).map(p => p.trim()).filter(Boolean);
  
  if (parts.length === 1 && parts[0].split(' ').length > 2) {
    const postcodeRegex = /[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9]\s*[A-Z]{2}/i;
    let singleClean = parts[0].replace(postcodeRegex, '').trim();
    const words = singleClean.split(' ').map(w => w.trim()).filter(Boolean);
    if (words.length > 0) {
      parts = [words[words.length - 1]];
    }
  }

  const postcodeRegex = /[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9]\s*[A-Z]{2}/i;
  const cleanedParts = parts.map(p => {
    let clean = p.replace(postcodeRegex, '').trim();
    clean = clean.replace(/^[\s,.:;/-]+|[\s,.:;/-]+$/g, '').trim();
    return clean;
  }).filter(Boolean);
  
  if (cleanedParts.length === 0) return parts[parts.length - 1] || '';

  const counties = new Set([
    'essex', 'herts', 'hertfordshire', 'dorset', 'wirral', 'kent', 'surrey', 'hampshire',
    'cornwall', 'devon', 'cheshire', 'yorkshire', 'sussex', 'east sussex', 'west sussex',
    'lancashire', 'gloucestershire'
  ]);

  for (let i = cleanedParts.length - 1; i >= 0; i--) {
    const part = cleanedParts[i];
    const partLower = part.toLowerCase();
    if (counties.has(partLower)) continue;
    
    const streetIndicators = /\b(road|rd|street|st|lane|ln|drive|dr|ave|avenue|way|court|ct|walk|wharf|buildings|house|suite|floor|apartment|apartments|close|cl)\b/i;
    if (streetIndicators.test(partLower)) {
      if (i > 0) continue;
    }
    return part;
  }
  return cleanedParts[cleanedParts.length - 1];
};

const TIER_MAPPINGS: Record<string, string[]> = {
  foundational: [
    "Foundational Testing",
    "Omega Balance Ratio",
    "Gut Health Test",
    "Omega Balance",
    "Gut Microbiome",
    "Intolerance Testing",
    "Finger Prick Balance Testing (Omega 6:3)",
    "Finger Prick Gut Health Testing"
  ],
  baseline: [
    "Baseline Screening",
    "Vitamin D Levels (FP)",
    "HbA1c - Diabetes (FP)",
    "hS-CRP Heart Screening (FP)",
    "CRP Inflammation (FP)",
    "RF Rheumatoid Screening Arthritis (FP)",
    "Cortisol Screening Stress Hormone (FP)",
    "Ferritin Iron Levels (FP)",
    "Cystatin C Levels Kidney Screening (FP)",
    "HCG+ß Pregnancy Indication (FP)",
    "AMH Ovarian Reserve Level (FP)",
    "Progesterone Ovulation (FP)",
    "Folate (FP)",
    "NT-proBNP Heart Monitoring (VBD)",
    "RSV/Influenza A/B (NS)",
    "Vitamin D",
    "HbA1c",
    "CRP / hs-CRP",
    "RF Rheumatoid Screening (FP)",
    "Cortisol Stress Hormone (FP)",
    "Ferritin",
    "Cystatin C",
    "Cystatin C Kidney Screening (FP)",
    "HCG+B Pregnancy Indication (FP)",
    "AMH Ovarian Reserve (FP)",
    "Progesterone",
    "Folate"
  ],
  advanced: [
    "Advanced Screening",
    "Testosterone (VBD + C)",
    "Vitamin B12 Levels (VBD + C)",
    "FSH Menopause (VBD)",
    "TSH Thyroid Screening (VBD)",
    "Testosterone",
    "Thyroid (TSH)",
    "Vitamin B12",
    "FSH Menopause",
    "Vitamin B12 Levels (VBD+C)",
    "Testosterone (VBD+C)"
  ]
};

const TEST_EQUIVALENTS: Record<string, string[]> = {
  "Omega Balance Ratio": ["Omega Balance Ratio", "Omega Balance", "Finger Prick Balance Testing (Omega 6:3)"],
  "Omega Balance": ["Omega Balance Ratio", "Omega Balance", "Finger Prick Balance Testing (Omega 6:3)"],
  "Finger Prick Balance Testing (Omega 6:3)": ["Omega Balance Ratio", "Omega Balance", "Finger Prick Balance Testing (Omega 6:3)"],
  "Gut Health Test": ["Gut Health Test", "Gut Microbiome", "Finger Prick Gut Health Testing"],
  "Gut Microbiome": ["Gut Health Test", "Gut Microbiome", "Finger Prick Gut Health Testing"],
  "Finger Prick Gut Health Testing": ["Gut Health Test", "Gut Microbiome", "Finger Prick Gut Health Testing"],
  "Vitamin D Levels (FP)": ["Vitamin D Levels (FP)", "Vitamin D"],
  "Vitamin D": ["Vitamin D Levels (FP)", "Vitamin D"],
  "HbA1c - Diabetes (FP)": ["HbA1c - Diabetes (FP)", "HbA1c"],
  "HbA1c": ["HbA1c - Diabetes (FP)", "HbA1c"],
  "CRP Inflammation (FP)": ["CRP Inflammation (FP)", "CRP / hs-CRP", "CRP/hs-CRP", "CRP"],
  "CRP / hs-CRP": ["CRP Inflammation (FP)", "CRP / hs-CRP", "CRP/hs-CRP", "CRP"],
  "CRP/hs-CRP": ["CRP Inflammation (FP)", "CRP / hs-CRP", "CRP/hs-CRP", "CRP"],
  "CRP": ["CRP Inflammation (FP)", "CRP / hs-CRP", "CRP/hs-CRP", "CRP"],
  "hS-CRP Heart Screening (FP)": ["hS-CRP Heart Screening (FP)", "CRP / hs-CRP", "CRP/hs-CRP"],
  "RF Rheumatoid Screening Arthritis (FP)": ["RF Rheumatoid Screening Arthritis (FP)", "RF Rheumatoid Screening (FP)"],
  "RF Rheumatoid Screening (FP)": ["RF Rheumatoid Screening Arthritis (FP)", "RF Rheumatoid Screening (FP)"],
  "Cortisol Screening Stress Hormone (FP)": ["Cortisol Screening Stress Hormone (FP)", "Cortisol Stress Hormone (FP)"],
  "Cortisol Stress Hormone (FP)": ["Cortisol Screening Stress Hormone (FP)", "Cortisol Stress Hormone (FP)"],
  "Ferritin Iron Levels (FP)": ["Ferritin Iron Levels (FP)", "Ferritin"],
  "Ferritin": ["Ferritin Iron Levels (FP)", "Ferritin"],
  "Cystatin C Levels Kidney Screening (FP)": ["Cystatin C Levels Kidney Screening (FP)", "Cystatin C Kidney Screening (FP)", "Cystatin C"],
  "Cystatin C Kidney Screening (FP)": ["Cystatin C Levels Kidney Screening (FP)", "Cystatin C Kidney Screening (FP)", "Cystatin C"],
  "Cystatin C": ["Cystatin C Levels Kidney Screening (FP)", "Cystatin C Kidney Screening (FP)", "Cystatin C"],
  "HCG+ß Pregnancy Indication (FP)": ["HCG+ß Pregnancy Indication (FP)", "HCG+B Pregnancy Indication (FP)"],
  "HCG+B Pregnancy Indication (FP)": ["HCG+ß Pregnancy Indication (FP)", "HCG+B Pregnancy Indication (FP)"],
  "AMH Ovarian Reserve Level (FP)": ["AMH Ovarian Reserve Level (FP)", "AMH Ovarian Reserve (FP)"],
  "AMH Ovarian Reserve (FP)": ["AMH Ovarian Reserve Level (FP)", "AMH Ovarian Reserve (FP)"],
  "Progesterone Ovulation (FP)": ["Progesterone Ovulation (FP)", "Progesterone"],
  "Progesterone": ["Progesterone Ovulation (FP)", "Progesterone"],
  "Folate (FP)": ["Folate (FP)", "Folate"],
  "Folate": ["Folate (FP)", "Folate"],
  "Testosterone (VBD + C)": ["Testosterone (VBD + C)", "Testosterone (VBD+C)", "Testosterone"],
  "Testosterone (VBD+C)": ["Testosterone (VBD + C)", "Testosterone (VBD+C)", "Testosterone"],
  "Testosterone": ["Testosterone (VBD + C)", "Testosterone (VBD+C)", "Testosterone"],
  "Vitamin B12 Levels (VBD + C)": ["Vitamin B12 Levels (VBD + C)", "Vitamin B12 Levels (VBD+C)", "Vitamin B12"],
  "Vitamin B12 Levels (VBD+C)": ["Vitamin B12 Levels (VBD + C)", "Vitamin B12 Levels (VBD+C)", "Vitamin B12"],
  "Vitamin B12": ["Vitamin B12 Levels (VBD + C)", "Vitamin B12 Levels (VBD+C)", "Vitamin B12"],
  "FSH Menopause (VBD)": ["FSH Menopause (VBD)", "FSH Menopause", "FSH"],
  "FSH Menopause": ["FSH Menopause (VBD)", "FSH Menopause", "FSH"],
  "FSH": ["FSH Menopause (VBD)", "FSH Menopause", "FSH"],
  "TSH Thyroid Screening (VBD)": ["TSH Thyroid Screening (VBD)", "Thyroid (TSH)"],
  "Thyroid (TSH)": ["TSH Thyroid Screening (VBD)", "Thyroid (TSH)"]
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "All": Activity,
  "Women's Health": Heart,
  "Men's Health": Shield,
  "Children's Health": Smile,
  "Neurodivergence": Brain,
  "Skin Health": Sparkles,
  "Sports Performance": Zap,
  "Pain, Fatigue & Inflammation": Flame,
  "TBN Leadership Team": Users,
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

const SpecialistsDirectory = () => {
  const location = useLocation();
  const state = location.state as { category?: SpecialistCategory; profession?: string; search?: string; testingTier?: string; testingTiers?: string[] } | null;

  const [activeCategory, setActiveCategory] = useState<SpecialistCategory>(state?.category || "All");
  const [activeProfession, setActiveProfession] = useState<string>(state?.profession || "All");
  const [locationSearch, setLocationSearch] = useState(state?.search || "");
  const [selectedTestingTiers, setSelectedTestingTiers] = useState<string[]>(() => {
    if (state?.testingTiers) return state.testingTiers;
    if (state?.testingTier) return [state.testingTier];
    return [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [showAmbassadorsOnly, setShowAmbassadorsOnly] = useState(false);
  const [selectedNameSearch, setSelectedNameSearch] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleTestingTierToggle = (tierId: string) => {
    const isSelected = selectedTestingTiers.includes(tierId);
    if (!isSelected) {
      setSelectedTestingTiers(prev => [...prev, tierId]);
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
      setSelectedTestingTiers(prev => prev.filter(id => id !== tierId && !testsToRemove.includes(id)));
    }
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeProfession, locationSearch, selectedTestingTiers]);
  
  const { data: specialists = [], isLoading, error } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  // Apply a basic filter just for show (only show approved profiles in the grid)
  const approvedSpecialists = specialists.filter(s => s.is_approved === true);
  const allApprovedNames = Array.from(new Set(approvedSpecialists.map(s => s.name).filter(Boolean)));
  
  // Separate into regular specialists and ambassadors
  const regularSpecialistsOnly = approvedSpecialists.filter(s => !AMBASSADOR_SLUGS.includes(s.slug));
  const ambassadorsOnly = approvedSpecialists.filter(s => AMBASSADOR_SLUGS.includes(s.slug));

  const filtered = regularSpecialistsOnly.filter((s) => {
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

    let matchesProfession = true;
    if (activeProfession !== "All") {
      matchesProfession = !!(s.category && s.category === activeProfession);
    }
      
    const matchesLocation = !locationSearch || 
      (s.location && s.location.toLowerCase().includes(locationSearch.toLowerCase())) ||
      (s.address && s.address.toLowerCase().includes(locationSearch.toLowerCase()));
    
    const matchesTestingTiers = selectedTestingTiers.length === 0 || selectedTestingTiers.some(tierOrTest => {
      if (tierOrTest === "foundational" || tierOrTest === "baseline" || tierOrTest === "advanced") {
        const mappedTests = TIER_MAPPINGS[tierOrTest] || [];
        return s.primary_testing_methods && s.primary_testing_methods.some(method => {
          const cleanMethod = method.trim().toLowerCase();
          return mappedTests.some(testName => testName.toLowerCase() === cleanMethod);
        });
      } else {
        const equivalents = TEST_EQUIVALENTS[tierOrTest] || [tierOrTest];
        const lowerEquivalents = equivalents.map(e => e.toLowerCase().trim());
        return s.primary_testing_methods && s.primary_testing_methods.some(method => {
          return lowerEquivalents.includes(method.trim().toLowerCase());
        });
      }
    });

    const matchesNameSearch = !selectedNameSearch || (s.name && s.name.toLowerCase().includes(selectedNameSearch.toLowerCase()));

    return matchesCategory && matchesProfession && matchesLocation && matchesTestingTiers && matchesNameSearch;
  });

  const filteredAmbassadors = ambassadorsOnly.filter((s) => {
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

    let matchesProfession = true;
    if (activeProfession !== "All") {
      matchesProfession = !!(s.category && s.category === activeProfession);
    }
      
    const matchesLocation = !locationSearch || 
      (s.location && s.location.toLowerCase().includes(locationSearch.toLowerCase())) ||
      (s.address && s.address.toLowerCase().includes(locationSearch.toLowerCase()));
    
    const matchesTestingTiers = selectedTestingTiers.length === 0 || selectedTestingTiers.some(tierOrTest => {
      if (tierOrTest === "foundational" || tierOrTest === "baseline" || tierOrTest === "advanced") {
        const mappedTests = TIER_MAPPINGS[tierOrTest] || [];
        return s.primary_testing_methods && s.primary_testing_methods.some(method => {
          const cleanMethod = method.trim().toLowerCase();
          return mappedTests.some(testName => testName.toLowerCase() === cleanMethod);
        });
      } else {
        const equivalents = TEST_EQUIVALENTS[tierOrTest] || [tierOrTest];
        const lowerEquivalents = equivalents.map(e => e.toLowerCase().trim());
        return s.primary_testing_methods && s.primary_testing_methods.some(method => {
          return lowerEquivalents.includes(method.trim().toLowerCase());
        });
      }
    });

    const matchesNameSearch = !selectedNameSearch || (s.name && s.name.toLowerCase().includes(selectedNameSearch.toLowerCase()));

    return matchesCategory && matchesProfession && matchesLocation && matchesTestingTiers && matchesNameSearch;
  });

  const ITEMS_PER_PAGE = 24;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedSpecialists = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-secondary/30 font-sans">
      <Navbar alwaysSolid />

      {/* Header & Search Area */}
      <section className="pt-24 md:pt-32 pb-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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
                  <Select value={activeCategory} onValueChange={(val) => setActiveCategory(val as SpecialistCategory)}>
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
              
              <SearchField 
                icon={MapPin} 
                label="Location" 
                placeholder="County" 
                value={locationSearch}
                onChange={setLocationSearch}
              />
            </div>

            <div className="p-1 flex items-center bg-background shrink-0 w-full md:w-auto h-12 md:h-full md:border-l md:border-border">
              <Button className="w-full md:w-auto h-full px-5 text-xs md:text-sm font-bold whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-sm flex items-center justify-center gap-1.5">
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
                <h3 className="font-semibold text-sm tracking-widest uppercase">Filters</h3>
                <button 
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveProfession("All");
                    setLocationSearch("");
                    setSelectedTestingTiers([]);
                    setShowAmbassadorsOnly(false);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="Clear all filters"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>

              {/* TBN Brand Ambassadors filter */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-xs uppercase tracking-widest text-[#9f1e13] font-sans">
                  TBN Brand Ambassadors
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="filter-ambassadors" 
                      className="rounded border-border data-[state=checked]:bg-primary data-[state=checked]:text-white" 
                      checked={showAmbassadorsOnly}
                      onCheckedChange={(checked) => setShowAmbassadorsOnly(!!checked)}
                    />
                    <Label htmlFor="filter-ambassadors" className="text-sm font-medium text-muted-foreground cursor-pointer">
                      View Brand Ambassadors Only
                    </Label>
                  </div>
                </div>
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

              {/* Profession filter */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Profession</h4>
                <div className="space-y-3">
                  {[
                    "All",
                    "Medical & Clinical Specialists",
                    "Allied Health & Clinical Practitioners",
                    "Functional, Preventative & Holistic Health",
                    "Health, Lifestyle, Mindset & Beauty",
                    "Mental Health & Neuro-Specialists",
                    "Sports Performance & Rehabilitation",
                    "TBN Leadership Team"
                  ].map((prof) => (
                    <div className="flex items-center space-x-3" key={prof}>
                      <Checkbox 
                        id={`prof-${prof}`} 
                        className="rounded border-border data-[state=checked]:bg-primary data-[state=checked]:text-white" 
                        checked={activeProfession === prof}
                        onCheckedChange={() => setActiveProfession(prof)}
                      />
                      <Label htmlFor={`prof-${prof}`} className="text-sm font-normal text-muted-foreground cursor-pointer">
                        {prof}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location filter */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Location</h4>
                <Input 
                  placeholder="County" 
                  className="bg-background border-border text-sm h-10" 
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                />
              </div>

              {/* Testing Expertise */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Testing Expertise</h4>
                <div className="space-y-4">
                  {[
                    { 
                      id: "foundational", 
                      title: "FOUNDATIONAL FINGER PRICK IN CLINIC OR AT HOME", 
                      subtext: "In-clinic or online", 
                      tests: ["Omega Balance Ratio", "Gut Health Test"] 
                    },
                    { 
                      id: "baseline", 
                      title: "BASELINE POINT OF CARE SCREENING FINGER PRICK IN CLINIC", 
                      subtext: "15 Minute Test Results - Point of Care Testing", 
                      tests: [
                        "Vitamin D Levels (FP)",
                        "HbA1c - Diabetes (FP)",
                        "hS-CRP Heart Screening (FP)",
                        "CRP Inflammation (FP)",
                        "RF Rheumatoid Screening Arthritis (FP)",
                        "Cortisol Screening Stress Hormone (FP)",
                        "Ferritin Iron Levels (FP)",
                        "Cystatin C Levels Kidney Screening (FP)",
                        "HCG+ß Pregnancy Indication (FP)",
                        "AMH Ovarian Reserve Level (FP)",
                        "Progesterone Ovulation (FP)",
                        "Folate (FP)",
                        "NT-proBNP Heart Monitoring (VBD)",
                        "RSV/Influenza A/B (NS)"
                      ] 
                    },
                    { 
                      id: "advanced", 
                      title: "ADVANCED POINT OF CARE SCREENING PHLEBOTOMY/BLOOD DRAW IN CLINIC", 
                      subtext: "15 Minute Test Results - Point of Care Testing", 
                      tests: [
                        "Testosterone (VBD + C)",
                        "Vitamin B12 Levels (VBD + C)",
                        "FSH Menopause (VBD)",
                        "TSH Thyroid Screening (VBD)"
                      ] 
                    }
                  ].map((exp) => (
                    <div className="space-y-2" key={exp.id}>
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id={`exp-${exp.id}`} 
                          className="rounded border-border mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:text-white" 
                          checked={selectedTestingTiers.includes(exp.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedTestingTiers(prev => [...prev, exp.id]);
                            } else {
                              setSelectedTestingTiers(prev => prev.filter(id => id !== exp.id && !exp.tests.includes(id)));
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
                                  if (checked) {
                                    setSelectedTestingTiers(prev => [...prev, subtest]);
                                  } else {
                                    setSelectedTestingTiers(prev => prev.filter(id => id !== subtest));
                                  }
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

            {/* Results Grid */}
            <div className="flex-1 space-y-6 overflow-hidden">
              
              {/* Mobile Filter Dropdowns */}
              <div className="flex lg:hidden pb-3 border-b border-border w-full gap-2 overflow-x-auto whitespace-nowrap -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Left: Pathway Dropdown */}
                <div className="shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 h-9 border rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm ${
                          activeCategory !== "All"
                            ? "bg-[#9f1e13] border-[#9f1e13] text-white hover:bg-[#861910] hover:text-white"
                            : "bg-background border-border text-foreground hover:bg-secondary/20"
                        }`}
                      >
                        <span>
                          {activeCategory === "All" ? "Pathway" : activeCategory}
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 bg-background border border-border p-1.5 rounded-xl shadow-md z-50">
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
                        const isSelected = activeCategory === spec;
                        return (
                          <DropdownMenuItem
                            key={spec}
                            onClick={() => setActiveCategory(spec as SpecialistCategory)}
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

                {/* Middle: Profession Dropdown */}
                <div className="shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 h-9 border rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm ${
                          activeProfession !== "All"
                            ? "bg-[#9f1e13] border-[#9f1e13] text-white hover:bg-[#861910] hover:text-white"
                            : "bg-background border-border text-foreground hover:bg-secondary/20"
                        }`}
                      >
                        <span>
                          {activeProfession === "All" ? "Profession" : activeProfession}
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-64 bg-background border border-border p-1.5 rounded-xl shadow-md z-50">
                      <DropdownMenuLabel className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase px-2.5 py-1.5">
                        Select Profession
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-border/60 my-1" />
                      {[
                        "All",
                        "Medical & Clinical Specialists",
                        "Allied Health & Clinical Practitioners",
                        "Functional, Preventative & Holistic Health",
                        "Health, Lifestyle, Mindset & Beauty",
                        "Mental Health & Neuro-Specialists",
                        "Sports Performance & Rehabilitation",
                        "TBN Leadership Team"
                      ].map((prof) => {
                        const isSelected = activeProfession === prof;
                        return (
                          <DropdownMenuItem
                            key={prof}
                            onClick={() => setActiveProfession(prof)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                              isSelected 
                                ? "bg-primary/10 text-primary" 
                                : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span>{prof === "All" ? "All Professions" : prof}</span>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Right: Testing Categories Dropdown */}
                <div className="shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 h-9 border rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm ${
                          selectedTestingTiers.length > 0
                            ? "bg-[#9f1e13] border-[#9f1e13] text-white hover:bg-[#861910] hover:text-white"
                            : "bg-background border-border text-foreground hover:bg-secondary/20"
                        }`}
                      >
                        <span>
                          {selectedTestingTiers.length === 0 ? "Testing" : getTestingButtonLabel(selectedTestingTiers)}
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 bg-background border border-border p-1.5 rounded-xl shadow-md z-50">
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

              {/* Results Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/80 pb-4">
                <div>
                  <h2 className="text-[11px] sm:text-xs md:text-[15px] lg:text-[17px] xl:text-lg font-bold uppercase tracking-wider whitespace-nowrap">
                    {showAmbassadorsOnly ? (
                      <span>{filteredAmbassadors.length} TBN Brand Ambassadors</span>
                    ) : (
                      <span>
                        {filtered.length} Leading TBN Specialists &amp; {filteredAmbassadors.length} TBN Brand Ambassadors
                      </span>
                    )}
                  </h2>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">
                    Showing results matching your health profile
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 relative z-30">
                  {/* Ambassadors Toggle Button */}
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAmbassadorsOnly(!showAmbassadorsOnly)}
                    className={`lg:hidden flex items-center gap-1.5 px-3.5 py-1.5 h-9 border rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm ${
                      showAmbassadorsOnly 
                        ? "bg-[#9f1e13] border-[#9f1e13] text-white hover:bg-[#861910] hover:text-white" 
                        : "bg-background border-border text-foreground hover:bg-secondary/20"
                    }`}
                  >
                    <span>Ambassadors</span>
                  </Button>

                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-muted-foreground font-semibold uppercase tracking-wider shrink-0">Name:</span>
                    <div className="relative w-40 sm:w-48 lg:w-56">
                      <div className="flex items-center border border-border rounded-xl bg-background px-3 py-1.5 shadow-sm">
                      <input
                        type="text"
                        placeholder="Type name..."
                        value={nameInput}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNameInput(val);
                          if (!val) {
                            setSelectedNameSearch("");
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            const matches = allApprovedNames.filter(name => 
                              name && typeof name === 'string' && name.toLowerCase().includes(nameInput.toLowerCase())
                            );
                            if (matches.length > 0) {
                              setNameInput(matches[0]);
                              setSelectedNameSearch(matches[0]);
                            } else {
                              setSelectedNameSearch(nameInput);
                            }
                          }
                        }}
                        className="w-full text-xs font-semibold bg-transparent border-none outline-none p-0 focus:ring-0 placeholder:text-muted-foreground/60"
                      />
                      {nameInput && (
                        <button
                          onClick={() => {
                            setNameInput("");
                            setSelectedNameSearch("");
                          }}
                          className="text-muted-foreground hover:text-foreground ml-1"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Autocomplete Dropdown list */}
                    {nameInput && !selectedNameSearch && (
                      <div className="absolute right-0 top-full mt-2 w-full max-h-60 overflow-y-auto bg-background border border-border p-1.5 rounded-xl shadow-lg z-50">
                        {allApprovedNames
                          .filter(name => name && typeof name === 'string' && name.toLowerCase().includes(nameInput.toLowerCase()))
                          .map((name) => (
                            <button
                              key={name}
                              onClick={() => {
                                setNameInput(name);
                                setSelectedNameSearch(name);
                              }}
                              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold hover:bg-secondary/40 text-foreground transition-colors"
                            >
                              {name}
                            </button>
                          ))}
                        {allApprovedNames.filter(name => name && typeof name === 'string' && name.toLowerCase().includes(nameInput.toLowerCase())).length === 0 && (
                          <div className="px-3 py-2 text-xs text-muted-foreground">No matches found</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

              {/* Ambassadors Section */}
              {filteredAmbassadors.length > 0 && (
                <div className={showAmbassadorsOnly ? "space-y-6 animate-[fadeIn_0.3s_ease-out]" : "space-y-6 pb-10 border-b border-border/80 mb-10"}>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-6">
                    {filteredAmbassadors.map((specialist, index) => (
                      <div 
                        key={`${specialist.slug}-${index}`}
                        className="flex flex-col overflow-hidden bg-background border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                      >
                        {/* Top Image Box */}
                        <Link to={`/ambassadors/${specialist.slug}`} className="block w-full aspect-[3/4] bg-secondary relative group cursor-pointer overflow-hidden">
                          <img
                            src={specialist.image}
                            alt={specialist.name}
                            className="w-full h-full object-cover origin-top transition-transform duration-300 group-hover:scale-105"
                            style={{ objectPosition: specialist.imagePosition || 'center top' }}
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#9f1e13] text-[#faf8f5] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-center py-2 shadow-inner">
                            TBN Brand Ambassador
                          </div>
                        </Link>

                        {/* Bottom Info Box */}
                        <div className="flex-1 flex flex-col justify-between p-3 sm:p-5">
                          <div className="space-y-2">
                            {/* Title Row */}
                            <div className="flex justify-between items-start gap-2.5">
                              <div className="pr-1 flex-1">
                                <h3 className="text-[12px] sm:text-[14px] font-bold tracking-wide uppercase line-clamp-2 leading-tight text-foreground">
                                  {specialist.name}
                                </h3>
                                {specialist.role && (
                                  <p className="text-[10px] sm:text-[12px] font-semibold text-zinc-500 mt-1 leading-snug line-clamp-2">
                                    {specialist.role.split("—")[0].trim()}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Details Row with Icons (Always visible now to show Town) */}
                            <div className="flex items-start gap-1 text-[10px] sm:text-xs text-muted-foreground font-medium pt-1">
                              <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="line-clamp-1 leading-snug">
                                {extractTown(specialist.location) || "London"}
                              </span>
                            </div>
                          </div>

                          {/* Category Badge & View Profile button */}
                          <div className="flex flex-col items-center gap-2 mt-4 pt-3 border-t border-border/50">
                            <span className="inline-block max-w-full text-[9px] sm:text-[10px] font-bold text-[#9f1e13] uppercase tracking-wider whitespace-normal break-words leading-tight w-fit text-center">
                              {specialist.category}
                            </span>
                            <Link to={`/ambassadors/${specialist.slug}`} className="w-full text-center">
                              <Button variant="outline" className="w-full font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs h-auto border-border hover:bg-secondary">
                                View Profile
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialist Cards list */}
              {!showAmbassadorsOnly && (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-6 animate-[fadeIn_0.3s_ease-out]">
                  {paginatedSpecialists.map((specialist, index) => (
                    <div 
                      key={`${specialist.slug}-${index}`}
                      className="flex flex-col overflow-hidden bg-background border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                    >
                      {/* Top Image Box */}
                      <Link to={`/specialists/${specialist.slug}`} className="block w-full aspect-[3/4] bg-secondary relative group cursor-pointer overflow-hidden">
                        <img
                          src={specialist.image}
                          alt={specialist.name}
                          className="w-full h-full object-cover origin-top transition-transform duration-300 group-hover:scale-105"
                          style={{ objectPosition: specialist.imagePosition || 'center top' }}
                          loading="lazy"
                        />
                      </Link>

                      {/* Bottom Info Box */}
                      <div className="flex-1 flex flex-col justify-between p-3 sm:p-5">
                        <div className="space-y-2">
                          {/* Title Row */}
                          <div className="flex justify-between items-start gap-2.5">
                            <div className="pr-1 flex-1">
                              <h3 className="text-[12px] sm:text-[14px] font-bold tracking-wide uppercase line-clamp-2 leading-tight text-foreground">
                                {specialist.name}
                              </h3>
                              {specialist.role && (
                                <p className="text-[10px] sm:text-[12px] font-semibold text-zinc-500 mt-1 leading-snug line-clamp-2">
                                  {specialist.role.split("—")[0].trim()}
                                </p>
                              )}
                            </div>
                            
                            {/* Rating Badge */}
                            {specialist.rating && (
                              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-secondary rounded text-[9px] sm:text-[11px] font-bold shrink-0">
                                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary text-primary" />
                                <span>{specialist.rating}</span>
                              </div>
                            )}
                          </div>

                          {/* Details Row with Icons (Always visible now to show Town) */}
                          <div className="flex items-start gap-1 text-[10px] sm:text-xs text-muted-foreground font-medium pt-1">
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-1 leading-snug">
                              {extractTown(specialist.location) || "London"}
                            </span>
                          </div>
                        </div>

                        {/* Category Badge & View Profile button */}
                        <div className="flex flex-col items-center gap-2 mt-4 pt-3 border-t border-border/50">
                          <span className="inline-block max-w-full text-[9px] sm:text-[10px] font-bold text-[#9f1e13] uppercase tracking-wider whitespace-normal break-words leading-tight w-fit text-center">
                            {specialist.category}
                          </span>
                          <Link to={`/specialists/${specialist.slug}`} className="w-full text-center">
                            <Button variant="outline" className="w-full font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs h-auto border-border hover:bg-secondary">
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {!showAmbassadorsOnly && totalPages > 1 && (
                <div className="pt-8 flex items-center justify-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 rounded-md border-border text-muted-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage(prev => Math.max(prev - 1, 1));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-8 h-8 rounded-md ${
                        currentPage === page 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                          : "border-border hover:bg-secondary text-foreground bg-transparent"
                      }`}
                      variant={currentPage === page ? "default" : "outline"}
                    >
                      {page}
                    </Button>
                  ))}

                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-8 h-8 rounded-md border-border text-muted-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage(prev => Math.min(prev + 1, totalPages));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {!showAmbassadorsOnly && filtered.length === 0 && (
                <div className="text-center py-20 bg-background border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-2">No specialists found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                </div>
              )}

              {showAmbassadorsOnly && filteredAmbassadors.length === 0 && (
                <div className="text-center py-20 bg-background border border-border rounded-xl">
                  <h3 className="text-lg font-bold mb-2">No ambassadors found</h3>
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
