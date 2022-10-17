import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, ExclamationCircle } from '../../../assets/jsxIcons';

export const LoginInput = ({ control, name, label, type }) => {
  const { field, fieldState } = useController({
    name,
    control,
  });
  const [inputFocused, setInputFocused] = useState(false);
  const onFocus = () => setInputFocused(true);
  const onBlur = () => setInputFocused(false);
  return (
    <div className='flex gap-2 items-center relative px-2 py-1 group mt-6'>
      <motion.label
        className={`absolute transition ease-in-out duration-500 pointer-events-none ${
          inputFocused || field.value !== ''
            ? 'text-themePrimary-500'
            : 'text-white'
        } ${fieldState.error && 'text-themeRed-500'}`}
        initial={{
          top: 12,
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        }}
        animate={{
          top: inputFocused || field.value !== '' ? -20 : 12,
          fontSize: inputFocused || field.value !== '' ? '1rem' : '1.25rem',
          lineHeight: inputFocused || field.value !== '' ? '1.5rem' : '1.75rem',
        }}
        transition={{
          ease: 'easeInOut',
        }}>
        {fieldState.error ? fieldState.error.message : label}
      </motion.label>
      <input
        placeholder=''
        type={type}
        className='w-full bg-transparent pt-2 pb-4 pl-0 pr-10 border-0 border-b-2 border-themeGray-700 hover:border-themeGray-600 focus:ring-0 focus:border-themeGray-500'
        onChange={field.onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className='absolute top-0 bottom-2 right-2 flex items-center justify-center'>
        <AnimatePresence mode='wait'>
          {fieldState.isDirty && !fieldState.error && (
            <motion.div
              key={1}
              className='p-2'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1, 1.1, 1] }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}>
              <CheckCircle className='h-6 w-6 text-themePrimary-500' />
            </motion.div>
          )}
          {((fieldState.isDirty && fieldState.error) || fieldState.error) && (
            <motion.div
              key={0}
              className='p-2'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1, 1.1, 1] }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}>
              <ExclamationCircle className='h-6 w-6 text-themeRed-500' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
