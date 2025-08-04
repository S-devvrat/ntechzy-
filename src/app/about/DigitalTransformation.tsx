"use client";
import React from "react";
import { motion } from "framer-motion";

export function DigitalTransformation() {
  return (
    <div className="bg-[#0f0f0f] w-full px-4 py-24 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-4xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white to-[#8a63d2] text-transparent bg-clip-text"
      >
        A new generation <br /> of digital transformation
      </motion.h1>

      <motion.img
        src="/ntechzyteam.png" // replace with actual image path
        alt="Digital Transformation Visual"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
        className="mt-12 w-full max-w-4xl mx-auto rounded-2xl object-cover"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
        className="mt-16 max-w-4xl text-center"
      >
        <p className="text-lg md:text-xl text-[#bfbfbf] leading-relaxed md:leading-8 font-medium">
          At <span className="text-white font-semibold">Ntechzy</span>, we are on a mission to revolutionize education and digital innovation,
          offering solutions that empower individuals and businesses alike. Our journey began with a
          vision to bridge gaps, foster growth, and enable access to transformative opportunities.
          <br /><br />
          With a strong foothold in education, technology, and marketing, we aim to create impactful changes
          that resonate across industries. Our EdTech ventures focus on empowering students—particularly from
          middle-class backgrounds—by providing quality education and resources to turn their dreams into reality.
          <br /><br />
          Simultaneously, our digital marketing and tech services cater to businesses seeking innovative
          solutions in branding, social media, web development, and business growth.
          <br /><br />
          With a passion for innovation and excellence, <span className="text-white font-semibold">Ntechzy</span> is more than just a company—
          It&apos;s  a platform for transformation, empowering students, entrepreneurs, and professionals to
          achieve their goals and thrive in a competitive world.
        </p>
      </motion.div>
    </div>
  );
}
