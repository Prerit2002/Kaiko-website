import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepImg from "../assets/StepImg.png";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("TEAM PLAY");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  // Desktop V-pattern (original spacing)
  const vPatternDesktop = [
    // Line 1 - EVERY-S-P-TOWARDS-GOAL
    { letter: "E", left: "4%", top: "0rem" },
    { letter: "V", left: "7%", top: "0rem" },
    { letter: "E", left: "10%", top: "0rem" },
    { letter: "R", left: "13%", top: "0rem" },
    { letter: "Y", left: "16%", top: "0rem" },
    { letter: " ", left: "19%", top: "0rem" },
    { letter: "S", left: "22%", top: "0rem" },
    { letter: " ", left: "25%", top: "0rem" },
    { letter: "P", left: "39.5%", top: "0rem" },
    { letter: " ", left: "42%", top: "0rem" },
    { letter: "T", left: "43%", top: "0rem" },
    { letter: "O", left: "45.5%", top: "0rem" },
    { letter: "W", left: "49%", top: "0rem" },
    { letter: "A", left: "53%", top: "0rem" },
    { letter: "R", left: "56%", top: "0rem" },
    { letter: "D", left: "59%", top: "0rem" },
    { letter: "S", left: "62%", top: "0rem" },
    { letter: " ", left: "63%", top: "0rem" },
    { letter: "Y", left: "66%", top: "0rem" },
    { letter: "O", left: "69%", top: "0rem" },
    { letter: "U", left: "73%", top: "0rem" },
    { letter: "R", left: "76%", top: "0rem" },
    { letter: " ", left: "78%", top: "0rem" },
    { letter: "G", left: "81%", top: "0rem" },
    { letter: "O", left: "84.5%", top: "0rem" },
    { letter: "A", left: "88%", top: "0rem" },
    { letter: "L", left: "91%", top: "0rem" },
    
    // Line 2
    { letter: "T", left: "23%", top: "3rem" },
    { letter: "E", left: "38%", top: "3rem" },
    
    // Line 3
    { letter: "E", left: "24%", top: "5.5rem" },
    { letter: "T", left: "37%", top: "5.5rem" },
    
    // Line 4
    { letter: "P", left: "25%", top: "8rem" },
    { letter: "I", left: "28%", top: "8rem" },
    { letter: "S", left: "29%", top: "8rem" },
    { letter: "A", left: "32%", top: "8rem" },
    { letter: "S", left: "36%", top: "8rem" },
  ];

  // Mobile V-pattern (tighter spacing)
  const vPatternMobile = [
    // Line 1 - EVERY-S-P-TOWARDS-GOAL
    { letter: "E", left: "4%", top: "0rem" },
    { letter: "V", left: "7%", top: "0rem" },
    { letter: "E", left: "10%", top: "0rem" },
    { letter: "R", left: "13%", top: "0rem" },
    { letter: "Y", left: "16%", top: "0rem" },
    { letter: " ", left: "19%", top: "0rem" },
    { letter: "S", left: "22%", top: "0rem" },
    { letter: " ", left: "25%", top: "0rem" },
    { letter: "P", left: "39.5%", top: "0rem" },
    { letter: " ", left: "42%", top: "0rem" },
    { letter: "T", left: "43%", top: "0rem" },
    { letter: "O", left: "45.5%", top: "0rem" },
    { letter: "W", left: "49%", top: "0rem" },
    { letter: "A", left: "53%", top: "0rem" },
    { letter: "R", left: "56%", top: "0rem" },
    { letter: "D", left: "59%", top: "0rem" },
    { letter: "S", left: "62%", top: "0rem" },
    { letter: " ", left: "63%", top: "0rem" },
    { letter: "Y", left: "66%", top: "0rem" },
    { letter: "O", left: "69%", top: "0rem" },
    { letter: "U", left: "73%", top: "0rem" },
    { letter: "R", left: "76%", top: "0rem" },
    { letter: " ", left: "78%", top: "0rem" },
    { letter: "G", left: "81%", top: "0rem" },
    { letter: "O", left: "84.5%", top: "0rem" },
    { letter: "A", left: "88%", top: "0rem" },
    { letter: "L", left: "91%", top: "0rem" },
    
    // Line 2 - Tighter spacing for mobile
    { letter: "T", left: "23%", top: "1.5rem" },
    { letter: "E", left: "38%", top: "1.5rem" },
    
    // Line 3 - Tighter spacing for mobile
    { letter: "E", left: "24%", top: "3rem" },
    { letter: "T", left: "37%", top: "3rem" },
    
    // Line 4 - Tighter spacing for mobile
    { letter: "P", left: "25%", top: "4.5rem" },
    { letter: "I", left: "28%", top: "4.5rem" },
    { letter: "S", left: "29%", top: "4.5rem" },
    { letter: "A", left: "32%", top: "4.5rem" },
    { letter: "S", left: "36%", top: "4.5rem" },
  ];

  // Auto-carousel for tabs
  useEffect(() => {
    const tabs = ["TEAM PLAY", "GROWTH", "VATAVARAN"];
    const interval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Team Play Content Component
  const TeamPlayContent = () => (
    <div className="w-full h-[8rem] md:h-[14rem] flex justify-center px-6 md:px-12 ">
      <div className="w-full max-w-6xl">
        {/* First line: "YOU ARE A PART OF" */}
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            YOU ARE A PART OF
          </h2>
        </div>

        {/* Second line: "OUR SQUAD" and "And" */}
        <div className="w-full flex items-baseline mt-4">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
            OUR SQUAD
          </h3>
          <div className="flex-1 flex  justify-end md:justify-center">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
              AND
            </h3>
          </div>
        </div>

        {/* Third line: "WE," aligned right */}
        <div className="w-full flex justify-end mt-2 md:mt-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            WE,
          </h2>
        </div>

        {/* Fourth line: "A PART OF YOUR VISION" aligned right */}
        <div className="w-full flex justify-end mt-1">
          <h2 className="text-sm md:text-lg lg:text-2xl font-bold leading-tight">
            A PART OF YOUR VISION
          </h2>
        </div>
      </div>
    </div>
  );

  const GrowthContent = () => {
    // Choose pattern based on screen size
    const currentPattern = isMobile ? vPatternMobile : vPatternDesktop;

    return (
      <div className="relative w-full h-[8rem] md:h-[14rem] flex justify-center md:py-8 md:py-1 md:px-12">
        {/* Pattern Container */}
        <div className="hidden md:block relative w-full max-w-7xl overflow-hidden mx-auto">
          {currentPattern.map((item, index) => (
            <motion.span
              key={index}
              className="absolute text-lg md:text-4xl"
              style={{
                left: item.left,
                top: item.top,
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {item.letter}
            </motion.span>
          ))}
        </div>
        <div>
          <motion.img
            src={StepImg}
            alt="Step Image"
            className="absolute md:hidden top-0 left-0 w-full h-full object-contain p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    );
  };

  // Vatavaran Content Component
  const VatavaranContent = () => (
    <div className="relative h-[8rem] md:h-[14rem] flex flex-col items-center justify-center px-6 md:px-12">
      <motion.h1 
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        vibe check is a must
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl lg:text-2xl text-center mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        and it goes both ways
      </motion.p>
    </div>
  );

  // Animation variants for carousel
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const tabs = ["TEAM PLAY", "GROWTH", "VATAVARAN"];
  const currentIndex = tabs.indexOf(activeTab);

  const paginate = (newDirection) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < tabs.length) {
      setActiveTab(tabs[newIndex]);
    }
  };

  return (
    <div className="w-full text-yellow-400 font-sans">
      {/* Header */}
      <div className="w-full text-center py-2 bg-pink-600 text-white text-sm md:text-xl font-normal rounded-md mx-auto font-clash">
        WHAT TO EXPECT
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 my-3 flex-wrap">
        {["TEAM PLAY", "GROWTH", "VATAVARAN"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-1 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-yellow-400 text-white"
                : "border border-yellow-400 text-yellow-400 md:hover:bg-yellow-400 md:hover:text-black"
            }`}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={!isMobile ? { scale: 0.95 } : {}}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Content Area with Carousel */}
      <div className="relative bg-pink-600 rounded-xl py-8 md:py-10 mx-auto text-yellow-400 font-bold overflow-hidden">
        <div className="relative h-[8rem] md:h-[14rem]">
          <AnimatePresence mode="wait" custom={1}>
            {/* Team Play Content */}
            {activeTab === "TEAM PLAY" && (
              <motion.div
                key="team-play"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag={!isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={!isMobile ? (e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                } : undefined}
                className="absolute inset-0"
              >
                <TeamPlayContent />
              </motion.div>
            )}

            {/* Growth Content */}
            {activeTab === "GROWTH" && (
              <motion.div
                key="growth"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag={!isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={!isMobile ? (e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                } : undefined}
                className="absolute inset-0"
              >
                <GrowthContent />
              </motion.div>
            )}

            {/* Vatavaran Content */}
            {activeTab === "VATAVARAN" && (
              <motion.div
                key="vatavaran"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag={!isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={!isMobile ? (e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                } : undefined}
                className="absolute inset-0"
              >
                <VatavaranContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;