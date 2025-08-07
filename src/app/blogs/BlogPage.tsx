'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'The Growing Role of Digital Marketing in Political Campaigns in 2025',
    slug: 'digital-marketing-politics-2025',
    excerpt:
      'Explore how political campaigns are evolving in 2025 using digital tools like social media, SEO, and targeted advertising.',
    image: '/blogs/political.jpg',
    date: 'August 2, 2025',
  },
  {
    title: 'How to Attract New Patients to Your Clinic in 2025',
    slug: 'new-patients-clinic-2025',
    excerpt:
      'Discover modern digital strategies to grow your clinic by improving visibility, trust, and patient engagement online.',
    image: '/blogs/patients.jpg',
    date: 'August 2, 2025',
  },
  {
    title: 'Build a Professional Website in Uttar Pradesh with NTechzy',
    slug: 'professional-website-uttar-pradesh',
    excerpt:
      'Looking to grow your business online in Uttar Pradesh? Discover why a professional website built by NTechzy is your best investment.',
    image: '/blogs/webdev.jpg',
    date: 'August 2, 2025',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh]">
        <Image
          src="/blogs/political.jpg"
          alt="Our Blogs"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.5]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-white to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
            Our Blogs
          </h1>
        </div>
      </div>

      {/* Blog List */}
      <div className="px-6 md:px-24 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-xl border border-[#1f1f1f] hover:shadow-[0_0_20px_#8a63d2] transition duration-300 group"
            >
              <div className="relative w-full h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <p className="text-xs text-[#bfbfbf] uppercase tracking-wide">
                  {blog.date}
                </p>
                <h2 className="text-xl font-semibold leading-snug group-hover:text-[#8a63d2] transition duration-300">
                  {blog.title}
                </h2>
                <p className="text-sm text-[#cfcfcf] leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-[#8a63d2] font-semibold hover:underline text-sm"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
