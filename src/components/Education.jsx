import React from "react";
import blanquerna from "../assets/blanquerna.png";
import reboot1 from "../assets/reboot1.svg";
import reboot2 from "../assets/reboot2.svg";

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="flex flex-col justify-left md:text-left gap-8 mt-20">
          <div>
          <h2 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 text-center md:text-left">
            Education
          </h2>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-start  mt-10">
            <div className="flex flex-col justify-center items-center text-center md:text-left max-w-xs ">
            <img
              src={blanquerna}
              alt="LogoBlanquerna"
              className="h-44 mx-auto md:mx-0"
            />
            <p className="text-teal-400  leading-relaxed text-2xl font-medium mt-4 max-w-xs text-center">
              Bachelor’s Degree in Media and Communication
            </p>
          </div>

          <div className="flex flex-col self-end justify-center items-center text-center md:text-left max-w-xs ">
            <img
              src={reboot1}
              alt="LogoReboot1"
              className="h-34 mx-auto md:mx-0"
            />
            <p className="text-teal-400 leading-relaxed text-2xl font-bold mt-4 max-w-xs text-center">
              Bachelor’s Degree in Media and Communication
            </p>
          </div>

            <div className="flex flex-col justify-center items-center text-center md:text-left max-w-xs ">
            <img
              src={reboot2}
              alt="LogoReboot2"
              className="h-44 mx-auto md:mx-0"
            />
            <p className=" text-teal-400  leading-relaxed text-2xl text-center font-bold mt-4 max-w-xs">
              Bachelor’s Degree in Media and Communication
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Education;
