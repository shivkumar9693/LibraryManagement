// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="home-container">
//             {/* Hero Section */}
//             <section className="hero">
//                 <div className="hero-text">
//                     <h1>
//                         📚 Welcome to <span>Library Management</span>
//                     </h1>
//                     <p>
//                         A modern digital library where authors publish books and readers
//                         explore knowledge.
//                     </p>

//                     <div className="hero-buttons">
//                         <button onClick={() => navigate("/login")}>Login</button>
//                         <button className="outline" onClick={() => navigate("/signup")}>
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>

//                 <div className="hero-visual">
//                     <div className="floating-book">📘</div>
//                     <div className="floating-book delay">📕</div>
//                     <div className="floating-book delay2">📗</div>
//                 </div>
//             </section>

//             {/* Features */}
//             <section className="features">
//                 <div className="feature-card">
//                     ✍️ <h3>Authors</h3>
//                     <p>Upload, edit and manage your books easily.</p>
//                 </div>

//                 <div className="feature-card">
//                     👀 <h3>Readers</h3>
//                     <p>Read books, explore content, learn continuously.</p>
//                 </div>

//                 <div className="feature-card">
//                     🔐 <h3>Secure</h3>
//                     <p>Role-based access with Spring Security.</p>
//                 </div>
//             </section>

//             {/* Footer CTA */}
//             <section className="cta">
//                 <h2>Start Your Reading Journey Today 🚀</h2>
//                 <button onClick={() => navigate("/signup")}>Get Started</button>
//             </section>
//         </div>
//     );
// };

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-text">
                    <h1>
                        📚 Welcome to <span>Library Management</span>
                    </h1>
                    <p>
                        A modern digital library where authors publish books and readers
                        explore knowledge.
                    </p>

                    <div className="hero-buttons">
                        <button onClick={() => navigate("/login")}>Login</button>
                        <button className="outline" onClick={() => navigate("/signup")}>
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="floating-book">📘</div>
                    <div className="floating-book delay">📕</div>
                    <div className="floating-book delay2">📗</div>
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    ✍️ <h3>Authors</h3>
                    <p>Upload, edit and manage your books easily.</p>
                </div>

                <div className="feature-card">
                    👀 <h3>Readers</h3>
                    <p>Read books, explore content, learn continuously.</p>
                </div>

                <div className="feature-card">
                    🔐 <h3>Secure</h3>
                    <p>Role-based access with Spring Security.</p>
                </div>
            </section>

            <section className="cta">
                <h2>Start Your Reading Journey Today 🚀</h2>
                <button onClick={() => navigate("/signup")}>Get Started</button>
            </section>
        </div>
    );
};

export default Home;

