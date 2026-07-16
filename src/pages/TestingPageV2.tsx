import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Microscope,
  Zap,
  Activity,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Brain,
  Droplet,
  Flame,
  Apple,
  Moon,
  Users,
  Compass,
  AlertCircle,
  Briefcase,
  HelpCircle,
  MapPin,
  HeartPulse,
  Info,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Smile,
  BookOpen,
  Stethoscope
} from "lucide-react";

const heroImg = "/images/testing-hero-new.jpg";

const TestingPageV2 = () => {
  const quizContext = useQuiz();
  const openQuiz = quizContext?.openQuiz || (() => {});
  const location = useLocation();
  
  const [showAllMarkers, setShowAllMarkers] = useState(false);
  const [activeStep, setActiveStep] = useState(3);
  const [omegaExpanded, setOmegaExpanded] = useState(false);
  const [gutExpanded, setGutExpanded] = useState(false);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col pt-[85px] md:pt-[96px] bg-[#faf8f5] font-montserrat text-zinc-950 selection:bg-[#9f1e13]/10 selection:text-[#9f1e13]">
      <Navbar alwaysSolid />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center bg-[#faf8f5] overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
            <img 
              src={heroImg} 
              alt="TBN Proactive Health & Testing" 
              className="w-full h-full object-cover object-[center_30%] lg:object-[center_20%]" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/95 lg:via-[#faf8f5]/30 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf8f5] to-transparent lg:hidden"></div>
          </div>
          {/* Bottom Fade Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

          <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
            <div className="max-w-xl lg:max-w-2xl space-y-6">
              <div className="inline-flex flex-col gap-1">
                <span className="text-[#9f1e13] font-bold tracking-[0.2em] text-xs sm:text-sm uppercase font-sans">
                  TEST. TARGET. TRANSFORM.™
                </span>
                <span className="text-zinc-500 font-sans tracking-wide text-xs font-semibold uppercase">
                  Understand More. Act Earlier. Track Progress.
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-[1.1] text-zinc-900">
                A practitioner-led approach to proactive health
              </h1>

              <div className="space-y-4 text-zinc-700 font-medium">
                <p className="text-lg leading-relaxed text-zinc-800">
                  Combining Foundational Testing, rapid Baseline Screening, Advanced Screening and retesting.
                </p>
                <p className="text-base text-zinc-600 font-normal leading-relaxed">
                  Understand your baseline. Explore the factors that may be influencing how you feel. Take your next step with greater clarity.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => openQuiz()}
                  className="bg-[#9f1e13] hover:bg-[#861910] text-white px-8 h-14 text-sm font-bold tracking-wider rounded-xl shadow-lg shadow-red-950/20 transition-all flex items-center justify-center gap-2"
                >
                  BOOK A FREE CONSULTATION <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-[#dbd4c9] text-zinc-800 hover:bg-secondary/20 px-8 h-14 text-sm font-bold tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  <Link to="/specialists">
                    FIND MY NEAREST TBN HUB
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY WE TEST SECTION */}
        <section id="foundations" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#dbd4c9]/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                LOOK BEYOND SYMPTOMS
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 uppercase tracking-wider">
                WHY WE TEST
              </h2>
              <p className="text-lg text-zinc-600 italic">
                Start With Greater Insight
              </p>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left: Symptoms & Intro */}
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-[#faf8f5] border border-[#dbd4c9]/60 p-8 rounded-3xl space-y-6">
                  <h3 className="text-sm font-bold text-[#9f1e13] uppercase tracking-wider font-sans border-b border-zinc-200/60 pb-3">
                    Common Experiences
                  </h3>
                  
                  {/* Symptoms list */}
                  <div className="space-y-3.5">
                    {[
                      { title: "Fatigue & Low Energy", desc: "Waking up depleted, afternoon energy crashes, or relying on stimulants." },
                      { title: "Brain Fog & Cognitive Lag", desc: "Difficulty focusing, forgetfulness, or general lack of mental clarity." },
                      { title: "Disrupted Sleep & Recovery", desc: "Waking during the night, morning stiffness, or prolonged muscle soreness." },
                      { title: "Digestive Discomfort", desc: "Bloating, irregular elimination, or reactions to common foods." }
                    ].map((symptom, i) => (
                      <div 
                        key={i} 
                        className="group bg-white p-5 rounded-2xl border border-[#dbd4c9]/65 hover:border-[#9f1e13]/30 hover:shadow-sm hover:shadow-zinc-100 transition-all duration-300 flex items-start gap-4"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#9f1e13]/30 group-hover:bg-[#9f1e13] shrink-0 mt-1.5 transition-colors" />
                        <div className="space-y-1">
                          <h4 className="text-xs sm:text-sm font-montserrat font-bold text-zinc-900 leading-snug group-hover:text-[#9f1e13] transition-colors">
                            {symptom.title}
                          </h4>
                          <p className="text-[11px] sm:text-[12px] text-zinc-500 font-light leading-relaxed">
                            {symptom.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-zinc-550 leading-relaxed font-light italic">
                    These experiences are complex and can have multiple contributing factors.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-base text-zinc-700 leading-relaxed font-medium">
                    Testing and screening help your practitioner ask better questions, explore relevant markers and create a more personalised pathway around your goals.
                  </p>
                  <div className="inline-flex items-start gap-2.5 p-4 rounded-xl bg-secondary/20 text-xs text-zinc-600 leading-relaxed border border-[#dbd4c9]/40">
                    <Info className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                    <span>
                      Testing supports more informed conversations. Screening is not a diagnosis and does not replace medical care.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Explore Areas list */}
              <div className="lg:col-span-7 bg-gradient-to-br from-[#9f1e13] to-[#80140c] text-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                {/* Subtle grids & background glows */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[#faf8f5]/85 uppercase tracking-[0.25em]">PHYSIOLOGICAL PATHWAYS</span>
                    <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                      WHAT WE MEASURE
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Nutrient status", desc: "Essential vitamins & minerals needed for optimal performance.", icon: Apple },
                      { title: "Omega balance", desc: "Ratio of fatty acids affecting cardiovascular & systemic cell health.", icon: HeartPulse },
                      { title: "Gut health", desc: "Microbial markers & environment driving nutrient utilization.", icon: ShieldCheck },
                      { title: "Blood-sugar indicators", desc: "Insight into cellular energy metabolism & endocrine responses.", icon: Droplet },
                      { title: "Inflammation-related markers", desc: "Understanding systemic physical and vascular recovery variables.", icon: Flame },
                      { title: "Hormone health", desc: "Endocrine balance critical for vitality, recovery, & mental clarity.", icon: Sparkles },
                      { title: "Stress and recovery", desc: "Autonomic response variables & sleep-wake stress markers.", icon: Moon }
                    ].map((area, index) => {
                      const IconComponent = area.icon;
                      return (
                        <div 
                          key={index} 
                          className="flex gap-4 p-5 rounded-2xl bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.14] hover:border-white/30 transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-[13px] font-montserrat font-bold text-white group-hover:text-zinc-100 transition-colors uppercase tracking-wide">{area.title}</h4>
                            <p className="text-[11px] text-zinc-100/90 font-light leading-relaxed">{area.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE TBN TESTING FRAMEWORK SECTION */}
        <section id="test-packages" className="py-24 bg-white relative overflow-hidden">
          <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                THREE LEVELS OF INSIGHT. ONE CONNECTED PATHWAY.
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 uppercase tracking-wider">
                THE TBN TESTING FRAMEWORK
              </h2>
              <p className="text-lg text-zinc-600 font-medium">
                Testing Shaped Around You
              </p>
              <div className="max-w-xl mx-auto pt-2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-zinc-500 font-light">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13]" /> Every pathway begins with consultation.</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13]" /> Screening determined by goals & individual needs.</span>
              </div>
            </div>

            {/* Framework rows */}
            <div className="space-y-8">
              
              {/* Level 1: Foundational Testing */}
              <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-8 sm:p-10 shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#dbd4c9]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                  {/* Left Column (Row Info) */}
                  <div className="lg:col-span-4 flex flex-col justify-between py-2">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#9f1e13] font-sans">LEVEL 1</span>
                        <h3 className="text-3xl font-playfair font-bold text-zinc-900">Foundational Testing</h3>
                        <p className="text-sm font-semibold text-zinc-500 italic">Establish your baseline.</p>
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed font-light">
                        Our Foundational Tests explore two key areas linked to wider health and wellbeing conversations.
                      </p>
                    </div>
                  </div>
                  {/* Right Column (Test cards side-by-side) */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Omega Balance */}
                    <div className="bg-white border border-[#dbd4c9]/60 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden bg-transparent flex items-center justify-center shrink-0">
                            <img src="/images/test-logos/omega3balance.png" alt="Omega balance test" className="object-contain" />
                          </div>
                          <h4 className="text-[14px] font-bold text-zinc-900 uppercase tracking-wide">Omega Balance Test</h4>
                        </div>
                        
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          Explore your omega-6 to omega-3 balance and wider fatty-acid profile.
                        </p>

                        <div className="bg-secondary/15 text-zinc-750 text-[11px] px-3.5 py-2.5 rounded-xl border border-[#dbd4c9]/35 font-light">
                          <p className="font-semibold text-zinc-800">Simple finger-prick test.</p>
                          <p className="text-zinc-600">Complete at home or in clinic.</p>
                        </div>

                        <div className="border-t border-[#dbd4c9]/40 pt-4">
                          <button
                            onClick={() => setOmegaExpanded(!omegaExpanded)}
                            className="w-full flex items-center justify-between text-[11px] font-bold text-zinc-800 uppercase tracking-widest py-1.5 focus:outline-none"
                          >
                            <span>Results include:</span>
                            {omegaExpanded ? <ChevronUp className="w-4 h-4 text-zinc-555" /> : <ChevronDown className="w-4 h-4 text-zinc-555" />}
                          </button>
                          {omegaExpanded && (
                            <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                              <ul className="space-y-3">
                                {[
                                  { name: "Omega-6 to omega-3 balance", desc: "Shows whether your essential fats are balanced for healthy inflammation response." },
                                  { name: "Omega-3 Index", desc: "Shows your level of key omega-3 fats linked to heart, brain and cell health." },
                                  { name: "Cell-fluidity indicator", desc: "Helps show how flexible and responsive your cell membranes are." },
                                  { name: "Protection value", desc: "Shows the level of protective fatty acids available to support healthy cell function." },
                                  { name: "Mental-strength indicator", desc: "Looks at fatty-acid balance linked to focus, mood and brain performance." },
                                  { name: "Wider fatty-acid profile", desc: "Gives a clearer picture of your overall fat balance." }
                                ].map((res, i) => (
                                  <li key={i} className="text-xs leading-normal">
                                    <span className="font-bold text-zinc-850 block">{res.name}</span>
                                    <span className="text-zinc-550 font-light block text-[11px] mt-0.5 leading-relaxed">{res.desc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="border-t border-[#dbd4c9]/40 pt-4 mt-6">
                        <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest block mb-1">Why it matters:</span>
                        <p className="text-xs text-zinc-600 leading-relaxed font-light">
                          Omega balance is linked to inflammation balance, brain health, heart health, joint health, skin health, recovery and long-term wellbeing.
                        </p>
                        <p className="text-xs text-zinc-550 leading-relaxed font-light mt-2 italic">
                          This test helps guide more personalised nutrition and supplement support.
                        </p>
                      </div>
                    </div>

                    {/* Gut Health */}
                    <div className="bg-white border border-[#dbd4c9]/60 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden bg-transparent flex items-center justify-center shrink-0">
                            <img src="/images/test-logos/guthealth1.png" alt="Gut Health test" className="object-contain" />
                          </div>
                          <h4 className="text-[14px] font-bold text-zinc-900 uppercase tracking-wide">Gut Health Test</h4>
                        </div>
                        
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          Explore key gut-health indicators linked to digestion, immunity and metabolism.
                        </p>

                        <div className="bg-secondary/15 text-zinc-750 text-[11px] px-3.5 py-2.5 rounded-xl border border-[#dbd4c9]/35 font-light">
                          <p className="font-semibold text-zinc-800">Simple finger-prick test. No stool sample required.</p>
                          <p className="text-zinc-600">Complete at home or in clinic.</p>
                        </div>

                        <div className="border-t border-[#dbd4c9]/40 pt-4">
                          <button
                            onClick={() => setGutExpanded(!gutExpanded)}
                            className="w-full flex items-center justify-between text-[11px] font-bold text-zinc-800 uppercase tracking-widest py-1.5 focus:outline-none"
                          >
                            <span>Results include:</span>
                            {gutExpanded ? <ChevronUp className="w-4 h-4 text-zinc-555" /> : <ChevronDown className="w-4 h-4 text-zinc-555" />}
                          </button>
                          {gutExpanded && (
                            <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                              <ul className="space-y-3">
                                {[
                                  { name: "IPA level", desc: "Shows beneficial gut-bacteria activity linked to gut-barrier and immune support." },
                                  { name: "Tryptophan level", desc: "Shows an important nutrient pathway linked to gut, brain and metabolic health." },
                                  { name: "Kynurenine level", desc: "Helps show whether tryptophan is being pushed towards immune-stress pathways." },
                                  { name: "IPA:TRP ratio", desc: "Shows how efficiently gut bacteria are converting tryptophan into beneficial compounds." },
                                  { name: "KYN:TRP ratio", desc: "Helps indicate immune activation or stress load." },
                                  { name: "IPA:KYN ratio", desc: "Shows the balance between protective gut activity and stress-driven metabolism." },
                                  { name: "Gut Health Index", desc: "A simple overview score bringing the key markers together." }
                                ].map((res, i) => (
                                  <li key={i} className="text-xs leading-normal">
                                    <span className="font-bold text-zinc-800 block">{res.name}</span>
                                    <span className="text-zinc-550 font-light block text-[11px] mt-0.5 leading-relaxed">{res.desc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="border-t border-[#dbd4c9]/40 pt-4 mt-6">
                        <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest block mb-1">Why it matters:</span>
                        <p className="text-xs text-zinc-600 leading-relaxed font-light">
                          Gut health is linked to digestion, nutrient utilisation, immune balance, the gut-brain axis, metabolism and wider wellbeing.
                        </p>
                        <p className="text-xs text-zinc-500 leading-relaxed font-light mt-2 italic">
                          This test helps show how well your gut bacteria are functioning and how tryptophan is being used across key health pathways.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 2: Baseline Screening */}
              <div id="rapid-screening" className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-8 sm:p-10 shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#dbd4c9]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                  {/* Left Column (Row Info) */}
                  <div className="lg:col-span-4 flex flex-col justify-between py-2">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#9f1e13] font-sans">LEVEL 2</span>
                        <h3 className="text-3xl font-playfair font-bold text-zinc-900">Baseline Screening</h3>
                        <p className="text-sm font-semibold text-zinc-500 italic">Rapid finger-prick point-of-care screening.</p>
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed font-light">
                        Available through selected TBN clinics and health hubs.
                      </p>
                    </div>
                    <div className="mt-6 lg:mt-0">
                      <p className="text-xs font-semibold inline-flex items-center gap-1.5 bg-[#9f1e13]/5 border border-[#9f1e13]/15 text-[#9f1e13] px-3 py-1.5 rounded-xl">
                        <Zap className="w-3.5 h-3.5 text-[#9f1e13]" /> Selected results typically available in 3–15 minutes.
                      </p>
                    </div>
                  </div>
                  {/* Right Column (Markers & options list details) */}
                  <div className="lg:col-span-8 flex flex-col justify-between gap-8">
                    {/* Section 1: Baseline Screening Markers */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                        Baseline Screening Markers
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          { name: "Vitamin D", level: "Level 2", desc: "Bone, immune & overall health" },
                          { name: "HbA1c", level: "Level 2", desc: "Average blood sugar levels" },
                          { name: "CRP / hs-CRP", level: "Level 2", desc: "Systemic inflammation markers" },
                          { name: "Ferritin", level: "Level 2", desc: "Stored iron reserves" },
                          { name: "Folate", level: "Level 2", desc: "Vitamin B9 & methylation" },
                          { name: "Cortisol", level: "Level 2", desc: "Primary adrenal stress hormone" },
                          { name: "Cystatin C", level: "Level 2", desc: "Glomerular kidney filtration" },
                          { name: "Rheumatoid factor", level: "Level 2", desc: "Autoimmune screen marker" },
                          { name: "HCG-β", level: "Level 2", desc: "Hormonal screen" },
                          { name: "AMH", level: "Level 2", desc: "Anti-Müllerian hormone ovarian reserve" },
                          { name: "Progesterone", level: "Level 2", desc: "Luteal phase support hormone" }
                        ].map((m, i) => (
                          <div key={i} className="bg-white border border-[#dbd4c9]/50 p-4 rounded-xl flex flex-col justify-between hover:border-[#9f1e13]/30 transition-colors shadow-sm text-zinc-900">
                            <div>
                              <span className="text-[9px] font-bold text-[#9f1e13] uppercase tracking-wider block mb-1">
                                {m.level}
                              </span>
                              <span className="text-xs font-bold text-zinc-900">{m.name}</span>
                            </div>
                            <p className="text-[11px] text-zinc-500 font-light mt-1.5">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 2: Additional Point-of-Care Options */}
                    <div className="space-y-3 border-t border-[#dbd4c9]/50 pt-6">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                        Additional Point-of-Care Options
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          { name: "NT-proBNP", level: "Level 2 Additional", desc: "Cardiac wall stress screening" },
                          { name: "RSV / Influenza A & B", level: "Level 2 Additional", desc: "Acute point-of-care virus test" }
                        ].map((m, i) => (
                          <div key={i} className="bg-white border border-[#dbd4c9]/50 p-4 rounded-xl flex flex-col justify-between hover:border-[#9f1e13]/30 transition-colors shadow-sm text-zinc-900">
                            <div>
                              <span className="text-[9px] font-bold text-[#9f1e13] uppercase tracking-wider block mb-1">
                                {m.level}
                              </span>
                              <span className="text-xs font-bold text-zinc-900">{m.name}</span>
                            </div>
                            <p className="text-[11px] text-zinc-500 font-light mt-1.5">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 3: Advanced Screening */}
              <div id="advanced-testing" className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-8 sm:p-10 shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#dbd4c9]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                  {/* Left Column (Row Info) */}
                  <div className="lg:col-span-4 flex flex-col justify-between py-2">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#9f1e13] font-sans">LEVEL 3</span>
                        <h3 className="text-3xl font-playfair font-bold text-zinc-900">Advanced Screening</h3>
                        <p className="text-sm font-semibold text-zinc-500 italic">Point-of-care blood-draw screening.</p>
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed font-light">
                        Where deeper insight is needed, Advanced Screening may be recommended following consultation.
                      </p>
                    </div>
                  </div>
                  {/* Right Column (Markers list and bottom card disclaimer) */}
                  <div className="lg:col-span-8 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Markers may include:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { name: "Testosterone", level: "Level 3", desc: "Primary androgen status" },
                          { name: "Vitamin B12", level: "Level 3", desc: "Neurological & red cell support" },
                          { name: "FSH", level: "Level 3", desc: "Follicle-stimulating hormone" },
                          { name: "TSH", level: "Level 3", desc: "Thyroid-stimulating hormone" }
                        ].map((m, i) => (
                          <div key={i} className="bg-white border border-[#dbd4c9]/50 p-4 rounded-xl flex flex-col justify-between hover:border-[#9f1e13]/30 transition-colors shadow-sm">
                            <div>
                              <span className="text-[9px] font-bold text-[#9f1e13] uppercase tracking-wider block mb-1">
                                {m.level}
                              </span>
                              <span className="text-xs font-bold text-zinc-900">{m.name}</span>
                            </div>
                            <p className="text-[11px] text-zinc-500 font-light mt-1.5">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-[#dbd4c9]/50 bg-secondary/10 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 rounded-b-[2.5rem]">
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light text-center">
                        Screening is determined by consultation. Screening does not diagnose medical conditions or replace medical care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. MORE THAN A TEST RESULT SECTION */}
        <section className="py-24 bg-[#faf8f5] relative overflow-hidden">
          {/* Top Fade Transition */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
          
          {/* Bottom Fade Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

          <div className="absolute inset-y-0 right-0 w-1/3 bg-[#dbd4c9]/10 rounded-l-[100px] blur-[80px] pointer-events-none"></div>
          
          <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex flex-col gap-1">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                    TEST. SUPPORT. RETEST.
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 leading-tight uppercase tracking-wider">
                    MORE THAN A TEST RESULT
                  </h2>
                  <p className="text-lg text-zinc-600 font-medium italic mt-1">
                    Progress Should Be Measured — Not Assumed
                  </p>
                </div>
                
                <div className="space-y-4 text-zinc-700 font-medium leading-relaxed">
                  <p>
                    Testing creates a starting point.
                  </p>
                  <p className="text-base text-zinc-600 font-normal leading-relaxed">
                    Your practitioner uses your consultation, goals and relevant results to shape a personalised lifestyle and nutrition pathway.
                  </p>
                  <p className="text-base text-zinc-600 font-normal leading-relaxed">
                    Retesting helps you review progress, refine your next step and identify where further investigation may be appropriate.
                  </p>
                </div>
              </div>

              {/* Right Column visual box */}
              <div className="lg:col-span-6 flex items-center">
                <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-[#dbd4c9]/45 shadow-lg relative group">
                  <img 
                    src="/images/diagnostic-device.jpg" 
                    alt="TBN Point-of-Care Diagnostic Device" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FURTHER INVESTIGATION SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                WHEN A DEEPER LEVEL OF INSIGHT IS NEEDED
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 uppercase tracking-wider">
                FURTHER INVESTIGATION
              </h2>
              <p className="text-lg text-zinc-600 font-medium">
                From Lifestyle Support to Medical Follow-Up
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-base text-zinc-700 leading-relaxed text-center font-medium max-w-2xl mx-auto">
                Sometimes testing or screening is only the beginning. Where appropriate, our practitioner network can guide the next step through:
              </p>

              {/* Pathway points grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { 
                    name: "Advanced Laboratory Testing", 
                    desc: "Explore more detailed biomarkers where greater clinical insight is needed."
                  },
                  { 
                    name: "Private GP Support", 
                    desc: "Fast access to experienced private GPs for further investigation and medical guidance where appropriate."
                  },
                  { 
                    name: "Specialist Referral", 
                    desc: "Connect with trusted doctors and specialist practitioners across the TBN Collective."
                  },
                  { 
                    name: "Retesting & Progress Monitoring", 
                    desc: "Track your progress, measure your results and refine your personalised pathway over time."
                  }
                ].map((item, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="group bg-gradient-to-b from-white to-[#faf8f5] border border-[#dbd4c9]/60 hover:border-[#9f1e13]/30 p-8 rounded-[2rem] flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300 min-h-[210px] relative overflow-hidden"
                    >
                      {/* Subtly animated line indicator at the top of card on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#9f1e13] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      
                      <div className="space-y-4 flex-grow flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="text-[14px] font-montserrat font-bold text-zinc-900 leading-snug group-hover:text-[#9f1e13] transition-colors uppercase tracking-wide">
                            {item.name}
                          </h4>
                          <span className="font-mono text-[10px] font-bold text-zinc-400 group-hover:text-[#9f1e13]/80 transition-colors shrink-0 mt-0.5">
                            0{idx + 1}
                          </span>
                        </div>
                        
                        <p className="text-[11px] text-zinc-550 font-light leading-relaxed flex-grow">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Reassurance footer bar */}
              <div className="bg-[#9f1e13]/5 border border-[#9f1e13]/10 rounded-2xl p-6 text-center max-w-2xl mx-auto mt-12 flex items-center justify-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#9f1e13] shrink-0" />
                <p className="text-sm text-zinc-700 font-bold leading-relaxed">
                  Escalation is not a failure. It is an essential part of a safe and professional client pathway.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE TBN COLLECTIVE SECTION */}
        <section className="py-24 bg-[#faf8f5] relative overflow-hidden">
          {/* Top Fade Transition */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
          
          {/* Bottom Fade Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#dbd4c9]/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column layout */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex flex-col gap-1">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                    ONE COLLECTIVE. MULTIPLE AREAS OF EXPERTISE.
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 leading-tight uppercase tracking-wider">
                    THE TBN COLLECTIVE
                  </h2>
                  <p className="text-lg text-[#9f1e13] font-semibold italic mt-1">
                    Guided by Practitioners Who Want to Go Deeper
                  </p>
                </div>

                <div className="space-y-4 text-zinc-700 font-medium">
                  <p className="text-base text-zinc-700 leading-relaxed">
                    TBN brings together doctors, lifestyle practitioners, pharmacists, osteopaths, chiropractors, therapists, coaches and health specialists.
                  </p>
                  <p className="text-base text-zinc-600 font-normal leading-relaxed border-l-2 border-[#9f1e13] pl-4">
                    Different disciplines. One connected mission: <br />
                    <strong className="text-zinc-800 font-bold">To move from symptom conversations to measurable health conversations.</strong>
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    asChild 
                    className="bg-[#9f1e13] hover:bg-[#861910] text-white px-8 h-14 text-sm font-bold tracking-wider rounded-xl shadow-lg transition-all"
                  >
                    <Link to="/specialists">
                      EXPLORE OUR HEALTH PATHWAYS <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column graphical layout */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { title: "Doctors", count: "MDs & GPs", desc: "Clinical oversight & escalations" },
                  { title: "Lifestyle Practitioners", count: "Nutritionists", desc: "Daily functional support pathways" },
                  { title: "Pharmacists", count: "Prescribers", desc: "Point-of-care screening control" },
                  { title: "Therapists & Coaches", count: "Specialists", desc: "Long-term behavioural change" }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#dbd4c9] p-6 rounded-2xl space-y-2 shadow-sm">
                    <span className="text-[10px] font-bold text-[#9f1e13] uppercase tracking-widest">{item.count}</span>
                    <h4 className="text-base font-playfair font-bold text-zinc-950">{item.title}</h4>
                    <p className="text-[11px] text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* 9. Learn. Launch. Lead. Details Section */}
        <section className="py-24 bg-secondary relative overflow-hidden">
          {/* Top Fade Transition from light section above */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#faf8f5] to-transparent pointer-events-none z-10" />
          
          {/* Bottom Fade Transition to light testing day section below */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent pointer-events-none z-10" />

          <div className="container max-w-[1400px] mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-16">
              <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-sm">For Businesses</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#9f1e13] mt-4">Learn. Launch. Grow. Lead.</h2>
              <p className="text-lg text-zinc-700 mt-6 max-w-2xl mx-auto font-light">
                A complete integration model for clinics, pharmacies, health clubs, academies, resorts and wellness businesses. We help you build a commercially sustainable pathway.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Box 1: Learn */}
              <div className="space-y-6 p-6 sm:p-8 border border-[#dbd4c9] rounded-[2rem] bg-[#faf8f5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="space-y-5">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9f1e13]/70 block">Phase 1</span>
                    <h3 className="text-3xl font-bold font-playfair text-[#9f1e13]">Learn</h3>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1">Master The TBN Method™</h4>
                  </div>
                  <div className="w-12 h-0.5 bg-[#9f1e13]/30 mx-auto rounded-full" />
                  <div className="text-zinc-600 text-sm leading-relaxed font-normal space-y-4">
                    <p className="font-semibold text-zinc-800 text-center text-sm md:text-base min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">Access certified training covering:</p>
                    <ul className="space-y-2.5 text-left w-fit mx-auto text-sm md:text-base">
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Foundational Testing</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Gut Health</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Point-of-Care Screening</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Consultations &amp; Results Reviews</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Specialist Health Pathways</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Protocol Integration</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Compliance &amp; Best Practice</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="font-bold text-zinc-800 text-sm mt-4 pt-4 border-t border-[#dbd4c9]/50 text-center">Built for real-world implementation.</p>
              </div>

              {/* Box 2: Launch */}
              <div className="space-y-6 p-6 sm:p-8 border border-[#dbd4c9] rounded-[2rem] bg-[#faf8f5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="space-y-5">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9f1e13]/70 block">Phase 2</span>
                    <h3 className="text-3xl font-bold font-playfair text-[#9f1e13]">Launch</h3>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1">Everything You Need To Go Live</h4>
                  </div>
                  <div className="w-12 h-0.5 bg-[#9f1e13]/30 mx-auto rounded-full" />
                  <div className="text-zinc-600 text-sm leading-relaxed font-normal space-y-4">
                    <p className="font-semibold text-zinc-800 text-center text-sm md:text-base min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">Launch testing clinics &amp; programmes with confidence. Receive:</p>
                    <ul className="space-y-2.5 text-left w-fit mx-auto text-sm md:text-base">
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Marketing Campaigns</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Social Media Assets</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Workshop Frameworks</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Consultation Systems</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Results Review Templates</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>AI Marketing Tools</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Launch Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="font-bold text-zinc-800 text-sm mt-4 pt-4 border-t border-[#dbd4c9]/50 text-center">No need to build systems from scratch.</p>
              </div>

              {/* Box 3: Grow */}
              <div className="space-y-6 p-6 sm:p-8 border border-[#dbd4c9] rounded-[2rem] bg-[#faf8f5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="space-y-5">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9f1e13]/70 block">Phase 3</span>
                    <h3 className="text-3xl font-bold font-playfair text-[#9f1e13]">Grow</h3>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1">Create Long-Term Client Pathways</h4>
                  </div>
                  <div className="w-12 h-0.5 bg-[#9f1e13]/30 mx-auto rounded-full" />
                  <div className="text-zinc-650 text-sm leading-relaxed font-normal space-y-4">
                    <p className="font-semibold text-zinc-800 text-center text-sm md:text-base min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">Generate recurring revenue through:</p>
                    <ul className="space-y-2.5 text-left w-fit mx-auto text-sm md:text-base">
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Reviews &amp; Retesting</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Memberships</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Workshops &amp; Events</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Health Programmes</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#9f1e13] shrink-0 mt-2" />
                        <span>Follow-Up Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="font-bold text-zinc-800 text-sm mt-4 pt-4 border-t border-[#dbd4c9]/50 text-center">Help increase client engagement, retention and lifetime value.</p>
              </div>

              {/* Box 4: Lead */}
              <div className="space-y-6 p-6 sm:p-8 border border-[#dbd4c9] rounded-[2rem] bg-[#faf8f5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="space-y-5">
                  <div className="text-center space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#9f1e13]/70 block">Phase 4</span>
                    <h3 className="text-3xl font-bold font-playfair text-[#9f1e13]">Lead</h3>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1">Become The Trusted Authority</h4>
                  </div>
                  <div className="w-12 h-0.5 bg-[#9f1e13]/30 mx-auto rounded-full" />
                  <div className="text-zinc-655 text-sm leading-relaxed font-normal space-y-4">
                    <div className="min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">
                      <p className="text-center px-2 text-sm md:text-base">
                        Position your business as a recognised destination for preventative health, personalised wellbeing and measurable outcomes.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-zinc-800 text-sm mt-4 pt-4 border-t border-[#dbd4c9]/50 text-center">Supported by a growing collective of doctors, specialists and practitioners.</p>
              </div>
            </div>
          </div>
        </section>
        {/* 10. HOST A TESTING HUB DAY SECTION */}
        <section className="py-24 bg-[#faf8f5] relative overflow-hidden">
          {/* Top Fade Transition */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
          
          {/* Bottom Fade Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

          <div className="container max-w-[900px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                BRING PROACTIVE HEALTH INTO YOUR COMMUNITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 leading-tight uppercase tracking-wider">
                HOST A TESTING HUB DAY
              </h2>
              <p className="text-lg text-[#9f1e13] font-semibold italic">
                Host a TBN Testing Hub Day
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 font-light max-w-xl mx-auto leading-relaxed">
              Bring consultations, Foundational Testing and rapid Baseline Screening into your clinic, health club, pharmacy, workplace or wellness space.
            </p>

            <div className="pt-4">
              <Button 
                asChild
                className="bg-[#9f1e13] hover:bg-[#861910] text-white px-8 h-14 text-sm font-bold tracking-wider rounded-xl shadow-lg shadow-red-950/20 transition-all"
              >
                <Link to="/partner-with-us">
                  HOST A TESTING HUB DAY <Calendar className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 11. CLIENT CTA SECTION */}
        <section className="py-24 bg-[#9f1e13] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container max-w-[900px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-zinc-200 uppercase">
                START EARLIER. KNOW MORE.
              </span>
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white uppercase tracking-wider">
                PREVENTION FIRST
              </h2>
              <p className="text-lg text-[#dbd4c9] font-semibold italic">
                Test-based insight for a more proactive life.
              </p>
            </div>

            <p className="text-zinc-100 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Understand key areas of imbalance earlier — and take targeted action before symptoms become your normal.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => openQuiz()}
                className="bg-white hover:bg-zinc-50 text-[#9f1e13] px-8 h-14 text-sm font-bold tracking-wider rounded-xl shadow-lg transition-all"
              >
                BOOK MY FREE CONSULTATION <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8 h-14 text-sm font-bold tracking-wider rounded-xl transition-all cursor-pointer"
              >
                <Link to="/specialists">
                  FIND MY NEAREST TBN HUB
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8 h-14 text-sm font-bold tracking-wider rounded-xl transition-all"
              >
                <Link to="/partner-with-us">
                  PARTNER WITH US
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TestingPageV2;
