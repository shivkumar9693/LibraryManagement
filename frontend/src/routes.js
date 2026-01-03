// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from "./context/AuthContext";
//
// // Pages
// import Home from "./pages/Home";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
//
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AddBook from "./pages/admin/AddBook";
// import EditBook from "./pages/admin/EditBook";
// import AdminBookList from "./pages/admin/AdminBookList";
//
// import UserDashboard from "./pages/user/UserDashboard";
// import BookList from "./pages/user/BookList";
//
// /* ---------------- Protected Route ---------------- */
//
// const ProtectedRoute = ({ children, role }) => {
//     const { user } = useAuth();
//
//     if (!user) {
//         return <Navigate to="/login" replace />;
//     }
//
//     if (role && user.role !== role) {
//         return <Navigate to="/" replace />;
//     }
//
//     return children;
// };
//
// /* ---------------- Routes ---------------- */
//
// const AppRoutes = () => {
//     return (
//         <Routes>
//             {/* Public */}
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//
//             {/* Admin */}
//             <Route
//                 path="/admin"
//                 element={
//                     <ProtectedRoute role="ADMIN">
//                         <AdminDashboard />
//                     </ProtectedRoute>
//                 }
//             />
//             <Route
//                 path="/admin/books"
//                 element={
//                     <ProtectedRoute role="ADMIN">
//                         <AdminBookList />
//                     </ProtectedRoute>
//                 }
//             />
//             <Route
//                 path="/admin/add-book"
//                 element={
//                     <ProtectedRoute role="ADMIN">
//                         <AddBook />
//                     </ProtectedRoute>
//                 }
//             />
//             <Route
//                 path="/admin/edit-book/:id"
//                 element={
//                     <ProtectedRoute role="ADMIN">
//                         <EditBook />
//                     </ProtectedRoute>
//                 }
//             />
//
//             {/* User */}
//             <Route
//                 path="/user"
//                 element={
//                     <ProtectedRoute role="USER">
//                         <UserDashboard />
//                     </ProtectedRoute>
//                 }
//             />
//             <Route
//                 path="/books"
//                 element={
//                     <ProtectedRoute>
//                         <BookList />
//                     </ProtectedRoute>
//                 }
//             />
//
//             {/* Fallback */}
//             <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//     );
// };
//
// export default AppRoutes;
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

