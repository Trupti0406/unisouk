import React from "react";

const FeatureSection = () => {
  const features = [
    {
      title: "Boost Productivity",
      description:
        "Build an atmosphere that fosters productivity in your organization and your company culture.",
      image: "https://speed.larger.io/storage/images/welcome/productivity.webp",
      listItems: [
        "Maximize productivity and growth",
        "Speed past your competition",
        "Learn the top techniques",
      ],
      reversed: false,
    },
    {
      title: "Automated Tasks",
      description:
        "Save time and money with our revolutionary services. We are the leaders in the industry.",
      image: "https://speed.larger.io/storage/images/welcome/settings.webp",
      listItems: [
        "Automated task management workflow",
        "Detailed analytics for your data",
        "Some awesome integrations",
      ],
      reversed: true,
    },
  ];

  return (
    <div className="px-6 md:px-12 max-w-5xl mx-auto ">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`md:flex items-center gap-36 ${
            feature.reversed ? "flex-row-reverse" : ""
          }`}>
          <div className="md:w-1/2 mb-8 md:mb-0">
           
              <img
                src={feature.image}
                alt={feature.title}
                className="w-96 h-96 object-cover"
              />
           
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {feature.title}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>

            {feature.listItems.length > 0 && (
              <ul className="space-y-4">
                {feature.listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block bg-amber-100 p-1 rounded-full mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-amber-500"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
