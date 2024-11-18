"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      name: "LearnTab",
      imgSrc: "/images/Projects/image.png",
      links: {
        github: "https://github.com/peterkessibu/LearnTab",
        demo: "https://learn-tab.vercel.app",
        youtube: "https://youtu.be/o7JCf9YURLI?si=lSr_SU-mM0Fvo71X",
      },
    },
    {
      name: "ShelfSense",
      imgSrc: "/images/Projects/image copy.png",
      links: {
        github: "https://github.com/peterkessibu/Pantry-Tracker",
        demo: "https://shelfsense.vercel.app",
        youtube: "https://youtu.be/yOQJVGSe92E?si=JEleKE3P0RpP_R3Y",
      },
    },
    {
      name: "Mart Customer Assistant",
      imgSrc: "/images/Projects/ai_chatbot_img.png",
      links: {
        github: "https://github.com/peterkessibu/AI-Mart-Chatbot",
        demo: "",
        youtube: "https://youtu.be/3dZsz88QfYk?si=VH4eGlOgufyIqvmL",
      },
    },
    {
      name: "Previous Personal Project",
      imgSrc: "/images/Projects/personal_web_img.png",
      links: {
        github: "https://github.com/peterkessibu/Personal-Website",
        demo: "https://peterkessibu.netlify.app/",
        youtube: "",
      },
    },
  ];

  return (
    <motion.section
      id="projects"
      className=" bg-white w-full text-[#040413]"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.h2
        className="text-5xl font-bold text-center my-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-y-8 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border p-10 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          >
            <div className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <div className="flex space-x-3">
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#7881f5] transition duration-300"
                  >
                    <FaLink className="w-5 h-5" />
                  </Link>
                )}
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-black transition duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                )}
                {project.links.youtube && (
                  <Link
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#ca3939] transition duration-300"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              {/* Image Animation */}
              <motion.div
                className="w-full md:w-1/2 mb-4 mt-8 relative aspect-video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={project.imgSrc}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  className="rounded-t-xl p-4 object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;