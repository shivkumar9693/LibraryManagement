import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={styles.container}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={styles.card}
            >
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={styles.heading}
                >
                    🛠 Admin Dashboard
                </motion.h1>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={styles.subheading}
                >
                    Manage your books and content
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={styles.buttonGroup}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={styles.button}
                        onClick={() => navigate("/admin/add")}
                    >
                        ➕ Add New Book
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={styles.buttonSecondary}
                        onClick={() => navigate("/admin/books")}
                    >
                        📚 View My Books
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
    },
    card: {
        background: "#fff",
        padding: "60px 50px",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "500px",
        textAlign: "center",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
    },
    heading: {
        fontSize: "2.5rem",
        marginBottom: "15px",
        fontWeight: "700",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    subheading: {
        color: "#6b7280",
        marginBottom: "40px",
        fontSize: "1.1rem",
        fontWeight: "500",
    },
    buttonGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    button: {
        padding: "16px 32px",
        fontSize: "18px",
        fontWeight: "600",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },
    buttonSecondary: {
        padding: "16px 32px",
        fontSize: "18px",
        fontWeight: "600",
        background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(118, 75, 162, 0.4)",
    },
};

export default AdminDashboard;
