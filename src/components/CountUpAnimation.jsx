"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CountUpAnimation({ value, duration = 2 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
  // Extract number and suffix from string like "25+" or "2,000+"
  const numberMatch = value.match(/[\d,]+/);
  const numberStr = numberMatch ? numberMatch[0].replace(/,/g, '') : "0";
  const targetNumber = parseInt(numberStr, 10);
  
  const suffix = value.replace(/[\d,]+/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isNaN(targetNumber)) return value; // Fallback if no number is found
    
    // Format with commas
    const formatted = Math.round(latest).toLocaleString();
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (inView && !isNaN(targetNumber)) {
      animate(count, targetNumber, {
        duration: duration,
        ease: "easeOut"
      });
    }
  }, [inView, targetNumber, count, duration]);

  if (isNaN(targetNumber)) {
    return <span>{value}</span>;
  }

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
