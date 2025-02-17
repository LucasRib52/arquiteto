import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna da logo e CTA */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src="src/assets/inovare_home_logo_transparente.png" alt="Logo" />
            <span className="footer-brand">Inovare Home</span>
          </div>
          <p className="footer-text">
            Want to Create Something <br /> Great Together?
          </p>
          <a href="#contact" className="footer-button">
            Get Started <span className="arrow">➜</span>
          </a>
        </div>

        {/* Coluna de informações de contato */}
        <div className="footer-column">
          <h3>Contact Info:</h3>
          <div className="footer-info">
            <img src="src/assets/footer-callicon.png" alt="Call Icon" className="footer-icon" />
            <p>Call us at: <br />
              <a href="tel:+5561987654321">+1 321 732-2333</a>
            </p>
          </div>
          <div className="footer-info">
            <img src="src/assets/footer-locationicon.png" alt="Location Icon" className="footer-icon" />
            <p>Our Location: <br />
              <strong>EUA <br /> EUA</strong>
            </p>
          </div>
          <div className="footer-info">
            <img src="src/assets/footer-emailicon.png" alt="Email Icon" className="footer-icon" />
            <p>Email us at: <br />
              <a href="">inovarellc@gmail.com</a>
            </p>
          </div>
        </div>

          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Inovare Home. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
