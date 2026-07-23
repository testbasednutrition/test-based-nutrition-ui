import React from "react";

const partners = [
  { url: "/logos/clients/cedarhall.webp", alt: "Cedar Hall Clinic", heightClass: "h-[38px] md:h-[52px]" },
  { url: "/logos/clients/conwallskin.webp", alt: "Cornwall Skin Clinic", heightClass: "h-[48px] md:h-[65px]" },
  { url: "/logos/clients/hexagon-health.webp", alt: "Hexagon Health", heightClass: "h-[34px] md:h-[46px]" },
  { url: "/logos/clients/ktg.webp", alt: "KTG Lymphatic Clinic", heightClass: "h-[38px] md:h-[52px]" },
  { url: "/logos/clients/saintmichaels.webp", alt: "St Michael's Clinic", heightClass: "h-[42px] md:h-[56px]" }
];

const ClientLogos = () => {
  return (
    <div className="bg-[#faf8f5] overflow-hidden border-y border-stone-200/60 py-2">
      <div className="flex animate-marquee whitespace-nowrap py-2 md:py-4 items-center">
        {[...partners, ...partners, ...partners, ...partners].map((logo, i) => (
          <img
            key={i}
            src={logo.url}
            alt={logo.alt}
            className={`mx-5 md:mx-9 object-contain opacity-100 hover:scale-105 transition-transform mix-blend-multiply cursor-pointer ${logo.heightClass}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
