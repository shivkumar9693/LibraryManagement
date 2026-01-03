import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getBookById } from "../../api/books";
import { motion } from "framer-motion";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, authHeader } = useAuth();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBook = async () => {
            if (!user || !authHeader) {
                setError("Please login to view book details");
                setLoading(false);
                return;
            }

            try {
                // Extract email and password from authHeader (Basic base64(email:password))
                const base64Credentials = authHeader.replace("Basic ", "");
                const credentials = atob(base64Credentials);
                const [email, password] = credentials.split(":");

                const data = await getBookById(id, email, password);
                setBook(data);
            } catch (err) {
                setError("Failed to load book details");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id, user, authHeader]);

    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.loadingContainer}>
                    <div style={styles.spinner}></div>
                    <p style={styles.loadingText}>Loading book details...</p>
                </div>
            </div>
        );
    }

    if (error || !book) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={styles.container}
            >
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    style={styles.errorCard}
                >
                    <div style={styles.errorIcon}>⚠️</div>
                    <div style={styles.error}>{error || "Book not found"}</div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/")}
                        style={styles.button}
                    >
                        ← Back to Home
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={styles.container}
        >
            <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/")}
                style={styles.backButton}
            >
                ← Back
            </motion.button>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={styles.card}
            >
                {book.image && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={styles.imageContainer}
                    >
                        <img src={book.image} alt={book.title} style={styles.image} />
                    </motion.div>
                )}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={styles.title}
                >
                    {book.title}
                </motion.h1>
                {book.admin && (
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={styles.author}
                    >
                        By {book.admin.name || "Unknown Author"}
                    </motion.p>
                )}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={styles.description}
                >
                    <h3 style={styles.descriptionTitle}>📖 Description</h3>
                    <p style={styles.descriptionText}>
                        {book.description || "No description available"}
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const styles = {
    container: {
        padding: "40px 20px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    card: {
        maxWidth: "900px",
        margin: "0 auto",
        background: "#fff",
        padding: "50px",
        borderRadius: "24px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
    },
    imageContainer: {
        width: "100%",
        height: "400px",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "30px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "15px",
        color: "#1f2937",
        fontWeight: "700",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    author: {
        fontSize: "1.2rem",
        color: "#6b7280",
        marginBottom: "40px",
        fontWeight: "500",
    },
    description: {
        marginTop: "40px",
    },
    descriptionTitle: {
        fontSize: "1.5rem",
        marginBottom: "20px",
        color: "#1f2937",
        fontWeight: "600",
    },
    descriptionText: {
        fontSize: "1.1rem",
        color: "#4b5563",
        lineHeight: "1.8",
    },
    backButton: {
        marginBottom: "30px",
        padding: "12px 24px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },
    button: {
        padding: "12px 30px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        marginTop: "20px",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },
    loadingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: "20px",
    },
    spinner: {
        width: "50px",
        height: "50px",
        border: "4px solid #e5e7eb",
        borderTop: "4px solid #6366f1",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
    loadingText: {
        fontSize: "1.2rem",
        color: "#6b7280",
        fontWeight: "500",
    },
    errorCard: {
        maxWidth: "500px",
        margin: "0 auto",
        background: "#fff",
        padding: "50px",
        borderRadius: "24px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        textAlign: "center",
    },
    errorIcon: {
        fontSize: "4rem",
        marginBottom: "20px",
    },
    error: {
        fontSize: "1.2rem",
        color: "#ef4444",
        marginBottom: "30px",
        fontWeight: "500",
    },
};

export default BookDetails;

