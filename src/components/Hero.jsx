import React from "react";
import bubbles from "../assets/bubbleslaptop.png";
import {
  Laptop,
  Mail,
  Github,
  Linkedin,
  Code,
  User,
  Briefcase,
  ExternalLink,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center px-4 md:px-20 pt-60"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        {/* Left section with text */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-5 justify-center md:justify-start">
            <div className="flex-col self-end">
              <h2 className="text-teal-400 text-3xl font-mono mb-6">
                Hi, my name is
              </h2>
              <h1 className="text-7xl md:text-7xl font-bold text-white">
                Diana López
              </h1>
            </div>
            <div className="self-end">
              <img src={bubbles} alt="Logo" className="h-64" />
            </div>
          </div>
          <h2 className="text-3xl md:text-6xl font-light bg-gradient-to-r from-[#F9F9F9] to-[#14B8A6] bg-clip-text text-transparent font-mono ">
            A Full-Stack Developer.
          </h2>
          <p className="text-gray-100 max-w-3xl leading-relaxed text-2xl font-medium">
            With experience in both{" "}
            <span className="font-bold text-[#5D9FD8]">
              front-end and back-end
            </span>
            , my love for design ensures every project works well and looks
            great. I'm excited to continue growing in the world of coding.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-teal-500 text-white text-2xl rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2">
              <Laptop size={20} />
              Check out my portfolio
            </button>
            <button className="px-6 py-3 border border-teal-500 text-2xl text-teal-500 rounded-lg hover:bg-teal-500/10 transition-colors flex items-center gap-2">
              <Mail size={20} />
              Find out more about me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
