"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
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

  const handleClick = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Close the menu if it's open (mobile view)
    if (isOpen) {
      toggleMenu();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Header Section */}
      <header
        onClick={scrollToTop}
        className={`fixed max-w-screen rounded-l-full right-0 left-0 w-full top-0 p-4 transition-transform duration-300 ${
          scrolled
            ? "bg-opacity-80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        } text-[#06061f] z-50 font-semibold cursor-pointer`}
      >
        <nav className="flex justify-between items-center my-3 ml-6">
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

          {/* Centered Links for large screens */}
          <div className="hidden lg:flex flex-1 justify-center text-lg">
            <ul className="flex space-x-16">
              <li>
                <button
                  onClick={() => handleClick("experience")}
                  className="hover:bg-[#06061f] hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg"
                >
                  Career Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("projects")}
                  className="hover:bg-[#06061f] hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("techstack")}
                  className="hover:bg-[#06061f] hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg"
                >
                  Tech Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("contact")}
                  className="hover:bg-[#06061f] hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Animated Menu for small screens */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5 }}
              className="fixed h-screen inset-0 bg-white bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center z-50 lg:hidden overflow-hidden"
            >
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="absolute top-10 mr-8 left-4"
              >
                {/* ...SVG icon... */}
              </button>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-6 text-center text-2xl font-semibold"
              >
                <li>
                  <ul className="space-y-8">
                    <li>
                      <button
                        onClick={() => handleClick("experience")}
                        className="text-[#06061f] transition-colors duration-300 border-[2px] hover:bg-[#06061f] hover:text-white rounded-lg p-6 shadow-xl"
                      >
                        Career Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleClick("projects")}
                        className="text-[#06061f] transition-colors duration-300 border-[2px] hover:bg-[#06061f] hover:text-white rounded-lg p-6 shadow-xl"
                      >
                        Projects
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleClick("techstack")}
                        className="text-[#06061f] transition-colors duration-300 border-[2px] hover:bg-[#06061f] hover:text-white rounded-lg p-6 shadow-xl"
                      >
                        Tech Stack
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleClick("contact")}
                        className="text-[#06061f] transition-colors duration-300 border-[2px] hover:bg-[#06061f] hover:text-white rounded-lg p-6 shadow-xl"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </li>
              </motion.ul>
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
      <div id="contact" className="section-padding">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;