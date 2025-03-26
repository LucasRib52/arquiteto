import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const textos = [
    "Transforme sua casa com designs modernos de interiores",
    "Dê vida ao seu espaço com soluções elegantes e sofisticadas",
    "Experimente conforto e estilo como nunca antes"
  ];

  const [textoAtual, setTextoAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTextoAtual((prevTexto) => (prevTexto + 1) % textos.length);
    }, 5000); // Troca de texto a cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      
      {/* Ícones de Redes Sociais */}
      <div className="social-icons">
        <a href="https://www.instagram.com/inovarehomedesing/"><FaInstagram /></a>
      </div>

      <div className="container">
        {/* Esquerda - Texto Rotativo */}
        <div className="text-content">
          <h1 key={textoAtual} className="fade-in">{textos[textoAtual]}</h1>
          <p>Projetamos espaços exclusivos que refletem sua identidade e estilo de vida.</p>
          <a href="/portfolio" className="discover-btn">
            Saiba Mais <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* Indicadores de Texto */}
      <div className="slider-dots">
        {textos.map((_, index) => (
          <span key={index} className={`dot ${index === textoAtual ? "active" : ""}`}></span>
        ))}
      </div>
    </section>
  );
}
