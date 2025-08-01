import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'DESIGN',
    items: [
      'Branding',
      'Brand kits & merch',
      'Website design',
      'Packaging',
      'Campaign Design',
    ],
  },
  {
    title: 'MARKETING',
    items: [
      'Social Media',
      'Post, Stories, Reels',
      'Thumbnails and Covers',
    ],
  },
  {
    title: 'CONSULTING',
    items: [
      'Brand Auditing',
      'Website Auditing',
    ],
  },
];

export default function OurMojoSection() {
  return (
    <section className="w-full text-center text-white space-y-4 my-2">
      {/* MAIN HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#007AFF] py-6 rounded-xl"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFE600]">
          OUR MOJO
        </h2>
      </motion.div>

      {/* SUBHEADING */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#007AFF] uppercase text-sm tracking-wide text-white/80"
      >
        AKA OUR SERVICES
      </motion.p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#007AFF] p-6 rounded-xl flex flex-col justify-between"
          >
            <ul className="text-[#FFE600] text-left text-sm list-disc pl-4">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-white text-center pt-4">
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
        className="bg-[#FF00C7] text-[#FFE600] text-xl font-extrabold py-4 px-6 rounded-xl"
      >
        AAGE AAGE DEKHO HOTA HAI KYA
      </motion.div>
    </section>
  );
}
