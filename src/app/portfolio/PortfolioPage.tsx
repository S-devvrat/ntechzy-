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
    <div className="bg-[#0a0a0a] min-h-screen px-4 md:px-24 py-16 text-white">
      {/* Gradient Heading */}
      <h2 className="text-6xl md:text-7xl py-6 font-bold mb-10 text-center bg-gradient-to-r from-white to-[#8a63d2] text-transparent bg-clip-text">
        Our Projects
      </h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(6);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-[#3e2b77] text-[#8a63d2]"
                : "bg-transparent text-[#bfbfbf] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, visibleCount).map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl p-4 overflow-hidden border border-transparent transition-all duration-300 bg-[#1a1a1a] hover:shadow-2xl hover:scale-[1.03] hover:border-[#8a63d2] before:absolute before:inset-0 before:rounded-xl before:border before:border-[#8a63d2]/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              {project.image && (
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-44 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-[#d1b3ff] transition-colors duration-300">
                {project.title}
              </h3>
              <span className="inline-block text-xs px-3 py-1 mb-2 rounded-full bg-[#3e2b77] text-[#8a63d2] font-medium">
                {project.category}
              </span>
              <p className="text-[#bfbfbf] text-sm">{project.description}</p>
            </a>
          ))
        ) : (
          <p className="text-[#bfbfbf] text-center col-span-full">
            No projects found in this category.
          </p>
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#8a63d2] text-white rounded-md font-medium hover:bg-[#714cc1] transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
