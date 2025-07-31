"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Globe, ShieldCheck, Smartphone, Sliders, Megaphone } from "lucide-react";

const services = [
  {
    title: "IT Consultations",
    description: "Rely on our expert team to address operational challenges and deploy new applications seamlessly.",
    icon: <Sliders size={32} className="text-purple-400" />,
    aos: "fade-up-right",
  },
  {
    title: "Website Development",
    description: "Stunning, SEO-optimized websites built on React, WordPress, PHP, and custom frameworks.",
    icon: <Globe size={32} className="text-purple-400" />,
    aos: "fade-up",
  },
  {
    title: "Security",
    description: "Rely on our expert team to address operational challenges and deploy new applications seamlessly.",
    icon: <ShieldCheck size={32} className="text-purple-400" />,
    aos: "fade-up-left",
  },
  {
    title: "App Development",
    description: "End-to-end development for iOS, Android, and cross-platform apps.",
    icon: <Smartphone size={32} className="text-purple-400" />,
    aos: "fade-up-right",
  },
  {
    title: "Custom Solutions",
    description: "Backend Development, Cloud SaaS, Digital Marketing, SEO, Corporate Shoots.",
    icon: <Code2 size={32} className="text-purple-400" />,
    aos: "fade-up",
  },
  {
    title: "Marketing & Media Excellence",
    description: "Growth-driven marketing and creative media solutions to amplify your brand with impactful strategies.",
    icon: <Megaphone size={32} className="text-purple-400" />,
    aos: "fade-up-left",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-24 text-white overflow-hidden">
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <span className="bg-white bg-clip-text text-transparent">
            Unleash your potential
          </span>
        </h2>
        <p className="mt-4 text-[#bfbfbf] text-lg max-w-2xl mx-auto">
          with our tailored solutions for your every tech need
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos={service.aos}
            className="group p-6 rounded-2xl backdrop-blur bg-white/5 border border-white/10 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-purple-600/30"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-[#bfbfbf] text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
