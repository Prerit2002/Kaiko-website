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
      className="w-full h-auto mb-4 rounded-xl md:rounded-3xl"
    />
  </div>

  <div className="bg-[#FFD400] text-black text-md uppercase tracking-wider font-semibold px-4 py-2 rounded-xl text-center  w-full font-clans">
    Based in Bombay
  </div>
</section>

  );
}
