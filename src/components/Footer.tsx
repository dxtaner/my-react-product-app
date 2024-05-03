// src/components/Footer.tsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed and developed by Taner Özer</p>
        <div className="github-link">
          <a
            href="https://github.com/dxtaner"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="github-icon" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
