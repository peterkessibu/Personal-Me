import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLink } from "react-icons/fa";
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
      name: "Cod-Aid",
      imgSrc: "/images/Projects/cod-aid.png",
      links: {
        github: "",
        demo: "https://cod-aid.vercel.app",
        youtube: "",
      },
    },
    {
      name: "Lorem Colors",
      imgSrc: "/images/Projects/lorem_colors.png",
      links: {
        github: "https://github.com/peterkessibu/lorem-colors",
        demo: "https://lorem-colors.vercel.app",
        youtube: "",
      },
    },
    {
      name: "LearnTab",
      imgSrc: "/images/Projects/learntab.png",
      links: {
        github: "https://github.com/peterkessibu/LearnTab",
        demo: "https://learn-tab.vercel.app",
        youtube: "",
      },
    },
    {
      name: "ShelfSense",
      imgSrc: "/images/Projects/shelfsense.png",
      links: {
        github: "https://github.com/peterkessibu/Pantry-Tracker",
        demo: "https://shelfsense.vercel.app",
        youtube: "",
      },
    },
    {
      name: "Mart Customer Assistant",
      imgSrc: "/images/Projects/ai_chatbot_img.png",
      links: {
        github: "https://github.com/peterkessibu/AI-Mart-Chatbot",
        demo: "",
        youtube: "",
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
      className="w-full text-[#31a9d8]"
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-[#31a9d8] p-4 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105"
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
              {/* Image Animation */}
              <motion.div
                className="w-full mt-8 relative aspect-video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={project.imgSrc}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  quality={100}
                  className="rounded-lg p-6"
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
