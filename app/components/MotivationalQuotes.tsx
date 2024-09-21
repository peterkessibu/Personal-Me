'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotivationalQuotes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates every time it comes into view
    threshold: 0.1,
  });

  const quotes = [
    "Doing research is not taking action. Talking to people about what you're doing is not taking action. Taking action is taking action.",
    "The happiness of pursuit is not the pursuit of happiness.",
    "They say Baby steps are the most important steps. But I say, Babies grow",
    "Just Do It !",
    "nOBODY cARES, wORK hARDER, bE sMARTER, aND sTAY hUMBLE !",
  ];

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      id="quotes"
      ref={ref}
      className="p-5 w-full max-w-screen bg-gradient-to-r from-blue-200 to-blue-400 via-blue-300 text-white"
      initial="hiddenLeft"
      animate={inView ? 'visible' : 'hiddenLeft'}
    >
      <div className="flex flex-wrap justify-center gap-8">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-64 md:w-80"
            initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
            animate={inView ? 'visible' : index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
          >
            <p className="italic text-center justify-center">{quote}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MotivationalQuotes;
