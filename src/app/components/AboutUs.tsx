import React from "react";
import { ArrowRight } from "lucide-react";

const techs = [
  { name: "React", color: "bg-blue-500" },
  { name: "Python", color: "bg-green-500" },
  { name: "JavaScript", color: "bg-yellow-400 text-black" },
  { name: "Shopify", color: "bg-purple-500" },
  { name: "Node.js", color: "bg-emerald-500" },
  { name: "Tailwind", color: "bg-cyan-400 text-black" },
  { name: "Laravel", color: "bg-red-500" },
  { name: "Next.js", color: "bg-gray-800" },
];

const AboutUs = () => {
  return (
    <section className="relative bg-[#0e0e0e] text-white py-32 px-6 md:px-24 overflow-hidden">
      {/* Ludo Tiles Grid - shifted downward */}
      <div className="absolute inset-0 top-20 flex flex-wrap justify-center items-center gap-10 opacity-25 pointer-events-none">
        {techs.map((tech, i) => (
          <div
            key={i}
            className={`w-24 h-24 md:w-28 md:h-28 rounded-xl flex items-center justify-center text-lg font-bold ${tech.color}`}
          >
            {tech.name}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight px-7">
          <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text ">
            Boost your business
          </span>{" "}
          to high level
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          At Ntechzy, we craft bespoke tech solutions, deliver high-performing marketing strategies, and design creative campaigns that leave a lasting impact — empowering your brand to rise above the noise.
        </p>

        <a
          href="/portfolio"
          className="mt-8 inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-purple-600 text-black rounded-full hover:bg-purple-600 hover:text-white transition-colors shadow-lg"
        >
          See our workflow <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
