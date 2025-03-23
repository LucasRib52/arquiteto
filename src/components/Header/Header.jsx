import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../public/assets/inovare_home_logo_transparente.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Fecha o menu mobile
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo (vai para a home e fecha o menu caso esteja aberto) */}
        <div
          className="logo"
          onClick={() => {
            navigate("/");
            closeMobileMenu();
          }}
        >
          <img src={logo} alt="Inovare Home Logo" />
        </div>

        {/* Menu Desktop (só no desktop) */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
              <span className="hover-bar"></span>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about" onClick={closeMobileMenu}>Sobre</Link>
              <span className="hover-bar"></span>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services" onClick={closeMobileMenu}>Serviços</Link>
              <span className="hover-bar"></span>
            </li>
            <li className={location.pathname === "/portfolio" ? "active" : ""}>
              <Link to="/portfolio" onClick={closeMobileMenu}>Projetos Realizados</Link>
              <span className="hover-bar"></span>
            </li>
          </ul>
        </nav>

        {/* Botão de Contato (desktop) */}
        <div className="contact-button desktop-contact">
          <Link to="/contact" className="contact-link" onClick={closeMobileMenu}>
            Contate-nos <span className="arrow">→</span>
          </Link>
        </div>

        {/* Ícone do Menu Mobile (hamburger) - aparece só no mobile */}
        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(true)}>
          ☰
        </div>
      </div>

      {/* Menu Mobile (lateral) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
          X
        </button>
        <ul className="mobile-nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about" onClick={closeMobileMenu}>Sobre</Link>
          </li>
          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services" onClick={closeMobileMenu}>Serviços</Link>
          </li>
          <li className={location.pathname === "/portfolio" ? "active" : ""}>
            <Link to="/portfolio" onClick={closeMobileMenu}>Projetos Realizados</Link>
          </li>
          <li>
            {/* Botão de Contato dentro do menu mobile */}
            <Link to="/contact" className="contact-link" onClick={closeMobileMenu}>
              Contate-nos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
