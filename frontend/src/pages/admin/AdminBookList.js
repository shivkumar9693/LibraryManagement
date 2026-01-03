import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getAdminBooks, deleteBook } from "../../api/books";
import BookCard from "../../components/BookCard";
import { motion } from "framer-motion";

const AdminBookList = () => {
    const { user, authHeader } = useAuth();
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMyBooks = useCallback(async () => {
        if (!user || !authHeader) {
            setLoading(false);
            return;
        }

        try {
            const base64Credentials = authHeader.replace("Basic ", "");
            const credentials = atob(base64Credentials);
            const [email, password] = credentials.split(":");

            const userId = user.id;
            if (!userId) {
                setLoading(false);
                return;
            }

            const data = await getAdminBooks(userId, email, password);
            setBooks(data);
        } catch (err) {
            console.error("Error fetching books", err);
        } finally {
            setLoading(false);
        }
    }, [user, authHeader]);

    useEffect(() => {
        fetchMyBooks();
    }, [fetchMyBooks]);

    const handleDelete = async (bookId) => {
        if (!window.confirm("Are you sure you want to delete this book?")) return;

        if (!user || !authHeader) {
            alert("Please login to delete books");
            return;
        }

        try {
            const base64Credentials = authHeader.replace("Basic ", "");
            const credentials = atob(base64Credentials);
            const [email, password] = credentials.split(":");

            const userId = user.id;
            await deleteBook(bookId, userId, email, password);
            setBooks(books.filter((b) => b.id !== bookId));
        } catch (err) {
            alert("Delete failed");
            console.error(err);
        }
    };

    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.loadingContainer}>
                    <div style={styles.spinner}></div>
                    <p style={styles.loadingText}>Loading your books...</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={styles.container}
        >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={styles.heading}
            >
                📚 My Books
            </motion.h2>

            {books.length === 0 ? (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={styles.emptyState}
                >
                    <div style={styles.emptyIcon}>📖</div>
                    <p style={styles.emptyText}>No books added yet</p>
                    <button
                        style={styles.addButton}
                        onClick={() => navigate("/admin/add")}
                    >
                        ➕ Add Your First Book
                    </button>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={styles.grid}
                >
                    {books.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <BookCard
                                book={book}
                                isAdmin
                                onEdit={() => navigate(`/admin/edit/${book.id}`)}
                                onDelete={() => handleDelete(book.id)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

const styles = {
    container: {
        padding: "40px 20px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    heading: {
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "2.5rem",
        fontWeight: "700",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "30px",
        maxWidth: "1400px",
        margin: "0 auto",
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
    emptyState: {
        textAlign: "center",
        padding: "80px 20px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "0 auto",
    },
    emptyIcon: {
        fontSize: "5rem",
        marginBottom: "20px",
        animation: "float 3s ease-in-out infinite",
    },
    emptyText: {
        fontSize: "1.3rem",
        color: "#6b7280",
        marginBottom: "30px",
    },
    addButton: {
        padding: "12px 30px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        border: "none",
        borderRadius: "25px",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },
};

export default AdminBookList;
