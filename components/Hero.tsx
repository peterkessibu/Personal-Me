import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const links = [
  {
    href: "https://drive.google.com/file/d/1IIvl3vN_HgrrROhxwVzaBvNvhZWXlu9N/view?usp=sharing",
    label: "Resume",
    isButton: true,
    className:
      "px-6 py-3 border-2 text-[#31a9d8] border-[#31a9d8] rounded-lg hover:bg-[#1c1c69] hover:text-[#31a9d8] transform duration-500 ease-in-out",
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

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="hero"
      className="relative w-full max-w-screen flex flex-col lg:flex-row items-center justify-center lg:h-screen p-6 mb-20 bg-[#040413]"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-3/4 flex items-center justify-center p-4 mb-6 lg:mb-0 mt-24 md:mt-[130px]">
        <Image
          src="/images/Hero/me_image.png"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 items-center text-center lg:text-left space-y-6"
        variants={heroVariants}
      >
        <div className="flex flex-col space-y-3 items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-row text-[#31a9d8]"
            variants={textVariants}
          >
            PETER ESSIBU.
          </motion.h1>
          <motion.span
            className=" text-xl font-semibold"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {Array.from("AI Engineer").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-[#31a9d8]"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        </div>
        {/* Links Section */}
        <motion.div
          className="flex justify-center items-center space-x-6 text-lg md:text-xl"
          variants={textVariants}
        >
          {links.map((link, index) => (
            <Link key={index} href={link.href} target="_blank" passHref>
              {link.isButton ? (
                <button className={link.className}>{link.label}</button>
              ) : (
                <div className="flex flex-col items-center">
                  <button className="flex items-center space-x-2 text-[#31a9d8] hover:text-[#2f2da8] px-4 py-2 md:py-0">
                    {link.icon}
                    <span className="hidden md:inline">{link.label}</span>
                  </button>
                </div>
              )}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
