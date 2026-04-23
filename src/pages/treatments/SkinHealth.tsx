import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImg from "@/assets/treatments/skin-health-hero.jpg";
import { Gallery4 } from "@/components/ui/gallery4";
import {
  Activity,
  Droplet,
  Sparkles,
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
const heroFallback = "https://images.unsplash.com/photo-1512496015851-a1c81523c6f1?auto=format&fit=crop&q=80&w=1200";

const SkinHealth = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[85px] md:pt-[96px] bg-[#fdfcfb] font-montserrat">
      <Navbar alwaysSolid />
      
      {/* FULL BLEED HERO SECTION */}
      <div className="w-full relative bg-[#fdfcfb] flex flex-col overflow-hidden min-h-[600px] lg:min-h-[700px] lg:h-[calc(100vh-96px)]">
         {/* Background Image spanning the right side */}
         <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] z-0">
           <img 
             src={heroImg} 
             onError={(e) => { e.currentTarget.src = heroFallback; }}
             alt="Skin Health" 
             className="w-full h-full object-cover object-[center_35%]" 
           />
           
           {/* Bottom fade for grounding the Tailored Box */}
           <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

           {/* Blend image and black gradient into the left text container background */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcfb] via-[#fdfcfb]/70 lg:via-[#fdfcfb]/20 to-transparent"></div>
         </div>
         
         {/* Content Container Aligned inside normal max-width margins */}
         <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-12 pb-12 lg:py-0 justify-between flex-grow">
            <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col justify-center">
               <h3 className="font-playfair text-[#8b5e4a] font-bold tracking-widest uppercase text-sm mb-3">Skin Health</h3>
               <h1 className="font-playfair text-[3rem] md:text-[3.5rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.05] mb-6">
                 SKIN, FROM WITHIN
               </h1>
               
               <p className="text-[14px] xl:text-[15px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-4 font-medium">
                 Up to 97% of people have an imbalanced omega-6:3 ratio. Affecting how cells function, inflammation is regulated, and how the skin repairs and responds.
               </p>
               <p className="text-[14px] xl:text-[15px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-4 font-bold">
                 Breakouts. Sensitivity. Premature ageing.
               </p>
               <p className="text-[14px] xl:text-[15px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium">
                 Often treated on the surface — but influenced by internal factors, including gut health. A personalised, test-based approach to understanding what may be influencing your skin.
               </p>
               <p className="font-semibold uppercase tracking-widest text-[#8b5e4a] text-[13px] mb-8">Test. Target. Transform.</p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                 <button className="bg-[#8b5e4a] hover:bg-[#6e4736] transition-colors text-white px-8 py-3.5 rounded-md font-bold text-[15px] flex justify-center items-center gap-2 shadow-md">
                   Start Your Journey <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
            </div>
            
            <div className="w-full lg:w-5/12 relative mt-auto lg:mt-0 flex justify-end items-end h-full self-end lg:pb-12 xl:pb-16 mt-8">
               <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center text-white shadow-2xl">
                 <div>
                    <p className="font-playfair font-bold text-xl mb-1 text-white">Tailored for your skin</p>
                    <p className="text-white text-sm font-medium">Testing protocols aligned to internal dermatological health and biological triggers.</p>
                 </div>
                 <button className="shrink-0 bg-white text-gray-900 border border-transparent px-5 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-wider hover:bg-gray-100 transition-all shadow-md">
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
            <span className="w-2 h-2 rounded-full bg-[#8b5e4a]" />
            Advanced Testing
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8b5e4a]" />
            Real Insight
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8b5e4a]" />
            Specialist-Led Support
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8b5e4a]" />
            Measurable Outcomes
          </span>
        </div>
      </div>


      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 md:pb-16 mb-16">

        {/* SECTION 2 — EXPLORE YOUR PATHWAY */}
        <div className="mb-12 xl:mb-20">
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] pt-2 md:pt-4">
            <Gallery4 
              subtitle="SKIN HEALTH PATHWAYS"
              title="Personalised. Preventative. Transformative."
              description="Each pathway includes targeted testing, a consultation, and personalised protocols aligned to your skin concerns and underlying drivers"
              compact={true}
              items={[
                {
                  id: "acne",
                  title: "Acne & Breakouts",
                  description: "Acne affects up to 85% of people\nDiscover how inflammation, hormones, and gut health may influence breakouts",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: "ageing",
                  title: "Ageing & Skin Longevity",
                  description: "Collagen production declines from the mid-20s\nExplore how cellular health and inflammation may influence skin structure and ageing",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: "rosacea",
                  title: "Rosacea, Sensitivity & Redness",
                  description: "Sensitive skin is often reactive\nIdentify how inflammation and immune response may influence flare-ups",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1512496015851-a1c81523c6f1?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: "pigmentation",
                  title: "Pigmentation & Uneven Skin Tone",
                  description: "Pigmentation is often treated on the surface\nAssess how hormonal and inflammatory factors may influence skin tone",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: "gut-skin",
                  title: "Gut–Skin Axis",
                  description: "The gut and skin are connected through immune pathways\nExplore how microbiome balance may influence skin clarity",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: "hormonal",
                  title: "Hormonal Skin",
                  description: "Hormonal fluctuations commonly impact the skin\nUnderstand how internal signalling may influence breakouts and skin changes",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
                }
              ]}
            />
          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 text-gray-800">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 flex flex-col space-y-12 pr-0 lg:pr-4 xl:pr-8">
            
            {/* THIS IS WHERE WE DIFFERENTIATE HARD */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#8b5e4a]"></div>
              <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 mb-6 uppercase">It's More Than Just Topicals</h3>
              <p className="text-gray-600 mb-6 font-medium">Topical treatments only scratch the surface. True skin radiance and resilience come from balancing your internal environment. Your skin health is intrinsically linked to how your body is:</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">digesting and eliminating toxins</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">managing androgen and estrogen cascades</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">protecting against oxidative stress</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> <span className="font-medium text-gray-800">synthesising essential collagen frames</span></li>
              </ul>
              
              <div className="bg-[#8b5e4a]/5 p-5 rounded-xl border border-[#8b5e4a]/10">
                <p className="font-bold text-gray-900 text-[15px] leading-relaxed">
                  👉 We bridge the gap between aesthetics and internal medicine to heal your skin from the dermis out.
                </p>
              </div>
            </div>

            {/* WHAT MAY BE DRIVING YOUR SYMPTOMS */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-[#8b5e4a]" />
                <h3 className="font-playfair text-[22px] font-bold tracking-wider text-gray-900 uppercase">What May Be Driving Your Symptoms</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Leaf className="w-6 h-6 text-[#8b5e4a]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">The Gut-Skin Axis</h4>
                    <p className="text-sm text-gray-600">Dysbiosis and leaky gut directly trigger systemic skin inflammation, frequently manifesting as redness, rosacea, or eczema.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Activity className="w-6 h-6 text-[#8b5e4a]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Hormonal Triggers</h4>
                    <p className="text-sm text-gray-600">Androgen dominance, estrogen shifts, and spikes in insulin aggressively drive excess sebum production and cyclic breakouts.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Droplet className="w-6 h-6 text-[#8b5e4a]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Collagen Degradation</h4>
                    <p className="text-sm text-gray-600">Cellular oxidative stress, poor protein assimilation, and nutritional deficits that prematurely age the skin matrix.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                  <div className="shrink-0 mt-1"><Search className="w-6 h-6 text-[#8b5e4a]" /></div>
                  <div>
                    <h4 className="font-playfair font-bold text-[18px] text-gray-900 mb-2">Toxin Overload</h4>
                    <p className="text-sm text-gray-600">Sluggish liver function and impaired detox pathways that lead to toxins being pushed out directly via the skin barrier.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[#8b5e4a] rounded-2xl text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
                <h4 className="text-white font-playfair font-bold text-xl md:text-2xl leading-snug relative z-10 uppercase tracking-wider">
                  Test rather than guess with functional dermatology
                </h4>
              </div>
            </div>

            {/* WHERE WE START DIFFERENTLY */}
            <div className="bg-[#fcfaf7] p-8 lg:p-10 rounded-3xl shadow-sm border border-[#e9e7dc] mt-6">
               <div className="mb-10 text-center">
                 <h3 className="font-playfair text-[24px] font-bold tracking-wider text-gray-900 uppercase">Advanced Diagnostics</h3>
                 <p className="font-medium text-gray-600 mt-2">Comprehensive internal panels providing actionable insight into your dermatological triggers.</p>
               </div>
               
               <div className="space-y-8">
                 <div>
                   <h4 className="font-playfair font-bold text-[20px] text-gray-900 mb-3 border-b pb-2 border-gray-200">Rapid Clinic Screening</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Gut Health</span>
                       <span className="text-[13px] font-bold text-gray-700">Microbiome Mapping</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Hormonal</span>
                       <span className="text-[13px] font-bold text-gray-700">Androgens, Estrogens</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Micronutrients</span>
                       <span className="text-[13px] font-bold text-gray-700">Zinc, Omegas, Vit.A</span>
                     </div>
                     <div className="bg-white py-4 px-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                       <span className="font-playfair font-bold text-gray-900 text-[16px]">Inflammation</span>
                       <span className="text-[13px] font-bold text-gray-700">Oxidative Stress</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* FROM SYMPTOMS TO PROFILE */}
            <div className="p-8 lg:p-10 border-2 border-dashed border-gray-300 rounded-[2rem] relative bg-white/30 box-border mt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdfcfb] px-6 py-2 rounded-full border border-gray-200 font-playfair font-bold text-[18px] text-gray-900 shadow-sm flex items-center gap-3 whitespace-nowrap">
                <FileText className="w-5 h-5 text-gray-400"/> Diagnostics <ArrowRight className="w-4 h-4 text-[#8b5e4a]" /> Protocol
              </div>
              
              <p className="text-center font-bold text-gray-800 mb-6 mt-6 uppercase tracking-wider text-[13px]">We connect:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center">your stubborn breakouts</div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex flex-col items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center leading-tight">
                  your lab markers
                </div>
                <div className="bg-white shadow-sm border border-gray-200 py-4 rounded-xl flex items-center justify-center font-bold text-[13px] text-gray-900 px-4 text-center">your lifestyle routines</div>
              </div>
              
              <p className="text-center font-bold text-[18px] text-gray-900 mb-2">
                To build a <span className="text-[#8b5e4a]">highly personalised inside-out healing protocol</span>
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col space-y-10 pl-0 lg:pl-4 xl:pl-8">
            
            {/* WHO THIS IS FOR */}
            <div className="bg-[#8b5e4a] p-8 lg:p-10 rounded-3xl shadow-lg text-white relative overflow-hidden group shrink-0">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Droplet className="w-32 h-32 -mr-16 -mt-16"/></div>
               <h3 className="font-playfair text-[20px] font-bold tracking-wider mb-6 uppercase relative z-10 text-white">Who This Is For</h3>
               
               <p className="font-bold mb-5 relative z-10 text-[15px] leading-relaxed">
                 Ideal for individuals struggling with chronic skin issues or those seeking to optimize cellular health for long-term anti-ageing.
               </p>
               
               <ul className="space-y-3 relative z-10 font-bold text-[14px]">
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">Chronic adult or teen acne</li>
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">Unresolved eczema and dermatitis</li>
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">Hormonal pigmentation cycles</li>
                 <li className="bg-white/10 px-4 py-3 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm text-center">Preventative skin longevity</li>
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
                     <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-400 font-bold">MP</div> 
                     <div className="flex flex-col">
                       <span className="font-bold text-[15px] text-gray-900 leading-tight">Dr. Maya Patel</span>
                       <span className="text-[12px] font-bold text-[#8b5e4a] uppercase">Dermatology Lead</span>
                     </div>
                   </div>
                   <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-1">Specialises in identifying hidden hormonal and immune drivers of resistant skin conditions, replacing topical band-aids.</p>
                 </li>
                 
                 <li className="flex flex-col gap-2 border-t border-gray-100 pt-5">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-400 font-bold">DC</div> 
                     <div className="flex flex-col">
                       <span className="font-bold text-[15px] text-gray-900 leading-tight">Dr. David Chen</span>
                       <span className="text-[12px] font-bold text-[#8b5e4a] uppercase">Science Director</span>
                     </div>
                   </div>
                   <p className="text-[13px] text-gray-600 font-medium leading-relaxed mt-1">Incorporates cutting-edge anti-ageing research to design protocols that protect cellular DNA and collagen elasticity.</p>
                 </li>
               </ul>
            </div>

            {/* YOUR PROTOCOL JOURNEY */}
            <div className="bg-[#fcfaf7] p-6 lg:p-8 rounded-3xl shadow-sm border border-[#e9e7dc] shrink-0">
              <h3 className="font-playfair text-[20px] font-bold tracking-wider text-gray-900 mb-8 uppercase text-center xl:text-left flex items-center justify-center xl:justify-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#8b5e4a]" /> Protocol Journey
              </h3>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent xl:before:ml-5 xl:before:-translate-x-px">
                
                {[
                  "Free Consultation",
                  "Comprehensive Testing",
                  "Personalised Strategy",
                  "Expert Consultation",
                  "Monitor & Glow"
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active xl:justify-between xl:even:flex-row">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm xl:order-none xl:translate-x-0 xl:group-odd:translate-x-0 text-sm ${idx === 2 ? 'bg-[#8b5e4a] text-white shadow-md' : 'bg-white text-gray-600'}`}>{idx + 1}</div>
                    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 shadow-sm xl:w-[calc(100%-3.5rem)] text-[13px] font-bold flex items-center min-h-[60px] ${idx === 2 ? 'bg-[#8b5e4a] text-white border-[#6e4736] shadow-md shadow-[#8b5e4a]/20' : 'bg-white text-gray-800'}`}>
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
                   <li>This proactive approach complements but does not replace acute dermatological care</li>
                   <li>Focuses on nutritional foundation and biological triggers</li>
                 </ul>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkinHealth;
