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
  Info
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import NotFound from "./NotFound";

const AmbassadorProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-secondary/10 font-sans">
      <Navbar alwaysSolid />

      {/* Main Content container */}
      <main className="pt-24 md:pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          {/* Back button */}
          <div className="mb-8">
            <button
              onClick={() => navigate("/specialists")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-500 hover:text-[#9f1e13] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Specialists Directory
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Profile Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-6 sm:p-8 shadow-sm text-center relative overflow-hidden">
                {/* Visual red line at top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9f1e13] to-[#80140c]" />

                {/* Photo */}
                <div className="relative w-full max-w-[240px] aspect-square rounded-[2rem] overflow-hidden mx-auto border-4 border-secondary shadow-md bg-secondary mb-6">
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: ambassador.imagePosition || 'center top' }}
                  />
                  <div className="absolute top-3 left-3 bg-[#9f1e13] text-white text-[8px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
                    TBN AMBASSADOR
                  </div>
                </div>

                {/* Title and Badge */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1 bg-[#9f1e13]/5 text-[#9f1e13] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#9f1e13]/10">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span>Official Partner</span>
                  </div>
                  <h1 className="text-2xl font-extrabold uppercase tracking-tight text-zinc-900 font-sans">
                    {ambassador.name}
                  </h1>
                  {ambassador.role && (
                    <p className="text-xs sm:text-sm font-semibold text-[#9f1e13] uppercase tracking-wider">
                      {ambassador.role}
                    </p>
                  )}
                </div>

                {/* Location Info */}
                {ambassador.location && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-500 font-medium mt-4 pt-4 border-t border-[#dbd4c9]/40">
                    <MapPin className="w-3.5 h-3.5 text-[#9f1e13]" />
                    <span>{ambassador.location}</span>
                  </div>
                )}
              </div>

              {/* Quick credentials details block */}
              {ambassador.credentials && ambassador.credentials.length > 0 && (
                <div className="bg-white border border-[#dbd4c9]/60 rounded-[2rem] p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#9f1e13]" /> Key Credentials
                  </h3>
                  <ul className="space-y-3">
                    {ambassador.credentials.map((cred, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs font-medium text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Dynamic Info & Test-Based Journey */}
            <div className="lg:col-span-8 space-y-8">
              {/* Test-Based Journey Card (Visual Comparative Graph) */}
              {balanceJourney ? (
                <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-8 shadow-sm space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#9f1e13]/5 text-[#9f1e13] rounded-2xl border border-[#9f1e13]/10">
                      <HeartPulse className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest block">OBJECTIVE SCIENCE</span>
                      <h2 className="text-xl sm:text-2xl font-playfair font-bold text-zinc-900 uppercase">
                        OMEGA 6:3 BALANCE JOURNEY
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    TBN brand ambassadors undergo regular finger-prick balance testing to monitor cellular inflammation parameters, optimizing recovery times and cardiovascular health parameters using evidence-based lifestyle changes.
                  </p>

                  {/* Comparative bars */}
                  <div className="space-y-5 pt-2">
                    {/* Initial Test Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                        <span className="text-zinc-500">Initial Test Result</span>
                        <span className="text-red-600 font-mono text-sm">{balanceJourney.initial}:1</span>
                      </div>
                      <div className="h-4 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                        {/* Max width corresponding to high ratio (e.g. 28:1 = 100%) */}
                        <div 
                          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min((balanceJourney.initial / 28) * 100, 100)}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-red-500 block italic leading-none">
                        High systemic inflammation & cellular stiffness indicators.
                      </span>
                    </div>

                    {/* Current Test Bar */}
                    {balanceJourney.current && (
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                          <span className="text-zinc-500">Target Balanced Result</span>
                          <span className="text-emerald-600 font-mono text-sm">{balanceJourney.current}:1</span>
                        </div>
                        <div className="h-4 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-1000"
                            style={{ width: `${(balanceJourney.current / 28) * 100}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-emerald-600 block italic leading-none">
                          Optimal cellular membrane permeability & systemic balance achieved.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Ross Pearce's Custom TBN Gym Integration Info
                <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-8 shadow-sm space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#9f1e13]/5 text-[#9f1e13] rounded-2xl border border-[#9f1e13]/10">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest block">COACHING INTEGRATION</span>
                      <h2 className="text-xl sm:text-2xl font-playfair font-bold text-zinc-900 uppercase">
                        GYM TESTING PATHWAY
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    Ross Pearce integrates objective balance testing directly into the elite training regimens at RJ's Boxing Gym. Fighters undergo regular screening to measure cardiorespiratory cellular recoverability, eliminating guesswork from training load management.
                  </p>

                  <div className="inline-flex items-start gap-3 p-4 rounded-2xl bg-[#9f1e13]/5 text-xs text-zinc-700 leading-relaxed border border-[#9f1e13]/10 max-w-xl">
                    <Info className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" />
                    <span>
                      "With balance testing, we focus on real, objective metrics rather than assuming. It helps me structure optimal training cycles for professional boxers preparing for British title matches."
                    </span>
                  </div>
                </div>
              )}

              {/* Bio & Quote */}
              <div className="bg-white border border-[#dbd4c9]/60 rounded-[2.5rem] p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans mb-4">
                    Biography & Focus
                  </h3>
                  
                  <div className="space-y-4 text-zinc-750 font-normal leading-relaxed text-sm">
                    {ambassador.bio && ambassador.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Quote Block */}
                {ambassador.quote && (
                  <div className="bg-secondary/20 rounded-2xl p-6 relative border border-[#dbd4c9]/35">
                    <Quote className="w-8 h-8 text-[#9f1e13]/10 absolute top-4 left-4" />
                    <p className="text-zinc-700 italic font-medium text-xs sm:text-sm relative z-10 leading-relaxed pl-6 pt-2">
                      {ambassador.quote}
                    </p>
                  </div>
                )}
              </div>

              {/* Ambassador Statement / Why Partnered */}
              <div className="bg-[#9f1e13] text-white rounded-[2.5rem] p-8 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#dbd4c9]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#dbd4c9]">THE TBN CONNECTION</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold uppercase">
                    Why I Choose Test-Based Nutrition
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-light">
                    {ambassador.why_joined_tbn || "Assessing and optimizing omega-3 status represents an essential, often overlooked component of an elite training regime. By replacing generic dietary patterns with objective testing, we secure optimal physical recovery, reduce joint stiffness, and enhance cognitive clarity."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AmbassadorProfile;
