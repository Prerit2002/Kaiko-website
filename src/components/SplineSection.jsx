import React from "react";
import HeroImage from "../assets/PinkMark.png"; // Replace with your actual image file
import MainMobile from "../assets/MainMobile.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-xl bg-black">
      {/* Background Image */}
      <img
        src={MainMobile}
        alt="Visual Mobile"
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
      />
      <img
        src={HeroImage}
        alt="Hero Background"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover p-2"
      />

      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1372 426"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="textPath"
          d="M43.3 361.5C105.4 464.3 392.7 411.3 529.1 327.8C665.4 244.4 745 203.1 1045.6 238.4C1346.2 273.7 1530.1 127.1 1223.1 30.9C916.1 -65.4 452.5 -74.4 238.6 13.9C52.2 89.1 -18.9 258.8 43.3 361.5Z"
          fill="transparent"
        />
        <text
          fill="#ffe600"
          fontSize="32"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="500"
        >
          <textPath href="#textPath" startOffset="12%">
            We're the fun friends your brand didn't know it needed
          </textPath>
        </text>
      </svg>
    </section>
  );
}