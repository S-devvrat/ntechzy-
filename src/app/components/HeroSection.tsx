'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BackgroundBeams } from './ui/background-beams'; // Adjust path if needed
import { TextGenerateEffect } from './ui/text-generate-effect';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex items-center justify-center px-6 md:px-24 mt-16 md:mt-6">
      {/* Background Beams */}
      <BackgroundBeams />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Right Glowing Card - shown below CTA on mobile, right side on desktop */}
        <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center">
          <div className="relative bg-gradient-to-br from-[#3e2b77] to-[#8a63d2] p-[1px] rounded-2xl w-full max-w-sm shadow-2xl">
            <div className="bg-[#0a0a0a] rounded-2xl px-8 py-10 h-full">
              <div className="flex items-center gap-3 mb-4 text-[#bfbfbf]">
                <Sparkles className="text-[#8a63d2]" />
                <span className="font-semibold text-white">Why Ntechzy?</span>
              </div>
              <p className="text-[#bfbfbf] text-base leading-relaxed">
                ✦ Stunning UI with motion-first design <br />
                ✦ Tech stack built for performance <br />
                ✦ Built for Web3, AI, and futuristic products <br />
                ✦ Clean code. Fast delivery. Premium experience.
              </p>
            </div>
          </div>
        </div>

        {/* Left Content */}
        <div className="order-1 md:order-2 w-full md:w-1/2 text-center md:text-left space-y-6">
          {/* Badge */}
          <div className="inline-block px-4 py-1 bg-[#3e2b77] text-sm font-semibold uppercase rounded-full tracking-wider">
            Welcome to Ntechzy
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            <TextGenerateEffect words={"Crafting Futuristic Web Experiences"} 
            className='text-6xl'/>
          </h1>

          {/* Subtext */}
          <p className="text-[#bfbfbf] text-lg md:text-xl">
            Ntechzy blends innovation and design to build seamless, futuristic digital platforms. Let’s create something amazing together.
          </p>

          {/* Call to Action */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#8a63d2] hover:bg-[#7b4bc6] text-white font-semibold px-6 py-3 rounded-xl transition duration-300 flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
