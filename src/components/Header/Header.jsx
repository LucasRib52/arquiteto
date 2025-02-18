import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../public/assets/inovare_home_logo_transparente.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // Captura a URL atual

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo agora leva para a home */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Inovare Home Logo" />
        </div>

        {/* Navegação */}
        <nav>
          <ul className="nav-links">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
              <span className="hover-bar"></span>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
              <span className="hover-bar"></span>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services">Services</Link>
              <span className="hover-bar"></span>
            </li>
            <li className={location.pathname === "/portfolio" ? "active" : ""}>
              <Link to="/portfolio">Portfolio</Link>
              <span className="hover-bar"></span>
            </li>
          </ul>
        </nav>

        {/* Botão de Contato */}
        <div className="contact-button">
          <Link to="/contact" className="contact-link">
            Contact Us <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
