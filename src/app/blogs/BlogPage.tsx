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
    image: '/picture.jpg',
    date: 'August 2, 2025',
  },
  {
    title: 'How to Attract New Patients to Your Clinic in 2025',
    slug: 'new-patients-clinic-2025',
    excerpt:
      'Discover modern digital strategies to grow your clinic by improving visibility, trust, and patient engagement online.',
    image: '/picture2.jpg',
    date: 'August 2, 2025',
  },
  {
  title: "Build a Professional Website in Uttar Pradesh with NTechzy",
  slug: "professional-website-uttar-pradesh",
  excerpt:
    "Looking to grow your business online in Uttar Pradesh? Discover why a professional website built by NTechzy is your best investment.",
  image: "/picture3.jpg", // Add this image to your public folder
  date: "August 2, 2025",
},
];

const BlogPage = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pb-20">
      {/* Hero */}
      <div className="relative w-full h-[55vh]">
        <Image
          src="/picture.jpg"
          alt="Our Blogs"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.3]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white z-10 text-center">
            Our <span className="text-[#8a63d2]">Blogs</span>
          </h1>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="px-6 md:px-24 mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_15px_#8a63d2] transition duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={600}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-sm text-[#bfbfbf]">{blog.date}</p>
              <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
              <p className="text-[#bfbfbf] text-sm">{blog.excerpt}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-flex items-center gap-2 text-[#8a63d2] font-semibold hover:underline mt-2"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
