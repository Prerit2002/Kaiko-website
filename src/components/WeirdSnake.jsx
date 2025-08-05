import React from "react";
import Snake from "../assets/Snake.png";
export default function WeirdSnake() {
  return (
    <section className="w-full flex flex-col items-center justify-center space-y-3">
  <div className="bg-yellow-400 text-black text-[10px] md:text-md uppercase tracking-wider font-semibold px-4 py-2 rounded-full text-center w-full font-clash">
  we are the right path towards your goals
  </div>
  <div className="w-full">
    <img
      src={Snake}
      alt="Bombay Illustration"
      className="w-full h-auto"
    />
  </div>

  
</section>

  );
}
