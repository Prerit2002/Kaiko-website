import React from "react";
import { motion } from "framer-motion";

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, ease: "easeOut", duration: 0.5 },
  }),
  hover: { scale: 1.02 },
};

export default function CreativeApproachSection() {
  return (
    <section className="bg-[#FFE600] text-[#FF00C7] w-full rounded-xl overflow-hidden relative">
      <div className="flex flex-col md:flex-row">
        {/* Main Content */}
        <div className="flex-1 flex flex-col divide-y divide-[#FF00C7]/40 px-4 md:px-6 lg:px-10 py-6 space-y-6">
          {/* Row 1 */}
          <motion.div
            className="flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={rowVariants}
            whileHover="hover"
          >
            <div className="hidden md:flex items-center justify-center pr-4 w-12">
              <div className="rotate-[-90deg] origin-center text-black text-sm font-bold tracking-tight whitespace-nowrap">
                HUM KAUN?
              </div>
            </div>
            <div className="flex-1 text-2xl md:text-3xl lg:text-6xl font-medium leading-tight relative">
              WE <span className="font-bold">DESIGN</span> AND{" "}
              <span className="font-bold">LAUNCH</span>
              <br />
              THE CREATIVELY DIFFERENT
              <span className="absolute right-0 bottom-0 text-black text-base align-middle">
                by:
              </span>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex items-center pt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={rowVariants}
            whileHover="hover"
          >
            <div className="hidden md:flex items-center justify-center pr-4 w-12">
              <div className="rotate-[-90deg] origin-center text-black text-sm font-bold tracking-tight whitespace-nowrap">
                APPROACH
              </div>
            </div>
            <div className="flex-1 text-2xl md:text-3xl lg:text-6xl font-medium leading-tight relative">
              LEVERAGING EVERY BIT OF
              <br />
              DATA
              <span className="absolute right-0 bottom-0 text-black text-base align-middle">
                to:
              </span>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="flex items-center pt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            variants={rowVariants}
            whileHover="hover"
          >
            <div className="hidden md:flex items-center justify-center pr-4 w-12">
              <div className="rotate-[-90deg] origin-center text-black text-sm font-bold tracking-tight whitespace-nowrap">
                GOAL
              </div>
            </div>
            <div className="text-2xl md:text-3xl lg:text-6xl font-medium leading-tight">
              EXECUTE UNCONVENTION–
              <br />
              AL SOLUTIONS
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
