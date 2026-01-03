import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import UserDashboard from "./pages/user/UserDashboard";
import BookDetails from "./pages/user/BookDetails";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AddBook from "./pages/admin/AddBook";
import EditBook from "./pages/admin/EditBook";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* User */}
                <Route
                    path="/"
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

                {/* Admin */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <AdminDashboard />
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
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
