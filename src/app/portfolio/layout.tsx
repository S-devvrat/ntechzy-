import React from "react";
import FloatingNavbar from "../components/shared/FloatingNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio",
  description: "Our Portfolio",
};


const navItems = [
  { label: "All", href: "/portfolio" },
  { label: "Website", href: "/portfolio/website" },

];

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans antialiased bg-[#0d0d0d] text-white overflow-x-hidden">
        <h1>Our Porjects</h1>
     <FloatingNavbar routes={navItems}/>
      <main className="pt-20 px-6">{children}</main>
    </div>
  );
}
