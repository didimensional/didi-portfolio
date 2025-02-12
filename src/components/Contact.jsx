import React from "react";
import { Mail,
    Github,
  Linkedin,
 } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-30 md:mt-80">
      <div className="flex flex-col md:flex-col justify-center items-center text-center md:text-center">
        <div className="space-y-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#F9F9F9] via-[#14B8A6] to-[#456D8F] bg-clip-text text-transparent mb-4 font-modo">
              Contact Me
            </h2>
          </div>
          <p className="text-gray-300 text-2xl font-medium leading-relaxed">
            I’m excited to be part of a dynamic team where I can bring my skills
            to the table while continuing to learn from others. I'm always
            looking for new opportunities to apply my expertise and grow
            professionally.
          </p>
        </div>
        <div className="mt-2">
          <a href="mailto:didivergente@gmail.com">
            <button className="px-6 py-3 text-2xl text-teal-500 rounded-lg flex items-center gap-2 font-bold hover:scale-110 transition-transform duration-200">
              <Mail size={20} />
              didivergente@gmail.com
            </button>
          </a>
        </div>
        <div className="mt-2">
          <p className="px-6 py-3 text-2xl text-teal-500 rounded-lg flex items-center gap-2 font-bold">
            <a
              href="https://github.com/didimensional"
              target="_blank"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/didimensional"
              target="_blank"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Linkedin size={30} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
