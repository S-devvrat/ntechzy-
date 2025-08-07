"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "./types";
import { websiteProjects } from "./data/website";
import { marketingProjects } from "./data/marketing";
import { mediaProjects } from "./data/media";
import { customProjects } from "./data/custom";

const categories: string[] = [
  "All",
  "Website",
  "Marketing",
  "Media Services",
  "Custom Solutions",
];

const allProjects: Project[] = [
  ...websiteProjects,
  ...marketingProjects,
  ...mediaProjects,
  ...customProjects,
];

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredProjects: Project[] =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen px-6 md:px-28 py-24 text-white">
      {/* Gradient Heading */}
      <h2 className="text-center text-5xl md:text-7xl font-extrabold mb-20 bg-gradient-to-r from-white via-[#a179e9] to-[#8a63d2] bg-clip-text text-transparent">
        Our Projects
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(6);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium uppercase transition-all duration-300 border ${
              activeCategory === category
                ? "bg-[#8a63d2]/10 border-[#8a63d2] text-[#d1b3ff] shadow-md"
                : "bg-[#1c1c1c] text-[#bfbfbf] border-[#2d2d2d] hover:border-[#8a63d2] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, visibleCount).map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#2a2a2a] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(138,99,210,0.3)]"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#d1b3ff] transition-colors duration-300">
                  {project.title}
                </h3>

                <span className="inline-block text-xs px-3 py-1 mb-3 rounded-full bg-[#2f1c59] text-[#b28eff] font-medium shadow-inner">
                  {project.category}
                </span>

                <p className="text-[#bfbfbf] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Glass Hover Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </a>
          ))
        ) : (
          <p className="text-[#bfbfbf] text-center col-span-full">
            No projects found in this category.
          </p>
        )}
      </div>

      {/* Load More */}
      {visibleCount < filteredProjects.length && (
        <div className="mt-16 text-center">
          <button
            onClick={handleLoadMore}
            className="px-7 py-3 bg-gradient-to-r from-[#8a63d2] to-[#a179e9] text-white rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
