import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImg from "@/assets/treatments/anti-ageing.jpg"; // Placeholder
import {
  Activity,
  HeartPulse,
  Brain,
  Leaf,
  FileText,
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Microscope,
  Flame,
  Shield,
  Battery,
  Users
} from "lucide-react";
import PainSpecialistsSlider from "@/components/PainSpecialistsSlider";
import WomensHealthLeadsSlider from "@/components/WomensHealthLeadsSlider"; // Or a specific one if needed, we'll keep it simple or create a static block

const PainFatigue = () => {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-[#fdfdf9] font-montserrat">
      <Navbar alwaysSolid />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-16 mb-16">
        
        {/* HERO SECTION */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24 mb-16 xl:mb-24">
           {/* Text Side */}
           <div className="w-full lg:w-5/12 text-center lg:text-left pt-4 xl:pt-8 flex flex-col justify-center">
              <h3 className="font-playfair text-[#7a2a33] font-bold tracking-widest uppercase text-sm mb-4">Pain, Fatigue & Inflammation</h3>
              <h1 className="font-playfair text-5xl md:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 leading-[1.05] mb-6">
                Why Your Pain Might Not Be Where You Think It Is
              </h1>
              <p className="text-lg xl:text-xl leading-relaxed font-medium mb-8 text-gray-700">
                Pain is real. But where it starts isn’t always obvious. You may feel it in your back, joints, muscles, or head, but ongoing pain may not always begin in the place you feel it.
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
           <div className="w-full lg:w-7/12 relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[550px] shadow-lg">
              <img src={heroImg} alt="Pain, Fatigue & Inflammation" className="w-full h-full object-cover grayscale" />
           </div>
        </div>

        {/* EXPLORE YOUR PATHWAY */}
        <div className="mb-12 xl:mb-20 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Flame className="w-48 h-48 -mr-12 -mt-12"/></div>
          <h2 className="font-playfair text-xl lg:text-2xl font-bold text-center text-gray-900 mb-8 tracking-widest uppercase relative z-10">Explore Your Pathway</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 relative z-10">
            {[
              "Chronic Pain & Fatigue",
              "Hormonal Pain & Inflammation",
              "Arthritis, Joint Pain & Stiffness",
              "Injury, Recovery & Ongoing Pain",
              "Surgery Preparation & Recovery",
              "Gut Health & Inflammation"
            ].map((item, idx) => (
              <Link key={idx} to="#" className="bg-[#fcfaf7] hover:bg-white px-4 py-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center lg:justify-start gap-3 text-center lg:text-left group">
                <div className="w-2 h-2 rounded-full bg-[#d0bfae] group-hover:bg-[#7a2a33] transition-colors shrink-0"></div>
                <span className="font-bold text-[12px] md:text-[13px] text-gray-800 leading-tight">{item}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 text-gray-800">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 flex flex-col space-y-12 pr-0 lg:pr-4 xl:pr-8">
            
            {/* PAIN IS OFTEN THE END SIGNAL */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#7a2a33]"></div>
              <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 mb-6 uppercase">Pain is often the end signal — not the starting point</h3>
              <p className="text-gray-600 mb-6 font-medium">This is where we differentiate hard. Pain may be influenced by how your body is:</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">regulating inflammation</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">absorbing and using nutrients</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">recovering from stress or injury</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">responding at a cellular level</span></li>
              </ul>
              
              <div className="bg-[#f0ece1]/30 p-5 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-900 text-[15px] leading-relaxed">
                  👉 Which means two people with the same pain may have completely different underlying drivers.
                </p>
              </div>
            </div>

            {/* WHAT MAY BE DRIVING YOUR PAIN */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <Flame className="w-8 h-8 text-[#7a2a33]" />
                <h3 className="font-playfair text-[22px] font-bold tracking-wider text-gray-900 uppercase">What May Be Driving Your Pain</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Inflammation & Pain Signalling</h4>
                  <p className="text-sm text-gray-600 mb-3">Pain is closely linked to how the body regulates inflammation. When this balance is disrupted, it may:</p>
                  <div className="flex flex-wrap gap-2">
                     <span className="bg-gray-50 px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100">increase sensitivity</span>
                     <span className="bg-gray-50 px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100">slow recovery</span>
                     <span className="bg-gray-50 px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100">contribute to ongoing discomfort</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Omega Balance & Recovery</h4>
                  <p className="text-sm text-gray-600 mb-3">Your body relies on fatty acids to regulate inflammation and repair. An imbalance may influence:</p>
                  <div className="flex flex-wrap gap-2">
                     <span className="bg-gray-50 px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100">joint discomfort</span>
                     <span className="bg-gray-50 px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100">recovery time</span>
                     <span className="bg-gray-50 px-3 py-1.5 rounded text-[13px] font-bold text-gray-800 border border-gray-100">overall resilience</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Gut Health & Immune Response</h4>
                  <p className="text-sm text-gray-600 mb-3">Your gut plays a role in immune signalling, inflammation, and nutrient absorption. Which may influence:</p>
                  <div className="bg-[#7a2a33]/5 p-3 rounded-lg border border-[#7a2a33]/10 font-bold text-sm text-[#7a2a33]">
                    👉 How your body responds to pain over time
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2 flex items-center gap-2">Energy, Fatigue & Cellular Function</h4>
                  <p className="text-sm text-gray-600 mb-3">Pain and fatigue often sit together. When energy systems are under strain:</p>
                  <ul className="text-[13px] font-bold text-gray-800 space-y-2 list-disc pl-4">
                    <li>recovery may slow</li>
                    <li>fatigue may increase</li>
                    <li>pain may feel more persistent</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[#7a2a33] rounded-2xl text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
                <h4 className="text-white font-playfair font-bold text-xl md:text-2xl leading-snug relative z-10 uppercase tracking-wider">
                  This is why pain isn’t always fixed by treating the pain
                </h4>
              </div>
            </div>

            {/* WHERE WE START DIFFERENTLY */}
            <div className="bg-[#fcfaf7] p-8 lg:p-10 rounded-3xl shadow-sm border border-[#e9e7dc] mt-6">
               <div className="mb-10 text-center">
                 <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 uppercase">Where We Start Differently</h3>
                 <p className="font-medium text-gray-600 mt-2">Instead of guessing… We start by understanding what may be happening internally.</p>
               </div>
               
               <div className="space-y-8">
                 <div>
                   <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 border-b pb-2 border-gray-200">Foundational Testing</h4>
                   <div className="flex gap-4 mb-4">
                     <span className="bg-white px-4 py-2 rounded-lg font-bold text-sm border border-gray-200 shadow-sm text-gray-800">Omega Balance</span>
                     <span className="bg-white px-4 py-2 rounded-lg font-bold text-sm border border-gray-200 shadow-sm text-gray-800">Gut Health</span>
                   </div>
                   <p className="text-[14px] font-bold text-[#7a2a33] bg-[#7a2a33]/5 p-4 rounded-xl border border-[#7a2a33]/10">
                     👉 Because these influence inflammation, recovery and resilience.
                   </p>
                 </div>

                 <div className="pt-4">
                   <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 border-b pb-2 border-gray-200">Rapid Clinic Screening <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">(15 Minutes)</span></h4>
                   <p className="text-[14px] font-medium text-gray-600 mb-4">Real-time insight into areas linked to pain and recovery:</p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Inflammation</span>
                       <span className="text-[13px] font-bold text-gray-700">CRP / hs-CRP</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Nutrients</span>
                       <span className="text-[13px] font-bold text-gray-700">Vit D, B12, Ferritin</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Metabolic health</span>
                       <span className="text-[13px] font-bold text-gray-700">HbA1c</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Stress & recovery</span>
                       <span className="text-[13px] font-bold text-gray-700">Cortisol</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* FROM PAIN TO PROFILE */}
            <div className="p-8 lg:p-10 border-2 border-dashed border-gray-300 rounded-[2rem] relative bg-white/30 box-border mt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdfdf9] px-6 py-2 rounded-full border border-gray-200 font-playfair font-bold text-[18px] text-gray-900 shadow-sm flex items-center gap-3 whitespace-nowrap">
                <Activity className="w-5 h-5 text-gray-400"/> From Pain <ArrowRight className="w-4 h-4 text-[#7a2a33]" /> To Profile
              </div>
              
              <p className="text-center font-bold text-gray-800 mb-6 mt-6 uppercase tracking-wider text-[13px]">We connect:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center">your symptoms</div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex flex-col items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center leading-tight">
                  your history<span className="text-[10px] font-normal text-gray-500 block mt-1">(injury, fatigue, surgery)</span>
                </div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center">your results</div>
              </div>
              
              <p className="text-center font-bold text-[18px] text-gray-900 mb-2">
                To build a <span className="text-[#7a2a33]">personalised pain and recovery profile</span>
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col space-y-10 pl-0 lg:pl-4 xl:pl-8">
            
            {/* THIS MAY INCLUDE SUPPORT FOR */}
            <div className="bg-[#56292f] p-8 lg:p-10 rounded-3xl shadow-lg text-white relative overflow-hidden group shrink-0">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Activity className="w-32 h-32 -mr-16 -mt-16"/></div>
               <h3 className="font-playfair text-[20px] font-bold tracking-wider mb-6 uppercase relative z-10 text-white">This May Include Support For</h3>
               
               <ul className="space-y-3 relative z-10 font-bold text-[14px]">
                 <li className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm">Fibromyalgia & widespread pain</li>
                 <li className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm">Chronic fatigue</li>
                 <li className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm">Arthritis & joint stiffness</li>
                 <li className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm">Injury & ongoing pain</li>
                 <li className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm">Pre- and post-surgical recovery</li>
                 <li className="bg-white/10 px-4 py-2.5 rounded-lg border border-white/5 backdrop-blur-sm">Inflammatory patterns</li>
               </ul>
            </div>

            {/* A MORE CONNECTED APPROACH */}
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden shrink-0">
               <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-4 uppercase relative z-10">A More Connected Approach To Recovery</h3>
               
               <p className="text-[14px] text-gray-700 mb-5 font-medium relative z-10">
                 We work alongside a collective of specialists, including:
               </p>
               
               <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800">Osteopaths</span>
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800">Chiropractors</span>
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800">Lymphatic therapists</span>
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800">Acupuncture practitioners</span>
                 <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-800">Rehabilitation specialists</span>
               </div>
               <div className="bg-[#e9e7dc]/40 p-4 rounded-xl border border-[#e9e7dc]">
                 <p className="text-[14px] font-bold text-[#7a2a33] relative z-10">
                   👉 Supporting both internal health and physical recovery.
                 </p>
               </div>
            </div>

            {/* CHRONIC PAIN SPECIALISTS */}
            <PainSpecialistsSlider />

            {/* YOUR JOURNEY */}
            <div className="bg-[#fcfaf7] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#e9e7dc] shrink-0">
              <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-8 uppercase text-center xl:text-left flex items-center justify-center xl:justify-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#7a2a33]" /> Your Journey
              </h3>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent xl:before:ml-5 xl:before:-translate-x-px">
                
                {[
                  "Consultation",
                  "Testing",
                  "Results Review",
                  "Personalised Plan",
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

            {/* FINAL CLOSE */}
            <div className="flex flex-col gap-6 shrink-0">
              
              <div className="bg-white text-[#7a2a33] p-6 lg:p-8 rounded-3xl flex flex-col shadow-lg border-2 border-[#7a2a33]/10 relative overflow-hidden">
                 <h3 className="font-playfair font-bold mb-4 text-[20px] uppercase tracking-wider relative z-10 leading-snug">A Different Way to Look About Pain</h3>
                 <p className="font-bold text-gray-800 text-[14px] mb-8 relative z-10">
                   Pain isn’t always just something to fix. <br className="hidden lg:block"/>
                   It may be something to understand.
                 </p>
                 
                 <div className="space-y-3 relative z-10">
                   <div className="bg-[#7a2a33] text-white p-4 rounded-xl font-bold text-[15px] shadow flex items-center justify-between group">
                     👉 Start with testing <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"/>
                   </div>
                   <div className="bg-white text-[#7a2a33] p-4 rounded-xl border border-[#7a2a33]/20 font-bold text-[15px] shadow-sm flex items-center justify-between">
                     👉 Build your understanding
                   </div>
                   <div className="bg-white text-[#7a2a33] p-4 rounded-xl border border-[#7a2a33]/20 font-bold text-[15px] shadow-sm flex items-center justify-between">
                     👉 Support your body differently
                   </div>
                 </div>
              </div>

              <div className="bg-yellow-50/50 p-6 lg:p-8 rounded-3xl border border-yellow-200/50 relative z-10 shadow-sm shrink-0">
                 <div className="flex items-center gap-2 mb-4">
                   <AlertTriangle className="w-5 h-5 text-yellow-600" />
                   <h4 className="font-bold text-[13px] text-yellow-700 uppercase tracking-widest">Important</h4>
                 </div>
                 <ul className="text-[13px] leading-relaxed opacity-90 font-bold text-gray-700 space-y-1.5 list-disc pl-4">
                   <li>This approach does not replace medical care</li>
                   <li>This approach does not diagnose or treat conditions</li>
                 </ul>
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
