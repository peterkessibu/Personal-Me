import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
    {
        title: 'Frontend Developer',
        company: 'Tech Corp',
        duration: 'Jan 2020 - Present',
        description: 'Worked on creating stunning user interfaces with React.js and optimized applications for maximum speed.',
        logo: '/path-to-logo1.png', // Optional logo
    },
    {
        title: 'UI/UX Designer',
        company: 'Design Studio',
        duration: 'Jun 2018 - Dec 2019',
        description: 'Designed user-friendly interfaces, conducted user research, and improved the overall user experience for multiple clients.',
        logo: '/path-to-logo2.png', // Optional logo
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
        <div className="bg-gray-100 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-12 text-gray-900"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Work Experience
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Placeholder for Company Logo */}
                            <div className="bg-gray-200 flex justify-center items-center h-40">
                                {experience.logo ? (
                                    <Image
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                ) : (
                                    <span className="text-3xl text-gray-500">No Logo</span>
                                )}
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{experience.title}</h3>
                                <p className="text-gray-600 text-lg mb-2">{experience.company}</p>
                                <p className="text-sm text-gray-400 mb-4">{experience.duration}</p>

                                <p className="text-gray-700 leading-relaxed">{experience.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
