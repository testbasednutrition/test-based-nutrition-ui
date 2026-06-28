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

const heroImg = "/images/testing-hero-new.png";

const TestingPageV2 = () => {
  const quizContext = useQuiz();
  const openQuiz = quizContext?.openQuiz || (() => {});
  const location = useLocation();
  
  const [showAllMarkers, setShowAllMarkers] = useState(false);
  const [activeStep, setActiveStep] = useState(3);

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
                  onClick={() => openQuiz()}
                  variant="outline"
                  className="border-[#dbd4c9] text-zinc-800 hover:bg-secondary/20 px-8 h-14 text-sm font-bold tracking-wider rounded-xl transition-all"
                >
                  FIND MY NEAREST TBN HUB
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY WE TEST SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#dbd4c9]/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                WHY WE TEST
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900">
                LOOK BEYOND SYMPTOMS
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
                  
                  {/* Symptoms grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Fatigue",
                      "Brain fog",
                      "Poor sleep",
                      "Low energy",
                      "Digestive discomfort",
                      "Reduced recovery"
                    ].map((symptom, i) => (
                      <div 
                        key={i} 
                        className="bg-white px-4 py-3.5 rounded-xl border border-[#dbd4c9]/50 shadow-sm flex items-center gap-2 hover:border-[#9f1e13]/30 transition-colors"
                      >
                        <AlertCircle className="w-4 h-4 text-[#9f1e13]/60 shrink-0" />
                        <span className="text-xs font-bold text-zinc-800">{symptom}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-zinc-500 leading-relaxed font-light">
                    These experiences can have multiple contributing factors.
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
              <div className="lg:col-span-7 bg-[#9f1e13] text-white rounded-[2rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <h3 className="font-playfair text-2xl font-bold mb-8 text-white flex items-center gap-2">
                  We explore areas such as:
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
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
                      <div key={index} className="flex gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-[14px] font-bold text-zinc-100 group-hover:text-white transition-colors">{area.title}</h4>
                          <p className="text-[12px] text-zinc-200 font-light leading-relaxed">{area.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE TBN METHOD™ SECTION */}
        <section className="py-24 bg-[#faf8f5] relative overflow-hidden">
          {/* Top Fade Transition */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
          
          {/* Bottom Fade Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#dbd4c9]/25 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                THE TBN METHOD™
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900">
                A STRUCTURED PATHWAY — NOT ONE-OFF TESTING
              </h2>
              <p className="text-lg text-zinc-600 font-medium">
                How TBN Works
              </p>
            </div>

            {/* Horizontal Pathway Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm font-bold text-[#9f1e13] mb-12 bg-white border border-[#dbd4c9] px-6 py-3 rounded-2xl shadow-sm w-fit mx-auto">
              {["Discover", "Test", "Target", "Transform", "Retest", "Escalate"].map((flow, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-[#dbd4c9] mx-1">→</span>}
                  <button
                    onClick={() => setActiveStep(i)}
                    className={`transition-all duration-200 focus:outline-none ${
                      activeStep === i 
                        ? "underline decoration-[#9f1e13] decoration-2 underline-offset-4 font-bold text-[#9f1e13]" 
                        : "text-[#9f1e13]/60 hover:text-[#9f1e13] font-medium"
                    }`}
                  >
                    {flow}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Stepper Flow Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "DISCOVER",
                  stepNum: "01",
                  desc: "Begin with a personalised consultation to understand your symptoms, concerns, health goals and lifestyle."
                },
                {
                  title: "TEST",
                  stepNum: "02",
                  desc: "Use foundational testing and, where appropriate, rapid point-of-care screening to create a clearer picture of your health."
                },
                {
                  title: "TARGET",
                  stepNum: "03",
                  desc: "Identify the most relevant health priorities and create a personalised nutrition and lifestyle pathway."
                },
                {
                  title: "TRANSFORM",
                  stepNum: "04",
                  desc: "Follow a structured support plan designed to help you make measurable, sustainable changes."
                },
                {
                  title: "RETEST",
                  stepNum: "05",
                  desc: "Track progress, review changes and refine your pathway using follow-up testing where appropriate."
                },
                {
                  title: "ESCALATE",
                  stepNum: "06",
                  desc: "Where screening results or concerns require further investigation, access private GP support or specialist referral pathways."
                }
              ].map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-10 rounded-3xl shadow-lg border relative overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-[#9f1e13] text-white border-transparent scale-[1.03] z-10" 
                        : "bg-white text-zinc-950 border-gray-100 hover:shadow-xl hover:scale-[1.01]"
                    }`}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-10 transition-transform ${
                      isActive ? "bg-white/5" : "bg-[#dbd4c9]/20"
                    }`}></div>
                    
                    <span className={`font-bold text-6xl absolute top-8 right-8 font-playfair ${
                      isActive ? "text-white opacity-10" : "text-[#9f1e13] opacity-20"
                    }`}>
                      {item.stepNum}
                    </span>

                    <h3 className={`text-2xl font-bold font-playfair tracking-widest uppercase mb-4 ${
                      isActive ? "text-white" : "text-[#9f1e13]"
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mt-4 ${
                      isActive ? "text-[#faf8f5]/95 font-light" : "text-gray-600 font-medium"
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. THE TBN TESTING FRAMEWORK SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                THE TBN TESTING FRAMEWORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900">
                THREE LEVELS OF INSIGHT. ONE CONNECTED PATHWAY.
              </h2>
              <p className="text-lg text-zinc-600 font-medium">
                Testing Shaped Around You
              </p>
              <div className="max-w-xl mx-auto pt-2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-zinc-500 font-light">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13]" /> Every pathway begins with consultation.</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13]" /> Screening determined by goals & individual needs.</span>
              </div>
            </div>

            {/* Framework columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Level 1: Foundational Testing */}
              <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#dbd4c9]/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#9f1e13] font-sans">LEVEL 1</span>
                    <h3 className="text-2xl font-playfair font-bold text-zinc-900">Foundational Testing</h3>
                    <p className="text-xs font-semibold text-zinc-500 italic">Establish your baseline.</p>
                  </div>
                  
                  <p className="text-[13px] text-zinc-600 leading-relaxed font-light border-b border-[#dbd4c9]/50 pb-4">
                    Our Foundational Tests explore two key areas linked to wider health and wellbeing conversations.
                  </p>

                  <div className="space-y-6">
                    {/* Omega Balance */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#dbd4c9]/40 bg-white p-1 flex items-center justify-center shrink-0">
                          <img src="/images/test-logos/omega3balance.png" alt="Omega balance test" className="object-contain" />
                        </div>
                        <h4 className="text-[14px] font-bold text-zinc-900 uppercase tracking-wide">Omega Balance Test</h4>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Explore your omega-6 to omega-3 balance and wider fatty-acid profile.
                      </p>
                      <div className="bg-white/80 border border-[#dbd4c9]/50 p-3.5 rounded-2xl space-y-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Results include:</span>
                        <ul className="space-y-1.5 text-xs text-zinc-700 font-medium">
                          {["Omega-6 to omega-3 balance", "Omega-3 index", "Cell-fluidity indicator", "Protection value", "Mental-strength indicator"].map((res, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#9f1e13]"></span>
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Gut Health */}
                    <div className="space-y-3 pt-3 border-t border-[#dbd4c9]/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#dbd4c9]/40 bg-white p-1 flex items-center justify-center shrink-0">
                          <img src="/images/test-logos/guthealth1.png" alt="Gut Health test" className="object-contain" />
                        </div>
                        <h4 className="text-[14px] font-bold text-zinc-900 uppercase tracking-wide">Gut Health Test</h4>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Explore relevant gut-health indicators and nutritional considerations.
                      </p>
                      <div className="border-l-2 border-[#9f1e13]/30 pl-3 pt-0.5">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">Why it matters:</span>
                        <p className="text-xs text-zinc-600 font-light leading-relaxed">
                          Gut health is connected to digestion, nutrient utilisation, the gut-brain axis and wider wellbeing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 2: Baseline Screening */}
              <div className="bg-[#9f1e13] text-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-lg relative overflow-hidden border border-[#dbd4c9]/25">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#dbd4c9] font-sans">LEVEL 2</span>
                    <h3 className="text-2xl font-playfair font-bold text-white">Baseline Screening</h3>
                    <p className="text-xs font-semibold text-zinc-200 italic">Rapid finger-prick point-of-care screening.</p>
                  </div>
                  
                  <div className="space-y-3 border-b border-white/15 pb-4">
                    <p className="text-[13px] text-zinc-100 leading-relaxed font-light">
                      Available through selected TBN clinics and health hubs.
                    </p>
                    <p className="text-xs text-white font-semibold flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-xl">
                      <Zap className="w-3.5 h-3.5" /> Selected results typically available in 3–15 minutes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-2">Markers may include:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Vitamin D", "HbA1c", "CRP / hs-CRP", "Ferritin", 
                          "Folate", "Cortisol", "Cystatin C", "Rheumatoid factor", 
                          "HCG-β", "AMH", "Progesterone"
                        ].map((m, i) => (
                          <span key={i} className="text-[11px] font-bold bg-white/10 border border-white/15 text-white px-2.5 py-1 rounded-lg">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/15">
                      <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest block mb-2">Additional point-of-care options:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["NT-proBNP", "RSV / Influenza A & B"].map((m, i) => (
                          <span key={i} className="text-[11px] font-bold bg-white/20 border border-white/30 text-white px-2.5 py-1 rounded-lg">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15">
                  <Button 
                    onClick={() => setShowAllMarkers(!showAllMarkers)}
                    className="w-full bg-white hover:bg-zinc-100 text-[#9f1e13] font-bold uppercase tracking-widest text-xs h-12 rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>{showAllMarkers ? "HIDE MARKERS" : "VIEW ALL SCREENING MARKERS"}</span>
                    {showAllMarkers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Level 3: Advanced Screening */}
              <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#dbd4c9]/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#9f1e13] font-sans">LEVEL 3</span>
                    <h3 className="text-2xl font-playfair font-bold text-zinc-900">Advanced Screening</h3>
                    <p className="text-xs font-semibold text-zinc-500 italic">Point-of-care blood-draw screening.</p>
                  </div>
                  
                  <p className="text-[13px] text-zinc-600 leading-relaxed font-light border-b border-[#dbd4c9]/50 pb-4">
                    Where deeper insight is needed, Advanced Screening may be recommended following consultation.
                  </p>

                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2.5">Markers may include:</span>
                    <div className="grid grid-cols-2 gap-2">
                      {["Testosterone", "Vitamin B12", "FSH", "TSH"].map((m, i) => (
                        <div key={i} className="bg-white border border-[#dbd4c9]/50 p-3 rounded-xl flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#9f1e13]"></div>
                          <span className="text-xs font-bold text-zinc-800">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#dbd4c9]/50 bg-secondary/15 -mx-8 -mb-8 p-6 rounded-b-[2.5rem]">
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-light text-center">
                    Screening is determined by consultation. Screening does not diagnose medical conditions or replace medical care.
                  </p>
                </div>
              </div>

            </div>

            {/* Show all markers expansion list */}
            {showAllMarkers && (
              <div className="mt-12 bg-secondary/20 border border-[#dbd4c9]/80 rounded-[2rem] p-8 shadow-inner animate-in fade-in slide-in-from-top-4 duration-300">
                <h4 className="text-lg font-playfair font-bold text-zinc-900 mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#9f1e13]" /> Full Point-of-Care Marker List
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                    { name: "Progesterone", level: "Level 2", desc: "Luteal phase support hormone" },
                    { name: "NT-proBNP", level: "Level 2 Additional", desc: "Cardiac wall stress screening" },
                    { name: "RSV / Influenza A & B", level: "Level 2 Additional", desc: "Acute point-of-care virus test" },
                    { name: "Testosterone", level: "Level 3", desc: "Primary androgen status" },
                    { name: "Vitamin B12", level: "Level 3", desc: "Neurological & red cell support" },
                    { name: "FSH", level: "Level 3", desc: "Follicle-stimulating hormone" },
                    { name: "TSH", level: "Level 3", desc: "Thyroid-stimulating hormone" }
                  ].map((m, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-[#dbd4c9]/50 shadow-sm flex flex-col justify-between hover:border-[#9f1e13]/30 transition-colors">
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
            )}
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
                    MORE THAN A TEST RESULT
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 leading-tight">
                    TEST. SUPPORT. RETEST.
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
                FURTHER INVESTIGATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900">
                WHEN A DEEPER LEVEL OF INSIGHT IS NEEDED
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
                  { name: "In-depth laboratory testing", desc: "Exploratory testing patterns via advanced referral." },
                  { name: "Private GP support", desc: "Integrative consultations for primary care screening." },
                  { name: "Specialist referral", desc: "Direct route to clinicians inside the TBN collective." },
                  { name: "Ongoing monitoring", desc: "Follow-up screen tracking to secure physical baselines." }
                ].map((item, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="bg-white border border-[#dbd4c9]/45 hover:border-[#9f1e13]/40 p-8 rounded-[1.8rem] flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[180px]"
                    >
                      <div className="space-y-3 flex-grow flex flex-col justify-between">
                        <h4 className="text-[15px] sm:text-[16px] font-playfair font-bold text-[#9f1e13] uppercase tracking-wider leading-snug">{item.name}</h4>
                        <p className="text-[12px] text-zinc-500 font-light leading-relaxed">{item.desc}</p>
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
                    THE TBN COLLECTIVE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 leading-tight">
                    ONE COLLECTIVE. MULTIPLE AREAS OF EXPERTISE.
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

        {/* 8. CLIENT CTA SECTION */}
        <section className="py-20 bg-[#9f1e13] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container max-w-[900px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-zinc-200 uppercase">
                CLIENT CTA
              </span>
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white">
                START EARLIER. UNDERSTAND MORE.
              </h2>
              <p className="text-lg text-[#dbd4c9] font-semibold italic">
                Take a More Proactive Approach to Your Health
              </p>
            </div>

            <p className="text-zinc-100 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Begin with a consultation and explore the most relevant testing, screening and support pathway for your needs.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => openQuiz()}
                className="bg-white hover:bg-zinc-50 text-[#9f1e13] px-8 h-14 text-sm font-bold tracking-wider rounded-xl shadow-lg transition-all"
              >
                BOOK MY FREE CONSULTATION <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                onClick={() => openQuiz()}
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8 h-14 text-sm font-bold tracking-wider rounded-xl transition-all"
              >
                FIND MY NEAREST TBN HUB
              </Button>
            </div>
          </div>
        </section>

        {/* 9. PARTNER WITH TBN SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column layout */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex flex-col gap-1">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] font-sans">
                    PARTNER WITH TBN
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 leading-tight">
                    FOR CLINICS, HEALTH CLUBS, RESORTS AND WELLNESS BUSINESSES
                  </h2>
                  <p className="text-lg text-zinc-600 font-medium italic mt-1">
                    Bring Test-Based Nutrition Into Your Business
                  </p>
                </div>

                <div className="space-y-4 text-zinc-600 leading-relaxed font-light">
                  <p className="text-zinc-800 font-medium text-base">
                    TBN is more than a testing provider.
                  </p>
                  <p>
                    We help clinics, health clubs, pharmacies, resorts and wellness businesses introduce structured pathways built around testing, screening, retesting and practitioner-led support.
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    asChild 
                    className="bg-[#9f1e13] hover:bg-[#861910] text-white px-8 h-14 text-sm font-bold tracking-wider rounded-xl shadow-lg transition-all"
                  >
                    <Link to="/partner-with-us-3">
                      BOOK A PARTNER DISCOVERY CALL <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column layout steps */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">LEARN. LAUNCH. GROW. LEAD.</span>
                <div className="space-y-4">
                  {[
                    { step: "LEARN", text: "Build confidence through training and pathway education." },
                    { step: "LAUNCH", text: "Introduce TBN with marketing assets, workshops and campaigns." },
                    { step: "GROW", text: "Create longer-term pathways through follow-up and retesting." },
                    { step: "LEAD", text: "Expand your impact through partnerships and practitioner support." }
                  ].map((stepItem, i) => (
                    <div key={i} className="bg-[#faf8f5] border border-[#dbd4c9]/60 hover:border-[#9f1e13]/20 p-6 rounded-2xl flex gap-4 transition-all">
                      <span className="text-xs font-bold text-[#9f1e13] font-mono tracking-widest shrink-0 mt-0.5 w-16">
                        {stepItem.step}
                      </span>
                      <p className="text-xs text-zinc-700 font-medium leading-relaxed">
                        {stepItem.text}
                      </p>
                    </div>
                  ))}
                </div>
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
                HOST A TESTING HUB DAY
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-900 leading-tight">
                BRING PROACTIVE HEALTH INTO YOUR COMMUNITY
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
                <Link to="/partner-with-us-3">
                  HOST A TESTING HUB DAY <Calendar className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(159,30,19,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          
          <div className="container max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-10">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#9f1e13] uppercase font-sans">
                A NEW ERA IN NUTRITIONAL HEALTHCARE
              </span>
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-zinc-900">
                Test. Target. Transform.™
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Understand your baseline. Explore the factors that may need attention. Take your next step with greater clarity.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button 
                onClick={() => openQuiz()}
                className="flex-1 bg-[#9f1e13] hover:bg-[#861910] text-white h-14 text-xs font-bold tracking-wider rounded-xl shadow-lg transition-all"
              >
                BOOK A FREE CONSULTATION
              </Button>
              <Button 
                onClick={() => openQuiz()}
                variant="outline"
                className="flex-1 border-[#dbd4c9] text-zinc-800 hover:bg-secondary/20 h-14 text-xs font-bold tracking-wider rounded-xl transition-all"
              >
                FIND MY NEAREST TBN HUB
              </Button>
              <Button 
                asChild
                className="flex-1 bg-[#9f1e13] hover:bg-[#861910] text-white h-14 text-xs font-bold tracking-wider rounded-xl transition-all"
              >
                <Link to="/partner-with-us-3">
                  PARTNER WITH TBN
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
