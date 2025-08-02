import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("TEAM PLAY");

  // Growth section V-pattern
  const vPattern = [
    // Line 1 - EVERY-S-P-TOWARDS-GOAL
    { letter: "E", left: "4%", top: "0rem" },
    { letter: "V", left: "8%", top: "0rem" },
    { letter: "E", left: "12%", top: "0rem" },
    { letter: "R", left: "16%", top: "0rem" },
    { letter: "Y", left: "20%", top: "0rem" },
    { letter: " ", left: "24%", top: "0rem" },
    { letter: "S", left: "28%", top: "0rem" },
    { letter: " ", left: "32%", top: "0rem" },
    { letter: "P", left: "47%", top: "0rem" },
    { letter: " ", left: "40%", top: "0rem" },
    { letter: "T", left: "51%", top: "0rem" },
    { letter: "O", left: "54%", top: "0rem" },
    { letter: "W", left: "57%", top: "0rem" },
    { letter: "A", left: "60%", top: "0rem" },
    { letter: "R", left: "63%", top: "0rem" },
    { letter: "D", left: "66%", top: "0rem" },
    { letter: "S", left: "69%", top: "0rem" },
    { letter: " ", left: "72%", top: "0rem" },
    { letter: "Y", left: "75%", top: "0rem" },
    { letter: "O", left: "78%", top: "0rem" },
    { letter: "U", left: "81%", top: "0rem" },
    { letter: "R", left: "84%", top: "0rem" },
    { letter: " ", left: "87%", top: "0rem" },
    { letter: "G", left: "90%", top: "0rem" },
    { letter: "O", left: "93%", top: "0rem" },
    { letter: "A", left: "96%", top: "0rem" },
    { letter: "L", left: "99%", top: "0rem" },
    
    // Line 2
    { letter: "T", left: "29%", top: "3rem" },
    { letter: "E", left: "46%", top: "3rem" },
    
    // Line 3
    { letter: "E", left: "30%", top: "5.5rem" },
    { letter: "T", left: "45%", top: "5.5rem" },
    
    // Line 4
    { letter: "P", left: "31%", top: "8rem" },
    { letter: "I", left: "34.5%", top: "8rem" },
    { letter: "S", left: "36.5%", top: "8rem" },
    { letter: "A", left: "40%", top: "8rem" },
    { letter: "S", left: "44%", top: "8rem" },
  ];

  // Auto-carousel for tabs
  useEffect(() => {
    const tabs = ["TEAM PLAY", "GROWTH", "VATAVARAN"];
    const interval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Team Play Content Component
  const TeamPlayContent = () => (
  <div className="w-full h-[12rem] flex justify-center px-6 md:px-12 ">
    <div className="w-full max-w-6xl">
      {/* First line: "YOU ARE A PART OF" */}
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          YOU ARE A PART OF
        </h2>
      </div>

      {/* Second line: "OUR SQUAD" and "And" */}
      <div className="w-full flex items-baseline mt-4">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
          OUR SQUAD
        </h3>
        <div className="flex-1 flex justify-center">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
            AND
          </h3>
        </div>
      </div>

      {/* Third line: "WE," aligned right */}
      <div className="w-full flex justify-end mt-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          WE,
        </h2>
      </div>

      {/* Fourth line: "A PART OF YOUR VISION" aligned right */}
      <div className="w-full flex justify-end mt-1">
        <h2 className="text-sm md:text-lg lg:text-2xl font-bold leading-tight">
          A PART OF YOUR VISION
        </h2>
      </div>
    </div>
  </div>
);

  // Growth Content Component
  const GrowthContent = () => (
    <div className="relative w-full flex justify-center">
      {/* Pattern Container */}
      <div className="relative h-[12rem] w-[90vw] sm:w-[35rem] md:w-[60rem] lg:w-[60rem] overflow-hidden mx-auto">
        {vPattern.map((item, index) => (
          <span
            key={index}
            className="absolute text-base sm:text-lg md:text-4xl transition-all"
            style={{
              left: item.left,
              top: item.top,
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            {item.letter}
          </span>
        ))}
      </div>
    </div>
  );

  // Vatavaran Content Component
  const VatavaranContent = () => (
  <div className="relative h-[12rem] flex flex-col items-center justify-center px-6 md:px-12">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">
      vibe check is a must
    </h1>
    <p className="text-lg md:text-xl lg:text-2xl text-center mt-2">
      and it goes both ways
    </p>
  </div>
);

  return (
    <div className="w-full text-yellow-400 font-sans">
      {/* Header */}
      <div className="w-full text-center py-2 bg-pink-600 text-white text-sm md:text-xl font-semibold rounded-md mx-auto font-clash">
        WHAT TO EXPECT
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 my-3 flex-wrap">
        {["TEAM PLAY", "GROWTH", "VATAVARAN"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-1 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-pink-600 text-white"
                : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area with Carousel */}
      <div className="relative bg-pink-600 rounded-xl py-8 md:py-10 mx-auto text-yellow-400 font-bold overflow-hidden">
        <div className="relative">
          {/* Team Play Content */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeTab === "TEAM PLAY"
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform translate-x-full absolute inset-0"
            }`}
          >
            <TeamPlayContent />
          </div>

          {/* Growth Content */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeTab === "GROWTH"
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform translate-x-full absolute inset-0"
            }`}
          >
            <GrowthContent />
          </div>

          {/* Vatavaran Content */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeTab === "VATAVARAN"
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform translate-x-full absolute inset-0"
            }`}
          >
            <VatavaranContent />
          </div>
        </div>

        {/* Progress Indicator */}
        {/* <div className="flex justify-center space-x-2 mt-6">
          {["TEAM PLAY", "GROWTH", "VATAVARAN"].map((tab, index) => (
            <div
              key={tab}
              className={`h-1 w-8 md:w-12 rounded-full transition-all duration-300 ${
                activeTab === tab ? "bg-yellow-400" : "bg-yellow-400/30"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;