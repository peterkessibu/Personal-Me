'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const techStack = {
    frameworks: [
      { src: '/images/Techstack/next.png', alt: 'Next.js' },
      { src: '/images/Techstack/react.png', alt: 'React.js' },
    ],
    libraries: [
      { src: '/images/Techstack/firebase.png', alt: 'Firebase' },
      { src: '/images/Techstack/tailwindcss.png', alt: 'Tailwind CSS' },
    ],
    languages: [
      { src: '/images/Techstack/javascript.png', alt: 'JavaScript' },
      { src: '/images/Techstack/typescript.png', alt: 'TypeScript' },
      { src: '/images/Techstack/python.png', alt: 'Python' },
    ],
    designTools: [
      { src: '/images/Techstack/figma.png', alt: 'Figma' },
    ],
    aiIntegrations: [
      { src: '/images/Techstack/openrouter.png', alt: 'OpenRouter' },
      { src: '/images/Techstack/gemini.png', alt: 'Gemini' },
      { src: '/images/Techstack/openai.png', alt: 'OpenAI' },
    ],
  };

  return (
    <motion.section
      id="techstack"
      className="p-10 bg-[#e0e7fdea] w-full max-w-screen"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frameworks Section */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-4">Frameworks</h3>
          <div className="grid grid-cols-2 gap-6">
            {techStack.frameworks.map((tech, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center transition-transform transform hover:scale-105">
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
          initial={{ opacity: 0, x: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-4">Libraries</h3>
          <div className="grid grid-cols-2 gap-6">
            {techStack.libraries.map((tech, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center transition-transform transform hover:scale-105">
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
          initial={{ opacity: 0, x: 70 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-4">AI Integrations</h3>
          <div className="grid grid-cols-2 gap-6">
            {techStack.aiIntegrations.map((tech, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center transition-transform transform hover:scale-105">
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
          initial={{ opacity: 0, x: 70 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-4">Languages</h3>
          <div className="grid grid-cols-2 gap-6">
            {techStack.languages.map((tech, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center transition-transform transform hover:scale-105">
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
          initial={{ opacity: 0, x: 70 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-4">Design Tools</h3>
          <div className="grid grid-cols-2 gap-6">
            {techStack.designTools.map((tech, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center transition-transform transform hover:scale-105">
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
    </motion.section>
  );
};

export default TechStack;
