import { types } from "../types/types";

const initialState = {
    isAuthenticated: false
}

export const AuthReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case types.test:
            return {
                ...state,
                isAuthenticated: true
            }
    
        default:
            return state
    }
}