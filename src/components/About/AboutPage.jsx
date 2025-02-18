import "./AboutPage.css";
import { useEffect, useState } from "react";
import Progress from "../Progress/Progress";
import Contact from "../Contact/Contact";

function AboutPage() {
    // Estados para controlar a animação dos círculos
    const [progress, setProgress] = useState({ design: 0, architecture: 0, planning: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                let newValues = { ...prev };

                // Incrementa cada valor até chegar a 100
                if (newValues.design < 100) newValues.design += 1;
                if (newValues.architecture < 100) newValues.architecture += 1;
                if (newValues.planning < 100) newValues.planning += 1;

                return newValues;
            });
        }, 20); // Atualiza a cada 20ms para suavizar a contagem

        // Para a contagem quando atingir 100%
        setTimeout(() => clearInterval(interval), 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-page-container">
            {/* Seção Hero */}
            <div className="about-hero">
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsa libero delectus. Iste, distinctio? Impedit fugit optio amet, harum ipsum minima modi, esse maxime fuga dolorem quia blanditiis expedita unde? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde suscipit amet illum consequuntur ducimus impedit possimus exercitationem, quibusdam voluptatem odit. Consequuntur harum vitae sit non aliquam labore magni quidem officiis.
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">About</span>
                    </div>
                </div>
                <div className="about-image">
                    <img src="/assets/about-bannerimage.jpg" alt="About Us" />
                </div>
            </div>

            {/* Seção Sobre a Empresa */}
            <div className="about-details">
                <div className="about-images">
                    <img src="/assets/about1.png" alt="Interior Design" className="image-main" />
                    <img src="/assets/about2.png" alt="Modern Architecture" className="image-overlay" />
                </div>

                <div className="about-text">
                    <h3>About Us</h3>
                    <h1>We are The Leader in Interior Design Services</h1>
                    <p>
                        Temporibus autem quibusdam et aut officiis debitis aut reu atibus saepe eveniet ut et
                        voluptates repudiandae sint et mo non recusandae reiciendis maiores.
                    </p>
                    <p>
                        Reprehenderit rui in ea voluptate velit esse quam nihil moles iae consequatur, vel illum ui
                        dolorem.
                    </p>

                    {/* Círculos de Estatísticas */}
                    <div className="about-stats">
                        <StatCircle percentage={progress.design} label="Interior Design" />
                        <StatCircle percentage={progress.architecture} label="Architect Services" />
                        <StatCircle percentage={progress.planning} label="Idea & Planning" />
                    </div>
                </div>
            </div>

            {/* Componente Progress adicionado aqui */}
            <Progress />
            <Contact />
        </div>
    );
}

function StatCircle({ percentage, label }) {
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
                    strokeDashoffset={(314 * (100 - percentage)) / 100}
                />
                <text x="60" y="65" className="progress-text">
                    {percentage}%
                </text>
            </svg>
            <p>{label}</p>
        </div>
    );
}

export default AboutPage;
