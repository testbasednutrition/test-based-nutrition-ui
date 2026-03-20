import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TrendingUp,
  Award,
  Users,
  Building2,
  Dumbbell,
  Microscope,
  Stethoscope,
  Quote,
  CheckCircle2,
  Activity,
  Star,
  Store
} from "lucide-react";

// Using the logo paths for Trusted By section
const partners = [
  "/logos/partner_1.png",
  "/logos/partner_2.png",
  "/logos/partner_3.png",
  "/logos/partner_4.png",
  "/logos/partner_5.png",
  "/logos/partner_6.png",
];

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-foreground">
      <Navbar alwaysSolid />

      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 container px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6 font-montserrat">
              Partner Network
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-[1.05] mb-6 tracking-tight">
              Partner With Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-playfair text-foreground/90 font-medium mb-8 leading-snug">
              Elevate Your Clinic, Pharmacy, or Health Club.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Transform patient outcomes and increase revenue with 15-Minute Point of Care Testing. Join the Test-Based Nutrition network to empower your facility with cutting-edge diagnostics, comprehensive training, and lucrative co-marketing opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-6 text-sm font-montserrat font-semibold tracking-wider bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#apply">Become a Partner</a>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-sm font-montserrat font-semibold tracking-wider border-primary text-primary hover:bg-primary/5" asChild>
                <a href="https://calendar.app.google/CDYDAvjFmMvJP3S88" target="_blank" rel="noopener noreferrer">Talk to Our Team</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full relative mt-8 lg:mt-0">
            <div className="aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Medical Professionals" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Mock Floating Detail Card */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Microscope className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-base font-montserrat font-bold text-foreground">15-Minute Results</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Point of Care Diagnostic Testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trusted By */}
        <section className="border-y border-border bg-white py-12 overflow-hidden">
          <div className="container px-6 md:px-12 text-center">
            <p className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-muted-foreground mb-8">
              Trusted by Clinics & Elite Experts
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
              {partners.map((logoUrl, i) => (
                <img
                  key={i}
                  src={logoUrl}
                  alt={`Partner ${i + 1}`}
                  className="h-8 md:h-12 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Partner With Us */}
        <section className="py-24 md:py-32 container px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Why Partner With Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide the framework, technology, and advanced clinical training you need to support your clients while building a profitable extension to your existing practice.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Grow Revenue Together", desc: "Unlock robust new revenue streams through high-margin testing frameworks and sustainable client subscriptions." },
              { icon: Users, title: "Co-Marketing Opportunities", desc: "Access bespoke brand kits, targeted marketing, and SEO-optimized microsites tailored for your audience." },
              { icon: Award, title: "Dedicated Support", desc: "Enjoy continuous 1-on-1 support from an assigned Partner Success Manager and our elite clinical advisors." },
              { icon: Activity, title: "Data-Driven Outcomes", desc: "Replace guesswork with precision. Offer instant diagnostic results that map directly to personalized health protocols." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-montserrat font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Partnership Types / Tiers */}
        <section className="py-24 md:py-32 bg-[#F7F7F7] border-y border-border">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Partnership Pathways</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Choose the structural model that best fits your current business capabilities and clinical ambitions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  num: "1", 
                  title: "TBN REFERRAL\nPARTNER", 
                  items: [
                    "TBN REFERRAL PLAN", 
                    "TEST IN CLINIC", 
                    "LAUNCH EVENT", 
                    "THE TBN TEAM WILL RUN YOUR CONSULTATIONS AND RESULTS REVIW"
                  ],
                  circleBg: "bg-[#D9BFA9]",
                  cardBg: "bg-[#CEB8A8]"
                },
                { 
                  num: "2", 
                  title: "TBN CLINIC\nHOST PARTNER", 
                  items: [
                    "120 DAY TBN CLINIC", 
                    "LAUNCH EVENT", 
                    "WEEKLY/BI WEEKLY SUPPORT", 
                    "WEEKLY MEETINGS"
                  ],
                  circleBg: "bg-[#B57368]",
                  cardBg: "bg-[#AF7064]"
                },
                { 
                  num: "3", 
                  title: "TBN INDEPENDENT\nPARTNER", 
                  items: [
                    "FULL DAY TRAINING", 
                    "ACCESS TO ALL TRANING VIDEOS", 
                    "LAUNCH EVENT", 
                    "WEEKLY MEETINGS",
                    "MONTHLY MEETINGS"
                  ],
                  circleBg: "bg-[#CC9C98]",
                  cardBg: "bg-[#CE9D97]"
                },
                { 
                  num: "4", 
                  title: "TBN LEADER\nPARTNER", 
                  items: [
                    "REGION OR SPECIALISM LEADER", 
                    "FULL COACHING & SUPPORT", 
                    "ACCESS TO ALL TRANING VIDEOS", 
                    "LAUNCH EVENT",
                    "WEEKLY MEETINGS",
                    "MONTHLY MEETINGS"
                  ],
                  circleBg: "bg-[#999999]",
                  cardBg: "bg-[#9A989A]"
                }
              ].map((tier, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Number Circle */}
                  <div className={`w-28 h-28 rounded-full ${tier.circleBg} flex items-center justify-center text-[3.5rem] font-bold text-white mb-6 shadow-sm`}>
                    {tier.num}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-center font-montserrat font-bold tracking-widest text-[#111111] leading-tight mb-6 h-12 flex items-center whitespace-pre-line text-sm md:text-base">
                    {tier.title}
                  </h3>
                  
                  {/* Content Card */}
                  <div className={`w-full ${tier.cardBg} rounded-[2rem] p-8 text-white h-full shadow-lg`}>
                    <ul className="space-y-4 text-center">
                      {tier.items.map((item, j) => (
                        <li key={j} className="font-montserrat font-bold text-xs leading-snug tracking-wider">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* How You Earn Section */}
        <section className="py-24 md:py-32 bg-[#F9F6F0] border-y border-border overflow-hidden">
          <div className="container px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase mb-6">
                How You Earn
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start max-w-6xl mx-auto">
              {/* Retail Column */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-7xl md:text-8xl lg:text-[140px] font-sans font-black tracking-tighter text-[#A12B20] leading-none mb-8">
                  RETAIL
                </h3>
                <p className="text-3xl md:text-4xl font-sans font-bold uppercase mb-6">
                  PROFIT 60%
                </p>
                <p className="text-lg md:text-2xl font-sans font-bold uppercase leading-snug mb-12 max-w-md">
                  CLINICS WILL SELL STOCK WHEN WE ARE NOT THERE RUNNING HUBS
                </p>
                <div className="w-full max-w-md aspect-[4/3] bg-white rounded-2xl p-4 shadow-md border border-border flex items-center justify-center">
                  {/* Using a placeholder for the Ultimate Immune Kit image */}
                  <img 
                    src="https://images.unsplash.com/photo-1629815414695-1f9e9a4e0078?auto=format&fit=crop&q=80&w=800" 
                    alt="Immune Kit Products" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              </div>

              {/* Residual Column */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-7xl md:text-8xl lg:text-[140px] font-sans font-black text-[#A12B20] tracking-tighter leading-none mb-8">
                  RESIDUAL
                </h3>
                <p className="text-3xl md:text-4xl font-sans font-bold uppercase mb-6 leading-tight max-w-md">
                  UP TO 30%<br/>INCOME GROWING SUBS
                </p>
                <p className="text-lg md:text-2xl font-sans font-bold uppercase leading-snug mb-4 max-w-md">
                  WE WILL SUPPORT AT EVERY MILESTONE
                </p>
                <p className="text-2xl md:text-3xl font-sans font-black mb-12">
                  25, 50, 100, 200 SUBSCRIPTIONS
                </p>
                <div className="w-full max-w-md aspect-[4/3] bg-white rounded-2xl p-4 shadow-md border border-border flex items-center justify-center">
                  {/* Using a placeholder for the Zinzino product image */}
                  <img 
                    src="https://images.unsplash.com/photo-1576073719676-e48fad6b4ed9?auto=format&fit=crop&q=80&w=800" 
                    alt="BalanceTest Products" 
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How The Partnership Works Section */}
        <section className="py-16 md:py-24 bg-[#F3F2EE] border-y border-border overflow-hidden">
          <div className="container px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 max-w-5xl mx-auto">
              How The Partnership Works
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start relative">
              
              {/* Left Column: Image overlay */}
              <div className="md:col-span-1 relative h-full min-h-[300px] flex items-end">
                {/* Visual anchor replicating the finger prick aesthetic */}
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden opacity-90 relative lg:-bottom-8 lg:-left-4">
                   {/* In a real scenario, this would be the specific finger prick image. Using a placeholder here. */}
                   <img 
                      src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
                      alt="Point of care testing"
                      className="w-full h-full object-cover rounded-[2rem]"
                   />
                </div>
              </div>

              {/* Right Column: Text content */}
              <div className="md:col-span-1 space-y-8">
                
                {/* Section 2 */}
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-3">
                    Test-Based Nutrition Provides The System
                  </h3>
                  <ul className="space-y-2 list-disc list-outside ml-5 text-muted-foreground text-sm xl:text-base leading-relaxed">
                    <li>A proven integration framework to embed testing into your clinic, practice or coaching programmes</li>
                    <li>Practitioner training with two in-house leads trained in testing and consultation delivery</li>
                    <li>Structured client programmes and 6-month memberships to support long-term transformation</li>
                    <li>Access to medical and elite performance experts</li>
                    <li>15-minute in-clinic testing technology to support real-time insights</li>
                    <li>Marketing and positioning support to help you launch and grow a testing hub</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-3">
                    You Provide
                  </h3>
                  <ul className="space-y-2 list-disc list-outside ml-5 text-muted-foreground text-sm xl:text-base leading-relaxed">
                    <li>Client or member engagement through your existing community</li>
                    <li>Hosting testing days or consultation clinics within your practice or facility</li>
                    <li>Integrating testing into new client onboarding programmes or existing health and performance services</li>
                    <li>Supporting clients through long-term transformation journeys, using testing, reviews and personalised protocols to guide progress</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="py-24 md:py-32 container px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our streamlined onboarding process gets your facility equipped, your team trained, and your new services launched in weeks, not months.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-[48px] left-[15%] right-[15%] h-px bg-border z-0" />
            {[
              { num: "01", title: "Apply", desc: "Submit an initial expression of interest with details about your facility and current demographic." },
              { num: "02", title: "Review", desc: "Meet with our Partnership Team to discuss testing integration, equipment needs, and financial projections." },
              { num: "03", title: "Onboard & Train", desc: "Receive diagnostic equipment and complete comprehensive Phlebotomy and CPD clinical training." },
              { num: "04", title: "Launch", desc: "Go live with co-branded marketing assets, SEO microsites, and ongoing dedicated success management." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-3xl font-playfair font-bold text-primary mb-8 transition-transform hover:scale-110">
                  {step.num}
                </div>
                <h3 className="text-lg font-montserrat font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Benefits Section */}
        <section className="py-24 md:py-32 bg-stone-900 text-stone-100 overflow-hidden">
          <div className="container px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-widest mb-6 font-montserrat">
                Enablement Resources
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
                Everything You Need to Succeed.
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-10">
                Partnering with Test-Based Nutrition means you don't just get access to world-class lab testing—you get a complete business-in-a-box to execute it flawlessly within your business.
              </p>
              
              <ul className="space-y-6">
                {[
                  "15-Minute Point of Care Diagnostics Equipment",
                  "Full Phlebotomy Certification & Finger Prick Training",
                  "Centrifuge Usage & Rapid Lab Testing Protocols",
                  "Turnkey Co-Branded Marketing Campaigns",
                  "Intermuscular B12 / Vit D Injection Techniques",
                  "Dedicated Partner Success Manager"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-primary" />
                    <span className="font-medium text-lg leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-800 relative isolation-auto">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
                  alt="Training and Enablement" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
              </div>
              
              {/* Overlapping feature badge */}
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white text-foreground p-8 rounded-3xl shadow-2xl border border-border hidden md:block max-w-[300px]">
                <div className="text-4xl font-playfair font-bold text-primary mb-2">CPD</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3 font-montserrat">Accredited</div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Earn CPD accreditations mapped to industry clinical standards while upskilling your commercial healthcare workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section className="py-24 md:py-32 bg-stone-50">
          <div className="container px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-16">What Our Partners Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "Integrating Test-Based Nutrition allowed our clinic to move from subjective consultations to targeted, data-driven protocols. Our revenue has grown, and patient compliance is higher than ever.",
                  author: "Dr. Sarah Jenkins",
                  role: "Clinical Director",
                  company: "Elite Vitality Clinic"
                },
                {
                  quote: "The 15-minute point of care testing completely changed our layout. We now act as an essential preventative health hub for the community, backed by elite training and support.",
                  author: "James Peterson",
                  role: "Head Pharmacist",
                  company: "Wellness Pharmacy Group"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-10 md:p-12 rounded-[2rem] border border-border shadow-sm text-left relative overflow-hidden flex flex-col">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12" />
                  
                  <Quote className="absolute top-10 right-10 w-16 h-16 text-primary/5 z-0" />
                  
                  <div className="flex gap-1.5 mb-8 relative z-10">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  
                  <p className="text-lg font-medium leading-relaxed mb-10 relative z-10 flex-1">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="mt-auto relative z-10 pt-8 border-t border-border">
                    <p className="font-montserrat font-bold text-foreground mb-1">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA Banner */}
        <section className="bg-primary text-center py-32 px-6 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary-foreground mb-8">
              Ready to build something <br className="hidden md:block"/> bigger together?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the cutting edge of preventative healthcare formulation and clinical performance optimization.
            </p>
            <Button size="lg" variant="secondary" className="px-12 py-7 text-sm font-montserrat font-bold tracking-widest text-primary hover:bg-white rounded-full transition-transform hover:scale-105 shadow-xl" asChild>
              <a href="#apply">APPLY NOW</a>
            </Button>
          </div>
        </section>

        {/* 9. Partner Application Form */}
        <section id="apply" className="py-24 md:py-32 container px-6 md:px-12 max-w-4xl mx-auto scroll-m-10">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-16 border border-border shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">Partner Application Form</h2>
              <p className="text-muted-foreground text-lg px-4">
                Fill out the form below to register your interest. Our Partnership Team will review your application and be in touch to schedule a discovery call.
              </p>
            </div>

            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="fullName" className="text-sm font-semibold text-foreground">Full Name *</label>
                  <Input id="fullName" placeholder="Dr. John Doe" className="h-14 bg-stone-50/50" required />
                </div>
                <div className="space-y-3">
                  <label htmlFor="companyName" className="text-sm font-semibold text-foreground">Clinic / Company Name *</label>
                  <Input id="companyName" placeholder="Elite Wellness Clinic" className="h-14 bg-stone-50/50" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-14 bg-stone-50/50" required />
                </div>
                <div className="space-y-3">
                  <label htmlFor="website" className="text-sm font-semibold text-foreground">Website URL</label>
                  <Input id="website" placeholder="https://" className="h-14 bg-stone-50/50" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="partnershipType" className="text-sm font-semibold text-foreground">Partnership Type *</label>
                <select id="partnershipType" defaultValue="" className="flex h-14 w-full rounded-md border border-input bg-stone-50/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required>
                  <option value="" disabled>Select a category</option>
                  <option value="clinic">Clinic / Private Practice</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="healthClub">Health Club / Gym</option>
                  <option value="expert">Independent Expert</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Tell us about your facility & goals *</label>
                <Textarea 
                  id="message" 
                  placeholder="How many practitioners do you have? What is your primary patient demographic?" 
                  className="min-h-[160px] bg-stone-50/50 resize-y p-4" 
                  required 
                />
              </div>

              <div className="pt-8">
                <Button type="submit" size="lg" className="w-full h-16 text-sm font-montserrat font-bold tracking-widest bg-primary hover:bg-primary/90">
                  SUBMIT APPLICATION
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4 font-medium">
                  By submitting this application, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PartnerWithUs;
