import Heading from "./Heading";
import Header from "./Header";
import Frame1 from "../assets/Duggu/Frame1.png";
import Frame1892 from "../assets/Duggu/Frame1892.png";
import DugguFace from "../assets/Duggu/Dugguface.png";
import DUGGU from "../assets/Duggu/DUGGU.png";
import Dugguambience from "../assets/Duggu/Dugguambience.png";
import duggufinal1 from "../assets/Duggu/duggufinal1.png";
import text1 from "../assets/Duggu/text1.png";
import text2 from "../assets/Duggu/text2.png";
import allfourcolors from "../assets/Duggu/allfourcolors.png";
import Dugguframe2 from "../assets/Duggu/Dugguframe2.png";
import BottomHeading from "./BottomHeading";
import ServicesSection from "./ServicesSection";
import beer from "../assets/Duggu/beer.png";
import DugguUIelements from "../assets/Duggu/videos/DugguUIelements.mp4";
import Introvideo from "../assets/Duggu/videos/Introvideo.mp4";
import Bluetoothprototype from "../assets/Duggu/videos/Bluetoothprototype.mp4";
import Exploreprototype from "../assets/Duggu/videos/Exploreprototype.mp4";
import Onboardingprototype from "../assets/Duggu/videos/Onboardingprototype.mp4";
import MobileImage from "../assets/Duggu/MobileImage.png";

export default function Duggu() {
  return (
    <div
      style={{ backgroundColor: "#151515" }}
      className="min-h-screen text-white p-5 gap-3"
    >
      <Header />
      <div className="flex flex-col md:flex-row md:justify-between items-center bg-black my-3 p-4 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-2 md:mb-0">Duggu</h2>
        <p className="text-base md:text-3xl text-white text-center md:text-right font-semibold">
          An <span className="text-[#611AA1]">AI Story Telling device</span>
          <span className="hidden md:inline">
            <br />
          </span>
          <span className="md:hidden"> </span>
          for children
        </p>
      </div>
      <img
        src={Frame1}
        alt="Duggu Project Colors"
        className="w-full h-auto mt-5 rounded-lg shadow-lg"
      />
      <div className="flex justify-center items-center bg-[#611AA1] my-2 p-8 rounded-lg shadow-lg text-xl font-bold">
        <span>An AI Storytelling Companion</span>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4 mt-5">
        <div className="flex justify-center items-center bg-black  p-8 rounded-lg shadow-lg text-base md:text-lg font-semibold">
          Friend
        </div>
        <div className="flex justify-center items-center bg-black  p-8 rounded-lg shadow-lg text-base md:text-lg font-semibold">
          Storyteller
        </div>
        <div className="flex justify-center items-center bg-black  p-8 rounded-lg shadow-lg text-base md:text-lg font-semibold">
          Creator
        </div>
        <div className="flex justify-center items-center bg-black  p-8 rounded-lg shadow-lg text-base md:text-lg font-semibold">
          Explorer
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#611AA1] my-2 p-8 rounded-lg shadow-lg text-xl font-bold">
        <span>Meet Duggu</span>
      </div>

      <div className="flex flex-col md:flex-row items-center p-6 bg-black rounded-lg min-h-[80vh]">
        {/* Left - Frame1892 */}
        <div className="flex-[1] flex justify-start items-start">
          <img
            src={Frame1892}
            alt="Duggu Project"
            className="w-full h-auto max-h-[80vh] rounded-lg object-contain"
          />
        </div>

        {/* Center - DugguFace */}
        <div className="flex-[2] flex justify-center items-center">
          <img
            src={DugguFace}
            alt="Duggu Face"
            className="w-[40vw] max-h-[75vh] object-contain rounded-lg"
          />
        </div>

        {/* Right - Spacer (for symmetry) */}
        <div className="flex-[1]" />
      </div>

      <div className="flex justify-center items-center  my-2 p-8 rounded-lg shadow-lg text-xl font-bold bg-black">
        <img src={DUGGU} alt="Duggu Logo" className=" h-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 w-full">
        <video
          src={Bluetoothprototype}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-[6.5rem] shadow-lg object-cover"
        />

        <video
          src={Onboardingprototype}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-[6.5rem] shadow-lg object-cover"
        />

        <video
          src={Exploreprototype}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-[6.5rem] shadow-lg object-cover"
        />
      </div>

      <div>
        <video
          src={Introvideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl shadow-lg object-cover my-2"
        />
      </div>

      <span className="block p-5 text-center rounded-lg bg-black text-white text-4xl font-bold w-full">
        Increased user engagement by 82.4%
      </span>

      <span className="block p-5 text-center rounded-lg bg-black text-white text-xl font-bold w-full">
        Helping 3 major deficits
      </span>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="flex justify-center items-center bg-black  p-8 rounded-lg shadow-lg text-lg font-semibold">
          Time
        </div>
        <div className="flex justify-center items-center bg-black  p-8 rounded-lg shadow-lg text-lg font-semibold">
          Regional
        </div>
        <div className="flex justify-center items-center bg-black  p-8 rounded-lg shadow-lg text-lg font-semibold">
          Sleep Solution
        </div>
      </div>

      <div>
        <video
          src={DugguUIelements}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl shadow-lg object-cover mt-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="flex justify-center items-center bg-[#611AA1] p-8 rounded-lg shadow-lg text-lg font-semibold">
          No Gender
        </div>
        <div className="flex justify-center items-center bg-[#611AA1]  p-8 rounded-lg shadow-lg text-lg font-semibold">
          Many Colours
        </div>
      </div>

      <span className="block p-5 text-center rounded-lg bg-black text-white text-4xl font-bold w-full my-3">
        150% increase in genre exploration
      </span>

      <div className="hidden md:relative w-full h-screen bg-black rounded-lg overflow-hidden p-4">
        {/* Top Right: Image with text BELOW */}
        <div className="absolute top-4 right-4 text-right flex flex-col items-end">
          <div className="h-[50vh] w-auto flex items-center justify-center">
            <img
              src={Dugguambience}
              alt="Top Right"
              className=" w-auto rounded-lg shadow-lg object-contain"
            />
          </div>
          <img
            src={text1}
            alt="Text Below Image"
            className="mt-2 w-auto h-auto"
          />
        </div>

        {/* Bottom Left: Text ABOVE image */}
        <div className="absolute bottom-4 left-4 text-left flex flex-col items-start">
          <img
            src={text2}
            alt="Text Above Image"
            className="mb-2 w-auto h-auto"
          />
          <div className="h-[50vh] w-auto flex items-center justify-center">
            <img
              src={duggufinal1}
              alt="Bottom Left"
              className=" w-auto rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </div>

      <img src={MobileImage} alt="Duggu Mobile Mockup" className="w-full h-auto mt-5 rounded-lg shadow-lg" />

      <img
        src={allfourcolors}
        alt="Duggu Project Colors"
        className="w-full h-auto mt-5 rounded-lg shadow-lg"
      />

      <img
        src={Dugguframe2}
        alt="Duggu Project Colors"
        className="w-full h-auto mt-5 rounded-lg shadow-lg"
      />

      <div className="flex justify-center items-center bg-black my-4 p-8 rounded-3xl shadow-lg text-xl font-bold">
        <span>Sweet Dreams</span>
      </div>

      <BottomHeading
        title="Go to the bartender"
        subtitle={beer}
        subtitle2={
          <>
            A <span className="inline text-[#B7AA9F]">unique bar menu</span> and
            keepsake
          </>
        }
        redirectUrl="/bartender"
      />

      <ServicesSection />
    </div>
  );
}
