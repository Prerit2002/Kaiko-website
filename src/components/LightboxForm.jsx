import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const LightboxForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // show after 5s
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5hcnbx4",   // 🔹 Replace with EmailJS Service ID
        "template_3kpjfxw",  // 🔹 Replace with EmailJS Template ID
        formData,
        "Ap-pfShcWecCiepLC"    // 🔹 Replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", number: "", message: "" });
          setIsOpen(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#000000]  text-white rounded-2xl shadow-xl w-full max-w-5xl p-8 md:p-12 relative"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left">
              WE WOULD LOVE TO HEAR FROM YOU
            </h2>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left side */}
              <div className="flex flex-col space-y-8">
                <div>
                  <label className="text-sm font-bold">NAME*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rahul, naam toh suna hoga..."
                    className="w-full bg-transparent border-b border-white/70 outline-none placeholder-white/60 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-bold">EMAIL*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@thekaikostudios.com"
                    className="w-full bg-transparent border-b border-white/70 outline-none placeholder-white/60 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-bold">NUMBER</label>
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="9039756905"
                    className="w-full bg-transparent border-b border-white/70 outline-none placeholder-white/60 py-2"
                  />
                </div>
              </div>

              {/* Right side (Message + Button) */}
              <div className="flex flex-col justify-between">
                <div>
                  <label className="text-sm font-bold py-2 mb-10">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Can you tell me how you can help my brand..."
                    className="w-full h-32 bg-transparent border border-white/70 rounded-md outline-none p-3 py-2 placeholder-white/60 mt-3"
                  />
                </div>
                <div className="flex justify-center md:justify-end mt-6">
                  <button
                    type="submit"
                    className="px-8 py-2 border border-yellow-400 md:border-white rounded-full  hover:bg-white hover:text-blue-600 transition"
                  >
                    Done
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LightboxForm;
