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
      <div className="bg-[#fcfaf7] rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-sm border border-[#e9e7dc]">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none"></div>

        <div className="text-center relative z-10 mb-10">
          <p className="font-bold text-[#7a2a33] text-[12px] uppercase tracking-widest mb-3">A performance system — not isolated testing</p>
          <h2 className="font-playfair text-[26px] md:text-[32px] font-bold text-gray-900 tracking-wider mb-8 uppercase">
            How We Support You
          </h2>

          {/* Flow Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="bg-[#7a2a33] border border-[#5c1c24] px-4 py-1.5 rounded-full text-white font-semibold text-[13px] uppercase tracking-widest shadow-sm">
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#7a2a33] shrink-0" strokeWidth={2} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#7a2a33]/20"></div>
            <h3 className="font-bold text-[11px] text-[#7a2a33] uppercase tracking-widest">What This Includes</h3>
            <div className="w-8 h-[1px] bg-[#7a2a33]/20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {includes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#7a2a33] hover:bg-[#5c1c24] transition-colors duration-300 rounded-xl p-4 flex items-center gap-4 shadow-sm group">
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
  );
};

export default HowWeSupportYou;

