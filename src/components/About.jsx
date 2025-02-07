import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-30">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 font-modo">
              About Me
            </h2>
          </div>
          <p className="text-gray-300 text-2xl font-medium leading-relaxed">
            Hi! I’m Diana, a Spanish full-stack developer with a unique mix of
            creativity and technical expertise.
          </p>
          <p className="text-gray-300 leading-relaxed text-2xl font-medium ">
            I began my journey studying{" "}
            <span className="font-bold text-[#5D9FD8]">
              Audiovisual Communication
            </span>{" "}
            where I also gained knowledge in design, marketing, advertising, and
            journalism as part of my Bachelor’s Degree.
          </p>
          <p className="text-gray-300 leading-relaxed text-2xl font-medium ">
            After finishing university, I set off on an adventure to Australia,
            where I spent 8 years traveling and working to save up for what
            truly excites me:{" "}
            <span className="font-bold text-[#5D9FD8]">
              technology and web development
            </span>
            . During my time in Australia, I gained valuable experience in
            customer service, retail, and sales, strengthening my communication
            skills and helping me understand client needs on a deeper level.
          </p>
          <p className="text-gray-300 leading-relaxed text-2xl font-medium ">
            In 2024, I made the leap into tech, completing a{" "}
            <span className="font-bold text-[#5D9FD8]">
              Full-Stack Development Bootcamp
            </span>
            . To complement this foundation, I also completed a Bootcamp
            specializing in{" "}
            <span className="font-bold text-[#5D9FD8]">E-Commerce</span>, which
            enhanced my development skills and added a specialized focus on
            building e-commerce solutions. to open-source projects.
          </p>
          <p className="text-gray-300 leading-relaxed text-2xl font-medium ">
            Now, as a full-stack developer, I combine my creative background
            with problem-solving to build impactful, user-centered digital
            solutions that are both functional and engaging.
          </p>
        </div>
      </div>
        <div className="mt-10">
            <button className="px-6 py-3 bg-teal-500 font-medium text-white text-2xl rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2 font-medium">
              Contact Me
            </button>
        </div>
    </div>
  );
};

export default About;
