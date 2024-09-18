'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger every time the section comes into view
    threshold: 0.2,     // Animation triggers when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
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
      className="h-screen w-full max-w-screen bg-cover bg-center flex items-center justify-center text-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }} // Replace with your image path
    >
      <motion.div
        className="text-center bg-black bg-opacity-50 p-8 rounded-lg" // Optional: Add background color to improve text readability
        variants={heroVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          variants={textVariants}
        >
          Hi, I&apos;m [Your Name]
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mt-4"
          variants={textVariants}
          transition={{ delay: 0.5 }}
        >
          I build web applications that solve real-world problems.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
