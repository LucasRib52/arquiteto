import "./ContactPages.css";

function ContactPage() {
    return (
        <div className="contact-page-container">
            {/* Seção Hero */}
            <div className="contact-hero">
                <div className="contact-content">
                    <h1>Contact Us</h1>
                    <p>
                        Guis aute irure dolor in reprehenderit in eouta velireu esse fugiat nulla pariatur.
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Contact</span>
                    </div>
                </div>
                <div className="contact-image">
                    <img src="src/assets/contact-bannerimage.jpg" alt="Contact Us" />
                </div>
            </div>

            {/* Seção de Informações de Contato */}
            <div className="contact-info">
                <h3>Contact Info</h3>
                <h2>Our Contact Information</h2>
                <div className="contact-grid">
                    {/* Localização */}
                    <div className="contact-card">
                        <img src="src/assets/contact-locationicon.png" alt="Location" />
                        <h4>Location:</h4>
                        <p>Level 7/180 Flinders St, Melbourne VIC 3000, Australia</p>
                    </div>

                    {/* E-mail */}
                    <div className="contact-card">
                        <img src="src/assets/contact-emailicon.png" alt="Email" />
                        <h4>Email:</h4>
                        <p>inovarellc@gmail.com</p>
                    </div>

                    {/* Telefone */}
                    <div className="contact-card">
                        <img src="src/assets/contact-phoneicon.png" alt="Phone" />
                        <h4>Phone:</h4>
                        <p>+1 321 732-2333</p>
                    </div>
                </div>
            </div>

            {/* Seção de Formulário de Contato */}
            <div className="contact-form-container">
                <div className="contact-form">
                    <h3>Get in Touch</h3>
                    <h2>Send us a Message</h2>
                    <form>
                        <div className="input-container">
                            <label>First Name:</label>
                            <input type="text" placeholder="First Name" required />
                        </div>
                        <div className="input-container">
                            <label>Last Name:</label>
                            <input type="text" placeholder="Last Name" required />
                        </div>
                        <div className="input-container">
                            <label>Phone No:</label>
                            <input type="text" placeholder="Phone No" required />
                        </div>
                        <div className="input-container">
                            <label>Your Email:</label>
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="input-container">
                            <label>Message:</label>
                            <textarea placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="send-btn">
                            Send Now <span>➜</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Seção do Mapa */}
            <div className="map-container">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.5248358540327!2d-81.47993632444956!3d28.38684407545862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e2d9afd3d77%3A0xc57ea53b1e126359!2sInternational%20Dr%2C%20Orlando%2C%20FL%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1708212500000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactPage;
