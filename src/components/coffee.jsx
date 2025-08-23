"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Coffee() {
  const whatsappNumber = "919039756905"; // your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={handleClick}
      className="w-full p-5 md:p-10 bg-[#EF4293] rounded-2xl text-[#FFD400] flex items-center justify-between shadow-lg cursor-pointer"
    >
      {/* Heading */}
      <h1 className="text-xl md:text-5xl font-bold">
        GRAB A COFFEE WITH US
      </h1>

      {/* Arrow */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-10 h-10 md:w-20 md:h-20" />
      </motion.div>
    </motion.div>
  );
}
