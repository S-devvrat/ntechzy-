"use client";
import React, { useEffect, useState, useRef } from "react";

interface Stat {
  number: string;
  title: string;
  description: string;
}

const stats: Stat[] = [
  {
    number: "16+",
    title: "Years of Experience",
    description:
      "We bring a wealth of experience honed through years of hands-on involvement, continuous learning, and adaptation to evolving trends and challenges",
  },
  {
    number: "12K",
    title: "Projects Completed",
    description:
      "From bustling metropolitan cities to remote rural communities, our commitment to excellence and innovation has driven us to deliver exceptional results",
  },
  {
    number: "287+",
    title: "Awards Achieved",
    description:
      "These accolades stand as a testament to our unwavering commitment to excellence, innovation",
  },
  {
    number: "65%",
    title: "Returned Clients",
    description:
      "This statistic speaks volumes about the trust and satisfaction our clients have in our services",
  },
];

// Number parsing & formatting helpers (same as before)
function parseNumber(numStr: string): number {
  const clean = numStr.replace(/[+, %]/g, "").toUpperCase();
  if (clean.endsWith("K")) {
    return parseFloat(clean) * 1000;
  }
  return parseFloat(clean);
}

function formatNumber(value: number, original: string): string {
  if (original.includes("K")) {
    if (value >= 1000) {
      return (value / 1000).toFixed(0) + "K";
    }
    return value.toString();
  }
  if (original.includes("+")) {
    return Math.floor(value) + "+";
  }
  if (original.includes("%")) {
    return Math.floor(value) + "%";
  }
  return Math.floor(value).toString();
}

interface CountUpNumberProps {
  target: string;
  duration?: number;
  play: boolean;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ target, duration = 2000, play }) => {
  const [count, setCount] = useState(0);
  const targetNum = parseNumber(target);

  useEffect(() => {
    if (!play) {
      setCount(0);
      return;
    }

    let start = 0;
    const increment = targetNum / (duration / 30);
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [targetNum, duration, play]);

  return <>{formatNumber(count, target)}</>;
};

const OurNumbers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" py-0 px-8 md:px-0 text-white"
      aria-label="Statistics Section"
    >
      {/* Heading */}
      <h2 className="max-w-4xl mx-auto text-center font-extrabold text-white text-5xl md:text-6xl leading-tight tracking-wider relative">
        <span>Our Numbers</span>
        <br />
        <span>Speak for </span>
        <span>Themselves</span>
        <span
          aria-hidden="true"
          className="block h-1 w-32 bg-[#8a63d2] mx-auto mt-4 rounded-full shadow-[0_0_10px_#8a63d2]"
          style={{ filter: "drop-shadow(0 0 4px #8a63d2)" }}
        />
      </h2>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto mt-16 grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ number, title, description }, i) => (
          <div
            key={title}
            className=" p-8 rounded-xl shadow-xl cursor-default transform transition-transform duration-300 hover:-translate-y-2 opacity-0 scale-90 animate-fadeScale"
            style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
          >
            <p className="text-[#8a63d2] text-7xl font-extrabold select-none">
              <CountUpNumber target={number} play={playAnimation} />
            </p>
            <h3 className="text-white text-2xl font-semibold mt-4">{title}</h3>
            <p className="text-[#bfbfbf] text-base mt-2 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeScale {
          animation-name: fadeScale;
          animation-duration: 600ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default OurNumbers;
