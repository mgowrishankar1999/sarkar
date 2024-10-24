import { handleApiResponse } from "../../utils/apiUtils"
import { instance } from "../config/axiosConfig"



/**
 * METHOD : POST
 * for user sign up
 * endpoint : /register
 */

const Signup = async(body) => {
    try {
        console.log(body, "im the data")
        const response = await instance.post("/register",body)
        const data = await handleApiResponse(response);
        return data
        
    } catch (error) {
        console.error('Error fetching /register api:', error);
        throw error;       
    }
}



/**
 * METHOD : POST
 * for verify who user sign up
 * endpoint : /register/verify
 */

const SignupVerify = async(body) => {
    try {
        const response = await instance.post("/register/verify",body)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error('Error fetching /register/verify api:', error);
        throw error;       
    }
}


/**
 * METHOD : POST
 * for verify who user Login
 * endpoint: /login/verify
 */

const LoginVerify = async(body) => {
    try {
        const response = await instance.post("/login/verify",body)
        const data = await handleApiResponse(response);
        return data
    } catch (error) {
        console.error('Error fetching /login/verify api:', error);
        throw error;       
    }
}

/**
 * METHOD : POST
 * for  Login user
 * endpoint: /login
 */

const LoginApi = async(body) => {
    
    try {
        const response = await instance.post("/login",body)
        
        const data = await handleApiResponse(response);
        return data
        
    } catch (error) {
        console.error('Error fetching /login', error);
        throw error;       
    }
}

export {LoginApi, LoginVerify, SignupVerify, Signup}


