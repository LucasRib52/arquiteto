import "./ServicesPage.css";
import Services from "./Services";
import Contact from "../Contact/Contact";

function ServicesPage() {
    return (
        <div className="services-page-container">
            {/* Seção Hero */}
            <div className="services-hero">
                <div className="services-content">
                    <h1>Nossos Serviços</h1>
                    <p>
                        Oferecemos soluções completas em arquitetura e design de interiores, transformando ambientes com inovação, sofisticação e funcionalidade. Cada projeto é planejado para atender às necessidades exclusivas dos nossos clientes, garantindo excelência em cada detalhe.
                    </p>
                    <p>
                        Seja para projetos residenciais, comerciais ou corporativos, nossa equipe cria espaços harmoniosos que refletem personalidade e bem-estar, sempre alinhados às tendências mais modernas do mercado.
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Serviços</span>
                    </div>
                </div>
                <div className="services-image">
                    <img src="/assets/about-bannerimage.jpg" alt="Nossos Serviços" />
                </div>
            </div>
        	<Services />
            <Contact />
        </div>
    );
}

export default ServicesPage;
