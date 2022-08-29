import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Exercises from "../Exercises/Exercises";
const RouterComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={ <Login /> }></Route>
				<Route path="home" element={ <Home /> }> </Route>
				<Route path="exercise" element={ <Exercises /> }> </Route> 				
				<Route path="*" element={ <Navigate replace={true} to={"/home"}/>}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouterComponent;
