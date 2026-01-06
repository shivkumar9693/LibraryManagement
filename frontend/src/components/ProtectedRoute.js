import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * ProtectedRoute
 * - role: optional array of allowed roles
 */
const ProtectedRoute = ({ children, roles }) => {
    const { user, isLoggedIn } = useAuth();
    const location = useLocation();

    // Not logged in
    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Role check
    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
