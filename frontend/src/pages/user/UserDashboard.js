import React from "react";
import BookList from "./BookList";

const UserDashboard = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>📖 Welcome to the Library</h1>
            <p style={styles.subheading}>
                Explore books shared by our authors
            </p>

            <BookList />
        </div>
    );
};

const styles = {
    container: {
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #fdfbfb, #ebedee)",
        cursor: "url('/pen-cursor.png'), auto"
    },
    heading: {
        textAlign: "center",
        fontSize: "32px",
        marginBottom: "10px",
    },
    subheading: {
        textAlign: "center",
        color: "#555",
        marginBottom: "30px",
    },
};

export default UserDashboard;
