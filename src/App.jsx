import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Importação do CSS global

import Header from "./components/Header/Header";
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
import Footer from "./components/Footer/Footer";
import ServiceDetail from "./components/ServiceDetails/ServiceDetail"; // Importação da página de detalhe

function App() {
  return (
    <Router>
      <Header />
      <Routes>
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
        <Route path="/service-detail" element={<ServiceDetail />} /> {/* Rota oculta */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
