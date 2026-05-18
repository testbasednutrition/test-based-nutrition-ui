import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Gallery4 } from "@/components/ui/gallery4";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useQuiz } from "@/components/QuizContext";
import {
  ArrowRight, CheckCircle2, Microscope, Users, MapPin, 
  Zap, BrainCircuit, Home, Activity, ShieldCheck, FileText, LayoutDashboard, Search,
  ActivitySquare, TestTube2
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
          <img src={heroImg} alt="Test Based Nutrition Testing" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-[#f9f5f2] via-[#f9f5f2]/60 to-transparent lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f5f2] via-[#f9f5f2]/90 lg:via-[#f9f5f2]/40 to-transparent"></div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
           <div className="w-full lg:w-6/12 text-center lg:text-left flex flex-col justify-center">
              <h3 className="font-playfair text-[#9f1e13] font-bold tracking-widest uppercase text-sm mb-4">TEST. TARGET. TRANSFORM.</h3>
              <h1 className="font-playfair text-[3rem] md:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 leading-[1.05] mb-6">
                Where Prevention Meets Personalised Insight
              </h1>
              
              <div className="text-[16px] xl:text-[18px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[500px] mx-auto lg:mx-0 mb-6 font-medium space-y-4">
                 <p>
                   A structured, test-based system designed to understand how your body is functioning — and support it through personalised, lifestyle-led strategies. Delivered through clinics, health clubs, and online.
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                <button 
                  onClick={() => {
                    document.getElementById('foundations')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#9f1e13] hover:bg-[#9f1e13] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2 shadow-lg">
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

        {/* 2. ICON STRIP: HOW OUR TESTING IS DELIVERED */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider uppercase">HOW OUR TESTING IS DELIVERED</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#f9f5f2] rounded-full flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-[#9f1e13]" />
              </div>
              <h3 className="font-bold text-gray-900 text-[15px] uppercase tracking-wider mb-3">At-Home Testing</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
                Foundational finger prick testing with world leading tests. Designed to establish your baseline and understand how your body is functioning over time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#f9f5f2] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#9f1e13]" />
              </div>
              <h3 className="font-bold text-gray-900 text-[15px] uppercase tracking-wider mb-3">Rapid Screening</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
                15-minute screening of key markers in-clinic or health club — providing immediate insight and direction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#f9f5f2] rounded-full flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6 text-[#9f1e13]" />
              </div>
              <h3 className="font-bold text-gray-900 text-[15px] uppercase tracking-wider mb-3">Advanced Testing</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
                Phlebotomy/Blood Draw used where appropriate to explore markers in greater depth within a structured pathway.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#f9f5f2] rounded-full flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-[#9f1e13]" />
              </div>
              <h3 className="font-bold text-gray-900 text-[15px] uppercase tracking-wider mb-3">Ongoing Monitoring</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
                Track changes over time and support consistent, measurable progress through scheduled retesting.
              </p>
            </div>
          </div>
        </div>

        {/* 3. EDITORIAL TEXT BLOCKS */}
        <div className="w-full max-w-5xl mx-auto px-4 mb-24 space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">Identify. Support. Monitor.</p>
              <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 mb-6 leading-tight">WHY WE TEST</h2>
              <p className="text-[16px] text-gray-700 font-medium leading-relaxed mb-6">
                We use structured testing to assess key markers linked to how your body is functioning — helping to highlight factors that may be influencing how you feel.
              </p>
              <p className="text-[16px] text-gray-700 font-medium leading-relaxed">
                Our specialists then provide personalised, lifestyle-led strategies aligned to your results, with ongoing support and retesting to help you track progress over time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-[#dbd4c9] shadow-sm">
              <h3 className="font-playfair text-xl font-bold text-[#9f1e13] mb-4">We assess key areas such as:</h3>
              <ul className="space-y-3">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Nutrient status</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Fatty acid balance</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Blood sugar regulation</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Inflammatory markers</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Hormonal and metabolic indicators</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-[13px] text-gray-500 font-medium uppercase tracking-wider leading-relaxed">
                  These are not diagnoses. They are insights used to guide more informed decisions around health, performance, and wellbeing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="bg-[#f9f5f2] p-8 rounded-[2rem] border border-[#dbd4c9] shadow-sm md:order-2">
              <h3 className="font-playfair text-xl font-bold text-[#9f1e13] mb-4">We aim to:</h3>
              <ul className="space-y-3">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Highlight factors that may be contributing to how you feel</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Support the body through nutrition and lifestyle strategies</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Provide structured, personalised pathways</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Track progress over time through retesting</span></li>
              </ul>
            </div>
            <div className="md:order-1">
              <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">From reactive support to proactive understanding</p>
              <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 mb-6 leading-tight">A PREVENTATIVE, STRUCTURED APPROACH</h2>
              <p className="text-[16px] text-gray-700 font-medium leading-relaxed mb-6">
                Test-Based Nutrition is built around early insight, structured support, and long-term consistency.
              </p>
              <p className="text-[18px] text-[#9f1e13] font-bold italic">
                "The focus is on supporting the body — not overriding it."
              </p>
            </div>
          </div>
        </div>

        {/* 4. HOW TESTING LINKS TO HOW YOU FEEL */}
        <div className="w-full mt-24 mb-24 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-xl border border-gray-200 text-center">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#9f1e13]/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 mb-10">
              <p className="text-xs font-bold tracking-widest uppercase text-[#9f1e13] mb-4">What you experience may reflect internal imbalances</p>
              <h2 className="font-playfair text-[32px] md:text-[44px] font-bold text-gray-900 mb-6">HOW TESTING LINKS TO HOW YOU FEEL</h2>
              <p className="text-[20px] text-gray-900 font-bold mb-6">Fatigue. Brain fog. Low energy. Poor recovery.</p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
                These may be influenced by factors such as:
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200 shadow-sm">Nutrient imbalances</span>
                <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200 shadow-sm">Inflammation levels</span>
                <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200 shadow-sm">Metabolic function</span>
                <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200 shadow-sm">Gut health & absorption</span>
                <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200 shadow-sm">Stress & recovery balance</span>
              </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto bg-[#9f1e13] text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform cursor-default">
               <p className="font-playfair text-[24px] font-bold italic leading-snug">
                 "Testing helps provide clarity — so support can be more personalised, not generic."
               </p>
            </div>
          </div>
        </div>

        {/* 5. HOW THE TBN SYSTEM WORKS (5 steps) */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">A structured pathway — not one-off testing</p>
            <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 tracking-wider mb-12 uppercase">HOW THE TBN SYSTEM WORKS</h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gray-200 z-0"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                  <Search className="w-8 h-8 text-[#9f1e13]" />
                </div>
                <h3 className="font-bold text-[18px] text-gray-900 mb-2">1. Test</h3>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">Foundational or rapid screening</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                  <BrainCircuit className="w-8 h-8 text-[#9f1e13]" />
                </div>
                <h3 className="font-bold text-[18px] text-gray-900 mb-2">2. Understand</h3>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">Data interpreted by specialists</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                  <ShieldCheck className="w-8 h-8 text-[#9f1e13]" />
                </div>
                <h3 className="font-bold text-[18px] text-gray-900 mb-2">3. Support</h3>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">Personalised lifestyle protocol</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/10">
                  <ActivitySquare className="w-8 h-8 text-[#9f1e13]" />
                </div>
                <h3 className="font-bold text-[18px] text-gray-900 mb-2">4. Retest</h3>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">Measure progress accurately</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#9f1e13] border-2 border-[#9f1e13] rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#9f1e13]/30 text-white">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[18px] text-[#9f1e13] mb-2">5. Progress</h3>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">Clarity and measurable growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. THE FOUNDATIONS */}
        <div id="foundations" className="w-full mt-24 max-w-5xl mx-auto px-4 mb-24 scroll-mt-32">
          <div className="text-center mb-16">
            <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">
              Every pathway starts with baseline insight
            </p>
            <h2 className="font-playfair text-[36px] md:text-[44px] font-bold text-gray-900 tracking-wider mb-4 uppercase">THE FOUNDATIONS</h2>
            <p className="text-[16px] text-gray-600 max-w-2xl mx-auto font-medium">
              Delivered at home or in clinic, your journey begins with foundational testing to understand how your body is functioning over time. Establish your baseline and build the starting point for your pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Omega Test */}
            <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#9f1e13]/20 transition-all group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-20 h-20 flex items-center justify-center shrink-0">
                  <img src="/images/test-logos/omega3balance.png" alt="Omega Balance Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[24px] xl:text-[28px] text-[#9f1e13] leading-tight">Omega Balance<br/>Finger Prick</h3>
              </div>
              <p className="text-[14px] text-[#9f1e13] font-bold uppercase tracking-widest mb-4">Provides insight into:</p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Fatty acid balance</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Cellular composition</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Mental strength</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Protection value</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Inflammatory markers</span></li>
              </ul>
              <div className="mt-auto mb-6 pt-4 border-t border-gray-100">
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed italic">
                  <strong>Why it matters:</strong> These markers provide insight into how the body functions, adapts, and responds over time.
                </p>
              </div>
              <button className="w-full py-4 rounded-xl border-2 border-[#9f1e13] text-[#9f1e13] font-bold uppercase tracking-widest text-[13px] hover:bg-[#9f1e13] hover:text-white transition-colors">
                Order My Balance Test Kit
              </button>
            </div>
            
            {/* Gut Health */}
            <div className="bg-[#f9f5f2] p-10 lg:p-12 rounded-[2.5rem] border border-[#dbd4c9] shadow-lg hover:shadow-xl hover:border-[#9f1e13]/30 transition-all group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9f1e13]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-20 h-20 flex items-center justify-center shrink-0">
                  <img src="/images/test-logos/guthealth1.png" alt="Gut Health Test" className="w-full h-full object-contain scale-[1.15]" />
                </div>
                <h3 className="font-playfair font-bold text-[24px] xl:text-[28px] text-[#9f1e13] leading-tight">Gut Health<br/>Finger Prick</h3>
              </div>
              <p className="text-[14px] text-[#9f1e13] font-bold uppercase tracking-widest mb-4">Provides insight into:</p>
              <ul className="space-y-3 mb-8 flex-grow relative z-10">
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Microbiome balance</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Digestive environment</span></li>
                 <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#9f1e13] shrink-0" /><span className="text-[15px] font-medium text-gray-700">Diversity of gut bacteria</span></li>
              </ul>
              <div className="mt-auto mb-6 pt-4 border-t border-gray-200">
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed italic">
                  <strong>Why it matters:</strong> Digestive function can influence how nutrients are absorbed and utilised.
                </p>
              </div>
              <button className="w-full py-4 rounded-xl border-2 border-[#9f1e13] bg-[#9f1e13] text-white font-bold uppercase tracking-widest text-[13px] hover:bg-[#9f1e13] hover:border-[#9f1e13] transition-colors shadow-md">
                Order Gut Health Kit
              </button>
            </div>
          </div>
        </div>

        {/* 7. POINT OF CARE TESTING */}
        <div className="w-full max-w-5xl mx-auto px-4 mb-24">
          <div className="text-center mb-16">
            <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">Rapid Real-time insight. Delivered in clinic or performance environments</p>
            <h2 className="font-playfair text-[32px] md:text-[44px] font-bold text-gray-900 tracking-wider mb-4 uppercase">POINT OF CARE TESTING</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
             {/* Rapid */}
             <div className="bg-white p-10 md:p-12 border border-gray-200 rounded-[2rem] shadow-sm flex flex-col hover:shadow-xl hover:border-[#9f1e13]/30 transition-all">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center relative overflow-hidden bg-[#f9f5f2] rounded-2xl mb-6">
                  <Zap className="w-8 h-8 text-[#9f1e13]" />
                </div>
                <p className="font-bold text-gray-400 text-[12px] uppercase tracking-widest mb-3">Results in minutes</p>
                <h2 className="font-playfair text-[28px] md:text-[32px] font-bold text-[#9f1e13] mb-4">Rapid Finger-Prick Testing</h2>
                <p className="text-[15px] text-gray-600 font-medium leading-relaxed mb-6">
                   Screen key markers quickly to provide immediate insight and direction. Includes markers such as:
                </p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8 flex-grow">
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">Vitamin D</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">HbA1c</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">CRP / hs-CRP</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">Ferritin</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">Folate</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">Cortisol</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">Cystatin C</span></li>
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[13px] text-gray-600 font-medium leading-relaxed italic">
                    <strong>Why it matters:</strong> Provides rapid visibility of key markers that may be influencing how you feel — supporting faster, more informed next steps.
                  </p>
                </div>
             </div>

             {/* Advanced */}
             <div className="bg-[#f9f5f2] p-10 md:p-12 border border-[#dbd4c9] rounded-[2rem] shadow-sm flex flex-col hover:shadow-xl hover:border-[#9f1e13]/30 transition-all">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <TestTube2 className="w-8 h-8 text-[#9f1e13]" />
                </div>
                <p className="font-bold text-gray-500 text-[12px] uppercase tracking-widest mb-3">Deeper analysis</p>
                <h2 className="font-playfair text-[28px] md:text-[32px] font-bold text-[#9f1e13] mb-4">Advanced Phlebotomy</h2>
                <p className="text-[15px] text-gray-600 font-medium leading-relaxed mb-6">
                   Used within clinics to explore markers in more detail when appropriate. Includes markers such as:
                </p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8 flex-grow">
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">Testosterone</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">Vitamin B12</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">FSH</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" /><span className="text-[14px] font-medium text-gray-700">TSH (Thyroid)</span></li>
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[13px] text-gray-600 font-medium leading-relaxed italic">
                    Designed to support a structured, preventative approach — with progress monitored over time.
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* 8. EXPLORE YOUR PATHWAYS */}
        <div id="pathways" className="mb-24 xl:mb-32 scroll-mt-32">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
            <Gallery4 
              subtitle="Structured support across multiple areas"
              title="Explore Your Health & Performance Pathways"
              description="Each pathway uses targeted testing and personalised guidance aligned to your goals."
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

        {/* 9. SPECIALIST-LED SUPPORT */}
        <div className="w-full max-w-5xl mx-auto px-4 mb-24">
          <div className="bg-white p-10 md:p-16 rounded-[2rem] border border-[#dbd4c9] shadow-sm text-center">
            <Users className="w-12 h-12 text-[#9f1e13] mx-auto mb-6" />
            <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">Guided by trained specialists</p>
            <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 mb-6">SPECIALIST-LED SUPPORT</h2>
            <p className="text-[16px] text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Our specialists and doctors support you with personalised, functional lifestyle strategies aligned to your results. This may include:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200">Nutrition Guidance</span>
              <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200">Lifestyle Adjustments</span>
              <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200">Structured Protocols</span>
              <span className="bg-[#f9f5f2] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-gray-800 border border-gray-200">Supplement Support</span>
            </div>
            <p className="text-[13px] text-gray-500 font-medium uppercase tracking-wider italic">
              All guidance is provided for educational and wellbeing support.
            </p>
          </div>
        </div>

        {/* 10. CHOOSE YOUR SUPPORT LEVEL */}
        <div className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4 mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">CHOOSE YOUR SUPPORT LEVEL</h2>
            <p className="font-bold text-[#9f1e13] text-[13px] uppercase tracking-widest mb-4">
              Structured support. Clear progression. Personalised to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Box 1: Free Consultation */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#9f1e13]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">Free Consultation</h3>
                 <p className="font-bold text-[11px] text-[#9f1e13] uppercase tracking-widest">Start with clarity</p>
               </div>
               
               <div className="flex-grow flex flex-col justify-start mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Initial consultation with a specialist</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Overview of how the system works</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Guidance on next steps</span></div>
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
                 <div className="flex-grow flex flex-col justify-between">
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center mb-4">
                     A simple starting point to understand your goals, symptoms, and priorities.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 2: Foundations */}
            <div className="bg-[#f9f5f2] border border-[#dbd4c9] p-8 rounded-[2rem] shadow-md flex flex-col relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9f1e13] text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border border-[#9f1e13] whitespace-nowrap">Most Popular</div>
               
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Foundations</h3>
                 <p className="text-[11px] font-bold text-[#9f1e13] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-bold leading-snug">Omega Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised results review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-month protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-bold leading-snug">Retest included</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Ongoing support & education</span></div>
               </div>

               <div className="h-[360px] shrink-0 pt-6 border-t border-[#dbd4c9] flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                   <div className="flex flex-col justify-end h-full">
                     <div className="flex items-end gap-3 mb-1.5 align-bottom">
                       <span className="text-[32px] font-bold text-gray-900 leading-none">£189</span>
                       <span className="text-gray-400 line-through text-[14px] leading-snug">£482</span>
                       <span className="text-[#9f1e13] font-bold text-[11px] uppercase bg-[#9f1e13]/10 px-2 py-0.5 rounded ml-auto">Save 61%</span>
                     </div>
                     <p className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5">+ £39/mo <span className="text-[#9f1e13] font-bold">(Save 29%)</span></p>
                   </div>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#9f1e13] text-white rounded-full hover:bg-[#9f1e13] transition-colors shadow-md mb-6">
                   Start Foundations
                 </button>
                 <div className="flex-grow flex flex-col justify-between">
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center mb-4">
                     Build your foundation through targeted testing, personalised protocols, and consistent support.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 3: Advanced Review */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#9f1e13]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Review</h3>
                 <p className="text-[11px] font-bold text-[#9f1e13] uppercase tracking-widest">1:1 Strategic Review</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">1:1 advanced results review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Pathway-specific guidance</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#9f1e13] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Clear next-phase planning</span></div>
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
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase border border-[#9f1e13] text-[#9f1e13] rounded-full hover:bg-[#9f1e13] hover:text-white transition-colors shadow-md mb-6">
                   Book Advanced Review
                 </button>
                 <div className="flex-grow flex flex-col justify-between">
                   <p className="font-montserrat text-[13px] text-gray-500 leading-relaxed text-center mb-4">
                     Delivered by Senior TBN specialists with access to escalation where appropriate.
                   </p>
                 </div>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#9f1e13] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#dbd4c9] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Consultation</h3>
                 <p className="text-[11px] font-bold text-[#dbd4c9] uppercase tracking-widest">Private 1:1 with Specialist</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3 relative z-10">
                 <p className="font-bold text-[11px] text-white/40 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Private 1:1 consultation</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Full results review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Bespoke protocol development</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#dbd4c9] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Follow-up test review</span></div>
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
                   Enquire for Elite
                 </button>
                 <div className="flex-grow flex flex-col justify-between">
                   <div className="font-montserrat text-[13px] text-white/80 leading-relaxed text-center mb-4">
                     Delivered by:
                     <ul className="mt-1 space-y-1">
                       <li>Dr Ishtiaq Rehman</li>
                       <li>Neil Parsley</li>
                       <li>Lead pathway specialists</li>
                     </ul>
                   </div>
                 </div>
               </div>
            </div>
            
          </div>
        </div>

        {/* 11. CLINICS & PERFORMANCE */}
        <div className="w-full max-w-5xl mx-auto px-4 mb-24">
          <div className="bg-white p-10 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="text-center md:text-left">
               <h2 className="font-playfair text-[28px] font-bold text-gray-900 mb-2 uppercase">BUILT FOR CLINICS & PERFORMANCE</h2>
               <p className="text-[16px] text-gray-600 font-medium leading-relaxed mb-6">A structured system for integration designed for:</p>
               <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="bg-[#f9f5f2] px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest text-gray-800">Clinics</span>
                  <span className="bg-[#f9f5f2] px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest text-gray-800">Health Clubs</span>
                  <span className="bg-[#f9f5f2] px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest text-gray-800">Gyms</span>
                  <span className="bg-[#f9f5f2] px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest text-gray-800">Coaches</span>
                  <span className="bg-[#f9f5f2] px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest text-gray-800">Performance Teams</span>
               </div>
             </div>
             <div className="shrink-0 text-center">
               <p className="font-playfair text-[24px] text-[#9f1e13] font-bold italic mb-4">Train • Launch • Grow</p>
               <Link to="/partner-with-us" className="inline-block bg-white border border-gray-200 text-gray-900 px-8 py-3.5 rounded-xl font-bold text-[13px] uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-sm">
                 Partner With Us
               </Link>
             </div>
          </div>
        </div>

        {/* 12. THE TBN DIFFERENCE & FINAL CTA */}
        <div className="w-full max-w-4xl mx-auto px-4 mb-16 text-center">
            <div className="border-t border-gray-200 pt-16">
               <h2 className="font-playfair text-[32px] font-bold text-gray-900 mb-6 uppercase">THE TBN DIFFERENCE</h2>
               <div className="flex flex-col gap-3 mb-10 max-w-lg mx-auto text-left">
                 <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /><span className="font-bold text-gray-800">Preventative, not reactive</span></div>
                 <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /><span className="font-bold text-gray-800">Personalised, not generic</span></div>
                 <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /><span className="font-bold text-gray-800">Structured, not one-off</span></div>
                 <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /><span className="font-bold text-gray-800">Insight-led, not assumption-led</span></div>
                 <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#9f1e13]" /><span className="font-bold text-gray-800">Tracked over time through retesting</span></div>
               </div>

               <h2 className="font-playfair text-[32px] font-bold text-gray-900 mb-6 uppercase">START YOUR JOURNEY</h2>
               <p className="text-[16px] text-gray-600 mb-8 font-medium">Understand your body. Support it. Track your progress.<br/><br/>
               <span className="text-[#9f1e13] font-bold text-[18px] uppercase tracking-widest">Test. Target. Transform.</span></p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => {
                    document.getElementById('foundations')?.scrollIntoView({ behavior: 'smooth' });
                  }} className="bg-[#9f1e13] text-white px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#9f1e13] transition-colors shadow-lg">
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
