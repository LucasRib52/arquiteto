import React from "react";
import "./Progress.css";

const steps = [
  {
    number: "01",
    title: "Strategy and Planning",
    description:
      "Aut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.",
    icon: "/src/assets/process-icon1.png",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "Dut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.",
    icon: "/src/assets/process-icon2.png",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Rut officiis debitis aut rerum nec sitatibus saepe eveniet ut voluptate maiores alias aut.",
    icon: "/src/assets/process-icon3.png",
  },
];

const Progress = () => {
  return (
    <section className="progress-section">
      <div className="progress-header">
        <p className="progress-subtitle">Our Process</p>
        <h2 className="progress-title">See How We Work For You</h2>
      </div>

      <div className="progress-container">
        {steps.map((step, index) => (
          <div key={index} className="progress-card">
            <div className="progress-icon">
              <img src={step.icon} alt={step.title} />
            </div>
            <h3 className="progress-number">{step.number}</h3>
            <h4 className="progress-title-text">{step.title}</h4>
            <p className="progress-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Progress;
