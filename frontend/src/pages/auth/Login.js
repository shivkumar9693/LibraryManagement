import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../api/auth";
import "./Auth.css";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await loginUser(form.email, form.password);

            if (!response.success) {
                setError(response.message || "Login failed");
                setLoading(false);
                return;
            }

            // Save auth data in context using the login function
            login(form.email, form.password, response.role, response.userId);

            // Redirect based on role
            if (response.role === "ADMIN") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>📚 Library Login</h2>
                <p className="subtitle">Welcome back! Please login</p>

                {error && <div className="error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="switch">
                    Don’t have an account?{" "}
                    <span onClick={() => navigate("/signup")}>Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
