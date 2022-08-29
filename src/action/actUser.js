import axios from "axios";

axios.defaults.url = process.env.REACT_APP_URL
axios.defaults.headers.post["Content-Type"] = "application/json"

//login
export const authUser = async( object = {} ) => {
    try {
        const { username, password } = object;        
        const response = await axios.post("auth/login",{            
                username: username,
                password: password
            }
        );        
        return response;
    } catch (error) {
        return error.response
    }
}