"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

function Websites() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Apex Institute of Medical Sciences",
    link: "https://apexims.in/index.html",
    thumbnail: "/webimg/apex.png",
  },
  {
    title: "Dr. Shakuntala Yadav - Indira IVF",
    link: "https://www.indiraivf.com/fertility-doctors/dr-shakuntala-yadav",
    thumbnail: "/webimg/indra.png",
  },
  {
    title: "Mangalayatan University",
    link: "https://www.mangalayatan.in/",
    thumbnail: "/webimg/mangal.png",
  },
  {
    title: "Arnav Ayurvedic Medical College",
    link: "https://www.arnavayurvedicmedicalcollege.com/",
    thumbnail: "/webimg/arnav.png",
  },
  {
    title: "Naiminath Ayurveda",
    link: "https://naiminathayurveda.org/i",
    thumbnail: "/webimg/naimnath.png",
  },
  {
    title: "Sapna Healthcare",
    link: "https://www.sapnahealthcare.in/",
    thumbnail: "/webimg/sapna.png",
  },
  {
    title: "Dr. Shakuntala Ayush",
    link: "https://drshakuntalaayush.in/",
    thumbnail: "/webimg/shakuntla.png",
  },
  {
    title: "Vimla Group",
    link: "https://vimlagroup.com/index.php",
    thumbnail: "/webimg/vimla.png",
  },
  {
    title: "Mangalayatan (Duplicate)",
    link: "https://www.mangalayatan.in/",
    thumbnail: "/webimg/mangal.png",
  },
  {
    title: "Arnav Ayurvedic (Duplicate)",
    link: "https://www.arnavayurvedicmedicalcollege.com/",
    thumbnail: "/webimg/arnav.png",
  },
  {
    title: "Apex (Duplicate)",
    link: "https://apexims.in/index.html",
    thumbnail: "/webimg/apex.png",
  },
  {
    title: "Dr. Shakuntala Ayush (Duplicate)",
    link: "https://drshakuntalaayush.in/",
    thumbnail: "/webimg/shakuntla.png",
  },
  {
    title: "Indira IVF (Duplicate)",
    link: "https://www.indiraivf.com/fertility-doctors/dr-shakuntala-yadav",
    thumbnail: "/webimg/indra.png",
  },
  {
    title: "Naiminath Ayurveda (Duplicate)",
    link: "https://naiminathayurveda.org/i",
    thumbnail: "/webimg/naimnath.png",
  },
  {
    title: "Vimla Group (Duplicate)",
    link: "https://vimlagroup.com/index.php",
    thumbnail: "/webimg/vimla.png",
  },
];

export default Websites;