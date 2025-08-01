import Header from "./Header";
import Heading from "./Heading";
import Clodor1 from "../assets/Clodor/Clodor1.jpg";
import Clodorcards from "../assets/Clodor/Clodorcards.png";
import Clodorinsights from "../assets/Clodor/Clodorinsights.png";
import Clodorweb from "../assets/Clodor/Clodorweb.png";
import Mobilemockupclodor from "../assets/Clodor/Mobilemockupclodor.png";
import Frame404 from "../assets/Clodor/Frame404.svg";
import BottomHeading from "./BottomHeading";
import ServicesSection from "./ServicesSection";
import ClodorVideo from "../assets/Clodor/videos/clodor.mp4";

export default function Clodor() {
    return (
        <div style={{ backgroundColor: "#151515" }} className="min-h-screen text-white p-5 gap-3">
            <Header />
            <div className="flex justify-between items-center  bg-black my-3 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-white">Clodor</h2>
                <p className="text-lg text-white text-right">An <span className="text-[#F9D8C9]">E-Commerce Website</span> <br/> For Ethnic Wear</p>
            </div>
            <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
                <span>A one-stop men's wedding fashion store</span>
            </div>
            <img
                src={Clodorweb}
                alt="Clodor Project Colors"
                className="w-full h-auto mt-5 rounded-lg shadow-lg"
            />
            <img src={Clodorcards} alt="Clodor Project Cards" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <img src={Clodor1} alt="Clodor Project Cards" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
                <span>Live website reach insights</span>
            </div>
            <img src={Clodorinsights} alt="Clodor Project Insights" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
            <img src={Mobilemockupclodor} alt="Clodor Mobile Mockup" className="w-full h-auto mt-5 rounded-lg shadow-lg" />

            <div>
                <video
                    src={ClodorVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-xl shadow-lg object-cover mt-2"
                />
            </div>
            <BottomHeading
                title="Go to dukaan"
                subtitle={Frame404}
                subtitle2={
                <>
                    A <span className="inline text-[#B7AA9F]">Healthy</span> Snack Shop
                </>
                }
            />
            <ServicesSection />
        </div>
    );
}
