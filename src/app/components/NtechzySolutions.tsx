'use client';

import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Globe, Code2, Wrench, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'; // ✅ Import Next.js Image

const services = [
  {
    title: 'Web Design',
    icon: <Globe size={30} className="text-purple-400" />,
    brief: 'We craft visually engaging and user-friendly interfaces that blend modern design with intuitive functionality, ensuring a seamless experience across all devices.',
    features: [
      'Responsive layouts for all devices.',
      'Intuitive navigation and clear hierarchy.',
      'Brand-aligned visual systems.',
    ],
    img: '/web.avif',
  },
  {
    title: 'Development',
    icon: <Code2 size={30} className="text-purple-400" />,
    brief: 'We build robust, scalable applications using modern technologies to ensure performance, reliability, and future-ready solutions.',
    features: [
      'Clean, modular codebases.',
      'Automated testing & CI/CD.',
      'API-driven architecture.',
    ],
    img: '/development.avif',
  },
  {
    title: 'Maintenance',
    icon: <Wrench size={30} className="text-purple-400" />,
    brief: 'We ensure your product remains reliable, secure, and up-to-date over the long term with proactive maintenance and continuous improvements.',
    features: [
      '24/7 performance monitoring.',
      'Regular security patches.',
      'Proactive support & updates.',
    ],
    img: '/aintainance.avif',
  },
];

const NtechzySolutions = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100 });
  }, []);

  return (
    <section
      id="services-section"
      ref={ref}
      className="relative bg-[#0f0f0f] text-white py-24 px-6 md:px-24 overflow-hidden"
    >
      {/* Scroll Stroke */}
      <motion.div
        className="hidden md:block absolute left-6 top-0 h-full w-[3px] bg-purple-500 rounded-full z-10"
        style={{ height }}
      />

      {/* Main Heading */}
      <h2
        className="text-4xl md:text-6xl font-bold mb-20 leading-tight text-white space-y-1"
        data-aos="fade-up"
      >
        <div>Services We Provide</div>
        <div>For</div>
        <div className="text-purple-400">Your Business</div>
      </h2>

      {/* Services List */}
      <div className="space-y-32 relative z-20">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse md:flex' : ''
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Text Side */}
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <span className="text-purple-400 text-lg">#</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
                  {service.icon}
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400">{service.brief}</p>
              <ul className="space-y-3 text-lg text-gray-300">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-purple-400 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Side */}
            <div className="w-full max-w-md mx-auto relative aspect-[4/3]">
              <Image
                src={service.img}
                alt={service.title}
                fill          
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0} // prioritize first image
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NtechzySolutions;
