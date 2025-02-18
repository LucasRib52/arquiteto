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
                    <h1>Our Portfolio</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maiores error tenetur, rem voluptatem aut inventore vitae molestiae possimus eos, deserunt, ullam eligendi quisquam! Architecto natus unde mollitia quia totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus libero error necessitatibus consequuntur est dolor repudiandae cum incidunt aspernatur eaque, cumque temporibus quasi enim vero. Corporis, voluptates sint? Voluptates, amet?
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Portfolio</span>
                    </div>
                </div>
                <div className="portfolio-image">
                    <img src="/assets/portfolio1.jpg" alt="Our Portfolio" />
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
