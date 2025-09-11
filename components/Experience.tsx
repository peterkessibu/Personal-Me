import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  duration: string;
  summary: string;
  bullets: string[];
  logo: string;
};

export const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer",
    company: "Mande",
    location: "Accra, Ghana | Remote",
    duration: "Freelance",
    summary:
      "Mande.ai: career journaling platform enabling insights and resume tailoring.",
    bullets: [
      "Collaborated in a 4-member cross-functional team to ship AI web apps.",
      "Launched Resume & Empulse; 1,000+ first-release users; 100+ active.",
      "Built AI resume enhancer with Gemini 2.5 Flash‑Lite for tailored recs.",
      "Designed RAG pipelines with industry data for context.",
      "Applied prompt engineering for structured, job-specific outputs.",
      "Integrated resume parsing for milestone extraction vs job descriptions.",
      "Delivered Empulse (4-day build) with real-time productivity visualization.",
      "Next.js 15, TS, TailwindCSS, Vercel CI/CD; SSR + ISR.",
      "Modular architecture enabling rapid iteration and scalability.",
    ],
    logo: "/images/Experience/mande.png",
  },
  {
    title: "AI Engineering Intern",
    company: "ShaQ Express",
    location: "Accra, Ghana | On-site",
    duration: "Mar 2025 – May 2025",
    summary:
      "Ghana’s first Super App: e-commerce, health, food delivery, logistics.",
    bullets: [
      "Increased feature engagement by ~20% with AI across Web/Mobile.",
      "Engineered prompts for Gemini; ~70% response accuracy improvement.",
      "Shipped AI services with AdonisJS + REST; ~15% latency reduction.",
      "Ensured reliability with e2e testing and backend optimization.",
    ],
    logo: "/images/Experience/shaq.png",
  },
  {
    title: "Student",
    company: "University of Cape Coast",
    location: "Cape Coast, Ghana",
    duration: "Jan 2022 – Present",
    summary: "BSc. Computer Science.",
    bullets: [
      "Relevant coursework/projects and societies (dummy data placeholder).",
      "Awards/hackathons as applicable (dummy data placeholder).",
    ],
    logo: "/images/Experience/citsa.jpg",
  },
  {
    title: "Software Engineer Fellow",
    company: "Headstarter AI",
    location: "New York, USA | Remote",
    duration: "Jul 2024 – Sept 2024",
    summary:
      "Hands-on full-stack and AI/ML sprints, interview prep, career support.",
    bullets: [
      "Delivered sprint work reviewed by senior engineers (full-stack & AI/ML).",
      "Participated in technical mock interviews to improve interviewing skills.",
      "Built connections with recruiters and engineers; referral support.",
    ],
    logo: "/images/Experience/headstarter.png",
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setOpenIndex(null);
    if (openIndex !== null) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [openIndex]);

  return (
    <div
      className="bg-black text-white py-8"
      id="experience"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center my-12"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          Career Profile
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          {experiences.map((experience, index) => {
            // Desktop-only internal dividers to create a 2x2 grid with borders like the image
            const borderMap: Record<number, string> = {
              0: "md:border-b md:border-r", // top-left
              1: "md:border-b md:border-l", // top-right
              2: "md:border-t md:border-r", // bottom-left
              3: "md:border-t md:border-l", // bottom-right
            };
            const borders = borderMap[index] || "";
            return (
              <motion.button
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`text-left bg-black text-white rounded-lg md:rounded-none overflow-hidden mt-4 md:mt-0 flex focus:outline-none focus:ring-2 focus:ring-purple-500 ${borders} md:border-purple-700`}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                {/* Image Container */}
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

                {/* Content Container */}
                <div className="flex-auto p-3 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-base sm:text-lg mb-1 sm:mb-2">
                    {experience.company} <span className="text-sm">• {experience.location}</span>
                  </p>
                  <p className="text-xs sm:text-sm mb-1 sm:mb-2">
                    {experience.duration}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {experience.summary}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Frosted backdrop */}
            <button
              aria-label="Close modal"
              onClick={() => setOpenIndex(null)}
              className="absolute inset-0 w-full h-full backdrop-blur-md bg-black/60"
            />

            {/* Modal content */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 mx-4 w-full max-w-3xl bg-black text-white rounded-2xl border border-white/60 shadow-2xl p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              {openIndex !== null && (
                <div>
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 flex-none rounded-lg overflow-hidden border border-white/60">
                      {experiences[openIndex].logo && (
                        <Image
                          src={experiences[openIndex].logo}
                          alt={`${experiences[openIndex].company} logo`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <div className="flex-auto">
                      <h3 className="text-2xl font-semibold">
                        {experiences[openIndex].title} @ {experiences[openIndex].company}
                      </h3>
                      <p className="text-purple-600 text-sm mt-1">
                        {experiences[openIndex].location} • {experiences[openIndex].duration}
                      </p>
                    </div>
                    <button
                      onClick={() => setOpenIndex(null)}
                      aria-label="Close"
                      className="ml-auto -mt-2 -mr-2 text-white/80 hover:text-white text-2xl leading-none"
                    >
                      ×
                    </button>
                  </div>

                  <p className="mt-4 text-gray-200">{experiences[openIndex].summary}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-100">
                    {experiences[openIndex].bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
