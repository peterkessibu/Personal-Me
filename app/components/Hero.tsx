"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

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
      className="relative h-screen w-full max-w-screen flex items-center justify-center text-white"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      {/* Fullscreen background image */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/Hero/me_image.png"
          alt="Background"
          fill={true} // Replaces layout="fill"
          style={{ objectFit: "cover" }} // Replaces objectFit="cover"
          quality={100}
          priority={true}
        />
      </div>

      {/* Text content over the image */}
      <motion.div
        className="relative z-10 w-full flex items-start justify-center p-4 mb-[416px]"
        variants={heroVariants}
      >
        <motion.h1
          className="text-[60px] md:text-8xl lg:text-[160px] text-[#110b2e] font-bold absolute top-1 mx-auto"
          variants={textVariants}
        >
          PETER ESSIBU
        </motion.h1>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
