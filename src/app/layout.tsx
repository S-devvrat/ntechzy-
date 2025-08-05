import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import { Orbitron } from "next/font/google";
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
        className={`${orbitron.variable} font-sans antialiased  text-white overflow-x-hidden`}
      >
        <div className="overflow-hidden">
          <Navbar />
        </div>
          <main>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}
