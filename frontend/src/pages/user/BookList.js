import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getAllBooks } from "../../api/books";
import BookCard from "../../components/BookCard";
import { motion } from "framer-motion";

const BookList = () => {
    const { user, authHeader } = useAuth();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = useCallback(async () => {
        if (!user || !authHeader) {
            setLoading(false);
            return;
        }

        try {
            const base64Credentials = authHeader.replace("Basic ", "");
            const credentials = atob(base64Credentials);
            const [email, password] = credentials.split(":");

            const data = await getAllBooks(email, password);
            setBooks(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [user, authHeader]);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    const handleRead = (bookId) => {
        navigate(`/books/${bookId}`);
    };

    if (loading) {
        return (
            <div style={styles.loadingContainer}>
                <div style={styles.spinner}></div>
                <p style={styles.loadingText}>Discovering amazing books...</p>
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
            {books.length === 0 ? (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={styles.emptyState}
                >
                    <div style={styles.emptyIcon}>📚</div>
                    <p style={styles.emptyText}>No books available yet</p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
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
                                onRead={handleRead}
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
        padding: "20px",
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
        minHeight: "50vh",
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
        padding: "60px 20px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "40px auto",
    },
    emptyIcon: {
        fontSize: "4rem",
        marginBottom: "20px",
        animation: "float 3s ease-in-out infinite",
    },
    emptyText: {
        fontSize: "1.2rem",
        color: "#6b7280",
    },
};

export default BookList;
