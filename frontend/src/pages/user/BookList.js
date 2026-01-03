import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../api/books";
import BookCard from "../../components/BookCard";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const data = await getAllBooks();
            setBooks(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.grid}>
            {books.map((book) => (
                <BookCard key={book.id} book={book} readOnly />
            ))}
        </div>
    );
};

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
    },
};

export default BookList;
