import React from "react";
import Image from "next/image";

const colleges = [
  { name: "LPU", logo: "/lpu.png" },
  { name: "Lloyd Institute of Engineering & Technology", logo: "/lloyd.png" },
  { name: "Bennett University", logo: "/bennet.png" },
  { name: "Mangalayatan University", logo: "/mangalayatan.png" },
  { name: "Major SD Singh Ayurvedic Medical College", logo: "/major.png" },
  { name: "MD Ayurvedic College", logo: "/md.png" },
  { name: "Bapu Ayurvedic Medical College", logo: "/bapu.png" },
];

const Colleges = () => {
  return (
    <section className="w-full">
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-6 w-max p-20">
          {[...colleges, ...colleges].map((college, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-36 bg-white rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-full flex items-center justify-center p-4">
                <Image
                  src={college.logo}
                  alt={college.name}
                  width={160}
                  height={120}
                  className="object-contain w-full h-full grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colleges;
