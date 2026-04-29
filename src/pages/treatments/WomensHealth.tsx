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

const heroImg = "/services/womens-health-v2.jpg";

const WomensHealth = () => {
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
          <img src={heroImg} alt="Women's Health" className="w-full h-full object-cover object-[center_20%]" />
          
          {/* Bottom fade for grounding the Tailored Box */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Blend image and black gradient into the left text container background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdf9] via-[#fdfdf9]/70 lg:via-[#fdfdf9]/20 to-transparent"></div>
        </div>

        {/* Content Container Aligned inside normal max-width margins */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">THE SCIENCE BEHIND WOMEN’S HEALTH</h3>
              <h1 className="font-playfair text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                Built from real experience.<br/>Defined by measurable insight.
              </h1>
              
              <p className="text-[16px] xl:text-[17px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium">
                Fatigue. Brain fog. Hormonal symptoms. Pain. Many women navigate these changes without clear explanation of what may be influencing them.
              </p>
              <p className="font-semibold uppercase tracking-widest text-[#7a2a33] text-[14px] mb-2">Test in clinic, at home, or online.</p>
              <p className="font-semibold uppercase tracking-widest text-[#7a2a33] text-[14px] mb-8">Test. Target. Transform. Personalised Precision.</p>
              
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
            Advanced Biomarker Testing
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Led by Clinical Specialists
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Personalised Protocols
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Measurable Health Outcomes
          </span>
        </div>
      </div>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 md:pb-16 mb-16">

        {/* SECTION 2 — EXPLORE YOUR PATHWAY */}
        <div id="pathways" className="mb-12 xl:mb-20">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
            <Gallery4 
              subtitle="Women's Health Pathways"
              title="Explore Your Women's Health Pathway"
              description="Personalised support. Each pathway includes targeted testing, a consultation, and personalised protocols aligned to your symptoms, life stage, and goals."
              compact={true}
              items={[
                {
                  id: "fertility",
                  title: "Fertility & Conception",
                  description: "Up to 70% of women with PCOS are undiagnosed\nExplore how cellular health, nutrient status, and blood sugar balance may influence hormonal signalling and fertility.",
                  href: "#",
                  image: "/images/womens-health/flicker-1.jpg",
                },
                {
                  id: "pregnancy",
                  title: "Pregnancy & Postnatal Health",
                  description: "Iron deficiency is one of the most common deficiencies in women of reproductive age\nSupport recovery, energy, and wellbeing by understanding iron levels, nutrient demand, and absorption.",
                  href: "#",
                  image: "/images/womens-health/flicker-2.jpg",
                },
                {
                  id: "perimenopause",
                  title: "Perimenopause & Menopause",
                  description: "Many women experience symptoms despite HRT — or are unable to take it\nLook beyond symptoms to explore inflammation, fatty acid balance, and metabolic changes influencing this transition.",
                  href: "#",
                  image: "/images/womens-health/flicker-3.jpg",
                },
                {
                  id: "hormonal",
                  title: "Hormonal Conditions",
                  description: "PCOS • Endometriosis • Adenomyosis • PMDD • Irregular Cycles\nUnderstand how inflammation, gut health, and cellular balance may influence pain, cycle disruption, and hormonal signalling.",
                  href: "#",
                  image: "/images/womens-health/flicker-4.jpg",
                },
                {
                  id: "mood",
                  title: "Mood, Brain Fog & Burnout",
                  description: "The brain is nearly 60% fat\nExplore how fatty acid balance, iron status, and blood sugar stability may influence focus, mood, and energy.",
                  href: "#",
                  image: "/images/womens-health/flicker-5.jpg",
                },
                {
                  id: "weight",
                  title: "Weight, Metabolism & Blood Sugar",
                  description: "Hormonal and metabolic health are closely connected\nUnderstand how insulin response, inflammation, and cellular energy may influence weight, cravings, and energy levels.",
                  href: "#",
                  image: "/images/womens-health/flicker-6.jpg",
                },
                {
                  id: "gut",
                  title: "Gut Health Issues",
                  description: "Gut health plays a role in how hormones are processed and regulated\nAssess digestion, microbiome balance, and how gut-driven inflammation may influence wider symptoms.",
                  href: "#",
                  image: "/images/womens-health/flicker-7.jpg",
                }
              ]}
            />
            <div className="text-center mt-6">
              <p className="font-bold text-[#7a2a33] text-[14px]">Each pathway is supported through structured testing and specialist insight</p>
            </div>
          </div>
        </div>

        {/* SECTION 3 — SPECIALIST LEADS */}
        <div className="mb-20 xl:mb-24 px-4 lg:px-0">
          <div className="mb-16 text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
             <p className="text-[12px] font-bold tracking-widest uppercase text-[#7a2a33] mb-3">Led by Leading Specialists</p>
             <h2 className="font-playfair text-[28px] md:text-[36px] text-gray-900 font-bold tracking-wider mb-4 leading-tight">Working across women’s health, clinical practice, and functional medicine</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-0 md:divide-x divide-[#7a2a33]/20">
              {/* Vian */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pr-4 lg:pr-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" alt="Dr Vian Hurle" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-0">Dr Vian Hurle</h3>
                   <p className="text-[11px] md:text-[12px] font-semibold text-gray-500 mb-2 tracking-wide">MBBCh, MRCGP, DRCOG, DFFP, DipOccMed, BSLM</p>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-4">Women’s Health Specialist Lead</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Women are often managing symptoms without investigating what may be driving them."</p>
                 </div>
              </div>
              
              {/* Ishtiaq */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pl-4 lg:pl-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="/images/specialists/ishtiaq.jpg" alt="Dr Ishtiaq Rehman" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-1">Dr Ishtiaq Rehman</h3>
                   <p className="text-[11px] md:text-[12px] font-semibold text-gray-500 mb-2 tracking-wide">MBChB, MFSEM</p>
                   <div className="font-sans text-[10px] lg:text-[12px] font-bold text-[#7a2a33] uppercase tracking-widest mb-4">TBN Co-Founder & Medical Director</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Women’s health is influenced by the systems behind it — not just the symptoms you see."</p>
                 </div>
              </div>
          </div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto border-t border-gray-100 pt-8">
            <h4 className="font-playfair text-[20px] font-bold text-gray-900 mb-2">The TBN Collective</h4>
            <p className="text-sm font-medium text-gray-600">A specialist network across hormones, gut health, metabolic health, and recovery — supporting women at every life stage.</p>
          </div>
        </div>


        {/* SECTION 7.5 — THE SCIENCE BEHIND WOMEN'S HEALTH */}
        <div className="w-full mt-16 lg:mt-24 max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-3 uppercase">The Science Behind Women’s Health</h2>
              <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /> Key drivers we assess <div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /></p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Box 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/cellular.png" alt="Cellular Health" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Cellular Health</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Every process begins at a cellular level. When cells are not supported effectively, this may influence energy, recovery, and hormonal balance.</p>
              </div>

              {/* Box 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/inflammation.png" alt="Inflammation & Internal Balance" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Inflammation & Internal Balance</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Low-level inflammation can affect how the body feels over time. This may contribute to fatigue, discomfort, and reduced resilience.</p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/gut.png" alt="Absorption & Nutrient Utilisation" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Absorption & Nutrient Utilisation</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">It’s not just what you take — it’s what your body can absorb and use. If nutrients are not effectively absorbed and delivered to cells, the body may still function in a depleted state.</p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/metabolic.png" alt="Metabolic Function" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Metabolic Function</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Metabolism influences how energy is produced and used. This may impact energy levels, weight regulation, and blood sugar balance.</p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/hormone.png" alt="Hormonal Environment" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Hormonal Environment</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Hormones reflect the internal state of the body. They are influenced by stress, nutrition, metabolism, and inflammation.</p>
              </div>

              {/* Box 6 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/focus.png" alt="Brain & Cognitive Function" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Brain & Cognitive Function</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Focus, mood, and clarity are linked to nutrient status and fatty acid balance. Imbalances here may contribute to brain fog and low mood.</p>
              </div>
           </div>

           <div className="mt-12 bg-[#7a2a33] text-white p-8 md:p-10 rounded-3xl shadow-xl text-center space-y-4 max-w-4xl mx-auto">
             <p className="font-playfair text-[20px] md:text-[24px] font-bold">If the body cannot absorb and utilise nutrients effectively,<br/>no protocol can fully work as intended.</p>
             <div className="w-16 h-px bg-white/20 mx-auto"></div>
             <p className="font-playfair text-[20px] md:text-[24px] font-bold text-[#d0bfae]">Symptoms are visible.<br/>What may be driving them often isn’t.</p>
           </div>
        </div>

        {/* SECTION 7.7 — START WITH THE FOUNDATIONS */}
        <div className="w-full mt-20 lg:mt-24 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-3">At home or in clinic</p>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">START WITH THE FOUNDATIONS</h2>
            <p className="font-montserrat text-[15px] font-medium leading-relaxed text-gray-600 max-w-2xl mx-auto">
              The first step is gaining a clearer view of what is happening internally.
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
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Provides insight into fatty acid balance, cellular health, and internal environment.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-0">
                  <img src="/images/test-logos/guthealth1.png" alt="Gut Microbiome Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Gut Microbiome<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Assesses digestion, microbiome balance, and nutrient absorption.</p>
            </div>
          </div>

          {/* 15-MINUTE HEALTH INSIGHT */}
          <div className="bg-white border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-blue-600 to-[#7a2a33]"></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 bg-[#7a2a33]/10 text-[#7a2a33] px-4 py-1.5 rounded-full font-bold text-[13px] uppercase tracking-widest mb-6">
                <div className="w-2 h-2 rounded-full bg-[#7a2a33] animate-pulse"></div> 15-Minute Health Insight
              </div>
              <h3 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Advanced Point-of-Care Screening In Clinic</h3>
              <p className="font-montserrat text-[15px] font-medium text-gray-600 max-w-2xl mx-auto">
                Fast, targeted screening to highlight key drivers
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Finger Prick */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center -ml-2">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-600"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-[18px] uppercase tracking-widest">Finger Prick</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {/* Vitamin D */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/vitamind.png" alt="Vitamin D" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Vitamin D</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Immune & hormone support</p>
                     </div>
                  </div>
                  
                  {/* HbA1c */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/hba1c.png" alt="HbA1c" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">HbA1c</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Blood sugar regulation</p>
                     </div>
                  </div>
                  
                  {/* Ferritin */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/ferritin.png" alt="Ferritin" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Ferritin</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Iron status & energy</p>
                     </div>
                  </div>
                  
                  {/* CRP / hs-CRP */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/crp.png" alt="CRP / hs-CRP" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">CRP / hs-CRP</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Inflammation</p>
                     </div>
                  </div>
                  
                  {/* Folate */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/folate.png" alt="Folate" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Folate</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Cellular function</p>
                     </div>
                  </div>
                  
                  {/* Cystatin C */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/cystatin.png" alt="Cystatin C" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Cystatin C</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Metabolic stress</p>
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
                  {/* Progesterone */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Progesterone</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Hormonal balance</p>
                     </div>
                  </div>

                  {/* Testosterone */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Testosterone</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Energy & strength</p>
                     </div>
                  </div>

                  {/* TSH */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">TSH (Thyroid)</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Metabolism</p>
                     </div>
                  </div>
                  
                  {/* Vitamin B12 */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Vitamin B12</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Energy & cognition</p>
                     </div>
                  </div>

                  {/* Cortisol */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1">Cortisol</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight">Stress response</p>
                     </div>
                  </div>
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
              From initial clarity to specialist-led women’s health support
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
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Women's Health Foundations</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Omega Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-Month Health Protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Retest Included</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Ongoing Support</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Access to TBN Community</span></div>
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
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Women's Health Review</h3>
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
                     Delivered by senior TBN specialists, with escalation to Dr Vian Hurle where appropriate.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#7a2a33] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d0bfae] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Women's Health Consultation</h3>
                 <p className="text-[11px] font-bold text-[#d0bfae] uppercase tracking-widest">Private 1:1 with Specialist or Doctor</p>
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
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Dr Vian Hurle <span className="text-white/50 font-normal">(Women's Health Specialist)</span></p></div>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Dr Ishtiaq Rehman <span className="text-white/50 font-normal">(TBN Co-Founder)</span></p></div>
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
             <p className="font-bold text-[#7a2a33] text-[13px] md:text-[14px] uppercase tracking-widest leading-snug">
               Integrated into clinics, health clubs, and wellness environments
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
                                 Become a Women's Health Partner
                               </button>
                               <button className="flex-1 bg-white border border-gray-200 text-gray-900 px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm text-center">
                                 Invite Us to Your Clinic
                               </button>
                            </div>
                         </div>
                     </div>

                     <div className="flex flex-col xl:pl-8">
                         <ul className="space-y-4 xl:mt-4">
                            {[
                              "Advanced training",
                              "Integrated testing systems",
                              "Specialist-led insight",
                              "Enhanced client journeys",
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
                       Access TBN-approved clinics across the UK.
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
                          Explore Directory
                       </button>
                    </div>
                  </div>
              </div>
            </div>
         </div>

         {/* FAQ SECTION */}
         <div className="w-full mt-24 max-w-4xl mx-auto px-4 mb-24">
            <div className="text-center mb-12">
               <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">FAQ</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Why use test-based nutrition for women’s health?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4">
                  Many symptoms may be influenced by underlying factors such as nutrient status, metabolism, and cellular health.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  How is TBN different?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4">
                  Most approaches focus on symptoms. TBN combines testing, specialist insight, and personalised support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Do I need to visit a clinic?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4">
                  No. Foundational tests can be completed at home, with further testing available in clinic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-xl px-6 py-2">
                <AccordionTrigger className="text-left font-bold text-[16px] text-gray-900 hover:text-[#7a2a33] hover:no-underline">
                  Is this only for diagnosed conditions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] leading-relaxed pb-4">
                  No. This approach supports women across all life stages.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
         </div>

         {/* FINAL CTA */}
         <div className="w-full max-w-4xl mx-auto px-4 mb-20 text-center">
            <h2 className="font-playfair text-[32px] font-bold text-gray-900 mb-6">A more informed approach to women’s health</h2>
            <p className="text-[18px] text-[#7a2a33] font-bold mb-2">From symptoms to insight • From uncertainty to clarity</p>
            <p className="text-[16px] text-gray-600 mb-8 font-medium">Test-Based. Specialist-Led. Precision-Driven.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button onClick={() => openQuiz()} className="bg-[#7a2a33] text-white px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors shadow-sm">
                 Start Your Journey
               </button>
               <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm">
                 Partner With Us
               </button>
            </div>
         </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default WomensHealth;
