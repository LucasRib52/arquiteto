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
            <img src="/assets/inovare_home_logo_transparente.png" alt="Logo Inovare Home" />
            <span className="footer-brand">Inovare Home</span>
          </div>
          <p className="footer-text">
            Quer criar algo <br /> incrível conosco?
          </p>
          <a href="#contact" className="footer-button">
            Entre em Contato <span className="arrow">➜</span>
          </a>
        </div>

        {/* Coluna de informações de contato */}
        <div className="footer-column">
          <h3>Informações de Contato:</h3>
          <div className="footer-info">
            <img src="/assets/footer-callicon.png" alt="Ícone de Telefone" className="footer-icon" />
            <p>Ligue para nós: <br />
              <a href="tel:+5561987654321">+1 321 732-2333</a>
            </p>
          </div>
          <div className="footer-info">
            <img src="/assets/footer-locationicon.png" alt="Ícone de Localização" className="footer-icon" />
            <p>Nosso Endereço: <br />
              <strong>EUA <br /> EUA</strong>
            </p>
          </div>
          <div className="footer-info">
            <img src="/assets/footer-emailicon.png" alt="Ícone de E-mail" className="footer-icon" />
            <p>Envie um e-mail para: <br />
              <a href="mailto:inovarellc@gmail.com">inovarellc@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Inovare Home. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
