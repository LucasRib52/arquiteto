import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Depoimentos.css";

const depoimentosData = [
  {
    id: 1,
    name: "Lucas",
    role: "Happy Customer",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat proident...",
    image: "/assets/customer1.jpg",
  },
  {
    id: 2,
    name: "Lucas",
    role: "Happy Customer",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat proident...",
    image: "/assets/customer2.jpg",
  },
  {
    id: 3,
    name: "Lucas",
    role: "Happy Customer",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat proident...",
    image: "/assets/customer3.jpg",
  },
  {
    id: 4,
    name: "Lucas",
    role: "Happy Customer",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat proident...",
    image: "/assets/customer3.jpg",
  },
];

const Depoimentos = () => {
  return (
    <section className="depoimentos">
      <p className="depoimentos-subtitle">Testimonials</p>
      <h2 className="depoimentos-title">
        Trusted By Over <span>30,000</span> Worldwide Customers Since <span>1998</span>
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
                <img src={depoimento.image} alt={depoimento.name} className="depoimento-image" />
                <div className="quote-icon">❝</div>
              </div>
              <p className="depoimento-text">"{depoimento.text}"</p>
              <div className="depoimento-info">
                <h4>{depoimento.name}</h4>
                <p>{depoimento.role}</p>
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
