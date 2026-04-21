import React from "react";

const partners = [
  "/logos/clients/sports/logo1.png",
  "/logos/clients/sports/logo3.png",
  "/logos/clients/sports/logo2.png",
  "/logos/clients/sports/logo4.png",
  "/logos/clients/sports/logo5.png",
  "/logos/clients/sports/logo6.png"
];

const SportsClientLogos = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      <div className="bg-transparent relative w-max flex animate-[marquee_80s_linear_infinite] hover:[animation-play-state:paused]">
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="flex flex-nowrap shrink-0 items-center justify-around gap-10 md:gap-14 lg:gap-20 pl-10 md:pl-14 lg:pl-20 pb-8">
            {partners.map((logoUrl, i) => (
              <img
                key={`${setIndex}-${i}`}
                src={logoUrl}
                alt={`Sports Partner Logo ${i}`}
                className={`object-contain opacity-100 hover:scale-[1.05] transition-transform duration-500 cursor-pointer shrink-0 ${
                  logoUrl.includes('logo3') 
                    ? 'h-[75px] sm:h-[95px] md:h-[115px] lg:h-[135px]'
                    : logoUrl.includes('logo5')
                    ? 'h-[60px] sm:h-[80px] md:h-[95px] lg:h-[110px]' 
                    : 'h-[45px] sm:h-[60px] md:h-[70px] lg:h-[80px]'
                } ${
                  logoUrl.includes('logo4') ? 'brightness-110 contrast-125' : ''
                }`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="text-center mt-3 px-4">
        <p className="text-[11px] md:text-[12px] font-sans font-semibold text-gray-400 uppercase tracking-widest">
          Delivered by specialists operating within leading performance environments.
        </p>
      </div>
    </div>
  );
};

export default SportsClientLogos;
