import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, CheckCircle2, Building2, Store, HeartPulse, 
  BookOpen, ShieldCheck, UserCheck, Zap, Repeat, Users
} from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200";

const PartnerWithUs2 = () => {
  const [clientTier, setClientTier] = useState(2);

  const earningTiers = [
    { label: "1-10", clients: "1-10 Clients", value: "£1,500", desc: "Monthly Recurring Revenue" },
    { label: "10-50", clients: "10-50 Clients", value: "£5,000", desc: "Monthly Recurring Revenue" },
    { label: "50-100", clients: "50-100 Clients", value: "£12,000", desc: "Monthly Recurring Revenue" },
    { label: "100-300", clients: "100-300 Clients", value: "£35,000", desc: "Monthly Recurring Revenue" },
    { label: "300+", clients: "300+ Clients", value: "£50,000+", desc: "Monthly Recurring Revenue" }
  ];
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar alwaysSolid={false} />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Partner With Test-Based Nutrition"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <span className="text-[#faf8f5] uppercase tracking-[0.2em] font-bold text-sm">
              PARTNER WITH TEST-BASED NUTRITION
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
              Build The Future Of <br/>Preventative Health <br/>In Your Business
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl">
              Bring science-led testing, rapid point-of-care screening, specialist support, practitioner education and personalised health pathways into your clinic, pharmacy, health club, wellness destination or resort.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              A complete Business-In-A-Box designed to help you create new revenue streams, increase client retention and deliver a premium health experience.
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-[#9f1e13] hover:bg-[#9f1e13] text-white px-8 h-14 text-base font-bold tracking-wide rounded-full shadow-lg" asChild>
                <a href="#apply">
                  Apply to Partner With TBN <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Hook */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#9f1e13]">The Future of Wellness is Not a Guessing Game</h2>
          <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Your clients are no longer satisfied with generic advice or "trial and error" supplement routines. They want data. They want insight. They want results they can see on paper.
          </p>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto border-t border-gray-200 pt-8">
            TBN helps purpose-driven businesses move from offering individual services to building complete, science-led client pathways.
          </p>
        </div>
      </section>

      {/* 3. The Integration Model */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-sm">The TBN Integration Model</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#9f1e13] mt-4">Learn. Launch. Lead.</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-medium">
              We don’t just give you a test; we give you a business-in-a-box.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-10 border border-[#dbd4c9] rounded-3xl bg-[#faf8f5] hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-bold font-playfair text-[#9f1e13] mb-4">Learn</h3>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-4 mb-4">Master the TBN Method</h4>
              <p className="text-gray-700 leading-relaxed text-left">
                We train your team in the science of biomarkers, gut health, and compliance-conscious communication.
              </p>
            </div>

            <div className="text-center space-y-4 p-10 border border-[#dbd4c9] rounded-3xl bg-[#faf8f5] hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-bold font-playfair text-[#9f1e13] mb-4">Launch</h3>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-4 mb-4">Deploy with Confidence</h4>
              <p className="text-gray-700 leading-relaxed text-left">
                Deploy "Test Days," rapid point-of-care screening, and marketing assets designed to fill your diary from Day 1.
              </p>
            </div>

            <div className="text-center space-y-4 p-10 border border-[#dbd4c9] rounded-3xl bg-[#faf8f5] hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-bold font-playfair text-[#9f1e13] mb-4">Lead</h3>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-4 mb-4">Become the Authority</h4>
              <p className="text-gray-700 leading-relaxed text-left">
                Become the regional authority in preventative health. Build recurring revenue through retesting and specialist-led protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Select Integration Pathway */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#9f1e13]">Select Your Integration Pathway</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Click to explore how TBN fits your specific business model:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#bdae97] transition-colors cursor-pointer">
              <Building2 className="w-10 h-10 text-[#9f1e13] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#9f1e13] mb-3">Clinics & Practitioners</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                Add data-driven insight to osteopathy, chiro, or aesthetics.
              </p>
              <div className="text-[#9f1e13] font-bold flex items-center gap-2 group-hover:underline">
                Explore Clinic Path <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#bdae97] transition-colors cursor-pointer">
              <Store className="w-10 h-10 text-[#9f1e13] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#9f1e13] mb-3">Pharmacies</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                Transition from reactive retail to a proactive health destination.
              </p>
              <div className="text-[#9f1e13] font-bold flex items-center gap-2 group-hover:underline">
                Explore Pharmacy Path <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#bdae97] transition-colors cursor-pointer">
              <HeartPulse className="w-10 h-10 text-[#9f1e13] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#9f1e13] mb-3">Gyms & Health Clubs</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                Increase retention and PT value with metabolic & recovery testing.
              </p>
              <div className="text-[#9f1e13] font-bold flex items-center gap-2 group-hover:underline">
                Explore Gym Path <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#bdae97] transition-colors cursor-pointer">
              <BookOpen className="w-10 h-10 text-[#9f1e13] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#9f1e13] mb-3">Academies & CPD</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                Train the practitioners of the future with certified test-based courses.
              </p>
              <div className="text-[#9f1e13] font-bold flex items-center gap-2 group-hover:underline">
                Explore Academy Path <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#bdae97] transition-colors cursor-pointer">
              <ShieldCheck className="w-10 h-10 text-[#9f1e13] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#9f1e13] mb-3">Retreats & Resorts</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                Bring test-based health into premium wellness experiences.
              </p>
              <div className="text-[#9f1e13] font-bold flex items-center gap-2 group-hover:underline">
                Explore Retreat Path <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#bdae97] transition-colors cursor-pointer">
              <UserCheck className="w-10 h-10 text-[#9f1e13] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#9f1e13] mb-3">Certified Consultants</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                Learn the method. Launch your pathway. Lead with confidence.
              </p>
              <div className="text-[#9f1e13] font-bold flex items-center gap-2 group-hover:underline">
                Explore Consultant Path <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The Commercial Edge */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-black uppercase tracking-[0.2em] font-bold text-sm block mb-4">THE COMMERCIAL EDGE</span>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-[#9f1e13]">New Revenue, Zero Guesswork</h2>
            <p className="text-xl mt-4 max-w-2xl mx-auto font-medium text-gray-700">
              TBN is designed to sit alongside your existing treatments—not replace them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-gray-200 text-center">
              <Zap className="w-12 h-12 text-[#9f1e13] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-[#9f1e13]">Rapid Screening</h3>
              <p className="text-gray-600">Results in &lt;15 minutes to spark instant client engagement.</p>
            </div>
            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-gray-200 text-center">
              <Repeat className="w-12 h-12 text-[#9f1e13] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-[#9f1e13]">Recurring Income</h3>
              <p className="text-gray-600">Built-in retesting cycles and protocol subscriptions.</p>
            </div>
            <div className="bg-[#faf8f5] p-8 rounded-2xl border border-gray-200 text-center">
              <Users className="w-12 h-12 text-[#9f1e13] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3 text-[#9f1e13]">Specialist Support</h3>
              <p className="text-gray-600">Access our Collective of doctors and experts for complex cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIMITED OFFER Package */}
      <section className="py-24 bg-[#9f1e13] text-[#faf8f5] overflow-hidden">
        <div className="container max-w-5xl relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#9f1e13] font-bold tracking-widest uppercase text-xs mb-8">
            LIMITED OFFER
          </span>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">The £6,000 Rollout Package</h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-16 text-white/90">
            We are currently selecting a limited number of partners to receive our full launch suite at <strong className="text-white">zero cost</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-black/20 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Free Certified TBN Training</h3>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Value: £2,000</p>
            </div>
            <div className="bg-black/20 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Free Marketing & Launch Assets</h3>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Value: £2,500</p>
            </div>
            <div className="bg-black/20 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Free Annual Microsite & Regional SEO</h3>
              <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Value: £1,500</p>
            </div>
          </div>
          
          <div className="mt-16 italic text-2xl font-playfair max-w-3xl mx-auto border-t border-white/20 pt-16">
            "TBN is not just a testing pathway. It is a leadership system for businesses ready to transform client outcomes."
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 bg-[#faf8f5] border-y border-gray-200">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-[#9f1e13] uppercase tracking-[0.2em] font-bold text-sm block mb-4">Calculate Your Potential</span>
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">How Much Could You Earn?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Test-Based Nutrition creates powerful recurring revenue streams. Slide to see your potential monthly income based on client volume.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-12 md:gap-16">
            
            {/* Slider Column */}
            <div className="flex-1 w-full order-2 md:order-1">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Active Clients</p>
                  <p className="text-2xl font-bold text-gray-900 transition-all duration-300">
                    {earningTiers[clientTier].clients}
                  </p>
                </div>
              </div>

              <div className="relative">
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  step="1" 
                  value={clientTier} 
                  onChange={(e) => setClientTier(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#9f1e13]"
                />
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-4 px-1">
                  {earningTiers.map((tier, index) => (
                    <div 
                      key={index} 
                      className={`transition-colors duration-300 ${clientTier === index ? 'text-[#9f1e13] scale-110' : 'hover:text-gray-600'}`}
                      onClick={() => setClientTier(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      {tier.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Earnings Column */}
            <div className="w-full md:w-1/3 md:border-l md:border-gray-100 md:pl-12 order-1 md:order-2 text-center md:text-left">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Projected Income</p>
              <p className="text-[#9f1e13] font-bold text-4xl md:text-5xl font-playfair transition-all duration-300 leading-none mb-2">
                {earningTiers[clientTier].value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                {earningTiers[clientTier].desc}
              </p>
            </div>
            
          </div>
          <div className="text-center mt-6 text-xs text-gray-400 font-medium max-w-3xl mx-auto">
            * Note: These are estimated projections based on typical partner engagement, test volume, and protocol subscriptions. Actual earnings may vary.
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section (Form) */}
      <section id="apply" className="py-24 bg-[#1a1a1a] text-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Ready to Lead?</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
              Spaces are limited during this national rollout phase.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="fullName" className="text-sm font-semibold text-white/90">Full Name *</label>
                  <Input id="fullName" placeholder="Your Name" className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/30" required />
                </div>
                <div className="space-y-3">
                  <label htmlFor="companyName" className="text-sm font-semibold text-white/90">Clinic / Company Name *</label>
                  <Input id="companyName" placeholder="Your Business Name" className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/30" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-white/90">Email Address *</label>
                  <Input id="email" type="email" placeholder="email@address.com" className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/30" required />
                </div>
                <div className="space-y-3">
                  <label htmlFor="partnershipType" className="text-sm font-semibold text-white/90">Partnership Type *</label>
                  <select id="partnershipType" defaultValue="" className="flex h-14 w-full rounded-md border border-white/10 bg-[#1a1a1a] text-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f1e13]" required>
                    <option value="" disabled className="text-white/50">Select a category</option>
                    <option value="clinic">Clinic / Private Practice</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="healthClub">Health Club / Gym</option>
                    <option value="hub">TBN Hub</option>
                    <option value="academy">Training Academy</option>
                    <option value="retreat">Retreat / Resort</option>
                    <option value="expert">Specialist / Consultant</option>
                    <option value="ambassador">TBN Brand Ambassador</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full h-16 text-sm font-bold tracking-widest bg-[#9f1e13] hover:bg-[#9f1e13] text-white rounded-xl uppercase">
                  Apply to Partner With TBN Today
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerWithUs2;
