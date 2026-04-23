import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImg from "@/assets/treatments/skin-health-hero.jpg";
import { Gallery4 } from "@/components/ui/gallery4";
import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";
import { FocusRail } from "@/components/ui/focus-rail";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecialists } from "@/lib/api";
import ArticleCard from "@/components/news/ArticleCard";
import { articles as newsArticles } from "@/data/newsArticles";
import { useQuiz } from "@/components/QuizContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Quote,
  Microscope,
  Users,
  Settings,
  RefreshCw,
  Zap
} from "lucide-react";

// Note: Ensure the hero image exists or falls back cleanly
const heroFallback = "https://images.unsplash.com/photo-1512496015851-a1c81523c6f1?auto=format&fit=crop&q=80&w=1200";

const marqueeData = [
  "How do hormones impact breakouts?",
  "What is the gut-skin axis?",
  "How does inflammation cause premature ageing?",
  "Am I absorbing my nutrients properly?",
  "Why are my skin treatments not lasting?",
  "Can omega-3s reduce skin sensitivity?",
  "How do I repair cellular health?",
  "Are my breakouts driven by internal load?",
  "What role does metabolism play in skin repair?",
  "How do I clear my skin from within?",
  "Why is my skin suddenly reacting?",
  "How do I balance my hormones naturally?",
];

const SkinHealth = () => {
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
                 Up to 97% of people have an imbalanced omega-6:3 ratio.
               </p>
               <p className="text-[14px] xl:text-[15px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-4 font-bold">
                 Breakouts. Sensitivity. Premature ageing.
               </p>
               <p className="text-[14px] xl:text-[15px] text-gray-900 lg:text-gray-800 leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-6 font-medium">
                 Our personalized, test-based nutrition programs target the root causes of inflammation and cellular health, aligning your gut health with a radiant complexion from the inside out.
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
              title={<span className="md:whitespace-nowrap xl:tracking-tight xl:text-[46px] 2xl:text-[50px]">Personalised. Preventative. Transformative<span className="text-[#8b5e4a]">.</span></span>}
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
                  image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: "rosacea",
                  title: "Rosacea, Sensitivity & Redness",
                  description: "Sensitive skin is often reactive\nIdentify how inflammation and immune response may influence flare-ups",
                  href: "#",
                  image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
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

        {/* OUR SPECIALISTS */}
        <div className="mt-8 mb-12 lg:mb-16 max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="mb-16 text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
             <p className="text-[12px] font-bold tracking-widest uppercase text-[#8b5e4a] mb-3">Our Specialists</p>
             <h2 className="font-playfair text-[28px] md:text-[36px] text-gray-900 font-bold tracking-wider mb-4 leading-tight">LED BY LEADING SKIN SPECIALISTS</h2>
             <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
               A specialist-led network across aesthetic clinics and skin experts — advancing a more intelligent, inside-out approach to skin health.
             </p>
          </div>
          
          <div className="mb-10 lg:mb-12 text-center sm:text-left border-t border-gray-100 pt-10">
             <h3 className="font-playfair text-[15px] lg:text-[16px] text-gray-900 font-bold tracking-[0.2em] uppercase">Built by those redefining modern skin health</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-0 md:divide-x divide-[#8b5e4a]/20">
              {/* Yazmin */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pr-4 lg:pr-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" alt="Yazmin Oukhellou" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#8b5e4a] transition-colors leading-snug mb-1 sm:mb-0">Yazmin Oukhellou</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-semibold text-[#8b5e4a] uppercase tracking-widest mb-4 mt-1">Founder — Show Off Clinic</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#8b5e4a]/30 pl-3">&quot;Skin confidence starts beneath the surface — not just in the treatment room.&quot;</p>
                 </div>
              </div>
              
              {/* Dr Hennessy */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 lg:gap-8 md:pl-4 lg:pl-14">
                 <div className="w-[120px] sm:w-[140px] xl:w-[150px] shrink-0 aspect-[4/5] sm:aspect-square overflow-hidden rounded-sm shadow-sm border border-gray-100/50">
                    <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" alt="Dr Hennessy, BDS" className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                 </div>
                 <div className="flex flex-col flex-1 pl-0 pt-2 sm:pt-0">
                   <h3 className="font-playfair text-[18px] sm:text-[24px] xl:text-[28px] font-bold text-[#111827] group-hover:text-[#8b5e4a] transition-colors leading-snug mb-1 sm:mb-1">Dr Hennessy, BDS</h3>
                   <div className="font-sans text-[10px] lg:text-[12px] font-bold text-[#8b5e4a] uppercase tracking-widest mb-4 mt-1">Advanced Aesthetic Doctor — My Aesthetics Manchester</div>
                   <p className="font-playfair italic text-[#111827] text-[12px] sm:text-[14px] leading-relaxed max-w-sm mx-auto sm:mx-0 opacity-80 border-l-2 border-[#8b5e4a]/30 pl-3">&quot;The best results come from combining advanced treatments with a deeper understanding of what&apos;s driving skin from within.&quot;</p>
                 </div>
              </div>
          </div>
        </div>

        {/* THE SCIENCE BEHIND SKIN */}
        <div className="w-full mt-16 lg:mt-24 max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-3 uppercase">THE SCIENCE BEHIND SKIN</h2>
              <p className="font-bold text-[#8b5e4a] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2">
                 <div className="w-1.5 h-1.5 bg-[#8b5e4a] rounded-full" /> Skin is not just surface — it&apos;s systemic <div className="w-1.5 h-1.5 bg-[#8b5e4a] rounded-full" />
              </p>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 max-w-2xl mx-auto mt-4 font-medium">
                 Skin reflects internal function, including:
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
              {/* Box 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#8b5e4a] group-hover:border-[#8b5e4a] transition-colors duration-300">
                   <Microscope className="w-7 h-7 text-[#8b5e4a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Cellular Health</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Supports structural integrity, collagen synthesis, and long-term anti-ageing resilience.</p>
              </div>

              {/* Box 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#8b5e4a] group-hover:border-[#8b5e4a] transition-colors duration-300">
                   <Activity className="w-7 h-7 text-[#8b5e4a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Inflammatory Balance</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Directly influences redness, reactivity, and the likelihood of chronic breakouts mapping to the dermis.</p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#8b5e4a] group-hover:border-[#8b5e4a] transition-colors duration-300">
                   <Leaf className="w-7 h-7 text-[#8b5e4a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Nutrient Availability</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Ensures the skin receives essential building blocks like zinc, omegas, and vitamin A for optimal repair.</p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#8b5e4a] group-hover:border-[#8b5e4a] transition-colors duration-300">
                   <Droplet className="w-7 h-7 text-[#8b5e4a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Hormonal Signalling</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Fluctuations in androgens and estrogens that can aggressively drive excess sebum production and cyclic issues.</p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group md:col-span-2 lg:col-span-1 md:w-1/2 md:mx-auto lg:w-full lg:mx-0">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center mb-6 border border-[#e9e7dc] group-hover:bg-[#8b5e4a] group-hover:border-[#8b5e4a] transition-colors duration-300">
                   <Search className="w-7 h-7 text-[#8b5e4a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[20px] text-gray-900 mb-4">Gut & Immune Activity</h3>
                <p className="font-montserrat text-[14px] leading-relaxed text-gray-600">Dysbiosis and leaky gut can directly trigger systemic skin inflammation, frequently manifesting as redness or eczema.</p>
              </div>
           </div>
        </div>

        {/* EXPERT QUOTE */}
        <div className="w-full mt-16 lg:mt-20 max-w-6xl mx-auto px-4">
           <div className="bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm w-full hover:shadow-md transition-shadow duration-300">
              
              <div className="flex flex-col items-center lg:items-end max-w-[1050px] mx-auto w-full gap-5">
                 <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
                    <Quote className="w-8 h-8 text-gray-900 fill-gray-900 shrink-0" />
                    <p className="font-playfair text-[18px] md:text-[22px] lg:text-[25px] font-bold italic text-gray-900 text-left leading-snug tracking-wide m-0">
                       Healthy skin isn&apos;t created by treating the surface alone — it&apos;s influenced by what&apos;s happening within the body.
                    </p>
                 </div>

                 <div className="flex items-center gap-4 shrink-0 mt-2">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shrink-0 shadow-sm">
                      <Stethoscope className="w-5 h-5 text-[#8b5e4a]" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="font-bold text-gray-900 text-[12px] uppercase tracking-widest leading-none mb-1.5">Lisa Franklin</span>
                       <span className="font-bold text-[#8b5e4a] text-[10px] uppercase tracking-widest leading-none">Allain Skin Clinic, Scotland</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>


        {/* KEY DRIVERS WE ASSESS */}
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-20 lg:mt-32 pb-6">
           <div className="bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2rem] shadow-xl relative overflow-hidden pt-12 lg:pt-20">
             <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b5e4a]/[0.02] rounded-full -mr-32 -mt-32 blur-[60px]"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e9e7dc]/40 rounded-full -ml-32 -mb-32 blur-[60px]"></div>
             
             {/* Header and Marquee Section */}
             <div className="relative z-10 w-full mb-16 lg:mb-20">
               <div className="flex flex-col items-center justify-center space-y-5 px-5 text-center md:px-10 mb-12">
                 <h2 className="max-w-3xl font-playfair font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-tight text-gray-900 mb-2">
                   Removing the roadblocks to your skin health
                 </h2>
                 <p className="max-w-2xl text-[14px] md:text-[15px] font-montserrat text-gray-600 leading-relaxed mx-auto">
                   It&apos;s easy to get lost in a sea of advice and endless &quot;must-dos.&quot; We filter out the noise, focus on what truly matters, and give you clarity that actually transforms your skin from within.
                 </p>
               </div>

               <div className="relative mx-auto max-w-5xl overflow-hidden mt-8">
                  <div className="absolute left-0 z-20 h-full w-12 lg:w-24 bg-gradient-to-r from-[#fcfaf7] to-transparent pointer-events-none" />
                  <div className="absolute right-0 z-20 h-full w-12 lg:w-24 bg-gradient-to-l from-[#fcfaf7] to-transparent pointer-events-none" />

                  <div className="-mx-4 flex w-full flex-col gap-3 lg:gap-4">
                    <Marquee className="[--duration:45s] [--gap:1rem] lg:[--gap:1.5rem]" repeat={4}>
                      {marqueeData.slice(0, marqueeData.length / 3).map((q) => (
                        <Badge
                          className="rounded-full border-[#8b5e4a]/10 bg-white text-[#8b5e4a] font-montserrat hover:bg-[#8b5e4a] hover:text-white px-5 py-2 font-medium transition-colors backdrop-blur-sm shadow-sm whitespace-nowrap text-[13px] md:text-[14px]"
                          key={q}
                          variant="outline"
                        >
                          {q}
                        </Badge>
                      ))}
                    </Marquee>

                    <Marquee
                      className="[--duration:50s] [--gap:1rem] lg:[--gap:1.5rem]"
                      repeat={4}
                      reverse
                    >
                      {marqueeData.slice(marqueeData.length / 3, (marqueeData.length / 3) * 2).map((q) => (
                        <Badge
                          className="rounded-full border-[#8b5e4a]/10 bg-white text-[#8b5e4a] font-montserrat hover:bg-[#8b5e4a] hover:text-white px-5 py-2 font-medium transition-colors backdrop-blur-sm shadow-sm whitespace-nowrap text-[13px] md:text-[14px]"
                          key={q}
                          variant="outline"
                        >
                          {q}
                        </Badge>
                      ))}
                    </Marquee>

                    <Marquee className="[--duration:42s] [--gap:1rem] lg:[--gap:1.5rem]" repeat={4}>
                      {marqueeData.slice((marqueeData.length / 3) * 2).map((q) => (
                        <Badge
                          className="rounded-full border-[#8b5e4a]/10 bg-white text-[#8b5e4a] font-montserrat hover:bg-[#8b5e4a] hover:text-white px-5 py-2 font-medium transition-colors backdrop-blur-sm shadow-sm whitespace-nowrap text-[13px] md:text-[14px]"
                          key={q}
                          variant="outline"
                        >
                          {q}
                        </Badge>
                      ))}
                    </Marquee>
                  </div>
               </div>
             </div>
             
             {/* Key Drivers Grid - Dashed Layout */}
             <div className="relative z-10 border-t border-dashed border-[#e9e7dc] bg-[#f9f8f4]">
               <h3 className="font-playfair text-[13px] font-bold tracking-[0.2em] pt-12 pb-6 text-center uppercase text-gray-900">
                 Key Drivers We Assess
               </h3>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-dashed border-[#e9e7dc] mt-4">
                  {/* Item 1 */}
                  <div className="flex flex-col gap-4 p-8 lg:p-10 border-b sm:border-r border-dashed border-[#e9e7dc]">
                    <Microscope className="w-10 h-10 text-[#8b5e4a]" strokeWidth={1.5} />
                    <div className="pt-2">
                      <h4 className="font-playfair font-bold text-[18px] lg:text-[20px] mb-2 leading-tight text-gray-900">Cellular Health</h4>
                      <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed max-w-[280px]">Supports repair, hydration, and resilience</p>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col gap-4 p-8 lg:p-10 border-b lg:border-r border-dashed border-[#e9e7dc]">
                    <Activity className="w-10 h-10 text-[#8b5e4a]" strokeWidth={1.5} />
                    <div className="pt-2">
                      <h4 className="font-playfair font-bold text-[18px] lg:text-[20px] mb-2 leading-tight text-gray-900">Inflammation &amp; Internal Load</h4>
                      <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed max-w-[280px]">May influence breakouts, sensitivity, and ageing</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col gap-4 p-8 lg:p-10 border-b sm:border-r lg:border-r-0 border-dashed border-[#e9e7dc]">
                    <Droplet className="w-10 h-10 text-[#8b5e4a]" strokeWidth={1.5} />
                    <div className="pt-2">
                      <h4 className="font-playfair font-bold text-[18px] lg:text-[20px] mb-2 leading-tight text-gray-900">Omega Balance &amp; Skin Function</h4>
                      <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed max-w-[280px]">Omega-3 contributes to the maintenance of normal skin</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex flex-col gap-4 p-8 lg:p-10 border-b sm:border-b-0 sm:border-r lg:border-r-0 lg:border-b-0 lg:border-r lg:border-t-0 border-dashed border-[#e9e7dc]">
                    <Leaf className="w-10 h-10 text-[#8b5e4a]" strokeWidth={1.5} />
                    <div className="pt-2">
                      <h4 className="font-playfair font-bold text-[18px] lg:text-[20px] mb-2 leading-tight text-gray-900">Metabolic Function</h4>
                      <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed max-w-[280px]">Impacts repair processes and skin quality</p>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="flex flex-col gap-4 p-8 lg:p-10 border-b sm:border-b-0 lg:border-r border-dashed border-[#e9e7dc]">
                    <Sparkles className="w-10 h-10 text-[#8b5e4a]" strokeWidth={1.5} />
                    <div className="pt-2">
                      <h4 className="font-playfair font-bold text-[18px] lg:text-[20px] mb-2 leading-tight text-gray-900">Hormonal Balance</h4>
                      <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed max-w-[280px]">Influences oil production and breakouts</p>
                    </div>
                  </div>

                  {/* Item 6 */}
                  <div className="flex flex-col gap-4 p-8 lg:p-10 border-dashed border-[#e9e7dc]">
                    <Search className="w-10 h-10 text-[#8b5e4a]" strokeWidth={1.5} />
                    <div className="pt-2">
                      <h4 className="font-playfair font-bold text-[18px] lg:text-[20px] mb-2 leading-tight text-gray-900">Gut–Skin Axis</h4>
                      <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed max-w-[280px]">Supports immune response and skin behaviour</p>
                    </div>
                  </div>
               </div>
             </div>

             {/* CORE PRINCIPLE & QUOTE */}
             <div className="border-t border-dashed border-[#e9e7dc] p-8 lg:p-12 relative z-10 bg-[#fefdfb]">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-center justify-between">
                   {/* Core Principle */}
                   <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                      <div className="flex items-center justify-center lg:justify-start gap-2.5 text-[#8b5e4a] font-bold text-[12px] tracking-[0.2em] uppercase mb-5">
                         <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse" />
                         Core Principle
                      </div>
                      <p className="font-playfair text-[20px] md:text-[24px] lg:text-[26px] font-bold leading-tight max-w-lg mx-auto lg:mx-0 text-gray-900">
                        If the body cannot absorb and utilise nutrients effectively — the results of even high-level skin treatments may be harder to maintain.
                      </p>
                   </div>
                   
                   {/* Quote */}
                   <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-8 lg:p-10 rounded-[2rem] border border-[#e9e7dc] relative w-full lg:max-w-xl mx-auto shadow-sm">
                     <Quote className="w-10 h-10 text-gray-200 absolute -top-4 lg:-top-5 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0" />
                     <p className="font-montserrat italic text-[14px] lg:text-[15px] leading-relaxed text-gray-600 mb-8 pt-4 lg:pt-2">
                        &quot;The missing piece in many treatment plans today is identifying what&apos;s driving symptoms beneath the surface — and addressing the root drivers.&quot;
                     </p>
                     <div className="mt-auto flex flex-col items-center lg:items-start gap-1">
                        <span className="font-bold text-[13px] uppercase tracking-widest leading-none text-gray-900">Mel Kingdom</span>
                        <span className="font-bold text-[#8b5e4a] text-[10px] uppercase tracking-[0.2em] leading-none mt-1">Founder of Body Remedies</span>
                     </div>
                   </div>
                </div>
             </div>
           </div>
        </div>

        {/* SECTION — START WITH THE FOUNDATIONS */}
        <div className="w-full mt-24 lg:mt-32 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-bold text-[#8b5e4a] text-[13px] uppercase tracking-widest mb-3">At home or in clinic</p>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">START WITH THE FOUNDATIONS</h2>
            <p className="font-montserrat text-[15px] font-medium leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Every skin pathway starts at a cellular level
            </p>
          </div>

          {/* Foundation Tests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center border border-[#e9e7dc] group-hover:bg-[#8b5e4a] group-hover:border-[#8b5e4a] transition-colors duration-300 shrink-0">
                  <Activity className="w-6 h-6 text-[#8b5e4a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Omega Balance<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Measures fatty acid balance and how cells function, repair, and respond</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 bg-[#fcfaf7] rounded-2xl flex items-center justify-center border border-[#e9e7dc] group-hover:bg-[#8b5e4a] group-hover:border-[#8b5e4a] transition-colors duration-300 shrink-0">
                  <Leaf className="w-6 h-6 text-[#8b5e4a] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-[22px] text-gray-900 leading-tight">Gut Microbiome<br/>Test</h3>
              </div>
              <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 font-medium">Assesses microbiome balance, immune interaction, and gut-skin signalling</p>
            </div>
          </div>

          {/* STRUCTURED TESTING APPROACH */}
          <div className="bg-white border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#d0bfae] to-[#8b5e4a]"></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 bg-[#8b5e4a]/10 text-[#8b5e4a] px-4 py-1.5 rounded-full font-bold text-[13px] uppercase tracking-widest mb-6">
                <div className="w-2 h-2 rounded-full bg-[#8b5e4a] animate-pulse"></div> Structured Testing Approach
              </div>
              <h3 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Testing should be structured — not excessive</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column: Foundational */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-bold text-gray-900 text-[18px] uppercase tracking-widest pl-2 border-l-[4px] border-[#8b5e4a]">Foundational Testing</h4>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  {/* Omega Balance */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#8b5e4a]">
                       <Activity className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0 flex items-center h-10">
                       <p className="font-bold text-gray-900 text-[14px] leading-tight mt-0.5">Omega Balance</p>
                     </div>
                  </div>
                  {/* Gut Microbiome */}
                  <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-2xl flex items-start gap-3 relative">
                     <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm text-[#8b5e4a]">
                       <Leaf className="w-5 h-5" />
                     </div>
                     <div className="flex-1 min-w-0 flex items-center h-10">
                       <p className="font-bold text-gray-900 text-[14px] leading-tight mt-0.5">Gut Microbiome</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Middle Column: Baseline Screening */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-bold text-gray-900 text-[18px] uppercase tracking-widest pl-2 border-l-[4px] border-[#8b5e4a]">Baseline Screening</h4>
                </div>
                <p className="text-[12px] font-bold text-[#8b5e4a] uppercase tracking-widest mb-6 h-[18px] flex items-center">Rapid Finger-Prick Point-of-Care</p>
                <div className="flex flex-col gap-3">
                  {[ "HbA1c", "Vitamin D", "Ferritin", "CRP / hs-CRP", "Cortisol", "Folate", "Cystatin C" ].map((b, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                       <div className="w-2 h-2 rounded-full bg-[#8b5e4a]/50"></div>
                       <p className="font-bold text-gray-900 text-[13px]">{b}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Advanced Screening */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-bold text-gray-900 text-[18px] uppercase tracking-widest pl-2 border-l-[4px] border-[#8b5e4a]">Advanced Screening</h4>
                </div>
                <p className="text-[12px] font-bold text-[#8b5e4a] uppercase tracking-widest mb-6 h-[18px] flex items-center">Phlebotomy (where required)</p>
                <div className="flex flex-col gap-3">
                  {[ "Vitamin B12", "Thyroid (TSH)", "Hormonal markers" ].map((b, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                       <div className="w-2 h-2 rounded-full bg-[#8b5e4a]/50"></div>
                       <p className="font-bold text-gray-900 text-[13px]">{b}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-[#fcfaf7] border border-[#e9e7dc] p-4 rounded-xl shadow-sm">
                   <p className="text-[12px] text-gray-600 font-bold text-center uppercase tracking-widest">Screening is determined by consultation</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* HOW WE SUPPORT YOU */}
        <div className="w-full mt-24 mb-8 max-w-6xl mx-auto px-4">
          <div className="bg-[#fcfaf7] rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-sm border border-[#e9e7dc]">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b5e4a]/5 to-transparent pointer-events-none"></div>

            <div className="text-center relative z-10 mb-10">
              <p className="font-bold text-[#8b5e4a] text-[12px] uppercase tracking-widest mb-3">A structured system — not isolated treatments</p>
              <h2 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 tracking-wider mb-8 uppercase">
                How We Support You
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
                {["Test", "Understand", "Apply", "Retest", "Evolve"].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-[#8b5e4a] border border-[#6e4736] px-4 py-1.5 rounded-full text-white font-semibold text-[13px] uppercase tracking-widest shadow-sm">
                      {step}
                    </div>
                    {index < 4 && (
                      <ArrowRight className="w-4 h-4 text-[#8b5e4a] shrink-0" strokeWidth={2} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#8b5e4a]/20"></div>
                <h3 className="font-bold text-[11px] text-[#8b5e4a] uppercase tracking-widest">What this includes</h3>
                <div className="w-8 h-[1px] bg-[#8b5e4a]/20"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {[
                  { title: "Skin Driver Testing", icon: Activity },
                  { title: "Specialist Results Review", icon: Search },
                  { title: "Personalised Skin Protocols", icon: Settings },
                  { title: "Structured Retesting", icon: RefreshCw },
                  { title: "Ongoing Support", icon: MessageCircle },
                  { title: "Access to Skin Specialists", icon: Stethoscope },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-[#8b5e4a] hover:bg-[#6e4736] transition-colors duration-300 rounded-xl p-4 flex items-center gap-4 shadow-sm group">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <span className="font-bold text-[14px] text-white/95">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* A MORE COMPLETE APPROACH block */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-20 mb-20 text-center">
            <h3 className="font-playfair font-bold text-[28px] md:text-[32px] text-gray-900 mb-4 uppercase tracking-wider text-center">A More Complete Approach</h3>
            <p className="font-montserrat text-[16px] text-gray-600 font-medium mb-8 max-w-xl mx-auto">
                Advanced treatments refine the skin. Internal support helps influence:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
               <span className="font-bold text-[#8b5e4a] text-[13px] md:text-[14px] uppercase tracking-widest bg-[#8b5e4a]/5 border border-[#8b5e4a]/20 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-[#8b5e4a]"></div> Consistency</span>
               <span className="font-bold text-[#8b5e4a] text-[13px] md:text-[14px] uppercase tracking-widest bg-[#8b5e4a]/5 border border-[#8b5e4a]/20 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-[#8b5e4a]"></div> Response</span>
               <span className="font-bold text-[#8b5e4a] text-[13px] md:text-[14px] uppercase tracking-widest bg-[#8b5e4a]/5 border border-[#8b5e4a]/20 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-[#8b5e4a]"></div> Long-Term Results</span>
            </div>
        </div>

        {/* PRICING / SUPPORT LEVELS */}
        <div className="w-full mt-16 mb-24 max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-bold text-gray-900 tracking-wider mb-4 uppercase">Choose Your Support Level</h2>
            <p className="font-bold text-[#8b5e4a] text-[13px] uppercase tracking-widest mb-4">
              From foundational support to specialist-led skin strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* Box 1: Free Consultation */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#8b5e4a]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight">Free Consultation</h3>
               </div>
               
               <div className="flex-grow flex flex-col justify-start mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Goal</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-gray-900 shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Understand your skin concerns and identify your starting point</span></div>
               </div>
               
               <div className="h-[220px] shrink-0 pt-6 border-t border-gray-100 flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                    <span className="text-[32px] font-bold text-gray-900 leading-none">Free</span>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase border border-gray-200 text-gray-900 rounded-full hover:bg-gray-50 transition-colors shadow-sm mb-6">
                   Book Free Consultation
                 </button>
               </div>
            </div>

            {/* Box 2: TBN Skin Foundations */}
            <div className="bg-[#fcfaf7] border border-[#e9e7dc] p-8 rounded-[2rem] shadow-md flex flex-col relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b5e4a] text-white px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border border-[#6e4736] whitespace-nowrap">Most Popular</div>
               
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Skin Foundations</h3>
                 <p className="text-[11px] font-bold text-[#8b5e4a] uppercase tracking-widest">6-Month Structured Programme</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Balance Test</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">6-Month Skin Protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Retest Included</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Ongoing Support</span></div>
               </div>

               <div className="h-[220px] shrink-0 pt-6 border-t border-[#e9e7dc] flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                    <div className="flex items-end gap-3 mb-1.5 align-bottom">
                        <span className="text-[32px] font-bold text-gray-900 leading-none">£189</span>
                        <span className="text-gray-400 line-through text-[14px] leading-snug">£482</span>
                    </div>
                    <p className="text-[13px] text-[#8b5e4a] font-bold">+ £39/month optional support</p>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#8b5e4a] text-white rounded-full hover:bg-[#6e4736] transition-colors shadow-md mb-6">
                   Start Foundations
                 </button>
               </div>
            </div>

            {/* Box 3: Advanced Review */}
            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex flex-col hover:border-[#8b5e4a]/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform-gpu will-change-transform">
               <div className="h-[100px] shrink-0 mb-2 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-gray-900 leading-tight mb-2">TBN Advanced Skin Review</h3>
                 <p className="text-[11px] font-bold text-[#8b5e4a] uppercase tracking-widest">1:1 Strategic Review</p>
               </div>
               
               <div className="flex-grow mb-6 space-y-3">
                 <p className="font-bold text-[11px] text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Advanced Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Personalised Skin Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#8b5e4a] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-gray-700 font-medium leading-snug">Insight into underlying drivers</span></div>
               </div>

               <div className="h-[220px] shrink-0 pt-6 border-t border-gray-100 flex flex-col">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                     <span className="text-[32px] font-bold text-gray-900 leading-none mb-1">£85 <span className="text-[14px] text-gray-500 font-bold tracking-widest uppercase mb-0.5">Add-on</span></span>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#8b5e4a] text-white rounded-full hover:bg-[#6e4736] transition-colors shadow-md mb-6">
                   Book Advanced Review
                 </button>
               </div>
            </div>

            {/* Box 4: Elite Consultation */}
            <div className="bg-[#8b5e4a] border border-white/10 p-8 rounded-[2rem] shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 transform-gpu will-change-transform isolate">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d0bfae] opacity-10 blur-3xl rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="h-[100px] shrink-0 mb-2 relative z-10 flex flex-col">
                 <h3 className="font-playfair text-[24px] font-bold text-white leading-tight mb-2">TBN Elite Skin Consultation</h3>
                 <p className="text-[11px] font-bold text-[#d0bfae] uppercase tracking-widest">Private 1:1 with Doctor or Specialist</p>
               </div>
               
               {/* Body Zone */}
               <div className="flex-grow mb-6 space-y-3 relative z-10">
                 <p className="font-bold text-[11px] text-white/40 uppercase tracking-widest mb-3">Includes</p>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Full Results Review</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Personalised Strategy</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Bespoke Protocol</span></div>
                 <div className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-[#d0bfae] shrink-0 mt-0.5" strokeWidth={2.5}/><span className="text-[13px] text-white/90 font-medium leading-snug">Follow-Up &amp; Retest</span></div>
               </div>

               {/* Footer Zone */}
               <div className="h-[220px] shrink-0 pt-6 border-t border-white/10 flex flex-col relative z-10">
                 <div className="h-[85px] shrink-0 flex flex-col justify-end pb-4">
                     <span className="text-[32px] font-bold text-white leading-none">£185</span>
                 </div>
                 <button className="w-full h-[52px] shrink-0 text-[13px] font-bold tracking-widest uppercase bg-[#d0bfae] text-[#1c1c1c] rounded-full hover:bg-white transition-colors shadow-md mb-6">
                   Apply for Elite Support
                 </button>
               </div>
            </div>

          </div>
        </div>

        {/* SECTION — PARTNER WITH US & DIRECTORY */}
        <div className="w-full mt-24 lg:mt-32 max-w-[1400px] mx-auto px-4 mb-24">
           {/* Centered Section Heading */}
           <div className="max-w-[800px] mx-auto text-center mb-16">
             <h2 className="font-playfair text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight mb-4 uppercase">
               PARTNER WITH US
             </h2>
             <p className="font-bold text-[#8b5e4a] text-[13px] md:text-[14px] uppercase tracking-widest leading-snug">
               Integrated into hand-selected clinics, health clubs, gyms, and performance settings
             </p>
           </div>
           
           <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Partner With Us */}
              <div className="w-full lg:flex-1 bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Users className="w-64 h-64 text-[#8b5e4a] -mr-16 -mt-16"/></div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 relative z-10 flex-grow">
                     {/* Left side of the Partner box */}
                     <div className="flex flex-col justify-between">
                         <div>
                             <h3 className="font-playfair text-[24px] md:text-[28px] xl:text-[32px] font-bold text-gray-900 leading-tight mb-4">
                                TBN operates inside real environments
                             </h3>
                             <p className="font-montserrat text-[15px] leading-relaxed text-gray-600 mb-10">
                                — embedding structured testing, specialist insight, and clinical systems into existing services.
                             </p>
                         </div>
                         
                         <div className="mt-auto">
                            <p className="font-bold text-gray-900 text-[13px] uppercase tracking-widest mb-4">Partner With TBN</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                               <button className="flex-1 bg-[#8b5e4a] text-white px-5 py-4 rounded-xl font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-[#6e4736] transition-colors shadow-sm text-center">
                                 Become a Partner
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
                              "Integrated testing within your environment",
                              "Ongoing access to specialist-led insight",
                              "Enhanced client journeys",
                              "Scalable health services",
                              "New revenue opportunities"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-[#8b5e4a] shrink-0 mt-0.5" />
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
                 <div className="w-full bg-[#fcfaf7] border border-[#e9e7dc] rounded-[2.5rem] p-8 md:p-10 shadow-md text-center lg:text-left flex flex-col items-center lg:items-start relative overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none"><Search className="w-48 h-48 text-[#8b5e4a] -mr-12 -mb-12"/></div>

                    <h2 className="font-playfair text-[24px] font-bold text-gray-900 leading-snug mb-4 relative z-10">
                       Access TBN-approved clinics across the UK.
                    </h2>
                    <p className="text-[13px] text-gray-600 mb-8 font-medium leading-relaxed relative z-10">
                       Find specialist TBN practitioners. Discover cutting-edge support near you.
                    </p>
                    
                    {/* Directory Flicker / Focus Rail */}
                    <div className="w-[calc(100%+4rem)] md:w-[calc(100%+5rem)] -mx-8 md:-mx-10 mb-6 relative z-10 overflow-hidden shrink-0">
                       {isSpecialistsLoading || expertItems.length === 0 ? (
                          <div className="h-[380px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8b5e4a]"></div>
                          </div>
                       ) : (
                          <FocusRail 
                            items={expertItems} 
                            autoPlay={true} 
                            interval={4000}
                            loop={true} 
                            compact={true}
                            className="bg-transparent h-auto !w-full"
                          />
                       )}
                    </div>
                    
                    <div className="mt-auto w-full relative z-10">
                       <button className="w-full text-center bg-[#8b5e4a] text-white px-4 py-4 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#6e4736] transition-colors shadow-md">
                          Explore Directory
                       </button>
                    </div>
                  </div>
              </div>
            </div>
         </div>

        {/* LATEST INSIGHTS HORIZONTAL GALLERY */}
        <div className="w-full mt-8 max-w-[1400px] mx-auto px-4 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 md:mb-10 text-center md:text-left gap-4">
             <div>
                <h2 className="font-playfair text-[28px] md:text-[32px] font-bold text-gray-900 tracking-wider uppercase">
                   LATEST INSIGHTS
                </h2>
                <p className="font-montserrat text-[14px] md:text-[15px] font-medium text-gray-600 mt-2">
                   Cellular health, gut-skin connections, and dermatological science.
                </p>
             </div>
             <Link to="/news" className="text-[#8b5e4a] font-bold text-[13px] uppercase tracking-wider hover:underline flex items-center gap-2">
                View All Articles <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.slice(0, 3).map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 lg:mt-24 mb-16">
          <div className="bg-[#8b5e4a] p-10 lg:p-16 rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col items-center text-center w-full max-w-[1400px] mx-auto px-4">
             <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-48 h-48 -mr-16 -mt-16 text-white"/></div>
             <div className="absolute bottom-0 left-0 p-8 opacity-10"><Zap className="w-48 h-48 -ml-16 -mb-16 text-white rotate-180"/></div>
             
             <h2 className="font-playfair text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-6 relative z-10 leading-tight uppercase">
               SKIN, WITHOUT GUESSWORK
             </h2>
             <div className="flex flex-col items-center relative z-10 border-b border-white/20 pb-5 mb-5 px-8">
               <p className="text-white/90 font-bold uppercase tracking-widest text-[13px] mb-2 text-center">
                 A more intelligent approach to skin health
               </p>
             </div>
             <p className="text-[20px] font-playfair font-bold text-[#e9e7dc] mb-10 relative z-10">
               Test-Based. Personalised. Transformative.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full max-w-lg">
               <button 
                 onClick={() => openQuiz()}
                 className="flex-1 bg-white hover:bg-gray-100 text-[#8b5e4a] px-6 py-4 rounded-xl font-bold text-[15px] shadow-lg flex justify-center items-center gap-2 group transition-all">
                 Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </button>
               <Link to="/clinics" className="flex-1 bg-[#6e4736] hover:bg-[#5a3a2d] text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-[15px] shadow-sm flex justify-center items-center gap-2 group transition-all">
                 Find a Clinic <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
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
            {/* FAQ 1 */}
            <AccordionItem value="item-1" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#8b5e4a] text-left">
                Why do my skin concerns keep returning?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2">Skin concerns are often treated on the surface.</p>
                <p>However, factors such as inflammation, hormones, gut health, and nutrient status may influence how the skin behaves over time.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 2 */}
            <AccordionItem value="item-2" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#8b5e4a] text-left">
                How is this different from standard skin treatments?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2">Most approaches focus on appearance.</p>
                <p>This approach explores what may be influencing your skin beneath the surface.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 3 */}
            <AccordionItem value="item-3" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#8b5e4a] text-left">
                Will this replace my treatments?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2 font-medium text-gray-900">No.</p>
                <p>It is designed to support and enhance them.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 4 */}
            <AccordionItem value="item-4" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#8b5e4a] text-left">
                What is Skin Driver Testing?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p>It focuses on identifying factors such as inflammation, gut health, and hormonal balance that may influence your skin.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 5 */}
            <AccordionItem value="item-5" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#8b5e4a] text-left">
                How do you decide which tests I need?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p>Testing is determined by consultation, based on your symptoms and goals.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 6 */}
            <AccordionItem value="item-6" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#8b5e4a] text-left">
                Can I do this at home?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p className="mb-2 font-medium text-gray-900">Yes.</p>
                <p>Foundational testing can be completed at home, with optional in-clinic support.</p>
              </AccordionContent>
            </AccordionItem>

            {/* FAQ 7 */}
            <AccordionItem value="item-7" className="bg-white border rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-[16px] font-bold text-gray-900 hover:no-underline hover:text-[#8b5e4a] text-left">
                How long before I see changes?
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pt-2 pb-4">
                <p>Many pathways are supported over 3–6 months, allowing time for measurable progress.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default SkinHealth;
