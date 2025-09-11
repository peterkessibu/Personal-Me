import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { DotGrid } from "@paper-design/shaders-react";

const links = [
  {
    href: "https://drive.google.com/file/d/1A3dmpc3SFMXw5kFKvVizyweyVjsGXTzC/view?usp=sharing",
    label: "Resume",
    isButton: true,
    className:
      "rounded-xl bg-purple-600 px-8 py-2 text-white outline outline-offset-4 outline-blue-300 transition-all duration-300 hover:scale-[1.03] hover:bg-purple-700 active:scale-[1.01]",
  },
  {
    href: "https://github.com/peterkessibu",
    label: "GitHub",
    icon: <FaGithub size={24} />,
  },
  {
    href: "mailto:peter.essibu@stu.ucc.edu.gh",
    label: "Email",
    icon: <FaEnvelope size={24} />,
  },
  {
    href: "https://linkedin.com/in/peteressibu",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} />,
  },
];

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
      className="relative w-full max-w-screen flex flex-col lg:flex-row items-center justify-center lg:h-screen p-6 mb-20 bg-[#000000]"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          style={{ width: "100%", height: "100%" }}
          colorBack="#000000"
          colorFill="#ffffff"
          colorStroke="#ffaa00"
          size={1}
          gapX={32}
          gapY={32}
          strokeWidth={0}
          sizeRange={0}
          opacityRange={0.5}
          shape="circle"
          scale={0.45}
          rotation={0}
        />
      </div>
      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 items-center text-center lg:text-left space-y-6 z-10 mt-24 md:mt-[130px]"
        variants={heroVariants}
      >
        <div className="flex flex-col space-y-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            variants={textVariants}
          >
            <span className="block">I am Peter</span>
            <span className="block text-purple-400">AI Engineer.</span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-200 max-w-2xl"
            variants={textVariants}
          >
            I build AI solutions for businesses and teams. To automate their processes and improve their efficiency. 
          </motion.p>
        </div>

        {/* Primary Actions */}
        <motion.div
          className="flex justify-center lg:justify-start items-center gap-4 md:gap-6"
          variants={textVariants}
        >
          
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center lg:justify-start items-center space-x-6 text-lg md:text-xl"
          variants={textVariants}
        >
          {links
            .filter((l) => !l.isButton)
            .map((link, index) => (
              <Link key={index} href={link.href} target="_blank" passHref>
                <div className="flex flex-col items-center">
                  <button className="flex items-center space-x-2 text-purple-200 hover:text-purple-300 px-4 py-2 md:py-0">
                    {link.icon}
                    <span className="hidden md:inline">{link.label}</span>
                  </button>
                </div>
              </Link>
            ))}
          <Link href="https://drive.google.com/file/d/1A3dmpc3SFMXw5kFKvVizyweyVjsGXTzC/view?usp=sharing" target="_blank" passHref>
            <button className="rounded-xl bg-purple-600 px-8 py-2 text-white outline outline-offset-4 outline-blue-300 transition-all duration-300 hover:scale-[1.03] hover:bg-purple-700 active:scale-[1.01]">
              Resume
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-3/4 grayscale flex items-center justify-center p-4 mb-6 lg:mb-0 mt-10 lg:mt-0 z-10">
        <Image
          src="/images/Hero/image.png"
          alt="Hero Image"
          width={400}
          height={400}
          className="rounded-2xl object-cover grayscale shadow-2xl border-4 outline outline-offset-4 outline-purple-600"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
