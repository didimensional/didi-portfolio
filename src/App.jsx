import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import CanvasCursor from "./components/CanvasCursor";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(113deg, #02393c 0%, #010d19 100%)",
      }}
    >
      <CanvasCursor />
      <NavBar isScrolled={isScrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-46">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>
        </section>
        <section id="education" className="scroll-mt-46">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Education />
          </motion.div>
        </section>
        <section id="portfolio" className="scroll-mt-50">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Portfolio />
          </motion.div>
        </section>
        <section id="contact" className="scroll-mt-44 2xl:scroll-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
