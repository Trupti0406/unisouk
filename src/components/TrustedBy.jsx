import React from "react";

const TrustedBy = () => {
  const brands = [
    {
      name: "Disney",
      logo: "https://brandlogos.net/wp-content/uploads/2021/11/disney-plus-logo-512x512.png",
    },
    {
      name: "Google",
      logo: "https://brandlogos.net/wp-content/uploads/2015/09/google-logo-brandlogos.net_-512x512.png",
    },
    {
      name: "HubSpot",
      logo: "https://brandlogos.net/wp-content/uploads/2015/10/HubSpot-logo-vector-download-400x400.jpg",
    },
    {
      name: "YouTube",
      logo: "https://brandlogos.net/wp-content/uploads/2017/08/YouTube-logo-1-512x512.png",
    },
    {
      name: "Slack",
      logo: "https://brandlogos.net/wp-content/uploads/2019/01/slack_2019-logo_brandlogos.net_vc8uu-512x512.png",
    },
    {
      name: "Shopify",
      logo: "https://brandlogos.net/wp-content/uploads/2017/02/shopify-logo_brandlogos.net_gfbzp-512x512.png",
    },
  ];

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
