import React from "react";
import ShikharUrvi from "../assets/ShikharUrvi.jpg";
export default function BombayBanner() {
  return (
    <section className=" w-full flex flex-col items-center justify-center">
  {/* Responsive Illustration Image */}
  <div className="w-full">
    <img
      src={ShikharUrvi}
      alt="Bombay Illustration"
      className="w-full h-auto mb-4 rounded-3xl"
    />
  </div>

  <div className="bg-blue-600 text-white text-md uppercase tracking-wider font-semibold px-4 py-2 rounded-full  w-full">
    Based in Bombay
  </div>
</section>

  );
}
