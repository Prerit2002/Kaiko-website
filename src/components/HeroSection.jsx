import React from "react";

const GrowthSection = () => {
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
      
      
      
  return (
    <div className=" w-full text-yellow-400 font-sans ">
      {/* Header */}
      <div className="w-full text-center py-2 bg-pink-600 text-white text-sm md:text-xl font-semibold rounded-md mx-auto font-clash">
        WHAT TO EXPECT
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 my-3 flex-wrap">
        <button className="border border-yellow-400 text-yellow-400 rounded-full px-4 py-1 text-sm hover:bg-yellow-400 hover:text-black transition">
          TEAM PLAY
        </button>
        <button className="bg-pink-600 text-white rounded-full px-4 py-1 text-sm font-semibold">
          GROWTH
        </button>
        <button className="border border-yellow-400 text-yellow-400 rounded-full px-4 py-1 text-sm hover:bg-yellow-400 hover:text-black transition">
          VATAVARAN
        </button>
      </div>

      <div className="relative bg-pink-600 rounded-xl py-10 mx-auto text-yellow-400 font-bold overflow-visible">
        <div className="relative w-full flex justify-center ">
            {/* Pattern Container */}
            <div className="relative h-[10rem] w-[90vw] sm:w-[35rem] md:w-[60rem] lg:w-[60rem] overflow-hidden mx-auto">
            {vPattern.map((item, index) => (
                <span
                key={index}
                className="absolute text-base sm:text-lg md:text-4xl  transition-all"
                style={{
                    left: item.left, // e.g. '50%', '40%' — set in `vPattern`
                    top: item.top,   // e.g. '2rem', '5rem' — set in `vPattern`
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                }}
                >
                {item.letter}
                </span>
            ))}
            </div>
        </div>
        </div>
      
    </div>
  );
};

export default GrowthSection;
