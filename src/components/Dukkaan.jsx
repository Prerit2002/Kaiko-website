import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Header from "./Header";
import BottomHeading from "./BottomHeading";
import ServicesSection from "./ServicesSection";

import Frame3 from "../assets/Dukkaan/Frame3.png";
import butterig1 from "../assets/Dukkaan/butterig1.png";
import cheeseig1 from "../assets/Dukkaan/cheeseig1.png";
import truffleig1 from "../assets/Dukkaan/truffleig1.png";
import POPCORNMOCKUPS1 from "../assets/Dukkaan/POPCORNMOCKUPS1.png";
import ZOOMIN1 from "../assets/Dukkaan/ZOOMIN1.png";
import Circular from "../assets/Dukkaan/Circular.png";
import Fulllogo from "../assets/Dukkaan/Fulllogo.png";
import Dukaanlogoflat from "../assets/Dukkaan/Dukaanlogoflat.png";
import Wordmark from "../assets/Dukkaan/Wordmark.png";
import Rectangle from "../assets/Dukkaan/Rectangle.png";
import Video1 from "../assets/Dukkaan/videos/basantiforkaiko.mp4";
import Video2 from "../assets/Dukkaan/videos/housemix.mp4";

const AutoProgressLine = ({ onChange }) => {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (onChange) onChange(currentStep);
    if (currentStep < totalSteps - 1) {
      const timer = setTimeout(() => setCurrentStep((prev) => prev + 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onChange]);

  const stepPositions = Array.from({ length: totalSteps }, (_, i) => (i / (totalSteps - 1)) * 100);

  return (
    <div className="w-full px-8 mt-10 mb-5">
      <div className="w-full h-1 bg-black relative">
        <motion.div
          className="absolute top-1/2 w-4 h-4 bg-black rounded-full"
          animate={{ left: `${stepPositions[currentStep]}%` }}
          transition={{ duration: 0.5 }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
    </div>
  );
};

export default function Dukkaan() {
  const [current, setCurrent] = useState(0);

  const images = [Circular, Fulllogo, Dukaanlogoflat, Wordmark, Frame3];

  return (
    <div style={{ backgroundColor: "#151515" }} className="min-h-screen text-white p-5">
      <Header />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        className="flex justify-between items-center bg-black my-3 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white">Dukkaan</h2>
        <p className="text-lg text-white text-right">
          A <span className="text-[#F9D8C9]">Healthy</span> Snack App
        </p>
      </motion.div>

      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
        className="flex justify-center items-center bg-black p-8 rounded-lg shadow-lg text-xl font-bold">
        <span className="text-[#F9D8C9]">Slow food</span>
        <span className="ml-1">is the way to go</span>
      </motion.div>

      <div className="bg-[#F9D8C9] rounded-lg">
        <motion.img
          src={Circular}
          alt="Dukkaan Project"
          className="max-w-full max-h-[70vh] w-auto h-auto rounded-lg object-contain mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="bg-white rounded-lg mt-5 p-5">
        <div className="w-full h-[60vh] flex justify-center items-center">
          <motion.img
            key={current}
            src={images[current]}
            alt="Dukaan Project"
            className="max-h-full max-w-full object-contain rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <AutoProgressLine onChange={setCurrent} />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {["Guilt-Free", "No Palm Oil", "Tasty"].map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="flex justify-center items-center bg-black p-8 rounded-lg shadow-lg text-lg font-semibold"
          >
            {item}
          </motion.div>
        ))}
      </div>

      <img src={Frame3} alt="Dukkaan Project" className="w-full h-auto mt-5 rounded-lg shadow-lg" />

      <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
        <span>Colours per product category</span>
      </div>

      <div className="flex flex-row items-center mt-3 gap-3">
        {[butterig1, cheeseig1, truffleig1].map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Dukkaan Product Colors"
            className="w-full h-auto mt-5 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {[POPCORNMOCKUPS1, ZOOMIN1].map((src, i) => (
        <img key={i} src={src} alt="Dukkaan Mockups" className="w-full h-auto mt-5 rounded-lg shadow-lg" />
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 w-full">
        {[Video1, Video2, Video2].map((src, i) => (
          <video
            key={i}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        ))}
      </div>

      <div className="flex justify-center items-center bg-black mt-2 p-8 rounded-lg shadow-lg text-xl font-bold">
        <span>More to Come</span>
      </div>

      <BottomHeading title="Go to clodor" subtitle={Rectangle} subtitle2="CLODOR" />
      <ServicesSection />
    </div>
  );
}
