'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { RiMenu4Line } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 p-4 transition-transform duration-300 ${scrolled ? 'bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'} text-[#111263] z-50 mx-auto`}>
      <nav className="flex justify-between items-center">
        {/* Menu button for mobile view */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        >
          {isOpen ? (
            <IoMdClose className="w-8 h-8" />
          ) : (
            <RiMenu4Line className="w-6 h-6" />
          )}
        </button>

        {/* Centered Links for large screens */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#techstack">Tech Stack</Link></li>
            <li><Link href="#quotes">Quotes</Link></li>
          </ul>
        </div>
      </nav>

      {/* Animated Menu for small screens */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-lg flex flex-col items-center justify-center z-50 lg:hidden overflow-hidden"
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
            <li><Link href="#hero" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600">Home</Link></li>
            <li><Link href="#projects" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600">Projects</Link></li>
            <li><Link href="#techstack" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600">Tech Stack</Link></li>
            <li><Link href="#quotes" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600">Quotes</Link></li>
          </motion.ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;