import { useEffect, useState, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DotGrid } from "@paper-design/shaders-react";

type ProductKind = "AI" | "Mobile" | "Web";

type ExperienceProduct = {
  name: string;
  kind?: ProductKind;
  note?: string;
};

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  duration: string;
  summary: string;
  bullets: string[];
  logo: string;
  products: ExperienceProduct[];
  tools: string[];
};

const VISIBLE_TOOLS = 4;

export const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer",
    company: "Mande",
    location: "Accra, Ghana | Remote",
    duration: "January 2025 – Present",
    summary:
      "Career journaling platform that uncovers performance patterns for insights and resume tailoring.",
    bullets: [
      "Collaborated in a 4-member cross-functional team (PM, UI/UX, AI Engineer, Software Engineer) to design, build, and deploy AI-powered web applications.",
      "Launched Mande Resume and Mande Empulse, attracting 1,000+ users on first release and maintaining 100+ active users.",
      "Engineered an AI resume enhancer with Gemini 2.5 Flash-Lite for personalized recommendations.",
      "Designed RAG pipelines to contextualize user inputs with industry-specific data.",
      "Applied prompt engineering for structured storytelling outputs tailored to job applications.",
      "Integrated resume parsing to extract career milestones and align them with job descriptions.",
      "Built Empulse in four days: a productivity-tracking tool with real-time progress visualization for National Service Personnels in Ghana.",
      "Shipped Empulse with Next.js 15, TypeScript, TailwindCSS, Vercel CI/CD, SSR, and ISR.",
      "Building Mande Clarity on React Native and the Mande backend and AI services on Django.",
    ],
    logo: "/images/Experience/mande.png",
    products: [
      { name: "Resume", kind: "AI", note: "Gemini 2.5 Flash-Lite, RAG, resume parsing" },
      { name: "Empulse", kind: "Web", note: "4-day build; real-time productivity tracking" },
      { name: "Clarity", kind: "Mobile", note: "React Native app; Django + AI backend" },
    ],
    tools: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "React Native",
      "Gemini",
      "RAG",
      "Vercel",
      "SSR / ISR",
    ],
  },
  {
    title: "AI Engineering Intern",
    company: "ShaQ Express",
    location: "Accra, Ghana | On-site",
    duration: "Mar 2025 – May 2025",
    summary:
      "Ghana’s first Super App: e-commerce, virtual healthcare, food delivery, and eco-friendly logistics.",
    bullets: [
      "Increased feature engagement by ~20% by integrating AI across Web and Mobile with a cross-functional team of 4 engineers.",
      "Engineered high-precision Gemini prompts, driving a ~70% improvement in response accuracy and contextual relevance.",
      "Developed AI-powered backend services with AdonisJS and REST APIs with a 4-person backend team, cutting API latency by ~15%.",
      "Ensured reliable, scalable AI integration with end-to-end testing and backend optimization.",
    ],
    logo: "/images/Experience/shaq.png",
    products: [],
    tools: ["Gemini", "Prompt Engineering", "AdonisJS", "REST", "e2e testing"],
  },
  {
    title: "Student",
    company: "University of Cape Coast",
    location: "Cape Coast, Ghana",
    duration: "Jan 2022 – Aug 2025",
    summary: "BSc. Computer Science.",
    bullets: [
      "Relevant courses: Algorithms, Data Structures, Introduction to Artificial Intelligence, Web Technology, Computer Networking, Computer Security, Database Design, Software Engineering, Programming and Problem Solving, Research Methods, Human Computer Interaction.",
      "2nd in AYO App Hackathon: led a team of 5 on the frontend of an e-commerce app that recommended products from cart history.",
    ],
    logo: "/images/Experience/citsa.jpg",
    products: [],
    tools: [
      "Algorithms",
      "AI",
      "Web Technology",
      "Databases",
      "Software Engineering",
      "HCI",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company: "Headstarter AI",
    location: "New York, USA | Remote",
    duration: "Jul 2024 – Sept 2024",
    summary:
      "Hands-on full-stack and AI/ML sprints, interview prep, and career support for CS students.",
    bullets: [
      "Participated in intensive sprints delivering full-stack and AI/ML implementations reviewed by senior engineers.",
      "Engaged in technical mock interviews with industry professionals, improving interview skills and career readiness.",
      "Built connections with recruiters, hiring managers, and engineers, with Headstarter AI acting as a job referral service.",
    ],
    logo: "/images/Experience/headstarter.png",
    products: [],
    tools: ["Full-stack", "AI/ML", "Interview prep"],
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

const Chip = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "product" | "tool";
}) => (
  <span
    className={
      variant === "product"
        ? "inline-flex items-center rounded-full border border-purple-400/80 px-2 py-0.5 text-[10px] sm:text-xs text-purple-200"
        : "inline-flex items-center rounded-full border border-purple-600/40 bg-white px-2 py-0.5 text-[10px] sm:text-xs font-medium text-black"
    }
  >
    {children}
  </span>
);

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.08,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openExperience = openIndex !== null ? experiences[openIndex] : null;

  useEffect(() => {
    const onScroll = () => setOpenIndex(null);
    if (openIndex !== null) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [openIndex]);

  return (
    <motion.section
      className="relative w-full text-white bg-[#000000] min-h-screen"
      id="experience"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
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
        className="relative z-20 text-5xl font-bold mb-12 text-center text-white underline decoration-purple-600 outline-solid outline-offset-2"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        Career Profile
      </motion.h2>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          {experiences.map((experience, index) => {
            const borderMap: Record<number, string> = {
              0: "md:border-b md:border-r",
              1: "md:border-b md:border-l",
              2: "md:border-t md:border-r",
              3: "md:border-t md:border-l",
            };
            const borders = borderMap[index] || "";
            const extraTools = Math.max(0, experience.tools.length - VISIBLE_TOOLS);
            return (
              <motion.button
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`text-left bg-black text-white rounded-lg md:rounded-none overflow-hidden mt-4 md:mt-0 flex focus:outline-hidden focus:ring-2 focus:ring-white ${borders} md:border-white`}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="flex-none w-24 sm:w-48 relative">
                  {experience.logo ? (
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <span className="text-3xl text-gray-500">No Logo</span>
                  )}
                </div>

                <div className="flex-auto p-3 sm:p-6 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-base sm:text-lg mb-1 sm:mb-2">
                    {experience.company}{" "}
                    <span className="text-sm">• {experience.location}</span>
                  </p>
                  <p className="text-xs sm:text-sm mb-1 sm:mb-2">
                    {experience.duration}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {experience.summary}
                  </p>
                  {experience.products.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {experience.products.map((product) => (
                        <Chip key={product.name} variant="product">
                          {product.name}
                          {product.kind ? ` · ${product.kind}` : ""}
                        </Chip>
                      ))}
                    </div>
                  )}
                  {experience.tools.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {experience.tools.slice(0, VISIBLE_TOOLS).map((tool) => (
                        <Chip key={tool} variant="tool">
                          {tool}
                        </Chip>
                      ))}
                      {extraTools > 0 && (
                        <Chip variant="tool">+{extraTools}</Chip>
                      )}
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {openExperience && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close modal"
              onClick={() => setOpenIndex(null)}
              className="absolute inset-0 w-full h-full backdrop-blur-md bg-black/60"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 mx-4 w-full max-w-3xl overflow-hidden rounded-[12px] border border-white/15 bg-[#1c1c1e] text-white shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              <div className="relative flex h-11 items-center border-b border-white/10 bg-[#2c2c2e] px-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setOpenIndex(null)}
                    className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)] hover:brightness-110"
                  />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
                </div>
                <p className="pointer-events-none absolute inset-x-0 text-center text-xs font-medium text-white/70">
                  {openExperience.company} — {openExperience.title}
                </p>
              </div>

              <div className="max-h-[calc(85vh-2.75rem)] overflow-y-auto p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg border border-white/20">
                    {openExperience.logo && (
                      <Image
                        src={openExperience.logo}
                        alt={`${openExperience.company} logo`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-2xl font-semibold">
                      {openExperience.title} @ {openExperience.company}
                    </h3>
                    <p className="mt-1 text-sm text-purple-400">
                      {openExperience.location} • {openExperience.duration}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-200">{openExperience.summary}</p>

                {openExperience.products.length > 0 && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {openExperience.products.map((product) => (
                      <div
                        key={product.name}
                        className="rounded-xl border border-white/15 bg-white/5 p-3"
                      >
                        <p className="font-semibold">
                          {product.name}
                          {product.kind ? (
                            <span className="ml-2 text-xs font-normal text-purple-300">
                              {product.kind}
                            </span>
                          ) : null}
                        </p>
                        {product.note && (
                          <p className="mt-1 text-sm text-gray-300">{product.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-100">
                  {openExperience.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {openExperience.tools.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {openExperience.tools.map((tool) => (
                      <Chip key={tool} variant="tool">
                        {tool}
                      </Chip>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Experience;
