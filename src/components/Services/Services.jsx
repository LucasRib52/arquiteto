import React from "react";
import "./Services.css";

const services = [
  {
    title: "Architecture",
    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
    icon: "/assets/service-icon1.png",
    image: "/assets/architecture.jpg",
    offset: "low",
  },
  {
    title: "Interior Work",
    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
    icon: "/assets/service-icon2.png",
    image: "/assets/interior.jpg",
    offset: "high",
  },
  {
    title: "Renovation",
    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
    icon: "/assets/service-icon3.png",
    image: "/assets/renovation.jpg",
    offset: "low",
  },
  {
    title: "Decor & Art",
    description: "Duis aute irure dolor in reare aenderit in voluptate velit es cillum dolore...",
    icon: "/assets/service-icon4.png",
    image: "/assets/decor.jpg",
    offset: "high",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="section-subtitle">What We Do</p>
        <h2 className="section-title">Our Highlighted Services for Interior Designs</h2>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.offset}`}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/service-detail" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-container">
        <a href="/services" className="explore-button">
          Explore All Services →
        </a>
      </div>
    </section>
  );
};

export default Services;
