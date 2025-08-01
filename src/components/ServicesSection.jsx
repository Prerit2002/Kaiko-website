import React from "react";
import Services from "../assets/Services.png";
import { ArrowUp } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="contact" className="text-white flex flex-col items-center rounded-2xl w-full">
      {/* Title */}
      <div className="bg-black text-center mb-6 w-full rounded-3xl p-6">
        <h2 className="text-2xl md:text-4xl font-extrabold">GO TO OUR SERVICES</h2>
        <p className="text-sm mt-1">AKA OUR MOJO</p>
      </div>

      {/* Card with background image */}
      <div
        className="relative bg-cover bg-no-repeat bg-center  rounded-3xl w-full min-h-[600px] p-6 flex flex-col justify-between"
        style={{ backgroundImage: `url(${Services})` }}
      >
        {/* Top row: buttons + arrow */}
        <div className="flex justify-between items-start w-full mb-4">
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://instagram.com/thekaikostudios"
              className="bg-black text-yellow-400 border border-blue-400 rounded-full px-4 py-1 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              @thekaikostudios
            </a>
            <a
              href="tel:+919039756905"
              className="bg-black text-yellow-400 border border-blue-400 rounded-full px-4 py-1 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              +91 9039756905
            </a>
            <a
              href="mailto:contact@thekaikostudios.com"
              className="bg-black text-yellow-400 border border-blue-400 rounded-full px-4 py-1 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              contact@thekaikostudios.com
            </a>
          </div>

          {/* Arrow Icon */}
          <div className="bg-yellow-400 p-2 rounded-full" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp className="text-black w-4 h-4" />
          </div>
        </div>

        {/* Footer row */}
        <div className="flex justify-between items-end w-full mt-auto text-xs text-white">
          <span className="font-bold text-sm md:text-lg">@kaiko STUDIOS</span>
          <span className="text-right text-[10px] sm:text-xs">
            © COPYRIGHT AND POWERED BY KAIKO STUDIOS LLP
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
