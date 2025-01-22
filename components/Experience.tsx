import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";

export const experiences = [
  {
    title: "SWE Fellow",
    company: "HEADSTARTER",
    duration: "July 2024 - Sept 2024",
    description: "Built software projects",
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
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once set to false, so to animate again
    threshold: 0.08,
  });

  return (
    <div className="bg-[#040413] text-[#31a9d8] py-8" id="experience" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center my-12"
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
              className="shadow-lg bg-[#040413] text-[#31a9d8] border border-[#31a9d8] rounded-lg overflow-hidden mt-4 flex"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              {/* Image Container */}
              <div className="flex-none w-24 sm:w-48 relative">
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
              <div className="flex-auto p-3 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                  {experience.title}
                </h3>
                <p className="text-base sm:text-lg mb-1 sm:mb-2">
                  {experience.company}
                </p>
                <p className="text-xs sm:text-sm mb-1 sm:mb-2">
                  {experience.duration}
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
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
