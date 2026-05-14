import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, CheckCircle2, Building2, Beaker, Zap, 
  BookOpen, Rocket, Award, Users, Stethoscope, 
  HeartPulse, Brain, Store, Presentation, UserCheck, ShieldCheck
} from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200";

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen bg-[#fcfaf7]">
      <Navbar alwaysSolid={false} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Partner With Test-Based Nutrition"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <span className="text-[#fcfaf7] uppercase tracking-[0.2em] font-semibold text-sm">
              PARTNER WITH TEST-BASED NUTRITION
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
              Learn. Launch. Lead.
            </h1>
            <p className="text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
              Bring the world’s first test-based nutrition integration solution into your clinic, pharmacy, health club, gym, resort, academy or wellness business.
            </p>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl hidden md:block">
              Test-Based Nutrition is pioneering a new era of personalised preventative health by helping purpose-driven businesses integrate advanced testing, rapid point-of-care screening, Omega Balance testing, Gut Health testing, specialist-led education and commercial client pathways into their existing services.
            </p>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl hidden md:block">
              We support clinics, pharmacies, health clubs, gyms, resorts, training academies, practitioners, coaches and specialists to bring test-based nutrition into real-world practice — with the training, systems, marketing and specialist support to launch confidently and grow sustainably.
            </p>
            <div className="space-y-2 text-[#fcfaf7] font-medium border-l-2 border-[#7a2a33] pl-4 italic">
              <p>This is not just a test.</p>
              <p>This is not just a product.</p>
              <p>This is not another wellness trend.</p>
              <p>This is a complete integration solution for businesses ready to educate, empower and transform client outcomes.</p>
            </div>
            <div className="pt-4">
              <Button size="lg" className="bg-[#7a2a33] hover:bg-[#5a1a23] text-white px-8 rounded-full shadow-lg" asChild>
                <a href="#apply">
                  Apply to Partner With TBN <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With TBN */}
      <section className="py-24 bg-[#fcfaf7]">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#7a2a33]">Why Partner With TBN?</h2>
          <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Because the future of health is personalised, preventative and test-based.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left py-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#7a2a33]">The Shift in Demand</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> Clients are no longer satisfied with generic advice, isolated treatments or supplement guesswork.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> They want to understand what their body needs.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> They want clearer insight and personalised education.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#7a2a33] shrink-0 mt-0.5" /> They want practical next steps and ongoing support.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#7a2a33]">The Solution</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TBN helps businesses meet that need with a structured, science-led and commercially sustainable model.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                We help you move from offering individual services to building complete client pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Model */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#7a2a33] uppercase tracking-[0.2em] font-bold text-sm">The TBN Business Integration Model</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#7a2a33] mt-4">Learn. Launch. Lead.</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              TBN gives purpose-driven businesses a clear pathway to integrate test-based nutrition without building the system from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 border border-[#7a2a33] rounded-3xl bg-[#fcfaf7]">
              <div className="w-16 h-16 mx-auto bg-[#7a2a33] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">1</div>
              <h3 className="text-xl font-bold font-playfair text-[#7a2a33]">Learn</h3>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Train in the TBN Method</h4>
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                We train you and your team in the TBN Method, testing ecosystem, consultation pathway, client education model and compliance-conscious communication. You learn how to explain test-based nutrition, introduce screening responsibly, understand foundational testing, guide clients through a structured pathway and communicate with confidence.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-left font-medium">The goal is to give your business the knowledge, structure and language to bring personalised preventative health into your work professionally.</p>
              </div>
            </div>

            <div className="text-center space-y-4 p-8 border border-[#7a2a33] rounded-3xl bg-[#fcfaf7]">
              <div className="w-16 h-16 mx-auto bg-[#7a2a33] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">2</div>
              <h3 className="text-xl font-bold font-playfair text-[#7a2a33]">Launch</h3>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Bring it into real-world service</h4>
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                We support you in launching TBN inside your business through consultations, test days, workshops, events, member programmes, pharmacy screening pathways, CPD courses, retreats or specialist-led education sessions. Includes: launch planning, marketing assets, campaign copy, consultation structures and more.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-left font-medium">This is where the TBN Method becomes part of your business — not an add-on, but a structured client pathway.</p>
              </div>
            </div>

            <div className="text-center space-y-4 p-8 border border-[#7a2a33] rounded-3xl bg-[#fcfaf7]">
              <div className="w-16 h-16 mx-auto bg-[#7a2a33] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">3</div>
              <h3 className="text-xl font-bold font-playfair text-[#7a2a33]">Lead</h3>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Become known for prevention</h4>
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                We help you build a recognised position in your sector through ongoing client pathways, retesting, education, specialist support, recurring wellness programmes and regional visibility. The aim is to support stronger engagement, better retention, new revenue streams and long-term business growth.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-left font-medium">TBN is not just a testing pathway. It is a training, integration and leadership system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help You Integrate */}
      <section className="py-24 bg-[#7a2a33] text-[#fcfaf7]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold">What We Help You Integrate</h2>
            <p className="text-xl mt-4 max-w-2xl mx-auto font-light opacity-90">
              A complete test-based nutrition system for your business. TBN gives partners the structure, training and tools to bring test-based nutrition into their existing model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <Zap className="w-10 h-10 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">Rapid Point-of-Care Screening</h3>
              <p className="text-sm leading-relaxed opacity-90 mb-4">
                Selected results in under 15 minutes. Our pioneering rapid screening model creates fast, engaging and education-led conversations around key wellness areas such as energy, metabolic health, inflammation, hormones, recovery and performance.
              </p>
              <p className="text-xs font-semibold opacity-75">Ideal for: Test days, clinic consultations, pharmacy pathways, corporate wellness, retreats.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <Beaker className="w-10 h-10 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">World-Leading Omega Balance Testing</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Omega Balance testing is one of TBN’s foundational pathways. It helps clients understand their Omega-6:3 balance, Omega-3 Index, cell membrane fluidity, mental strength markers and protection value. This creates powerful education around cellular health and long-term wellbeing.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <HeartPulse className="w-10 h-10 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">Gut Health Testing</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Gut health connects with digestion, nutrient absorption, skin health, mood, energy, immune function, hormone health and overall wellbeing. Our pathway helps partners educate clients around digestive function, internal balance and personalised nutrition foundations.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm lg:col-span-2">
              <Users className="w-10 h-10 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">Specialist-Led Education</h3>
              <p className="text-sm leading-relaxed opacity-90 mb-4">
                TBN is supported by a growing collective of doctors, practitioners, performance experts, therapists, coaches and category specialists across Women’s health, Men’s health, Skin health, Gut health, Neurodivergence, Chronic pain, Sports performance and Longevity.
              </p>
              <p className="text-xs font-semibold opacity-75">You can either access specialist support through TBN — or apply to become part of the TBN Specialist Collective.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <ShieldCheck className="w-10 h-10 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">Advanced Private Testing</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Where relevant, TBN can help partners understand how advanced private testing pathways may sit within a wider client journey. Testing is guided by consultation and used to support education-led health conversations, not diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="py-24 bg-[#fcfaf7]">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[#7a2a33] uppercase tracking-[0.2em] font-bold text-sm">Who Can Partner With TBN?</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#7a2a33] mt-4">One integration system. Multiple partner pathways.</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Each partner type has different goals, clients and commercial opportunities. Find the pathway designed for your business model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Host a TBN Hub */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <Building2 className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Host a TBN Hub</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Become a recognised local destination for test-based nutrition.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                Ideal for clinics, pharmacies, health clubs, wellness centres and multidisciplinary practices that want to host regular test days, workshops, consultations and client education events. Bring the TBN Method into your venue and become a regional access point.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Hosting a TBN Hub <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Clinics & Practitioners */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <Stethoscope className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Clinics & Practitioners</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Add test-based nutrition without building the system yourself.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                For osteopaths, chiropractors, skin clinics, pain specialists, nutritional therapists and private health professionals. We help you move beyond guessing with supplements, allowing you to create structured, test-based transformation programmes.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Clinics & Practitioners <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Pharmacies */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <Store className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Pharmacies</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Bring personalised preventative health into community pharmacy.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                Through rapid screening, Omega Balance testing, results reviews and education pathways, forward-thinking pharmacies can expand beyond transactional healthcare and become local hubs for proactive wellness support.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Pharmacy Partnerships <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Health Clubs & Gyms */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <HeartPulse className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Health Clubs & Gyms</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Lead the next era of full-body health optimisation.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                Modern members want energy, recovery, performance and measurable progress. Add premium test-based health insight to your member experience to support retention, empower PTs, and create powerful new revenue streams.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Health Club & Gyms <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Academies */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <BookOpen className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Academies & CPD</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Train the practitioners of the future.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                Collaborate with TBN to offer certified test-based nutrition CPD courses to your students and alumni networks. Support your graduates with a practical commercial pathway in preventative health education.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Academy Partnerships <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Retreats */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <ShieldCheck className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Retreats & Resorts</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Premium test-based wellness experiences.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                Wellness guests want insight, transformation and meaningful next steps. Offer guest screening pathways, health education talks, and post-retreat support pathways that build ongoing client relationships.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Retreats & Resorts <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Events */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <Presentation className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Events & Workshops</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Educate first. Build trust. Create demand.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                Run powerful education-led events that introduce your community to test-based nutrition. We provide event structures, marketing copy, and pathways to convert attendees into consultations.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Events & Workshops <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Certified Consultant */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-full group hover:border-[#7a2a33] transition-colors">
              <UserCheck className="w-10 h-10 text-[#7a2a33] mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-[#7a2a33] mb-2">Certified Consultant</h3>
              <p className="text-sm text-gray-700 font-medium mb-4">Learn the method. Launch your pathway.</p>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                For practitioners, coaches, PTs, and wellness entrepreneurs who want to fully understand and deliver the TBN pathway. Get trained to educate clients, guide consultations, and build a thriving business.
              </p>
              <div className="text-[#7a2a33] text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Consultant Training <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Specialist Collective */}
            <div className="bg-[#7a2a33] rounded-3xl p-8 border border-[#7a2a33] shadow-md flex flex-col h-full group text-[#fcfaf7]">
              <Brain className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">Specialist Collective</h3>
              <p className="text-sm text-white/90 font-medium mb-4">Support the movement. Shape the education.</p>
              <p className="text-sm text-white/80 leading-relaxed flex-1 mb-6">
                For experienced professionals who want to contribute to education, practitioner development, or specialist referral pathways across Women's health, Men's health, Skin, Gut, Pain, Performance and Longevity.
              </p>
              <div className="text-white text-sm font-bold flex items-center gap-2 group-hover:underline cursor-pointer">
                Explore Specialist Collective <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commercial Opportunity & Package */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#7a2a33] uppercase tracking-[0.2em] font-bold text-sm">The Commercial Opportunity</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#7a2a33]">Add new income without replacing what you already do.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              TBN is designed to seamlessly integrate into your existing business model, sitting perfectly alongside osteopathy, pharmacy, aesthetics, PT, retreats, and more.
            </p>
            <div className="bg-[#fcfaf7] border border-gray-200 rounded-3xl p-6">
              <h4 className="font-bold text-[#7a2a33] mb-3">Revenue Opportunities Include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Rapid screening appts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Consultation packages</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Omega & Gut tests</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Product subscriptions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Retesting pathways</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Workshops & events</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 font-medium">TBN helps you build longer-term client pathways that combine education, testing, and ongoing support. This means stronger retention and sustainable growth.</p>
          </div>

          <div className="bg-[#7a2a33] text-[#fcfaf7] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10 blur-xl"></div>
            <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-2 block">Available for selected partners during rollout phase</span>
            <h3 className="text-3xl font-playfair font-bold text-white mb-8">Free Training & Marketing Package</h3>
            
            <div className="space-y-6">
              <div className="border-l-2 border-white/20 pl-4">
                <h4 className="font-bold text-white mb-1">Free Certified TBN Training</h4>
                <p className="text-sm text-white/80 mb-1">Training in the TBN Method, testing ecosystem, consultation pathway and client education process.</p>
                <p className="text-xs font-bold text-[#fcfaf7]/60 uppercase tracking-wider">Value: £2,000</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <h4 className="font-bold text-white mb-1">Free Marketing Support & Launch Assets</h4>
                <p className="text-sm text-white/80 mb-1">Campaign copy, event assets, test day support, and positioning.</p>
                <p className="text-xs font-bold text-[#fcfaf7]/60 uppercase tracking-wider">Value: £2,500</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <h4 className="font-bold text-white mb-1">Free Annual Microsite Listing</h4>
                <p className="text-sm text-white/80 mb-1">A featured presence on Test-BasedNutrition.com to support visibility.</p>
                <p className="text-xs font-bold text-[#fcfaf7]/60 uppercase tracking-wider">Value: £1,500</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-xl font-bold text-white">Total Package Value: £6,000+</p>
              <p className="text-sm text-white/80">Provided free during this selected rollout phase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference & Who we look for */}
      <section className="py-24 bg-[#fcfaf7]">
        <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#7a2a33]">Who We Are Looking For</h2>
            <p className="text-gray-600 leading-relaxed">
              TBN is selective. We are not looking for every clinic or wellness business. We are looking for purpose-driven partners who want to raise the standard of client education.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-800 font-medium pb-4">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Purpose-driven</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Education-led</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Client-centred</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#7a2a33]" /> Open to science</li>
            </ul>
            <div className="bg-white p-6 border border-gray-200 rounded-2xl">
              <h4 className="font-bold text-[#7a2a33] mb-3">This is for you if:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Your clients are asking more nutrition questions</li>
                <li>• You want to stop guessing with supplements</li>
                <li>• You want to offer deeper support & transformation</li>
                <li>• You want to build recurring income</li>
                <li>• You want a system to launch quickly and professionally</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#7a2a33]">What Makes TBN Different?</h2>
            <p className="text-gray-600 leading-relaxed font-semibold">
              We are the integration specialists. Many companies provide tests. Some provide supplements. Some offer training. TBN brings the full ecosystem together.
            </p>
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-bold text-gray-900 text-sm">World-first integration model</h4>
                <p className="text-sm text-gray-600">A complete system for bringing test-based nutrition into real businesses.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Certified training & Specialist-led education</h4>
                <p className="text-sm text-gray-600">Understand the pathway confidently, with access to a collective of experts.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Compliance-conscious communication</h4>
                <p className="text-sm text-gray-600">Educational, non-diagnostic, responsible messaging designed for real-world practice.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Commercial structure & Marketing support</h4>
                <p className="text-sm text-gray-600">Designed to create testing revenue, recurring income, and regional visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Section (Form) */}
      <section id="apply" className="py-24 bg-[#1a1a1a] text-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Apply to Partner With Test-Based Nutrition</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              We are now accepting applications from selected clinics, pharmacies, health clubs, gyms, resorts, training academies, practitioners, coaches and specialists who want to be part of the next phase of test-based nutrition.
            </p>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
              This opportunity is for people and businesses who are ready to learn the TBN Method, launch personalised preventative health pathways, and lead the next era of client education and transformation. Spaces are limited during this rollout phase.
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
                  <select id="partnershipType" defaultValue="" className="flex h-14 w-full rounded-md border border-white/10 bg-[#1a1a1a] text-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2a33]" required>
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
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-white/90">Tell us about your facility & goals *</label>
                <Textarea 
                  id="message" 
                  placeholder="How many practitioners do you have? What is your primary patient demographic?" 
                  className="min-h-[160px] bg-black/20 border-white/10 text-white placeholder:text-white/30 resize-y p-4" 
                  required 
                />
              </div>

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full h-16 text-sm font-bold tracking-widest bg-[#7a2a33] hover:bg-[#5a1a23] text-white rounded-xl">
                  APPLY TO PARTNER WITH TBN
                </Button>
                <p className="text-xs text-center text-white/50 mt-4">
                  Successful applicants will be contacted by the TBN team with next steps, onboarding information and training access.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
