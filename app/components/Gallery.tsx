"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
  // Combined images array
  const images = [
    "/images/Gallery/me_image_1.jpg",
    "/images/Gallery/me_image_2.jpg",
    "/images/Gallery/me_image_3.jpg",
  ];

  // Animation variants
  const variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.996,
      },
    },
  };

  return (
    <div id="gallery" className="p-10 bg-white w-full max-w-screen">
      <h2 className="text-3xl font-bold text-center mb-8 my-12">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? 1 : -1} // Alternate direction
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400} // Set the width
              height={0} // Remove fixed height
              className="object-contain w-full h-auto rounded-b-xl" // Maintain the aspect ratio
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
