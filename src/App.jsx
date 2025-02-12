import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About  from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

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
      <NavBar isScrolled={isScrolled} />
      <main>
        <section id="home ">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-46">
          <About />
        </section>
        <section id="education" className="scroll-mt-46">
          <Education />
        </section>
        <section id="portfolio" className="scroll-mt-50">
          <Portfolio />
        </section>
        <section id="contact" className="scroll-mt-44 2xl:scroll-mt-10">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
