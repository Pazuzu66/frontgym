import React from 'react';
import { motion } from 'framer-motion';
import Cover from '../../../assets/login-cover.webp';
import CoverMd from '../../../assets/login-cover-md.webp';

export const LoginCover = () => {
  return (
    <motion.div
      className='min-w-full max-h-[30rem] relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}>
      <img
        alt='hero'
        src={window.innerWidth < 426 ? Cover : CoverMd}
        className='w-full h-full object-cover object-bottom'
      />
      <h1 className='absolute w-full uppercase font-bold text-4xl px-10 bottom-20 break-words'>
        Bienvenida/o, <strong className=''>rookie!</strong>
      </h1>
    </motion.div>
  );
};
