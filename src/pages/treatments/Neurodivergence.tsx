import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Activity,
  Brain,
  Zap,
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
  Users
} from "lucide-react";

// Note: Ensure the hero image exists or falls back cleanly
const heroImg = "https://images.unsplash.com/photo-1551847677-dc82d762e1bd?auto=format&fit=crop&q=80&w=1200";
const heroFallback = "https://images.unsplash.com/photo-1551847677-dc82d762e1bd?auto=format&fit=crop&q=80&w=1200";

const Neurodivergence = () => {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-[#fdfcfd] font-montserrat">
      <Navbar alwaysSolid />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-16 mb-16">
        
        {/* HERO SECTION */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24 mb-16 xl:mb-24">
           {/* Text Side */}
           <div className="w-full lg:w-5/12 text-center lg:text-left pt-4 xl:pt-8 flex flex-col justify-center">
              <h3 className="font-playfair text-[#4b3e6e] font-bold tracking-widest uppercase text-sm mb-4">Neurodivergence</h3>
              <h1 className="font-playfair text-5xl md:text-[4rem] xl:text-[4.5rem] font-bold text-gray-900 leading-[1.05] mb-6">
                The Science of<br />Neurodivergence
              </h1>
              <p className="text-lg xl:text-xl leading-relaxed font-medium mb-8 text-gray-700">
                Supporting cognitive health, focus, and emotional balance through targeted, evidence-based nutrition and biological optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#4b3e6e] hover:bg-[#3a3055] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Take Quiz <ArrowRight className="w-4 h-4" />
                </button>
                <Link to="/partner-with-us" className="border border-gray-300 hover:bg-gray-50 transition-colors bg-white text-gray-800 px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2">
                  Partner With Us
                </Link>
              </div>
           </div>
           
           {/* Image Side */}
           <div className="w-full lg:w-7/12 relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[550px] shadow-lg">
              <img 
                src={heroImg} 
                onError={(e) => { e.currentTarget.src = heroFallback; }}
                alt="Neurodivergence" 
                className="w-full h-full object-cover" 
              />
           </div>
        </div>

        {/* EXPLORE YOUR PATHWAY */}
        <div className="mb-12 xl:mb-20 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Brain className="w-48 h-48 -mr-12 -mt-12"/></div>
          <h2 className="font-playfair text-xl lg:text-2xl font-bold text-center text-gray-900 mb-8 tracking-widest uppercase relative z-10">Explore Your Pathway</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 relative z-10">
            {[
              "Lack of Focus",
              "Brain Fog",
              "Anxiety & Overload",
              "Mood Dysregulation",
              "Poor Sleep"
            ].map((item, idx) => (
              <Link key={idx} to="#" className="bg-[#fcfaf7] hover:bg-white px-4 py-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center lg:justify-start gap-3 text-center lg:text-left group">
                <div className="w-2 h-2 rounded-full bg-[#4b3e6e] group-hover:bg-[#3a3055] transition-colors shrink-0"></div>
                <span className="font-bold text-[13px] md:text-[14px] text-gray-800 leading-tight">{item}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 text-gray-800">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 flex flex-col space-y-12 pr-0 lg:pr-4 xl:pr-8">
            
            {/* THIS IS WHERE WE DIFFERENTIATE HARD */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4b3e6e]"></div>
              <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 mb-6 uppercase">It's Not a Deficit</h3>
              <p className="text-gray-600 mb-6 font-medium">Neurodivergence is a unique biological profile. However, co-occurring nutritional and biochemical imbalances can exacerbate symptoms. We address the gut-brain axis to unlock your natural potential. Your cognitive health is intrinsically linked to how your body is:</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">producing optimal neurotransmitters</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">managing systemic neuro-inflammation</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">utilizing essential trace minerals</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">balancing hormones through life stages</span></li>
              </ul>
              
              <div className="bg-[#4b3e6e]/5 p-5 rounded-xl border border-[#4b3e6e]/10">
                <p className="font-bold text-gray-900 text-[15px] leading-relaxed">
                  👉 We refuse to accept that burnout or chronic brain fog are inevitable within a neurodivergent profile. We map your bio-chemical architecture.
                </p>
              </div>
            </div>

            {/* WHAT MAY BE DRIVING YOUR SYMPTOMS */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-[#4b3e6e]" />
                <h3 className="font-playfair text-[22px] font-bold tracking-wider text-gray-900 uppercase">What May Be Exacerbating Symptoms</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Leaf className="w-6 h-6 text-[#4b3e6e]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">The Gut-Brain Axis</h4>
                    <p className="text-sm text-gray-600">Microbiome imbalances affect neurotransmitter production like serotonin and dopamine, leading directly to mood dysregulation.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Zap className="w-6 h-6 text-[#4b3e6e]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Biochemical Deficits</h4>
                    <p className="text-sm text-gray-600">Lacking key nutrients like Magnesium, Zinc, B-Vitamins, and critical Omega-3s that are essential for neural connections.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Activity className="w-6 h-6 text-[#4b3e6e]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Inflammation</h4>
                    <p className="text-sm text-gray-600">Systemic neuro-inflammation triggered by diet, stress, or undetected food sensitivities that block cognitive pathways.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Search className="w-6 h-6 text-[#4b3e6e]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Hormonal Shifts</h4>
                    <p className="text-sm text-gray-600">Estrogen and testosterone variations heavily impact ADHD and neurodivergent symptom manifestation across distinct life stages.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[#4b3e6e] rounded-2xl text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
                <h4 className="text-white font-playfair font-bold text-xl md:text-2xl leading-snug relative z-10 uppercase tracking-wider">
                  Exacting testing for targeted therapeutic nutrition
                </h4>
              </div>
            </div>

            {/* WHERE WE START DIFFERENTLY */}
            <div className="bg-[#fcfbfd] p-8 lg:p-10 rounded-3xl shadow-sm border border-[#edeaf2] mt-6">
               <div className="mb-10 text-center">
                 <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 uppercase">Advanced Diagnostics</h3>
                 <p className="font-medium text-gray-600 mt-2">Grounding your nervous system requires precise biological mapping, not guesswork.</p>
               </div>
               
               <div className="space-y-8">
                 <div>
                   <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 border-b pb-2 border-gray-200">Rapid Clinic Screening</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Neurotransmitters</span>
                       <span className="text-[13px] font-bold text-gray-700">Metabolite Panel</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Nutritional</span>
                       <span className="text-[13px] font-bold text-gray-700">Zinc, B12, Mag</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Sensitivities</span>
                       <span className="text-[13px] font-bold text-gray-700">Food Reactivity</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Gut-Brain</span>
                       <span className="text-[13px] font-bold text-gray-700">Microbiome Var.</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* FROM SYMPTOMS TO PROFILE */}
            <div className="p-8 lg:p-10 border-2 border-dashed border-gray-300 rounded-[2rem] relative bg-white/30 box-border mt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdfcfd] px-6 py-2 rounded-full border border-gray-200 font-playfair font-bold text-[18px] text-gray-900 shadow-sm flex items-center gap-3 whitespace-nowrap">
                <FileText className="w-5 h-5 text-gray-400"/> Diagnostics <ArrowRight className="w-4 h-4 text-[#4b3e6e]" /> Protocol
              </div>
              
              <p className="text-center font-bold text-gray-800 mb-6 mt-6 uppercase tracking-wider text-[13px]">We connect:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center">your cognitive load</div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex flex-col items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center leading-tight">
                  your neuro-markers
                </div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center">your dietary needs</div>
              </div>
              
              <p className="text-center font-bold text-[18px] text-gray-900 mb-2">
                To build a <span className="text-[#4b3e6e]">highly personalised cognitive capacity protocol</span>
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col space-y-10 pl-0 lg:pl-4 xl:pl-8">
            
            {/* WHO THIS IS FOR */}
            <div className="bg-[#4b3e6e] p-8 lg:p-10 rounded-3xl shadow-lg text-white relative overflow-hidden group shrink-0">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Brain className="w-32 h-32 -mr-16 -mt-16"/></div>
               <h3 className="font-playfair text-[20px] font-bold tracking-wider mb-6 uppercase relative z-10 text-white">Who This Is For</h3>
               
               <p className="font-bold mb-5 relative z-10 text-[15px] leading-relaxed">
                 Designed for adults, teens, and children seeking cognitive clarity, nervous system regulation, and sustainable focus.
               </p>
               
               <ul className="space-y-3 relative z-10 font-bold text-[14px]">
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">ADHD and ADD profiles</li>
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">Autistic spectrum support</li>
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">Managing severe anxiety and overload</li>
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">Reversing unexplained brain fog</li>
               </ul>
            </div>

            {/* CLINICAL LEADERS */}
            <div className="bg-[#fcfaf7] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#e9e7dc] shrink-0">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="font-playfair text-[18px] font-bold tracking-wider text-gray-900 uppercase">Clinical Leaders</h3>
                 <Users className="w-5 h-5 text-gray-400" />
               </div>
               
               <ul className="space-y-6">
                 <li className="flex flex-col gap-2">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-400 font-bold">ER</div> 
                     <div className="flex flex-col">
                       <span className="font-bold text-[15px] text-gray-900 leading-tight">Dr. Elena Rostova</span>
                       <span className="text-[12px] font-bold text-[#4b3e6e] uppercase">Cognitive Lead</span>
                     </div>
                   </div>
                   <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-1">Specialises in the biochemical foundations of neurodivergence, formulating exact protocols to balance neurotransmitters.</p>
                 </li>
                 
                 <li className="flex flex-col gap-2 border-t border-gray-100 pt-5">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-400 font-bold">DC</div> 
                     <div className="flex flex-col">
                       <span className="font-bold text-[15px] text-gray-900 leading-tight">Dr. David Chen</span>
                       <span className="text-[12px] font-bold text-[#4b3e6e] uppercase">Science Director</span>
                     </div>
                   </div>
                   <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-1">Integrates cognitive neuroscience into functional testing to support brain-barrier integrity and mood stabilisation.</p>
                 </li>
               </ul>
            </div>

            {/* YOUR PROTOCOL JOURNEY */}
            <div className="bg-[#fcfaf7] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#e9e7dc] shrink-0">
              <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-8 uppercase text-center xl:text-left flex items-center justify-center xl:justify-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#4b3e6e]" /> Protocol Journey
              </h3>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent xl:before:ml-5 xl:before:-translate-x-px">
                
                {[
                  "Free Consultation",
                  "Cognitive Testing",
                  "Personalised Strategy",
                  "Expert Consultation",
                  "Monitor & Focus"
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active xl:justify-between xl:even:flex-row">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm xl:order-none xl:translate-x-0 xl:group-odd:translate-x-0 text-sm ${idx === 2 ? 'bg-[#4b3e6e] text-white shadow-md' : 'bg-white text-gray-600'}`}>{idx + 1}</div>
                    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 shadow-sm xl:w-[calc(100%-3.5rem)] text-[13px] font-bold flex items-center min-h-[60px] ${idx === 2 ? 'bg-[#4b3e6e] text-white border-[#3a3055] shadow-md shadow-[#4b3e6e]/20' : 'bg-white text-gray-800'}`}>
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FINAL CLOSE */}
            <div className="bg-yellow-50/50 p-6 lg:p-8 rounded-3xl border border-yellow-200/50 relative shadow-sm shrink-0 mt-6">
                 <div className="flex items-center gap-2 mb-4">
                   <AlertTriangle className="w-5 h-5 text-yellow-600" />
                   <h4 className="font-bold text-[13px] text-yellow-700 uppercase tracking-widest">Important</h4>
                 </div>
                 <ul className="text-[13px] leading-relaxed opacity-90 font-bold text-gray-700 space-y-1.5 list-disc pl-4">
                   <li>This does not replace formal psychiatric pathways or medications</li>
                   <li>Focuses purely on biological, nutritional optimisation</li>
                 </ul>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Neurodivergence;
