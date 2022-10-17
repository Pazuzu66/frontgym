import React from 'react';
import { motion } from 'framer-motion';

const pageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

export const PageAnimation = ({ children }) => {
  return (
    <motion.div
      className='w-full text-white'
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageMotion}>
      {children}
    </motion.div>
  );
};
