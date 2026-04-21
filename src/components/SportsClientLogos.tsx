import React from "react";

const partners = [
  "/logos/clients/sports/logo1.png",
  "/logos/clients/sports/logo2.png",
  "/logos/clients/sports/logo3.png",
  "/logos/clients/sports/logo4.png",
  "/logos/clients/sports/logo5.png",
  "/logos/clients/sports/logo6.png"
];

const SportsClientLogos = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      <div className="bg-transparent relative border-t border-gray-200/50">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20 py-8 md:py-12 px-4 max-w-[1440px] mx-auto">
          {partners.map((logoUrl, i) => (
            <img
              key={i}
              src={logoUrl}
              alt={`Sports Partner Logo ${i}`}
              className={`h-[55px] sm:h-[70px] md:h-[80px] lg:h-[95px] object-contain opacity-100 hover:scale-[1.03] transition-transform cursor-pointer grayscale-0 hover:grayscale-0 mix-blend-multiply ${
                logoUrl.includes('logo4') ? 'brightness-110 contrast-125' : ''
              }`}
            />
          ))}
        </div>
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
