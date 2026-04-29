import React from "react";
import Navbar from "@/components/Navbar";
import { Gallery4 } from "@/components/ui/gallery4";
import Footer from "@/components/Footer";
import HowWeSupportYou from "@/components/HowWeSupportYou";
import { Link } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import { FocusRail } from "@/components/ui/focus-rail";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Activity, HeartPulse, Brain, Leaf, FileText, Search, MessageCircle, TrendingUp,
  AlertTriangle, ArrowRight, CheckCircle2, Stethoscope, Microscope, Quote, Users, Droplet
} from "lucide-react";

const heroImg = "/services/mens-health-v2.jpg";

const MensHealth = () => {
  const quizContext = useQuiz();
  const openQuiz = quizContext?.openQuiz || (() => {});
  
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
        {/* Background Image spanning the right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] z-0">
          <img src={heroImg} alt="Men's Health" className="w-full h-full object-cover object-[center_20%]" />
          
          {/* Bottom fade for grounding the Tailored Box */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Blend image and black gradient into the left text container background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdf9] via-[#fdfdf9]/70 lg:via-[#fdfdf9]/20 to-transparent"></div>
        </div>

        {/* Content Container Aligned inside normal max-width margins */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">MEN'S HEALTH</h3>
              <h1 className="font-playfair text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                The System Behind Men’s Health Concerns
              </h1>
              
              <div className="text-[16px] xl:text-[17px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium space-y-4">
                 <p>1 in 4 men in the UK experience poor mental health. Hormonal and metabolic factors are often missed or under-measured.</p>
                 <p>Symptoms are often managed with medication. Even advanced approaches can overlook foundational drivers. So what’s actually driving men’s health today?</p>
              </div>

              <p className="font-semibold uppercase tracking-widest text-[#7a2a33] text-[14px] mb-2">A precision, test-based men’s health system</p>
              <p className="font-semibold uppercase tracking-widest text-[#7a2a33] text-[14px] mb-2">Focused on identifying the internal factors influencing health, performance, and recovery.</p>
              <p className="font-semibold uppercase tracking-widest text-[#7a2a33] text-[14px] mb-8">Test. Target. Transform.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                  Explore Your Pathway
                </button>
              </div>
           </div>
           
           <div className="w-full lg:w-5/12 relative mt-auto lg:mt-0 flex justify-end items-end h-full self-end lg:pb-12 xl:pb-16 mt-8">
              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center text-white shadow-2xl">
                <div>
                   <p className="font-playfair font-bold text-xl mb-1 text-white">Targeted Support</p>
                   <p className="text-white text-sm font-medium">Testing protocols aligned to your symptoms, life stage, and goals.</p>
                </div>
                <button 
                   onClick={() => openQuiz()}
                   className="shrink-0 bg-white text-[#7a2a33] border border-transparent px-5 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md">
                  Take the Assessment
                </button>
              </div>
           </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="w-full bg-[#f5f5f5] border-y border-gray-200 py-3 md:py-4 mb-2 overflow-hidden">
        <div className="w-full px-4 sm:px-8 flex flex-nowrap justify-start sm:justify-center gap-6 md:gap-12 text-[12px] sm:text-[13px] md:text-sm tracking-tight sm:tracking-normal text-gray-500 whitespace-nowrap overflow-x-auto mx-auto max-w-[1440px] font-sans">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Foundational Testing
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Rapid Point-of-Care Testing
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Expert-Led Protocols
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Personalised Preventative Programmes
          </span>
        </div>
      </div>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 md:pb-16 mb-16">

        {/* SECTION 2 — EXPLORE YOUR PATHWAY */}
        <div id="pathways" className="mb-12 xl:mb-20">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
            <Gallery4 
              subtitle="Men's Health Pathways"
              title="Explore Your Men's Health Pathway"
              description="Personalised support. Each pathway includes targeted testing, a consultation, and personalised protocols aligned to your symptoms, lifestyle, and goals."
              compact={true}
              items={[
                {
                  id: "testosterone",
                  title: "Testosterone & Hormonal Health",
                  description: "Low testosterone is increasingly reported in men across all ages\nExplore how hormonal balance, nutrient status, and metabolic function may influence energy, strength, mood, and recovery.",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "fertility",
                  title: "Male Fertility",
                  description: "Sperm health is influenced by lifestyle, inflammation, and nutrient status\nUnderstand how oxidative stress, hormones, and cellular health may impact fertility and reproductive function.",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1518104593124-ac2ea0c0ee8b?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "weight",
                  title: "Weight Loss, Pre-Diabetes & Type 2 Diabetes",
                  description: "Blood sugar dysregulation often develops gradually — and can go unnoticed\nAssess how insulin response, inflammation, and metabolism may influence weight gain, energy crashes, and long-term health risk.",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "stress",
                  title: "Stress, Mood & Burnout",
                  description: "Chronic stress can impact hormones, energy, and mental clarity\nExplore how cortisol patterns, nutrient levels, and metabolic health may influence mood, focus, and resilience.",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1499540633125-484965b60031?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "ageing",
                  title: "Healthy Ageing for Men",
                  description: "Ageing is influenced by hormonal, metabolic, and cellular changes\nUnderstand how inflammation, nutrient status, and internal health markers may impact longevity, strength, and vitality over time.",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
                },
                {
                  id: "gut",
                  title: "Gut Health Issues",
                  description: "Gut health influences nutrient absorption, inflammation, and overall wellbeing\nAssess microbiome balance and digestive function to understand how gut health may be contributing to wider symptoms.",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1505553258544-245842838965?auto=format&fit=crop&q=80&w=800",
                }
              ]}
            />
            <div className="text-center mt-6">
              <p className="font-bold text-[#7a2a33] text-[14px]">Each pathway is delivered through structured testing, specialist insight, and measurable progression.</p>
            </div>
          </div>
        </div>

        {/* SECTION 3 — SPECIALIST LEADS */}
        <div className="mb-20 xl:mb-24 px-4 lg:px-0">
          <div className="mb-16 text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
             <p className="text-[12px] font-bold tracking-widest uppercase text-[#7a2a33] mb-3">Led by Leading Specialists</p>
             <h2 className="font-playfair text-[28px] md:text-[36px] text-gray-900 font-bold tracking-wider mb-4 leading-tight">Built by those working at the highest level of men’s health, performance, and clinical insight.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-0 md:divide-x divide-[#7a2a33]/20">
              {/* Ishtiaq */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pr-4 lg:pr-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="/images/specialists/ishtiaq.jpg" alt="Dr Ishtiaq Rehman" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-1">Dr Ishtiaq Rehman</h3>
                   <p className="text-[11px] md:text-[12px] font-semibold text-gray-500 mb-2 tracking-wide">MBChB, MFSEM</p>
                   <div className="font-sans text-[10px] lg:text-[12px] font-bold text-[#7a2a33] uppercase tracking-widest mb-4">TBN Co-Founder & Medical Director | England FA Doctor</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Men’s health is often managed at the symptom level — but real change comes from understanding what’s driving it beneath the surface."</p>
                 </div>
              </div>
              
              {/* Neil Parsley */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pl-4 lg:pl-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="/images/specialists/neil-parsley.png" alt="Neil Parsley" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-1">Neil Parsley</h3>
                   <p className="text-[11px] md:text-[12px] font-semibold text-gray-500 mb-2 tracking-wide">Elite Performance Coach</p>
                   <div className="font-sans text-[10px] lg:text-[12px] font-bold text-[#7a2a33] uppercase tracking-widest mb-4">Former Manchester City, Team GB, England Rugby</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Energy, resilience, and performance are driven by internal systems — once identified, they can be supported with precision."</p>
                 </div>
              </div>
          </div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto border-t border-gray-100 pt-8">
            <h4 className="font-playfair text-[20px] font-bold text-gray-900 mb-2">The TBN Collective</h4>
            <p className="text-sm font-medium text-gray-600">A specialist-led network across men’s health, hormones, metabolism, mental performance, and recovery — delivering structured, test-based support at scale.</p>
          </div>
        </div>


        {/* SECTION 7.5 — THE SCIENCE BEHIND MEN'S HEALTH */}
        <div className="w-full mt-16 lg:mt-24 max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-3 uppercase">The Science Behind Men’s Health</h2>
              <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /> Key drivers we assess <div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /></p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Box 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/cellular.png" alt="Cellular Health" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Cellular Health</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Supports energy, repair, and overall function across all systems.</p>
              </div>

              {/* Box 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/inflammation.png" alt="Inflammation & Recovery Load" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Inflammation & Recovery Load</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">A key factor influencing recovery, fatigue, and long-term health.</p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/hormone.png" alt="Hormonal Balance" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Hormonal Balance</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Plays a central role in energy, mood, strength, and metabolic function.</p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/metabolic.png" alt="Metabolic Function" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Metabolic Function</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Influences energy stability, weight regulation, and performance.</p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/gut.png" alt="Gut Health & Absorption" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Gut Health & Absorption</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Impacts nutrient utilisation, inflammation, and wider system function.</p>
              </div>

              {/* Box 6 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/focus.png" alt="Cognitive Performance & Mental Health" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Cognitive Performance & Mental Health</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Influenced by nutrient status, fatty acid balance, and metabolic health.</p>
              </div>
           </div>

           <div className="mt-12 bg-[#7a2a33] text-white p-8 md:p-10 rounded-3xl shadow-xl text-center space-y-4 max-w-4xl mx-auto">
             <p className="font-playfair italic text-[20px] md:text-[24px] font-bold">"What we apply in elite sport — identifying and supporting the root drivers of performance — becomes even more important as men age and the demands on the body change."</p>
             <p className="font-sans text-[14px] uppercase tracking-widest text-[#d0bfae] font-bold">— Dr Ishtiaq Rehman</p>
           </div>
        </div>

        {/* SECTION 7.7 — START WITH THE FOUNDATIONS */}
        <div className="w-full mt-20 lg:mt-24 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-3">At home or in clinic</p>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">START WITH THE FOUNDATIONS</h2>
            <p className="font-montserrat text-[15px] font-medium leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Every men’s health pathway begins with baseline insight at a cellular level.
            </p>
          </div>

          {/* Foundation Tests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-0">
                  <img src="/images/test-logos/omega3balance.png" alt="Omega Balance Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Omega Balance<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium mb-3">Provides insight into:</p>
              <ul className="space-y-1">
                 <li className="flex items-start gap-2 text-[14px] text-gray-600"><span className="text-[#7a2a33]">•</span> fatty acid balance</li>
                 <li className="flex items-start gap-2 text-[14px] text-gray-600"><span className="text-[#7a2a33]">•</span> cellular health</li>
                 <li className="flex items-start gap-2 text-[14px] text-gray-600"><span className="text-[#7a2a33]">•</span> inflammatory load</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-0">
                  <img src="/images/test-logos/guthealth1.png" alt="Gut Microbiome Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Gut Microbiome<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium mb-3">Provides insight into:</p>
              <ul className="space-y-1">
                 <li className="flex items-start gap-2 text-[14px] text-gray-600"><span className="text-[#7a2a33]">•</span> microbiome balance</li>
                 <li className="flex items-start gap-2 text-[14px] text-gray-600"><span className="text-[#7a2a33]">•</span> digestive environment</li>
                 <li className="flex items-start gap-2 text-[14px] text-gray-600"><span className="text-[#7a2a33]">•</span> nutrient absorption</li>
              </ul>
            </div>
          </div>

          {/* 15-MINUTE HEALTH INSIGHT */}
          <div className="bg-white border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-blue-600 to-[#7a2a33]"></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 bg-[#7a2a33]/10 text-[#7a2a33] px-4 py-1.5 rounded-full font-bold text-[13px] uppercase tracking-widest mb-6">
                <div className="w-2 h-2 rounded-full bg-[#7a2a33] animate-pulse"></div> Rapid Health Insight
              </div>
              <h3 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Advanced Point-of-Care Screening</h3>
              <p className="font-montserrat text-[15px] font-medium text-gray-600 max-w-2xl mx-auto">
                Fast, targeted screening to highlight key internal factors influencing men’s health.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Finger Prick */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center -ml-2">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-600"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-[18px] uppercase tracking-widest">Finger Prick <span className="text-[12px] text-gray-400 normal-case tracking-normal ml-2">(15-minute screening)</span></h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {/* Vitamin D */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/vitamind.png" alt="Vitamin D" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Vitamin D</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">immune & hormone support</p>
                     </div>
                  </div>
                  
                  {/* HbA1c */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/hba1c.png" alt="HbA1c" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">HbA1c</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">blood sugar regulation</p>
                     </div>
                  </div>
                  
                  {/* Ferritin */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/ferritin.png" alt="Ferritin" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Ferritin</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">energy & iron status</p>
                     </div>
                  </div>
                  
                  {/* Cortisol */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0 px-2 py-1">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Cortisol</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">stress response</p>
                     </div>
                  </div>

                  {/* Folate */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/folate.png" alt="Folate" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Folate</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">cellular function</p>
                     </div>
                  </div>
                  
                  {/* Cystatin C */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/cystatin.png" alt="Cystatin C" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Cystatin C</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">metabolic load</p>
                     </div>
                  </div>

                  {/* CRP / hs-CRP */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative sm:col-span-2">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/crp.png" alt="CRP / hs-CRP" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">CRP / hs-CRP</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">inflammation & cardiovascular insight</p>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Phlebotomy */}
              <div className="lg:col-span-4 lg:border-l lg:border-gray-100 lg:pl-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center -ml-2">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-600"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-[18px] uppercase tracking-widest">Phlebotomy Required</h4>
                </div>
                
                <div className="flex flex-col gap-4 mt-8">
                  {/* Testosterone */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Testosterone</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">hormonal health</p>
                     </div>
                  </div>
                  
                  {/* Vitamin B12 */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Vitamin B12</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">energy & cognition</p>
                     </div>
                  </div>

                  {/* TSH */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">TSH (Thyroid)</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">metabolism</p>
                     </div>
                  </div>
                </div>

                <div className="mt-8 text-center lg:text-left">
                  <p className="text-[12px] font-medium text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    Markers are selected based on your symptoms, health goals, and pathway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 7.8 — HOW WE SUPPORT YOU */}
        <HowWeSupportYou />

        {/* SECTION 7.9 — PRICING / SUPPORT LEVELS */}
        <div className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">CHOOSE YOUR SUPPORT LEVEL</h2>
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-4">
              From foundational insight to specialist-led strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Box 1: Free Consultation */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#7a2a33]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight">Free Consultation</h3>
               </div>
               
               <div className="flex-grow flex flex-col justify-start mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Understand your symptoms</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Identify the most relevant pathway</span></div>
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
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center">
                     A starting point to understand your symptoms and the most relevant pathway.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 2: Foundations */}
            <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-8 rounded-[2rem] shadow-md flex flex-col relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7a2a33] text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border border-[#8c353f] whitespace-nowrap">Most Popular</div>
               
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Men's Health Foundations</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Omega Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-Month Health Protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Retest Included</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Ongoing Support</span></div>
               </div>

               <div className="h-[360px] shrink-0 pt-6 border-t border-[#e9e7dc] flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-3 mb-1.5 align-bottom">
                       <span className="text-[32px] font-bold text-gray-900 leading-none">£189</span>
                       <span className="text-gray-400 line-through text-[14px] leading-snug">£482</span>
                     </div>
                     <p className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5">+ £39/mo optional support</p>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#7a2a33] text-white rounded-full hover:bg-[#8c353f] transition-colors shadow-md mb-6">
                   Start Foundations
                 </button>
                 <div className="flex-grow">
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center">
                     Build the foundations of health through structured testing, personalised protocols, and measurable progression.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 3: Advanced Review */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#7a2a33]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Results Review</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">1:1 Strategic Review</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">1:1 Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Lifestyle Alignment</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Next-Phase Planning</span></div>
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
                 <div className="flex-grow flex flex-col justify-between">
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center mb-4">
                     1:1 with specialist or Dr Ishtiaq Rehman / Neil Parsley.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#7a2a33] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d0bfae] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Consultation</h3>
                 <p className="text-[11px] font-bold text-[#d0bfae] uppercase tracking-widest">Private 1:1 with Doctor or Elite Coach</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3 relative z-10">
                 <p className="font-bold text-[11px] text-white/40 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Full Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Bespoke Protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Follow-Up & Retest</span></div>
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
                     Work directly with:
                   </p>
                   <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 w-full mt-auto">
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Dr Ishtiaq Rehman <span className="text-white/50 font-normal">(Medical Director)</span></p></div>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Neil Parsley <span className="text-white/50 font-normal">(Elite Coach)</span></p></div>
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
               PARTNER WITH TBN
             </h2>
             <p className="font-bold text-[#7a2a33] text-[13px] md:text-[14px] uppercase tracking-widest leading-snug">
               Built for clinics, health clubs, and performance environments.
             </p>
           </div>
           
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Partner With Us */}
              <div className="w-full lg:flex-1 bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Users className="w-64 h-64 text-[#7a2a33] -mr-16 -mt-16"/></div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 relative z-10 flex-grow">
                     <div className="flex flex-col justify-between">
                         <div>
                             <h3 className="font-playfair text-[24px] md:text-[28px] xl:text-[32px] font-bold text-gray-900 leading-tight mb-4">
                                Partner with us
                             </h3>
                         </div>
                         
                         <div className="mt-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                               <button className="flex-1 bg-[#7a2a33] text-white px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors shadow-sm text-center">
                                 Become a TBN Partner
                               </button>
                               <button className="flex-1 bg-white border border-gray-200 text-gray-900 px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm text-center">
                                 Invite TBN Into Your Facility
                               </button>
                            </div>
                         </div>
                     </div>

                     <div className="flex flex-col xl:pl-8">
                         <ul className="space-y-4 xl:mt-4">
                            {[
                              "Training & integration",
                              "Testing systems",
                              "Specialist access",
                              "Scalable services",
                              "New revenue opportunities"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" />
                                <span className="text-[14px] leading-snug font-medium text-gray-700">{item}</span>
                              </li>
                            ))}
                         </ul>
                     </div>
                  </div>
              </div>

              {/* Right Column: Directory */}
              <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 flex flex-col gap-6 lg:gap-8">
                 <div className="w-full bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-10 shadow-md text-center lg:text-left flex flex-col items-center lg:items-start relative overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none"><Search className="w-48 h-48 text-[#7a2a33] -mr-12 -mb-12"/></div>

                    <h2 className="font-playfair text-[24px] font-bold text-gray-900 leading-snug mb-4 relative z-10">
                       Find a Men's Health Clinic / Hub
                    </h2>
                    
                    <div className="w-[calc(100%+4rem)] md:w-[calc(100%+5rem)] -mx-8 md:-mx-10 mb-6 relative z-10 overflow-hidden shrink-0">
                       {isSpecialistsLoading || expertItems.length === 0 ? (
                          <div className="h-[380px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7a2a33]"></div>
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
                       <button className="w-full text-center bg-[#7a2a33] text-white px-4 py-4 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors shadow-md">
                          Explore Clinic Directory
                       </button>
                    </div>
                  </div>
              </div>
            </div>
         </div>

         {/* FAQ SECTION */}
         <div className="w-full mt-24 max-w-4xl mx-auto px-4 mb-24">
            <div className="text-center mb-12">
               <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">A New Approach to Men’s Health — Explained</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Why use a test-based approach for men’s health?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <p>Because many of the factors influencing energy, mood, weight, and performance are not always visible without structured insight.</p>
                  <p>A test-based approach helps identify key internal drivers — allowing for more targeted, personalised support rather than guesswork.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  How is this different from standard healthcare or functional approaches?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <p>Many approaches focus on symptoms or isolated areas of health.</p>
                  <p>TBN brings together structured testing, specialist insight, and personalised protocols — creating a more complete picture of what may be influencing your health and how to support it over time.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  What do you mean by “root drivers”?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <p>Root drivers refer to the underlying internal factors that may influence how you feel and function.</p>
                  <p>This can include areas such as hormonal balance, inflammation, metabolic function, gut health, and nutrient status — all of which are assessed through structured testing.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Is this suitable if I’ve been told everything is “normal”?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <p>Yes. Many individuals experience ongoing symptoms despite “normal” ranges.</p>
                  <p>This approach focuses on gaining deeper insight into internal patterns and imbalances that may not always be explored in standard pathways.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Do I need to visit a clinic?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <p>No. You can start at home with foundational testing, or work directly with a TBN clinic, health club, or practitioner for in-person support and rapid screening.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Who will review my results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <p>Results are reviewed by trained TBN specialists.</p>
                  <p>Depending on your pathway and needs, you may also work directly with Dr Ishtiaq Rehman, Neil Parsley, or other senior specialists within the TBN Collective.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Is this only for men with health concerns?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <p>No. Many men use this approach proactively — to better understand their health, optimise performance, and support long-term wellbeing.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  How quickly do I get results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4 space-y-3">
                  <ul className="space-y-1 pl-4">
                     <li className="list-disc"><span className="font-semibold text-gray-800">Foundational tests:</span> returned via lab analysis</li>
                     <li className="list-disc"><span className="font-semibold text-gray-800">Point-of-care testing:</span> available in approximately 15 minutes in clinic</li>
                  </ul>
                  <p>This allows for both baseline insight and immediate feedback where appropriate.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
         </div>

         {/* FINAL CTA */}
         <div className="w-full max-w-4xl mx-auto px-4 mb-16 text-center">
            <h2 className="font-playfair text-[32px] font-bold text-gray-900 mb-6">A new approach to men’s health</h2>
            <p className="text-[18px] text-[#7a2a33] font-bold mb-2">From fatigue and burnout to performance and longevity —</p>
            <p className="text-[16px] text-gray-600 mb-8 font-medium">this is a structured, measurable way to understand and support your health.<br/><br/>Test-Based. Specialist-Led. Precision-Driven.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button onClick={() => openQuiz()} className="bg-[#7a2a33] text-white px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors shadow-sm">
                 Start Your Journey
               </button>
               <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm">
                 Find a Clinic
               </button>
            </div>
         </div>



      </main>
      
      <Footer />
    </div>
  );
};

export default MensHealth;
