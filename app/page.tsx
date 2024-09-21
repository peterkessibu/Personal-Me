"use client";

import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import MotivationalQuotes from "./components/MotivationalQuotes";
import Gallery from "./components/Gallery";
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
    // Scroll to the component with the provided ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("mt-20"); // Add mt-20 class
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close the menu if it's open (mobile view)
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header
        className={`fixed max-w-screen rounded-l-full right-0 left-0 w-full top-0 p-4 transition-transform duration-300 ${
          scrolled
            ? "bg-opacity-80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        } text-[#111263] z-50`}
      >
        <nav className="flex justify-between items-center my-3 ml-6">
          {/* Menu button for mobile view */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          >
            {isOpen ? (
              <IoMdClose className="w-8 h-8" />
            ) : (
              <RiMenu4Line className="w-6 h-6" />
            )}
          </button>

          {/* Centered Links for large screens */}
          <div className="hidden lg:flex flex-1 justify-center text-lg">
            <ul className="flex space-x-16">
              <li>
                <button onClick={() => handleClick("experience")}>
                  Career Profile
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("projects")}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("techstack")}>
                  Tech Stack
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("contact")}>Contact</button>
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
                className="absolute top-4 right-4"
              >
                <IoMdClose className="w-8 h-8 text-gray-800" />
              </button>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-6 text-center text-2xl font-semibold"
              >
                <li>
                  <ul>
                    <li>
                      <button
                        onClick={() => handleClick("hero")}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        Home
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button
                        onClick={() => handleClick("projects")}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        Projects
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button
                        onClick={() => handleClick("techstack")}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        Tech Stack
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button
                        onClick={() => handleClick("contact")}
                        className="text-gray-800 hover:text-gray-600"
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

      {/* Add IDs to the wrappers of each component to enable scrolling */}
      <div id="hero">
        <Hero />
      </div>
      <div id="experience">
        <HomePage />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="quotes">
        <MotivationalQuotes />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
