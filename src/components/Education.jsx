import React from "react";
import blanquerna from "../assets/blanquerna.png";
import reboot1 from "../assets/reboot1.svg";
import reboot2 from "../assets/reboot2.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import tailwind from "../assets/tailwind.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import php from "../assets/php.svg";
import symfony from "../assets/symfony.svg";
import git from "../assets/git.svg";
import figma from "../assets/figma.svg";
import mysql from "../assets/MYSQL.svg";
import wordpress from "../assets/wordpress.svg";
import woocommerce from "../assets/woocommerce.svg";
import prestashop from "../assets/prestashop.svg";
import magento from "../assets/magento.svg";





const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="flex flex-col justify-left md:text-left gap-4 mt-30 md:mt-60">
        <div>
          <h2 className="sm:items-center text-5xl 2xl:text-6xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent text-center md:text-left">
            Education
          </h2>
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row justify-center sm:justify-center md:justify-between items-center sm:items-center md:items-start mt-10 gap-8 md:gap-16">
          <div className="flex flex-col justify-center items-center text-center md:text-left max-w-xs ">
            <img
              src={blanquerna}
              alt="LogoBlanquerna"
              className="h-44 mx-auto md:mx-0"
            />
            <p className="text-teal-400  leading-relaxed text-xl font-bold mt-4 max-w-xs text-center">
              Bachelor’s Degree in Media and Communication
            </p>
          </div>

          <div className="flex flex-col md:self-end justify-center items-center text-center md:text-left max-w-xs ">
            <img
              src={reboot1}
              alt="LogoReboot1"
              className="h-34 mx-auto md:mx-0"
            />
            <p className="text-teal-400 leading-relaxed text-xl font-bold mt-4 max-w-xs text-center">
              Full-Stack Web Development Bootcamp
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:text-left max-w-xs ">
            <img
              src={reboot2}
              alt="LogoReboot2"
              className="h-44 mx-auto md:mx-0"
            />
            <p className=" text-teal-400  leading-relaxed text-xl text-center font-bold mt-4 max-w-xs">
              E-Commerce Development and Full-Stack Bootcamp
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col justify-center md:text-center gap-8 mt-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 text-center md:text-center">
            Skills, tools and technologies
          </h2>
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img src={html} alt="html" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img src={css} alt="css" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img src={js} alt="js" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img
              src={tailwind}
              alt="tailwind"
              className="h-16 mx-auto md:mx-0"
            />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img src={node} alt="node" className="h-18 ml-[-10px]" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img src={react} alt="react" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img src={php} alt="php" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16  flex items-center justify-center rounded-full md:w-1/12">
            <img src={symfony} alt="symfony" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img src={git} alt="git" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16  flex items-center justify-center rounded-full md:w-1/12">
            <img src={figma} alt="figma" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16  flex items-center justify-center rounded-full md:w-1/12">
            <img src={mysql} alt="mysql" className="h-16 mx-auto md:mx-0" />
          </div>
          <div class="w-16 h-16  flex items-center justify-center rounded-full md:w-1/12">
            <img
              src={wordpress}
              alt="wordpress"
              className="h-16 mx-auto md:mx-0"
            />
          </div>
          <div class="w-16 h-16 flex items-center justify-center rounded-full md:w-1/12">
            <img
              src={woocommerce}
              alt="woocommerce"
              className="h-16 mx-auto md:mx-0"
            />
          </div>
          <div class="w-16 h-16  flex items-center justify-center rounded-full md:w-1/12">
            <img
              src={prestashop}
              alt="prestashop"
              className="h-16 mx-auto md:mx-0"
            />
          </div>
          <div class="w-16 h-16  flex items-center justify-center rounded-full md:w-1/12">
            <img src={magento} alt="magento" className="h-16 mx-auto md:mx-0" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Education;
