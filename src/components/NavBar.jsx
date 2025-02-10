import React, { useState } from "react";
import logo from "../assets/didilogo.png";

const NavBar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div
        className={`max-w-full ml-10 mr-10 p-4 sm:p-4 lg:p-4 mt-10 sm:mt-10 lg:mt-10 border border-gray-300 rounded-[6px] ${
          isScrolled
            ? "bg-gradient-to-r from-[#02393c] to-[#00222b]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-teal-400 font-bold text-xl">
              <img src={logo} alt="Logo" className="h-24" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${
                    link.label === "Contact"
                      ? "text-white px-4 py-2 text-2xl font-medium rounded-[6px] border border-[#48D1CC] bg-[#14B8A6] flex-shrink-0"
                      : "text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-2xl font-medium transition-colors"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2">
                <a
                  href="#en"
                  onClick={() => setSelectedLanguage("en")}
                  className={`${
                    selectedLanguage === "en"
                      ? "text-teal-500 font-bold"
                      : "text-gray-300"
                  } hover:text-teal-400 transition-colors text-2xl font-medium`}
                >
                  EN
                </a>
                <span className="text-white text-2xl">/</span>
                <a
                  href="#es"
                  onClick={() => setSelectedLanguage("es")}
                  className={`${
                    selectedLanguage === "es"
                      ? "text-teal-500 font-bold"
                      : "text-gray-300"
                  } hover:text-teal-400 transition-colors text-2xl font-medium`}
                >
                  ES
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-teal-400 focus:outline-none"
            >
              <span className="text-sm">{isMenuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden ${
              isScrolled
                ? "bg-gradient-to-r from-[#02393c] to-[#00222b]"
                : "bg-transparent"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2">
                <a
                  href="#en"
                  onClick={() => setSelectedLanguage("en")}
                  className={`${
                    selectedLanguage === "en"
                      ? "text-teal-500 font-bold"
                      : "text-gray-300"
                  } hover:text-teal-400 transition-colors text-base font-bold`}
                >
                  EN
                </a>
                <span className="text-white">/</span>
                <a
                  href="#es"
                  onClick={() => setSelectedLanguage("es")}
                  className={`${
                    selectedLanguage === "es"
                      ? "text-teal-500 font-bold"
                      : "text-gray-300"
                  } hover:text-teal-400 transition-colors text-base font-bold`}
                >
                  ES
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
