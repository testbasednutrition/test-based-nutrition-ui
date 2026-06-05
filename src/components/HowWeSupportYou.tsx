import React from "react";
import { Users, FlaskConical, Target, Sparkles, RefreshCw, TrendingUp, Leaf, Check, Lightbulb } from "lucide-react";

const HowWeSupportYou = () => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      icon: Users,
    },
    {
      num: "02",
      title: "Test",
      icon: FlaskConical,
    },
    {
      num: "03",
      title: "Target",
      icon: Target,
    },
    {
      num: "04",
      title: "Transform",
      icon: Sparkles,
    },
    {
      num: "05",
      title: "Retest",
      icon: RefreshCw,
    },
    {
      num: "06",
      title: "Escalate",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="w-full mt-20 mb-8 max-w-6xl mx-auto px-4">
      <div className="bg-[#faf8f5] rounded-[2rem] p-8 md:p-10 pb-0 md:pb-0 relative overflow-hidden shadow-sm border border-[#dbd4c9] flex flex-col justify-between">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.01] to-transparent pointer-events-none"></div>

        {/* Header Section */}
        <div className="relative z-10 mb-12 flex flex-col items-start">
          {/* Logo Accent */}
          <div className="flex items-center gap-2 mb-6">
            <div className="relative w-8 h-8 rounded-full border-[2.5px] border-black flex items-center justify-center shrink-0">
              <span className="absolute bottom-[-1px] right-[-3px] w-2.5 h-2.5 bg-[#9f1e13] rounded-full border border-white"></span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-playfair font-black text-[13px] tracking-wide text-black uppercase">Test-based</span>
              <span className="font-montserrat font-extrabold text-[7px] tracking-widest text-black/60 mt-0.5">NUTRITION + PERFORMANCE</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-[32px] md:text-[42px] font-bold text-gray-900 leading-tight">
            The TBN Method<span className="text-[#9f1e13] font-sans">.</span><sup className="text-[14px] md:text-[18px] font-medium align-super select-none ml-0.5">TM</sup>
          </h2>
          <p className="font-sans text-[15px] md:text-[17px] text-gray-500 mt-2 font-normal">
            A clear structure for every client journey
          </p>
          <div className="w-10 h-[2.5px] bg-[#9f1e13] mt-4"></div>
        </div>

        {/* Stepper Section */}
        <div className="relative z-10 w-full mb-12">
          {/* Horizontal Connector Line for Desktop (lg) */}
          <div className="absolute top-[64px] left-[8.33%] right-[8.33%] h-[1.5px] bg-[#9f1e13]/20 z-0 hidden lg:block" />

          {/* Connector Dots for Desktop (lg) */}
          {[16.67, 33.33, 50.00, 66.67, 83.33].map((pos, idx) => (
            <div
              key={idx}
              className="absolute w-2.5 h-2.5 bg-[#9f1e13] rounded-full top-[60px] -translate-x-1/2 z-10 hidden lg:block border-2 border-[#faf8f5]"
              style={{ left: `${pos}%` }}
            />
          ))}

          {/* Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group relative flex flex-col">
                  {/* Step Card */}
                  <div className="relative bg-white/70 border border-[#dbd4c9]/50 shadow-sm rounded-2xl pt-8 pb-6 px-3 flex flex-col items-center justify-center min-h-[160px] w-full transition-all duration-300 hover:border-[#9f1e13]/30 hover:shadow-md hover:bg-white">
                    {/* Step bubble */}
                    <div className="absolute top-0 -translate-y-1/2 bg-[#9f1e13] text-white text-[11px] font-montserrat font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                      {step.num}
                    </div>
                    {/* Icon circle */}
                    <div className="w-16 h-16 rounded-full bg-white border border-[#dbd4c9]/60 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-6 h-6 text-[#9f1e13]" strokeWidth={1.8} />
                    </div>
                    {/* Title */}
                    <span className="font-playfair font-bold text-[15px] md:text-[16px] text-gray-900 text-center tracking-wide leading-tight">
                      {step.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leaf Divider */}
        <div className="relative flex items-center justify-center my-6 z-10">
          <div className="w-full h-[1px] bg-[#dbd4c9]"></div>
          <div className="absolute bg-[#faf8f5] px-4 text-[#9f1e13]">
            <Leaf className="w-6 h-6 fill-[#9f1e13]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Bottom Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center w-full mb-12 z-10">
          {/* Left Column - Measurable Conversations */}
          <div className="flex items-start gap-4 md:gap-5">
            <div className="w-12 h-12 rounded-full border-2 border-[#9f1e13] flex items-center justify-center shrink-0 bg-white shadow-sm">
              <Check className="w-6 h-6 text-[#9f1e13]" strokeWidth={3} />
            </div>
            <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-sans font-medium">
              Move from symptom conversations to measurable health conversations through testing, education, personalised pathways and ongoing support.
            </p>
          </div>

          {/* Right Column - TBN Tip Card */}
          <div className="bg-white/40 border border-[#dbd4c9] rounded-2xl p-5 flex items-center gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.01)] w-full">
            <div className="w-12 h-12 rounded-full bg-white border border-[#dbd4c9]/60 flex items-center justify-center shadow-sm shrink-0">
              <Lightbulb className="w-5.5 h-5.5 text-[#9f1e13]" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-[10px] uppercase tracking-widest text-[#9f1e13] mb-0.5">TBN Tip</span>
              <span className="text-[14px] md:text-[15px] text-gray-800 font-semibold leading-snug">
                Discovery is structured listening — not diagnosis.
              </span>
            </div>
          </div>
        </div>

        {/* Red Bottom Bar */}
        <div className="relative -mx-8 md:-mx-10 mt-4 bg-[#9f1e13] py-4 md:py-5 flex items-center justify-center overflow-hidden rounded-b-[2rem] z-10 shrink-0">
          {/* Dot Grid Background */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden md:block"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          />
          <span className="font-montserrat font-bold text-[11px] md:text-[13px] text-white tracking-[0.25em] text-center uppercase">
            Nutrition + Performance. Real Results.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowWeSupportYou;

