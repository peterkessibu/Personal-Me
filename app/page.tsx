"use client";

import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import TableballGame from "../components/Tableball";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
import HomePage from "../components/Experience";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#000000] text-purple-600">
      <header
        onClick={scrollToTop}
        className={`fixed right-0 left-0 top-0 z-50 w-full max-w-screen cursor-pointer px-4 py-6 transition-colors duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-xl shadow-lg" : "bg-transparent"
        }`}
      >
        <h1 className="text-center text-2xl font-bold text-white underline decoration-purple-600 outline outline-offset-2 sm:text-4xl md:text-5xl">
          PETER KWAMENA ESSIBU
        </h1>
      </header>

      <div id="hero">
        <Hero />
      </div>
      <div id="tableball">
        <TableballGame />
      </div>
      <div id="experience" className="section-padding">
        <HomePage />
      </div>
      <div id="projects" className="section-padding">
        <Projects />
      </div>
      <div id="techstack" className="section-padding">
        <TechStack />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
