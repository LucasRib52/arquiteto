import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-overlay">
        <p className="contact-subtitle">Trabalhe Conosco</p>
        <h2 className="contact-title">Comece sua jornada como cliente com a Inovare Home.</h2>
        <a href="#contact-form" className="contact-button">
          Entre em Contato <span className="arrow">➜</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
