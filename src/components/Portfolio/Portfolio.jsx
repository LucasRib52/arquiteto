import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [years, setYears] = useState(0);
  const targetYears = 10; // Defina os anos de experiência aqui

  useEffect(() => {
    let interval = setInterval(() => {
      setYears((prev) => {
        if (prev < targetYears) return prev + 1;
        clearInterval(interval);
        return targetYears;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <div className="years-container">
          <h1>
            <span className="number">{years}</span>
            <span className="plus">+</span>
          </h1>
          <p className="subtitle">Years of Excellence in Architecture</p>
        </div>
        <p className="description">
          <strong>Inovare Home</strong> has been shaping spaces for over a decade, delivering modern, 
          innovative, and high-quality architectural solutions. Our commitment to excellence and 
          attention to detail set us apart in the industry.
        </p>
        <a href="#about" className="discover-btn">
          Discover More →
        </a>
      </div>
      <div className="portfolio-image">
        <img src="/assets/teste.jpg" alt="Inovare Home" />
      </div>
    </section>
  );
};

export default Portfolio;
