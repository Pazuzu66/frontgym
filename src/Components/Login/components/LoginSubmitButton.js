import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Ring } from '@uiball/loaders';
import { Play } from '../../../assets/jsxIcons';

const buttonVariant = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};
const iconVariant = {
  initial: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

export const LoginSubmitButton = ({ onClick, isLoading }) => {
  return (
    <motion.button
      className='bg-themePrimary-500 text-themeBlack-500 px-6 py-2 rounded-full ring-offset-4 ring-offset-themeDark-500 hover:ring-4 hover:ring-themePrimary-900 cursor-pointer'
      type='submit'
      onClick={onClick}
      variants={buttonVariant}
      initial='initial'
      whileHover='hover'
      whileTap='pressed'>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            key={1}
            className='flex items-center gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Ring size={20} color='#000' />
            <span>Cargando...</span>
          </motion.div>
        ) : (
          <motion.div
            key={0}
            className='flex items-center gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <span>Login</span>
            <motion.div variants={iconVariant}>
              <Play className='w-4 h-4' />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
