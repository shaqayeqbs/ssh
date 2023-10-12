import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
function Processes() {
  const processItems = [
    {
      title: 'How we build',
      description:
        "We prioritize our clients' success, understanding your unique needs and delivering tailored solutions that drive your business growth.",
    },
    {
      title: 'Discovery stage',
      description:
        'We prioritize our clients success, understanding your unique needs and delivering tailored solutions that drive your business growth.',
    },
    {
      title: 'Development stage',
      description:
        'We develop your product in iterative substages, allowing for regular testing, feedback, and adjustments to ensure alignment with your expectations.',
    },
    {
      title: 'Continuous development and support',
      description:
        'Post-launch, we provide ongoing support, troubleshoot issues, and develop additional features to keep your product up-to-date and valuable.',
    },
  ];

  return (
    <div className="flex flex-wrap w-full  justify-center gap-4 p-4 py-10 md:py-28">
      {processItems.map((process, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0 * index }}
          whileHover={{ scale: 1.2 }}
          autoCapitalize='3'
          className="bg-jordyBlue/20 relative font-bold rounded-lg shadow-md p-4 mx-2 w-80"
        >
          <h2 className="text-2xl my-6 font-extrabold mb-4 text-salem text-center">{process.title}</h2>
          <p className='text-center py-2 tracking-widest text-lg pb-10'>{process.description}</p>
          <div className='border-salem text-salem border-2 w-max text-center  bottom-5 rounded-full p-1 px-3 alig left-[45%] absolute'>{index +1}</div>
        </motion.div>
      ))}
      {processItems.map((index) => 
        index < processItems.length - 1 && (
          <div key={index} className="absolute bottom-0 !z-50" >
             <FiArrowRight/>
          </div>
        )
      )
    } 
    </div>
  );
}

export default Processes;
