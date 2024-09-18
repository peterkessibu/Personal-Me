'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <ProjectItem name="Project 1" description="Project 1 description" />
        <ProjectItem name="Project 2" description="Project 2 description" />
        <ProjectItem name="Project 2" description="Project 2 description" />
        <ProjectItem name="Project 2" description="Project 2 description" />
      </div>
    </motion.section>
  );
};

export default Projects;
