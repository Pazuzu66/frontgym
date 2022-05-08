import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
const RouterComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterComponent;
