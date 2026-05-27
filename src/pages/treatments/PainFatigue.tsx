import React from "react";
import Navbar from "@/components/Navbar";
import PartnerLeadForm from "@/components/PartnerLeadForm";
import { Gallery4 } from "@/components/ui/gallery4";
import Footer from "@/components/Footer";
import HowWeSupportYou from "@/components/HowWeSupportYou";
import { StructuredTesting } from "@/components/StructuredTesting";
import { Link } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import { FocusRail } from "@/components/ui/focus-rail";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import {
  Activity, HeartPulse, Brain, Leaf, FileText, Search, MessageCircle, TrendingUp,
  AlertTriangle, ArrowRight, CheckCircle2, Stethoscope, Microscope, Dumbbell, Timer, Zap, Quote, Users, MapPin, Search as SearchIcon,
  Sun, Droplet, Database, Hexagon, Flame, FlaskConical
} from "lucide-react";
const heroImg = "/services/pain-fatigue-v2.jpg";

const PainFatigue = () => {
  const quizContext = useQuiz();
  const openQuiz = quizContext?.openQuiz || (() => {});
  
  // Fetch specialists array for the directory flicker / focus rail
  const { data: specialists = [], isLoading: isSpecialistsLoading } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists
  });

  const expertItems = specialists.map((s, index) => ({
    id: s.slug || `expert-${index}`,
    title: s.name,
    description: s.bio && s.bio.length > 0 ? s.bio[0] : 'Health & Wellness Expert',
    meta: s.role,
    imageSrc: s.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  }));

  return (
    <div className="min-h-screen flex flex-col pt-[85px] md:pt-[96px] bg-[#f9f5f2] font-montserrat">
      <Navbar alwaysSolid />
      
      {/* FULL BLEED HERO SECTION */}
      <div className="w-full relative bg-[#f9f5f2] flex flex-col overflow-hidden min-h-[600px] lg:min-h-[700px] lg:h-[calc(100vh-96px)]">
        {/* Background Image spanning the right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] z-0">
          <img src={heroImg} alt="Pain & Fatigue" className="w-full h-full object-cover object-[center_20%]" />
          
          {/* Bottom fade for grounding the Tailored Box */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Blend image and black gradient into the left text container background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f5f2] via-[#f9f5f2]/70 lg:via-[#f9f5f2]/20 to-transparent"></div>
        </div>

        {/* Content Container Aligned inside normal max-width margins */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#9f1e13] font-bold tracking-widest uppercase text-sm mb-4">Pain, Fatigue & Inflammation</h3>
              <h1 className="font-playfair text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                PAIN IS NOT JUST WHERE IT HURTS
              </h1>
              
              <p className="text-[16px] xl:text-[17px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-3 font-medium">
                Up to 43% of adults live with chronic pain.
              </p>
              <p className="text-[16px] xl:text-[17px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium">
                TBN offer a pioneering test-based system supporting pain, recovery and resilience — delivered by specialists across clinical and rehabilitation environments.
              </p>
              <p className="font-semibold uppercase tracking-widest text-[#9f1e13] text-[14px] mb-8">Test. Target. Transform. Personalised Precision</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => openQuiz()}
                  className="bg-[#9f1e13] hover:bg-[#9f1e13] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </button>
                <Link to="/partner-with-us" className="border border-gray-300 hover:bg-gray-50 transition-colors bg-white text-gray-800 px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Explore Your Pathway
                </Link>
              </div>
           </div>
           
           <div className="w-full lg:w-5/12 relative mt-auto lg:mt-0 flex justify-end items-end h-full self-end lg:pb-12 xl:pb-16 mt-8">
              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center text-white shadow-2xl">
                <div>
                   <p className="font-playfair font-bold text-xl mb-1 text-white">LED BY CLINICAL & REHABILITATION SPECIALISTS</p>
                   <p className="text-white text-sm font-medium">Built by those working across pain, recovery and integrated clinical environments</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="w-full bg-background py-3 border-y border-[#dbd4c9]/40 md:py-4 overflow-hidden">
        <div className="w-full px-4 sm:px-8 flex flex-nowrap justify-start sm:justify-center gap-6 md:gap-12 text-[12px] sm:text-[13px] md:text-sm tracking-tight sm:tracking-normal text-gray-500 whitespace-nowrap overflow-x-auto mx-auto max-w-[1440px] font-sans">
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Foundational Testing
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Rapid Point-of-Care Testing
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Expert-Led Protocols
          </span>
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#9f1e13]" />
            Personalised Preventative Programmes
          </span>
        </div>
      </div>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 md:pb-16 mb-16">

        {/* SECTION 2 — EXPLORE YOUR PATHWAY */}
        <div className="mb-12 xl:mb-20">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mb-8">
            <Gallery4 
              subtitle="PAIN, FATIGUE & INFLAMMATION PATHWAYS"
              title="Personalised support"
              description="Each pathway includes targeted testing, a consultation, and personalised protocols aligned to your symptoms, recovery patterns, and internal drivers."
              compact={true}
              items={[
                {
                  id: "chronic",
                  title: "Chronic Pain & Fatigue",
                  description: "Up to 43% of adults live with chronic pain.\nDiscover how inflammation, cellular energy, and metabolic load may influence recovery and fatigue.",
                  href: "#",
                  image: "/images/pain-fatigue/chronic-pain.jpg",
                },
                {
                  id: "fibro",
                  title: "Fibromyalgia & Widespread Pain",
                  description: "Chronic widespread pain affects a significant proportion of the population.\nExplore how nervous system load and systemic inflammation may influence sensitivity and flare-ups.",
                  href: "#",
                  image: "/images/pain-fatigue/fibro.jpg",
                },
                {
                  id: "hormonal",
                  title: "Hormonal Pain & Inflammation",
                  description: "Women are more likely to experience chronic pain across all age groups.\nIdentify how hormonal signalling, inflammation, and metabolic function may influence pain patterns.",
                  href: "#",
                  image: "/images/pain-fatigue/hormonal.jpg",
                },
                {
                  id: "arthritis",
                  title: "Arthritis, Joint Pain & Stiffness",
                  description: "Musculoskeletal conditions are a leading cause of long-term pain.\nAssess how inflammatory activity, tissue resilience, and cellular health may influence mobility and discomfort.",
                  href: "#",
                  image: "/images/pain-fatigue/arthritis.jpg",
                },
                {
                  id: "injury",
                  title: "Injury, Recovery & Ongoing Pain",
                  description: "Recovery timelines vary significantly between individuals.\nTest what may be influencing healing, repair, and recovery capacity.",
                  href: "#",
                  image: "/images/pain-fatigue/injury.jpg",
                },
                {
                  id: "surgery",
                  title: "Surgery Preparation & Recovery",
                  description: "Recovery outcomes differ widely between patients.\nPrepare the body by addressing inflammation, immune response, and metabolic readiness.",
                  href: "#",
                  image: "/images/pain-fatigue/surgery.jpg",
                },
                {
                  id: "gut",
                  title: "Gut Health & Inflammation",
                  description: "Around 70% of the immune system is associated with the gut.\nExplore how microbiome balance and immune signalling may influence systemic symptoms.",
                  href: "#",
                  image: "/images/pain-fatigue/gut.jpg",
                }
              ]}
            />
          </div>
        </div>

        {/* SECTION 3 — SPECIALIST LEADS */}
        <div className="mb-20 xl:mb-24 px-4 lg:px-0">
          <div className="text-center mb-12 border-t border-gray-100 pt-10">
             <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-3 uppercase">LEADING SPECIALISTS IN PAIN, FATIGUE & INFLAMMATION</h2>
             <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2"><span className="w-1.5 h-1.5 bg-[#9f1e13] rounded-full" /> Built by those working at the highest level of care <span className="w-1.5 h-1.5 bg-[#9f1e13] rounded-full" /></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-0 md:divide-x divide-[#9f1e13]/20">
              {/* Dr Ishtiaq Rehman */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pr-4 lg:pr-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="/experts/ishtiaq-rehman-new.jpg" alt="Dr Ishtiaq Rehman" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#9f1e13] transition-colors leading-snug mb-1 sm:mb-0">Dr Ishtiaq Rehman</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#9f1e13] uppercase tracking-widest mb-4 mt-2">Consulting England FA Doctor</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#9f1e13]/30 pl-3">"Pain is not always just structural — it may be influenced by how the body is functioning at a deeper level."</p>
                 </div>
              </div>
              
              {/* Sara Lovett */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pl-4 lg:pl-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1594824436998-d45084992dc7?auto=format&fit=crop&q=80&w=800" alt="Sara Lovett" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out grayscale" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#9f1e13] transition-colors leading-snug mb-1 sm:mb-1">Sara Lovett</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-bold text-[#9f1e13] uppercase tracking-widest mb-4 mt-2">Director & Principal Osteopath — Cedar Hall Clinics</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#9f1e13]/30 pl-3">"You can treat the area of pain — but unless you understand what’s driving it, it often returns."</p>
                 </div>
              </div>
          </div>
        </div>

        {/* SECTION 7.5 — THE SCIENCE BEHIND PAIN & INFLAMMATION */}
        <div className="w-full mt-16 lg:mt-24 max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-3 uppercase">The Science Behind Pain & Inflammation</h2>
              <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-[#9f1e13] rounded-full" /> Key drivers we assess <div className="w-1.5 h-1.5 bg-[#9f1e13] rounded-full" /></p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Box 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden p-0">
                   <img src="/images/test-logos/cellular.png" alt="Cellular Health" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Cellular Health</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Supports repair, resilience, and recovery capacity</p>
              </div>

              {/* Box 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden p-0">
                   <img src="/images/test-logos/inflammation.png" alt="Inflammation & Recovery Load" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Inflammation & Recovery Load</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">A key factor in pain, stiffness, fatigue, and slower recovery</p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden p-0">
                   <img src="/images/test-logos/gut.png" alt="Gut Health & Absorption" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Gut Health & Absorption</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">What you consume only matters if your body can absorb and utilise it effectively</p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden p-0">
                   <img src="/images/test-logos/metabolic.png" alt="Metabolic Function" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Metabolic Function</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Energy stability and recovery are influenced by how the body manages demand</p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden p-0">
                   <img src="/images/test-logos/hormone.png" alt="Hormonal & Stress Response" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Hormonal & Stress Response</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Impacts pain sensitivity, resilience, and recovery</p>
              </div>

              {/* Box 6 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden p-0">
                   <img src="/images/test-logos/focus.png" alt="Nervous System Load" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Nervous System Load</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Influences how the body perceives pain and its ability to recover</p>
              </div>
           </div>
        </div>

        {/* SECTION 7.6 — EXPERT QUOTE */}
        <div className="w-full mt-16 lg:mt-20 max-w-6xl mx-auto px-4">
           <div className="bg-[#f9f5f2] border border-[#dbd4c9] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm w-full hover:shadow-md transition-shadow duration-300">
              
              <div className="flex flex-col items-center lg:items-end max-w-[1050px] mx-auto w-full gap-5">
                 <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
                    <Quote className="w-8 h-8 text-gray-900 fill-gray-900 shrink-0" />
                    <p className="font-playfair text-[18px] md:text-[22px] lg:text-[25px] font-bold italic text-gray-900 text-left leading-snug tracking-wide m-0">
                       The missing piece in many treatment plans today is identifying what’s driving symptoms beneath the surface — and addressing the root drivers.
                    </p>
                 </div>

                 <div className="flex items-center gap-4 shrink-0 mt-2">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shrink-0 shadow-sm">
                      <Stethoscope className="w-5 h-5 text-[#9f1e13]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="font-bold text-gray-900 text-[12px] uppercase tracking-widest leading-none mb-1.5">Mel Kingdom</span>
                       <span className="font-bold text-[#9f1e13] text-[10px] uppercase tracking-widest leading-none">Founder of Body Remedies | Ex-Paramedic | Specialist in MLD, TMJ & Bowen Therapy</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* STRUCTURED TESTING */}
        <StructuredTesting
          foundational={[
            { name: "Omega Balance", logo: "/images/test-logos/omega3balance.png" },
            { name: "Gut Microbiome", logo: "/images/test-logos/guthealth1.png" }
          ]}
          baseline={[
            { name: "Vitamin D", logo: "/images/test-logos/vitamind.png" },
            { name: "HbA1c", logo: "/images/test-logos/hba1c.png" },
            { name: "Ferritin", logo: "/images/test-logos/ferritin.png" },
            { name: "CRP / hs-CRP", logo: "/images/test-logos/crp.png" },
            { name: "RF", logo: "/images/test-logos/inflammation.png" },
            { name: "Cortisol", logo: "/images/test-logos/cortisol.png" },
            { name: "Folate", logo: "/images/test-logos/folate.png" },
            { name: "Cystatin C", logo: "/images/test-logos/cystatin.png" }
          ]}
          advanced={[
            { name: "Testosterone", logo: "/images/test-logos/testosterone.png" },
            { name: "Vitamin B12", logo: "/images/test-logos/vitaminb12.png" },
            { name: "Thyroid (TSH)", logo: "/images/test-logos/tsh.png" }
          ]}
        />

        {/* SECTION 7.8 — HOW WE SUPPORT YOU */}
        <HowWeSupportYou />

        {/* SECTION 7.9 — PRICING / SUPPORT LEVELS */}
        <div className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">Choose Your Support Level</h2>
            <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">
              From foundational support to specialist-led pain & recovery strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Box 1: Free Consultation */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#bdae97] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight">Free Consultation</h3>
               </div>
               
               <div className="flex-grow flex flex-col justify-start mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Understand your symptoms</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Identify your starting point</span></div>
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
                 <div className="flex-grow">
                 </div>
               </div>
            </div>

            {/* Box 2: Foundations */}
            <div className="bg-[#f9f5f2] border border-[#dbd4c9] p-8 rounded-[2rem] shadow-md flex flex-col relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9f1e13] text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border border-[#9f1e13] whitespace-nowrap">Most Popular</div>
               
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Pain & Recovery Foundations</h3>
                 <p className="text-[11px] font-bold text-[#9f1e13] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-Month Protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Retest Included</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Ongoing Support</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Access to TBN Community</span></div>
               </div>

               <div className="h-[360px] shrink-0 pt-6 border-t border-[#dbd4c9] flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-3 mb-1.5 align-bottom">
                       <span className="text-[32px] font-bold text-gray-900 leading-none">£189</span>
                       <span className="text-gray-400 line-through text-[14px] leading-snug">£482</span>
                       <span className="text-[#9f1e13] font-bold text-[11px] uppercase bg-[#9f1e13]/10 px-2 py-0.5 rounded ml-auto">Save 61%</span>
                     </div>
                     <p className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5">+ £39/mo <span className="text-[#9f1e13] font-bold text-[11px] uppercase bg-[#9f1e13]/10 px-1.5 py-[2px] rounded">optional support</span></p>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#9f1e13] text-white rounded-full hover:bg-[#9f1e13] transition-colors shadow-md mb-6">
                   Start Foundations
                 </button>
               </div>
            </div>

            {/* Box 3: Advanced Review */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#bdae97] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Pain & Recovery Review</h3>
                 <p className="text-[11px] font-bold text-[#9f1e13] uppercase tracking-widest">1:1 Strategic Review</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Advanced Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Symptom Insight</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Next-Phase Planning</span></div>
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
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#9f1e13] text-white rounded-full hover:bg-[#9f1e13] transition-colors shadow-md mb-6">
                   Book Advanced Review
                 </button>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#9f1e13] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#dbd4c9] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Pain & Recovery Consultation</h3>
                 <p className="text-[11px] font-bold text-[#dbd4c9] uppercase tracking-widest">Private 1:1 with Doctor / Specialist</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3 relative z-10">
                 <p className="font-bold text-[11px] text-white/40 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Private 1:1 Consultation</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Full Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Bespoke Protocol Development</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Follow-Up & Second Test Review</span></div>
               </div>

               <div className="h-[360px] shrink-0 pt-6 border-t border-white/10 flex flex-col relative z-10">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-2 align-bottom">
                       <span className="text-[32px] font-bold text-white leading-none">£185</span>
                     </div>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#dbd4c9] text-[#1c1c1c] rounded-full hover:bg-white transition-colors shadow-md mb-6">
                   Apply for Elite Support
                 </button>
                 <div className="flex-grow flex flex-col justify-between">
                   <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 w-full mt-auto">
                     <p className="font-bold text-[11px] text-[#dbd4c9]/70 uppercase tracking-widest mb-2">Work 1:1 With</p>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#dbd4c9] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Dr Ishtiaq Rehman <span className="text-white/50 font-normal">(Consulting England FA Doctor)</span></p></div>
                     <p className="text-[11px] text-white/50 italic mt-2 pl-3 border-l border-white/10">Or a senior TBN specialist aligned to your pathway</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* SECTION 8 — PARTNER WITH US & DIRECTORY */}
        <div className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4 mb-24">
           <div className="max-w-[800px] mx-auto text-center mb-16">
             <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight mb-4 uppercase">
               PARTNER WITH US
             </h2>
             <p className="font-bold text-[#9f1e13] text-[13px] md:text-[14px] uppercase tracking-widest leading-snug">
               Integrated into clinics, health clubs, and wellness environments
             </p>
           </div>
           
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Partner With Us */}
              <div className="w-full lg:flex-1 bg-[#f9f5f2] border border-[#dbd4c9] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Users className="w-64 h-64 text-[#9f1e13] -mr-16 -mt-16"/></div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 relative z-10 flex-grow">
                     <div className="xl:col-span-8 flex flex-col justify-between">
                         <div>
                             <h3 className="font-playfair text-[24px] md:text-[28px] xl:text-[32px] font-bold text-gray-900 leading-tight mb-4">
                                TBN operates inside real environments
                             </h3>
                             <p className="font-montserrat text-[15px] leading-relaxed text-gray-600 mb-6">
                                — embedding structured testing, specialist insight, and performance systems into existing services.
                             </p>
                             <p className="font-montserrat text-[15px] leading-relaxed text-gray-600 mb-10 font-medium">
                                For purpose-driven practitioners, medically led clinics, health clubs and wellness venues ready to integrate test-based nutrition or host specialist events.
                             </p>
                         </div>
                         
                         <div className="mt-auto">
                             <PartnerLeadForm sourcePage="Pain & Fatigue" />
                         </div>
                     </div>

                     {/* Right side of the Partner box */}
                     <div className="xl:col-span-4 flex flex-col xl:pl-8">
                         <h3 className="font-playfair text-[20px] font-bold text-gray-900 mb-6 xl:mt-1">What This Delivers</h3>
                         <ul className="space-y-4">
                            {[
                              "Advanced training for coaches and practitioners",
                              "Integrated testing systems within your environment",
                              "Ongoing access to specialist-led insight",
                              "Enhanced client journeys",
                              "Scalable testing services",
                              "New revenue opportunities"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0 mt-0.5" />
                                <span className="text-[14px] leading-snug font-medium text-gray-700">{item}</span>
                              </li>
                            ))}
                         </ul>
                     </div>
                  </div>
              </div>

              {/* Right Column: Directory */}
              <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 flex flex-col gap-6 lg:gap-8">
                 <div className="w-full bg-[#f9f5f2] border border-[#dbd4c9] rounded-[2.5rem] p-8 md:p-10 shadow-md text-center lg:text-left flex flex-col items-center lg:items-start relative overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none"><Search className="w-48 h-48 text-[#9f1e13] -mr-12 -mb-12"/></div>

                    <h2 className="font-playfair text-[24px] font-bold text-gray-900 leading-snug mb-4 relative z-10">
                       Access TBN-approved clinics across the UK.
                    </h2>
                    
                    <div className="w-[calc(100%+4rem)] md:w-[calc(100%+5rem)] -mx-8 md:-mx-10 mb-6 relative z-10 overflow-hidden shrink-0">
                       {isSpecialistsLoading || expertItems.length === 0 ? (
                          <div className="h-[380px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9f1e13]"></div>
                          </div>
                       ) : (
                          <FocusRail 
                            items={expertItems} 
                            autoPlay={true} 
                            interval={4000}
                            loop={true} 
                            compact={true}
                            className="bg-transparent h-auto !w-full"
                          />
                       )}
                    </div>
                    
                    <div className="mt-auto w-full relative z-10">
                       <button className="w-full text-center bg-[#9f1e13] text-white px-4 py-4 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#9f1e13] transition-colors shadow-md">
                          Explore Directory
                       </button>
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

export default PainFatigue;
