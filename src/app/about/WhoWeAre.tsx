"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col overflow-hidden -mt-50 -mb-50 md:mt-0 md:mb-0">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <h2 className="text-3xl
             md:text-7xl font-extrabold text-white mb-0 :mb-10 py-10">
              Who <span className="text-[#8a63d2]">We Are</span>
            </h2>
          </div>
        }
      >
        <div className="min-h-screen overflow-visible max-w-6xl mx-auto rounded-[2rem] bg-[#0f0f0f] border border-[#3e2b77] p-10 md:p-20 shadow-[0_0_60px_#8a63d299] space-y-16 text-white">
          
          {/* Our Mission */}
          <section className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
            <p className="text-[#bfbfbf] text-lg leading-relaxed">
              At <span className="text-[#8a63d2] font-semibold">Ntechzy</span>, our mission is to reshape the landscape of education and digital innovation by offering forward-thinking solutions that uplift individuals and transform businesses. Our goal is to bridge knowledge gaps, create scalable opportunities, and fuel growth through purpose-driven technologies.
            </p>
            <p className="text-[#bfbfbf] text-lg leading-relaxed">
              We focus on empowering students—especially those from middle-class backgrounds—by providing them with affordable, high-quality education and digital access that turns potential into achievement. We&apos;re driven by a belief that technology and knowledge should be available to everyone, not just a few.
            </p>
            <p className="text-[#bfbfbf] text-lg leading-relaxed">
              Simultaneously, we serve entrepreneurs and businesses by offering comprehensive marketing, branding, and web-based solutions designed to scale and adapt to a fast-changing digital world.
            </p>
            <p className="text-[#8a63d2] text-xl font-semibold">
              This isn’t just a mission—it’s a movement. One that’s redefining success through impact, access, and transformation.
            </p>
          </section>

          {/* What We Do */}
          <section className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">What We Do</h3>
            <p className="text-[#bfbfbf] text-lg leading-relaxed">
              <span className="text-[#8a63d2] font-semibold">Ntechzy</span> delivers high-impact services at the intersection of education, digital growth, and technological advancement. Here’s how we’re building the future:
            </p>
            <ul className="list-disc list-inside text-[#bfbfbf] space-y-4 text-lg">
              <li>
                <span className="text-white font-semibold">🎓 EdTech Innovation:</span> 
                Empowering students with adaptive learning systems, practical skill development, and accessible academic resources.
              </li>
              <li>
                <span className="text-white font-semibold">🚀 Digital Marketing:</span> 
                Offering performance-driven campaigns, strategic brand positioning, and content solutions that cut through the noise.
              </li>
              <li>
                <span className="text-white font-semibold">💻 Web & Tech Solutions:</span> 
                Developing sleek, scalable, and user-focused websites and platforms for emerging and established businesses alike.
              </li>
            </ul>
            <p className="text-[#bfbfbf] text-lg leading-relaxed">
              Whether it&apos;s launching a student&apos;s future or accelerating a business&apos;s next big move—we build with intention, excellence, and integrity.
            </p>
            <p className="text-[#8a63d2] text-xl font-semibold">
              At Ntechzy, we&apos;re not just providing services. We&apos;re building futures—one project, one person, one solution at a time.
            </p>
          </section>
        </div>
      </ContainerScroll>
    </div>
  );
}
