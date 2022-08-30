import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Exercises from '../Exercises/Exercises';
import Home from '../Home/Home';

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="home" element={ <Home /> }> </Route>
        <Route path="exercise" element={ <Exercises /> }> </Route>
        <Route path="*" element={ <Navigate replace={true} to={"/home"}/>}></Route>
    </Routes>
  )
}
