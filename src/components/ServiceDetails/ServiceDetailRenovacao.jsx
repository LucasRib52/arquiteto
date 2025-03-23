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
          <h1>Detalhes da Renovação - Inovare Home</h1>
          <p>
            Na Inovare Home, transformamos espaços antigos em ambientes modernos e funcionais. Nossa equipe especializada em renovação garante um serviço de alta qualidade, integrando inovação e sustentabilidade em cada projeto.
          </p>
          <div className="breadcrumb">
            <Link to="/">Início</Link> <span>-</span> <span className="active">Detalhes do Serviço</span>
          </div>
        </div>
        <div className="service-image">
          <img src={serviceImage} alt="Detalhes da Renovação" />
        </div>
      </section>

      {/* Nova Seção Abaixo */}
      <section className={`service-feature ${isVisible ? "visible" : ""}`}>
        <div className="feature-image">
          <img src={featureImage} alt="Renovação de Interiores Modernos" />
        </div>
        <div className="feature-content">
          <h2>Projeto de Renovação Exclusivo</h2>
          <p>
            Realizamos a revitalização completa de ambientes, combinando técnicas modernas e materiais sustentáveis para transformar sua casa ou escritório.
          </p>
          <p>
            Nosso compromisso é entregar projetos inovadores que não só renovam o espaço, mas também elevam a qualidade de vida dos nossos clientes.
          </p>
          <ul className="feature-list">
            <li>✅ Soluções inovadoras de renovação</li>
            <li>🔹 Materiais de alta qualidade e sustentabilidade</li>
            <li>✔️ Planejamento e execução rigorosos</li>
            <li>🎯 Compromisso com a satisfação total do cliente</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
