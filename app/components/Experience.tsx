"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";

export const experiences = [
  {
    title: "Software Engineer Fellow",
    company: "HEADSTARTER",
    duration: "July 2024 - Sept 2024",
    description: "Worked on building five(5) software projects",
    logo: "/images/Experience/headstarter.png",
  },
  {
    title: "Student",
    company: "UNIVERSITY OF CAPE COAST",
    duration: "Jan 2022 - present",
    description: "BSc. Computer Science",
    logo: "/images/Experience/citsa.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once set to false, so to animate again
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div className="bg-[#eaeefaf1] py-8" id="experience" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center my-12 text-[#06061f]"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          Career Profile
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg border-gray-400 rounded-lg overflow-hidden mt-4 flex"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Container */}
              <div className="flex-none w-48 relative">
                {experience.logo ? (
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <span className="text-3xl text-gray-500">No Logo</span>
                )}
              </div>

              {/* Content Container */}
              <div className="flex-auto p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-600 text-lg mb-2">
                  {experience.company}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  {experience.duration}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
