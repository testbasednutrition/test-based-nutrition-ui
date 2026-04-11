import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Activity, HeartPulse, Brain, Leaf, FileText, Search, MessageCircle, TrendingUp,
  AlertTriangle, ArrowRight, CheckCircle2, Stethoscope, Microscope, Dumbbell, Timer, Zap, Quote, Users, MapPin, Search as SearchIcon
} from "lucide-react";

// Fallback to a stunning athletic unsplash image if local asset is missing
const heroImg = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80";

const SportsPerformance = () => {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-[#fdfdf9] font-montserrat">
      <Navbar alwaysSolid />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-16 mb-16">
        
        {/* SECTION 1 — HERO */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24 mb-12 xl:mb-20">
           <div className="w-full lg:w-5/12 text-center lg:text-left pt-4 xl:pt-8 flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">Sports Performance</h3>
              <h1 className="font-playfair text-[2.5rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                What’s Limiting Your Performance?
              </h1>
              <p className="text-lg xl:text-xl leading-relaxed font-bold mb-4 text-[#7a2a33]">
                Up to 70% of performance limitations are linked to internal factors such as inflammation, recovery, and nutrient status.
              </p>
              <p className="font-medium text-gray-700 mb-2">Fatigue. Inconsistency. Slow recovery.</p>
              <p className="font-medium text-gray-700 mb-6 italic">Often not training issues — but internal performance constraints.</p>
              <p className="font-bold text-gray-900 mb-6">We use advanced testing to uncover what may be limiting your performance beneath the surface.</p>
              
              <ul className="text-left space-y-3 mb-8 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                 <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> <span className="font-bold text-sm text-gray-800">Test-based performance insight</span></li>
                 <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> <span className="font-bold text-sm text-gray-800">15-minute rapid results available</span></li>
                 <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> <span className="font-bold text-sm text-gray-800">Used in clinics, gyms, and elite environments</span></li>
                 <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> <span className="font-bold text-sm text-gray-800">Built for athletes, teams, and high performers</span></li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#7a2a33] hover:bg-[#5c1c24] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-white hover:bg-gray-50 border border-[#7a2a33]/20 transition-colors text-[#7a2a33] px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Partner With Us
                </button>
              </div>
           </div>
           
           <div className="w-full lg:w-7/12 relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[650px] shadow-lg">
              <img src={heroImg} alt="Sports Performance" className="w-full h-full object-cover" />
           </div>
        </div>

        {/* SECTION 2 — SPECIALIST LEADS */}
        <div className="mb-20 xl:mb-24 mt-12 max-w-[1100px] mx-auto px-4 lg:px-0">
          <div className="mb-10 lg:mb-12 text-center sm:text-left">
             <h2 className="font-playfair text-[15px] lg:text-[16px] text-gray-900 font-bold tracking-[0.2em] uppercase">Led by Directors leading at the Highest Level of Sport Performance</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-10 lg:gap-0 divide-x divide-[#7a2a33]/20">
              {/* Ishtiaq */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 pr-4 sm:pr-6 lg:pr-14">
                 <div className="w-[90px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" alt="Dr Ishtiaq Rehman" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-2">Dr Ishtiaq Rehman</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-2 sm:mb-3">England FA Doctor</div>
                   <p className="text-gray-600 text-[11px] sm:text-[13px] leading-relaxed max-w-xs mx-auto sm:mx-0 mb-3">Specialising in performance medicine, recovery, and athlete health optimisation at elite level.</p>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Performance is not just built in training — it’s built through understanding how the body functions under pressure."</p>
                 </div>
              </div>
              
              {/* Neil */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 pl-4 sm:pl-6 lg:pl-14">
                 <div className="w-[90px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80" alt="Neil Parsley" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-1 sm:mb-2">Neil Parsley</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-2 sm:mb-3">Elite Performance Coach<br/>Man City | Team GB | England Rugby</div>
                   <p className="text-gray-600 text-[11px] sm:text-[13px] leading-relaxed max-w-xs mx-auto sm:mx-0 mb-3">Working with elite athletes to optimise performance, resilience, and competitive output.</p>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#7a2a33]/30 pl-3">"Marginal gains come from precision — not guesswork. The difference is always beneath the surface."</p>
                 </div>
              </div>
          </div>
        </div>

        {/* SECTION 3 — EXPLORE YOUR PATHWAY */}
        <div className="mb-12 xl:mb-20 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Dumbbell className="w-48 h-48 -mr-12 -mt-12"/></div>
          <h2 className="font-playfair text-xl lg:text-3xl font-bold text-center text-gray-900 mb-2 tracking-widest uppercase relative z-10">Choose Your Performance Pathway</h2>
          <p className="text-center font-bold text-[#7a2a33] uppercase tracking-widest text-xs mb-8">Structured support across all levels of performance:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
            {[
              "Athletes (Amateur to Elite)",
              "Youth Performance",
              "Event & Competition Preparation",
              "Coaches & Performance Teams",
              "Cognitive Performance",
              "Extreme & Endurance Performance",
              "Recovery & Injury",
              "Female Performance"
            ].map((item, idx) => (
              <div key={idx} className="bg-[#fcfaf7] hover:bg-white px-5 py-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-start gap-3 text-left group">
                <div className="w-2 h-2 rounded-full bg-[#d0bfae] group-hover:bg-[#7a2a33] transition-colors shrink-0"></div>
                <span className="font-bold text-[13px] md:text-[14px] text-gray-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-COLUMN LAYOUT CONTEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 text-gray-800">
          
          {/* LEFT COLUMN - Combined content (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-12 pr-0 lg:pr-4 xl:pr-8">
            
            {/* SECTION 4 — IT'S NOT JUST TRAINING */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#7a2a33]"></div>
              <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 mb-6 uppercase">It’s Not Just Training</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                 {['Fatigue', 'Slow recovery', 'Brain fog', 'Inconsistency', 'Reduced output'].map((item, i) => (
                    <span key={i} className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg text-[13px] font-bold text-gray-800 shadow-sm">{item}</span>
                 ))}
              </div>
              
              <p className="font-medium text-[15px] text-gray-700 mb-5 border-l-2 border-[#7a2a33]/20 pl-4 py-1">
                These are often treated as <span className="font-bold text-gray-900">performance issues</span>. But in many cases, they may be influenced by:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <li className="flex items-center gap-3 bg-[#fcfaf7] p-4 rounded-xl border border-[#e9e7dc]"><AlertTriangle className="w-4 h-4 text-gray-400 shrink-0" /> <span className="font-bold text-[13.5px] text-gray-800">Poor nutrient absorption</span></li>
                <li className="flex items-center gap-3 bg-[#fcfaf7] p-4 rounded-xl border border-[#e9e7dc]"><AlertTriangle className="w-4 h-4 text-gray-400 shrink-0" /> <span className="font-bold text-[13.5px] text-gray-800">Metabolic inefficiency</span></li>
                <li className="flex items-center gap-3 bg-[#fcfaf7] p-4 rounded-xl border border-[#e9e7dc]"><AlertTriangle className="w-4 h-4 text-gray-400 shrink-0" /> <span className="font-bold text-[13.5px] text-gray-800">Inflammatory load</span></li>
                <li className="flex items-center gap-3 bg-[#fcfaf7] p-4 rounded-xl border border-[#e9e7dc]"><AlertTriangle className="w-4 h-4 text-gray-400 shrink-0" /> <span className="font-bold text-[13.5px] text-gray-800">Cellular imbalance</span></li>
              </ul>
              
              <div className="bg-[#1c1c1c] text-white p-6 md:p-8 rounded-2xl relative shadow-lg">
                 <Quote className="absolute top-4 right-4 w-10 h-10 text-white/5" />
                 <p className="font-bold text-[15px] leading-relaxed mb-5 relative z-10 flex gap-3"><ArrowRight className="w-5 h-5 text-[#d0bfae] shrink-0 mt-0.5" /> Performance is driven by cellular health, metabolism, inflammation, nutrient status, and how effectively your body adapts under load.</p>
                 <div className="flex items-center gap-3 relative z-10 border-t border-white/10 pt-5">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Stethoscope className="w-5 h-5 text-[#d0bfae]" />
                   </div>
                   <div>
                     <p className="text-[13px] font-bold text-white uppercase tracking-widest mb-0.5">Dr Ishtiaq Rehman</p>
                     <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest">England FA Doctor</p>
                   </div>
                 </div>
              </div>
            </div>

            {/* SECTION 6 — THE SCIENCE BEHIND PERFORMANCE */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <Microscope className="w-8 h-8 text-[#7a2a33]" />
                <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 uppercase">The Science Behind Your Performance</h3>
              </div>
              <p className="text-gray-700 mb-8 font-bold">Performance is driven by key internal systems:</p>
              
              <div className="space-y-4">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#7a2a33]/30 transition-colors">
                   <div className="md:w-1/3">
                     <h4 className="font-playfair font-bold text-[18px] text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a2a33]" /> Omega Balance</h4>
                   </div>
                   <div className="md:w-2/3 border-l-2 border-gray-100 pl-4">
                     <p className="text-sm font-medium text-gray-600">Impacts inflammation, recovery, brain function, and cellular performance.</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#7a2a33]/30 transition-colors">
                   <div className="md:w-1/3">
                     <h4 className="font-playfair font-bold text-[18px] text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a2a33]" /> Gut Health & Absorption</h4>
                   </div>
                   <div className="md:w-2/3 border-l-2 border-gray-100 pl-4">
                     <p className="text-sm font-medium text-gray-600">Influences nutrient uptake, immune response, and energy production.</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#7a2a33]/30 transition-colors">
                   <div className="md:w-1/3">
                     <h4 className="font-playfair font-bold text-[18px] text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a2a33]" /> Hormone Regulation</h4>
                   </div>
                   <div className="md:w-2/3 border-l-2 border-gray-100 pl-4">
                     <p className="text-sm font-medium text-gray-600">Affects energy, recovery, strength, and mental resilience.</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#7a2a33]/30 transition-colors">
                   <div className="md:w-1/3">
                     <h4 className="font-playfair font-bold text-[18px] text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a2a33]" /> Blood Sugar (HbA1c)</h4>
                   </div>
                   <div className="md:w-2/3 border-l-2 border-gray-100 pl-4">
                     <p className="text-sm font-medium text-gray-600">Drives energy stability, endurance, and fatigue patterns.</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4 group hover:border-[#56292f]/30 transition-colors">
                   <div className="md:w-1/3">
                     <h4 className="font-playfair font-bold text-[18px] text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#56292f]" /> Inflammation</h4>
                   </div>
                   <div className="md:w-2/3 border-l-2 border-gray-100 pl-4">
                     <p className="text-sm font-bold text-[#7a2a33]">A core driver behind fatigue, injury risk, and reduced output.</p>
                   </div>
                 </div>
              </div>
            </div>

            {/* SECTION 7 — TESTING */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100">
               <div className="mb-10 text-center sm:text-left">
                 <h3 className="font-playfair text-[28px] font-bold tracking-wider text-gray-900 mb-2 uppercase">Understand What’s Happening Beneath the Surface</h3>
               </div>
               
               {/* Foundational */}
               <div className="mb-12">
                 <h4 className="font-bold text-[#7a2a33] text-[16px] uppercase tracking-widest mb-6 flex items-center justify-center sm:justify-start gap-2 border-b-2 border-[#7a2a33]/10 pb-3"><div className="w-2 h-2 bg-[#7a2a33]" /> FOUNDATIONAL TESTING</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-[#fcfaf7] p-6 rounded-2xl shadow-sm border border-[#e9e7dc]">
                     <h5 className="font-playfair font-bold text-xl text-gray-900 mb-4">Omega Balance</h5>
                     <ul className="text-[13.5px] font-medium text-gray-700 space-y-3">
                       <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5"/> Supports cellular performance</li>
                       <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5"/> Influences inflammation and recovery</li>
                       <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5"/> Impacts brain and physical output</li>
                     </ul>
                   </div>
                   <div className="bg-[#fcfaf7] p-6 rounded-2xl shadow-sm border border-[#e9e7dc]">
                     <h5 className="font-playfair font-bold text-xl text-gray-900 mb-4">Gut Health</h5>
                     <ul className="text-[13.5px] font-medium text-gray-700 space-y-3">
                       <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5"/> Supports nutrient absorption</li>
                       <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5"/> Influences immune and digestive function</li>
                       <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0 mt-0.5"/> Impacts energy and resilience</li>
                     </ul>
                   </div>
                 </div>
               </div>

               {/* Rapid Point of care */}
               <div className="mb-12">
                 <h4 className="font-bold text-blue-700 text-[16px] uppercase tracking-widest mb-6 flex items-center justify-center sm:justify-start gap-2 border-b-2 border-blue-100 pb-3"><Zap className="w-5 h-5 text-blue-600" /> RAPID POINT-OF-CARE TESTING</h4>
                 <div className="bg-blue-50/40 p-6 lg:p-8 rounded-3xl border border-blue-100">
                   <h5 className="font-playfair font-bold text-[22px] text-gray-900 mb-3">15-Minute Performance Insights</h5>
                   <p className="font-bold text-sm text-gray-700 mb-6 italic">Available in clinics, gyms, and performance environments.</p>
                   
                   <p className="text-[14px] font-medium text-gray-600 mb-4">Finger-prick testing provides rapid insight into:</p>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                     <span className="bg-white px-4 py-2 border border-blue-100 shadow-sm rounded-xl font-bold text-sm text-center">Vitamin D</span>
                     <span className="bg-white px-4 py-2 border border-blue-100 shadow-sm rounded-xl font-bold text-sm text-center">HbA1c</span>
                     <span className="bg-white px-4 py-2 border border-blue-100 shadow-sm rounded-xl font-bold text-sm text-center">CRP / inflammation</span>
                     <span className="bg-white px-4 py-2 border border-blue-100 shadow-sm rounded-xl font-bold text-sm text-center">Ferritin</span>
                     <span className="bg-white px-4 py-2 border border-blue-100 shadow-sm rounded-xl font-bold text-sm text-center">Cortisol</span>
                     <span className="bg-white px-4 py-2 border border-blue-100 shadow-sm rounded-xl font-bold text-sm text-center">Folate</span>
                   </div>
                   <div className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold shadow-md w-full sm:w-auto inline-block px-8 py-3">
                     Results in as little as 3–15 minutes.
                   </div>
                 </div>
               </div>
               
               {/* Advanced */}
               <div>
                 <h4 className="font-bold text-gray-800 text-[16px] uppercase tracking-widest mb-6 flex items-center justify-center sm:justify-start gap-2 border-b-2 border-gray-100 pb-3"><Microscope className="w-5 h-5" /> ADVANCED TESTING</h4>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                   <div>
                     <p className="font-bold text-sm text-gray-700 mb-4 italic">Available at selected clinics:</p>
                     <ul className="text-[14px] font-bold text-gray-800 grid grid-cols-2 gap-y-3">
                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Testosterone</li>
                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> B12</li>
                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Thyroid (TSH)</li>
                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> FSH</li>
                       <li className="flex items-center gap-2 col-span-2"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Hormonal markers</li>
                     </ul>
                   </div>
                   <div className="bg-[#fcfaf7] p-5 rounded-xl border border-[#e9e7dc] text-center font-bold text-[#7a2a33] text-[14px]">
                     Providing deeper, more detailed insight where required.
                   </div>
                 </div>
               </div>

            </div>
          </div>

          {/* RIGHT COLUMN - Original far right (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-10 pl-0 lg:pl-4 xl:pl-8">
            
            {/* SECTION 5 — WAYS TO WORK WITH US */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden text-center sticky top-24 pt-8">
               <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 uppercase">Flexible Entry Points.</h3>
               <p className="font-bold text-[#7a2a33] mb-8 text-[12px] uppercase tracking-widest mt-1">Structured Progression.</p>
               
               <div className="space-y-4 px-6 pb-6">
                 {/* Option 1 */}
                 <div className="bg-[#fcfaf7] border border-gray-200 rounded-2xl p-6 relative text-left">
                   <div className="absolute -top-3 left-6 bg-[#7a2a33] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Option 1 — Entry Pathway</div>
                   <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-4 mt-2 pr-4 leading-tight">Free Consultation + Personalised Results Review</h4>
                   <ul className="text-[12px] font-medium text-gray-700 space-y-2 mb-6">
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0" /> 30-minute consultation</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0" /> Learn the science behind your symptoms</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0" /> Education-led approach</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33] shrink-0" /> Foundational testing + protocol</li>
                   </ul>
                   <div className="bg-white p-3 rounded-xl border border-gray-100 text-center mb-4">
                     <p className="text-[11px] font-bold text-gray-500 line-through">From £482</p>
                     <p className="text-[18px] font-bold text-[#7a2a33]">£189 <span className="text-[11px] font-bold text-red-600 bg-red-50 px-1 rounded">(Save 61%)</span></p>
                     <p className="text-[14px] font-bold text-gray-800 mt-1">£39/month <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1 rounded">(Save 29%)</span></p>
                   </div>
                   <p className="text-[11px] italic text-gray-500 font-medium text-center leading-tight">
                     Each test result leads to a personalised, medically supported protocol.
                   </p>
                 </div>

                 {/* Option 2 */}
                 <div className="bg-white border border-gray-200 rounded-2xl p-6 relative text-left mt-6">
                   <div className="absolute -top-3 left-6 bg-gray-800 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Option 2 — Specialist Review</div>
                   <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-4 mt-2 leading-tight">TBN Specialist Consultation + Private Results Review</h4>
                   <ul className="text-[12px] font-medium text-gray-700 space-y-2 mb-4">
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0 mt-1.5" /> Free consultation</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0 mt-1.5" /> 30-minute results review</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0 mt-1.5" /> Delivered by a TBN specialist, coach, or practitioner</li>
                   </ul>
                   <div className="bg-gray-50 p-3 rounded-xl font-bold text-[12px] text-center text-gray-800">
                     You choose your expert.
                   </div>
                 </div>

                 {/* Option 3 */}
                 <div className="bg-white border border-gray-200 border-l-[4px] border-l-blue-600 rounded-2xl p-6 relative text-left mt-6">
                   <div className="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Option 3 — Doctor-Led</div>
                   <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-4 mt-2 leading-tight">Doctor Consultation + Full Protocol + Follow-Up</h4>
                   <ul className="text-[12px] font-medium text-gray-700 space-y-2 mb-6">
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" /> Doctor consultation</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" /> Full results review</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" /> Personalised protocol</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" /> Follow-up review after second test</li>
                   </ul>
                   <div className="text-center font-bold text-[20px] text-gray-900">
                     £95 <span className="text-[14px] text-gray-400">/</span> £195
                   </div>
                 </div>
                 
                 <button className="w-full bg-[#7a2a33] text-white py-4 rounded-xl font-bold text-[15px] shadow-sm mt-4 hover:bg-[#5c1c24] transition-colors">
                   Book Free Consultation
                 </button>
               </div>
            </div>



          </div>
        </div>

        {/* SECTION 8 — PARTNER WITH US (Moved below columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 lg:mt-24">
          <div className="lg:col-span-8">
            <div className="bg-[#1c1c1c] p-8 lg:p-12 rounded-[2.5rem] shadow-lg relative overflow-hidden group h-full flex flex-col justify-center">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Users className="w-48 h-48 text-white -mr-12 -mt-12"/></div>
               <p className="text-[11px] font-bold uppercase tracking-widest text-[#d0bfae] mb-3 relative z-10">Join the TBN Collective</p>
               <h3 className="font-playfair text-[32px] md:text-[40px] font-bold text-white mb-6 relative z-10">Partner With Us</h3>
               <p className="font-medium text-[15px] md:text-[16px] text-white/80 mb-8 max-w-xl relative z-10">
                 Work with your clients, patients, or athletes using a structured, test-based model.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10 relative z-10">
                 <div className="flex flex-col">
                    <h4 className="font-bold text-white text-[12px] uppercase tracking-widest mb-4">What You Gain:</h4>
                    <ul className="text-[14px] font-bold text-white/90 space-y-4 pl-2">
                       <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#d0bfae] mt-2 shrink-0"/> <span className="leading-tight">Free training and certification</span></li>
                       <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#d0bfae] mt-2 shrink-0"/> <span className="leading-tight">Full integration into your practice or facility</span></li>
                       <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#d0bfae] mt-2 shrink-0"/> <span className="leading-tight">Marketing and client acquisition support</span></li>
                    </ul>
                 </div>
                 <div className="flex flex-col mt-4 md:mt-10">
                    <ul className="text-[14px] font-bold text-white/90 space-y-4 pl-2">
                       <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#d0bfae] mt-2 shrink-0"/> <span className="leading-tight">Additional revenue streams</span></li>
                       <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#d0bfae] mt-2 shrink-0"/> <span className="leading-tight">Access to a medically-led system</span></li>
                    </ul>
                 </div>
               </div>
               
               <div className="relative z-10 w-full sm:w-auto">
                 <button className="bg-white text-gray-900 px-10 py-3.5 rounded-xl font-bold text-[15px] hover:bg-gray-100 transition-colors w-full sm:w-auto mt-2">
                   Learn More
                 </button>
               </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Practitioner Directory block */}
            <div className="bg-[#f2efe9] p-8 lg:p-10 rounded-[2.5rem] border border-[#e9e7dc] shadow-sm flex-1 flex flex-col justify-center">
               <h3 className="font-playfair text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3"><SearchIcon className="w-6 h-6 text-[#7a2a33]"/> Practitioner Directory</h3>
               <p className="text-[15px] font-medium text-gray-700 mb-8">Find a Specialist Near You</p>
               <Link to="/specialists" className="flex items-center gap-2 font-bold text-[15px] text-[#7a2a33] hover:text-[#5c1c24] transition-colors group mt-auto">
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> View Directory Listings
               </Link>
            </div>

            {/* Leading Insights block */}
            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex-1 flex flex-col justify-center">
               <h3 className="font-playfair text-[24px] font-bold text-gray-900 mb-4 flex items-center gap-3"><FileText className="w-6 h-6 text-[#7a2a33]"/> Leading Insights</h3>
               <p className="text-[15px] font-medium text-gray-600 mb-8 leading-relaxed">
                 Access expert-led content and category-specific education, continuously updated.
               </p>
               <Link to="/news-hub" className="flex items-center gap-2 font-bold text-[15px] text-[#7a2a33] hover:text-[#5c1c24] transition-colors group mt-auto">
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Explore Insights
               </Link>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-[#7a2a33] p-10 lg:p-16 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-48 h-48 -mr-16 -mt-16 text-white"/></div>
             <div className="absolute bottom-0 left-0 p-8 opacity-10"><Zap className="w-48 h-48 -ml-16 -mb-16 text-white rotate-180"/></div>
             
             <h2 className="font-playfair text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-6 relative z-10 leading-tight">
               Understand What’s Driving<br/>Your Performance
             </h2>
             <p className="text-white/80 font-bold mb-4 uppercase tracking-widest text-[13px] relative z-10 border-b border-white/20 pb-4 inline-block px-8">
               Not guesswork. Not generic plans.
             </p>
             <p className="text-[20px] font-playfair font-bold text-[#e9e7dc] mb-10 relative z-10">
               Test-based. Personalised. Precision-driven.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full max-w-lg">
               <button className="flex-1 bg-white hover:bg-gray-100 text-[#7a2a33] px-6 py-4 rounded-xl font-bold text-[15px] shadow-lg flex justify-center items-center gap-2 group transition-all">
                 Book Your Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </button>
               <button className="flex-1 bg-[#5c1c24] hover:bg-[#4a161d] text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-[15px] shadow-sm flex justify-center items-center gap-2 group transition-all">
                 Start Your Performance Pathway <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </button>
             </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SportsPerformance;
