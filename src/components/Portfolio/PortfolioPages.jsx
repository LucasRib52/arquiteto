import "./PortfolioPages.css";
import { useState } from "react";
import Depoimentos from "../Depoimentos/Depoimentos";
import Contact from "../Contact/Contact";

// Importando imagens manualmente com caminhos corretos
const quarto1 = "/assets/quartos/quarto1.jpeg";
const quarto2 = "/assets/quartos/quarto2.jpeg";
const quarto3 = "/assets/quartos/quarto3.jpeg";
const quarto4 = "/assets/quartos/quarto4.jpeg";
const quarto5 = "/assets/quartos/quarto5.jpeg";
const quarto6 = "/assets/quartos/quarto6.jpeg";
const quarto7 = "/assets/quartos/quarto7.jpeg";
const quarto8 = "/assets/quartos/quarto8.jpeg";
const quarto9 = "/assets/quartos/quarto9.jpeg";
const quarto10 = "/assets/quartos/quarto10.jpeg";
const quarto11 = "/assets/quartos/quarto11.jpeg";
const quarto12 = "/assets/quartos/quarto12.jpeg";
const quarto13 = "/assets/quartos/quarto13.jpeg";
const quarto14 = "/assets/quartos/quarto14.jpeg";

const sala1 = "/assets/salas/sala1.jpeg";
const sala2 = "/assets/salas/sala2.jpeg";
const sala3 = "/assets/salas/sala3.jpeg";
const sala4 = "/assets/salas/sala4.jpeg";
const sala5 = "/assets/salas/sala5.jpeg";
const sala6 = "/assets/salas/sala6.jpeg";
const sala7 = "/assets/salas/sala7.jpeg";

const cozinha1 = "/assets/cozinhas/cozinha1.jpeg";
const cozinha2 = "/assets/cozinhas/cozinha2.jpeg";

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
                    <h1>Nosso Portfólio</h1>
                    <p>
                        Apresentamos nossos projetos mais recentes, que refletem inovação, sofisticação e funcionalidade. Cada ambiente é projetado com atenção aos detalhes, transformando espaços em verdadeiras obras de arte.
                    </p>
                    <p>
                        Descubra como a Inovare Home pode elevar o design do seu ambiente, criando espaços que combinam estética, conforto e praticidade.
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Portfólio</span>
                    </div>
                </div>
                <div className="portfolio-image">
                    <img src="/assets/portfolio1.jpg" alt="Nosso Portfólio" />
                </div>
            </div>

            {/* Seção de Categorias */}
            <div className="portfolio-categories">
                <h3>Novidades</h3>
                <h2>Projetos Recentes</h2>
                <div className="portfolio-filters">
                    <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>Todos</button>
                    <button className={category === "quartos" ? "active" : ""} onClick={() => setCategory("quartos")}>Quartos</button>
                    <button className={category === "salas" ? "active" : ""} onClick={() => setCategory("salas")}>Salas de Estar</button>
                    <button className={category === "cozinhas" ? "active" : ""} onClick={() => setCategory("cozinhas")}>Cozinhas</button>
                </div>
            </div>

            {/* Grid de Portfólio */}
            <div className="portfolio-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="portfolio-item">
                        <img src={item.img} alt={`Portfólio ${item.category}`} />
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
