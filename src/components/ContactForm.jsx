import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_5hcnbx4",   // 🔹 Replace with EmailJS Service ID
        "template_3kpjfxw",  // 🔹 Replace with EmailJS Template ID
        formData,
        "Ap-pfShcWecCiepLC"    // 🔹 Replace with EmailJS Public Key
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          setFormData({ name: "", email: "", number: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <motion.div
      className="bg-blue-500 text-white p-8 pb-20 rounded-2xl shadow-lg w-full mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-5xl font-bold mb-10 text-center">
        WE WOULD LOVE TO HEAR FROM YOU
      </h2>

      <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="space-y-8">
          <div>
            <label className="block font-semibold">NAME*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Rahul, naam toh suna hoga..."
              required
              className="w-full bg-transparent border-b border-white placeholder-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold">EMAIL*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contact@thekaikostudios.com"
              required
              className="w-full bg-transparent border-b border-white placeholder-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold">NUMBER</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="9039756905"
              className="w-full bg-transparent border-b border-white placeholder-gray-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="block font-semibold">MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Can you tell me how you can help my brand...."
              rows="7"
              className="w-full bg-transparent border border-white rounded-lg p-2 placeholder-gray-200 focus:outline-none"
            />
          </div>

          {/* Number + Done Row */}
          <div className="flex justify-center md:justify-between md:items-end mt-4">
            <div className="hideen md:flex-1">
              {/* Empty placeholder to align with number field on left */}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
              className="text-yellow-400 font-semibold px-6 py-2 rounded-full  hover:bg-yellow-300 transition-all border border-yellow-400"
            >
              {isSending ? "Sending..." : isSent ? "Sent!" : "Done"}
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
