import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-overlay">
        <p className="contact-subtitle">Work With Us</p>
        <h2 className="contact-title">Start Your Customer Journey With Us.</h2>
        <a href="#contact-form" className="contact-button">
          Get Started <span className="arrow">➜</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
