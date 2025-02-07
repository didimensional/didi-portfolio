import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

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
        <section id="home">
          <Hero />
        </section>
      </main>
    </div>
  );
}

export default App;
