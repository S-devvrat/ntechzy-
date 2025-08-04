import Hero from "./components/HeroSection";
import Services from "./components/Services";
import Colleges from "./components/Marquee";
import AboutUs from "./components/AboutUs";
import NtechzySolutions from "./components/NtechzySolutions";
import ToolMarquee from "./components/ToolMarquee";
import OurNumbers from "./components/OurNumbers";
import WhyChooseUs from "./components/WhyChooseUs";
import FaqSection from "./components/FaqSection";
import BuildWithNteczhy from "./components/BuildWithNtechzy";
import Websites from "./components/Websites";
import { NewGeneration } from "./about/NewGeneration";
export default function Home() {
  return (
    <>
      <Hero />
      <BuildWithNteczhy />
      <Services />
      <Websites />
      <Colleges />
      <WhyChooseUs />
      <AboutUs />
      <NewGeneration/>
      <NtechzySolutions />
      <ToolMarquee />
      <OurNumbers />
      <FaqSection />
    </>
  );
}
