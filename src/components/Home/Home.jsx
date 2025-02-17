import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const texts = [
    "Design Your Home With Our Modern Interior Designs",
    "Transform Your Space With Elegant Interior Solutions",
    "Experience Comfort And Style Like Never Before"
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5000); // Troca de texto a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      
      {/* Ícones de Redes Sociais */}
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      <div className="container">
        {/* Esquerda - Texto Rotativo */}
        <div className="text-content">
          <h1 key={currentText} className="fade-in">{texts[currentText]}</h1>
          <p>Quis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.</p>
          <a href="#" className="discover-btn">
            Discover More <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* Indicadores de Texto */}
      <div className="slider-dots">
        {texts.map((_, index) => (
          <span key={index} className={`dot ${index === currentText ? "active" : ""}`}></span>
        ))}
      </div>
    </section>
  );
}
