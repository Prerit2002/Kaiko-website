import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/PinkMark.png"; // desktop
import MainMobile from "../assets/MainMobile.png"; // mobile

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-xl bg-black">
      {/* Mobile Background */}
      <motion.img
        src={MainMobile}
        alt="Visual Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-fill"
        initial={{ opacity: 0.85, scale: 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Desktop Background wrapper to center without cropping */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center px-4 py-2">
        <motion.img
          src={HeroImage}
          alt="Hero Background"
          className="max-w-full max-h-full object-contain"
          initial={{ scale: 1.02, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 18, duration: 0.6 }}
        />
      </div>

      {/* Curved Text (desktop only) */}
      <motion.svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1500 500"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
      >
        <defs>
          <path
            id="curve"
            d="M43.3 411.5C105.4 514.3 392.7 461.3 529.1 377.8C665.4 294.4 745 253.1 1045.6 288.4C1346.2 323.7 1530.1 177.1 1223.1 80.9C916.1 -15.4 452.5 -24.4 238.6 63.9C52.2 139.1 -18.9 308.8 43.3 411.5Z"
            fill="transparent"
          />
        </defs>

        <motion.text
          fill="#ffe600"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="500"
          fontSize="clamp(30px, 2vw, 30px)"
          // subtle horizontal float to keep it lively
          animate={{ x: [0, 3, 0], rotate: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <textPath
            href="#curve"
            startOffset="15.5%"
            method="stretch"
            spacing="auto"
          >
            We're the fun friends your brand didn't know it needed
          </textPath>
        </motion.text>
      </motion.svg>

      {/* Soft gradient overlay so edges feel less abrupt */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
    </section>
  );
}
