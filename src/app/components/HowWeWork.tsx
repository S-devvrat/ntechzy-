"use client";

import React from "react";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search size={48} className="text-[#8a63d2]" />,
    title: "Discover & Plan",
    description: "We understand your goals and craft a tailored strategy.",
    bgColor: "bg-[#1c1c1c]",
  },
  {
    icon: <PenTool size={48} className="text-[#8a63d2]" />,
    title: "Design & Develop",
    description:
      "Easily modify and personalize design elements to fit your brand’s identity.",
    bgColor: "bg-[#1c1c1c]",
  },
  {
    icon: <Rocket size={48} className="text-[#8a63d2]" />,
    title: "Launch & Support",
    description:
      "We launch seamlessly and provide ongoing support to ensure long-term success.",
    bgColor: "bg-[#1c1c1c]",
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen px-8 md:px-24 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-12 text-center pt-12 max-w-4xl">
        How We Work
      </h2>
      <p className="text-[#bfbfbf] text-center max-w-3xl mb-16 px-4">
        From idea to launch, we design and build websites that align with your
        goals and deliver real results.
      </p>

      <div className="flex w-full max-w-7xl gap-6 h-auto flex-col md:flex-row py-10">
        {steps.map(({ icon, title, description, bgColor }) => (
          <Card
            key={title}
            title={title}
            icon={icon}
            description={description}
            bgColor={bgColor}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  description,
  bgColor,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  bgColor: string;
}) => {
  return (
    <div
      className={`group relative overflow-hidden ${bgColor} border border-[#2f2f2f] rounded-lg p-6 flex-1 h-[40rem] shadow-md
        transition-transform duration-300 ease-in-out
        hover:scale-[1.05]
        hover:shadow-[0_0_20px_8px_rgba(138,99,210,0.8)]
      `}
    >
      <div className="relative z-10 flex flex-col justify-between h-full text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-[#bfbfbf]">{description}</p>
      </div>
    </div>
  );
};

export default HowWeWork;
