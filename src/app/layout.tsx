import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import { Orbitron } from "next/font/google";
import Hero from "./components/HeroSection";
import Services from "./components/Services";
import Colleges from "./components/Marquee";
import AboutUs from "./components/AboutUs";
import NtechzySolutions from "./components/NtechzySolutions";
import ToolMarquee from "./components/ToolMarquee";
import OurNumbers from "./components/OurNumbers";
import HowWeWork from "./components/HowWeWork";
import WhyChooseUs from "./components/WhyChooseUs";
import FaqSection from "./components/FaqSection";
import BuildWithNteczhy from "./components/BuildWithNtechzy";
import Websites from "./components/Websites";
import Footer from "./components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Ntechzy",
  description: "Futuristic Developer Company Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-hide overflow-x-hidden">
      <body
        className={`${orbitron.variable} font-sans antialiased bg-[#0d0d0d] text-white overflow-x-hidden`}
      >
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          <BuildWithNteczhy/>
          <Services />
          <Websites/>
          <HowWeWork />
          <Colleges />
          <WhyChooseUs/>
          <AboutUs />
          <NtechzySolutions />
          <ToolMarquee />
          <OurNumbers />
          <FaqSection/>
          <Footer/>
        </div>
          <main>{children}</main>
      </body>
    </html>
  );
}
