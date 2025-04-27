import React from "react";
import { features } from "../utils/features";
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-100 px-6 py-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="px-6 md:px-12 max-w-6xl mx-auto text-center py-16" id="features">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Features</h2>
        <p className="text-gray-600">
          Check out our list of awesome features below.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
