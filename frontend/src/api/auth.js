import axios from "axios";

/**
 * Axios instance
 * Base URL comes from .env
 */
const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * LOGIN
 * This is only for validating credentials & fetching role
 * Actual authentication for protected APIs uses Basic Auth header
 */
export const loginUser = async (email, password) => {
    try {
        const response = await API.post("/api/auth/login", {
            email,
            password,
        });
        return response.data; // { success, message, role }
    } catch (error) {
        return {
            success: false,
            message:
                error.response?.data?.message ||
                "Unable to login. Server error.",
            role: null,
        };
    }
};

/**
 * SIGNUP
 */
export const signupUser = async (userData) => {
    try {
        const response = await API.post("/api/auth/signup", userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Signup failed";
    }
};

export default API;
