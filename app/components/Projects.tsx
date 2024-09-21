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
      name: "LearnTab",
      description: [
        {
          title: "Description", subFeatures: ["Dynamic Flashcard Creation: Generate flashcards on various topics using AI models.", "Responsive Design: Optimized for mobile, tablet, and desktop views.", "Real - Time Updates: Uses Firebase for real - time data management."]
        },
        { title: "Tech Stack", subFeatures: ["Next Js", "Firebase", "AI Integration - Gemini API"] }
      ],
      imgSrc: "/images/Projects/learntab_img.png",
      links: {
        github: 'https://github.com/peterkessibu/LearnTab',
        demo: 'https://learn-tab.vercel.app',
        youtube: ''
      }
    },
    {
      name: "Project 2",
      description: [
        { title: "Feature A", subFeatures: [] },
        { title: "Feature B", subFeatures: ["Sub-feature B.1", "Sub-feature B.2"] }
      ],
      imgSrc: "/path/to/image2.jpg",
      links: { github: '', demo: '', youtube: 'https://youtu.be/3dZsz88QfYk?si=VH4eGlOgufyIqvmL' }
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
