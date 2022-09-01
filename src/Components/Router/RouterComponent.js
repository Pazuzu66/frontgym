import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { checkToken } from "../../redux/action/actUser";
export const RouterComponent = () => {
	const {isAuthenticated} = useSelector(store => store.auth)
	const dispatch = useDispatch()
	useEffect(() => {
	  dispatch(checkToken())
	}, [])
	
	return (
		<BrowserRouter>
			{isAuthenticated ? (
				<PrivateRoutes />
			) : (
				<PublicRoutes />
			)}
		</BrowserRouter>
	);
};
