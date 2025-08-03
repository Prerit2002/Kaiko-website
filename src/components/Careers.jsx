import Jobs from './Jobs';
import ServicesSection from './ServicesSection';
import Header from './Header';

export default function Careers() {
    return (
        <div style={{ backgroundColor: '#151515' }} className="min-h-screen text-white p-5 space-y-3">
            <Header />
            <Jobs />
            <ServicesSection />
        </div>
    )
}