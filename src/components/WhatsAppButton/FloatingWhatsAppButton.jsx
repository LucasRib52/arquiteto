import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './floatingButton.css';

const FloatingWhatsAppButton = () => {
  return (
    <div className="floating-container">
      <div className="floating-item">
        <div className="floating-message">
           Fale conosco no WhatsApp!
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5531984454915"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          title="Fale conosco no WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsAppButton;
