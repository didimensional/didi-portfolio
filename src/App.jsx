import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import CanvasCursor from "./components/CanvasCursor";
import AnimateOnScroll from "./components/AnimateOnScroll";

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
          <AnimateOnScroll
            animationClass="translate-x-0"
            duration="1000"
            easing="ease-out"
          >
            <Hero />
          </AnimateOnScroll>
        </section>
        <section id="about" className="scroll-mt-46">
          <AnimateOnScroll
            animationClass="animate-fade-up"
            duration="1000"
            easing="ease-out"
          >
            <About />
          </AnimateOnScroll>
        </section>
        <section id="education" className="scroll-mt-46">
          <AnimateOnScroll
            animationClass="animate-fade-up"
            duration="1000"
            easing="ease-out"
          >
            <Education />
          </AnimateOnScroll>
        </section>
        <section id="portfolio" className="scroll-mt-50">
          <AnimateOnScroll
            animationClass="animate-fade-up"
            duration="1000"
            easing="ease-out"
          >
            <Portfolio />
          </AnimateOnScroll>
        </section>
        <section id="contact" className="scroll-mt-44 2xl:scroll-mt-10">
          <AnimateOnScroll
            animationClass="animate-fade-up"
            duration="1000"
            easing="ease-out"
          >
            <Contact />
          </AnimateOnScroll>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
