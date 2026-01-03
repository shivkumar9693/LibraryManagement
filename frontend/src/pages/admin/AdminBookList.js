import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import BookCard from "../../components/BookCard";
import axios from "axios";

const AdminBookList = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMyBooks();
        // eslint-disable-next-line
    }, []);

    const fetchMyBooks = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/books/admin/${auth.id}`,
                {
                    auth: {
                        username: auth.email,
                        password: auth.password,
                    },
                }
            );
            setBooks(res.data);
        } catch (err) {
            console.error("Error fetching books", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (bookId) => {
        if (!window.confirm("Are you sure you want to delete this book?")) return;

        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/books/delete/${bookId}/${auth.id}`,
                {
                    auth: {
                        username: auth.email,
                        password: auth.password,
                    },
                }
            );
            setBooks(books.filter((b) => b.id !== bookId));
        } catch (err) {
            alert("Delete failed");
        }
    };

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>📚 My Books</h2>

            <div style={styles.grid}>
                {books.length === 0 ? (
                    <p>No books added yet</p>
                ) : (
                    books.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                            isAdmin
                            onEdit={() => navigate(`/admin/edit-book/${book.id}`)}
                            onDelete={() => handleDelete(book.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "40px",
        minHeight: "100vh",
        background: "#f4f6fb",
        cursor: "url('/pen-cursor.png'), auto",
    },
    heading: {
        textAlign: "center",
        marginBottom: "30px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "20px",
    },
};

export default AdminBookList;
