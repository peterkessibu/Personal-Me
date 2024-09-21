'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      name: "LearnTab - Flashcard Creator",
      description: [
        {
          title: "Description", subFeatures: ["LearnTab is a web application designed to help users create, manage, and review flashcards. It offers a modern interface with responsive design and various features to enhance the flashcard creation experience."]
        },
        {
          title: "Features", subFeatures: ["Dynamic Flashcard Creation: Generate flashcards on various topics using AI models", "Responsive Design: Optimized for mobile, tablet, and desktop views.","Real - Time Updates: Uses Firebase for real - time data management."]},
        { title: "Tech Stack", subFeatures: ["Next Js", "Firebase", "AI Integration - Gemini API"] }
      ],
      imgSrc: "/images/Projects/learntab_img.png",
      links: {
        github: 'https://github.com/peterkessibu/LearnTab',
        demo: 'https://learn-tab.vercel.app',
        youtube: 'https://youtu.be/o7JCf9YURLI?si=lSr_SU-mM0Fvo71X'
      }
    },
    {
      name: "Mart Customer Assistant - AI Powered",
      description: [
        { title: "Description", subFeatures: ['This is an AI-powered chatbot designed to help with customer service of a mart.The chatbot interacts with users, providing assistance for items and overall mart day-to-day task.'] },
        {
          title: "Features", subFeatures: ["User Authentication: Google Sign-In using Firebase Authentication.", "Real - time Chat: Users can ask interview - related questions, and the chatbot responds with relevant information.", "Responsive Design: Styled using TailwindCSS, the app is mobile- friendly and responsive.", "Powered by OpenAI: The chatbot uses OpenAI's GPT model for generating intelligent and relevant responses to interview questions."]},
        { title: "Tech Stack", subFeatures: ["Next JS", "Firebase" , "AI Integration - OpenAI"] },
      ],
      imgSrc: "/images/Projects/ai_chatbot_img.png",
      links: { github: 'https://github.com/peterkessibu/AI-Mart-Chatbot', demo: '', youtube: 'https://youtu.be/3dZsz88QfYk?si=VH4eGlOgufyIqvmL' }
    },
    {
      name: "ShelfSense - Pantry Tracker",
      description: [
        { title: "Description", subFeatures: ["Shelfsense is an inventory management application that allows users to add, edit, remove, and sort inventory items. It also provides the ability to search through the inventory list and displays the total count of all items in the inventory."] },
        {
          title: "Features", subFeatures: ["Add Items: Users can add items to the inventory with a specified name and quantity.",
          "Edit Items: Users can edit the name and quantity of items already in the inventory.",
          "Remove Items: Users can remove items from the inventory.",
          "Sort Items: Inventory items can be sorted alphabetically by name.",
          "Search Items: Users can search for specific items using the search bar.",
          "Real-Time Updates: The app provides real-time updates using Firebase Firestore.",
] },
        { title: "Tech Stack", subFeatures: ["Next JS", "Firebase"] },
      ],
      imgSrc: "/images/Projects/shelfsense_img.png",
      links: { github: 'https://github.com/peterkessibu/Pantry-Tracker', demo: '', youtube: 'https://youtu.be/yOQJVGSe92E?si=JEleKE3P0RpP_R3Y' }
    },
    {
      name: "Previous Personal Project",
      description: [
        { title: "Description", subFeatures: ["A personal website"] },
        { title: "Tech Stack", subFeatures: ["HTML", "Tailwindcss", "Javascript"] }
      ],
      imgSrc: "/images/Projects/personal_web_img.png",
      links: { github: 'https://github.com/peterkessibu/Personal-Website', demo: 'https://peterkessibu.netlify.app/', youtube: '' }
    },
  ];

  return (
    <motion.section
      id="projects"
      className="p-4 bg-white w-full"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-center my-12 text-[#06061f]">Projects</h2>
      <div className="grid grid-cols-1 gap-y-5 p-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border p-10 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <div className="flex space-x-3">
                {project.links.demo && (
                  <Link href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#7881f5] transition duration-300">
                    <FaLink className="w-5 h-5" />
                  </Link>
                )}
                {project.links.github && (
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition duration-300">
                    <FaGithub className="w-5 h-5" />
                  </Link>
                )}
                {project.links.youtube && (
                  <Link href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#ca3939] transition duration-300">
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <motion.div
                className="w-full md:w-1/2 mb-4 mt-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.imgSrc}
                  alt={project.name}
                  layout="responsive"
                  width={700}
                  height={475}
                  objectFit="cover"
                  className="rounded-t-xl p-4"
                />
              </motion.div>

              {/* Description */}
              {project.description && (
                <div className="bg-white bg-opacity-80 p-2 md:p-6 mt-4 md:mt-0 md:ml-4 md:w-1/2">
                  <ol className="list-decimal ml-5 text-gray-600">
                    {project.description.map((feature, i) => (
                      <li key={i} className="mb-2">
                        {feature.title}
                        {feature.subFeatures.length > 0 && (
                          <ul className="list-disc ml-5 mt-1 text-gray-500">
                            {feature.subFeatures.map((sub, j) => (
                              <li key={j}>{sub}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
