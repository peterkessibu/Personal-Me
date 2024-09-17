// 'use client';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Image from 'next/image';

// const Hobbies = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const hobbies = [
//     { name: 'Reading', image: '/images/reading.png' },
//     { name: 'Coding', image: '/images/coding.png' },
//     { name: 'Hiking', image: '/images/hiking.png' },
//     { name: 'Gaming', image: '/images/gaming.png' },
//   ];

//   return (
//     <motion.section
//       id="hobbies"
//       className="p-10 bg-gray-200"
//       ref={ref}
//       initial={{ opacity: 0, x: 50 }}
//       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-3xl font-bold text-center mb-8">Hobbies</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
//         {hobbies.map((hobby, index) => (
//           <motion.div
//             key={hobby.name}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//             initial={{ opacity: 0, y: 50 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }} // Delays for individual cards
//           >
//             <Image
//               src={hobby.image}
//               alt={hobby.name}
//               width={200}
//               height={200}
//               className="object-cover w-full h-48"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-semibold">{hobby.name}</h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Hobbies;
