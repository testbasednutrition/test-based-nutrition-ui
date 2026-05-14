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
  ArrowRight, CheckCircle2, Quote, Users, Search, Zap, AlertTriangle
} from "lucide-react";

const heroImg = "/images/treatments/childrens-hero.png";

const ChildrensHealth = () => {
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
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
          <img src={heroImg} alt="Children & Teen Health" className="w-full h-full object-cover object-[left_30%]" />
          
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdf9] from-15% via-[#fdfdf9]/80 lg:via-[#fdfdf9]/30 to-transparent"></div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">Children & Teen Health</h3>
              <h1 className="font-playfair text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                THEIR FUTURE STARTS NOW
              </h1>
              
              <div className="text-[16px] xl:text-[17px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium space-y-4">
                <p>Children aged 10–18 are now showing some of the highest omega imbalance levels across all age groups tested.</p>
                <p>Focus. Emotional wellbeing. Immunity. Growth.</p>
                <p>Our personalised, test-based health programmes explore how nutrition, gut health, inflammation, sleep, and metabolic health may influence how children grow, develop, regulate, and function day to day.</p>
              </div>
              <p className="font-semibold uppercase tracking-widest text-[#7a2a33] text-[14px] mb-8">TEST. TARGET. TRANSFORM.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => openQuiz()}
                  className="bg-[#7a2a33] hover:bg-[#8c353f] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </button>
              </div>
           </div>
           
           <div className="w-full lg:w-5/12 relative mt-auto lg:mt-0 flex justify-end items-end h-full self-end lg:pb-12 xl:pb-16 mt-8">
              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center text-white shadow-2xl">
                <div>
                   <p className="font-playfair font-bold text-xl mb-1 text-white">Personalised Precision</p>
                   <p className="text-white text-sm font-medium">Testing protocols aligned to your child's developmental and functional demands.</p>
                </div>
                <button 
                   onClick={() => document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" })}
                   className="shrink-0 bg-white text-gray-900 border border-transparent px-5 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md">
                  Explore Your Pathway
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

        {/* SECTION 3 — SPECIALIST LEADS */}
        <div className="mb-20 xl:mb-24 px-4 lg:px-0 mt-16">
          <div className="mb-16 text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
             <p className="text-[12px] font-bold tracking-widest uppercase text-[#7a2a33] mb-3">Our Specialists</p>
             <h2 className="font-playfair text-[28px] md:text-[36px] text-gray-900 font-bold tracking-wider mb-4 leading-tight uppercase">LED BY CHILD HEALTH & FAMILY WELLBEING SPECIALISTS</h2>
             <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
               Built by those working across children’s wellbeing, neurodivergence, nutrition, gut health, emotional wellbeing, development, and family support.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-0 md:divide-x divide-[#7a2a33]/20 border-t border-gray-100 pt-10">
              {/* Specialist 1 */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pr-4 lg:pr-14">
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-0">Dr Ishtiaq Rehman</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-4 mt-2">TBN Co-Founder & Medical Director<br/>England FA Doctor</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Many of the health challenges children and teenagers face today are influenced by wider lifestyle, nutritional, inflammatory, and metabolic factors that are often overlooked."</p>
                 </div>
              </div>
              
              {/* Specialist 2 */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pl-4 lg:pl-14">
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-1">Jenny Mocock</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-4 mt-2">Naturopathic Nutritional Therapist<br/>Healthy Healing Health & Wellbeing Specialists</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Children’s nutrition, gut health, inflammatory balance, and nervous system resilience may all influence emotional wellbeing, focus, immunity, and development during key stages of growth."</p>
                 </div>
              </div>
          </div>

          <div className="mt-12 text-center flex flex-col items-center justify-center max-w-2xl mx-auto border-t border-gray-100 pt-10">
            <h3 className="font-playfair text-[20px] font-bold text-[#111827] mb-2 uppercase tracking-widest">The TBN Collective</h3>
            <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">A specialist-led network supporting children, teens, and families through structured testing, education, lifestyle support, and personalised pathways.</p>
          </div>
        </div>

        {/* SECTION 2 — EXPLORE YOUR PATHWAY */}
        <div id="pathways" className="mb-12 xl:mb-20">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
            <Gallery4 
              subtitle="CHILDREN & TEEN HEALTH PATHWAYS"
              title="Personalised support"
              description="Each pathway is delivered through structured testing, specialist insight, and personalised protocols aligned to your child’s needs — supporting growth, cognition, emotional wellbeing, gut health, immunity, and development."
              compact={true}
              items={[
                {
                  id: "early-childhood",
                  title: "EARLY CHILDHOOD DEVELOPMENT",
                  description: "Early nutrition and development may influence lifelong health outcomes. Identify potential nutritional gaps, inflammatory imbalance, and lifestyle factors influencing growth, resilience, behaviour, and development.",
                  href: "#",
                  image: "/images/treatments/child-pathway-2.jpg",
                },
                {
                  id: "gut-health",
                  title: "GUT HEALTH IN CHILDREN",
                  description: "The gut and brain communicate continuously through the gut-brain axis. Explore how microbiome imbalance, nutrient absorption, and inflammatory activity may influence immunity, behaviour, wellbeing, and resilience.",
                  href: "#",
                  image: "/images/treatments/child-pathway-1.jpg",
                },
                {
                  id: "neurodivergent",
                  title: "NEURODIVERGENT CHILDREN (ADHD & FOCUS)",
                  description: "More families are searching for support around focus, emotional regulation, overwhelm, and resilience. Identify potential deficiencies, omega imbalance, gut health disruption, and nervous system stress influencing calm, focus, cognition, and regulation.",
                  href: "#",
                  image: "/images/treatments/child-pathway-3.jpg",
                },
                {
                  id: "immunity",
                  title: "IMMUNITY, GROWTH & DEVELOPMENT",
                  description: "Children’s immune systems continue developing throughout childhood and adolescence. Assess nutritional status, inflammatory balance, omega levels, and metabolic health to support resilience, recovery, and development.",
                  href: "#",
                  image: "/images/treatments/child-pathway-4.jpg",
                },
                {
                  id: "teen-hormones",
                  title: "TEEN HEALTH & HORMONES",
                  description: "Hormonal transition years may influence mood, confidence, sleep, focus, energy, and emotional wellbeing. Explore how nutritional gaps, stress load, hormones, and metabolic health may influence teenage wellbeing and resilience.",
                  href: "#",
                  image: "/images/treatments/neuro-pathway-2.jpg",
                },
                {
                  id: "emotional-wellbeing",
                  title: "EMOTIONAL WELLBEING & BEHAVIOUR",
                  description: "Emotional wellbeing and behaviour may be influenced by multiple internal and external factors. Identify nutritional deficiencies, inflammatory load, sleep disruption, and nervous system stress influencing resilience, regulation, and wellbeing.",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=800",
                }
              ]}
            />
          </div>
        </div>

        {/* SECTION 7.5 — THE SCIENCE BEHIND */}
        <div className="w-full mt-16 lg:mt-24 max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-3 uppercase">The Science Behind Children & Teen Health</h2>
              <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /> Key drivers we assess <div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /></p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Box 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/cellular.png" alt="Omega Balance & Brain Development" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Omega Balance & Brain Development</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">The brain is nearly 60% fat. Fatty acid balance may influence cognition, focus, emotional regulation, and nervous system development.</p>
              </div>

              {/* Box 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/gut.png" alt="Gut Health & Immune Function" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Gut Health & Immune Function</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">The gut and immune system are closely connected throughout childhood. Gut health may influence immunity, behaviour, wellbeing, inflammation, and nervous system function.</p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/cellular.png" alt="Nutritional Deficiencies & Development" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Nutritional Deficiencies & Development</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Nutrients including iron, vitamin D, B12, and folate support growth, cognition, immunity, and neurological development. Deficiencies may influence fatigue, focus, resilience, and emotional wellbeing.</p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/metabolic.png" alt="Blood Sugar & Energy Regulation" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Blood Sugar & Energy Regulation</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Stable energy supply supports concentration, mood regulation, cognition, and resilience. Blood sugar instability may influence fatigue, focus, emotional wellbeing, and behaviour.</p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/hormone.png" alt="Hormones, Stress & Nervous System Load" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Hormones, Stress & Nervous System Load</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Stress signalling and hormonal changes may influence sleep, emotional regulation, confidence, behaviour, and resilience. This can become increasingly relevant during teenage development.</p>
              </div>

              {/* Box 6 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 p-0">
                   <img src="/images/test-logos/inflammation.png" alt="Inflammation & Long-Term Health" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Inflammation & Long-Term Health</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Research continues to explore links between chronic inflammation and wider long-term health outcomes. Understanding inflammatory load may provide wider insight into resilience, recovery, immunity, and wellbeing.</p>
              </div>
           </div>
        </div>

        {/* SECTION 7.6 — EXPERT QUOTE */}
        <div className="w-full mt-16 lg:mt-20 max-w-6xl mx-auto px-4">
           <div className="bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm w-full hover:shadow-md transition-shadow duration-300">
              
              <div className="flex flex-col items-center lg:items-end max-w-[1050px] mx-auto w-full gap-5">
                 <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
                    <Quote className="w-8 h-8 text-gray-900 fill-gray-900 shrink-0" />
                    <p className="font-playfair text-[18px] md:text-[22px] lg:text-[25px] font-bold italic text-gray-900 text-left leading-snug tracking-wide m-0">
                       "Children’s wellbeing is influenced by far more than isolated symptoms alone. Understanding the wider systems influencing growth, regulation, immunity, and development is where meaningful support begins."
                    </p>
                 </div>

                 <div className="flex items-center gap-4 shrink-0 mt-2">
                    <div className="flex flex-col text-left">
                       <span className="font-bold text-gray-900 text-[12px] uppercase tracking-widest leading-none mb-1.5">— Jenny Mocock</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* SECTION 7.7 — START WITH THE FOUNDATIONS */}
        <div className="w-full mt-20 lg:mt-24 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-3">Understanding these drivers starts with structured, measurable insight.</p>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">Start With The Foundations</h2>
            <p className="font-montserrat text-[15px] font-medium leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Every children’s health pathway starts at a cellular level
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
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Measures cellular health, fatty acid balance, and inflammatory activity. Omega balance may influence cognition, focus, emotional regulation, growth, and nervous system function.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-[#e9e7dc] shadow-sm overflow-hidden group-hover:shadow-md transition-shadow duration-300 shrink-0 p-0">
                  <img src="/images/test-logos/guthealth1.png" alt="Gut Microbiome Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Gut Microbiome<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Assesses microbiome activity, gut-brain communication, and nutrient utilisation. Gut health may influence immunity, digestion, behaviour, mood, and wider wellbeing.</p>
            </div>
          </div>

          {/* 15-MINUTE CHILD HEALTH INSIGHT */}
          <div className="bg-white border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-red-600 to-[#7a2a33]"></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full font-bold text-[13px] uppercase tracking-widest mb-6">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div> 15-Minute Child Health Insight
              </div>
              <h3 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Advanced Point-of-Care Screening</h3>
              <p className="font-montserrat text-[15px] font-medium text-gray-600 max-w-2xl mx-auto">
                Fast, targeted screening to highlight key internal factors influencing growth, immunity, cognition, emotional wellbeing, and resilience.
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
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Vitamin D</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Immune function + growth support</p>
                     </div>
                  </div>
                  
                  {/* HbA1c */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/hba1c.png" alt="HbA1c" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">HbA1c</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Blood sugar regulation + energy stability</p>
                     </div>
                  </div>
                  
                  {/* Ferritin */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/ferritin.png" alt="Ferritin" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Ferritin</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Iron status + concentration support</p>
                     </div>
                  </div>
                  
                  {/* Cortisol */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/cortisol.png" alt="Cortisol" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Cortisol</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Stress response + nervous system load</p>
                     </div>
                  </div>
                  
                  {/* Folate */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/folate.png" alt="Folate" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Folate</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Neurological health + cellular repair</p>
                     </div>
                  </div>
                  
                  {/* Cystatin C */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/cystatin.png" alt="Cystatin C" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Cystatin C</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Metabolic stress + system resilience</p>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Phlebotomy */}
              <div className="lg:col-span-4 lg:border-l lg:border-gray-100 lg:pl-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center -ml-2">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-600"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-[18px] uppercase tracking-widest">Advanced Testing (Blood Draw)</h4>
                </div>
                
                <div className="flex flex-col gap-4 mt-8">
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-red-50/50 border border-red-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/vitaminb12.png" alt="Vitamin B12" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Vitamin B12</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Neurological health + energy production</p>
                     </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-12 h-12 rounded-full bg-red-50/50 border border-red-50 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-0">
                       <img src="/images/test-logos/tsh.png" alt="TSH (Thyroid)" className="w-full h-full object-contain rounded-full scale-[1.15]" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">TSH (Thyroid)</p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Metabolic function + developmental regulation</p>
                     </div>
                  </div>

                </div>
                <p className="text-[12px] text-gray-500 font-medium mt-6 italic text-center lg:text-left">Screening is determined through consultation and pathway selection.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* SECTION 7.8 — HOW WE SUPPORT YOU */}
        <HowWeSupportYou />

        {/* SECTION 7.9 — PRICING / SUPPORT LEVELS */}
        <div className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">Choose Your Support Level</h2>
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-4">
              From foundational support to specialist-led children’s health strategy
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
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Understand your child's symptoms</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Discuss challenges</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Identify appropriate starting pathway</span></div>
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
            <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-8 rounded-[2rem] shadow-md flex flex-col relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7a2a33] text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border border-[#8c353f] whitespace-nowrap">Most Popular</div>
               
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Children’s Foundations</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Omega Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Gut Health Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-Month Protocol</span></div>
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
                       <span className="text-[#7a2a33] font-bold text-[11px] uppercase bg-[#7a2a33]/10 px-2 py-0.5 rounded ml-auto">Save 61%</span>
                     </div>
                     <p className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5">+ £39/mo <span className="text-gray-400 font-normal">optional support</span></p>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#7a2a33] text-white rounded-full hover:bg-[#8c353f] transition-colors shadow-md mb-6">
                   Start Foundations
                 </button>
               </div>
            </div>

            {/* Box 3: Advanced Review */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#7a2a33]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Children’s Review</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">1:1 Strategic Review</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Advanced Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Lifestyle & Nutritional Insight</span></div>
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
                     Delivered by specialists aligned to your child’s pathway and wellbeing goals.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#7a2a33] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d0bfae] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Children’s Consultation</h3>
                 <p className="text-[11px] font-bold text-[#d0bfae] uppercase tracking-widest">Private 1:1 with Specialist</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3 relative z-10">
                 <p className="font-bold text-[11px] text-white/40 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Private 1:1 Consultation</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Full Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Bespoke Protocol Development</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Follow-Up & Retest Review</span></div>
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
                     Direct access to the highest level of support within TBN.
                   </p>
                   <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 w-full mt-auto">
                     <p className="font-bold text-[11px] text-[#d0bfae]/70 uppercase tracking-widest mb-2">Work 1:1 With</p>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Dr Ishtiaq Rehman</p></div>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Jenny Mocock</p></div>
                     <p className="text-[11px] text-white/50 italic mt-2 pl-3 border-l border-white/10">Or a senior TBN specialist aligned to your child’s pathway</p>
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
               Integrated into clinics, schools, family support services, and child wellbeing environments.
             </p>
           </div>
           
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
              
              <div className="w-full lg:flex-1 bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Users className="w-64 h-64 text-[#7a2a33] -mr-16 -mt-16"/></div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 relative z-10 flex-grow">
                     <div className="flex flex-col justify-between">
                         <div className="mt-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                               <button className="flex-1 bg-[#7a2a33] text-white px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-[#8c353f] transition-colors shadow-sm text-center">
                                 Become a Children's Health Partner
                               </button>
                               <button className="flex-1 bg-white border border-gray-200 text-gray-900 px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm text-center">
                                 Invite Us to Your Clinic or Service
                               </button>
                            </div>
                         </div>
                     </div>

                     <div className="flex flex-col xl:pl-8">
                         <h3 className="font-playfair text-[20px] font-bold text-gray-900 mb-6 xl:mt-1">What This Delivers</h3>
                         <ul className="space-y-4">
                            {[
                              "Advanced practitioner training",
                              "Integrated testing systems",
                              "Specialist-led insight",
                              "Structured family wellbeing pathways",
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

              <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 flex flex-col gap-6 lg:gap-8">
                  <div className="w-full bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-10 shadow-md text-center lg:text-left flex flex-col items-center lg:items-start relative overflow-hidden transition-shadow hover:shadow-lg mt-0">
                    <h2 className="font-playfair text-[20px] font-bold text-gray-900 leading-snug mb-4 relative z-10 uppercase">
                       FIND A TBN CHILDREN’S HEALTH CLINIC
                    </h2>
                    <p className="text-[13px] text-gray-600 mb-8 font-medium leading-relaxed relative z-10">
                       Access TBN through a growing network of specialist-led clinics and support environments.
                    </p>
                    
                    <div className="mt-auto w-full relative z-10">
                       <button className="w-full text-center bg-[#7a2a33] text-white px-4 py-4 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#8c353f] transition-colors shadow-md">
                          Find a Clinic Near You
                       </button>
                    </div>
                  </div>
              </div>
            </div>
         </div>

        {/* FINAL CTA */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-[#7a2a33] p-10 lg:p-16 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-48 h-48 -mr-16 -mt-16 text-white"/></div>
             <div className="absolute bottom-0 left-0 p-8 opacity-10"><Zap className="w-48 h-48 -ml-16 -mb-16 text-white rotate-180"/></div>
             
             <h2 className="font-playfair text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-6 relative z-10 leading-tight">
               A more structured approach to children’s wellbeing
             </h2>
             <div className="flex flex-col items-center relative z-10 border-b border-white/20 pb-5 mb-5 px-8">
               <p className="text-white/90 font-bold uppercase tracking-widest text-[13px] mb-2 text-center">
                 From growth and immunity to emotional wellbeing and neurodivergence — this is a new model for understanding children’s health.
               </p>
             </div>
             <p className="text-[20px] font-playfair font-bold text-[#e9e7dc] mb-10 relative z-10">
               Test-Based. Specialist-Led. Precision-Driven.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full max-w-2xl justify-center">
               <button 
                 onClick={() => openQuiz()}
                 className="flex-1 bg-white hover:bg-gray-100 text-[#7a2a33] px-6 py-4 rounded-xl font-bold text-[15px] shadow-lg flex justify-center items-center gap-2 group transition-all">
                 Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </button>
               <Link to="/directory" className="flex-1 bg-[#5c1c24] hover:bg-[#4a161d] text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-[15px] shadow-sm flex justify-center items-center gap-2 group transition-all">
                 Find a Clinic <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </Link>
               <Link to="/partner-with-us" className="flex-1 bg-[#5c1c24] hover:bg-[#4a161d] text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-[15px] shadow-sm flex justify-center items-center gap-2 group transition-all">
                 Partner With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </Link>
             </div>
          </div>
        </div>

        {/* SECTION 9 — FAQ */}
        <div className="w-full mt-24 lg:mt-32 max-w-4xl mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">
               FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Why use a test-based approach for children’s health?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                Because many factors influencing growth, behaviour, immunity, focus, and emotional wellbeing are not always visible without structured insight.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Is this suitable for neurodivergent children?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2 font-medium text-gray-900">Yes.</p>
                <p>Many families use these pathways to better understand wider factors influencing focus, emotional regulation, nervous system resilience, and wellbeing.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Why are gut health and omega balance relevant?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                Research continues to explore how gut health, inflammation, nutrient status, and fatty acid balance may influence immunity, cognition, emotional wellbeing, and nervous system function.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Does this replace medical care?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2 font-medium text-gray-900">No.</p>
                <p>TBN provides wellness screening and educational insight designed to support wider wellbeing alongside existing healthcare pathways.</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChildrensHealth;
