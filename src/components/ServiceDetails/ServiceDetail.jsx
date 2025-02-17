import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";
import serviceImage from "../../assets/service-bannerimage.jpg";
import featureImage from "../../assets/background.jpg"; // Imagem da nova seção

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
    <>
      <section className="service-detail">
        <div className="service-content">
          <h1>Service Detail</h1>
          <p>
            Ruis aute irure dolor in reprehenderit in euota velireu esse fugiat nulla pariatur.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>-</span> <span className="active">Service Detail</span>
          </div>
        </div>
        <div className="service-image">
          <img src={serviceImage} alt="Service Detail" />
        </div>
      </section>

      {/* Nova Seção Abaixo */}
      <section className={`service-feature ${isVisible ? "visible" : ""}`}>
        <div className="feature-image">
          <img src={featureImage} alt="Luxury Interior Design" />
        </div>
        <div className="feature-content">
          <h2>Homeowners Insurance</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur amet blanditiis, quae pariatur eaque impedit ipsam omnis cupiditate voluptate, nihil laudantium. Blanditiis perferendis earum laboriosam rem ducimus nisi perspiciatis animi?
          </p>
          <ul className="feature-list">
            <li>✅ Quis ipsum suspendisse ultrices gravida</li>
            <li>🔹 Exceptuer sint occaecat cupidatat</li>
            <li>✔️ Duis aute irure dolor in voluta facis</li>
            <li>🎯 Rerum hic tenetur a delectus au occaec</li>
          </ul>
        </div>
      </section>
    </>
  );
}
