import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";
import serviceImage from "/assets/quartos/quarto3.jpeg";
import featureImage from "/assets/quartos/quarto11.jpeg"; // Imagem da nova seção

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
          <h1>Detalhes do Design - Inovare Home</h1>
          <p>
            Na Inovare Home, o design de interiores é levado a um novo patamar. Desenvolvemos soluções criativas que unem estética e funcionalidade, transformando ambientes em espaços únicos e inspiradores.
          </p>
          <div className="breadcrumb">
            <Link to="/">Início</Link> <span>-</span> <span className="active">Detalhes do Serviço</span>
          </div>
        </div>
        <div className="service-image">
          <img src={serviceImage} alt="Detalhes do Design" />
        </div>
      </section>

      {/* Nova Seção Abaixo */}
      <section className={`service-feature ${isVisible ? "visible" : ""}`}>
        <div className="feature-image">
          <img src={featureImage} alt="Design de Interiores de Luxo" />
        </div>
        <div className="feature-content">
          <h2>Projeto de Design Exclusivo</h2>
          <p>
            Criamos projetos de design personalizados que refletem o estilo e a essência de cada cliente, combinando inovação e tradição em ambientes sofisticados.
          </p>
          <p>
            Nossa equipe de designers utiliza técnicas modernas e materiais de alta qualidade para transformar seus espaços, garantindo uma experiência única e funcional.
          </p>
          <ul className="feature-list">
            <li>✅ Soluções criativas e inovadoras</li>
            <li>🔹 Integração perfeita entre forma e função</li>
            <li>✔️ Materiais e acabamentos de alta qualidade</li>
            <li>🎯 Foco na satisfação total do cliente</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
