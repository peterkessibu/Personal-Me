'use client';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Moving static data to the server-side
export const techStack = {
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

const TechStack = () => {
  const { ref } = useInView({
    triggerOnce: true, // Animates only once for performance
    threshold: 0.2,
  });

  return (
    <section
      id="techstack"
      className="p-10 bg-[#eaeefaf1] w-full max-w-screen"
      ref={ref}
    >
      <h2 className="text-5xl font-bold text-center my-12 text-[#06061f]">Tech Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frameworks Section */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Frameworks</p>
          <div className="grid grid-cols-2 gap-6">
            {techStack.frameworks.map((tech, index) => (
              <div key={index} className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105">
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
        </div>

        {/* Libraries Section */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Libraries</p>
          <div className="grid grid-cols-2 gap-6">
            {techStack.libraries.map((tech, index) => (
              <div key={index} className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105">
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
        </div>

        {/* AI Integrations Section */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">AI Integrations</p>
          <div className="grid grid-cols-3 gap-6">
            {techStack.aiIntegrations.map((tech, index) => (
              <div key={index} className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105">
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
        </div>

        {/* Languages Section */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Languages</p>
          <div className="grid grid-cols-3 gap-6">
            {techStack.languages.map((tech, index) => (
              <div key={index} className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105">
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
        </div>

        {/* Design Tools Section */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Design Tools</p>
          <div className="grid grid-cols-1 gap-6">
            {techStack.designTools.map((tech, index) => (
              <div key={index} className="bg-white shadow-lg border-gray-400 rounded-lg p-6 flex items-center justify-center hover:scale-105">
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
        </div>
      </div>
    </section>
  );
};

export default TechStack;
