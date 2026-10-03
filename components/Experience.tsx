"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-media-query";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type ProductKind = "AI" | "Mobile" | "Web";

type ExperienceProduct = {
  name: string;
  kind?: ProductKind;
  note?: string;
};

type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  duration: string;
  summary: string;
  bullets: string[];
  logo?: string;
  products: ExperienceProduct[];
  tools: string[];
  accent?: "gcb";
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
      "Built Empulse in four days: a productivity-tracking tool with real-time progress visualization for service personnel in Ghana.",
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
    title: "",
    company: "GCB Bank PLC",
    duration: "October 2025 – Present",
    summary:
      "At GCB Bank, I drive customer growth and lending. I onboard customers onto the mobile app and USSD, open accounts and bring in deposits, follow up on drop-offs in the COS onboarding system, and help customers from the police, teaching, nursing, and public works secure loans. That work helped the branch rank among the top performers in June.",
    bullets: [
      "Onboarded 2,000+ customers onto the mobile app and USSD through customer outreach, branch referrals, and follow-up calls.",
      "Brought in over GHS 300,000 in deposits through account opening, using marketing calls and walk-in conversions.",
      "Reduced customer drop-off on the new COS onboarding system through follow-up and recovery calls, with a success rate above 40%.",
      "Helped secure loans for 70+ customers across the police, teaching, nursing, and public works, totalling over GHS 1 million, through needs assessment and product pitching.",
      "Contributed to the branch being ranked 2nd best high-performing branch in June.",
    ],
    logo: "/images/Experience/gcb.png",
    products: [],
    tools: [],
    accent: "gcb",
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

const Chip = ({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "product" | "tool" | "gcb";
}) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-1 text-sm",
      variant === "product" && "border-primary/50 text-primary-bright",
      variant === "tool" && "border-border bg-background text-foreground",
      variant === "gcb" && "border-gcb/40 bg-gcb/10 font-medium text-gcb",
    )}
  >
    {children}
  </span>
);

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = usePrefersReducedMotion();
  const openExperience = openIndex !== null ? experiences[openIndex] : null;

  useEffect(() => {
    if (openIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  return (
    <section id="experience" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Experience
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {experiences.map((experience, index) => {
            const extraTools = Math.max(0, experience.tools.length - VISIBLE_TOOLS);
            const isGcb = experience.accent === "gcb";
            return (
              <Reveal key={experience.company}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className={cn(
                    "flex h-full w-full gap-4 rounded-[14px] border bg-surface p-4 text-left transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 md:hover:-translate-y-1",
                    isGcb
                      ? "border-gcb/40 hover:border-gcb/70 focus-visible:outline-gcb"
                      : "border-border hover:border-primary/40 focus-visible:outline-primary md:hover:shadow-[0_24px_50px_-28px_var(--glow)]",
                  )}
                >
                  {experience.logo ? (
                    <span className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-[10px] border border-border bg-background">
                      <Image
                        src={experience.logo}
                        alt=""
                        width={82}
                        height={82}
                        className="h-full w-full object-contain p-1.5"
                      />
                    </span>
                  ) : null}
                  <span className="min-w-0">
                    {isGcb ? (
                      <Chip variant="gcb">{experience.company}</Chip>
                    ) : null}
                    <span
                      className={cn(
                        "block font-display text-xl font-semibold tracking-tight",
                        isGcb && "mt-2",
                      )}
                    >
                      {experience.title}
                    </span>
                    {isGcb ? null : (
                      <span className="mt-1 block text-base text-muted">
                        {experience.company}
                        {experience.location ? ` · ${experience.location}` : ""}
                      </span>
                    )}
                    <span
                      className={cn(
                        "mt-1 block font-mono text-sm",
                        isGcb ? "text-gcb" : "text-muted",
                      )}
                    >
                      {experience.duration}
                    </span>
                    <span className="mt-3 block text-base leading-relaxed">
                      {experience.summary}
                    </span>
                    {experience.products.length > 0 ? (
                      <span className="mt-3 flex flex-wrap gap-1.5">
                        {experience.products.map((product) => (
                          <Chip key={product.name} variant="product">
                            {product.name}
                            {product.kind ? ` · ${product.kind}` : ""}
                          </Chip>
                        ))}
                      </span>
                    ) : null}
                    {experience.tools.length > 0 ? (
                      <span className="mt-2 flex flex-wrap gap-1.5">
                        {experience.tools.slice(0, VISIBLE_TOOLS).map((tool) => (
                          <Chip key={tool} variant="tool">
                            {tool}
                          </Chip>
                        ))}
                        {extraTools > 0 ? <Chip variant="tool">+{extraTools}</Chip> : null}
                      </span>
                    ) : null}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {openExperience ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close experience details"
              onClick={() => setOpenIndex(null)}
              className="absolute inset-0 h-full w-full bg-background/70 backdrop-blur-md"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-title"
              className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-[14px] border border-border bg-surface shadow-[0_30px_80px_-24px_var(--glow)]"
              initial={reduce ? false : { y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { y: 8, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <p className="font-mono text-sm text-muted">
                  {openExperience.company}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="inline-flex h-11 items-center rounded-full px-3 text-base"
                >
                  Close
                </button>
              </div>
              <div className="max-h-[calc(85vh-3.5rem)] overflow-y-auto p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  {openExperience.logo ? (
                    <div className="relative h-[95px] w-[95px] shrink-0 overflow-hidden rounded-[10px] border border-border">
                      <Image
                        src={openExperience.logo}
                        alt=""
                        width={95}
                        height={95}
                        className="h-full w-full object-contain p-1.5"
                      />
                    </div>
                  ) : null}
                  <div>
                    {openExperience.accent === "gcb" ? (
                      <Chip variant="gcb">{openExperience.company}</Chip>
                    ) : null}
                    <h3
                      id="experience-title"
                      className={cn(
                        "font-display text-2xl font-semibold",
                        openExperience.accent === "gcb" && "mt-2",
                      )}
                    >
                      {openExperience.title}
                      {openExperience.accent === "gcb" ? null : ` · ${openExperience.company}`}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-base",
                        openExperience.accent === "gcb" ? "text-gcb" : "text-primary-bright",
                      )}
                    >
                      {openExperience.location
                        ? `${openExperience.location} · ${openExperience.duration}`
                        : openExperience.duration}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed">{openExperience.summary}</p>
                {openExperience.products.length > 0 ? (
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {openExperience.products.map((product) => (
                      <div key={product.name} className="rounded-xl border border-border p-3">
                        <p className="text-base font-medium">
                          {product.name}
                          {product.kind ? (
                            <span className="ml-2 text-sm font-normal text-primary-bright">
                              {product.kind}
                            </span>
                          ) : null}
                        </p>
                        {product.note ? (
                          <p className="mt-1 text-base text-muted">{product.note}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed">
                  {openExperience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {openExperience.tools.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {openExperience.tools.map((tool) => (
                      <Chip key={tool} variant="tool">
                        {tool}
                      </Chip>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
