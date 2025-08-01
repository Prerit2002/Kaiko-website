import Header from "./Header";
import BottomHeading from "./BottomHeading";
import ServicesSection from "./ServicesSection";
import Frame2055 from "../assets/Bartender/Frame2055.png";
import Frame2054 from "../assets/Bartender/Frame2054.png";
import Frame2059 from "../assets/Bartender/Frame2059.png";
import Frame2143 from "../assets/Bartender/Frame2143.png";
import Vertical1 from "../assets/Bartender/vertical1.png";
import clenziLogo from "../assets/Bartender/clenziLogo.png";

export default function Bartender() {
    return (
        <div style={{ backgroundColor: "#151515" }} className="min-h-screen text-white p-5 gap-3">
            <Header />
            <div className="flex justify-between items-center bg-black my-3 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-white">THE BARTENDER</h2>
                <p className="text-lg text-white text-right">A Unique <span className="text-[#EE3464]">Bar Menu</span> <br/> and Keepsake</p>
            </div>
            <img src={Frame2055} alt="Clodor Mobile Mockup" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
                <span> <span className="text-[#B7AA9F]">A side of cliché</span> for all your drinks</span>
            </div>
            <img src={Frame2054} alt="Bartender Project Colors" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
                <span> Capturing the <span className="text-[#B7AA9F]">essence</span> of every drink</span>
            </div>
            <img src={Frame2059} alt="Bartender Project Colors" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <img src={Frame2143} alt="Bartender Project Colors" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
                <span> A <span className="text-[#B7AA9F]">Keepsake </span> for every night</span>
            </div>
            <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-3xl font-bold">
                <span> 3/5 people tried new drinks</span>
            </div>

            {/* video */}

            <img src={Vertical1} alt="Bartender Project Vertical" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <img src={Frame2059} alt="Bartender Project Vertical" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
                <span> Cheers</span>
            </div>
            <BottomHeading
                title="Go to Clenzi"
                subtitle={clenziLogo}
                subtitle2={
                    <>
                        Packaging for <span className="inline text-[#611AA1]">sustainable</span> disposables
                    </>
                }
            />
            <ServicesSection />

        </div>
    );
}