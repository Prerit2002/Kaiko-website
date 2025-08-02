import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// type SplashScreenProps = {
//   imageSrc: string;
//   duration?: number; // seconds
// };

export default function SplashScreen({ imageSrc, duration = 2 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const to = setTimeout(() => setVisible(false), duration * 1000);
    return () => clearTimeout(to);
  }, [duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.img
            src={imageSrc}
            alt="Loading"
            className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
