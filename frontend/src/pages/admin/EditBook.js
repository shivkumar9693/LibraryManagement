import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { fetchBookById, updateBook } from "../../api/books";

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [book, setBook] = useState({});

    useEffect(() => {
        fetchBookById(id, user.email, user.password)
            .then(res => setBook(res.data));
    }, [id]);

    const submit = (e) => {
        e.preventDefault();
        updateBook(id, book, user.email, user.password)
            .then(() => navigate("/admin"));
    };

    return (
        <form onSubmit={submit}>
            <h2>Edit Book</h2>
            <input value={book.title || ""} onChange={e => setBook({...book, title:e.target.value})}/>
            <input value={book.author || ""} onChange={e => setBook({...book, author:e.target.value})}/>
            <textarea value={book.description || ""} onChange={e => setBook({...book, description:e.target.value})}/>
            <button>Update</button>
        </form>
    );
};

export default EditBook;
