'use client'

import Image from 'next/image'

const features = [
  {
    title: 'Tailored IT Solutions',
    description: 'Customized services designed to meet your unique business needs.',
    image: '/pi1.1.png',
  },
  {
    title: 'Expert Team',
    description: 'Specialists in digital, web, and mobile development.',
    image: '/pi2.png',
  },
  {
    title: 'Latest Technology',
    description: 'Specialists in digital, web, and mobile development.',
    image: '/pi3.png',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#0a0a0a] py-16 px-4 md:px-10 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Why Choose Us</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black border border-[#3e2b77] rounded-2xl p-6 text-center hover:shadow-[0_0_15px_#8a63d2] hover:scale-105 transition-all duration-300"
          >
            <div className="w-full h-48 mb-6 relative px-6">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-[#bfbfbf] text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
