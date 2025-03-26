import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [anos, setAnos] = useState(0);
  const anosExperiencia = 5; // Defina os anos de experiência aqui

  useEffect(() => {
    let intervalo = setInterval(() => {
      setAnos((prev) => {
        if (prev < anosExperiencia) return prev + 1;
        clearInterval(intervalo);
        return anosExperiencia;
      });
    }, 100);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <div className="years-container">
          <h1>
            <span className="number">{anos}</span>
            <span className="plus">+</span>
          </h1>
          <p className="subtitle">Anos de Excelência em Arquitetura</p>
        </div>
        <p className="description">
          <strong>Inovare Home</strong> transforma espaços há anos, oferecendo 
          soluções arquitetônicas modernas, inovadoras e de alta qualidade. Nosso compromisso com a 
          excelência e atenção aos detalhes nos destacam no setor.
        </p>
        <a href="/portfolio" className="discover-btn">
          Saiba Mais →
        </a>
      </div>
      <div className="portfolio-image">
        <img src="/assets/teste.jpg" alt="Inovare Home" />
      </div>
    </section>
  );
};

export default Portfolio;
