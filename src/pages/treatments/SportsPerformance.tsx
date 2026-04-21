import React from "react";
import Navbar from "@/components/Navbar";
import SportsClientLogos from "@/components/SportsClientLogos";
import RotatingGallery from "@/components/RotatingGallery";
import { Gallery4 } from "@/components/ui/gallery4";
import Footer from "@/components/Footer";
import HowWeSupportYou from "@/components/HowWeSupportYou";
import { Link } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Activity, HeartPulse, Brain, Leaf, FileText, Search, MessageCircle, TrendingUp,
  AlertTriangle, ArrowRight, CheckCircle2, Stethoscope, Microscope, Dumbbell, Timer, Zap, Quote, Users, MapPin, Search as SearchIcon,
  Sun, Droplet, Database, Hexagon, Flame, FlaskConical
} from "lucide-react";

// Local hero image instead of Unsplash
const heroImg = "/images/sports/hero.jpg";

const SportsPerformance = () => {
  const quizContext = useQuiz();
  const openQuiz = quizContext?.openQuiz || (() => {});
  return (
    <div className="min-h-screen flex flex-col pt-[85px] md:pt-[96px] bg-[#fdfdf9] font-montserrat">
      <Navbar alwaysSolid />
      
      {/* FULL BLEED HERO SECTION */}
      <div className="w-full relative bg-[#fdfdf9] flex flex-col overflow-hidden min-h-[600px] lg:min-h-[700px] lg:h-[calc(100vh-96px)]">
        {/* Background Image spanning the right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] z-0">
          <img src={heroImg} alt="Sports Performance" className="w-full h-full object-cover object-[center_20%]" />
          
          {/* Bottom fade for grounding the Tailored Box */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Blend image and black gradient into the left text container background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdf9] via-[#fdfdf9]/70 lg:via-[#fdfdf9]/20 to-transparent"></div>
        </div>

        {/* Content Container Aligned inside normal max-width margins */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">Sports Performance</h3>
              <h1 className="font-playfair text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                Performance Meets Precision
              </h1>
              
              <p className="text-[16px] xl:text-[17px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium">
                A pioneering test-based performance system — delivered by specialists across elite sport.
              </p>
              <p className="font-semibold uppercase tracking-widest text-[#7a2a33] text-[14px] mb-8">Test. Target. Transform.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => openQuiz()}
                  className="bg-[#7a2a33] hover:bg-[#5c1c24] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </button>
              </div>
           </div>
           
           <div className="w-full lg:w-5/12 relative mt-auto lg:mt-0 flex justify-end items-end h-full self-end lg:pb-12 xl:pb-16 mt-8">
              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center text-white shadow-2xl">
                <div>
                   <p className="font-playfair font-bold text-xl mb-1 text-white">Tailored for your sport</p>
                   <p className="text-white text-sm font-medium">Testing protocols aligned to the physical demands of your discipline.</p>
                </div>
                <button 
                   onClick={() => openQuiz()}
                   className="shrink-0 bg-white text-gray-900 border border-transparent px-5 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md">
                  Take the Assessment
                </button>
              </div>
           </div>
        </div>
        
        {/* Logos Floating over the bottom of the Hero */}
        <div className="w-full relative z-10 pt-4 pb-2 md:pb-6">
           <SportsClientLogos />
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="w-full bg-[#f5f5f5] border-y border-gray-200 py-3 md:py-4 mb-2 overflow-hidden">
        <div className="w-full px-4 sm:px-8 flex flex-nowrap justify-start sm:justify-center gap-6 md:gap-12 text-[12px] sm:text-[13px] md:text-sm tracking-tight sm:tracking-normal text-gray-500 whitespace-nowrap overflow-x-auto mx-auto max-w-[1440px] font-sans">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Rapid Performance Testing
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Real-Time Intelligence
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Guided by Elite Specialists
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a2a33]" />
            Measurable Performance Gains
          </span>
        </div>
      </div>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 md:pb-16 mb-16">

        {/* SECTION 2 — EXPLORE YOUR PATHWAY */}
        <div className="mb-12 xl:mb-20">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
            <Gallery4 
              subtitle="Performance Pathways"
              title="Personalised Performance Support"
              description="Each pathway includes targeted testing, a complimentary consultation, and personalised protocols aligned to your results, goals, and performance demands."
              compact={true}
              items={[
                {
                  id: "youth",
                  title: "Youth Performance",
                  description: "Build physical capacity, focus, and long-term development from the ground up.\nFor youth athletes, academies, and development pathways.",
                  href: "#",
                  image: "/images/sports/youth.jpg",
                },
                {
                  id: "athletes",
                  title: "Athletes (Amateur → Elite)",
                  description: "Improve output, recovery, and repeatable high-level performance.\nAcross individual and team sports, from amateur to elite level.",
                  href: "#",
                  image: "/images/sports/athletes.jpg",
                },
                {
                  id: "event",
                  title: "Event & Competition Preparation",
                  description: "Prepare for peak performance under pressure and in the lead-up to competition.\nFor HYROX, endurance events, competitions, and performance deadlines.",
                  href: "#",
                  image: "/images/sports/events.jpg",
                },
                {
                  id: "coaches",
                  title: "Coaches & Performance Teams",
                  description: "Embed structured performance systems across athletes, teams, and environments.\nFor coaches, PTs, academies, and performance environments.",
                  href: "#",
                  image: "/images/sports/coaches.jpg",
                },
                {
                  id: "longevity",
                  title: "Peak Performance & Longevity",
                  description: "Sustain output, reduce decline, and extend performance over time.\nFor long-term athletes, masters competitors, and high-performing individuals.",
                  href: "#",
                  image: "/images/sports/esports.jpg",
                }
              ]}
            />
          </div>
        </div>

{/* SECTION 3 — SPECIALIST LEADS */}
        <div className="mb-20 xl:mb-24 px-4 lg:px-0">
          <div className="mb-16 text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
             <p className="text-[12px] font-bold tracking-widest uppercase text-[#7a2a33] mb-3">Our Specialists</p>
             <h2 className="font-playfair text-[28px] md:text-[36px] text-gray-900 font-bold tracking-wider mb-4 leading-tight">Meet the TBN Collective</h2>
             <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
               A specialist-led performance network across coaching, health, and recovery — built to support athletes, teams, and environments at scale.
             </p>
          </div>
          
          <div className="mb-10 lg:mb-12 text-center sm:text-left border-t border-gray-100 pt-10">
             <h3 className="font-playfair text-[15px] lg:text-[16px] text-gray-900 font-bold tracking-[0.2em] uppercase">Built by those working at the highest level of sport</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-0 md:divide-x divide-[#7a2a33]/20">
              {/* Ishtiaq */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pr-4 lg:pr-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="/images/specialists/ishtiaq.jpg" alt="Dr Ishtiaq Rehman" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-2">Dr Ishtiaq Rehman</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-2 sm:mb-3">Consulting England FA Doctor</div>
                   <p className="text-gray-600 text-[11px] sm:text-[13px] leading-relaxed max-w-xs mx-auto sm:mx-0 mb-3">Specialising in performance medicine, recovery, and athlete health optimisation at elite level.</p>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Performance is driven by the systems behind it — not just the output you see."</p>

                 </div>
              </div>
              
              {/* Neil */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pl-4 lg:pl-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80" alt="Neil Parsley" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-2">Neil Parsley</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-2 sm:mb-3">Elite Performance Coach<br/><span className="text-[9px] lg:text-[10px] opacity-80">Former Manchester City, Team GB, England Rugby & England FA</span></div>
                   <p className="text-gray-600 text-[11px] sm:text-[13px] leading-relaxed max-w-xs mx-auto sm:mx-0 mb-3">Working with elite athletes to optimise performance, resilience, and competitive output.</p>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Progress comes from identifying constraints and removing them with precision."</p>
                 </div>
              </div>
          </div>
        </div>


                {/* SECTION 7.5 — THE SCIENCE BEHIND PERFORMANCE */}
        <div className="w-full mt-16 lg:mt-24 max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-3 uppercase">The Science Behind Performance</h2>
              <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2"><div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /> Key drivers we assess <div className="w-1.5 h-1.5 bg-[#7a2a33] rounded-full" /></p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Box 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300">
                   <Microscope className="w-7 h-7 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Cellular Health</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Supports adaptation, repair, and repeatable performance.</p>
              </div>

              {/* Box 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300">
                   <HeartPulse className="w-7 h-7 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Inflammation & Recovery</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">A major factor in soreness, slower recovery, reduced resilience, and inconsistency.</p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300">
                   <Leaf className="w-7 h-7 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Gut Health & Absorption</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Because what you consume only matters if your body can absorb and utilise it effectively.</p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300">
                   <Zap className="w-7 h-7 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Metabolic Function</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Energy stability, training capacity, and recovery are influenced by how well the body manages fuel and demand.</p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300">
                   <Activity className="w-7 h-7 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Hormonal & Stress Response</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Relevant to performance under pressure, recovery, resilience, and long-term progression.</p>
              </div>

              {/* Box 6 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300">
                   <Brain className="w-7 h-7 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Focus & Cognitive Performance</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Reaction speed, mental sharpness, emotional regulation, and sustained concentration all matter in modern sport.</p>
              </div>
           </div>
        </div>

        {/* SECTION 7.6 — EXPERT QUOTE */}
        <div className="w-full mt-16 lg:mt-20 px-6">
           <div className="flex flex-col items-end max-w-4xl mx-auto gap-4">
              
              <div className="flex items-center gap-4 w-full">
                 <Quote className="w-8 h-8 text-gray-900 fill-gray-900 shrink-0" />
                 <p className="font-playfair text-[18px] md:text-[22px] lg:text-[25px] font-bold italic text-gray-900 text-left leading-snug tracking-wide m-0">
                    The highest performers don't guess. They measure, adapt, and refine.
                 </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 mt-2">
                 <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shrink-0 shadow-sm">
                   <Stethoscope className="w-5 h-5 text-[#7a2a33]" strokeWidth={2} />
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="font-bold text-gray-900 text-[12px] uppercase tracking-widest leading-none mb-1.5">Dr Ishtiaq Rehman</span>
                    <span className="font-bold text-[#7a2a33] text-[10px] uppercase tracking-widest leading-none">Test Based Nutrition</span>
                 </div>
              </div>

           </div>
        </div>

        {/* SECTION 7.7 — START WITH THE FOUNDATIONS */}
        <div className="w-full mt-20 lg:mt-24 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-3">Testing at home or in clinic</p>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">Start With The Foundations</h2>
            <p className="font-montserrat text-[15px] font-medium leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Every performance system starts at a cellular level.
            </p>
          </div>

          {/* Foundation Tests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300 shrink-0">
                  <Activity className="w-6 h-6 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Omega Balance<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Measures cellular health, inflammatory balance, and recovery efficiency.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center border border-[#e9e7dc] group-hover:bg-[#7a2a33] group-hover:border-[#7a2a33] transition-colors duration-300 shrink-0">
                  <Leaf className="w-6 h-6 text-[#7a2a33] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Gut Microbiome<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Assesses absorption, immune interaction, and gut-driven performance constraints.</p>
            </div>
          </div>

          {/* 15-MINUTE PERFORMANCE INSIGHT */}
          <div className="bg-white border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-blue-600 to-[#7a2a33]"></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-bold text-[13px] uppercase tracking-widest mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div> 15-Minute Performance Insight
              </div>
              <h3 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Advanced Point-of-Care Screening</h3>
              <p className="font-montserrat text-[15px] font-medium text-gray-600 max-w-2xl mx-auto">
                Fast, targeted screening to highlight key drivers of performance, recovery, and resilience.
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
                <p className="text-[13px] font-bold text-red-600/80 uppercase tracking-widest mb-8 pl-9">Immediate in-clinic insight</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vitamin D */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Sun className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Vitamin D <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">8 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Muscle function + recovery</p>
                     </div>
                  </div>
                  
                  {/* HbA1c */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Droplet className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">HbA1c <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">5 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Energy regulation + output</p>
                     </div>
                  </div>
                  
                  {/* Ferritin */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Database className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Ferritin <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">15 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Oxygen transport + endurance</p>
                     </div>
                  </div>
                  
                  {/* Cortisol */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Brain className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Cortisol <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">15 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Stress load + recovery capacity</p>
                     </div>
                  </div>
                  
                  {/* Folate */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Hexagon className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Folate <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">15 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Energy production</p>
                     </div>
                  </div>
                  
                  {/* Cystatin C */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Activity className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Cystatin C <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">3 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Recovery load + metabolic stress</p>
                     </div>
                  </div>
                  
                  {/* CRP / hs-CRP */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl hover:border-red-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-red-600/80">
                       <Flame className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">CRP / hs-CRP <span className="text-[9px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2">3 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Inflammation</p>
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
                <p className="text-[13px] font-bold text-blue-600/80 uppercase tracking-widest mb-8 pl-9">Deeper performance biomarkers</p>
                
                <div className="flex flex-col gap-4">
                  {/* Testosterone */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-blue-600/80">
                       <FlaskConical className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Testosterone <span className="text-[9px] font-bold bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2 hidden xl:block">15 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Strength, recovery, output</p>
                     </div>
                  </div>
                  
                  {/* Vitamin B12 */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-blue-600/80">
                       <Droplet className="w-5 h-5 fill-current opacity-70" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">Vitamin B12 <span className="text-[9px] font-bold bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2 hidden xl:block">15 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Energy, focus, neurological function</p>
                     </div>
                  </div>
                  
                  {/* TSH (Thyroid) */}
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:border-blue-600/30 transition-colors flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-50 flex items-center justify-center shrink-0 shadow-sm text-blue-600/80">
                       <Search className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="font-bold text-gray-900 text-[14px] mb-1 flex justify-between items-start">TSH (Thyroid) <span className="text-[9px] font-bold bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded text-gray-500 shrink-0 mt-0.5 ml-2 hidden xl:block">15 MINS</span></p>
                       <p className="text-[12px] text-gray-600 font-medium leading-tight pr-1">Metabolism, consistency, energy</p>
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
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">Choose Your Performance Support Level</h2>
            <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-4">
              From foundational support to specialist-led performance strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Box 1: Free Consultation */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#7a2a33]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               {/* Header Zone */}
               <div className="h-[100px] shrink-0 mb-2">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight">Free Consultation</h3>
               </div>
               
               {/* Body Zone */}
               <div className="flex-grow flex flex-col justify-start mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Define your goals</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Identify effective starting point</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Understand the TBN performance system</span></div>
               </div>
               
               {/* Footer Zone */}
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
                     Gain extreme clarity on your immediate next steps before committing to a protocol.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 2: Foundations */}
            <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-8 rounded-[2rem] shadow-md flex flex-col relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7a2a33] text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border border-[#8c353f] whitespace-nowrap">Most Popular</div>
               
               {/* Header Zone */}
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Performance Foundations</h3>
                 <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               {/* Body Zone */}
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-Month Performance Protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Retest Included</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Ongoing Support</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Access to Community & Education</span></div>
               </div>

               {/* Footer Zone */}
               <div className="h-[360px] shrink-0 pt-6 border-t border-[#e9e7dc] flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-3 mb-1.5 align-bottom">
                       <span className="text-[32px] font-bold text-gray-900 leading-none">£189</span>
                       <span className="text-gray-400 line-through text-[14px] leading-snug">£482</span>
                       <span className="text-[#7a2a33] font-bold text-[11px] uppercase bg-[#7a2a33]/10 px-2 py-0.5 rounded ml-auto">Save 61%</span>
                     </div>
                     <p className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5">+ £39/mo <span className="text-[#7a2a33] font-bold text-[11px] uppercase bg-[#7a2a33]/10 px-1.5 py-[2px] rounded">Save 29%</span></p>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#7a2a33] text-white rounded-full hover:bg-[#8c353f] transition-colors shadow-md mb-6">
                   Start Foundations
                 </button>
                 <div className="flex-grow">
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center">
                     Build the foundations of performance through structured testing, personalised protocols, and measurable progression.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 3: Advanced Review */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-blue-600/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               {/* Header Zone */}
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Performance Review</h3>
                 <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">1:1 Strategic Review</p>
               </div>
               
               {/* Body Zone */}
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">1:1 Advanced Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Performance Strategy Recommendation</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Sport-Specific Guidance</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Clear Next-Phase Planning</span></div>
               </div>

               {/* Footer Zone */}
               <div className="h-[360px] shrink-0 pt-6 border-t border-gray-100 flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-2 align-bottom">
                       <span className="text-[32px] font-bold text-gray-900 leading-none">£85</span>
                       <span className="text-[14px] text-gray-500 font-bold tracking-widest uppercase mb-0.5">Add-on</span>
                     </div>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md mb-6">
                   Book Advanced Review
                 </button>
                 <div className="flex-grow flex flex-col justify-between">
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center mb-4">
                     A private performance review designed to translate your results into a clear, actionable strategy.
                   </p>
                   <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 w-full mt-auto">
                     <p className="font-bold text-[11px] text-blue-600/70 uppercase tracking-widest mb-1">Delivered By</p>
                     <p className="text-[13px] text-gray-800 font-bold mb-1">Senior TBN Specialists</p>
                     <p className="text-[11px] text-gray-500 leading-tight">With pathway escalation to Dr Ishtiaq Rehman or Neil Parsley where required</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#1c1c1c] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d0bfae] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               {/* Header Zone */}
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Performance</h3>
                 <p className="text-[11px] font-bold text-[#d0bfae] uppercase tracking-widest">Private 1:1 with Doctor / Coach</p>
               </div>
               
               {/* Body Zone */}
               <div className="flex-grow mb-6 space-y-3 relative z-10">
                 <p className="font-bold text-[11px] text-white/40 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Private 1:1 Consultation</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Full Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Bespoke Protocol Development</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Follow-Up & Second Review</span></div>
               </div>

               {/* Footer Zone */}
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
                     Direct access to the highest level of performance support within TBN.
                   </p>
                   <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 w-full mt-auto">
                     <p className="font-bold text-[11px] text-[#d0bfae]/70 uppercase tracking-widest mb-2">Work 1:1 With</p>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Dr Ishtiaq Rehman <span className="text-white/50 font-normal">(England FA)</span></p></div>
                     <div className="flex items-start gap-2 mb-1.5"><div className="w-1 h-1 rounded-full bg-[#d0bfae] shrink-0 mt-1.5"></div><p className="text-[12px] text-white font-bold leading-tight">Neil Parsley <span className="text-white/50 font-normal">(Man City, Team GB)</span></p></div>
                     <p className="text-[11px] text-white/50 italic mt-2 pl-3 border-l border-white/10">or senior TBN specialist</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* SECTION 8 — PARTNER WITH US & DIRECTORY */}
        <div className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4 mb-24">
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Partner With Us */}
              <div className="w-full lg:flex-1 bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Users className="w-64 h-64 text-[#7a2a33] -mr-16 -mt-16"/></div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 relative z-10 flex-grow">
                     {/* Left side of the Partner box */}
                     <div className="flex flex-col justify-between">
                         <div>
                             <p className="font-bold text-[#7a2a33] text-[13px] uppercase tracking-widest mb-4">Partner With Us</p>
                             <h2 className="font-playfair text-[28px] md:text-[36px] xl:text-[42px] font-bold text-gray-900 leading-tight mb-6">
                                TBN operates inside real environments
                             </h2>
                             <p className="font-montserrat text-[15px] leading-relaxed text-gray-600 mb-10">
                                — embedding structured testing, specialist insight, and performance systems into existing services.
                             </p>
                         </div>
                         
                         <div className="mt-auto">
                            <p className="font-bold text-gray-900 text-[13px] uppercase tracking-widest mb-4">Partner With TBN</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                               <button className="flex-1 bg-[#7a2a33] text-white px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-[#5c1c24] transition-colors shadow-sm text-center">
                                 Become a Performance Partner
                               </button>
                               <button className="flex-1 bg-white border border-gray-200 text-gray-900 px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm text-center">
                                 Invite Us to Your Facility
                               </button>
                            </div>
                         </div>
                     </div>

                     {/* Right side of the Partner box */}
                     <div className="flex flex-col xl:pl-8">
                         <h3 className="font-playfair text-[20px] font-bold text-gray-900 mb-6 xl:mt-1">What This Delivers</h3>
                         <ul className="space-y-4">
                            {[
                              "Advanced training for coaches and practitioners",
                              "Integrated performance testing within your environment",
                              "Ongoing access to specialist-led insight",
                              "Enhanced client and athlete journeys",
                              "Scalable performance services",
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

              {/* Right Column: Stacked Boxes */}
              <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 flex flex-col gap-6 lg:gap-8">
                 {/* Directory Access */}
                 <div className="w-full bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-10 shadow-md text-center lg:text-left flex flex-col items-center lg:items-start relative overflow-hidden transition-shadow hover:shadow-lg flex-1">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none"><Search className="w-48 h-48 text-[#7a2a33] -mr-12 -mb-12"/></div>


                    <h2 className="font-playfair text-[24px] font-bold text-gray-900 leading-snug mb-4 relative z-10">
                       Access TBN-approved clinics across the UK.
                    </h2>
                    <p className="text-[13px] text-gray-600 mb-8 font-medium leading-relaxed relative z-10">
                       Find specialist practitioners who embed the TBN testing and performance model into their environment. Discover cutting-edge support near you.
                    </p>
                    
                    <div className="mt-auto w-full relative z-10">
                       <button className="w-full text-center bg-[#7a2a33] text-white px-4 py-4 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#8c353f] transition-colors shadow-md">
                          Explore Directory
                       </button>
                    </div>
                  </div>

                 {/* Latest Insights */}
                 <div className="w-full bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm text-center lg:text-left flex flex-col items-center lg:items-start relative overflow-hidden transition-shadow hover:shadow-md flex-1">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none"><FileText className="w-48 h-48 text-gray-900 -mr-12 -mb-12"/></div>


                    <h2 className="font-playfair text-[20px] font-bold text-gray-900 leading-snug mb-4 relative z-10 uppercase tracking-wider">
                       LATEST INSIGHTS
                    </h2>
                    <p className="text-[13px] text-gray-600 mb-8 font-medium leading-relaxed relative z-10">
                       Performance, recovery, cognitive optimisation, and emerging sport science.
                    </p>
                    
                    <div className="mt-auto w-full relative z-10">
                       <button className="w-full text-center bg-transparent border border-gray-200 text-gray-900 px-4 py-4 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm">
                          View Articles
                       </button>
                    </div>
                  </div>
              </div>
            </div>
         </div>

        {/* SECTION 9 — FAQ */}
        <div className="w-full mt-24 lg:mt-32 max-w-4xl mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-montserrat text-[15px] font-medium text-gray-600">
              A New Approach to Performance — Explained
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* FAQ 1 */}
            <AccordionItem value="item-1" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Why use test-based nutrition for performance?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2">Because performance is driven by how effectively the body adapts, recovers, and sustains output under load.</p>
                <p>Testing provides a clearer view of the internal factors influencing energy, recovery, and resilience — allowing for more precise, personalised performance strategies.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 2 */}
            <AccordionItem value="item-2" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                How is TBN different from standard coaching or sports nutrition?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2">Most performance support focuses on training or nutrition in isolation.</p>
                <p>TBN combines structured testing, specialist-led interpretation, and real-world application — creating a more complete performance system built around measurable insight and progression.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 3 */}
            <AccordionItem value="item-3" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Can I work directly with Dr Ishtiaq Rehman or Neil Parsley?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2 font-medium text-gray-900">Yes.</p>
                <p className="mb-2">Through advanced and elite pathways, you can access 1:1 support with Dr Ishtiaq Rehman or Neil Parsley, alongside senior specialists within the TBN collective.</p>
                <p>These sessions focus on interpreting your results, identifying performance constraints, and guiding your next phase of progression.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 4 */}
            <AccordionItem value="item-4" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Is this only for elite athletes?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2 font-medium text-gray-900">No.</p>
                <p className="mb-2">TBN supports all levels — from ambitious gym members and amateur competitors to elite athletes, teams, and performance environments.</p>
                <p>The pathway scales based on the individual, not just the level.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 5 */}
            <AccordionItem value="item-5" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#7a2a33] text-left">
                Can TBN integrate into my gym, club, or performance environment?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2 font-medium text-gray-900">Yes.</p>
                <p>TBN is designed to operate within existing environments — enhancing coaching, physiotherapy, and performance support through structured testing, specialist insight, and integrated systems.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-[#7a2a33] p-10 lg:p-16 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-48 h-48 -mr-16 -mt-16 text-white"/></div>
             <div className="absolute bottom-0 left-0 p-8 opacity-10"><Zap className="w-48 h-48 -ml-16 -mb-16 text-white rotate-180"/></div>
             
             <h2 className="font-playfair text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-6 relative z-10 leading-tight">
               Performance without guesswork
             </h2>
             <div className="flex flex-col items-center relative z-10 border-b border-white/20 pb-5 mb-5 px-8">
               <p className="text-white/90 font-bold uppercase tracking-widest text-[13px] mb-2 text-center">
                 From fitness to elite sport. From gaming to free diving.
               </p>
               <p className="text-white/70 font-bold uppercase tracking-widest text-[12px] text-center">
                 This is a new model for performance.
               </p>
             </div>
             <p className="text-[20px] font-playfair font-bold text-[#e9e7dc] mb-10 relative z-10">
               Test-Based. Specialist-Led. Precision-Driven.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full max-w-lg">
               <button 
                 onClick={() => openQuiz()}
                 className="flex-1 bg-white hover:bg-gray-100 text-[#7a2a33] px-6 py-4 rounded-xl font-bold text-[15px] shadow-lg flex justify-center items-center gap-2 group transition-all">
                 Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </button>
               <Link to="/partner-with-us" className="flex-1 bg-[#5c1c24] hover:bg-[#4a161d] text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-[15px] shadow-sm flex justify-center items-center gap-2 group transition-all">
                 Partner With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </Link>
             </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SportsPerformance;
