"use client";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export function WeBringSkills() {
  const members = [
    {
      name: "Nikhil Sachan",
      title: "Founder & CEO",
      image: "/Team/NikhilSachan.jpg",
      twitter: "https://twitter.com/nikhil_handle",
      linkedin: "https://linkedin.com/in/nikhil_handle",
    },
    {
      name: "Shivam Dwivedi",
      title: "CTO",
      image: "/Team/shivamdewivedi.jpg",
      twitter: "https://twitter.com/aarav_handle",
      linkedin: "https://linkedin.com/in/aarav_handle",
    },
    {
      name: "Sneha Awasthi",
      title: "Marketing Head",
      image: "/Team/SnehaAwasthi.jpg",
      twitter: "https://twitter.com/riya_handle",
      linkedin: "https://linkedin.com/in/riya_handle",
    },
    {
      name: "Shivam Singh",
      title: "Lead Designer",
      image: "/Team/shivamsingh.jpg",
      twitter: "https://twitter.com/dev_handle",
      linkedin: "https://linkedin.com/in/dev_handle",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] w-full px-6 py-24 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-[#8a63d2] mb-20 leading-tight">
        We bring a wealth of skills<br />from a wide range of backgrounds
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-[#141414] border border-[#262626] rounded-2xl p-8 flex w-full flex-col items-center transition hover:border-[#8a63d2] hover:shadow-[0_0_20px_#8a63d280]"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-[#8a63d2] mb-4"
            />
            <h3 className="text-xl font-semibold text-white whitespace-nowrap">
              {member.name}
            </h3>
            <p className="text-[#bfbfbf] text-sm mb-6">{member.title}</p>
            <div className="flex gap-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
