import React from "react";
import { motion } from "framer-motion";
import Services from "../assets/Services.png";
import { ArrowUp } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="contact" className="text-white flex flex-col items-center rounded-xl w-full space-y-3">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-black text-center  w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
          GO TO OUR SERVICES
        </h2>
        <p className="text-xs sm:text-sm mt-1">AKA OUR MOJO</p>
      </motion.div>

      {/* Card with background image and overlay content */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden h-[35vh] md:h-[100vh]">
        {/* Background Image */}
        <img 
          src={Services} 
          alt="Services" 
          className="w-full h-full md:object-cover object-top md:object-[center_10%]"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
          {/* Top row: buttons + arrow */}
          <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-3 sm:gap-4">
            {/* Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 w-full sm:w-auto">
              <a
                href="https://instagram.com/thekaikostudios"
                className="bg-black/90 backdrop-blur-md text-yellow-400 border border-blue-400/80 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                @thekaikostudios
              </a>
              <a
                href="tel:+919039756905"
                className="bg-black/90 backdrop-blur-md text-yellow-400 border border-blue-400/80 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                +91 9039756905
              </a>
              <a
                href="mailto:contact@thekaikostudios.com"
                className="bg-black/90 backdrop-blur-md text-yellow-400 border border-blue-400/80 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="hidden sm:inline">contact@thekaikostudios.com</span>
                <span className="sm:hidden">Email Us</span>
              </a>
            </div>

            {/* Arrow Icon */}
            <div className="hidden md:flex justify-end sm:justify-center w-full sm:w-auto">
              <div
                className="bg-yellow-400 p-2.5 sm:p-3 rounded-full cursor-pointer hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-12"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
              >
                <ArrowUp className="text-black w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          {/* Footer row */}
          <div className="flex flex-row md:flex-col  justify-between items-start sm:items-end w-full gap-2 sm:gap-4">
            <span className="font-bold text-base sm:text-xs md:text-xl lg:text-2xl text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
              @kaiko STUDIOS
            </span>
            <span className="text-left sm:text-right text-[10px] sm:text-xs lg:text-sm text-white/95 leading-tight max-w-xs sm:max-w-none drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
              © COPYRIGHT AND POWERED BY KAIKO STUDIOS LLP
            </span>
             <div className="md:hidden flex justify-end sm:justify-center w-full sm:w-auto">
              <div
                className="bg-yellow-400 p-2.5 sm:p-3 rounded-full cursor-pointer hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-12"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
              >
                <ArrowUp className="text-black w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;