import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FooterWrapper = styled(motion.footer)`
  background: linear-gradient(90deg, #182848, #4b6cb7);
  color: #ffffff;
  padding: 2rem 1rem;
  margin-top: 4rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Column = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: #ffcc00;
  }

  p,
  a {
    font-size: 0.9rem;
    color: #e0e0e0;
    text-decoration: none;
    line-height: 1.6;
  }

  a:hover {
    color: #ffcc00;
  }
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #cccccc;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
`;

const Footer = () => {
    return (
        <FooterWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <FooterContainer>
                <Column>
                    <h3>Library Management</h3>
                    <p>
                        A modern library platform where authors manage books and readers
                        explore knowledge securely.
                    </p>
                </Column>

                <Column>
                    <h3>Quick Links</h3>
                    <p><a href="/">Home</a></p>
                    <p><a href="/auth/login">Login</a></p>
                    <p><a href="/auth/signup">Signup</a></p>
                </Column>

                <Column>
                    <h3>Contact</h3>
                    <p>Email: support@library.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>India</p>
                </Column>
            </FooterContainer>

            <BottomBar>
                © {new Date().getFullYear()} Library Management System. All rights reserved.
            </BottomBar>
        </FooterWrapper>
    );
};

export default Footer;
