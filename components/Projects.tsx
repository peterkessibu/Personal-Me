import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { DotGrid } from "@paper-design/shaders-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

type Project = {
  name: string;
  description?: string;
  imgSrc: string;
  links: {
    github: string;
    demo: string;
    youtube: string;
  };
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="border border-white p-4 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeInOut",
      }}
    >
      <div className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">{project.name}</h3>
        <div className="flex space-x-3">
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <FaLink className="w-5 h-5" />
            </Link>
          )}
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <motion.div
          className="w-full mt-8 relative aspect-video"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {!imgError ? (
            <Image
              src={project.imgSrc}
              alt={project.name}
              fill
              quality={100}
              className="rounded-lg p-6 object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-6 flex items-center justify-center rounded-lg border border-purple-500/50 bg-black text-center px-4">
              <p className="text-sm text-gray-300">
                Screenshot coming soon — drop it at{" "}
                <span className="text-purple-300">{project.imgSrc}</span>
              </p>
            </div>
          )}
        </motion.div>
      </div>
      {project.description && (
        <p className="relative z-10 mt-2 px-2 text-sm text-gray-300">
          {project.description}
        </p>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      name: "Mockly (V1)",
      description:
        "Real-time conversational AI with low-latency streaming for two-way, context-aware dialogue. Next.js and TypeScript.",
      imgSrc: "/images/Projects/mockly.png",
      links: {
        github: "",
        demo: "",
        youtube: "",
      },
    },
    {
      name: "Tiny-Notes-AI",
      description:
        "Note transformation with Next.js 15, ShadCN, and Gemini 2.0 Flash — 80 users in week one, ~20 DAU in March.",
      imgSrc: "/images/Projects/tiny-notes.png",
      links: {
        github: "https://github.com/peterkessibu/tinynote",
        demo: "https://tinynote-ai.vercel.app/",
        youtube: "",
      },
    },
    {
      name: "MediScript AI",
      imgSrc: "/images/Projects/mediscript.png",
      links: {
        github: "https://github.com/peterkessibu/medscript",
        demo: "https://medi-script-one.vercel.app/",
        youtube: "",
      },
    },
    {
      name: "Cod-Aid",
      imgSrc: "/images/Projects/cod-aid.png",
      links: {
        github: "",
        demo: "https://cod-aid.vercel.app",
        youtube: "",
      },
    },
    {
      name: "Brain Tumor Classification",
      description:
        "Streamlit MRI classifier for glioma, meningioma, pituitary, and no-tumor using Xception transfer learning, a custom CNN, saliency maps, and Gemini 1.5 Flash explanations.",
      imgSrc: "/images/Projects/brain-tumor.png",
      links: {
        github: "https://github.com/peterkessibu/brain-tumor-classification",
        demo: "",
        youtube: "",
      },
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative w-full text-white bg-[#000000] min-h-screen"
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
      <motion.div
        className="relative z-20 mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        <h2 className="text-5xl font-bold text-white underline decoration-purple-600 outline-solid outline-offset-2">
          Projects
        </h2>
        <p className="mt-4 text-sm tracking-wide text-purple-300 uppercase">
          Personal
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
