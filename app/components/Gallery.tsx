'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures the animation can happen multiple times when it enters the viewport
    threshold: 0.1, // Triggers the animation when 10% of the section is in view
  });

  // Variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  // Variants for image grid items
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeInOut' },
    }),
    hover: { scale: 1.05, boxShadow: '0px 4px 20px rgba(0,0,0,0.2)' },
  };
  const images = [
    '/images/pic1.jpg',
    '/images/pic2.jpg',
    '/images/pic3.jpg',
  ];

  return (
    <motion.section
      id="gallery"
      className="p-10 bg-white w-full max-w-screen"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg"
            custom={index}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
          >
            <Image src={src} alt={`Picture ${index + 1}`} width={400} height={400} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;
