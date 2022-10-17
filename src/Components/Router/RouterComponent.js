import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from './AnimatedRoutes';

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <div className='bg-themeDark-500'>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
};
