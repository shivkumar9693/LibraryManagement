 import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import UserDashboard from "./pages/user/UserDashboard";
import BookDetails from "./pages/user/BookDetails";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBookList from "./pages/admin/AdminBookList";
import AddBook from "./pages/admin/AddBook";
import EditBook from "./pages/admin/EditBook";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <>
            <Header />

            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected User Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute role="USER">
                            <UserDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/books/:id"
                    element={
                        <ProtectedRoute role="USER">
                            <BookDetails />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Routes */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/books"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <AdminBookList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/add"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <AddBook />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/edit/:id"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <EditBook />
                        </ProtectedRoute>
                    }
                />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
