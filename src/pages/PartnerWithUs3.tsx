import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, CheckCircle2, Building2, Store, HeartPulse, 
  BookOpen, ShieldCheck, UserCheck, Zap, Repeat, Users,
  Sparkles, Check, ChevronRight, Calculator, Calendar, ArrowUpRight
} from "lucide-react";

const heroImg = "/images/partner-hero-2.jpg";

const PartnerWithUs3 = () => {
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    // In a real implementation this would write to supabase table 'partner_leads'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setLeadForm(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-950 font-sans selection:bg-[#9f1e13]/10 selection:text-[#9f1e13]">
      <Navbar alwaysSolid={false} />

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0c0c0e] pt-24 overflow-hidden">
        
        {/* Right side background image taking up 50% width on large screens */}
        <div className="absolute top-0 right-0 bottom-0 left-0 lg:left-auto lg:w-[50%] z-0">
          <img
            src={heroImg}
            alt="Partner With Test-Based Nutrition"
            className="w-full h-full object-cover object-[25%_center] filter brightness-90"
          />
          {/* Subtle gradient to blend image into the dark left background on desktop, and from bottom on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent lg:bg-gradient-to-r lg:from-[#0c0c0e] lg:via-transparent lg:to-transparent"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        </div>

        {/* Text container overlay - centered vertically but text constrained to the left half (max-w-2xl or md:w-1/2) */}
        <div className="container relative z-10 text-white max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex flex-col gap-1.5">
              <span className="text-[#9f1e13] font-mono tracking-widest text-xs sm:text-sm font-semibold uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9f1e13] animate-pulse"></span>
                LEARN. LAUNCH. GROW. LEAD.
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold leading-[1.1] tracking-tight text-white">
              Partner with <br className="hidden sm:inline" />
              Test-Based Nutrition
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl font-light text-zinc-100 leading-relaxed border-l-2 border-[#9f1e13] pl-4 sm:pl-6">
                Bring science-led testing, rapid point-of-care screening, specialist support, practitioner education and personalised health pathways into your clinic, pharmacy, health club, wellness destination or resort.
              </p>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                A complete Business-In-A-Box designed to help you create new revenue streams, increase client retention and deliver a premium health experience.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#9f1e13] hover:bg-[#861910] text-white px-8 h-14 text-base font-bold tracking-wide rounded-xl shadow-lg shadow-red-950/20 active:scale-95 transition-all" asChild>
                <a href="#apply">
                  APPLY TO PARTNER WITH TBN <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Limited Founding Partner Offer Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-zinc-100">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9f1e13]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#dbd4c9]/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="container max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9f1e13]/10 text-[#9f1e13] font-bold tracking-wider uppercase text-xs">
              <Sparkles className="w-3.5 h-3.5" /> LIMITED FOUNDING PARTNER OFFER
            </span>
            <p className="text-[#9f1e13] text-sm font-bold tracking-widest uppercase">Available Until 31st July 2026</p>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-zinc-950">THE TBN BUSINESS-IN-A-BOX™</h2>
          </div>

          <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Card Detail */}
            <div className="flex-1 flex flex-col justify-between space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#9f1e13] mb-3">Partner Investment</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl sm:text-7xl font-bold font-playfair tracking-tight text-zinc-950">£1,300</span>
                </div>
                <p className="text-lg font-semibold text-zinc-800 leading-relaxed">
                  Receive over £6,000 of training, marketing and launch support included.
                </p>
                <p className="text-sm sm:text-base text-zinc-600 font-light mt-4 leading-relaxed">
                  Designed for clinics, pharmacies, health clubs, wellness businesses, resorts and practitioners looking to introduce a complete preventative health service without building it themselves.
                </p>
              </div>

              <div className="border-t border-[#dbd4c9]/60 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Total Added Value</span>
                <span className="text-3xl sm:text-4xl font-bold font-playfair text-[#9f1e13]">£6,000+</span>
              </div>
            </div>

            {/* Right Card Checklist */}
            <div className="w-full lg:w-[450px] bg-white border border-[#dbd4c9] p-8 rounded-3xl flex flex-col justify-between relative shadow-sm">
              <div className="absolute top-0 right-0 translate-x-3 -translate-y-3 bg-[#9f1e13] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Included Free
              </div>
              
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-100 pb-4 mb-6">
                INCLUDED FREE UNTIL 31ST JULY 2026
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4 mb-8">
                {[
                  "Certified TBN Training",
                  "Marketing & Launch Assets",
                  "Social Media Campaigns",
                  "Workshop Templates",
                  "Consultation Frameworks",
                  "Results Review Systems",
                  "AI Marketing Tools",
                  "Partner Microsite",
                  "Regional Visibility Support",
                  "Specialist Support",
                  "Launch Guidance",
                  "Partner Community Access"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9f1e13]/10 text-[#9f1e13]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full h-14 bg-[#9f1e13] hover:bg-[#b02216] text-white text-sm font-bold tracking-wide rounded-xl" asChild>
                <a href="#apply">Secure Your Founding Partner Spot</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Could This Look Like Section */}
      <section className="py-24 bg-[#faf8f5] border-b border-[#dbd4c9]/30">
        <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-xs sm:text-sm block">BUSINESS PROJECTIONS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-zinc-950">
              WHAT COULD THIS LOOK LIKE IN YOUR BUSINESS?
            </h2>
            <p className="text-lg text-zinc-600 font-light max-w-2xl mx-auto">
              Most businesses already have the clients. <br/>
              They simply need a better system.
            </p>
          </div>

          <div className="bg-white border border-[#dbd4c9] rounded-[2rem] p-8 md:p-12 shadow-lg space-y-8">
            <div className="text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-[#9f1e13]/15 text-[#9f1e13] font-bold uppercase text-xs tracking-widest mb-6">
                40 TESTS INCLUDED
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6 text-center">
              <div className="md:col-span-2 p-6 rounded-2xl bg-[#faf8f5] border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Potential Test Revenue</p>
                <p className="text-3xl sm:text-4xl font-bold font-playfair text-zinc-900">£2,400</p>
              </div>
              
              <div className="text-zinc-400 font-light text-2xl font-mono">+</div>
              
              <div className="md:col-span-2 p-6 rounded-2xl bg-[#faf8f5] border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Potential Programme & Retail Revenue</p>
                <p className="text-3xl sm:text-4xl font-bold font-playfair text-zinc-900">£2,000</p>
              </div>
            </div>

            <div className="border-t border-zinc-100 pt-8 text-center max-w-2xl mx-auto space-y-4">
              <p className="text-zinc-500 font-light text-sm uppercase tracking-wider">=</p>
              <h3 className="text-2xl sm:text-4xl font-playfair font-extrabold text-[#9f1e13] tracking-tight leading-none">
                £4,400 POTENTIAL MONTH ONE REVENUE
              </h3>
            </div>
            
            <div className="border-t border-zinc-100 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 text-center">
                Plus ongoing opportunities through:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "Reviews",
                  "Retesting",
                  "Programmes",
                  "Memberships",
                  "Workshops",
                  "Practitioner Referrals",
                  "Supplement Subscriptions",
                  "Long-Term Client Pathways"
                ].map((opportunity, idx) => (
                  <div key={idx} className="bg-[#faf8f5] p-4 rounded-xl border border-zinc-100 text-center flex items-center justify-center h-16">
                    <p className="text-xs font-bold text-zinc-700 leading-snug uppercase tracking-wide">
                      {opportunity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Partners Join TBN */}
      <section className="py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-xs sm:text-sm block">THE TBN DIFFERENCE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-zinc-950">
              WHY PARTNERS JOIN TBN
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-light">
              Unlike traditional testing providers, we don't simply provide tests. <br className="hidden md:inline" />
              We provide the complete ecosystem required to launch, grow and scale a successful preventative health service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "TRAINING", description: "Structured practitioner education and pathway training." },
              { title: "MARKETING", description: "Campaigns, social media, launch assets and growth resources." },
              { title: "SPECIALIST SUPPORT", description: "Access to doctors, specialists and experienced practitioners." },
              { title: "BUSINESS GROWTH", description: "Systems designed to increase engagement, retention and recurring revenue." },
              { title: "AI TOOLS", description: "Ready-to-use prompts, content systems and marketing support." },
              { title: "ONGOING DEVELOPMENT", description: "Workshops, partner education and implementation support." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#faf8f5] border border-[#dbd4c9] p-8 rounded-3xl hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9f1e13]/10 text-[#9f1e13] flex items-center justify-center font-mono font-bold text-sm">
                    0{idx+1}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-[#9f1e13] transition-colors uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Learn. Launch. Grow. Lead. Details Section */}
      <section className="py-24 bg-[#faf8f5] border-y border-[#dbd4c9]/30">
        <div className="container max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#9f1e13] uppercase tracking-[0.25em] font-extrabold text-xs block mb-3">TBN ROLLOUT BLUEPRINT</span>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-zinc-950 uppercase">LEARN. LAUNCH. GROW. LEAD.</h2>
          </div>

          <div className="space-y-16">
            {/* LEARN */}
            <div className="bg-white border border-[#dbd4c9] rounded-[2rem] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[#9f1e13] font-mono tracking-widest text-xs font-bold uppercase">STAGE 01</span>
                <h3 className="text-3xl font-playfair font-bold text-zinc-950 uppercase">LEARN</h3>
                <h4 className="text-lg font-semibold text-zinc-800">Master The TBN Method™</h4>
                <p className="text-sm font-medium text-[#9f1e13] tracking-wider uppercase">Built for real-world implementation.</p>
              </div>
              <div className="lg:col-span-7 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Access certified training covering:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "Foundational Testing",
                    "Gut Health",
                    "Point-of-Care Screening",
                    "Consultations & Results Reviews",
                    "Specialist Health Pathways",
                    "Protocol Integration",
                    "Compliance & Best Practice"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-medium">
                      <ChevronRight className="w-4 h-4 text-[#9f1e13] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* LAUNCH */}
            <div className="bg-white border border-[#dbd4c9] rounded-[2rem] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[#9f1e13] font-mono tracking-widest text-xs font-bold uppercase">STAGE 02</span>
                <h3 className="text-3xl font-playfair font-bold text-zinc-950 uppercase">LAUNCH</h3>
                <h4 className="text-lg font-semibold text-zinc-800">Everything You Need To Go Live</h4>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  Launch testing clinics, workshops, health hubs and specialist programmes with confidence.
                </p>
                <p className="text-sm font-medium text-[#9f1e13] tracking-wider uppercase">No need to build systems from scratch.</p>
              </div>
              <div className="lg:col-span-7 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Receive:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "Marketing Campaigns",
                    "Social Media Assets",
                    "Workshop Frameworks",
                    "Consultation Systems",
                    "Results Review Templates",
                    "AI Marketing Tools",
                    "Launch Support"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-medium">
                      <ChevronRight className="w-4 h-4 text-[#9f1e13] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* GROW */}
            <div className="bg-white border border-[#dbd4c9] rounded-[2rem] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[#9f1e13] font-mono tracking-widest text-xs font-bold uppercase">STAGE 03</span>
                <h3 className="text-3xl font-playfair font-bold text-zinc-950 uppercase">GROW</h3>
                <h4 className="text-lg font-semibold text-zinc-800">Create Long-Term Client Pathways</h4>
                <p className="text-sm font-medium text-[#9f1e13] tracking-wider uppercase">Helping increase client engagement, retention and lifetime value.</p>
              </div>
              <div className="lg:col-span-7 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-zinc-100">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Generate recurring revenue through:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "Reviews",
                    "Retesting",
                    "Memberships",
                    "Workshops",
                    "Health Programmes",
                    "Follow-Up Support"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-medium">
                      <ChevronRight className="w-4 h-4 text-[#9f1e13] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* LEAD */}
            <div className="bg-white border border-[#dbd4c9] rounded-[2rem] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[#9f1e13] font-mono tracking-widest text-xs font-bold uppercase">STAGE 04</span>
                <h3 className="text-3xl font-playfair font-bold text-zinc-950 uppercase">LEAD</h3>
                <h4 className="text-lg font-semibold text-zinc-800">Become The Trusted Authority</h4>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  Position your business as a recognised destination for preventative health, personalised wellbeing and measurable outcomes.
                </p>
                <p className="text-sm font-medium text-[#9f1e13] tracking-wider uppercase">Supported by a growing collective of doctors, specialists and practitioners.</p>
              </div>
              <div className="lg:col-span-7 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-zinc-100 flex items-center justify-center min-h-[160px]">
                <div className="text-center max-w-sm">
                  <UserCheck className="w-12 h-12 text-[#9f1e13] mx-auto mb-4" />
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Status</p>
                  <p className="text-sm font-semibold text-zinc-800 mt-1">Leading Regional Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who is TBN For */}
      <section className="py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-xs sm:text-sm block">PARTNER SEGMENTS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-zinc-950 uppercase">
              WHO IS TBN FOR?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#faf8f5] rounded-3xl p-8 border border-[#dbd4c9] flex flex-col justify-between">
              <div className="space-y-4">
                <Building2 className="w-8 h-8 text-[#9f1e13]" />
                <h3 className="text-xl font-bold text-zinc-900 uppercase">CLINICS & PRACTITIONERS</h3>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Enhance osteopathy, chiropractic, physiotherapy, aesthetics and wellness services through testing, education and personalised pathways.
                </p>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Help clients better understand factors linked to inflammation balance, gut health, recovery, women's health, performance and lifestyle.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8f5] rounded-3xl p-8 border border-[#dbd4c9] flex flex-col justify-between">
              <div className="space-y-4">
                <Store className="w-8 h-8 text-[#9f1e13]" />
                <h3 className="text-xl font-bold text-zinc-900 uppercase">PHARMACIES</h3>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Move beyond reactive healthcare.
                </p>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Introduce preventative health conversations through testing, screening and ongoing support pathways.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8f5] rounded-3xl p-8 border border-[#dbd4c9] flex flex-col justify-between">
              <div className="space-y-4">
                <HeartPulse className="w-8 h-8 text-[#9f1e13]" />
                <h3 className="text-xl font-bold text-zinc-900 uppercase">HEALTH CLUBS & GYMS</h3>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Create premium performance, recovery and longevity services that increase engagement, retention and member value.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8f5] rounded-3xl p-8 border border-[#dbd4c9] flex flex-col justify-between">
              <div className="space-y-4">
                <ShieldCheck className="w-8 h-8 text-[#9f1e13]" />
                <h3 className="text-xl font-bold text-zinc-900 uppercase">WELLNESS RESORTS & RETREATS</h3>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Deliver luxury wellness experiences built around personalised health insights, specialist support and measurable outcomes.
                </p>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Bespoke wellness integration strategies available.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8f5] rounded-3xl p-8 border border-[#dbd4c9] flex flex-col justify-between lg:col-span-2">
              <div className="space-y-4">
                <UserCheck className="w-8 h-8 text-[#9f1e13]" />
                <h3 className="text-xl font-bold text-zinc-900 uppercase">CONSULTANTS & COACHES</h3>
                <p className="text-zinc-600 leading-relaxed text-sm font-light">
                  Launch your own TBN Health Hub with complete systems, support and specialist backing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The TBN Testing Framework */}
      <section className="py-24 bg-[#faf8f5] border-y border-[#dbd4c9]/30">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-xs sm:text-sm block">BIOMARKERS & INSIGHT</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-zinc-950 uppercase">
              THE TBN TESTING FRAMEWORK™
            </h2>
            <h3 className="text-lg font-bold text-[#9f1e13] uppercase tracking-widest">
              THREE LEVELS OF INSIGHT. ONE CONNECTED PATHWAY.
            </h3>
            <p className="text-zinc-600 font-medium italic mt-2">Every client journey begins with consultation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* LEVEL 1 */}
            <div className="bg-white border border-[#dbd4c9] p-8 rounded-[2rem] flex flex-col justify-between relative shadow-sm">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9f1e13]">LEVEL 1</span>
                <h3 className="text-2xl font-playfair font-bold text-zinc-900 uppercase">FOUNDATIONAL TESTING</h3>
                <p className="text-sm font-medium text-zinc-500">The foundation of every pathway.</p>
                
                <div className="space-y-4 pt-4 border-t border-zinc-100">
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm">Omega Balance Test</h4>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Explore:</p>
                    <ul className="text-xs text-zinc-600 space-y-1 font-medium pl-3 list-disc">
                      <li>Omega Balance</li>
                      <li>Omega-3 Status</li>
                      <li>Cellular Health Indicators</li>
                      <li>Brain Health Markers</li>
                      <li>Protection Value</li>
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-zinc-50">
                    <h4 className="font-bold text-zinc-900 text-sm">Gut Health Test</h4>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Explore:</p>
                    <ul className="text-xs text-zinc-600 space-y-1 font-medium pl-3 list-disc">
                      <li>Key Gut Health Indicators</li>
                      <li>Nutritional Considerations</li>
                      <li>Gut-Brain Connections</li>
                      <li>Gut-Related Health Pathways</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 text-xs text-zinc-500 italic leading-relaxed">
                Foundational testing helps create meaningful conversations around health, wellbeing and lifestyle.
              </div>
            </div>

            {/* LEVEL 2 */}
            <div className="bg-white border border-[#dbd4c9] p-8 rounded-[2rem] flex flex-col justify-between relative shadow-sm">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9f1e13]">LEVEL 2</span>
                <h3 className="text-2xl font-playfair font-bold text-zinc-900 uppercase">BASELINE SCREENING</h3>
                <p className="text-sm font-medium text-zinc-500">Rapid finger-prick point-of-care screening.</p>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Selected results available in as little as 3–15 minutes depending on the marker.
                </p>
                
                <div className="pt-4 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Available markers may include:</p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs font-bold text-zinc-700">
                    {[
                      "Vitamin D",
                      "HbA1c",
                      "CRP / hs-CRP",
                      "Ferritin",
                      "Folate",
                      "Cortisol",
                      "Cystatin C",
                      "Rheumatoid Factor",
                      "AMH",
                      "Progesterone",
                      "HCG-β",
                      "NT-proBNP",
                      "RSV / Influenza A & B"
                    ].map((marker, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-[#faf8f5] p-2 rounded">
                        <span className="w-1 h-1 rounded-full bg-[#9f1e13]"></span>
                        {marker}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 text-xs text-zinc-500 italic leading-relaxed">
                A powerful way to create immediate client engagement and personalised health conversations.
              </div>
            </div>

            {/* LEVEL 3 */}
            <div className="bg-white border border-[#dbd4c9] p-8 rounded-[2rem] flex flex-col justify-between relative shadow-sm">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9f1e13]">LEVEL 3</span>
                <h3 className="text-2xl font-playfair font-bold text-zinc-900 uppercase">ADVANCED SCREENING</h3>
                <p className="text-sm font-medium text-zinc-500">Point-of-care blood-draw screening where deeper insight is appropriate.</p>
                
                <div className="space-y-4 pt-4 border-t border-zinc-100">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Markers may include:</p>
                    <div className="space-y-2 text-xs font-bold text-zinc-700">
                      {["Testosterone", "Vitamin B12", "FSH", "TSH"].map((marker, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#faf8f5] p-2 rounded w-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9f1e13]"></span>
                          {marker}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 text-xs text-zinc-500 leading-relaxed space-y-2">
                <p>Where further investigation is required, clients can be supported through our wider Collective, including private GP support, specialist referral and advanced testing pathways.</p>
                <p className="font-semibold text-zinc-700">You don't need to have all the answers. You simply need the right pathway and the right people around you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Host a TBN Testing Hub */}
      <section className="py-24 bg-white">
        <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-lg relative overflow-hidden flex flex-col items-center text-center">
            <span className="text-[#9f1e13] font-mono tracking-widest text-xs font-bold uppercase mb-2">TBN NETWORK EVENTS</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-zinc-950 uppercase mb-4">
              HOST A TBN TESTING HUB
            </h2>
            <h3 className="text-lg font-bold text-[#9f1e13] uppercase tracking-widest mb-6">
              Not Ready To Run Your Own Service?
            </h3>
            
            <p className="text-zinc-700 max-w-2xl font-light leading-relaxed mb-8">
              Many clinics, pharmacies, health clubs and wellness venues choose to host a TBN Testing Hub Day. Our consultants can deliver:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full mb-8 text-xs font-semibold text-zinc-700 uppercase">
              {["Consultations", "Foundational Testing", "Rapid Baseline Screening", "Educational Workshops", "Health Events"].map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm flex items-center justify-center">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-sm font-medium text-zinc-500 mb-8 max-w-lg">
              Helping you introduce measurable health services with minimal operational commitment.
            </p>
            
            <div className="border-t border-[#dbd4c9]/60 pt-8 w-full">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Perfect for:</p>
              <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-zinc-700 mb-8">
                {["Clinics", "Pharmacies", "Health Clubs", "Corporate Wellbeing Programmes", "Wellness Resorts", "Community Health Events"].map((val, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white border border-[#dbd4c9] shadow-sm">
                    {val}
                  </span>
                ))}
              </div>
              
              <Button size="lg" className="bg-[#9f1e13] hover:bg-[#b02216] text-white px-8 h-14 text-sm font-bold tracking-widest uppercase rounded-xl" asChild>
                <a href="#apply">HOST A TESTING HUB DAY</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. A New Era in Nutritional Healthcare */}
      <section className="py-24 bg-[#faf8f5] border-t border-[#dbd4c9]/30">
        <div className="container max-w-[800px] mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9f1e13] block">OUR VISION</span>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-zinc-950 uppercase">
            A NEW ERA IN NUTRITIONAL HEALTHCARE
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#9f1e13] uppercase tracking-widest">
            Science-Led. Preventative. Transformational.
          </p>
          <div className="text-zinc-700 leading-relaxed font-light text-base sm:text-lg space-y-4 max-w-2xl mx-auto">
            <p>
              The future belongs to businesses that can combine expertise, education and measurable health insights to create meaningful client journeys.
            </p>
            <p className="font-semibold text-[#9f1e13]">
              TBN helps you deliver exactly that.
            </p>
            <p>
              Through testing. Through education. Through specialist support. Through personalised pathways. And through a system designed to help both your clients and your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Why Partners Choose TBN Checklist */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="container max-w-[900px] mx-auto px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-zinc-950 uppercase mb-12">
            WHY PARTNERS CHOOSE TBN
          </h2>
          
          <div className="bg-[#faf8f5] border border-[#dbd4c9] p-8 md:p-12 rounded-[2.5rem] shadow-sm">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Foundational Testing and Rapid Screening",
                "Certified Practitioner Training",
                "Marketing & Launch Support Included",
                "Specialist Referral & Escalation Pathways",
                "Workshops & Community Education Systems",
                "AI Marketing & Content Resources",
                "Recurring Revenue Opportunities",
                "Premium Client Experiences",
                "A Complete Business-In-A-Box"
              ].map((val, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9f1e13]/10 text-[#9f1e13]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                  </span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section (Form) */}
      <section id="apply" className="py-24 bg-[#1a1a1a] text-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="text-[#9f1e13] font-mono tracking-widest text-xs font-bold uppercase block">FINAL CTA</span>
            <h2 className="text-3xl sm:text-5xl font-playfair font-bold mb-4 uppercase">
              JOIN THE NEXT GENERATION OF PREVENTATIVE HEALTH BUSINESSES
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#dbd4c9] uppercase tracking-widest mb-6">
              Learn. Launch. Grow. Lead.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-2 font-light">
              Build a new health division inside your clinic, pharmacy, health club, wellness business or resort.
            </p>
            <p className="text-[#9f1e13] text-sm font-bold tracking-widest uppercase">
              Applications for the Founding Partner Programme close 31st July 2026.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-[#9f1e13]/20 rounded-full flex items-center justify-center mx-auto text-[#9f1e13]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-playfair">Thank you for your application!</h3>
                <p className="text-zinc-300 max-w-md mx-auto text-sm leading-relaxed">
                  Our partnership team will review your application and get in touch within the next 24-48 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Full Name *</label>
                    <Input 
                      id="fullName" 
                      value={leadForm.fullName} 
                      onChange={handleInputChange} 
                      placeholder="Your Name" 
                      className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/30" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Clinic / Company Name *</label>
                    <Input 
                      id="companyName" 
                      value={leadForm.companyName} 
                      onChange={handleInputChange} 
                      placeholder="Your Business Name" 
                      className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/30" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Email Address *</label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={leadForm.email} 
                      onChange={handleInputChange} 
                      placeholder="email@address.com" 
                      className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/30" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Phone / Mobile Number</label>
                    <Input 
                      id="phone" 
                      value={leadForm.phone} 
                      onChange={handleInputChange} 
                      placeholder="Your Phone Number" 
                      className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/30" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="partnershipType" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Partnership Type *</label>
                  <select 
                    id="partnershipType" 
                    value={leadForm.partnershipType} 
                    onChange={handleInputChange} 
                    className="flex h-14 w-full rounded-md border border-white/10 bg-[#1a1a1a] text-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f1e13]" 
                    required
                  >
                    <option value="" disabled className="text-white/50">Select a category</option>
                    <option value="clinic">Clinic / Private Practice</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="healthClub">Health Club / Gym</option>
                    <option value="hub">TBN Hub</option>
                    <option value="academy">Training Academy</option>
                    <option value="retreat">Retreat / Resort</option>
                    <option value="expert">Specialist / Consultant</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-white/90 uppercase tracking-wider">Additional details (Optional)</label>
                  <Textarea 
                    id="message" 
                    value={leadForm.message} 
                    onChange={handleInputChange} 
                    placeholder="Tell us briefly about your business goals..." 
                    className="bg-black/20 border-white/10 text-white placeholder:text-white/30 min-h-[100px]" 
                  />
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1 h-16 text-sm font-bold tracking-widest bg-[#9f1e13] hover:bg-[#b02216] text-white rounded-xl uppercase">
                    APPLY TO PARTNER WITH TBN
                  </Button>
                  <Button type="button" onClick={() => window.open("https://calendly.com", "_blank")} size="lg" className="flex-1 h-16 text-sm font-bold tracking-widest bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-xl uppercase">
                    BOOK A PARTNER DISCOVERY CALL
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerWithUs3;
