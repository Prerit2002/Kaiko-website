import React from "react";
import { motion } from "framer-motion";
import BottomHeading from "./BottomHeading";
import ServicesSection from "./ServicesSection";
import Header from "./Header";

import Clenzielements from "../assets/Clenzi/clenzielements.png";
import Clenzi1 from "../assets/Clenzi/Clenzi.jpg";
import Frame2059 from "../assets/Clenzi/Frame2059.png";
import Vector from "../assets/Clenzi/Vector.png";
import Clodor from "../assets/Clodor.png"

import AdultsBlue from "../assets/Clenzi/videos/AdultsBlue.mp4";
import KidsYellow from "../assets/Clenzi/videos/KidsYellow.mp4";
import WomenPink from "../assets/Clenzi/videos/WomenPink.mp4";
import clenzianimals from "../assets/Clenzi/videos/clenzianimals.mp4";

export default function Clenzi() {
  const sectionFade = { hidden: { opacity: 0, y: 20 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" } }) };

  return (
    <div style={{ backgroundColor: "#151515" }} className="min-h-screen text-white p-5 space-y-4">
      <Header />

      {/* Title */}
      <motion.div
  initial="hidden"
  animate="visible"
  custom={0}
  variants={sectionFade}
  className="flex flex-col md:flex-row md:justify-between items-center bg-black my-3 p-4 md:p-8 rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg"
>
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-0">Clenzi</h2>
  <p className="text-base md:text-2xl text-white text-center md:text-right font-semibold">
    Packaging for <span className="text-[#EE3464]">Sustainable</span> Disposables
  </p>
</motion.div>

      {/* Key Pillars */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-1 md:gap-4 mt-5"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {[
          { label: "SAFE", bg: "#EE3464" },
          { label: "DISCREET", bg: "#2A81BC" },
          { label: "CONSCIOUS", bg: "#FEC914" },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={sectionFade}
            custom={i}
            className="flex justify-center items-center p-4 md:p-8 rounded-xl md:rounded-2xl md:rounded-2xl shadow-xl text-lg md:text-3xl font-semibold"
            style={{ backgroundColor: item.bg }}
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>

      {/* Hero Video */}
      <motion.div initial="hidden" animate="visible" custom={0.2} variants={sectionFade}>
        <video
          src={clenzianimals}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg object-cover mt-2"
        />
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center items-center bg-black mt-6 p-8 rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg text-base md:text-xl font-bold"
      >
        <span>
          Sustainability never looked this <span className="text-[#EE3464]">cute</span>
        </span>
      </motion.div>

      {/* Elements Image */}
      <motion.div initial="hidden" animate="visible" custom={0.3} variants={sectionFade} className="flex justify-center items-center bg-[#FFFFFF] mt-4 p-8 rounded-xl md:rounded-2xl  ">
        <img src={Clenzielements} alt="Clenzi Project" className="rounded-xl md:rounded-2xl md:rounded-2xl  max-w-full" />
      </motion.div>

      {/* Subtitles */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.4}
        variants={sectionFade}
        className="flex flex-col  gap-3 mt-4"
      >
        <div className="flex-grow flex justify-center items-center bg-black px-3 py-4 md:p-6 rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg text-3xl font-bold text-center">
    <span>Use of clean & targeted color schemes</span>
</div>
        <div className="flex-grow flex justify-center text-center items-center bg-black p-6 rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg text-xl font-bold">
          <span>Packaging for <span className="text-[#EE3464]">3</span>  different sectors</span>
        </div>
      </motion.div>

      {/* Video Grid */}
      <motion.div
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 w-full"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {[WomenPink, AdultsBlue, KidsYellow].map((src, i) => (
    <motion.div key={i} variants={sectionFade} custom={i}>
      <motion.video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg object-cover"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      {/* Text tile directly below each video */}
      <motion.div
        variants={sectionFade}
        custom={i}
        className="flex justify-center items-center p-4 mt-2 rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg text-lg font-semibold text-center"
        style={{ 
          backgroundColor: "white", 
          color: [
            { label: "Women", color: "#EE3464" },
            { label: "Seniors", color: "#2A81BC" },
            { label: "Children", color: "#FFC831" },
          ][i].color 
        }}
      >
        {[
          { label: "Women", color: "#EE3464" },
          { label: "Seniors", color: "#2A81BC" },
          { label: "Children", color: "#FFC831" },
        ][i].label}
      </motion.div>
    </motion.div>
  ))}
</motion.div>

      {/* Metric */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center text-center bg-black mt-6 px-3 py-6 md:p-8 rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg text-3xl font-bold"
      >
        <span>30% chance of disposable awareness</span>
      </motion.div>

      {/* Mobile Mockup */}
    <motion.div 
  initial={{ opacity: 0, y: 10 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.5 }} 
  className="mt-5 overflow-hidden rounded-lg md:rounded-2xl "
>
  <img
    src={Clenzi1}
    alt="Clenzi Mobile Mockup"
    className="w-full h-auto shadow-lg scale-125"
  />
</motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-5">
        <img
          src={Frame2059}
          alt="Clenzi Project Insights"
          className="w-full h-auto  shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center items-center bg-black mt-6 p-8 rounded-xl md:rounded-2xl md:rounded-2xl shadow-lg text-xl font-bold"
      >
        <span>Small habits. Big impact.</span>
      </motion.div>

      {/* Footer CTA */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
        <BottomHeading
          title="Go to Clodor"
          subtitle={Clodor}
          subtitle2={
            <>
              A Web Project for ethnic wear
            </>
          }
          redirectUrl="/clodor"
        />
      </motion.div>

      <ServicesSection />
    </div>
  );
}
