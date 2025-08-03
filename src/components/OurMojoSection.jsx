import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "DESIGN",
    items: [
      "Branding",
      "Brand kits & merch",
      "Website design",
      "Packaging",
      "Campaign Design",
    ],
  },
  {
    title: "MARKETING",
    items: ["Social Media", "Post, Stories, Reels", "Thumbnails and Covers"],
  },
  {
    title: "CONSULTING",
    items: ["Brand Auditing", "Website Auditing"],
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

export default function OurMojoSection() {
  return (
    <section className="w-full text-center text-white space-y-4" id="services">
      {/* MAIN HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#007AFF] py-6 rounded-xl"
      >
        <motion.h2
          variants={fadeUp(0)}
          className="text-4xl md:text-6xl font-extrabold text-[#FFE600]"
        >
          OUR MOJO
        </motion.h2>
      </motion.div>

      {/* SUBHEADING */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeUp(0.2)}
        viewport={{ once: true }}
        className="bg-[#007AFF] uppercase text-sm tracking-wide text-white/80 rounded-xl p-2 font-clash"
      >
        AKA OUR SERVICES
      </motion.p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp(0.3 + index * 0.1)}
            viewport={{ once: true }}
            className="bg-[#007AFF] p-6 rounded-xl flex flex-col justify-between"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <ul className="text-[#FFE600] text-left  pl-4 text-xl md:text-3xl">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h3 className="text-left text-3xl md:text-5xl font-medium text-white mt-10 md:mt-20 pt-4 pl-4">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* PINK CTA BAR */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#EF4293] text-[#FFE600] text-3xl md:text-6xl font-semibold py-2  px-6 rounded-xl"
      >
        <motion.span
          animate={{ opacity: [1, 0.85, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          AAGE AAGE DEKHO HOTA HAI KYA
        </motion.span>
      </motion.div>
    </section>
  );
}
