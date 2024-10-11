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
      description: [
        {
          title: "Description",
          subFeatures: [
            "LearnTab is a web application designed to help users create, manage, and review flashcards. It offers a modern interface with responsive design and various features to enhance the flashcard creation experience.",
          ],
        },
        {
          title: "Features",
          subFeatures: [
            "Dynamic Flashcard Creation: AI-powered flashcards on various topics",
            "Responsive Design: Optimized for all devices.",
            "Real-Time Updates: Firebase for data management.",
          ],
        },
        {
          title: "Tech Stack",
          subFeatures: ["Next Js", "Firebase", "AI Integration - Gemini API"],
        },
      ],
      imgSrc: "/images/Projects/learntab_img.png",
      links: {
        github: "https://github.com/peterkessibu/LearnTab",
        demo: "https://learn-tab.vercel.app",
        youtube: "https://youtu.be/o7JCf9YURLI?si=lSr_SU-mM0Fvo71X",
      },
    },
    {
      name: "ShelfSense",
      description: [
        {
          title: "Description",
          subFeatures: [
            "Shelfsense is an inventory management application that allows users to add, edit, remove, and sort inventory items.",
          ],
        },
        {
          title: "Features",
          subFeatures: [
            "Add, Edit, and Remove Items: Users can manage inventory items with ease.",
            "Sort and Search: Inventory items can be sorted alphabetically and searched for quickly.",
            "Real-Time Updates: The app provides instant updates using Firebase Firestore.",
          ],
        },
        { title: "Tech Stack", subFeatures: ["Next JS", "Firebase"] },
      ],
      imgSrc: "/images/Projects/shelfsense_img.png",
      links: {
        github: "https://github.com/peterkessibu/Pantry-Tracker",
        demo: "https://shelfsense.vercel.app",
        youtube: "https://youtu.be/yOQJVGSe92E?si=JEleKE3P0RpP_R3Y",
      },
    },
    {
      name: "Mart Customer Assistant",
      description: [
        {
          title: "Description",
          subFeatures: [
            "This is an AI-powered chatbot designed to help with customer service of a mart. The chatbot interacts with users, providing assistance for items and overall mart day-to-day tasks.",
          ],
        },
        {
          title: "Features",
          subFeatures: [
            "Real-time Chat with OpenAI GPT Model for Intelligent Responses, Responsive Design using TailwindCSS",
          ],
        },
        {
          title: "Tech Stack",
          subFeatures: ["Next JS", "Firebase", "AI Integration - OpenAI"],
        },
      ],
      imgSrc: "/images/Projects/ai_chatbot_img.png",
      links: {
        github: "https://github.com/peterkessibu/AI-Mart-Chatbot",
        demo: "",
        youtube: "https://youtu.be/3dZsz88QfYk?si=VH4eGlOgufyIqvmL",
      },
    },
    {
      name: "Previous Personal Project",
      description: [
        { title: "Description", subFeatures: ["A personal website"] },
        {
          title: "Tech Stack",
          subFeatures: ["HTML", "Tailwindcss", "Javascript"],
        },
      ],
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
      className="p-4 bg-white w-full"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.h2
        className="text-5xl font-bold text-center my-12 text-[#06061f]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-y-8 p-6"
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

            <div className="flex flex-col md:flex-row">
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

              {/* Description Section */}
              <div className="bg-white p-2 mt-0 ml-4 w-full">
                <ol className="list-decimal ml-5 text-[#06061f] text-base sm:text-base">
                  {project.description.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <span className="font-semibold">{feature.title}</span>
                      {feature.subFeatures.length > 0 && (
                        <ul className="list-disc ml-1 mt-1 text-gray-500 text-sm">
                          {feature.subFeatures.map((sub, j) => (
                            <li key={j} className="mb-1">
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
