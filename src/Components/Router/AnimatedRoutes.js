import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { checkToken } from '../../redux/action/actUser';
import { Exercises, Home, Login } from '../../pages';

const pageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

export const AnimatedRoutes = () => {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);
  return (
    <AnimatePresence mode='wait'>
      {isAuthenticated ? (
        <motion.div
          key={1}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='home' element={<Home />} />
              <Route path='exercise' element={<Exercises />} />
              <Route
                path='*'
                element={<Navigate replace={true} to={'/home'} />}
              />
            </Routes>
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          key={0}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='/login' element={<Login />} />
              <Route
                path='*'
                element={<Navigate replace={true} to={'/login'} />}
              />
            </Routes>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
