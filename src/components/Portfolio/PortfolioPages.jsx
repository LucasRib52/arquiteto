import "./PortfolioPages.css";
import { useState } from "react";
import Depoimentos from "../Depoimentos/Depoimentos";
import Contact from "../Contact/Contact";

// Importando imagens manualmente
import quarto1 from "../../assets/quartos/quarto1.jpeg";
import quarto2 from "../../assets/quartos/quarto2.jpeg";
import quarto3 from "../../assets/quartos/quarto3.jpeg";
import quarto4 from "../../assets/quartos/quarto4.jpeg";
import quarto5 from "../../assets/quartos/quarto5.jpeg";
import quarto6 from "../../assets/quartos/quarto6.jpeg";
import quarto7 from "../../assets/quartos/quarto7.jpeg";
import quarto8 from "../../assets/quartos/quarto8.jpeg";
import quarto9 from "../../assets/quartos/quarto9.jpeg";
import quarto10 from "../../assets/quartos/quarto10.jpeg";
import quarto11 from "../../assets/quartos/quarto11.jpeg";
import quarto12 from "../../assets/quartos/quarto12.jpeg";
import quarto13 from "../../assets/quartos/quarto13.jpeg";
import quarto14 from "../../assets/quartos/quarto14.jpeg";

import sala1 from "../../assets/salas/sala1.jpeg";
import sala2 from "../../assets/salas/sala2.jpeg";
import sala3 from "../../assets/salas/sala3.jpeg";
import sala4 from "../../assets/salas/sala4.jpeg";
import sala5 from "../../assets/salas/sala5.jpeg";
import sala6 from "../../assets/salas/sala6.jpeg";
import sala7 from "../../assets/salas/sala7.jpeg";

import cozinha1 from "../../assets/cozinhas/cozinha1.jpeg";
import cozinha2 from "../../assets/cozinhas/cozinha2.jpeg";

function PortfolioPage() {
    const [category, setCategory] = useState("all");

    const portfolioItems = [
        // Quartos
        { id: 1, category: "quartos", img: quarto1 },
        { id: 2, category: "quartos", img: quarto2 },
        { id: 3, category: "quartos", img: quarto3 },
        { id: 4, category: "quartos", img: quarto4 },
        { id: 5, category: "quartos", img: quarto5 },
        { id: 6, category: "quartos", img: quarto6 },
        { id: 7, category: "quartos", img: quarto7 },
        { id: 8, category: "quartos", img: quarto8 },
        { id: 9, category: "quartos", img: quarto9 },
        { id: 10, category: "quartos", img: quarto10 },
        { id: 11, category: "quartos", img: quarto11 },
        { id: 12, category: "quartos", img: quarto12 },
        { id: 13, category: "quartos", img: quarto13 },
        { id: 14, category: "quartos", img: quarto14 },


        // Salas
        { id: 15, category: "salas", img: sala1 },
        { id: 16, category: "salas", img: sala2 },
        { id: 17, category: "salas", img: sala3 },
        { id: 18, category: "salas", img: sala4 },
        { id: 19, category: "salas", img: sala5 },
        { id: 20, category: "salas", img: sala6 },
        { id: 21, category: "salas", img: sala7 },

        // Cozinhas
        { id: 22, category: "cozinhas", img: cozinha1 },
        { id: 23, category: "cozinhas", img: cozinha2 },
    ];

    const filteredItems = category === "all" ? portfolioItems : portfolioItems.filter(item => item.category === category);

    return (
        <div className="portfolio-page-container">
            {/* Seção Hero */}
            <div className="portfolio-hero">
                <div className="portfolio-content">
                    <h1>Our Portfolio</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maiores error tenetur, rem voluptatem aut inventore vitae molestiae possimus eos, deserunt, ullam eligendi quisquam! Architecto natus unde mollitia quia totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus libero error necessitatibus consequuntur est dolor repudiandae cum incidunt aspernatur eaque, cumque temporibus quasi enim vero. Corporis, voluptates sint? Voluptates, amet?
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Portfolio</span>
                    </div>
                </div>
                <div className="portfolio-image">
                    <img src="src/assets/portfolio1.jpg" alt="Our Portfolio" />
                </div>
            </div>

            {/* Seção de Categorias */}
            <div className="portfolio-categories">
                <h3>What's New</h3>
                <h2>Recent Work We Have Done</h2>
                <div className="portfolio-filters">
                    <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All</button>
                    <button className={category === "quartos" ? "active" : ""} onClick={() => setCategory("quartos")}>Rooms</button>
                    <button className={category === "salas" ? "active" : ""} onClick={() => setCategory("salas")}>Living Room</button>
                    <button className={category === "cozinhas" ? "active" : ""} onClick={() => setCategory("cozinhas")}>Kitchens</button>
                </div>
            </div>

            {/* Grid de Portfólio */}
            <div className="portfolio-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="portfolio-item">
                        <img src={item.img} alt={`Portfolio ${item.category}`} />
                    </div>
                ))}
            </div>

            {/* Seção de Depoimentos */}
            <Depoimentos />
            <Contact />
        </div>
    );
}

export default PortfolioPage;
