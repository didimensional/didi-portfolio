import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import bubbles from "../assets/bubbleslaptop.png";
import { Laptop, Mail } from "lucide-react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation(); // Get the translation function

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
      className="min-h-screen flex justify-center items-center px-4 md:px-20 pt-33 md:pt-46 mb-30 2xl:pt-36 sm:pt-36"
    >
      <div className="flex text-left flex-col md:flex-row items-center gap-12  md:text-left">
        <div className="space-y-6 md:space-y-4 2xl:space-y-6">
          <div className="flex items-baseline justify-center md:justify-start">
            <div className="flex-col self-end min-w-1/3">
              <h2 className="animate-fade-down animate-once animate-duration-1000 animate-ease-linear overflow-hidden text-teal-400 text-xl md:text-2xl 2xl:text-3xl font-mono mb-6 mt-20">
                {t("hero.greeting")} {/* Use t() to get translation */}
              </h2>
              <h1 className="animate-fade-down animate-once animate-duration-1000 animate-ease-linear min-w-76 text-[36px] md:text-6xl 2xl:text-7xl font-bold text-white">
                Diana López
              </h1>
            </div>
            <div className="self-end">
              <img
                src={bubbles}
                alt="Logo"
                className="animate-fade-left animate-once animate-duration-1000 animate-ease-linear h-36 md:h-50 2xl:h-64"
              />
            </div>
          </div>
          <h2 className="animate-fade-right animate-once animate-duration-[1000ms] animate-delay-800 animate-ease-linear text-center text-3xl md:text-4xl md:text-left 2xl:text-6xl font-light bg-gradient-to-r from-[#F9F9F9] to-[#14B8A6] bg-clip-text text-transparent font-mono ">
            {t("hero.role")} {/* Use t() for the role translation */}
          </h2>
          <p className="animate-fade-up animate-once animate-duration-1000 animate-delay-1500 animate-ease-linear text-center md:text-left text-gray-100 md:max-w-2xl 2xl:max-w-3xl leading-relaxed text-2xl md:text-xl 2xl:text-2xl font-medium">
            {t("hero.description")}
          </p>
          <div className="animate-fade-up animate-once animate-duration-1000 animate-delay-1500 animate-ease-linear flex gap-4 justify-center md:justify-start">
            <a href="#portfolio">
              <button className="px-6 py-3 bg-teal-500 text-white md:text-lg 2xl:text-xl rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2">
                <Laptop size={25} />
                {isMobile ? t("hero.portfolio") : t("hero.portfolio_full")}
              </button>
            </a>
            <a href="#about">
              <button className="px-6 py-3 border border-teal-500 md:text-lg 2xl:text-xl text-teal-500 rounded-lg hover:bg-teal-500/10 transition-colors flex items-center gap-2">
                <Mail size={25} />
                {isMobile ? t("hero.about_me") : t("hero.about_full")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
