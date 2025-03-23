import React from "react";
import "./Progress.css";

const etapas = [
  {
    numero: "01",
    titulo: "Estratégia e Planejamento",
    descricao:
      "Criamos um plano estratégico detalhado para garantir que cada projeto atenda às suas necessidades e expectativas.",
    icone: "/assets/process-icon1.png",
  },
  {
    numero: "02",
    titulo: "Conceito e Design",
    descricao:
      "Desenvolvemos conceitos inovadores e personalizados, alinhados ao seu estilo e às tendências de arquitetura e interiores.",
    icone: "/assets/process-icon2.png",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento do Projeto",
    descricao:
      "Transformamos o conceito em realidade, cuidando de cada detalhe para garantir um resultado sofisticado e funcional.",
    icone: "/assets/process-icon3.png",
  },
];

const Progress = () => {
  return (
    <section className="progress-section">
      <div className="progress-header">
        <p className="progress-subtitle">Nosso Processo</p>
        <h2 className="progress-title">Veja Como Trabalhamos Para Você</h2>
      </div>

      <div className="progress-container">
        {etapas.map((etapa, index) => (
          <div key={index} className="progress-card">
            <div className="progress-icon">
              <img src={etapa.icone} alt={etapa.titulo} />
            </div>
            <h3 className="progress-number">{etapa.numero}</h3>
            <h4 className="progress-title-text">{etapa.titulo}</h4>
            <p className="progress-description">{etapa.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Progress;
