import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #182848;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
`;

const Links = styled.div`
  margin: 0.5rem 0;

  a {
    color: #ffcc00;
    margin: 0 0.5rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <p>
                © {new Date().getFullYear()} Shiv Kumar Thakur
            </p>
            <Links>
                <a
                    href="https://github.com/shivkumar9693"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                |
                <a
                    href="https://www.linkedin.com/in/shiv-kumar-thakur-200284272/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </Links>
        </FooterWrapper>
    );
};

export default Footer;
