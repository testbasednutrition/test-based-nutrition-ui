import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Activity,
  HeartPulse,
  Brain,
  Leaf,
  FileText,
  Search,
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Microscope,
  Dumbbell,
  Timer,
  Zap
} from "lucide-react";
import SportsPerformanceLeadsSlider from "@/components/SportsPerformanceLeadsSlider";

// Fallback to a stunning athletic unsplash image if local asset is missing
const heroImg = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80";

const SportsPerformance = () => {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-[#fdfdf9] font-montserrat">
      <Navbar alwaysSolid />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-16 mb-16">
        
        {/* HERO SECTION */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24 mb-16 xl:mb-24">
           <div className="w-full lg:w-5/12 text-center lg:text-left pt-4 xl:pt-8 flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">Sports Performance</h3>
              <h1 className="font-playfair text-5xl md:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 leading-[1.05] mb-6">
                Elite Performance.<br />Personalised Precision.
              </h1>
              <p className="text-lg xl:text-xl leading-relaxed font-bold mb-4 text-[#7a2a33]">
                Led by professionals working at the highest level of sport.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8 text-left justify-center lg:justify-start">
                <div className="bg-white px-5 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Dr Ishtiaq Rehman</h4>
                    <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest leading-tight">England FA Sports Doctor</p>
                  </div>
                </div>
                <div className="bg-white px-5 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
                    <Activity className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Neil Parsley</h4>
                    <p className="text-[11px] font-bold text-[#7a2a33] uppercase tracking-widest leading-tight">Elite Performance Coach<br/>(Man City, Ex Team GB)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#7a2a33] hover:bg-[#5c1c24] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
           </div>
           
           <div className="w-full lg:w-7/12 relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[550px] shadow-lg">
              <img src={heroImg} alt="Sports Performance" className="w-full h-full object-cover" />
           </div>
        </div>

        {/* EXPLORE YOUR PATHWAY - SUB CATEGORIES GRID */}
        <div className="mb-12 xl:mb-20 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Dumbbell className="w-48 h-48 -mr-12 -mt-12"/></div>
          <h2 className="font-playfair text-xl lg:text-2xl font-bold text-center text-gray-900 mb-8 tracking-widest uppercase relative z-10">Explore Your Performance Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 relative z-10">
            {[
              "Youth Performance",
              "Athletes (Amateur to Elite)",
              "Event & Competition Preparation",
              "Coaches & Performance Teams",
              "Peak Performance & Longevity"
            ].map((item, idx) => (
              <div key={idx} className="bg-[#fcfaf7] hover:bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-start gap-3 text-left group">
                <div className="w-2 h-2 rounded-full bg-[#d0bfae] group-hover:bg-[#7a2a33] transition-colors shrink-0"></div>
                <span className="font-bold text-[13px] md:text-[14px] text-gray-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 text-gray-800">
          
          {/* LEFT COLUMN - Combined content (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-12 pr-0 lg:pr-4 xl:pr-8">
            
            {/* MISS WHAT MATTERS & TRAINING HARDER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#7a2a33]"></div>
                <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-4 uppercase">Most Performance Plans Miss What Matters</h3>
                <p className="font-medium text-gray-700 italic border-l-2 border-gray-200 pl-4 mb-5">
                  Training is visible. What drives performance isn't.
                </p>
                <p className="font-bold text-sm mb-4 text-[#7a2a33]">Fatigue. Slow recovery. Brain fog. Inconsistency.</p>
                <p className="text-gray-600 mb-5 font-medium text-sm">These may be signals your body isn’t operating optimally. We use testing to guide a more precise understanding of:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {['Performance', 'Recovery', 'Energy', 'Focus', 'Resilience'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]/40"></div> <span className="font-bold text-gray-800">{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fcfaf7] p-8 rounded-2xl shadow-sm border border-[#e9e7dc] relative overflow-hidden">
                <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-4 uppercase">Training Harder is Not Always The Answer</h3>
                <p className="font-medium text-sm text-gray-600 mb-1">You can train harder.</p>
                <p className="font-medium text-sm text-gray-600 mb-1">Push more.</p>
                <p className="font-medium text-sm text-gray-600 mb-4">Dial everything in.</p>
                <p className="font-bold text-sm text-[#7a2a33] mb-4">...and still experience:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3"><AlertTriangle className="w-4 h-4 text-gray-400" /> <span className="font-medium text-[13px] text-gray-800">Slower recovery</span></li>
                  <li className="flex items-center gap-3"><AlertTriangle className="w-4 h-4 text-gray-400" /> <span className="font-medium text-[13px] text-gray-800">Fatigue or energy crashes</span></li>
                  <li className="flex items-center gap-3"><AlertTriangle className="w-4 h-4 text-gray-400" /> <span className="font-medium text-[13px] text-gray-800">Reduced focus</span></li>
                  <li className="flex items-center gap-3"><AlertTriangle className="w-4 h-4 text-gray-400" /> <span className="font-medium text-[13px] text-gray-800">Recurrent illness or niggles</span></li>
                  <li className="flex items-center gap-3"><AlertTriangle className="w-4 h-4 text-gray-400" /> <span className="font-medium text-[13px] text-gray-800">Inconsistent output</span></li>
                </ul>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center font-bold text-[#7a2a33] text-sm">
                  Because performance is not just physical.
                </div>
              </div>
            </div>

            {/* PERFORMANCE IS CELLULAR */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <Microscope className="w-8 h-8 text-[#7a2a33]" />
                <h3 className="font-playfair text-[22px] font-bold tracking-wider text-gray-900 uppercase">Performance is Cellular</h3>
              </div>
              <p className="text-gray-700 mb-6 font-medium">What’s happening inside your body may influence how you <span className="font-bold text-gray-900">recover, adapt, perform, think,</span> and <span className="font-bold text-gray-900">sustain output.</span></p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-[11px] text-[#7a2a33] uppercase tracking-widest flex items-center justify-center">Fatty Acid<br/>Balance</div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-[11px] text-[#7a2a33] uppercase tracking-widest flex items-center justify-center">Nutrient<br/>Status</div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-[11px] text-[#7a2a33] uppercase tracking-widest flex items-center justify-center">Inflammatory<br/>Activity</div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-[11px] text-[#7a2a33] uppercase tracking-widest flex items-center justify-center">Gut Health<br/>& Absorption</div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-[11px] text-[#7a2a33] uppercase tracking-widest flex items-center justify-center">Metabolic<br/>Function</div>
              </div>

              <div className="bg-[#f0ece1]/30 p-5 rounded-xl border border-gray-100 inline-block">
                <p className="font-bold text-gray-900 text-[14px]">
                  👉 This is where personalised precision begins.
                </p>
              </div>
            </div>

            {/* PERFORMANCE PROFILE SCREENING */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100">
               <h3 className="font-playfair text-[24px] font-bold tracking-wider text-center text-gray-900 mb-2 uppercase">Performance Profile Screening</h3>
               <p className="text-center font-bold text-[#7a2a33] mb-10 uppercase text-xs tracking-widest flex justify-center items-center gap-2"><Zap className="w-4 h-4" /> Fast. Targeted. Insightful.</p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div>
                   <p className="text-[14px] leading-relaxed text-gray-700 font-medium mb-6">
                     We use rapid performance screening to provide immediate insight into key areas linked to performance and recovery.
                   </p>
                   <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 shadow-inner flex items-center gap-4 mb-8">
                     <Timer className="w-8 h-8 text-blue-600 shrink-0" />
                     <p className="text-[13px] font-bold text-blue-900">Selected results available in approximately 15 minutes.</p>
                   </div>

                   <h4 className="font-bold text-gray-900 mb-4 text-[15px] flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-gray-400" /> What this means for you:</h4>
                   <ul className="space-y-3 pl-2">
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> <span className="font-medium text-[14px] text-gray-700">Faster understanding of key markers</span></li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> <span className="font-medium text-[14px] text-gray-700">Real-time guidance during your consultation</span></li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> <span className="font-medium text-[14px] text-gray-700">A more personalised starting point</span></li>
                   </ul>
                 </div>
                 
                 <div className="bg-[#fcfaf7] p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-4 relative z-10">How It Works</h4>
                    <p className="text-[13px] text-gray-600 mb-5 relative z-10">
                      Using a simple finger-prick sample, we assess selected biomarkers associated with:
                    </p>
                    <ul className="space-y-2 mb-6 relative z-10">
                      <li className="flex items-center gap-2 text-[13px]"><CheckCircle2 className="w-4 h-4 text-green-600" /> <span className="font-bold text-gray-800">Energy and fatigue</span></li>
                      <li className="flex items-center gap-2 text-[13px]"><CheckCircle2 className="w-4 h-4 text-green-600" /> <span className="font-bold text-gray-800">Recovery and resilience</span></li>
                      <li className="flex items-center gap-2 text-[13px]"><CheckCircle2 className="w-4 h-4 text-green-600" /> <span className="font-bold text-gray-800">Nutrient levels</span></li>
                      <li className="flex items-center gap-2 text-[13px]"><CheckCircle2 className="w-4 h-4 text-green-600" /> <span className="font-bold text-gray-800">Metabolic markers</span></li>
                      <li className="flex items-center gap-2 text-[13px]"><CheckCircle2 className="w-4 h-4 text-green-600" /> <span className="font-bold text-gray-800">Inflammatory indicators</span></li>
                    </ul>
                 </div>
               </div>

               <div className="mt-10 border-t border-gray-100 pt-8 flex flex-col items-center">
                 <h4 className="font-bold text-gray-900 mb-5 text-[15px] uppercase tracking-widest">Part of a Bigger Picture</h4>
                 <div className="flex flex-wrap justify-center gap-3 mb-6">
                   <span className="bg-gray-100 text-gray-800 px-4 py-2 flex items-center gap-2 rounded-full text-[13px] font-bold border border-gray-200">Consultation</span>
                   <span className="bg-gray-100 text-gray-800 px-4 py-2 flex items-center gap-2 rounded-full text-[13px] font-bold border border-gray-200">Goals & Training</span>
                   <span className="bg-gray-100 text-gray-800 px-4 py-2 flex items-center gap-2 rounded-full text-[13px] font-bold border border-gray-200">Foundational Testing</span>
                 </div>
                 <div className="bg-[#7a2a33] text-white p-4 rounded-xl shadow-md w-full text-center font-bold text-[14px]">
                   👉 Creating a more complete, personalised performance profile.
                 </div>
               </div>
            </div>

            {/* START WITH YOUR FOUNDATION */}
            <div className="bg-[#fcfaf7] p-8 lg:p-10 rounded-3xl shadow-sm border border-[#e9e7dc] relative">
              <div className="mb-8 text-center sm:text-left">
                <Leaf className="w-8 h-8 text-[#7a2a33] mb-4 mx-auto sm:mx-0" />
                <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 mb-3 uppercase leading-tight">Start With Your Foundation</h3>
                <p className="font-bold text-[#7a2a33] pb-2 uppercase tracking-widest text-[11px]">
                  Every performance pathway begins with your internal baseline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 flex items-center gap-2"><Brain className="w-5 h-5 text-[#7a2a33]"/> Omega Balance</h4>
                  <p className="text-[13px] font-medium text-gray-600 mb-4">Provides insight into:</p>
                  <ul className="text-[13px] font-bold text-gray-800 space-y-2 mb-6 border-l-2 border-gray-200 pl-3">
                     <li>Fatty acid balance</li>
                     <li>Cell membrane structure</li>
                     <li>Inflammatory markers</li>
                  </ul>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-green-700 bg-green-50 p-3 rounded-xl border border-green-100">
                    Omega-3 fatty acids EPA and DHA contribute to normal heart function, and DHA contributes to normal brain function and vision.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-[#7a2a33]"/> Gut Health</h4>
                  <p className="text-[13px] font-medium text-gray-600 mb-4">A simple finger-prick blood test providing insight into:</p>
                  <ul className="text-[13px] font-bold text-gray-800 space-y-2 mb-6 border-l-2 border-gray-200 pl-3">
                     <li>Microbiome-related activity</li>
                     <li>Immune response</li>
                     <li>Digestive health patterns</li>
                  </ul>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#7a2a33] bg-[#7a2a33]/5 p-3 rounded-xl border border-[#7a2a33]/10">
                    Helping to inform how your body may absorb and utilise nutrients.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-playfair text-[18px] font-bold text-gray-900 mb-3 text-center sm:text-left">Why This Foundation Matters</h4>
                <p className="text-[14px] leading-relaxed font-bold text-gray-800 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                  You can optimise training and nutrition externally…<br/><br/>
                  <span className="text-[#7a2a33]">…but if your internal environment is not aligned, performance may still be affected.</span>
                </p>
              </div>
            </div>

            {/* PERFORMANCE SCREENING MARKERS GRID */}
            <div>
               <h3 className="font-playfair text-[22px] font-bold tracking-wider text-gray-900 mb-2 uppercase flex items-center gap-3">
                 <Search className="w-6 h-6 text-[#7a2a33]" /> Performance Screening & Biomarkers
               </h3>
               <p className="font-medium text-gray-600 mb-8 border-l-4 border-[#7a2a33] pl-4 py-1 bg-white p-4 rounded-r-xl border-y border-r border-gray-100 shadow-sm">
                 <span className="font-bold text-gray-900 uppercase text-xs tracking-widest block mb-2">Targeted Performance Insight</span>
                 We select biomarkers based on your <span className="font-bold text-gray-900">sport</span>, your <span className="font-bold text-gray-900">symptoms</span>, your <span className="font-bold text-gray-900">goals</span>, and your <span className="font-bold text-gray-900">training demands</span>.
               </p>

               <div className="space-y-3">
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group">
                   <span className="font-playfair font-bold text-gray-900 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Foundation</span>
                   <span className="text-[13px] font-medium text-gray-500 text-right">Omega Balance, Gut Health</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group">
                   <span className="font-playfair font-bold text-gray-900 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Nutrients</span>
                   <span className="text-[13px] font-medium text-gray-500 text-right">Vitamin D, B12, Folate, Ferritin</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border-l-[6px] border-[#7a2a33] flex justify-between items-center relative overflow-hidden group">
                   <span className="font-playfair font-bold text-gray-900 flex items-center gap-2">Metabolic</span>
                   <span className="text-[15px] font-bold text-gray-800 text-right">HbA1c</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group">
                   <span className="font-playfair font-bold text-gray-900 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Inflammation</span>
                   <span className="text-[13px] font-bold text-gray-700 text-right">CRP / hs-CRP</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group">
                   <span className="font-playfair font-bold text-gray-900 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Stress & Recovery</span>
                   <span className="text-[13px] font-medium text-gray-500 text-right">Cortisol</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center group">
                   <span className="font-playfair font-bold text-gray-900 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> Hormonal (If appropriate)</span>
                   <span className="text-[13px] font-medium text-gray-500 text-right">Testosterone, Progesterone, FSH</span>
                 </div>
               </div>
            </div>

            {/* FROM TESTING TO STRATEGY */}
            <div className="p-8 lg:p-10 border-2 border-dashed border-gray-300 rounded-[2rem] relative bg-white/30 box-border mt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdfdf9] px-6 py-2 rounded-full border border-gray-200 font-playfair font-bold text-[18px] text-gray-900 shadow-sm flex items-center gap-3 whitespace-nowrap">
                <FileText className="w-5 h-5 text-gray-400"/> Testing <ArrowRight className="w-4 h-4 text-[#7a2a33]" /> Strategy
              </div>
              
              <p className="text-center font-bold text-gray-800 mb-6 mt-6 uppercase tracking-wider text-[13px]">We combine:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                <div className="bg-white shadow-sm border border-gray-200 py-3 rounded-xl flex items-center justify-center font-bold text-[12px] text-gray-900 uppercase">Your Results</div>
                <div className="bg-white shadow-sm border border-gray-200 py-3 rounded-xl flex items-center justify-center font-bold text-[12px] text-gray-900 uppercase">Your Symptoms</div>
                <div className="bg-white shadow-sm border border-gray-200 py-3 rounded-xl flex items-center justify-center font-bold text-[12px] text-gray-900 uppercase">Your Lifestyle</div>
                <div className="bg-white shadow-sm border border-gray-200 py-3 rounded-xl flex items-center justify-center font-bold text-[12px] text-gray-900 uppercase text-center leading-tight px-2">Performance Demands</div>
              </div>
              
              <div className="bg-[#1c1c1c] text-white text-center p-6 rounded-2xl shadow-xl flex flex-col items-center gap-2">
                <span className="font-bold text-[#d0bfae] text-[11px] uppercase tracking-widest">To deliver a</span>
                <span className="font-playfair text-[20px] font-bold">Personalised, precision-led performance pathway.</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - Original far right (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-10 pl-0 lg:pl-4 xl:pl-8">
            
            {/* 6-MONTH TRANSFORMATION */}
            <div className="bg-[#56292f] p-8 rounded-3xl shadow-lg relative overflow-hidden group shrink-0">
               <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform"><TrendingUp className="w-32 h-32 -mr-10 -mt-10 text-white"/></div>
               <h3 className="font-playfair text-[20px] font-bold tracking-wider mb-2 uppercase relative z-10 text-white leading-snug">6-Month Performance Transformation</h3>
               <p className="text-[#e9e7dc] text-[10px] font-bold uppercase tracking-widest mb-6 relative z-10">Structured. Supported. Measurable.</p>
               
               <p className="text-sm font-medium text-white/90 mb-6 relative z-10 line-clamp-4">
                 For those ready to go beyond one-off testing, our 6-month transformation programme provides:
               </p>

               <div className="space-y-4 mb-8">
                 <div className="bg-white/10 p-4 rounded-xl border border-white/10 relative z-10">
                   <ul className="text-[13px] font-bold text-white space-y-2.5">
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0" /> Ongoing support & expert guidance</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0" /> Personalised, precision-led adjustments</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0" /> Free consultation, results review & protocol</li>
                     <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" /> <span>Receive up to 60% off foundational balance test and kit</span></li>
                   </ul>
                 </div>
               </div>

               <div className="bg-white text-center py-5 px-4 rounded-2xl relative z-10 shadow-xl border-b-[6px] border-[#d0bfae]">
                 <span className="text-[11px] font-bold text-[#56292f] uppercase tracking-widest block mb-1">Starting from</span>
                 <span className="font-playfair font-bold text-[28px] text-gray-900 leading-none">£189</span>
                 <span className="font-bold text-gray-500 text-sm ml-2">+ £39 / month</span>
               </div>
            </div>

            {/* WHAT YOU GAIN ACCESS TO */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 shrink-0">
              <h3 className="font-playfair text-[18px] font-bold tracking-wider text-gray-900 mb-6 uppercase border-b border-gray-100 pb-4">What You Gain Access To</h3>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded-xl text-[13px] font-bold text-gray-800 flex gap-3"><ArrowRight className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" /> Exclusive performance webinars</li>
                <li className="bg-gray-50 p-4 rounded-xl text-[13px] font-bold text-gray-800 flex gap-3"><ArrowRight className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" /> Live Q&A sessions with leading experts</li>
                <li className="bg-gray-50 p-4 rounded-xl text-[13px] font-bold text-gray-800 flex gap-3"><ArrowRight className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" /> Support groups focused on performance, recovery and resilience</li>
                <li className="bg-gray-50 p-4 rounded-xl text-[13px] font-bold text-gray-800 flex gap-3"><ArrowRight className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5" /> Ongoing education from elite coaches and specialists</li>
              </ul>
            </div>

            {/* RECOVERY & RESILIENCE */}
            <div className="bg-[#f2efe9] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#e9e7dc] relative overflow-hidden shrink-0">
               <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="w-24 h-24 -mr-6 -mt-6 text-[#7a2a33]"/></div>
               <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-4 uppercase relative z-10">Recovery & Resilience</h3>
               <p className="font-bold text-[#7a2a33] mb-5 text-[14px] relative z-10">Recovery is not just rest.</p>
               
               <p className="text-[13px] font-medium text-gray-700 mb-4 relative z-10">It may be influenced by:</p>
               <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                 <span className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 shadow-sm border border-gray-100">Nutrient availability</span>
                 <span className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 shadow-sm border border-gray-100">Fatty acid balance</span>
                 <span className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 shadow-sm border border-gray-100">Inflammatory load</span>
                 <span className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 shadow-sm border border-gray-100">Sleep quality</span>
                 <span className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 shadow-sm border border-gray-100">Gut health</span>
                 <span className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 shadow-sm border border-gray-100">Hormonal balance</span>
               </div>
               
               <p className="text-[13px] leading-relaxed font-bold text-gray-900 italic relative z-10 border-l-2 border-[#7a2a33] pl-3">
                 Understanding these areas allows for a more targeted and personalised approach to recovery.
               </p>
            </div>

            {/* SPORTS PERFORMANCE LEADS SLIDER */}
            <SportsPerformanceLeadsSlider />

            {/* WHY PROGRAMME MATTERS */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden shrink-0">
               <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-6 uppercase relative z-10">Why This Matters</h3>
               <p className="text-[14px] text-gray-700 mb-5 font-bold relative z-10">Performance is built through:</p>
               
               <ul className="text-[13px] font-bold text-gray-800 space-y-2 mb-6 relative z-10 bg-[#fdfdf9] p-4 rounded-xl border border-[#e9e7dc]">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Consistency</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Education</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Refinement</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7a2a33]"></div> Understanding your body</li>
               </ul>
               
               <div className="bg-[#e9e7dc]/40 p-4 rounded-xl border border-[#e9e7dc]">
                 <p className="text-[14px] font-bold text-[#7a2a33] relative z-10 flex gap-2"><ArrowRight className="w-4 h-4 shrink-0 mt-0.5" /> This programme supports long-term performance development.</p>
               </div>
            </div>

            {/* WHY APPROACH DIFFERENT */}
            <div className="bg-[#1c1c1c] text-white p-6 lg:p-8 rounded-[2rem] shadow-lg relative shrink-0">
               <h3 className="font-playfair text-[20px] font-bold tracking-wider mb-4 uppercase">Why This Approach Is Different</h3>
               <p className="font-bold text-gray-400 mb-5 text-[13px] uppercase tracking-widest border-l-2 border-[#7a2a33] pl-3">This is not generic advice.</p>
               <p className="font-bold mb-5 text-[15px] leading-relaxed">This is personalised precision, built from:</p>
               
               <div className="grid grid-cols-2 gap-3">
                 <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/5 font-bold text-[13px] text-center">Your data</div>
                 <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/5 font-bold text-[13px] text-center">Your biology</div>
                 <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/5 font-bold text-[13px] text-center">Your goals</div>
                 <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/5 font-bold text-[13px] text-center">Your demands</div>
               </div>
            </div>

            {/* YOUR JOURNEY */}
            <div className="bg-[#fcfaf7] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#e9e7dc] shrink-0">
              <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-8 uppercase text-center xl:text-left flex items-center justify-center xl:justify-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#7a2a33]" /> Your Journey
              </h3>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent xl:before:ml-5 xl:before:-translate-x-px">
                
                {[
                  { title: "Free Consultation", desc: "We understand your goals and challenges" },
                  { title: "Testing", desc: "In clinic, at home or within performance environments" },
                  { title: "Results Review", desc: "Clear explanation of your results" },
                  { title: "Personalised Protocol", desc: "Built around your performance pathway" },
                  { title: "Retesting", desc: "Track changes over time" }
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active xl:justify-between xl:even:flex-row">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm xl:order-none xl:translate-x-0 xl:group-odd:translate-x-0 text-sm ${idx === 3 ? 'bg-[#7a2a33] text-white shadow-md' : 'bg-white text-gray-600'}`}>{idx + 1}</div>
                    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 shadow-sm xl:w-[calc(100%-3.5rem)] flex flex-col justify-center min-h-[60px] ${idx === 3 ? 'bg-[#7a2a33] text-white border-[#56292f] shadow-md shadow-[#7a2a33]/20' : 'bg-white text-gray-800'}`}>
                      <span className="font-bold text-[13px]">{step.title}</span>
                      <span className={`text-[10px] mt-1 ${idx === 3 ? 'text-white/80' : 'text-gray-500'}`}>{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-xl mt-8 text-center text-xs font-bold text-gray-600 border border-gray-100 shadow-sm">
                Access performance support your way:<br/>
                In clinic. At your training ground. In your health club. At home. Or online.
              </div>
            </div>

            {/* FINAL SECTION & IMPORTANT */}
            <div className="flex flex-col gap-6 shrink-0">
              
              <div className="bg-white text-[#7a2a33] p-6 lg:p-8 rounded-3xl flex flex-col shadow-lg border-2 border-[#7a2a33]/10 relative overflow-hidden">
                 <h3 className="font-playfair font-bold mb-6 text-[20px] uppercase tracking-wider relative z-10 leading-snug">A Different Approach to Performance</h3>
                 
                 <div className="grid grid-cols-1 gap-3 mb-8 relative z-10">
                   <div className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 font-bold text-[13px] text-gray-600 text-center shadow-sm">Not guesswork.</div>
                   <div className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 font-bold text-[13px] text-gray-600 text-center shadow-sm">Not generic plans.</div>
                   <div className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 font-bold text-[13px] text-gray-600 text-center shadow-sm">Not surface-level solutions.</div>
                 </div>
                 
                 <p className="text-[17px] font-playfair font-bold mb-8 text-center bg-[#7a2a33]/5 border border-[#7a2a33]/10 py-5 rounded-2xl relative z-10 text-gray-900 shadow-inner">
                   Science-led.<br/>Personalised.<br/>Precision-driven.
                 </p>
  
                 <div className="space-y-3 mb-4 relative z-10">
                   <button className="w-full bg-[#7a2a33] hover:bg-[#5c1c24] text-white p-4 rounded-xl font-bold text-[14px] shadow flex items-center justify-between group transition-colors">
                     Book Your Free Consultation <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"/>
                   </button>
                   <button className="w-full bg-white hover:bg-gray-50 text-[#7a2a33] p-4 rounded-xl border border-[#7a2a33]/20 font-bold text-[14px] shadow-sm flex items-center justify-center group transition-colors">
                     Start Your Personalised Pathway
                   </button>
                 </div>
              </div>

              {/* DISCLAIMER MOVED TO FOOTER */}

            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SportsPerformance;
