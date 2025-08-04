"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// Define the type for each route item
interface Route {
  label: string;
  href: string;
}

// Props for the FloatingNavbar component
interface FloatingNavbarProps {
  routes: Route[];
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div className="relative">
        {/* Navbar Container */}
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {routes.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-1.5 font-medium text-sm tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-white rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="text-white" size={20} />
              ) : (
                <Menu className="text-white" size={20} />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-3">
              {routes.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-white/10 text-white font-medium"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default FloatingNavbar;
