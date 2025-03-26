import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Imagem Esquerda */}
        <div className="about-image-left">
          <img src="/assets/about1.png" alt="Design de Interiores" />
          <div className="about-badge">
          </div>
        </div>

        {/* Conteúdo do Texto */}
        <div className="about-content">
          <p className="about-subtitle">Sobre Nós</p>
          <h2 className="about-title">Oferecemos os melhores serviços de design de interiores</h2>
          <p className="about-highlight">
            <span className="highlight-bar"></span> Criamos espaços sofisticados e funcionais, alinhados ao seu estilo de vida.
          </p>
          <p className="about-description">
            Na Inovare Home, combinamos criatividade, inovação e sofisticação para transformar ambientes.
            Nossa missão é projetar espaços que proporcionam beleza, conforto e funcionalidade, tornando cada detalhe uma expressão do seu estilo.
          </p>
          <a href="/about" className="about-button">
            Saiba Mais →
          </a>
        </div>

        {/* Imagem Direita */}
        <div className="about-image-right">
          <img src="/assets/about2.png" alt="Interior Moderno" />
        </div>
      </div>
    </section>
  );
};

export default About;
