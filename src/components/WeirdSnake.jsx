import React from "react";
import Snake from "../assets/Snake.png";
export default function WeirdSnake() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
  <div className="bg-yellow-400 text-black text-md uppercase tracking-wider font-semibold px-4 py-2 rounded-full w-full">
  we are the right path towards your goals
  </div>
  <div className="w-full">
    <img
      src={Snake}
      alt="Bombay Illustration"
      className="w-full h-auto mt-4"
    />
  </div>

  
</section>

  );
}
