"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

function Websites() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/wbimg/1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/wbimg/2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/wbimg/3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/wbimg/dhan.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/wbimg/career.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/wbimg/1.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/wbimg/2.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/wbimg/3.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/wbimg/dhan.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/wbimg/career.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/wbimg/3.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/wbimg/1.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/wbimg/dhan.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/wbimg/2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/wbimg/career.png",
  },
];
export default Websites;