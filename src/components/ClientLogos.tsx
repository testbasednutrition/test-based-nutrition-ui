import React from "react";

const partners = [
  "/logos/clients/TBN-Womens Health  (1) (1).png",
  "/logos/clients/TBN-Womens Health  (2) (1).png",
  "/logos/clients/TBN-Womens Health  (2) (3).png",
  "/logos/clients/TBN-Womens Health  (2) (5).png",
  "/logos/hexagon-health-logo.webp"
];

const ClientLogos = () => {
  return (
    <div className="bg-white border-t border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4 md:py-6 items-center">
        {[...partners, ...partners, ...partners, ...partners].map((logoUrl, i) => (
          <img
            key={i}
            src={logoUrl}
            alt={`Partner Logo ${i}`}
            className={`mx-8 md:mx-12 object-contain opacity-100 hover:scale-105 transition-transform mix-blend-multiply cursor-pointer ${
              logoUrl.includes('(2) (5)')
                ? 'h-[60px] md:h-[80px]'
                : 'h-[40px] md:h-[50px]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
