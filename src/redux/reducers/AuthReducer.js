import { types } from "../types/types";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    token: ""
}

export const AuthReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case types.handleLogin:
            console.log(payload);
            return {                
                ...state,
                isAuthenticated: true,
                token: payload.payload.token

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