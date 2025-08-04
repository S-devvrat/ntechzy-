"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

const ContactNtech = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🚀 Message submitted!");
  };

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen py-28 px-6 overflow-hidden font-sans">
      {/* Animated Neon Orbs */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[#8a63d2] rounded-full opacity-20 blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#3e2b77] rounded-full opacity-20 blur-[150px] animate-pulse-slower" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT: Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Let’s Talk.
          </h1>
          <p className="text-[#bfbfbf] mb-8 text-lg max-w-md">
            Looking to collaborate? Got a futuristic idea? Let’s build it
            together.
          </p>

          <div className="text-sm space-y-6">
            <div>
              <p className="text-[#bfbfbf]">Email</p>
              <p className="font-medium text-lg">info@ntechzy.in</p>
            </div>
            <div>
              <p className="text-[#bfbfbf]">Call</p>
              <p className="font-medium text-lg">+91 8189098663</p>
            </div>
            <div>
              <p className="text-[#bfbfbf]">For Biz & Strategy</p>
              <p className="font-medium text-lg">Shivam Diwedi</p>
              <p className="text-[#ccc]">cto@ntechzy.in</p>
            </div>
          </div>

          <a
            href="#contact-form"
            className="inline-block mt-10 bg-[#8a63d2] px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#7a50c2] hover:scale-105 transition-all duration-300"
          >
            Let’s Start
          </a>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-[#131313]/60 border border-[#8a63d2]/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-3">Start a Project</h2>
          <p className="text-[#bfbfbf] mb-6 text-sm">
            Tell us more about what you need. We’re ready to create something
            groundbreaking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["name", "email", "phone", "website"].map((field) => (
                <input
                  key={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={form[field as keyof FormData]}
                  onChange={handleChange}
                  placeholder={
                    field === "name"
                      ? "Name *"
                      : field === "email"
                      ? "Email *"
                      : field === "phone"
                      ? "Phone number"
                      : "Website"
                  }
                  required={field === "name" || field === "email"}
                  className="bg-[#1a1a1a] border border-[#333] hover:border-[#8a63d2] text-white placeholder-[#777] px-4 py-3 rounded-lg w-full focus:border-[#8a63d2] focus:ring-2 focus:ring-[#8a63d2]/30 outline-none transition-all duration-300"
                />
              ))}
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={5}
              required
              className="bg-[#1a1a1a] border border-[#333] hover:border-[#8a63d2] text-white placeholder-[#777] px-4 py-3 rounded-lg w-full focus:border-[#8a63d2] focus:ring-2 focus:ring-[#8a63d2]/30 outline-none transition-all duration-300"
            ></textarea>

            <p className="text-xs text-[#888]">
              By submitting this form I accept the{" "}
              <span className="underline cursor-pointer hover:text-white">
                Privacy Policy
              </span>
              .
            </p>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-[#8a63d2] hover:bg-[#7a50c2] text-white font-semibold rounded-full shadow-lg hover:shadow-[#8a63d2]/40 hover:scale-[1.02] transition-all duration-300"
            >
              🚀 Send your request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactNtech;
