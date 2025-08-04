"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// Type definition for each route
interface Route {
  label: string;
  href: string;
}

// Props for the NewNavbar component
interface NewNavbarProps {
  routes: Route[];
}

const NewNavbar: React.FC<NewNavbarProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#0a0a0a] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {routes.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group font-semibold text-base tracking-wide transition duration-300 ${
                  isActive ? "underline underline-offset-8 decoration-white" : ""
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                    isActive
                      ? "w-full shadow-[0_0_6px_2px_white]"
                      : "w-0 group-hover:w-full group-hover:shadow-[0_0_6px_2px_white]"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] px-6 pb-6 space-y-4">
          {routes.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg transition ${
                  isActive
                    ? "text-white underline underline-offset-4 decoration-white"
                    : "text-white hover:underline underline-offset-4 decoration-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default NewNavbar;
