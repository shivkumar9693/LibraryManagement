import React from "react";
import { motion } from "framer-motion";
import BookList from "./BookList";

const UserDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={styles.container}
        >
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={styles.heading}
            >
                📖 Welcome to the Library
            </motion.h1>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={styles.subheading}
            >
                Explore books shared by our authors
            </motion.p>

            <BookList />
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
        fontSize: "3rem",
        marginBottom: "15px",
        fontWeight: "700",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
    subheading: {
        textAlign: "center",
        color: "#6b7280",
        marginBottom: "40px",
        fontSize: "1.2rem",
        fontWeight: "500",
    },
};

export default UserDashboard;
