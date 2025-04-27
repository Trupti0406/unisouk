// src/components/OurTeam.jsx

import React from "react";
import team from "../utils/team";

const pastelBackgrounds = [
  "bg-blue-100",
  "bg-pink-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-red-100",
  "bg-indigo-100",
];

const TeamMember = ({ name, role, image, socials, bgColor }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-32 h-32 md:w-56 md:h-56 rounded-full mb-4 flex items-center justify-center ${bgColor} overflow-hidden relative group transition-transform duration-300 hover:scale-105`}>
        <img
          src={image}
          alt={name}
          className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full transition-transform duration-300 group-hover:scale-100"
        />
      </div>

      <h3 className="font-semibold text-lg text-center">{name}</h3>
      <p className="text-sm mb-2 text-blue-400 font-semibold capitalize uppercase text-center">
        {role}
      </p>

      <div className="flex space-x-2 mt-2">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="group text-gray-400 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer">
            {social.platform === "twitter" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter transition-colors duration-300">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            )}
            {social.platform === "github" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github transition-colors duration-300">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
      <div className="px-6 md:px-12 max-w-7xl mx-auto py-16 ">
        <div className="mb-12">
          <p className="mb-2 text-sm tracking-wide text-indigo-500 uppercase">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            An incredible team of <br /> amazing individuals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-12">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              socials={member.socials}
              bgColor={pastelBackgrounds[index % pastelBackgrounds.length]} // pastel bg color assigned
            />
          ))}
        </div>
      </div>
  );
};

export default OurTeam;
