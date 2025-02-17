import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Imagem Esquerda */}
        <div className="about-image-left">
          <img src="/src/assets/about1.png" alt="Interior Design" />
          <div className="about-badge">
            <div className="badge-inner">
              <img src="/src/assets/inovare_home_logo_transparente.png" alt="Inovare Home" />
              <p>INOVARE HOME</p>
            </div>
          </div>
        </div>

        {/* Conteúdo do Texto */}
        <div className="about-content">
          <p className="about-subtitle">About Us</p>
          <h2 className="about-title">We Provide Best Interior Design Services</h2>
          <p className="about-highlight">
            <span className="highlight-bar"></span> Molestias exceaturi sint
            eaceacati cua non provident similiue
          </p>
          <p className="about-description">
            Dolores aet ruas molestias exaceaturi sint eaceacati cupiditate non
            provident, similiue sunt in culpa qui officia deserunt mollitia animi
            facere omnis.
          </p>
          <a href="#" className="about-button">
            Read More →
          </a>
        </div>

        {/* Imagem Direita */}
        <div className="about-image-right">
          <img src="/src/assets/about2.png" alt="Modern Interior" />
        </div>
      </div>
    </section>
  );
};

export default About;
