import "./ServicesPage.css";
import Services from "./Services";
import Contact from "../Contact/Contact";

function ServicesPage() {
    return (
        <div className="services-page-container">
            {/* Seção Hero */}
            <div className="services-hero">
                <div className="services-content">
                    <h1>Our Services</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium porro beatae veniam mollitia incidunt, dignissimos numquam deserunt sint dolores ipsam id. Deserunt, dolore dolor quisquam ad hic facere minus distinctio! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur porro recusandae, alias quam magnam! Odit molestias harum magni accusantium doloremque, voluptatum facilis assumenda cumque aspernatur sint qui illo ex?
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Services</span>
                    </div>
                </div>
                <div className="services-image">
                    <img src="/assets/about-bannerimage.jpg" alt="Our Services" />
                </div>
            </div>
        	<Services />
            <Contact />
        </div>
    );
}

export default ServicesPage;
