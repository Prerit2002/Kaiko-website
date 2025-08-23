import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SplineSection from "./components/SplineSection";
import CreativeApproachSection from "./components/CreativeApproachSection";
import OurMojoSection from "./components/OurMojoSection";
import ShowcaseSection from "./components/ShowcaseSection";
import BombayBanner from "./components/BombayBanner";
import CalloutBanner from "./components/CalloutBanner";
import HeroSection from "./components/HeroSection";
import CollaborativeDesignProcess from "./components/CollaborativeProcess";
import WeirdSnake from "./components/WeirdSnake";
import ServicesSection from "./components/ServicesSection";
import Duggu from "./components/Duggu";
import Dukkaan from "./components/Dukkaan";
import Clodor from "./components/Clodor";
import Clenzi from "./components/Clenzi";
import Bartender from "./components/Bartender";
import Careers from "./components/Careers";
import About from "./components/About";
import SplashScreen from "./components/SplashScreen";
import Bluequestionmark from "./assets/Bluequestionmark.png";
import { Helmet,HelmetProvider } from "react-helmet-async";
import ContactForm from "./components/ContactForm";
import LightboxForm from "./components/LightboxForm";
import Coffee from "./components/coffee";
import "./App.css";

function HomePage() {
  return (
    <div
      style={{ backgroundColor: "#151515" }}
      className="min-h-screen text-white p-5 font-sans"
    >
      <section className="w-full mx-auto flex flex-col items-center gap-3">
        <Header />
        <SplineSection />
        <div className="bg-black text-[#EF4293] bg-black p-5 rounded-lg w-full text-center text-2xl font-clans">
          <h1>Namaste</h1>
        </div>
        <CreativeApproachSection />
        <Coffee />
        <OurMojoSection />
        <HeroSection />
        <ShowcaseSection />
        {/* <CalloutBanner />
        <BombayBanner />
        <CollaborativeDesignProcess />
        <WeirdSnake /> */}
        {/* <Jobs /> */}
        <ContactForm />
        <LightboxForm />
        <ServicesSection />
      </section>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>The Kaiko Studios</title>
        <meta
          name="description"
          content="Bold ideas, cheeky strategy, and scroll-stopping design. Kaiko Studios is a creative branding and marketing agency that builds identities, websites, and content that ask why—and answer with wow. Curious? You’re exactly who we wanted."
        />

        {/* Open Graph */}
        <meta property="og:title" content="The Kaiko Studios" />
        <meta
          property="og:description"
          content="We build bold, animated, and interactive websites."
        />
        <meta
          property="og:image"
          content="https://thekaikostudios.com/social-cover.png"
        />
        <meta property="og:url" content="https://thekaikostudios.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Kaiko Studios" />
        <meta
          name="twitter:description"
          content="Bold ideas, cheeky strategy, and scroll-stopping design. Kaiko Studios is a creative branding and marketing agency that builds identities, websites, and content that ask why—and answer with wow. Curious? You’re exactly who we wanted."
        />
        <meta
          name="twitter:image"
          content="https://thekaikostudios.com/social-cover.png"
        />
      </Helmet>
      <Router>
        <div style={{ backgroundColor: "#151515" }}>
          <SplashScreen imageSrc={Bluequestionmark} duration={2} />
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
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
