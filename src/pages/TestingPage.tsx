import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Gallery4 } from "@/components/ui/gallery4";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import {
  Activity, ArrowRight, CheckCircle2, Microscope, Users, MapPin, 
  RefreshCw, Zap, Search, ActivitySquare, TestTube2, BrainCircuit
} from "lucide-react";

const heroImg = "/images/testing-hero-new.png";

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
  
  return (
    <div className="min-h-screen flex flex-col pt-[85px] md:pt-[96px] bg-[#f9f5f2] font-montserrat">
      <Navbar alwaysSolid />
      
      {/* 1. HERO SECTION */}
      <div className="w-full relative bg-[#f9f5f2] flex flex-col overflow-hidden min-h-[600px] lg:min-h-[700px] lg:h-[calc(100vh-96px)]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] z-0">
          <img src={heroImg} alt="Science Behind Test-Based Nutrition" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f5f2] via-[#f9f5f2]/70 lg:via-[#f9f5f2]/20 to-transparent"></div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-6/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#9f1e13] font-bold tracking-widest uppercase text-sm mb-4">TEST. TARGET. TRANSFORM.</h3>
              <h1 className="font-playfair text-[3rem] md:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 leading-[1.05] mb-6">
                Stop Playing "Supplement Roulette."
              </h1>
              
              <div className="text-[16px] xl:text-[18px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[500px] mx-auto lg:mx-0 mb-6 font-medium space-y-4">
                 <p>
                   <strong>97% of people fail their first nutrition test</strong>—even those already taking supplements. 
                   Get the data you need to stop wasting money and start seeing results.
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                <button 
                  onClick={() => {
                    document.getElementById('foundations')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#9f1e13] hover:bg-[#80180f] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2 shadow-lg">
                  Order My Balance Test Kit <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => openQuiz()}
                  className="bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-gray-900 px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2 shadow-sm">
                  Find My Nearest TBN Hub
                </button>
              </div>
           </div>
        </div>
      </div>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 md:pb-16 mb-16 mt-16 lg:mt-24">

        {/* 2. RAPID VS ROOT SEGMENTATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
           {/* Rapid */}
           <div className="bg-white p-10 md:p-12 border border-gray-200 rounded-[2rem] shadow-sm flex flex-col hover:shadow-xl hover:border-[#9f1e13]/30 transition-all">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center relative overflow-hidden">
                <Zap className="w-8 h-8 text-[#9f1e13]" />
              </div>
              <p className="font-bold text-gray-400 text-[12px] uppercase tracking-widest mb-3">Category 1</p>
              <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-[#9f1e13] mb-4">Rapid Point-of-Care</h2>
              <h3 className="font-bold text-gray-900 text-lg uppercase tracking-widest mb-6">The "Snapshot"</h3>
              <p className="text-[16px] text-gray-600 font-medium leading-relaxed flex-grow">
                 Results in 15 minutes. Perfect for a quick health check on Vitamin D, Glucose, or Cholesterol. Conducted in-clinic or in-club for immediate insight.
              </p>
           </div>

           {/* Root */}
           <div className="bg-[#f9f5f2] p-10 md:p-12 border border-[#dbd4c9] rounded-[2rem] shadow-md flex flex-col hover:shadow-xl hover:border-[#9f1e13]/30 transition-all">
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Microscope className="w-8 h-8 text-[#9f1e13]" />
              </div>
              <p className="font-bold text-gray-500 text-[12px] uppercase tracking-widest mb-3">Category 2</p>
              <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-[#9f1e13] mb-4">Deep Systemic Analysis</h2>
              <h3 className="font-bold text-gray-900 text-lg uppercase tracking-widest mb-6">The "Blueprint"</h3>
              <p className="text-[16px] text-gray-600 font-medium leading-relaxed flex-grow">
                 Our foundational Omega-Balance and Gut Health tests. These require lab analysis because they look at the last 120 days of your health, not just the last hour.
              </p>
           </div>
        </div>

        {/* 3. THE 120-DAY SUCCESS CYCLE */}
        <div className="w-full mt-24 mb-24 max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-xl border border-gray-200 text-center">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#9f1e13]/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 mb-16">
              <h2 className="font-playfair text-[36px] md:text-[48px] font-bold text-[#9f1e13] mb-6">We provide proof, not just promises.</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Because red blood cells renew every 120 days, we don't just test you once. We create a baseline, implement a protocol, and then re-test to prove the system is working.
              </p>
            </div>

            {/* Cyclical 4-Step Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-16">
               <div className="hidden lg:block absolute top-[40px] left-[12%] right-[12%] h-0.5 bg-gray-200 z-0"></div>
               
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#f9f5f2] border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                     <Search className="w-8 h-8 text-[#9f1e13]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">1. Baseline</h3>
                  <p className="text-sm font-semibold text-[#9f1e13] uppercase tracking-widest">Get the facts</p>
               </div>

               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#f9f5f2] border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                     <ActivitySquare className="w-8 h-8 text-[#9f1e13]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">2. Bespoke</h3>
                  <p className="text-sm font-semibold text-[#9f1e13] uppercase tracking-widest">Get your plan</p>
               </div>

               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#f9f5f2] border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                     <TestTube2 className="w-8 h-8 text-[#9f1e13]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">3. Balance</h3>
                  <p className="text-sm font-semibold text-[#9f1e13] uppercase tracking-widest">Follow protocol</p>
               </div>

               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#f9f5f2] border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                     <RefreshCw className="w-8 h-8 text-[#9f1e13]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">4. Benchmark</h3>
                  <p className="text-sm font-semibold text-[#9f1e13] uppercase tracking-widest">See data change</p>
               </div>
            </div>

            {/* Stat Callout */}
            <div className="relative z-10 max-w-2xl mx-auto bg-[#9f1e13] text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform cursor-default">
               <p className="font-playfair text-[28px] md:text-[32px] font-bold italic leading-snug">
                 "95% of people reach a balanced ratio within 4 months."
               </p>
            </div>
          </div>
        </div>

        {/* 4. THE FOUNDATIONS (Updated Copy) */}
        <div id="foundations" className="w-full mt-24 max-w-5xl mx-auto px-4 mb-24 scroll-mt-32">
          <div className="text-center mb-16">
            <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">
              Deep Systemic Analysis
            </p>
            <h2 className="font-playfair text-[36px] md:text-[44px] font-bold text-gray-900 tracking-wider mb-4 uppercase">THE FOUNDATIONS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Omega Test */}
            <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#9f1e13]/20 transition-all group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-20 h-20 bg-[#f9f5f2] rounded-[1.5rem] flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden p-0 shrink-0">
                  <img src="/images/test-logos/omega3balance.png" alt="Omega Balance Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[28px] text-[#9f1e13] leading-tight">Inflammation &<br/>Brain Health</h3>
              </div>
              <p className="text-[16px] text-gray-800 font-bold mb-6 relative z-10 leading-relaxed">
                The gold standard for measuring silent inflammation.
              </p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Omega-6:3 balance</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Cell membrane fluidity</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Mental strength markers</span></li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-[#9f1e13] text-[#9f1e13] font-bold uppercase tracking-widest text-[13px] hover:bg-[#9f1e13] hover:text-white transition-colors">
                Order My Balance Test Kit
              </button>
            </div>
            
            {/* Gut Health */}
            <div className="bg-[#f9f5f2] p-10 lg:p-12 rounded-[2.5rem] border border-[#dbd4c9] shadow-lg hover:shadow-xl hover:border-[#9f1e13]/30 transition-all group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden p-0 shrink-0">
                  <BrainCircuit className="w-10 h-10 text-[#9f1e13]" />
                </div>
                <h3 className="font-playfair font-bold text-[28px] text-[#9f1e13] leading-tight">The Second<br/>Brain</h3>
              </div>
              <p className="text-[16px] text-gray-800 font-bold mb-6 relative z-10 leading-relaxed">
                Connect the dots between your digestion, your mood, and your skin.
              </p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Microbiome mapping</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Absorption capabilities</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Internal balance tracking</span></li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-[#9f1e13] bg-[#9f1e13] text-white font-bold uppercase tracking-widest text-[13px] hover:bg-[#80180f] hover:border-[#80180f] transition-colors shadow-md">
                Order Gut Health Kit
              </button>
            </div>
          </div>
        </div>

        {/* 5. EXPLORE YOUR PATHWAYS */}
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
                  image: "/services/womens-health-v2.jpg",
                },
                {
                  id: "mens",
                  title: "Men's Health",
                  description: "Hormonal health, energy, and long-term wellbeing\nTestosterone • Fertility • Weight • Stress • Ageing • Gut",
                  href: "/treatments/mens-health",
                  image: "/services/mens-health-v2.jpg",
                },
                {
                  id: "children",
                  title: "Children's Health",
                  description: "Growth, development, and early health foundations\nGut • Neurodivergence • Immunity • Hormones • Behaviour",
                  href: "/treatments/childrens-health",
                  image: "/services/childrens-health-v2.jpg",
                },
                {
                  id: "neuro",
                  title: "Neurodivergence",
                  description: "Focus, cognition, and nervous system support\nADHD • Brain Fog • Cognitive Health • Gut-Brain Axis",
                  href: "/treatments/neurodivergence",
                  image: "/services/neurodivergence-v2.jpg",
                },
                {
                  id: "skin",
                  title: "Skin Health (From Within)",
                  description: "Inflammation, gut-skin connection, and hormonal skin\nAcne • Chronic Skin • Ageing • Collagen • Gut",
                  href: "/treatments/skin-health",
                  image: "/services/skin-health-v2.jpg",
                },
                {
                  id: "sports",
                  title: "Sports Performance",
                  description: "Recovery, output, and performance systems\nYouth • Athletes • Competition • Coaches • Longevity",
                  href: "/treatments/sports-performance",
                  image: "/services/sports-performance-v2.jpg",
                },
                {
                  id: "pain",
                  title: "Pain, Fatigue & Inflammation",
                  description: "Chronic symptoms and recovery pathways\nFibromyalgia • Hormonal Pain • Injury • Gut • Inflammation",
                  href: "/treatments/pain-fatigue",
                  image: "/services/pain-fatigue-v2.jpg",
                  imageClassName: "object-[80%_center]",
                }
              ]}
            />
          </div>
        </div>

        {/* 6. DIRECTORY & PARTNERS (Updated CTAs) */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Access TBN */}
           <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <MapPin className="w-12 h-12 text-[#9f1e13] mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair text-[28px] font-bold text-gray-900 mb-4 uppercase">ACCESS TBN</h3>
              <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-6">In-clinic or in-club</p>
              <ul className="space-y-3 mb-8">
                 <li className="text-[14px] font-medium text-gray-600">Rapid 15-Minute Screening</li>
                 <li className="text-[14px] font-medium text-gray-600">Specialist Consultations</li>
                 <li className="text-[14px] font-medium text-gray-600">Bespoke Protocols</li>
              </ul>
              <Link to="/collectives" className="bg-[#9f1e13] text-white px-8 py-4 rounded-xl font-bold text-[13px] uppercase tracking-wider hover:bg-[#80180f] transition-colors mt-auto w-full shadow-sm">
                Find My Nearest Collective
              </Link>
           </div>

           {/* Results Review */}
           <div className="bg-[#f9f5f2] p-10 rounded-[2.5rem] border border-[#dbd4c9] shadow-sm text-center flex flex-col items-center">
              <Users className="w-12 h-12 text-[#9f1e13] mb-6" strokeWidth={1.5} />
              <h3 className="font-playfair text-[28px] font-bold text-gray-900 mb-4 uppercase leading-tight">Got Your Results?</h3>
              <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-6">Expert Interpretation</p>
              <ul className="space-y-3 mb-8">
                 <li className="text-[14px] font-medium text-gray-600">1:1 Advanced Reviews</li>
                 <li className="text-[14px] font-medium text-gray-600">Understand the data</li>
                 <li className="text-[14px] font-medium text-gray-600">Plan your next steps</li>
              </ul>
              <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors mt-auto w-full shadow-sm">
                Book a Results Review
              </button>
           </div>
        </div>

        {/* 7. THE TBN DIFFERENCE & FINAL CTA */}
        <div className="w-full max-w-4xl mx-auto px-4 mb-16 text-center">
            <div className="border-t border-gray-200 pt-16">
               <h2 className="font-playfair text-[32px] font-bold text-gray-900 mb-6 uppercase">START YOUR JOURNEY</h2>
               <p className="text-[16px] text-gray-600 mb-8 font-medium">Understand your body. Build your plan. Track your progress.<br/><br/>
               <span className="text-[#9f1e13] font-bold text-[18px] uppercase tracking-widest">Test. Target. Transform.</span></p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => {
                    document.getElementById('foundations')?.scrollIntoView({ behavior: 'smooth' });
                  }} className="bg-[#9f1e13] text-white px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#80180f] transition-colors shadow-lg">
                    Order My Balance Test Kit
                  </button>
                  <Link to="/collectives" className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm">
                    Find My Nearest Collective
                  </Link>
               </div>
            </div>
         </div>

      </main>
      <Footer />
    </div>
  );
};

export default TestingPage;
