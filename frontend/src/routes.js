import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const ProtectedRoute = ({ children, role }) => {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" replace />;
    if (role && user.role !== role) return <Navigate to="/" replace />;

    return children;
};

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AppRoutes;

