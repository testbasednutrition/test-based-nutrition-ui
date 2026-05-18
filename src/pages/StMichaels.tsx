import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar as CalendarIcon, CheckCircle2, Waves, Dumbbell, Utensils, Droplet, UserCheck } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const StMichaels = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [packageType, setPackageType] = useState<"standard" | "premium">("standard");

  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <Navbar alwaysSolid={false} />

      {/* Hero Section with Video */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://stmichaelsresort.com/video/hero-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10"></div>
        
        <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl mx-auto mt-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img src="/logos/test-based-logo-new.png" alt="TBN" className="h-10 md:h-12 object-contain brightness-0 invert" />
            <span className="text-white text-xl font-light">×</span>
            {/* St Michaels Logo Placeholder (using text if logo not available) */}
            <h2 className="text-white font-playfair text-2xl md:text-3xl font-bold tracking-wider uppercase">St Michaels Resort</h2>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            A New Era of Wellness Retreats
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the ultimate integration of luxury Cornish hospitality and elite test-based preventative healthcare.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest text-xs px-8 h-14"
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-widest text-xs px-8 h-14"
              onClick={() => document.getElementById('discover-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover the Programme
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="discover-section" className="pt-24 md:pt-32 pb-12 md:pb-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">The Collaboration</p>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">Where Science Meets Serenity</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Test-Based Nutrition has partnered with St Michaels Resort in Falmouth to create an unparalleled wellness experience. We have integrated our clinical, data-driven methodologies directly into the resort's award-winning Spa, Health Club, and Kitchens to deliver a retreat that doesn't just relax you—it transforms your biological baselines.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits / Areas of Integration */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Spa */}
            <div className="flex flex-col bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 md:h-56 overflow-hidden relative">
                <img src="https://stmichaelsresort.com/uploads/PageSectionImage/20230824092654.jpeg" alt="Spa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-grow">
                <Waves className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-3">Hydrothermal Recovery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Targeted hydrothermal protocols designed to reduce systemic inflammation, enhance cellular recovery, and modulate the nervous system based on your specific testing profile.
                </p>
              </div>
            </div>

            {/* Health Club */}
            <div className="flex flex-col bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 md:h-56 overflow-hidden relative">
                <img src="https://stmichaelsresort.com/uploads/PageSectionImage/20230426131418.jpeg" alt="Health Club" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-grow">
                <Dumbbell className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-3">Performance Testing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilise the state-of-the-art Health Club for functional movement screening, cardiovascular output testing, and bespoke training sessions guided by our elite performance directors.
                </p>
              </div>
            </div>

            {/* Nourish / Dining */}
            <div className="flex flex-col bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 md:h-56 overflow-hidden relative">
                <img src="https://stmichaelsresort.com/uploads/PageSectionImage/20230824093338.jpeg" alt="Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-grow">
                <Utensils className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-3">Targeted Nutrition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Collaborating with Brasserie on the Bay, your daily nutritional intake is tailored to support your specific biomarker needs, from anti-inflammatory menus to hormonal balance.
                </p>
              </div>
            </div>

            {/* Specialist Consults */}
            <div className="flex flex-col bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 md:h-56 overflow-hidden relative">
                <img src="https://stmichaelsresort.com/uploads/PageSectionImage/20260501102410.jpeg" alt="Consultation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-grow">
                <UserCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-3">Specialist Insight</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  1-to-1 consultations during your stay with TBN clinical specialists to review your test results and map out your long-term preventative health strategy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-20 md:py-32 bg-[#1a3646] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Booking Details */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Reserve Your Spot</p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Book Your TBN Retreat</h2>
              <p className="text-white/80 leading-relaxed mb-10 text-lg">
                Select your preferred dates to begin your wellness journey at St Michaels Resort. All packages include luxury accommodation, full board targeted nutrition, comprehensive TBN testing, and exclusive access to the hydrothermal spa.
              </p>

              <div className="space-y-6 mb-10">
                <div 
                  className={`p-6 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${packageType === 'standard' ? 'border-white bg-white/10' : 'border-white/20 hover:border-white/40'}`}
                  onClick={() => setPackageType('standard')}
                >
                  <div>
                    <h4 className="font-bold text-xl mb-1">Foundational Retreat</h4>
                    <p className="text-sm text-white/70">3 Nights • Core Biomarker Testing • Spa Access</p>
                  </div>
                  <div className="text-right">
                    <p className="font-playfair text-2xl font-bold">£495</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/60">Per Person</p>
                  </div>
                </div>

                <div 
                  className={`p-6 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${packageType === 'premium' ? 'border-white bg-white/10' : 'border-white/20 hover:border-white/40'}`}
                  onClick={() => setPackageType('premium')}
                >
                  <div>
                    <h4 className="font-bold text-xl mb-1">Advanced Performance</h4>
                    <p className="text-sm text-white/70">5 Nights • Advanced Pathway Testing • 1-to-1 Consults</p>
                  </div>
                  <div className="text-right">
                    <p className="font-playfair text-2xl font-bold">£895</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/60">Per Person</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Calendar UI */}
            <div className="bg-white rounded-[24px] p-6 md:p-10 text-stone-900 shadow-2xl">
              <h3 className="text-2xl font-playfair font-bold mb-2">Select Your Dates</h3>
              <p className="text-sm text-muted-foreground mb-8">Choose your arrival date. Departures are automatically calculated based on your package.</p>
              
              <div className="flex justify-center mb-8 bg-stone-50 rounded-xl p-4 border border-stone-100">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-none"
                  classNames={{
                    day_selected: "bg-[#1a3646] text-white hover:bg-[#1a3646] hover:text-white focus:bg-[#1a3646] focus:text-white",
                    day_today: "bg-stone-200 text-stone-900",
                  }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                  <span className="text-sm font-semibold text-stone-500">Selected Date</span>
                  <span className="font-bold">{date ? date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }) : 'None selected'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                  <span className="text-sm font-semibold text-stone-500">Guests</span>
                  <span className="font-bold">2 Adults</span>
                </div>
              </div>

              <Button className="w-full mt-8 bg-[#1a3646] hover:bg-[#112430] text-white h-14 font-bold uppercase tracking-widest text-xs">
                Continue to Booking <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-[10px] text-center text-stone-400 mt-4 uppercase tracking-wider">Secure Payment via St Michaels Portal</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StMichaels;
