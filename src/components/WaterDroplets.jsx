"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WaterDroplets() {
  const [droplets, setDroplets] = useState([]);

  useEffect(() => {
    // Generate 15 random droplets
    const newDroplets = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random left position percentage
      size: Math.random() * 20 + 10, // random size between 10 and 30px
      delay: Math.random() * 5, // random animation delay
      duration: Math.random() * 5 + 5, // random duration between 5 and 10s
    }));
    setDroplets(newDroplets);
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {droplets.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            left: `${drop.left}%`,
            width: `${drop.size}px`,
            height: `${drop.size}px`,
            borderRadius: "50% 50% 50% 5% / 50% 50% 50% 50%", // Droplet shape
            transform: "rotate(45deg)",
            background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.1))",
            boxShadow: "inset 0 0 5px rgba(255,255,255,0.5)",
          }}
        />
      ))}
    </div>
  );
}
