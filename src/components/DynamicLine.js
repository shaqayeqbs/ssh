import React from 'react';
import { motion } from 'framer-motion';

const DynamicLine = () => (
  <>
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, loop: Infinity }}
      className='hidden md:inline-block'
  
    >
      <div className="line bg-salem w-1 h-[43rem] absolute top-[-125px] opacity-20 left-[-50px] transform -translate-x-1/2" />
      <div className="bg-salem h-1 w-1/3 absolute bottom-[-5rem] opacity-20 left-[-7rem] shadow-salem shadow-lg" />
      <div className="bg-salem h-1 w-5/6 absolute bottom-[-8rem] opacity-20 left-[-7rem] shadow-salem shadow-lg" />
    </motion.div>
  </>
);

export default DynamicLine;
