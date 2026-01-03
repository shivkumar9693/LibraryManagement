import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (role) {
        // ADMIN can access USER routes, but USER cannot access ADMIN routes
        if (role === "USER" && user.role === "ADMIN") {
            return children;
        }
        if (user.role !== role) {
            return <Navigate to="/" />;
        }
    }

    return children;
};

export default ProtectedRoute;
 