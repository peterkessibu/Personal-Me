"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  // Ref and useInView hook
  const ref = useRef(null);
  const frameworksInView = useInView(ref, { once: true });

  const images = [
    "/images/Gallery/me_image_1.jpg",
    "/images/Gallery/me_image_2.jpg",
    "/images/Gallery/me_image_3.jpg",
  ];

  return (
    <div id="gallery" className="p-10 bg-white w-full max-w-screen">
      <motion.h2
        ref={ref}
        className="text-5xl font-bold text-center my-12 text-[#06061f]"
        initial={{ opacity: 0, y: -30 }}
        animate={
          frameworksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        Gallery
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? 1 : -1} // Alternate direction
            initial="hidden"
            animate="visible"
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
