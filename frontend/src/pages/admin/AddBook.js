import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { addBook } from "../../api/books";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddBook = () => {
    const { user, authHeader } = useAuth();
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        description: "",
        image: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!user || !authHeader) {
            setError("Please login to add books");
            setLoading(false);
            return;
        }

        try {
            // Extract email and password from authHeader
            const base64Credentials = authHeader.replace("Basic ", "");
            const credentials = atob(base64Credentials);
            const [email, password] = credentials.split(":");

            // Get user ID from user object (we need to store it during login)
            const userId = user.id || user.userId;
            if (!userId) {
                setError("User ID not found. Please login again.");
                setLoading(false);
                return;
            }

            await addBook(userId, book, email, password);
            navigate("/admin");
        } catch (err) {
            setError("Failed to add book. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

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
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={styles.heading}
                >
                    ✍️ Add New Book
                </motion.h2>
                {error && (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={styles.error}
                    >
                        {error}
                    </motion.div>
                )}
                <form onSubmit={submit} style={styles.form}>
                    <motion.input
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        placeholder="Book Title"
                        value={book.title}
                        onChange={e => setBook({...book, title:e.target.value})}
                        required
                        style={styles.input}
                    />
                    <motion.input
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        placeholder="Image URL (optional)"
                        value={book.image}
                        onChange={e => setBook({...book, image:e.target.value})}
                        style={styles.input}
                    />
                    <motion.textarea
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        placeholder="Book Description"
                        value={book.description}
                        onChange={e => setBook({...book, description:e.target.value})}
                        rows="6"
                        style={styles.textarea}
                        required
                    />
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        type="submit"
                        disabled={loading}
                        style={styles.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {loading ? "Adding..." : "✨ Add Book"}
                    </motion.button>
                </form>
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
        padding: "40px 20px",
    },
    card: {
        background: "#fff",
        padding: "50px",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "600px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
    },
    heading: {
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "2.2rem",
        fontWeight: "700",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    input: {
        padding: "16px 20px",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "16px",
        fontFamily: "inherit",
        transition: "all 0.3s ease",
    },
    textarea: {
        padding: "16px 20px",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "16px",
        fontFamily: "inherit",
        resize: "vertical",
        minHeight: "120px",
    },
    button: {
        padding: "16px 32px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
        marginTop: "10px",
    },
    error: {
        background: "#fee2e2",
        color: "#dc2626",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "20px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "500",
    },
};

export default AddBook;
 