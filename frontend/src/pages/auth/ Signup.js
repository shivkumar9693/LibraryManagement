import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../api/auth";
import "./Auth.css";

const Signup = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER",
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
            await signupUser(form);
            navigate("/login");
        } catch (err) {
            setError("Signup failed. Email may already exist.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>✨ Create Account</h2>
                <p className="subtitle">Join the Library Platform</p>

                {error && <div className="error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

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

                    <select name="role" value={form.role} onChange={handleChange}>
                        <option value="USER">Reader</option>
                        <option value="ADMIN">Author / Admin</option>
                    </select>

                    <button type="submit" disabled={loading}>
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>
                </form>

                <p className="switch">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
