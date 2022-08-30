import { backApi } from "../../api/backApi";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const handleLogin = (username, password, navigate) => {
    return async dispatch => {
        await dispatch(startLogin())
        try {
            const {data} = await backApi.post('auth/login', {
                username,
                password
            })
            localStorage.setItem('auth-token', data.token)
            await dispatch(dispatchLogin())
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Bienvenido",
                timer: 1000,
                showConfirmButton: false
            })
            navigate('/home', {replace: true})
        } catch (error) {
            // console.log(error.response)
            if (error.response.data) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: error.response.data.msg,
                    timer: 1300,
                    showConfirmButton: false
                })
            }
        }
        setTimeout(async () => {
            await dispatch(finishLogin())
        }, 500);
    }
}

export const handleLogout = () => {
    return async dispatch => {
        await dispatch(startLogin())
        try {
            localStorage.removeItem('auth-token')
            await dispatch(dispatchLogout())
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "No se pudo hacer log out",
                timer: 1300,
                showConfirmButton: false
            })
        }
        setTimeout(async () => {
            await dispatch(finishLogin())
        }, 500);
    }
}

export const checkToken = () => {
    return async dispatch => {
        await dispatch(startLogin())
        const token = localStorage.getItem('auth-token')
        if (token !== null) {
            await dispatch(dispatchLogin())
        }
        setTimeout(async () => {
            await dispatch(finishLogin())
        }, 500);
    }
}

const dispatchLogin = () => ({
    type: types.handleLogin,
    payload: {}
})

const dispatchLogout = () => ({
    type: types.handleLogout,
    payload: {}
})

const startLogin = () => ({
    type: types.startLogin,
    payload: {}
})
const finishLogin = () => ({
    type: types.finishLogin,
    payload: {}
})