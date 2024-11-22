import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import MissionVision from './components/MissionVision';
import Performance from './components/Performance';
import PrimeGlobal from './components/PrimeGlobal';
import { tailwindColors } from './theme';

function HomePage() {
  return (
    <div className={tailwindColors.background}>
      <Hero />
      <WhyChooseUs />
      <PrimeGlobal />
      <Performance />
      <Services />
      <MissionVision />
      <About />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className={`min-h-screen ${tailwindColors.background}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;