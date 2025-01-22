import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
    { src: "/images/Techstack/together_ai.png", alt: "Together AI" },
  ],
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.04, ease: "easeInOut" },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const sections = [
  {
    title: "Frameworks",
    items: techStack.frameworks,
    ref: "frameworksRef",
    inView: "frameworksInView",
    variants: slideInLeft,
  },
  {
    title: "Libraries",
    items: techStack.libraries,
    ref: "librariesRef",
    inView: "librariesInView",
    variants: slideInRight,
  },
  {
    title: "Design Tools",
    items: techStack.designTools,
    ref: "designToolsRef",
    inView: "designToolsInView",
    variants: slideInLeft,
  },
  {
    title: "Languages",
    items: techStack.languages,
    ref: "languagesRef",
    inView: "languagesInView",
    variants: slideInRight,
  },
  {
    title: "AI Integrations",
    items: techStack.aiIntegrations,
    ref: "aiRef",
    inView: "aiInView",
    variants: slideInLeft,
  },
];

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

  const refs: Record<string, (node?: Element | null | undefined) => void> = {
    frameworksRef,
    librariesRef,
    languagesRef,
    aiRef,
    designToolsRef,
  };
  const inViews = {
    frameworksInView,
    librariesInView,
    languagesInView,
    aiInView,
    designToolsInView,
  };

  return (
    <section
      id="techstack"
      className="p-10 bg-[#040413] text-[#31a9d8] w-full max-w-screen"
    >
      <motion.h2
        className="text-5xl font-bold text-center my-12"
        initial={{ opacity: 0, y: -30 }}
        animate={
          frameworksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            ref={refs[section.ref]}
            variants={section.variants}
            initial="hidden"
            animate={
              inViews[section.inView as keyof typeof inViews]
                ? "visible"
                : "hidden"
            }
            className="flex flex-col items-center"
          >
            <p className="text-lg font-semibold mb-4">{section.title}</p>
            <div className={`grid grid-cols-2 gap-6`}>
              {section.items.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className="bg-white shadow-lg border-gray-400 rounded-lg p-2 lg:p-6 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={72}
                    height={72}
                    className="w-18 h-18 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
