import CalloutBanner from "./CalloutBanner"
import BombayBanner from "./BombayBanner";
import CollaborativeDesignProcess from "./CollaborativeProcess";
import WeirdSnake from "./WeirdSnake";
import ServicesSection from "./ServicesSection";
import Header from "./Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
      const navigate = useNavigate();

const handleClick = () => {
  navigate('/');
  // Small delay to ensure page loads before scrolling
  setTimeout(() => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};
    return (
        <div style={{ backgroundColor: '#151515' }} className="min-h-screen text-white p-5 space-y-3">
            <Header />
             <CalloutBanner />
            <BombayBanner />
            <CollaborativeDesignProcess />
            <WeirdSnake />
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black text-center  w-full rounded-xl md:rounded-2xl p-4 sm:p-6"
                onClick={handleClick}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                GO TO OUR SERVICES
                </h2>
                <p className="text-xs sm:text-sm mt-1">AKA OUR MOJO</p>
            </motion.div>
            <ServicesSection />
        </div>
    )
}