'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const experiences = [
    {
        title: 'Software Engineer Fellow',
        company: 'HEADSTARTER',
        duration: 'July 2024 - Sept 2024',
        description: 'Worked on building 5 software projects',
        logo: '/images/Experience/headstarter.png', // Ensure this path is correct
    },
    {
        title: 'Student',
        company: 'UNIVERSITY OF CAPE COAST',
        duration: 'Jan 2022 - present',
        description: 'BSc. Computer Science',
        logo: '/images/Experience/citsa.jpg', // Ensure this path is correct
    },
    {
        title: 'Software Engineer',
        company: 'CodeBase Inc.',
        duration: 'Sep 2016 - May 2018',
        description: 'Developed scalable backend services, integrated third-party APIs, and led a team of 5 developers.',
        logo: '', // No logo provided
    },
];

const Experience = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-16" id='experience'>
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-12 text-gray-900"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Career Profile
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {experiences.map((experience, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: true,
                            threshold: 0.2,
                        });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mt-4 flex"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Image Container */}
                                <div className="flex-none w-48 relative">
                                    {experience.logo ? (
                                        <Image
                                            src={experience.logo}
                                            alt={`${experience.company} logo`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="absolute inset-0 w-full h-full"
                                        />
                                    ) : (
                                        <span className="text-3xl text-gray-500">No Logo</span>
                                    )}
                                </div>

                                {/* Content Container */}
                                <div className="flex-auto p-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{experience.title}</h3>
                                    <p className="text-gray-600 text-lg mb-2">{experience.company}</p>
                                    <p className="text-sm text-gray-400 mb-4">{experience.duration}</p>
                                    <p className="text-gray-700 leading-relaxed">{experience.description}</p>
                                </div>
                            </motion.div>
                        );

                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
