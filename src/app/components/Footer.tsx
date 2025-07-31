"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-12 pb-12 bg-transparent">
      <footer className="bg-gradient-to-b from-black via-purple-900 to-purple-800 text-white pt-16 pb-6">
        <div className="container mx-auto px-3 sm:px-10 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-3">

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm">info@ntechzy.in</p>
            <p className="text-sm">+91 888 909 8663</p>
            <p className="text-sm">GF-31, Ang Plaza, Ansal Golf, Near Pari Chowk, Greater Noida</p>
            <p className="text-sm">Working Hours: Mon - Sat: 9:00 - 06:00</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="text-purple-400 hover:underline transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:underline transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:underline transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>IT Consultations</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold max-w-[300px]">
              Sign up to get the latest news on our product.
            </h3>

            <form className="flex max-w-md bg-white rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-1 py-3 text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-purple-900 text-white font-semibold py-3 px-1"
              >
                Subscribe
              </button>
            </form>

            <div className="flex space-x-5 text-white text-lg">
              <a
                href="https://facebook.com/ntechzy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-purple-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com/company/ntechzy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purple-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/ntechzy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-purple-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-purple-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 select-none px-4 sm:px-12 max-w-7xl mx-auto">
          <p>Powered by Ntechzy Pvt Ltd</p>
          <p>
            Copyright{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              @2025
            </span>{" "}
            Ntechzy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
