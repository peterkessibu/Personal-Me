"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Moving static data to the server-side
export const techStack = {
  frameworks: [
    { src: "/images/Techstack/next.png", alt: "Next.js" },
    { src: "/images/Techstack/react.png", alt: "React.js" },
  ],
  libraries: [
    { src: "/images/Techstack/firebase.png", alt: "Firebase" },
    { src: "/images/Techstack/tailwindcss.png", alt: "Tailwind CSS" },
  ],
  languages: [
    { src: "/images/Techstack/javascript.png", alt: "JavaScript" },
    { src: "/images/Techstack/typescript.png", alt: "TypeScript" },
    { src: "/images/Techstack/python.png", alt: "Python" },
  ],
  designTools: [{ src: "/images/Techstack/figma.png", alt: "Figma" }],
  aiIntegrations: [
    { src: "/images/Techstack/openrouter.png", alt: "OpenRouter" },
    { src: "/images/Techstack/gemini.png", alt: "Gemini" },
    { src: "/images/Techstack/openai.png", alt: "OpenAI" },
  ],
};

// Animation variants
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.04, ease: "easeInOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const TechStack = () => {
  const { ref: frameworksRef, inView: frameworksInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: librariesRef, inView: librariesInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: languagesRef, inView: languagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: aiRef, inView: aiInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: designToolsRef, inView: designToolsInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section id="techstack" className="p-10 bg-[#eaeefaf1] w-full max-w-screen">
      <motion.h2
        className="text-5xl font-bold text-center my-12 text-[#06061f]"
        initial={{ opacity: 0, y: -30 }}
        animate={frameworksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frameworks Section */}
        <motion.div
          ref={frameworksRef}
          variants={slideInLeft}
          initial="hidden"
          animate={frameworksInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <p className="text-lg font-semibold mb-4">Frameworks</p>
          <div className="grid grid-cols-2 gap-6">
            {techStack.frameworks.map((tech, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={64}
                  height={64}
                  className="w-18 h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Libraries Section */}
        <motion.div
          ref={librariesRef}
          variants={slideInRight}
          initial="hidden"
          animate={librariesInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <p className="text-lg font-semibold mb-4">Libraries</p>
          <div className="grid grid-cols-2 gap-6">
            {techStack.libraries.map((tech, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={64}
                  height={64}
                  className="w-18 h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Integrations Section */}
        <motion.div
          ref={aiRef}
          variants={slideInLeft}
          initial="hidden"
          animate={aiInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <p className="text-lg font-semibold mb-4">AI Integrations</p>
          <div className="grid grid-cols-3 gap-6">
            {techStack.aiIntegrations.map((tech, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={64}
                  height={64}
                  className="w-18 h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          ref={languagesRef}
          variants={slideInRight}
          initial="hidden"
          animate={languagesInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <p className="text-lg font-semibold mb-4">Languages</p>
          <div className="grid grid-cols-3 gap-6">
            {techStack.languages.map((tech, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={64}
                  height={64}
                  className="w-18 h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design Tools Section */}
        <motion.div
          ref={designToolsRef}
          variants={slideInLeft}
          initial="hidden"
          animate={designToolsInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <p className="text-lg font-semibold mb-4">Design Tools</p>
          <div className="grid grid-cols-1 gap-6">
            {techStack.designTools.map((tech, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={64}
                  height={64}
                  className="w-18 h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
