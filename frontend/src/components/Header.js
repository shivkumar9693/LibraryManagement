// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";

// const Navbar = styled(motion.nav)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background: linear-gradient(90deg, #4b6cb7, #182848);
//   color: #fff;
//   box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;

// const Logo = styled(Link)`
//   font-size: 1.8rem;
//   font-weight: bold;
//   text-decoration: none;
//   color: #fff;
//   cursor: pointer;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.5rem;

//   a {
//     color: #fff;
//     text-decoration: none;
//     font-weight: 500;
//     position: relative;

//     &:after {
//       content: "";
//       position: absolute;
//       width: 0%;
//       height: 2px;
//       left: 0;
//       bottom: -2px;
//       background-color: #ffcc00;
//       transition: 0.3s;
//     }

//     &:hover:after {
//       width: 100%;
//     }
//   }
// `;

// const Button = styled.button`
//   background: #ffcc00;
//   color: #182848;
//   border: none;
//   padding: 0.5rem 1.2rem;
//   font-weight: 600;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     background: #e6b800;
//   }
// `;

// const Header = () => {
//     const { user, logout } = useAuth();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate("/");
//     };

//     return (
//         <Navbar
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
//         >
//             <Logo to="/">Library</Logo>
//             <NavLinks>
//                 <Link to="/">Home</Link>
//                 {user && user.role === "ADMIN" && <Link to="/admin">Dashboard</Link>}
//                 {user && user.role === "USER" && <Link to="/dashboard">My Books</Link>}
//                 {!user ? (
//                     <>
//                         <Link to="/login">Login</Link>
//                         <Link to="/signup">Signup</Link>
//                     </>
//                 ) : (
//                     <Button onClick={handleLogout}>Logout</Button>
//                 )}
//             </NavLinks>
//         </Navbar>
//     );
// };

// export default Header;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Navbar = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #4b6cb7, #182848);
  color: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      left: 0;
      bottom: -2px;
      background-color: #ffcc00;
      transition: 0.3s;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  background: #ffcc00;
  color: #182848;
  border: none;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #e6b800;
  }
`;

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <Navbar
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
            <Logo to="/">Library</Logo>
            <NavLinks>
                <Link to="/">Home</Link>

                {user && user.role === "ADMIN" && (
                    <>
                        <Link to="/admin">Dashboard</Link>
                        <Link to="/admin/books">Books</Link>
                        <Link to="/admin/add">Add Book</Link>
                    </>
                )}

                {user && user.role === "USER" && (
                    <>
                        <Link to="/dashboard">My Books</Link>
                    </>
                )}

                {!user ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                ) : (
                    <Button onClick={handleLogout}>Logout</Button>
                )}
            </NavLinks>
        </Navbar>
    );
};

export default Header;

