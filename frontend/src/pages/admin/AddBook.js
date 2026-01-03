import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { addBook } from "../../api/books";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();
        addBook(book, user.email, user.password).then(() =>
            navigate("/admin")
        );
    };

    return (
        <form onSubmit={submit}>
            <h2>Add Book</h2>
            <input placeholder="Title" onChange={e => setBook({...book, title:e.target.value})}/>
            <input placeholder="Author" onChange={e => setBook({...book, author:e.target.value})}/>
            <textarea placeholder="Description" onChange={e => setBook({...book, description:e.target.value})}/>
            <button>Add</button>
        </form>
    );
};

export default AddBook;
