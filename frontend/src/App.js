// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";

// import UserDashboard from "./pages/user/UserDashboard";
// import BookDetails from "./pages/user/BookDetails";

// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminBookList from "./pages/admin/AdminBookList";
// import AddBook from "./pages/admin/AddBook";
// import EditBook from "./pages/admin/EditBook";

// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 {/* Public Routes */}
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />

//                 {/* Protected User Routes */}
//                 <Route
//                     path="/dashboard"
//                     element={
//                         <ProtectedRoute role="USER">
//                             <UserDashboard />
//                         </ProtectedRoute>
//                     }
//                 />

//                 <Route
//                     path="/books/:id"
//                     element={
//                         <ProtectedRoute role="USER">
//                             <BookDetails />
//                         </ProtectedRoute>
//                     }
//                 />

//                 {/* Admin */}
//                 <Route
//                     path="/admin"
//                     element={
//                         <ProtectedRoute role="ADMIN">
//                             <AdminDashboard />
//                         </ProtectedRoute>
//                     }
//                 />

//                 <Route
//                     path="/admin/books"
//                     element={
//                         <ProtectedRoute role="ADMIN">
//                             <AdminBookList />
//                         </ProtectedRoute>
//                     }
//                 />

//                 <Route
//                     path="/admin/add"
//                     element={
//                         <ProtectedRoute role="ADMIN">
//                             <AddBook />
//                         </ProtectedRoute>
//                     }
//                 />

//                 <Route
//                     path="/admin/edit/:id"
//                     element={
//                         <ProtectedRoute role="ADMIN">
//                             <EditBook />
//                         </ProtectedRoute>
//                     }
//                 />
//             </Routes>
//             <Footer />
//         </Router>
//     );
// }

// export default App;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
    return (
        <>
            {/* Global Navbar */}
            <Header />

            {/* Page Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/user" element={<UserDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {/* Global Footer */}
            <Footer />
        </>
    );
}

export default App;

 