import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import ServicesPage from "./components/Services/ServicesPages";
import About from "./components/About/About";
import AboutPage from "./components/About/AboutPage";
import Progress from "./components/Progress/Progress";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioPage from "./components/Portfolio/PortfolioPages";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Contact from "./components/Contact/Contact";
import ContactPage from "./components/Contact/ContactPages";

// Importações dos ServiceDetail individuais
import ServiceDetailArquitetura from "./components/ServiceDetails/ServiceDetailArquitetura";
import ServiceDetailDesign from "./components/ServiceDetails/ServiceDetailDesign";
import ServiceDetailRenovacao from "./components/ServiceDetails/ServiceDetailRenovacao";
import ServiceDetailDecoracao from "./components/ServiceDetails/ServiceDetailDecoracao";

// Import do botão do WhatsApp
import FloatingWhatsAppButton from "./components/WhatsAppButton/FloatingWhatsAppButton";

// Componente ScrollToTop para rolar a página ao trocar de rota
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Sempre que a rota mudar, reinicia a animação de slide-in
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Header />
      <div className={`slide-in ${visible ? "visible" : ""}`}>
        <Outlet />
      </div>
      <FloatingWhatsAppButton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* Página inicial com todas as seções */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <About />
                <Progress />
                <Portfolio />
                <Depoimentos />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Rotas para os detalhes dos serviços */}
          <Route path="/service-detail-arquitetura" element={<ServiceDetailArquitetura />} />
          <Route path="/service-detail-design" element={<ServiceDetailDesign />} />
          <Route path="/service-detail-renovacao" element={<ServiceDetailRenovacao />} />
          <Route path="/service-detail-decoracao" element={<ServiceDetailDecoracao />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
