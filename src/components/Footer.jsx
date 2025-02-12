import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 2xl:mt-45 pb-10">
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-center border-1 border-white p-2 rounded-xl">
        <div>
          <h2 className="text-xl md:text-xl font-medium text-white">
            ⓒ 2025 - All rights reserved. Designed and Coded with{" "}
            <span className="text-xl md:text-xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 font-modo">
              ♡
            </span>{" "}
            by{" "}
            <span className="text-xl md:text-xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 font-modo">
              Diana López
            </span>
            . Built with React and Tailwind CSS.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
