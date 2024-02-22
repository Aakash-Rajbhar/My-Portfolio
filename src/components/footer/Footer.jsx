import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Aakash</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
        <a
            href="https://twitter.com/aakashrajbhar25"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://instagram.com/aakashrajbhar25"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/aakash-rajbhar"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/aakash-rajbhar"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">Aakash-Rajbhar, All rights reserved</span>
      </div>
    </footer>
  );
};
import "./Footer.css";

export default Footer;
