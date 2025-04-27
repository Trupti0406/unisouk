import React from "react";
import { brands } from "../utils/brands";
const TrustedBy = () => {

  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="px-6 md:px-12 max-w-5xl mx-auto text-center overflow-hidden">
      <p className="text-center text-gray-800 uppercase text-xs tracking-wider capitalize font-bold">
        Trusted by top-leading companies
      </p>

      <div className="relative w-full">
        <div className="animate-marquee whitespace-nowrap">
          {duplicatedBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="inline-block mx-8">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-28 w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default TrustedBy;
