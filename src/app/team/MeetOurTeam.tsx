"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  badge: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nikhil Sachan",
    role: "CEO (Chief Executive Officer)",
    image: "/Team/NikhilSachan.jpg",
    badge: "Leadership",
    description: "Oversees company vision, growth, and overall strategy.",
  },
  {
    name: "Shivam Dwivedi",
    role: "Tech Support & IT Specialist",
    image: "/Team/shivamdewivedi.jpg",
    badge: "IT Expert",
    description: "Manages server, hosting, and security issues.",
  },
  {
    name: "Ms. Sneha Awasthi",
    role: "COO (Chief Operating Officer)",
    image: "/Team/SnehaAwasthi.jpg",
    badge: "Operations",
    description: "Ensures smooth internal operations and workflow efficiency.",
  },
  {
    name: "Mr. Krishna Gopal Dwivedi",
    role: "Managing Director",
    image: "/Team/krishnadewivedi.jpg",
    badge: "Management",
    description: "Drives strategic direction and company growth.",
  },
  {
    name: "Mr. Shivam Singh",
    role: "CTO (Chief Technical Officer)",
    image: "/Team/shivamsingh.jpg",
    badge: "Tech Lead",
    description: "Leads marketing strategies and client acquisition.",
  },
];

const MeetOurTeam: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-24 relative">
      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8a63d2]/20 to-[#8a63d2]/5 z-0" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-[#cbb5ff] to-[#8a63d2] text-transparent bg-clip-text mb-6">
          Meet Our Team
        </h2>
        <p className="text-[#bfbfbf] max-w-xl mx-auto text-lg">
          A new generation of digital transformation experts driving innovation
          and results.
        </p>
      </div>

      {/* Members */}
      <div className="space-y-24 relative z-10">
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16 relative`}
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Dot Marker */}
              <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8a63d2] rounded-full shadow-lg z-10" />

              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#8a63d2] hover:shadow-[0_0_20px_#8a63d2] transition duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-white max-w-xl space-y-2">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-[#bfbfbf]">{member.role}</p>
                <span className="inline-flex items-center justify-center mt-1 px-3 py-1 text-sm rounded-full bg-[#3e2b77] text-white">
                  <BadgeCheck className="w-4 h-4 mr-1 text-[#8a63d2]" />
                  {member.badge}
                </span>
                <p className="text-[#bfbfbf] mt-3 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MeetOurTeam;
