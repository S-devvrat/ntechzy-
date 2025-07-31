'use client';
import React from 'react';
import Image from 'next/image'; // ✅ Import Next.js Image
import Marquee from 'react-fast-marquee';

const tools = [
  {
    name: 'Node.js',
    icon: '/Toolsimage/node-js.png',
    description: 'Scalable network runtime',
  },
  {
    name: 'React.js',
    icon: '/Toolsimage/react.avif',
    description: 'Frontend library for building UIs',
  },
  {
    name: 'Figma',
    icon: '/Toolsimage/figma.avif',
    description: 'Collaborative design tool',
  },
  {
    name: 'Shopify',
    icon: '/Toolsimage/shopify (1).avif',
    description: 'Ecommerce platform for stores',
  },
  {
    name: 'Next.js',
    icon: '/Toolsimage/next-js.avif',
    description: 'React framework for production',
  },
  {
    name: 'Vercel',
    icon: '/Toolsimage/vercel.avif',
    description: 'Frontend cloud platform',
  },
  {
    name: 'Tailwind CSS',
    icon: '/Toolsimage/tailwind.avif',
    description: 'Utility-first CSS framework',
  },
  {
    name: 'Firebase',
    icon: '/Toolsimage/firebase.avif',
    description: 'App development platform',
  },
  {
    name: 'Express.js',
    icon: '/Toolsimage/express-js.avif',
    description: 'Web framework for Node.js',
  },
  {
    name: 'TypeScript',
    icon: '/Toolsimage/typescript.avif',
    description: 'Typed superset of JavaScript',
  },
];

const ToolMarquee = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 px-6 md:px-20 leading-tight text-center">
        Tools We Use <br /> to Create Your Products
      </h2>

      <Marquee speed={40} gradient={false} className="px-6">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="group relative w-[180px] min-w-[180px] h-[180px] rounded-xl bg-[#1a1a1a] mx-4 p-4 flex flex-col items-center justify-start transition-all duration-500 overflow-hidden"
          >
            <Image
              src={tool.icon}
              alt={tool.name}
              width={48}
              height={48}
              className="mb-3 object-contain"
            />
            <span className="text-lg font-semibold text-center">{tool.name}</span>
            <p className="opacity-0 group-hover:opacity-100 mt-2 text-sm text-center transition-opacity duration-500">
              {tool.description}
            </p>

            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-20 transition-all duration-500 ease-in-out bg-gradient-to-t from-[#5a189a] to-transparent pointer-events-none z-0" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ToolMarquee;
