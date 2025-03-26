import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";
import serviceImage from "/assets/quartos/quarto8.jpeg";
import featureImage from "/assets/quartos/quarto12.jpeg"; // Imagem da nova seção

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
          <h1>Detalhes de Decoração - Inovare Home</h1>
          <p>
            Na Inovare Home, nossa expertise em decoração transforma ambientes com elegância e criatividade. Unimos tendências contemporâneas com um toque clássico para criar espaços que encantam e inspiram.
          </p>
          <div className="breadcrumb">
            <Link to="/">Início</Link> <span>-</span> <span className="active">Detalhes do Serviço</span>
          </div>
        </div>
        <div className="service-image">
          <img src={serviceImage} alt="Detalhes de Decoração" />
        </div>
      </section>

      {/* Nova Seção Abaixo */}
      <section className={`service-feature ${isVisible ? "visible" : ""}`}>
        <div className="feature-image">
          <img src={featureImage} alt="Decoração de Interiores de Luxo" />
        </div>
        <div className="feature-content">
          <h2>Projeto de Decoração Exclusivo</h2>
          <p>
            Desenvolvemos projetos de decoração que harmonizam funcionalidade e estética, criando ambientes sofisticados e acolhedores.
          </p>
          <p>
            Nossa equipe dedica-se a transformar espaços comuns em ambientes únicos, combinando cores, texturas e mobiliário de forma inovadora e personalizada.
          </p>
          <ul className="feature-list">
            <li>✅ Conceitos inovadores de design</li>
            <li>🔹 Soluções personalizadas para cada ambiente</li>
            <li>✔️ Execução impecável e atenção aos detalhes</li>
            <li>🎯 Foco total na satisfação do cliente</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
