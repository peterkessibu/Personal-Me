"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons from React Icons

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <motion.section
      id="hero"
      className="relative w-full max-w-screen flex flex-col lg:flex-row items-center justify-center lg:h-screen p-6 mb-20"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-3/4 flex items-center justify-center p-4 mb-6 lg:mb-0 mt-[130px]">
        <Image
          src="/images/Gallery/me_image_1.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left space-y-6"
        variants={heroVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800"
          variants={textVariants}
        >
          PETER ESSIBU
        </motion.h1>

        {/* Links Section */}
        <motion.div
          className="flex justify-center items-center space-x-6 text-lg md:text-xl text-gray-600"
          variants={textVariants}
        >
          {/* Resume Button */}
          <Link href="" passHref>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Resume
            </button>
          </Link>

          {/* GitHub Link */}
          <Link href="https://github.com/petekessibu" passHref>
            <div className="flex flex-col items-center">
              <button className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 px-4 py-2 md:py-0">
                <FaGithub size={24} />
                <span className="hidden md:inline">GitHub</span> {/* Hidden on mobile */}
              </button>
            </div>
          </Link>

          {/* Email Link */}
          <Link href="mailto:peter.essibu@stu.ucc.edu.gh" passHref>
            <div className="flex flex-col items-center">
              <button className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 px-4 py-2 md:py-0">
                <FaEnvelope size={24} />
                <span className="hidden md:inline">Email</span> {/* Hidden on mobile */}
              </button>
            </div>
          </Link>

          {/* LinkedIn Link */}
          <Link href="https://linkedin.com/in/peterkessibu" passHref>
            <div className="flex flex-col items-center">
              <button className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 px-4 py-2 md:py-0">
                <FaLinkedin size={24} />
                <span className="hidden md:inline">LinkedIn</span> {/* Hidden on mobile */}
              </button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
