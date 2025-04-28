import React from "react";

const Hero = () => {
  return (
    <div className="px-6 md:px-12 py-16 pt-36 md:pt-44 pb-30 max-w-4xl mx-auto text-center"id="home">
      <h1 className="text-4xl md:text-7xl font-bold mb-5 text-black">
        Start Crafting Your <br />
        <span className="text-indigo-600 block md:inline">Next Great Idea</span>
      </h1>
      <p className="text-gray-400 my-10 max-w-xl mx-auto text-xl">
        Simplifying the creation of landing pages, blog pages, application pages
        and so much more!
      </p>
      <div className="flex flex-col justify-center items-center gap-6 mb-4 mx-auto w-48 ">
        <div className="relative inline-block">
          <a
            href="#"
            className="font-bold bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Purchase now
          </a>
          <span className="absolute -top-[100%] -right-[20%] bg-green-400 text-green-100 text-xs font-semibold px-4 py-1 rounded-full">
            only $15/mo
          </span>
        </div>

        <a
          href="#"
          className="text-gray-600 px-8 hover:text-indigo-600 transition-colors duration-200">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
