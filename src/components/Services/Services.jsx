import React from "react";
import "./Services.css";

const servicos = [
  {
    titulo: "Arquitetura",
    descricao: "Projetamos espaços arquitetônicos inovadores e funcionais, combinando estética e eficiência.",
    icone: "/assets/service-icon1.png",
    imagem: "/assets/architecture.jpg",
    offset: "low",
  },
  {
    titulo: "Design de Interiores",
    descricao: "Criamos ambientes internos sofisticados e personalizados, refletindo sua identidade e estilo de vida.",
    icone: "/assets/service-icon2.png",
    imagem: "/assets/interior.jpg",
    offset: "high",
  },
  {
    titulo: "Renovação",
    descricao: "Transformamos e revitalizamos espaços, modernizando ambientes com soluções inteligentes e sustentáveis.",
    icone: "/assets/service-icon3.png",
    imagem: "/assets/renovation.jpg",
    offset: "low",
  },
  {
    titulo: "Decoração & Arte",
    descricao: "Incorporamos elementos decorativos e artísticos exclusivos, trazendo personalidade e elegância aos espaços.",
    icone: "/assets/service-icon4.png",
    imagem: "/assets/decor.jpg",
    offset: "high",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="section-subtitle">O Que Fazemos</p>
        <h2 className="section-title">Nossos Principais Serviços de Arquitetura e Design</h2>
      </div>

      <div className="services-container">
        {servicos.map((servico, index) => (
          <div key={index} className={`service-card ${servico.offset}`}>
            <div className="service-image">
              <img src={servico.imagem} alt={servico.titulo} />
              <div className="service-icon">
                <img src={servico.icone} alt={servico.titulo} />
              </div>
            </div>
            <div className="service-content">
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
              <a href="/service-detail" className="read-more">
                Saiba Mais →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-container">
        <a href="/services" className="explore-button">
          Explorar Todos os Serviços →
        </a>
      </div>
    </section>
  );
};

export default Services;
