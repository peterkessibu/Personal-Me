import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import skills from "../skills.json";
import { DotGrid } from "@paper-design/shaders-react";

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
  { title: "Languages", keys: ["javascript", "typescript", "python"] as const, ref: "languagesRef", inView: "languagesInView", variants: slideInLeft },
  { title: "Frameworks", keys: ["react", "nextjs"] as const, ref: "frameworksRef", inView: "frameworksInView", variants: slideInRight },
  { title: "Styling", keys: ["tailwindcss", "css3", "materialui"] as const, ref: "designToolsRef", inView: "designToolsInView", variants: slideInLeft },
  { title: "Data & Backend", keys: ["postgresql", "supabase", "firebase", "prisma"] as const, ref: "librariesRef", inView: "librariesInView", variants: slideInRight },
  { title: "Tooling", keys: ["vite", "rollup", "turbo", "eslint", "prettier"] as const, ref: "toolingRef", inView: "toolingInView", variants: slideInLeft },
  { title: "Platforms", keys: ["vercel", "netlify", "githubactions"] as const, ref: "moreRef", inView: "moreInView", variants: slideInRight },
  { title: "AI Model Platforms", keys: ["openrouter", "together", "gemini", "openai", "groq"] as const, ref: "aiRef", inView: "aiInView", variants: slideInLeft },
  { title: "Testing", keys: ["cypress"] as const, ref: "testRef", inView: "testInView", variants: slideInRight },
  { title: "Design", keys: ["figma", "framer"] as const, ref: "designRef", inView: "designInView", variants: slideInLeft },
];

type BadgeProps = { label: string };
const Badge = ({ label }: BadgeProps) => (
  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-black shadow border-2 border-purple-600/40">
    {/* <Image src={icon} width={20} height={20} alt="" className="w-5 h-5" /> */}
    <span className="text-sm font-medium">{label}</span>
  </span>
);

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
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
  const { ref: toolingRef, inView: toolingInView } = useInView({
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
  const { ref: moreRef, inView: moreInView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: testRef, inView: testInView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: designRef, inView: designInView } = useInView({ triggerOnce: true, threshold: 0.4 });

  const refs: Record<string, (node?: Element | null | undefined) => void> = {
    frameworksRef,
    librariesRef,
    languagesRef,
    toolingRef,
    aiRef,
    designToolsRef,
    moreRef,
    testRef,
    designRef,
  };
  const inViews = {
    frameworksInView,
    librariesInView,
    languagesInView,
    toolingInView,
    aiInView,
    designToolsInView,
    moreInView,
    testInView,
    designInView,
  };

  return (
    <motion.section
      id="techstack"
      className="relative w-full text-white bg-[#000000] min-h-screen"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background Shader */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          style={{ width: "100%", height: "100%" }}
          colorBack="#000000"
          colorFill="#ffffff"
          colorStroke="#ffaa00"
          size={1}
          gapX={32}
          gapY={32}
          strokeWidth={0}
          sizeRange={0}
          opacityRange={0.5}
          shape="circle"
          scale={0.45}
          rotation={0}
        />
      </div>
      <motion.h2
        className="relative z-20 text-5xl font-bold text-center text-white underline decoration-purple-600 outline outline-offset-2"
        initial={{ opacity: 0, y: -30 }}
        animate={
          frameworksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        Tech Stack
      </motion.h2>
      <div className="relative z-10 h-full p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-lg font-semibold mb-4 text-white">{section.title}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {section.keys.map((k) => {
                  const s = (skills)[k] as { name: string; color: string };
                  if (!s) return null;
                  return (
                    <motion.div key={k} whileHover={{ scale: 1.05 }}>
                      <Badge label={s.name} />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
