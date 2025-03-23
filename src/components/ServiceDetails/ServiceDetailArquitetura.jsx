import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";
import serviceImage from "/assets/service-bannerimage.jpg";
import featureImage from "/assets/background.jpg"; // Imagem da nova seção

export default function ServiceDetail() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".service-feature");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="service-detail-page">
      <section className="service-detail">
        <div className="service-content">
          <h1>Detalhes da Arquitetura - Inovare Home</h1>
          <p>
            Na Inovare Home, transformamos espaços em verdadeiras obras de arte arquitetônicas. Nosso trabalho une inovação, sustentabilidade e design sofisticado para criar ambientes exclusivos, funcionais e acolhedores.
          </p>
          <div className="breadcrumb">
            <Link to="/">Início</Link> <span>-</span> <span className="active">Detalhes do Serviço</span>
          </div>
        </div>
        <div className="service-image">
          <img src={serviceImage} alt="Detalhes do Serviço" />
        </div>
      </section>

      {/* Nova Seção Abaixo */}
      <section className={`service-feature ${isVisible ? "visible" : ""}`}>
        <div className="feature-image">
          <img src={featureImage} alt="Design de Interiores de Luxo" />
        </div>
        <div className="feature-content">
          <h2>Projeto Residencial Exclusivo</h2>
          <p>
            Desenvolvemos projetos residenciais que refletem o estilo e a personalidade de cada cliente, combinando estética e funcionalidade de maneira inovadora.
          </p>
          <p>
            Com uma equipe especializada e apaixonada pelo que faz, a Inovare Home se destaca pelo compromisso com a excelência e a criação de ambientes modernos, sustentáveis e sofisticados.
          </p>
          <ul className="feature-list">
            <li>✅ Design personalizado e exclusivo</li>
            <li>🔹 Uso de materiais sustentáveis</li>
            <li>✔️ Planejamento e execução impecáveis</li>
            <li>🎯 Foco total na satisfação do cliente</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
