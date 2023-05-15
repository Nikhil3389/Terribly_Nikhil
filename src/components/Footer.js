import React from "react";
import { FaHeart } from "react-icons/fa";
import "./style.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} | Made with <FaHeart /> by{" "}
        <a
          href="https://www.linkedin.com/in/nikhil-kumar-kataria/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          Nikhil Kumar Kataria
        </a>
      </p>
    </footer>
  );
}

export default Footer;
