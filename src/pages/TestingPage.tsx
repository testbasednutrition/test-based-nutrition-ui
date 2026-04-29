import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Gallery4 } from "@/components/ui/gallery4";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import { FocusRail } from "@/components/ui/focus-rail";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import {
  Activity, HeartPulse, Brain, Leaf, FileText, Search, MessageCircle, TrendingUp,
  AlertTriangle, ArrowRight, CheckCircle2, Stethoscope, Microscope, Quote, Users, Droplet,
  Home, MapPin, FlaskConical, Target, Settings, RefreshCw
} from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200";

const TestingPage = () => {
  const quizContext = useQuiz();
  const openQuiz = quizContext?.openQuiz || (() => {});
  const location = useLocation();

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
  
  const { data: specialists = [], isLoading: isSpecialistsLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  const expertItems = specialists.map((s, index) => ({
    id: s.slug || `expert-${index}`,
    title: s.name,
    description: s.bio && s.bio.length > 0 ? s.bio[0] : 'Health & Wellness Expert',
    meta: `${s.category} • ${s.role}`,
    imageSrc: s.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  }));

  return (
    <div className="min-h-screen flex flex-col pt-[85px] md:pt-[96px] bg-[#fdfdf9] font-montserrat">
      <Navbar alwaysSolid />
      
      {/* FULL BLEED HERO SECTION */}
      <div className="w-full relative bg-[#fdfdf9] flex flex-col overflow-hidden min-h-[600px] lg:min-h-[700px] lg:h-[calc(100vh-96px)]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] z-0">
          <img src={heroImg} alt="Science Behind Test-Based Nutrition" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdf9] via-[#fdfdf9]/70 lg:via-[#fdfdf9]/20 to-transparent"></div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">TEST. TARGET. TRANSFORM.</h3>
              <h1 className="font-playfair text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                The Science Behind Test-Based Nutrition
              </h1>
              
              <div className="text-[16px] xl:text-[17px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium space-y-4">
                 <p>A structured, test-based system designed to understand how your body is functioning — and what to do next.</p>
                 <p>Delivered through clinics, health clubs, and online — supporting individuals, families, and performance environments.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                <button 
                  onClick={() => openQuiz()}
                  className="bg-[#7a2a33] hover:bg-[#5c1c24] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-gray-900 px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Explore Pathways
                </button>
              </div>
           </div>
        </div>
      </div>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 md:pb-16 mb-16 mt-16 lg:mt-24">

        {/* SECTION 1: WHY WE TEST & WHAT IT COVERS & SYMPTOMS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
           {/* WHY WE TEST */}
           <div className="bg-white p-8 lg:p-10 border border-gray-100 rounded-[2rem] shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <p className="font-bold text-[#7a2a33] text-[12px] uppercase tracking-widest mb-3">Because symptoms don’t tell the full story</p>
              <h2 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 tracking-wider mb-6 uppercase">Why We Test</h2>
              <p className="text-[14px] text-gray-700 font-medium mb-6 leading-relaxed">
                 Most approaches react to how you feel. We focus on what may be influencing it.
              </p>
              <p className="font-bold text-gray-900 text-[13px] mb-4">We assess key internal factors such as:</p>
              <ul className="space-y-3 mb-8 flex-grow">
                 {["Nutrient status", "Fatty acid balance", "Blood sugar regulation", "Inflammatory markers", "Hormonal and metabolic signals"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2} />
                       <span className="text-[14px] text-gray-600 font-medium">{item}</span>
                    </li>
                 ))}
              </ul>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                 <p className="text-[12px] text-gray-500 font-semibold italic text-center">
                   These are not diagnoses — they are measurable insights used to guide more informed, personalised decisions.
                 </p>
              </div>
           </div>

           {/* WHAT TBN COVERS */}
           <div className="bg-[#7a2a33] p-8 lg:p-10 border border-[#5c1c24] rounded-[2rem] shadow-lg flex flex-col hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
              <p className="font-bold text-[#d0bfae] text-[12px] uppercase tracking-widest mb-3 relative z-10">A complete system — not isolated testing</p>
              <h2 className="font-playfair text-[26px] md:text-[32px] font-bold text-white tracking-wider mb-6 uppercase relative z-10">What Test-Based Nutrition Covers</h2>
              <p className="text-[14px] text-white/90 font-medium mb-6 leading-relaxed relative z-10">
                 Test-Based Nutrition integrates testing, specialist insight, and structured support into one model.
              </p>
              <p className="font-bold text-white text-[13px] mb-4 relative z-10">We combine:</p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                 {[
                   "Foundational and advanced testing", 
                   "Rapid in-clinic and in-club screening", 
                   "Specialist-led results interpretation", 
                   "Personalised lifestyle and nutrition protocols", 
                   "Structured programmes with retesting",
                   "Delivery across clinics, health clubs, and online"
                 ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2} />
                       <span className="text-[14px] text-white/90 font-medium">{item}</span>
                    </li>
                 ))}
              </ul>
              <div className="bg-black/20 p-4 rounded-xl border border-white/10 relative z-10">
                 <p className="text-[12px] text-white font-semibold text-center">
                   Our specialists and doctors support you with personalised, functional lifestyle solutions aligned to your results — guiding measurable progress over time.
                 </p>
              </div>
           </div>

           {/* HOW TESTING LINKS TO SYMPTOMS */}
           <div className="bg-white p-8 lg:p-10 border border-gray-100 rounded-[2rem] shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <p className="font-bold text-[#7a2a33] text-[12px] uppercase tracking-widest mb-3">What you feel is often a downstream signal</p>
              <h2 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 tracking-wider mb-6 uppercase">How Testing Links To Symptoms</h2>
              <p className="text-[14px] text-gray-700 font-medium mb-6 leading-relaxed">
                 Fatigue. Brain fog. Hormonal disruption. Skin issues. Poor recovery.
              </p>
              <p className="font-bold text-gray-900 text-[13px] mb-4">These may be influenced by:</p>
              <ul className="space-y-3 mb-8 flex-grow">
                 {["Nutrient deficiencies", "Inflammation", "Metabolic imbalance", "Gut health and absorption", "Stress and recovery load"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                       <Activity className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={1.5} />
                       <span className="text-[14px] text-gray-600 font-medium">{item}</span>
                    </li>
                 ))}
              </ul>
              <div className="bg-[#fcfaf7] p-4 rounded-xl border border-[#e9e7dc]">
                 <p className="text-[13px] text-gray-800 font-bold text-center uppercase tracking-widest">
                   Testing helps identify what may be contributing — so support is targeted, not generic.
                 </p>
              </div>
           </div>
        </div>

        {/* SECTION: HOW THE TBN SYSTEM WORKS */}
        <div className="w-full mt-24 mb-24 max-w-5xl mx-auto px-4">
          <div className="bg-[#fcfaf7] rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-sm border border-[#e9e7dc]">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#7a2a33]/5 to-transparent pointer-events-none"></div>

            <div className="text-center relative z-10 mb-12">
              <p className="font-bold text-[#7a2a33] text-[12px] uppercase tracking-widest mb-3">A structured pathway, not guesswork</p>
              <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 tracking-wider mb-8 uppercase">
                How The TBN System Works
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-12">
                {["Test", "Understand", "Apply", "Retest", "Progress"].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-[#7a2a33] border border-[#5c1c24] px-5 py-2.5 rounded-full text-white font-bold text-[14px] uppercase tracking-widest shadow-sm">
                      {step}
                    </div>
                    {index < 4 && (
                      <ArrowRight className="w-5 h-5 text-[#7a2a33] shrink-0" strokeWidth={2.5} />
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
                 <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fcfaf7] border border-[#e9e7dc] flex items-center justify-center shrink-0 text-[#7a2a33] font-bold">1</div>
                    <p className="font-bold text-[13px] text-gray-900">Foundational Testing</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fcfaf7] border border-[#e9e7dc] flex items-center justify-center shrink-0 text-[#7a2a33] font-bold">2</div>
                    <p className="font-bold text-[13px] text-gray-900">Rapid 15-Minute Testing</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fcfaf7] border border-[#e9e7dc] flex items-center justify-center shrink-0 text-[#7a2a33] font-bold">3</div>
                    <p className="font-bold text-[13px] text-gray-900">Advanced Testing <span className="text-[10px] text-gray-500 block normal-case font-normal">(if required)</span></p>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fcfaf7] border border-[#e9e7dc] flex items-center justify-center shrink-0 text-[#7a2a33] font-bold">4</div>
                    <p className="font-bold text-[13px] text-gray-900">Protocol & Retesting</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: THE FOUNDATIONS */}
        <div id="foundations" className="w-full mt-24 max-w-5xl mx-auto px-4 mb-24 scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 tracking-wider mb-4 uppercase">THE FOUNDATIONS</h2>
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-4">
              Every pathway starts here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-xl transition-all group flex flex-col">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 bg-[#fcfaf7] rounded-[1.5rem] flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden p-0 shrink-0">
                  <img src="/images/test-logos/omega3balance.png" alt="Omega Balance Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[28px] text-gray-900 leading-tight">Omega Balance<br/>Test</h3>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Omega-6:3 ratio</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Omega-3 Index</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Cell membrane health</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Protection Value</span></li>
              </ul>
              <div className="bg-[#fcfaf7] p-5 rounded-2xl border border-[#e9e7dc] mt-auto">
                 <p className="text-[13px] font-bold text-[#7a2a33] uppercase tracking-widest mb-2">Why it matters</p>
                 <p className="text-[14px] text-gray-700 font-medium leading-relaxed">Supports understanding of inflammation, recovery, resilience, and overall cellular function.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-xl transition-all group flex flex-col">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 bg-[#fcfaf7] rounded-[1.5rem] flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden p-0 shrink-0">
                  <img src="/images/test-logos/guthealth1.png" alt="Gut Health Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[28px] text-gray-900 leading-tight">Gut Health<br/>Test</h3>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Microbiome composition</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Bacterial diversity</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Digestive environment</span></li>
              </ul>
              <div className="bg-[#fcfaf7] p-5 rounded-2xl border border-[#e9e7dc] mt-auto">
                 <p className="text-[13px] font-bold text-[#7a2a33] uppercase tracking-widest mb-2">Why it matters</p>
                 <p className="text-[14px] text-gray-700 font-medium leading-relaxed">Even with strong nutrition, results can be limited if absorption and gut function are not working effectively.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: WHERE & HOW TESTING WORKS */}
        <div id="rapid-screening" className="w-full mt-24 mb-24 max-w-6xl mx-auto px-4 scroll-mt-32">
           <div className="text-center mb-16">
              <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-3">The right test. Delivered in the right setting</p>
              <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 tracking-wider mb-4 uppercase">Where & How Testing Works</h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* At-Home */}
              <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center shadow-sm">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-gray-200 mb-6 shadow-sm">
                    <Home className="w-8 h-8 text-[#7a2a33]" strokeWidth={1.5} />
                 </div>
                 <h3 className="font-playfair font-bold text-[22px] text-gray-900 mb-6">At-Home Foundational Testing</h3>
                 <ul className="space-y-4 text-left w-full">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[14px] font-medium text-gray-700">Convenient and accessible</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[14px] font-medium text-gray-700">No clinic visit required</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" /><span className="text-[14px] font-medium text-gray-700">Designed to establish your baseline</span></li>
                 </ul>
              </div>

              {/* In-Clinic */}
              <div className="bg-white border-2 border-[#7a2a33]/20 p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center shadow-lg relative transform lg:-translate-y-4">
                 <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-4 bg-[#7a2a33] text-white px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md">Most Accessible</div>
                 <div className="w-16 h-16 bg-[#fcfaf7] rounded-2xl flex items-center justify-center border border-[#e9e7dc] mb-6 shadow-sm">
                    <MapPin className="w-8 h-8 text-[#7a2a33]" strokeWidth={1.5} />
                 </div>
                 <h3 className="font-playfair font-bold text-[22px] text-gray-900 mb-2">In-Clinic & In-Club Testing</h3>
                 <p className="text-[12px] font-bold text-[#7a2a33] uppercase tracking-widest mb-6">15-Minute Insight</p>
                 <p className="text-[13px] text-gray-600 font-medium mb-6">Delivered through selected TBN clinics, gyms, and health environments.</p>
                 <div className="w-full text-left bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <p className="font-bold text-[12px] uppercase text-gray-900 mb-4">Finger-Prick Testing Includes:</p>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                       {["Vitamin D", "HbA1c", "CRP / hs-CRP", "Ferritin", "Folate", "Cortisol", "Cystatin C"].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33] shrink-0" />
                             <span className="text-[13px] font-semibold text-gray-700">{item}</span>
                          </div>
                       ))}
                    </div>
                 </div>
                 <p className="text-[13px] font-bold text-[#7a2a33] mt-6 italic">Fast, targeted insight — providing immediate direction.</p>
              </div>

              {/* Advanced */}
              <div id="advanced-testing" className="bg-[#fcfaf7] border border-[#e9e7dc] p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center shadow-sm scroll-mt-32">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-gray-200 mb-6 shadow-sm">
                    <FlaskConical className="w-8 h-8 text-[#7a2a33]" strokeWidth={1.5} />
                 </div>
                 <h3 className="font-playfair font-bold text-[22px] text-gray-900 mb-6">Advanced Testing<br/><span className="text-[14px] text-gray-500 font-sans font-medium">(When Required)</span></h3>
                 <div className="w-full text-left bg-white rounded-xl p-5 border border-gray-100 mb-6">
                    <div className="grid grid-cols-1 gap-y-3">
                       {["Testosterone", "Vitamin B12", "FSH", "TSH"].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                             <CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0" />
                             <span className="text-[14px] font-medium text-gray-700">{item}</span>
                          </div>
                       ))}
                    </div>
                 </div>
                 <p className="text-[13px] text-gray-600 font-medium">Used selectively for deeper insight within a structured pathway.</p>
              </div>
           </div>
        </div>

        {/* SECTION: EXPLORE YOUR PATHWAYS */}
        <div id="pathways" className="mb-24 xl:mb-32 scroll-mt-32">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
            <Gallery4 
              subtitle="Structured pathways aligned to your goals"
              title="Explore Your Health & Performance Pathways"
              description="Each pathway is delivered through targeted testing, specialist insight, and measurable progression."
              compact={true}
              items={[
                {
                  id: "womens",
                  title: "Women's Health",
                  description: "Hormones, metabolism, and life-stage support\nPuberty • Fertility • Pregnancy • Perimenopause • Mood • Weight • Gut",
                  href: "/treatments/womens-health",
                  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "mens",
                  title: "Men's Health",
                  description: "Hormonal health, energy, and long-term wellbeing\nTestosterone • Fertility • Weight • Stress • Ageing • Gut",
                  href: "/treatments/mens-health",
                  image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "children",
                  title: "Children's Health",
                  description: "Growth, development, and early health foundations\nGut • Neurodivergence • Immunity • Hormones • Behaviour",
                  href: "/treatments/childrens-health",
                  image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "neuro",
                  title: "Neurodivergence",
                  description: "Focus, cognition, and nervous system support\nADHD • Brain Fog • Cognitive Health • Gut-Brain Axis",
                  href: "/treatments/neurodivergence",
                  image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "skin",
                  title: "Skin Health (From Within)",
                  description: "Inflammation, gut-skin connection, and hormonal skin\nAcne • Chronic Skin • Ageing • Collagen • Gut",
                  href: "/treatments/skin-health",
                  image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "sports",
                  title: "Sports Performance",
                  description: "Recovery, output, and performance systems\nYouth • Athletes • Competition • Coaches • Longevity",
                  href: "/treatments/sports-performance",
                  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "pain",
                  title: "Pain, Fatigue & Inflammation",
                  description: "Chronic symptoms and recovery pathways\nFibromyalgia • Hormonal Pain • Injury • Gut • Inflammation",
                  href: "/treatments/pain-fatigue",
                  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
                }
              ]}
            />
          </div>
        </div>

        {/* SECTION: PRICING / SUPPORT LEVELS */}
        <div id="test-packages" className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4 mb-24 scroll-mt-32">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">CHOOSE YOUR SUPPORT LEVEL</h2>
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-4">
              Structured support. Clear progression. Personalised to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Box 1: Free Consultation */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#7a2a33]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
               <div className="h-[100px] shrink-0 mb-2">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight">Free Consultation</h3>
               </div>
               
               <div className="flex-grow flex flex-col justify-start mb-6 space-y-3">
                 <p className="font-montserrat text-[13px] text-gray-600 leading-relaxed font-medium mb-2">
                   Define your goals, symptoms, and priorities — and identify your starting point.
                 </p>
               </div>
               
               <div className="h-[360px] shrink-0 pt-6 border-t border-gray-100 flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <span className="text-[32px] font-bold text-gray-900 leading-none">Free</span>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase border border-gray-200 text-gray-900 rounded-full hover:bg-gray-50 transition-colors shadow-sm mb-6">
                   Book Free Consultation
                 </button>
               </div>
            </div>

            {/* Box 2: Foundations */}
            <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-8 rounded-[2rem] shadow-md flex flex-col relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7a2a33] text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border border-[#8c353f] whitespace-nowrap">Most Popular</div>
               
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Foundations</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Omega Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised results review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-month protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Retest included</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Ongoing support</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Access to TBN education</span></div>
               </div>

               <div className="h-[360px] shrink-0 pt-6 border-t border-[#e9e7dc] flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-3 mb-1.5 align-bottom">
                       <span className="text-[32px] font-bold text-gray-900 leading-none">£189</span>
                       <span className="text-gray-400 line-through text-[14px] leading-snug">£482</span>
                     </div>
                     <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest mb-1">Save 61%</p>
                     <p className="text-[12px] text-gray-500 font-medium flex items-center gap-1.5">+ £39/mo optional support (Save 29%)</p>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#7a2a33] text-white rounded-full hover:bg-[#8c353f] transition-colors shadow-md mb-6">
                   Start Your Foundations
                 </button>
               </div>
            </div>

            {/* Box 3: Advanced Review */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#7a2a33]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Review</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">1:1 Strategic Review</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">1:1 advanced results review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Pathway-specific guidance</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Next-phase planning</span></div>
               </div>

               <div className="h-[360px] shrink-0 pt-6 border-t border-gray-100 flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-2 align-bottom">
                       <span className="text-[32px] font-bold text-gray-900 leading-none">£85</span>
                       <span className="text-[14px] text-gray-500 font-bold tracking-widest uppercase mb-0.5">Add-on</span>
                     </div>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#7a2a33] text-white rounded-full hover:bg-[#8c353f] transition-colors shadow-md mb-6">
                   Book Advanced Review
                 </button>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#7a2a33] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d0bfae] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Consultation</h3>
                 <p className="text-[11px] font-bold text-[#d0bfae] uppercase tracking-widest">Private 1:1 with Doctor or Lead Specialist</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3 relative z-10">
                 <p className="font-bold text-[11px] text-white/40 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Private consultation</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Full results review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Personalised strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Bespoke protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Follow-up and retest review</span></div>
               </div>

               <div className="h-[360px] shrink-0 pt-6 border-t border-white/10 flex flex-col relative z-10">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-2 align-bottom">
                       <span className="text-[32px] font-bold text-white leading-none">£185</span>
                     </div>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#d0bfae] text-[#1c1c1c] rounded-full hover:bg-white transition-colors shadow-md mb-6">
                   Apply for Elite Support
                 </button>
                 <div className="flex-grow flex flex-col justify-between">
                   <p className="font-montserrat text-[13px] text-white/60 leading-relaxed text-center mb-2">
                     Delivered by:
                   </p>
                   <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 w-full mt-auto">
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Dr Ishtiaq Rehman</p></div>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Neil Parsley</p></div>
                     <div className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Or a lead specialist aligned to your pathway</p></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* SECTION: DIRECTORY & PARTNERS */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Access TBN */}
           <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <MapPin className="w-12 h-12 text-[#7a2a33] mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair text-[28px] font-bold text-gray-900 mb-4 uppercase">ACCESS TBN</h3>
              <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-6">Find a specialist or clinic near you</p>
              <ul className="space-y-3 mb-8">
                 <li className="text-[14px] font-medium text-gray-600">Book consultations</li>
                 <li className="text-[14px] font-medium text-gray-600">Access testing</li>
                 <li className="text-[14px] font-medium text-gray-600">Begin your pathway</li>
              </ul>
              <button className="bg-[#7a2a33] text-white px-8 py-3 rounded-xl font-bold text-[13px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors mt-auto">
                Explore Directory
              </button>
           </div>

           {/* Partners */}
           <div className="bg-[#fcfaf7] p-10 rounded-[2.5rem] border border-[#e9e7dc] shadow-sm text-center flex flex-col items-center">
              <Users className="w-12 h-12 text-[#7a2a33] mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair text-[28px] font-bold text-gray-900 mb-4 uppercase leading-tight">Built for Clinics & Performance Environments</h3>
              <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-6">Integrate Test-Based Nutrition into your business</p>
              <ul className="space-y-3 mb-8">
                 <li className="text-[14px] font-medium text-gray-600">Clinics & Health clubs</li>
                 <li className="text-[14px] font-medium text-gray-600">Gyms & Coaches</li>
                 <li className="text-[14px] font-medium text-gray-600">Performance teams</li>
              </ul>
              <button className="bg-white border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-bold text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors mt-auto">
                Partner With Us
              </button>
           </div>
        </div>

        {/* SECTION: THE TBN DIFFERENCE & FINAL CTA */}
        <div className="w-full max-w-4xl mx-auto px-4 mb-16 text-center">
            <h2 className="font-playfair text-[32px] font-bold text-gray-900 mb-6 uppercase">THE TBN DIFFERENCE</h2>
            <p className="text-[18px] text-[#7a2a33] font-bold mb-8">A structured, integrated system</p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
               <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#7a2a33]" /><span className="font-medium text-gray-700">Data-led, not assumption-led</span></div>
               <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#7a2a33]" /><span className="font-medium text-gray-700">Structured, not reactive</span></div>
               <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#7a2a33]" /><span className="font-medium text-gray-700">Integrated across clinics, clubs, and online</span></div>
               <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#7a2a33]" /><span className="font-medium text-gray-700">Built for individuals and partners</span></div>
               <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#7a2a33]" /><span className="font-medium text-gray-700">Supported by specialists across every pathway</span></div>
            </div>

            <div className="border-t border-gray-200 pt-16">
               <h2 className="font-playfair text-[32px] font-bold text-gray-900 mb-6 uppercase">START YOUR JOURNEY</h2>
               <p className="text-[16px] text-gray-600 mb-8 font-medium">Understand your body. Build your plan. Track your progress.<br/><br/>
               <span className="text-[#7a2a33] font-bold text-[18px] uppercase tracking-widest">Test. Target. Transform.</span></p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => openQuiz()} className="bg-[#7a2a33] text-white px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors shadow-sm">
                    Start Your Journey
                  </button>
               </div>
            </div>
         </div>

      </main>
      <Footer />
    </div>
  );
};

export default TestingPage;
