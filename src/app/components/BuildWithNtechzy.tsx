"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BuildWithNteczhy: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Inline keyframe styles */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.15;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.05);
            }
          }

          @keyframes ping-slow {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            75%, 100% {
              transform: scale(1.8);
              opacity: 0;
            }
          }

          .pulse-slow {
            animation: pulse-slow 7s ease-in-out infinite;
          }

          .ping-once {
            animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) 1;
          }
        `}
      </style>

      {/* Animated Purple Glow Background */}
      <div className="absolute -z-10 w-[50rem] h-[50rem] bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300 rounded-full blur-3xl opacity-20 pulse-slow" />

      {/* Glow Ring: restarts every time in view */}
      {isInView && (
        <motion.div
          key={Date.now()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-96 h-96 rounded-full border-2 border-purple-500/30 ping-once"
        />
      )}

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent z-10"
      >
        Build with Nteczhy
      </motion.h1>
    </section>
  );
};

export default BuildWithNteczhy;
