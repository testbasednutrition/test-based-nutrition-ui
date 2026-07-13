import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MapPin, 
  Quote, 
  Award, 
  BadgeCheck, 
  Activity, 
  CheckCircle2, 
  HeartPulse, 
  Sparkles, 
  Zap,
  Info,
  X,
  Maximize2
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import NotFound from "./NotFound";

// High-quality action and training galleries for the brand ambassadors
const AMBASSADOR_GALLERIES: Record<string, string[]> = {
  "mariusz-domasat": [
    "https://test-basednutrition.com/assets/images/mariusz1-698x465.jpeg",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800", // Grappling/Wrestling
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", // MMA / Combat Sports
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800"  // Athletic Conditioning
  ],
  "sonny-hardy": [
    "https://test-basednutrition.com/assets/images/sonny-hardy-5-698x740.jpeg",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800", // Boxing heavy bag
    "https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&q=80&w=800", // Boxing focus gloves
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"  // Fitness/strength
  ],
  "mike-grundy": [
    "https://test-basednutrition.com/assets/images/mike-grundy3-477x611.jpg",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800", // Wrestling match
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", // Athletic training
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800"  // Cardio conditioning
  ],
  "ross-pearce": [
    "https://test-basednutrition.com/assets/images/ross-pearce-3-698x873.jpg",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800", // Boxing ring workout
    "https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&q=80&w=800", // Pad training
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"  // Focus gloves
  ]
};

const AmbassadorProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const { data: specialists = [], isLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  // Find Ambassador profile
  const ambassador = specialists.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!ambassador) return <NotFound />;

  // Parse omega results for the visual comparison bar
  const parseResults = (str?: string) => {
    if (!str) return null;
    const regex = /(\d+(?:\.\d+)?)\s*:\s*1/g;
    const matches = [...str.matchAll(regex)];
    if (matches.length >= 2) {
      return {
        initial: parseFloat(matches[0][1]),
        current: parseFloat(matches[1][1])
      };
    } else if (matches.length === 1) {
      return {
        initial: parseFloat(matches[0][1]),
        current: null
      };
    }
    return null;
  };

  const balanceJourney = parseResults(ambassador.omegaResults);
  const galleryImages = AMBASSADOR_GALLERIES[ambassador.slug] || [];

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans">
      <Navbar alwaysSolid />

      <main className="pt-24 md:pt-32 pb-24 relative overflow-hidden">
        {/* Subtle branded background elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#dbd4c9]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-[#9f1e13]/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          {/* Back button */}
          <div className="mb-8">
            <button
              onClick={() => navigate("/specialists")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-[#9f1e13] transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </button>
          </div>

          {/* 1. HERO PHOTO-LED MAGAZINE ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
            {/* Left: Large Editorial Portrait */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-[2.5rem] overflow-hidden border-2 border-[#dbd4c9]/60 shadow-xl bg-secondary aspect-[3/4]">
                <img
                  src={ambassador.image}
                  alt={ambassador.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: ambassador.imagePosition || 'center top' }}
                />
                
                {/* Photo stamp overlays */}
                <div className="absolute top-4 left-4 bg-[#9f1e13] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border border-[#9f1e13]/20">
                  TBN Brand Ambassador
                </div>

                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-[#faf8f5] text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
                  <Activity className="w-3.5 h-3.5 text-[#dbd4c9]" />
                  <span>Verified Athlete</span>
                </div>
              </div>
            </div>

            {/* Right: Big Typography Headers and Signature Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-[#9f1e13]/5 text-[#9f1e13] px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-[#9f1e13]/10">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Official TBN Collective Member</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-black text-zinc-900 tracking-tight leading-none uppercase">
                  {ambassador.name}
                </h1>
                {ambassador.role && (
                  <p className="text-sm font-extrabold text-[#9f1e13] uppercase tracking-widest font-sans">
                    {ambassador.role}
                  </p>
                )}
              </div>

              {/* Signature Quote block where text flows around */}
              {ambassador.quote && (
                <div className="bg-white border-l-4 border-[#9f1e13] border-t border-r border-b border-zinc-200/50 rounded-r-3xl p-6 shadow-sm relative overflow-hidden">
                  <Quote className="w-12 h-12 text-[#9f1e13]/5 absolute -top-1 -left-1" />
                  <p className="text-zinc-700 italic font-medium text-sm sm:text-base relative z-10 leading-relaxed pl-4">
                    "{ambassador.quote}"
                  </p>
                </div>
              )}

              {/* Location & Quick Details Row */}
              <div className="flex flex-wrap gap-4 items-center pt-2">
                {ambassador.location && (
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-bold uppercase tracking-wider bg-zinc-100/60 border border-zinc-200/60 px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-[#9f1e13]" />
                    <span>{ambassador.location}</span>
                  </div>
                )}
                {ambassador.accepting_new_clients !== false && (
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-bold uppercase tracking-wider bg-zinc-100/60 border border-zinc-200/60 px-3 py-1.5 rounded-full">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Accepting Consultations</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 2. DYNAMIC BIO & JOURNEY LAYOUT (REVOLVING TEXT AND DATA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            {/* Bio description text (revolving around) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-8 shadow-sm space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans border-b border-zinc-100 pb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#9f1e13]" /> Biography & Focus
                </h3>
                
                <div className="space-y-4 text-zinc-700 font-light leading-relaxed text-sm md:text-base">
                  {ambassador.bio && ambassador.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Credentials card */}
              {ambassador.credentials && ambassador.credentials.length > 0 && (
                <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-8 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans border-b border-zinc-100 pb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#9f1e13]" /> Key Credentials & Achievements
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 pt-1">
                    {ambassador.credentials.map((cred, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-xs font-semibold text-zinc-800">
                        <CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Balance Journey Comparison Chart */}
            <div className="lg:col-span-5 space-y-6">
              {balanceJourney ? (
                <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-8 shadow-sm space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#9f1e13]/5 text-[#9f1e13] rounded-xl border border-[#9f1e13]/10">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest block">Objective Science</span>
                      <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">
                        OMEGA 6:3 BALANCE SHIFT
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 font-light leading-relaxed">
                    Personal balance values before and after optimizing systemic lipid ratios using Test-Based Nutrition.
                  </p>

                  <div className="space-y-4 pt-2">
                    {/* Initial Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                        <span className="text-zinc-400">Initial Test</span>
                        <span className="text-red-600 font-mono text-sm">{balanceJourney.initial}:1</span>
                      </div>
                      <div className="h-3.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                        <div 
                          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                          style={{ width: `${Math.min((balanceJourney.initial / 28) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Current Bar */}
                    {balanceJourney.current && (
                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                          <span className="text-zinc-400">Retest Result</span>
                          <span className="text-emerald-600 font-mono text-sm">{balanceJourney.current}:1</span>
                        </div>
                        <div className="h-3.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                            style={{ width: `${(balanceJourney.current / 28) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-8 shadow-sm space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#9f1e13]/5 text-[#9f1e13] rounded-xl border border-[#9f1e13]/10">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest block">Coaching Integration</span>
                      <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">
                        GYM TESTING REGIMEN
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 font-light leading-relaxed">
                    Integrating objective biomarkers and finger-prick balance testing directly into elite sports coaching.
                  </p>

                  <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-[#9f1e13]/5 border border-[#9f1e13]/10 text-xs text-zinc-700 font-medium">
                    <Info className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" />
                    <span>
                      Ross implements testing metrics across professional fighters to regulate cardiorespiratory cellular recoverability, improving performance cycles.
                    </span>
                  </div>
                </div>
              )}

              {/* TBN statement */}
              <div className="bg-[#9f1e13] text-white rounded-[2.5rem] p-8 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#dbd4c9] font-sans flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> The TBN Paradigm
                  </h4>
                  <h3 className="text-lg font-bold uppercase tracking-wide">
                    Why I Choose Test-Based Nutrition
                  </h3>
                  <p className="text-xs text-zinc-200 leading-relaxed font-light">
                    {ambassador.why_joined_tbn || "Eliminating generic guesses with objective biomarkers. Regular cell-membrane balance testing provides cellular-level insight, improving recoverability, cardiorespiratory balance, and overall physical agility."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. INTERACTIVE EDITORIAL GALLERY SECTION */}
          {galleryImages.length > 0 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest block">PORTFOLIO</span>
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-zinc-900 uppercase">
                  Training & Action Gallery
                </h3>
              </div>

              {/* Grid layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(imgUrl)}
                    className="relative group rounded-2xl overflow-hidden aspect-square border border-[#dbd4c9]/60 shadow-sm cursor-pointer bg-secondary"
                  >
                    <img
                      src={imgUrl}
                      alt={`${ambassador.name} action ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-2.5 bg-white/95 rounded-full shadow-lg text-[#9f1e13] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* FULLSCREEN LIGHTBOX OVERLAY */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-[#9f1e13] transition-colors p-2 bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-[90vw] max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
            <img
              src={lightboxImage}
              alt="Ambassador fullscreen action"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AmbassadorProfile;
