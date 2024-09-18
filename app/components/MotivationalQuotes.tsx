'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotivationalQuotes = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animates every time it comes into view
    threshold: 0.1,
  });

  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Believe you can and you're halfway there.",
  ];

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="quotes"
      ref={ref}
      className="p-10 w-full max-w-screen bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
      initial="hiddenLeft"
      animate={inView ? 'visible' : 'hiddenLeft'}
      style={{
        backgroundImage: `url('/path/to/your/texture-image.jpg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backdropFilter: 'blur(5px)',
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Motivational Quotes</h2>

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
            <p className="italic">{quote}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MotivationalQuotes;
