import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>🛠 Admin Dashboard</h1>
                <p style={styles.subheading}>
                    Manage your books and content
                </p>

                <div style={styles.buttonGroup}>
                    <button
                        style={styles.button}
                        onClick={() => navigate("/admin/add-book")}
                    >
                        ➕ Add New Book
                    </button>

                    <button
                        style={styles.buttonSecondary}
                        onClick={() => navigate("/admin/my-books")}
                    >
                        📚 View My Books
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        cursor: "url('/pen-cursor.png'), auto",
    },
    card: {
        background: "#fff",
        padding: "40px",
        borderRadius: "16px",
        width: "420px",
        textAlign: "center",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        animation: "fadeIn 0.8s ease-in-out",
    },
    heading: {
        fontSize: "28px",
        marginBottom: "10px",
    },
    subheading: {
        color: "#555",
        marginBottom: "30px",
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    button: {
        padding: "12px",
        fontSize: "16px",
        background: "#667eea",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "transform 0.2s",
    },
    buttonSecondary: {
        padding: "12px",
        fontSize: "16px",
        background: "#764ba2",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },
};

export default AdminDashboard;
