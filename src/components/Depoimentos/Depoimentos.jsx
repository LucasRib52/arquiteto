import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Depoimentos.css";

const depoimentosData = [
  {
    id: 1,
    nome: "Lucas",
    cargo: "Cliente Satisfeito",
    texto: "A equipe da Inovare Home transformou minha casa em um ambiente sofisticado e acolhedor. O design superou minhas expectativas!",
    imagem: "/assets/customer1.jpg",
  },
  {
    id: 2,
    nome: "Mariana",
    cargo: "Cliente Satisfeita",
    texto: "O projeto de interiores foi incrível! Desde o planejamento até a execução, tudo foi feito com muito profissionalismo e atenção aos detalhes.",
    imagem: "/assets/customer2.jpg",
  },
  {
    id: 3,
    nome: "Roberto",
    cargo: "Cliente Satisfeito",
    texto: "A renovação do meu espaço ficou impecável. A Inovare Home trouxe soluções inovadoras que realmente valorizaram o ambiente.",
    imagem: "/assets/customer3.jpg",
  },
  {
    id: 4,
    nome: "Fernanda",
    cargo: "Cliente Satisfeita",
    texto: "Adorei cada detalhe do projeto! O trabalho da Inovare Home combinou funcionalidade e beleza de forma incrível.",
    imagem: "/assets/customer3.jpg",
  },
];

const Depoimentos = () => {
  return (
    <section className="depoimentos">
      <p className="depoimentos-subtitle">Depoimentos</p>
      <h2 className="depoimentos-title">
        Confiado por mais de <span>1.000</span> clientes ao redor do mundo desde <span>2000</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 4000, disableOnInteraction: false }} // ← Passa automaticamente a cada 4 segundos
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {depoimentosData.map((depoimento) => (
          <SwiperSlide key={depoimento.id} className="depoimento-card">
            <div className="depoimento-content">
              <div className="depoimento-header">
                <img src={depoimento.imagem} alt={depoimento.nome} className="depoimento-image" />
                <div className="quote-icon">❝</div>
              </div>
              <p className="depoimento-text">"{depoimento.texto}"</p>
              <div className="depoimento-info">
                <h4>{depoimento.nome}</h4>
                <p>{depoimento.cargo}</p>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Depoimentos;
