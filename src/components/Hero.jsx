import bubbles from "../assets/bubbleslaptop.png";
import React, { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center px-4 md:px-20 pt-36 mb-30"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="space-y-6">
          <div className="flex items-baseline gap-5 justify-center md:justify-start">
            <div className="flex-col self-end">
              <h2 className="text-teal-400 text-sm md:text-3xl font-mono mb-6 mt-20">
                Hi, my name is
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Diana López
              </h1>
            </div>
            <div className="self-end">
              <img src={bubbles} alt="Logo" className="md:h-64 sm:h-30" />
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
            <a href="#portfolio">
              <button className="px-6 py-3 bg-teal-500 text-white md:text-2xl text-xl rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2">
                <Laptop size={25} />
                {isMobile ? "Portfolio" : "Check out my portfolio"}
              </button>
            </a>
            <a href="#about">
              <button className="px-6 py-3 border border-teal-500 md:text-2xl text-xl text-teal-500 rounded-lg hover:bg-teal-500/10 transition-colors flex items-center gap-2">
                <Mail size={25} />
                {isMobile ? "About me" : "Find out more about me"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
