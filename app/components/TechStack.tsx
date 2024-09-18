'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const techStackImages = [
    '/images/react.png',
    '/images/nextjs.png',
    '/images/typescript.png',
    '/images/tailwindcss.png',
    '/images/nodejs.png',
    '/images/firebase.png',
  ];

  const firstHalf = techStackImages.slice(0, Math.ceil(techStackImages.length / 2));
  const secondHalf = techStackImages.slice(Math.ceil(techStackImages.length / 2));

  return (
    <motion.section
      id="techstack"
      className="p-10 bg-[#ffffff] w-full max-w-screen"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }} // Slower animation
    >
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {/* Left section */}
          <motion.div
            initial={{ opacity: 0, x: -70 }} // Slower animation on both sections
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }}
            transition={{ duration: 1.5 }}
            className="flex justify-end space-x-4" // Flexbox layout to align center
          >
            {firstHalf.map((src, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={src}
                  alt={`Tech Stack ${index}`}
                  width={32}
                  height={32}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Right section */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
            transition={{ duration: 1.5 }}
            className="flex justify-start space-x-4"
          >
            {secondHalf.map((src, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={src}
                  alt={`Tech Stack ${index + firstHalf.length}`}
                  width={32}
                  height={32}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
