import CalloutBanner from "./CalloutBanner"
import BombayBanner from "./BombayBanner";
import CollaborativeDesignProcess from "./CollaborativeProcess";
import WeirdSnake from "./WeirdSnake";
import ServicesSection from "./ServicesSection";
import Header from "./Header";

export default function About() {
    return (
        <div style={{ backgroundColor: '#151515' }} className="min-h-screen text-white p-5 space-y-3">
            <Header />
             <CalloutBanner />
            <BombayBanner />
            <CollaborativeDesignProcess />
            <WeirdSnake />
            <ServicesSection />
        </div>
    )
}