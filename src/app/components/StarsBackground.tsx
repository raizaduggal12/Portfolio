"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const totalStars = 250; // number of stars
    const colors = ["#ffffff", "#ffd700", "#ff69b4", "#00ffff", "#add8e6"]; // white, gold, pink, cyan, light blue
    const starArray = [];

    for (let i = 0; i < totalStars; i++) {
      const size = Math.random() * 1.5 + 0.5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.6 + 0.4;
      const color = colors[Math.floor(Math.random() * colors.length)];

      starArray.push(
        <div
          key={i}
          className="absolute rounded-full animate-glow"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            backgroundColor: color,
            opacity,
            animationDelay: `${delay}s`,
            boxShadow: `0 0 6px 2px ${color}`,
          }}
        />
      );
    }

    setStars(starArray);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-black overflow-hidden">
      {stars}
    </div>
  );
}
