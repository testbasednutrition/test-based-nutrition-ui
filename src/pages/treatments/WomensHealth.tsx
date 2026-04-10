import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImg from "@/assets/treatments/womens-health.jpg";
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
  ArrowUpRight
} from "lucide-react";
import WomensHealthLeadsSlider from "@/components/WomensHealthLeadsSlider";

const WomensHealth = () => {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-[#fdfdf9] font-montserrat">
      <Navbar alwaysSolid />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-16 mb-16">
        
        {/* HERO SECTION - Spans full width of the top container */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-16 xl:mb-20">
           {/* Text Side */}
           <div className="w-full lg:w-5/12 text-center lg:text-left pt-4 xl:pt-8 flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">Women's Health</h3>
              <h1 className="font-playfair text-5xl md:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 leading-[1.05] mb-6">
                Beyond<br />Hormones
              </h1>
              <p className="text-lg xl:text-xl leading-relaxed font-medium mb-8 text-gray-700">
                A science-led, preventative approach combining advanced biomarker testing, cellular insight and personalised protocols.<br/><br/>
                <span className="text-[#7a2a33] font-bold">Delivered in clinic, at home, or online.</span><br/>
                Test. Target. Transform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#7a2a33] hover:bg-[#5c1c24] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <Link to="/partner-with-us" className="border border-gray-300 hover:bg-gray-50 transition-colors bg-white text-gray-800 px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Explore Your Health Pathway
                </Link>
              </div>
           </div>
           
           {/* Image Side */}
           <div className="w-full lg:w-7/12 mt-12 lg:mt-0 xl:pl-8">
              <div className="w-full rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-video lg:aspect-[4/3] lg:h-[540px] shadow-sm mx-auto">
                 <img src={heroImg} alt="Women's Health" className="w-full h-full object-cover object-[20%_top]" />
              </div>
           </div>
        </div>

        {/* WOMEN'S HEALTH SPECIALISTS ROW */}
        <div className="mb-20 xl:mb-24 mt-12 max-w-5xl mx-auto px-4 lg:px-0">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-10 lg:mb-12 text-center sm:text-left gap-4">
             <h2 className="font-playfair text-[15px] lg:text-[16px] text-gray-900 font-bold tracking-[0.2em] uppercase">Women's Health Specialists</h2>
             <Link to="/specialists" className="text-[#7a2a33] font-bold text-[11px] flex items-center gap-2 hover:opacity-80 transition-opacity uppercase tracking-[0.2em]">
                View all experts <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* Lyndsey */}
              <Link to="/specialists/lyndsey-hopper" className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8">
                 <div className="w-[140px] xl:w-[150px] shrink-0 aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://test-basednutrition.com/assets/images/0a4ad164-ccc2-4459-a338-38f4cb2fce4e-1256x1675.jpg" alt="Lyndsey Hopper" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-2 sm:pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-2">Lyndsey Hopper</h3>
                   <div className="font-sans text-[11px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-3">Wellness Coach</div>
                   <p className="text-gray-600 text-[13px] leading-relaxed max-w-xs">Specialising in preventative performance and establishing transformative, cellular-level health protocols tuned directly to your lifestyle.</p>
                 </div>
              </Link>
              
              {/* Fiona */}
              <Link to="/specialists/fiona-pursglove" className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8">
                 <div className="w-[140px] xl:w-[150px] shrink-0 aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://test-basednutrition.com/assets/images/fiona-11-1256x837.jpeg" alt="Fiona Pursglove" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-2 sm:pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#7a2a33] transition-colors leading-snug mb-2">Fiona Pursglove</h3>
                   <div className="font-sans text-[11px] lg:text-[12px] font-semibold text-[#7a2a33] uppercase tracking-widest mb-3">Naturopathic Nutritionist</div>
                   <p className="text-gray-600 text-[13px] leading-relaxed max-w-xs">Integrating comprehensive biomarker analysis with bespoke naturopathic therapies to radically rebalance and optimize hormonal health.</p>
                 </div>
              </Link>
          </div>
        </div>

        {/* EXPLORE YOUR PATHWAY - SUB CATEGORIES GRID */}
        <div className="mb-12 xl:mb-20 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Leaf className="w-48 h-48 -mr-12 -mt-12"/></div>
          <h2 className="font-playfair text-xl lg:text-2xl font-bold text-center text-gray-900 mb-8 tracking-widest uppercase relative z-10">Explore Your Pathway</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
            {[
              "Puberty & Teen Hormones",
              "Fertility & Conception",
              "Pregnancy & Postnatal",
              "Perimenopause & Menopause",
              "Hormonal Conditions",
              "Mood & Brain Health",
              "Weight & Metabolic Health",
              "Gut Health"
            ].map((item, idx) => (
              <Link key={idx} to="/treatments" className="bg-[#fcfaf7] hover:bg-white px-4 py-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center lg:justify-start gap-3 text-center lg:text-left group">
                <div className="w-2 h-2 rounded-full bg-[#d0bfae] group-hover:bg-[#7a2a33] transition-colors shrink-0"></div>
                <span className="font-bold text-[13px] md:text-[14px] text-gray-800 leading-tight">{item}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 text-gray-800">
          
          {/* LEFT COLUMN - Combined content (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-12 pr-0 lg:pr-4 xl:pr-8">
            
            {/* IT'S NOT JUST HORMONES */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#7a2a33]"></div>
              <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 mb-6 uppercase">It's Not Just Hormones</h3>
              <p className="font-bold text-lg mb-4 text-[#7a2a33] leading-snug">Fatigue. Brain fog. Weight changes. Low mood. Poor sleep.</p>
              <p className="text-gray-600 mb-6 font-medium">These are often treated as isolated symptoms. But research suggests they may be associated with:</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">Nutrient deficiencies</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">Metabolic changes</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">Inflammatory activity</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">Gut microbiome imbalance</span></li>
              </ul>
              
              <div className="bg-[#f0ece1]/30 p-5 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-900 text-[14px] leading-relaxed">
                  👉 Women’s health is the interaction of hormones, metabolism, inflammation, gut health and cellular function.
                </p>
              </div>
            </div>

            {/* WHAT WOMEN ARE RARELY TOLD */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-[#7a2a33]" />
                <h3 className="font-playfair text-[22px] font-bold tracking-wider text-gray-900 uppercase">What Women Are Rarely Told</h3>
              </div>
              <h4 className="font-bold text-xl mb-4 text-gray-800">Why hormone testing alone may not explain your symptoms</h4>
              <p className="text-gray-600 mb-6 font-medium">Many women are assessed based on hormones alone. But symptoms may also be associated with:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-sm text-gray-800 flex items-center justify-center h-20">Cellular Health</div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-sm text-gray-800 flex items-center justify-center h-20">Metabolic Function</div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-sm text-gray-800 flex items-center justify-center h-20">Inflammatory Processes</div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-sm text-gray-800 flex items-center justify-center h-20">Nutrient Status</div>
              </div>
            </div>

            {/* THE KEY DRIVERS WE LOOK AT */}
            <div className="bg-[#fcfaf7] p-8 lg:p-10 rounded-3xl shadow-sm border border-[#e9e7dc] mt-6">
               <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                   <Microscope className="w-8 h-8 text-[#7a2a33]" />
                 </div>
                 <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 uppercase">The Key Drivers We Look At</h3>
               </div>
               
               <div className="space-y-10">
                 {/* Driver 1 */}
                 <div>
                   <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a2a33]"></div> Omega Balance & Inflammation</h4>
                   <p className="text-[15px] font-medium text-gray-700 mb-3">Fatty acids form part of every cell membrane. Research shows they play a role in:</p>
                   <ul className="text-[14px] font-medium text-gray-600 space-y-1.5 mb-5 list-inside list-disc pl-2">
                     <li>inflammatory processes</li>
                     <li>cell membrane structure</li>
                     <li>internal signalling</li>
                   </ul>
                   <p className="text-[14px] font-bold text-[#7a2a33] bg-[#7a2a33]/5 p-4 rounded-xl border border-[#7a2a33]/10">
                     👉 The balance of omega-6 and omega-3 fatty acids is considered important in maintaining normal physiological function.
                   </p>
                 </div>

                 {/* Driver 2 */}
                 <div>
                   <div className="flex items-center gap-4 mb-3">
                     <h4 className="font-playfair font-bold text-[20px] text-gray-900 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a2a33]"></div> HbA1c & Metabolic Health</h4>
                     <span className="bg-[#7a2a33] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">Critical in Perimenopause</span>
                   </div>
                   <p className="text-[15px] font-medium text-gray-700 mb-3 ml-4">HbA1c provides an indication of long-term blood glucose regulation. Research suggests this may be associated with:</p>
                   <ul className="text-[14px] font-medium text-gray-600 space-y-1.5 mb-5 list-inside list-disc pl-6">
                     <li>energy levels</li>
                     <li>weight regulation</li>
                     <li>hormonal function</li>
                   </ul>
                   <p className="text-[14px] font-bold text-[#7a2a33] bg-[#7a2a33]/5 p-4 rounded-xl border border-[#7a2a33]/10 ml-4">
                     👉 Particularly relevant during perimenopause, where metabolic changes are commonly observed.
                   </p>
                 </div>

                 {/* Driver 3 */}
                 <div>
                   <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7a2a33]"></div> Inflammation & Hormonal Conditions</h4>
                   <p className="text-[15px] font-medium text-gray-700 mb-3">Conditions such as <span className="font-bold">endometriosis</span>, <span className="font-bold">adenomyosis</span>, and <span className="font-bold">PCOS</span> are discussed in research in relation to:</p>
                   <ul className="text-[14px] font-medium text-gray-600 space-y-1.5 list-inside list-disc pl-2">
                     <li>inflammatory processes</li>
                     <li>immune signalling</li>
                     <li>metabolic factors</li>
                   </ul>
                 </div>
               </div>

               <div className="mt-12 p-8 bg-[#7a2a33] rounded-2xl text-center shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
                 <h4 className="text-white font-playfair font-bold text-xl md:text-2xl leading-snug relative z-10">
                   Hormones don't act in isolation —<br/>your biology influences how they function.
                 </h4>
               </div>
            </div>

            {/* START WITH YOUR FOUNDATION */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 relative mt-6">
              <div className="mb-8">
                <Leaf className="w-8 h-8 text-[#7a2a33] mb-4" />
                <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 mb-3 uppercase leading-tight">Start With Your Foundation</h3>
                <p className="font-bold text-gray-500 pb-2">
                  Every personalised protocol begins with your cellular health.
                </p>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="font-playfair font-bold text-[22px] text-gray-900 mb-3">Omega Balance</h4>
                  <p className="text-sm font-medium text-gray-600 mb-3">Provides insight into:</p>
                  <ul className="text-sm font-medium text-gray-800 space-y-2 mb-6 list-inside list-disc px-2">
                     <li>fatty acid balance</li>
                     <li>inflammatory markers</li>
                     <li>cell membrane function</li>
                     <li>cognitive indicators</li>
                  </ul>
                  <p className="text-sm font-medium text-[#7a2a33] mb-3">Omega-3 fatty acids (EPA & DHA) contribute to:</p>
                  <ul className="text-sm font-medium text-gray-800 space-y-2 list-inside list-disc px-2">
                     <li>normal brain function</li>
                     <li>normal heart function</li>
                     <li>normal vision (EFSA approved)</li>
                  </ul>
                </div>

                {/* Sub-card inside foundation */}
                <div className="bg-[#fdfcf9] p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] transform group-hover:scale-110 transition-transform"><Brain className="w-20 h-20"/></div>
                  <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-3 flex items-center gap-2"><Brain className="w-5 h-5 text-[#7a2a33]"/> Omega & Brain Function</h4>
                  <p className="text-sm font-medium text-gray-600 mb-4">The brain is largely composed of fats. Fatty acid balance plays a role in:</p>
                  <div className="flex gap-2 flex-wrap">
                     <span className="bg-white px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100 shadow-sm">cognitive function</span>
                     <span className="bg-white px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100 shadow-sm">focus</span>
                     <span className="bg-white px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100 shadow-sm">mental clarity</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <h4 className="font-playfair font-bold text-[22px] text-gray-900 mb-3">Gut Health</h4>
                  <p className="text-sm font-medium text-gray-600 mb-4">A finger-prick blood test providing insight into:</p>
                  <div className="flex flex-col gap-3">
                     <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm font-bold text-sm text-gray-800 flex justify-between items-center px-4">microbiome-related activity <Activity className="w-4 h-4 text-gray-400"/></div>
                     <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm font-bold text-sm text-gray-800 flex justify-between items-center px-4">immune function <Activity className="w-4 h-4 text-gray-400"/></div>
                  </div>
                </div>

                <div className="bg-[#fcfaf7] p-6 rounded-2xl border border-[#f0ece1] shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] transform group-hover:scale-110 transition-transform"><HeartPulse className="w-20 h-20"/></div>
                  <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-[#7a2a33]"/> Gut–Hormone Axis</h4>
                  <p className="text-[14px] leading-relaxed text-gray-800 font-medium">Research suggests the gut microbiome may influence hormone metabolism, including oestrogen.</p>
                </div>

                <div className="pt-2">
                  <p className="text-[14px] leading-relaxed font-bold text-[#7a2a33] bg-[#7a2a33]/5 p-5 rounded-2xl border border-[#7a2a33]/10 shadow-inner">
                    👉 This is why we start with Omega Balance and Gut Health. <br/><br/>
                    Because your foundation influences how your body responds.
                  </p>
                </div>
              </div>
            </div>

            {/* CLINIC SCREENING & PROFILES */}
            <div className="bg-[#f8f6f0] p-8 lg:p-10 rounded-3xl shadow-sm border border-[#e9e7dc] mt-6">
               <h3 className="font-playfair text-[24px] font-bold tracking-wider text-center text-gray-900 mb-2 uppercase">Clinic Screening & Profiles</h3>
               <p className="text-center font-bold text-[#7a2a33] mb-10 uppercase text-xs tracking-widest">Targeted screening. Personalised insight.</p>

               <h4 className="font-bold text-gray-800 mb-5 text-[15px]">Key markers we assess:</h4>
               
               <div className="space-y-3">
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                   <span className="font-playfair font-bold text-gray-900 text-[18px]">Hormones</span>
                   <span className="text-[13px] font-medium text-gray-500 text-right">Progesterone, FSH,<br/>AMH, Testosterone</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                   <span className="font-playfair font-bold text-gray-900 text-[18px]">Nutrients</span>
                   <span className="text-[13px] font-medium text-gray-500 text-right">Vitamin D, B12,<br/>Folate, Ferritin</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border-l-[6px] border-[#7a2a33] flex justify-between items-center relative overflow-hidden">
                   <span className="absolute top-0 right-0 bg-[#7a2a33] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-bl-lg">Critical</span>
                   <span className="font-playfair font-bold text-gray-900 text-[18px]">Metabolic</span>
                   <span className="text-[15px] font-bold text-gray-800 text-right pt-2">HbA1c</span>
                 </div>
                 <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                   <span className="font-playfair font-bold text-gray-900 text-[18px]">Inflammation</span>
                   <span className="text-[13px] font-bold text-gray-700 text-right">CRP / hs-CRP</span>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                   <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                     <span className="font-playfair font-bold text-gray-900 text-[18px] mb-1">Stress</span>
                     <span className="text-[13px] font-medium text-gray-500">Cortisol</span>
                   </div>
                   <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                     <span className="font-playfair font-bold text-gray-900 text-[18px] mb-1">Thyroid</span>
                     <span className="text-[13px] font-medium text-gray-500">TSH</span>
                   </div>
                 </div>
               </div>

               <div className="mt-8 text-center text-[14px] font-bold text-gray-700 bg-white/50 p-4 rounded-xl">
                 👉 These are selected based on your symptoms and life stage.
               </div>
            </div>

            {/* FROM TESTING TO PROFILE */}
            <div className="p-8 lg:p-10 border-2 border-dashed border-gray-300 rounded-[2rem] relative bg-white/30 box-border mt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdfdf9] px-6 py-2 rounded-full border border-gray-200 font-playfair font-bold text-[18px] text-gray-900 shadow-sm flex items-center gap-3 whitespace-nowrap">
                <FileText className="w-5 h-5 text-gray-400"/> Testing <ArrowRight className="w-4 h-4 text-[#7a2a33]" /> Profile
              </div>
              
              <p className="text-center font-bold text-gray-800 mb-6 mt-6 uppercase tracking-wider text-[13px]">We combine:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 hover:border-[#7a2a33] transition-colors cursor-default">your results</div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 hover:border-[#7a2a33] transition-colors cursor-default">your symptoms</div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 hover:border-[#7a2a33] transition-colors cursor-default">your life stage</div>
              </div>
              
              <p className="text-center font-bold text-[16px] text-gray-900 mb-8 border-b border-gray-200 pb-8">
                To build a <span className="text-[#7a2a33]">personalised women’s health profile</span>
              </p>

              <h4 className="font-playfair font-bold text-center text-[20px] text-gray-900 mb-5">Examples:</h4>
              <div className="flex flex-wrap justify-center gap-2.5 mb-10">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-[13px] font-bold border border-gray-200">Perimenopause</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-[13px] font-bold border border-gray-200">Fertility</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-[13px] font-bold border border-gray-200">Fatigue & Burnout</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-[13px] font-bold border border-gray-200">Metabolic Health</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-[13px] font-bold border border-gray-200">Skin & Hormonal</span>
              </div>

              <div className="bg-[#1c1c1c] text-white text-center p-5 rounded-2xl font-bold text-[15px] shadow-xl">
                👉 This is where testing becomes understanding
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - Original far right (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-10 pl-0 lg:pl-4 xl:pl-8">
            
            {/* EXPLORE YOUR PATHWAY WAS MOVED BELOW HERO */}

            {/* WHY THIS APPROACH IS DIFFERENT */}
            <div className="bg-[#56292f] p-8 lg:p-10 rounded-3xl shadow-lg text-white relative overflow-hidden group shrink-0">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Brain className="w-32 h-32 -mr-16 -mt-16"/></div>
               <h3 className="font-playfair text-[22px] font-bold tracking-wider mb-6 uppercase relative z-10 text-white">Why This Approach Is Different</h3>
               <p className="font-bold mb-5 relative z-10 text-[15px]">Hormones do not act in isolation.<br/>They are influenced by:</p>
               
               <div className="grid grid-cols-1 gap-2.5 mb-8 relative z-10">
                 <div className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 font-bold text-sm backdrop-blur-sm">cellular environment</div>
                 <div className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 font-bold text-sm backdrop-blur-sm">nutrient status</div>
                 <div className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 font-bold text-sm backdrop-blur-sm">metabolism</div>
                 <div className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 font-bold text-sm backdrop-blur-sm">inflammation</div>
               </div>
               
               <div className="bg-white text-[#56292f] p-5 rounded-2xl relative z-10 shadow-xl">
                 <p className="font-bold text-[14px] leading-relaxed text-center">
                   👉 You can experience symptoms even when results appear "normal".
                 </p>
               </div>
            </div>

            {/* WHY THIS MATTERS */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden shrink-0">
               <div className="absolute top-0 right-0 p-4 opacity-[0.03]"><MessageCircle className="w-32 h-32 -mr-10 -mt-10" /></div>
               <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-6 uppercase relative z-10">Why This Matters</h3>
               
               <p className="text-[14px] text-gray-700 mb-5 font-medium relative z-10 leading-relaxed">
                 Founder <span className="font-bold text-gray-900">Natasha Sundharawipata</span> built Test-Based Nutrition from lived experience. After experiencing:
               </p>
               
               <ul className="text-[13px] font-bold text-gray-800 space-y-2 mb-6 relative z-10 bg-gray-50 p-4 rounded-xl border border-gray-100">
                 <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#7a2a33]"></div> burnout</li>
                 <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#7a2a33]"></div> hormonal disruption</li>
                 <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#7a2a33]"></div> symptoms linked to adenomyosis</li>
               </ul>
               
               <p className="text-[14px] text-gray-700 mb-8 font-medium relative z-10">
                 She was presented with limited options — including surgery.
               </p>
               
               <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-4 relative z-10">What changed</h4>
               <p className="text-sm text-gray-600 mb-3 font-medium relative z-10">By exploring:</p>
               <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 border border-gray-200">nutritional status</span>
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 border border-gray-200">inflammatory balance</span>
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800 border border-gray-200">cellular health</span>
               </div>
               <div className="bg-[#e9e7dc]/40 p-4 rounded-xl border border-[#e9e7dc]">
                 <p className="text-[14px] font-bold text-[#7a2a33] text-center relative z-10">
                   she experienced a significant improvement in symptoms.
                 </p>
               </div>
            </div>

            {/* WOMEN'S HEALTH LEADS SLIDER */}
            <WomensHealthLeadsSlider />

            {/* YOUR JOURNEY */}
            <div className="bg-[#fcfaf7] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#e9e7dc] shrink-0">
              <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-8 uppercase text-center xl:text-left flex items-center justify-center xl:justify-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#7a2a33]" /> Your Journey
              </h3>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent xl:before:ml-5 xl:before:-translate-x-px">
                
                {[
                  "Free Consultation",
                  "Testing (Clinic or Home)",
                  "Results Review",
                  "Personalised Protocol",
                  "Retesting"
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active xl:justify-between xl:even:flex-row">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm xl:order-none xl:translate-x-0 xl:group-odd:translate-x-0 text-sm ${idx === 3 ? 'bg-[#7a2a33] text-white shadow-md' : 'bg-white text-gray-600'}`}>{idx + 1}</div>
                    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 shadow-sm xl:w-[calc(100%-3.5rem)] text-sm font-bold flex items-center min-h-[60px] ${idx === 3 ? 'bg-[#7a2a33] text-white border-[#56292f] shadow-md shadow-[#7a2a33]/20' : 'bg-white text-gray-800'}`}>
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FINAL SECTION & IMPORTANT */}
            <div className="flex flex-col gap-6 shrink-0">
              
              <div className="bg-white text-[#7a2a33] p-6 lg:p-8 rounded-3xl flex flex-col shadow-lg border-2 border-[#7a2a33]/10 relative overflow-hidden">
                 <h3 className="font-playfair font-bold mb-6 text-[20px] uppercase tracking-wider relative z-10 leading-snug">A Different Approach to Women's Health</h3>
                 
                 <div className="grid grid-cols-2 gap-3 mb-8 relative z-10">
                   <div className="bg-gray-50 px-3 py-4 rounded-xl border border-gray-100 font-bold text-[13px] text-gray-600 text-center shadow-sm">Not guesswork.</div>
                   <div className="bg-gray-50 px-3 py-4 rounded-xl border border-gray-100 font-bold text-[13px] text-gray-600 text-center shadow-sm">Not generic advice.</div>
                 </div>
                 
                 <p className="text-[17px] font-playfair font-bold mb-8 text-center bg-[#7a2a33]/5 border border-[#7a2a33]/10 py-5 rounded-2xl relative z-10 text-gray-900 shadow-inner">
                   Science-led.<br/>Personalised.<br/>Measurable.
                 </p>
  
                 <div className="space-y-3 mb-10 relative z-10">
                   <div className="bg-[#7a2a33] text-white p-4 rounded-xl font-bold text-[15px] shadow flex items-center justify-between group">
                     👉 Start with testing <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"/>
                   </div>
                   <div className="bg-white text-[#7a2a33] p-4 rounded-xl border border-[#7a2a33]/20 font-bold text-[15px] shadow-sm flex items-center justify-between group">
                     👉 Understand your body
                   </div>
                   <div className="bg-white text-[#7a2a33] p-4 rounded-xl border border-[#7a2a33]/20 font-bold text-[15px] shadow-sm flex items-center justify-between group">
                     👉 Build your plan
                   </div>
                 </div>
              </div>

              <div className="bg-yellow-50/50 p-6 lg:p-8 rounded-3xl border border-yellow-200/50 relative z-10 shadow-sm shrink-0">
                 <div className="flex items-center gap-2 mb-4">
                   <AlertTriangle className="w-5 h-5 text-yellow-600" />
                   <h4 className="font-bold text-[13px] text-yellow-700 uppercase tracking-widest">Important</h4>
                 </div>
                 <ul className="text-[13px] leading-relaxed opacity-90 mb-5 font-bold text-gray-700 space-y-1.5 list-disc pl-4">
                   <li>This approach does not replace medical care</li>
                   <li>This approach does not diagnose or treat conditions</li>
                 </ul>
                 <div className="w-full h-px bg-yellow-200 mb-5"></div>
                 <p className="font-playfair font-bold text-[18px] leading-snug text-gray-900 border-l-4 border-yellow-400 pl-4 py-1">
                   🔥 There is not always just one path — understanding your biology can change the conversation.
                 </p>
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

export default WomensHealth;
