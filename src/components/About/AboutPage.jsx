import "./AboutPage.css";
import { useEffect, useState } from "react";
import Progress from "../Progress/Progress";
import Contact from "../Contact/Contact";

function AboutPage() {
    // Estados para controlar a animação dos círculos
    const [progresso, setProgresso] = useState({ design: 0, arquitetura: 0, planejamento: 0 });

    useEffect(() => {
        const intervalo = setInterval(() => {
            setProgresso((prev) => {
                let novosValores = { ...prev };

                // Incrementa cada valor até chegar a 100
                if (novosValores.design < 100) novosValores.design += 1;
                if (novosValores.arquitetura < 100) novosValores.arquitetura += 1;
                if (novosValores.planejamento < 100) novosValores.planejamento += 1;

                return novosValores;
            });
        }, 20); // Atualiza a cada 20ms para suavizar a contagem

        // Para a contagem quando atingir 100%
        setTimeout(() => clearInterval(intervalo), 2000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="about-page-container">
            {/* Seção Hero */}
            <div className="about-hero">
                <div className="about-content">
                    <h1>Sobre Nós</h1>
                    <p>
                        A Inovare Home é referência em design de interiores e arquitetura, criando espaços que aliam sofisticação e funcionalidade. Nossa equipe transforma ambientes, trazendo inovação e beleza em cada projeto.
                    </p>
                    <p>
                        Nossa missão é proporcionar experiências únicas através de soluções arquitetônicas e decorativas personalizadas, atendendo às necessidades e expectativas de cada cliente.
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Sobre</span>
                    </div>
                </div>
                <div className="about-image">
                    <img src="/assets/about-bannerimage.jpg" alt="Sobre Nós" />
                </div>
            </div>

            {/* Seção Sobre a Empresa */}
            <div className="about-details">
                <div className="about-images">
                    <img src="/assets/about1.png" alt="Design de Interiores" className="image-main" />
                    <img src="/assets/about2.png" alt="Arquitetura Moderna" className="image-overlay" />
                </div>

                <div className="about-text">
                    <h3>Sobre Nós</h3>
                    <h1>Somos Líderes em Serviços de Design de Interiores</h1>
                    <p>
                        Nossa abordagem inovadora e detalhista garante projetos exclusivos, que valorizam estética e funcionalidade. Cada ambiente é planejado para oferecer conforto e beleza de forma harmônica.
                    </p>
                    <p>
                        Nosso compromisso é criar espaços que refletem personalidade e elegância, sempre alinhados às últimas tendências do mercado.
                    </p>

                    {/* Círculos de Estatísticas */}
                    <div className="about-stats">
                        <StatCircle porcentagem={progresso.design} label="Design de Interiores" />
                        <StatCircle porcentagem={progresso.arquitetura} label="Serviços de Arquitetura" />
                        <StatCircle porcentagem={progresso.planejamento} label="Ideias & Planejamento" />
                    </div>
                </div>
            </div>

            {/* Componente Progress adicionado aqui */}
            <Progress />
            <Contact />
        </div>
    );
}

function StatCircle({ porcentagem, label }) {
    return (
        <div className="stat">
            <svg className="progress-ring" width="120" height="120">
                <circle className="progress-ring__background" cx="60" cy="60" r="50" />
                <circle
                    className="progress-ring__circle"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeDasharray="314"
                    strokeDashoffset={(314 * (100 - porcentagem)) / 100}
                />
                <text x="60" y="65" className="progress-text">
                    {porcentagem}%
                </text>
            </svg>
            <p>{label}</p>
        </div>
    );
}

export default AboutPage;
