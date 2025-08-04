import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SplineSection from './components/SplineSection';
import CreativeApproachSection from './components/CreativeApproachSection';
import OurMojoSection from './components/OurMojoSection';
import ShowcaseSection from './components/ShowcaseSection';
import BombayBanner from './components/BombayBanner';
import CalloutBanner from './components/CalloutBanner';
import HeroSection from './components/HeroSection';
import CollaborativeDesignProcess from './components/CollaborativeProcess';
import WeirdSnake from './components/WeirdSnake';
import ServicesSection from './components/ServicesSection';
import Duggu from './components/Duggu';
import Dukkaan from './components/Dukkaan';
import Clodor from './components/Clodor';
import Clenzi from './components/Clenzi';
import Bartender from './components/Bartender';
import Careers from './components/Careers';
import About from './components/About';
import SplashScreen from './components/SplashScreen';
import Logo2 from './assets/Logo.png';
import './App.css';

function HomePage() {
  return (
    <div style={{ backgroundColor: '#151515' }} className="min-h-screen text-white p-5 font-sans">
      <section className='w-full mx-auto flex flex-col items-center gap-3'>
        <Header />
        <SplineSection />
        <div className="bg-black text-[#EF4293] bg-black p-5 rounded-lg w-full text-center text-2xl font-clans">
          <h1>Namaste</h1>
        </div>
        <CreativeApproachSection />
        <OurMojoSection />
        <HeroSection />
        <ShowcaseSection />
        {/* <CalloutBanner />
        <BombayBanner />
        <CollaborativeDesignProcess />
        <WeirdSnake /> */}
        {/* <Jobs /> */}
        <ServicesSection />
      </section>
    </div>
  );
}

function App() {
  return (
    <Router style={{ backgroundColor: '#151515' }}>
      <SplashScreen imageSrc={Logo2} duration={2} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/duggu" element={<Duggu />} />
        <Route path="/dukaan" element={<Dukkaan />} />
        <Route path="/clodor" element={<Clodor />} />
        <Route path="/clenzi" element={<Clenzi />} />
        <Route path="/bartender" element={<Bartender />} />
      </Routes>
    </Router>
  );
}

export default App;
