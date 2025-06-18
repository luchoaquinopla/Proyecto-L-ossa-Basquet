import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        © 2025 L’ossa bàsquet. Desarrollado por{" "}
        <a
          href="https://www.instagram.com/quadracode4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUADRACODE
        </a>
      </p>
    </footer>
  );
};

export default Footer;