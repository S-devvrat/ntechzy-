'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer:
      'We have worked extensively with education, healthcare, and corporate brands, but our adaptable approach ensures success across any industry.',
  },
  {
    question: 'What platforms and technologies do you use?',
    answer:
      'Our team specializes in cutting-edge tools like React, PHP, WordPress, and frameworks for iOS and Android app development. We tailor our stack to your specific needs.',
  },
  {
    question: 'How do you measure marketing success?',
    answer:
      'We focus on key metrics like ROI, CPL, and conversion rates to ensure every campaign delivers measurable results that align with your business goals.',
  },
  {
    question: 'Do you provide end-to-end solutions?',
    answer:
      'Absolutely! From tech development to marketing execution, we offer 360-degree solutions to take your brand from ideation to execution.',
  },
  {
    question: 'How do you handle branding for diverse clients?',
    answer:
      'We believe in creating personalized branding strategies that resonate with your audience, whether it\'s a college, a hospital, or a fast-growing startup.',
  },
  {
    question: 'What makes NTechzy different from others?',
    answer:
      'Our blend of creativity, technology, and marketing expertise ensures that your project stands out in a competitive market.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          FAQs from Our Seasoned IT Professionals
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-white text-xl md:text-2xl font-medium hover:text-[#8a63d2] transition"
              >
                <span>{faq.question}</span>
                <span className="text-[#8a63d2] text-3xl leading-none">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[#bfbfbf] mt-4 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="h-px bg-[#3e2b77] mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
