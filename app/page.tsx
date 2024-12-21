"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import HomePage from "./components/Experience";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Disable scrolling when the menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#040413]">
      {/* Header Section */}
      <header
        onClick={scrollToTop}
        className={`fixed max-w-screen rounded-l-full right-0 left-0 w-full top-0 p-4 transition-transform duration-300 ${
          scrolled
            ? "bg-opacity-80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        } z-50 font-semibold cursor-pointer`}
      >
        <nav className="flex justify-between items-center p-4 my-3 ml-6">
          {/* Menu button for mobile view */}
          {!scrolled && (
            <button
              onClick={toggleMenu}
              aria-label="Open menu"
              className="lg:hidden"
            >
              {/* ...SVG icon... */}
            </button>
          )}

        </nav>

        {/* Animated Menu for small screens */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5 }}
              className="fixed h-screen inset-3 p-6 bg-white bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center z-50 lg:hidden overflow-hidden"
            >
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sections with IDs */}
      <div id="hero">
        <Hero />
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
