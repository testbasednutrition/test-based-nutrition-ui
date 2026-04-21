import React from "react";
import { ArrowRight, Activity, Search, Settings, RefreshCw, MessageCircle, Stethoscope } from "lucide-react";

const HowWeSupportYou = () => {
  const steps = ["Test", "Understand", "Apply", "Retest", "Evolve"];
  
  const includes = [
    { title: "Performance Testing", icon: Activity },
    { title: "Specialist Results Review", icon: Search },
    { title: "Personalised Protocols", icon: Settings },
    { title: "Structured Retesting", icon: RefreshCw },
    { title: "Ongoing Support", icon: MessageCircle },
    { title: "Access to Specialists", icon: Stethoscope },
  ];

  return (
    <div className="w-full mt-20 mb-8 max-w-6xl mx-auto px-4">
      <div className="bg-[#7a2a33] rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-xl border border-[#8c353f]">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none"></div>

        <div className="text-center relative z-10 mb-10">
          <p className="font-bold text-white/80 text-[12px] uppercase tracking-widest mb-3">A performance system — not isolated testing</p>
          <h2 className="font-playfair text-[26px] md:text-[32px] font-bold text-white tracking-wider mb-8 uppercase">
            How We Support You
          </h2>

          {/* Flow Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-white font-semibold text-[13px] uppercase tracking-widest backdrop-blur-sm">
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-white/50 shrink-0" strokeWidth={2} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <h3 className="font-bold text-[11px] text-white/80 uppercase tracking-widest">What This Includes</h3>
            <div className="w-8 h-[1px] bg-white/20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {includes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-black/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 rounded-xl p-4 flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white transition-colors duration-300">
                    <Icon className="w-4 h-4 text-white group-hover:text-[#7a2a33] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="font-bold text-[14px] text-white/90 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeSupportYou;
