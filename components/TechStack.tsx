import Image from "next/image";
import Reveal from "@/components/Reveal";
import skills from "@/skills.json";

type Skill = { name: string; icon: string };

const catalog = skills as Record<string, Skill>;

const localIcons: Record<string, string> = {
  javascript: "/images/Techstack/javascript.png",
  typescript: "/images/Techstack/typescript.png",
  python: "/images/Techstack/python.png",
  react: "/images/Techstack/react.png",
  nextjs: "/images/Techstack/next.png",
  tailwindcss: "/images/Techstack/tailwindcss.png",
  figma: "/images/Techstack/figma.png",
  gemini: "/images/Techstack/gemini.png",
  openai: "/images/Techstack/openai.png",
  openrouter: "/images/Techstack/openrouter.png",
  together: "/images/Techstack/together_ai.png",
};

const sections = [
  { title: "Languages", keys: ["javascript", "typescript", "python"] },
  { title: "Frameworks", keys: ["react", "nextjs", "django", "reactnative", "adonisjs"] },
  { title: "Styling", keys: ["tailwindcss", "css3", "materialui"] },
  { title: "Data & Backend", keys: ["postgresql", "supabase", "prisma", "pinecone", "chromadb"] },
  { title: "Tooling", keys: ["vite", "rollup", "turbo", "eslint", "prettier"] },
  { title: "Platforms", keys: ["vercel", "netlify", "githubactions"] },
  { title: "AI Model Platforms", keys: ["openrouter", "together", "gemini", "openai", "groq"] },
  { title: "Testing", keys: ["cypress"] },
  { title: "Design", keys: ["figma", "framer"] },
];

function iconSrc(id: string, skill: Skill) {
  if (localIcons[id]) return { src: localIcons[id], remote: false };
  if (skill.icon.startsWith("https://cdn.jsdelivr.net/")) {
    return { src: skill.icon, remote: true };
  }
  return null;
}

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Stack
          </h2>
        </Reveal>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {sections.map((section) => (
            <Reveal key={section.title}>
              <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:gap-8">
                <h3 className="w-full shrink-0 font-mono text-sm text-muted sm:w-44 sm:pt-2">
                  {section.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {section.keys.map((key) => {
                    const skill = catalog[key];
                    if (!skill) return null;
                    const icon = iconSrc(key, skill);
                    return (
                      <li key={key}>
                        <span className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-3 text-base">
                          {icon ? (
                            <Image
                              src={icon.src}
                              alt=""
                              width={18}
                              height={18}
                              unoptimized={icon.remote}
                              className="h-[18px] w-[18px] object-contain"
                            />
                          ) : null}
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
