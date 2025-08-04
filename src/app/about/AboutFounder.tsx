"use client";

import React from "react";
import Image from "next/image";
import { cn } from "../lib/utils";
import { Spotlight } from "../components/ui/spotlight";

export function AboutFounder() {
  return (
    <div className="relative flex w-full overflow-hidden rounded-md bg-[#0f0f0f] antialiased md:items-center md:justify-center py-28 px-4">
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none z-0",
          "[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight SVG */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 opacity-100 overflow-hidden"
        fill="#8a63d2"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          <span className="bg-gradient-to-r from-white to-[#8a63d2] text-transparent bg-clip-text">
            About Our Founder & CEO
          </span>
        </h2>

        {/* Founder Image + Name */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full blur-lg bg-[#8a63d2] opacity-60 animate-pulse" />
            <Image
              src="/Team/NikhilSachan.jpg"
              alt="Mr. Nikhil Sachan"
              width={160}
              height={160}
              className="relative z-10 rounded-full border-4 border-[#8a63d2] shadow-2xl object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl font-semibold text-[#8a63d2] mt-4">
            Mr. Nikhil Sachan
          </p>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-[#bfbfbf] max-w-3xl mx-auto leading-relaxed mb-12">
          Mr. Nikhil Sachan, Founder and CEO of{" "}
          <span className="text-white font-medium">Ntechzy</span>, and Managing
          Director of{" "}
          <span className="text-white font-medium">Careerkick Services</span>,
          is a trailblazing entrepreneur with a vision to create a{" "}
          <span className="text-white font-semibold">₹1000 crore EdTech empire</span>{" "}
          dedicated to uplifting middle-class students across India.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-7 shadow-md hover:shadow-purple-600/40 hover:scale-[1.03] transition-all duration-300 hover:border-[#8a63d2]">
            <h3 className="text-2xl font-bold text-white mb-3">
              A Visionary Leader
            </h3>
            <p className="text-[#bfbfbf] text-sm leading-relaxed">
              As a dynamic entrepreneur, mentor, influencer, and career coach,
              Mr. Sachan established Careerkick Services in 2017 to guide 10+2
              students toward careers in engineering, medical, law, and
              management. Inspired by his sister’s journey, he’s devoted to
              leveling the playing field for rural and underprivileged youth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-7 shadow-md hover:shadow-purple-600/40 hover:scale-[1.03] transition-all duration-300 hover:border-[#8a63d2]">
            <h3 className="text-2xl font-bold text-white mb-3">
              A Multifaceted Innovator
            </h3>
            <p className="text-[#bfbfbf] text-sm leading-relaxed">
              At Ntechzy, Mr. Sachan drives digital marketing, branding,
              political campaigns, web dev, and internships for engineering
              students. His innovative strategies fuel growth for institutions
              and individuals alike.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-7 shadow-md hover:shadow-purple-600/40 hover:scale-[1.03] transition-all duration-300 hover:border-[#8a63d2]">
            <h3 className="text-2xl font-bold text-white mb-3">
              The Journey of Empowerment
            </h3>
            <p className="text-[#bfbfbf] text-sm leading-relaxed">
              Mr. Sachan’s journey reflects his commitment to inclusivity and
              transformation in education and tech. Through Ntechzy and
              Careerkick, he empowers students and professionals to reach new
              heights with confidence and purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
