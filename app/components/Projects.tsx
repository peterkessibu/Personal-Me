'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Example project data
  const projects = [
    { name: "Project 1", description: "Project 1 description", imgSrc: "/path/to/image1.jpg", links: { github: '#', demo: '#', youtube: '#' } },
    { name: "Project 2", description: "Project 2 description", imgSrc: "/path/to/image2.jpg", links: { github: '#', demo: '#', youtube: '#' } },
    // Add more projects as needed
  ];

  return (
    <motion.section
      id="projects"
      className="p-10 h-screen bg-white w-full"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center my-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border p-6 rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute right-2 flex space-x-5 top-2 mr-3">
              <a href={project.links.demo} className="text-gray-700 hover:text-blue-500 transition duration-300">
                <FaLink className="w-5 h-5" />
              </a>
              <a href={project.links.github} className="text-gray-700 hover:text-gray-900 transition duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={project.links.youtube} className="text-gray-700 hover:text-red-500 transition duration-300">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
            <motion.img
              src={project.imgSrc}
              alt={project.name}
              className="w-full h-40 object-cover mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {project.name}
            </motion.h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
