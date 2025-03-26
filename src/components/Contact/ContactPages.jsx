import "./ContactPages.css";

function ContactPage() {
    return (
        <div className="contact-page-container">
            {/* Seção Hero */}
            <div className="contact-hero">
                <div className="contact-content">
                    <h1>Entre em Contato</h1>
                    <p>
                        Estamos prontos para transformar seu projeto em realidade. Fale conosco e descubra como podemos ajudar!
                    </p>
                    <div className="breadcrumb">
                        <span>Home</span> <span>-</span> <span className="active">Contato</span>
                    </div>
                </div>
                <div className="contact-image">
                    <img src="/assets/contact-bannerimage.jpg" alt="Entre em Contato" />
                </div>
            </div>

            {/* Seção de Informações de Contato */}
            <div className="contact-info">
                <h3>Informações de Contato</h3>
                <h2>Fale Conosco</h2>
                <div className="contact-grid">
                    {/* Localização */}
                    <div className="contact-card">
                        <img src="/assets/contact-locationicon.png" alt="Localização" />
                        <h4>Endereço:</h4>
                        <p>EUA</p>
                    </div>

                    {/* E-mail */}
                    <div className="contact-card">
                        <img src="/assets/contact-emailicon.png" alt="E-mail" />
                        <h4>E-mail:</h4>
                        <p>inovarellc@gmail.com</p>
                    </div>

                    {/* Telefone */}
                    <div className="contact-card">
                        <img src="/assets/contact-phoneicon.png" alt="Telefone" />
                        <h4>Telefone:</h4>
                        <p>+1 321 732-2333</p>
                    </div>
                </div>
            </div>

            {/* Seção de Formulário de Contato */}
            <div className="contact-form-container">
                <div className="contact-form">
                    <h3>Entre em Contato</h3>
                    <h2>Envie-nos uma Mensagem</h2>
                    <form>
                        <div className="input-container">
                            <label>Nome:</label>
                            <input type="text" placeholder="Digite seu nome" required />
                        </div>
                        <div className="input-container">
                            <label>Sobrenome:</label>
                            <input type="text" placeholder="Digite seu sobrenome" required />
                        </div>
                        <div className="input-container">
                            <label>Telefone:</label>
                            <input type="text" placeholder="Digite seu telefone" required />
                        </div>
                        <div className="input-container">
                            <label>Seu E-mail:</label>
                            <input type="email" placeholder="Digite seu e-mail" required />
                        </div>
                        <div className="input-container">
                            <label>Mensagem:</label>
                            <textarea placeholder="Digite sua mensagem" required></textarea>
                        </div>
                        <button type="submit" className="send-btn">
                            Enviar Agora <span>➜</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
