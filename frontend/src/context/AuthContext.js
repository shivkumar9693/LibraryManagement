import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * AuthContext
 * - stores user email, role
 * - stores Basic Auth header
 * - persists login on refresh
 */

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // { email, role, id }
    const [authHeader, setAuthHeader] = useState(null);

    // Load auth from localStorage on refresh
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedAuth = localStorage.getItem("authHeader");

        if (storedUser && storedAuth) {
            setUser(JSON.parse(storedUser));
            setAuthHeader(storedAuth);
        }
    }, []);

    /**
     * Login using Basic Auth
     */
    const login = (email, password, role, userId) => {
        const token = btoa(`${email}:${password}`); // Basic Auth token
        const header = `Basic ${token}`;

        const userData = { email, role, id: userId };

        setUser(userData);
        setAuthHeader(header);

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("authHeader", header);
    };

    /**
     * Logout
     */
    const logout = () => {
        setUser(null);
        setAuthHeader(null);

        localStorage.removeItem("user");
        localStorage.removeItem("authHeader");
    };

    /**
     * Helpers
     */
    const isAdmin = user?.role === "ADMIN";
    const isLoggedIn = !!user;

    return (
        <AuthContext.Provider
            value={{
                user,
                authHeader,
                login,
                logout,
                isAdmin,
                isLoggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Custom hook
 */
export const useAuth = () => {
    return useContext(AuthContext);
};
 