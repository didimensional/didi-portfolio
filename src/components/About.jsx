import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
   const { t } = useTranslation(); 
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-30">
      <div className="flex flex-col md:flex-row items-center text-center md:text-justify">
        <div className="space-y-6">
          <div>
            <h2 className="text-5xl 2xl:text-6xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 font-modo">
              {t("about.title")}
            </h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-2xl md:text-xl 2xl:text-2xl font-medium ">
            {t("about.p1")}
            <span className="font-bold text-[#5D9FD8]">
              {t("about.b1")}
            </span>{" "}
            {t("about.p2")}
          </p>
          <p className="text-gray-300 leading-relaxed text-2xl md:text-xl 2xl:text-2xl font-medium ">
            {t("about.p3")}
            <span className="font-bold text-[#5D9FD8]">
              {t("about.b2")}
            </span>. {t("about.p4")}
          </p>
          <p className="text-gray-300 leading-relaxed text-2xl md:text-xl 2xl:text-2xl font-medium ">
            {t("about.p5")}
            <span className="font-bold text-[#5D9FD8]">{t("about.b3")}</span>
            {t("about.p6")}
            <span className="font-bold text-[#5D9FD8]"> {t("about.b4")}</span>,
            {t("about.p7")}
          </p>
          <p className="text-gray-300 leading-relaxed text-2xl md:text-xl 2xl:text-2xl font-medium ">
            {t("about.p8")}
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center md:justify-start">
        <a href="#contact">
          <button className="px-6 py-3 bg-teal-500 text-white text-2xl rounded-lg hover:bg-teal-600 transition-colors flex items-center gap-2 font-medium">
            {t("about.contact")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
