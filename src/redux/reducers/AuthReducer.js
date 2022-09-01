import { types } from "../types/types";

const initialState = {
    isLoading: false,
    isAuthenticated: false
}

export const AuthReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case types.handleLogin:
            return {
                ...state,
                isAuthenticated: true
            }
        case types.handleLogout:
            return {
                ...state,
                isAuthenticated: false
            }
        case types.startLogin:
            return {
                ...state,
                isLoading: true
            }
        case types.finishLogin:
            return {
                ...state,
                isLoading: false
            }
    
        default:
            return state
    }
}