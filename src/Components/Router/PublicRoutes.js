import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../Login/Login';

export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="*" element={ <Navigate replace={true} to={"/login"}/>}></Route>
    </Routes>
  )
}
