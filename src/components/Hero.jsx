"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/slider-1.jpg",
    subtitle: "Building Sustainable Communities",
    title: "Charity With Difference.",
    description: "Join our monthly giving program to provide consistent support to our initiatives. Regular contributions, no matter the size, help us plan and sustain long-term projects."
  },
  {
    image: "/slider-3.jpg",
    subtitle: "Education is Empowerment",
    title: "Empowering Next Generation.",
    description: "Education is the basic right of every child. We ensure that every underprivileged child gets access to quality education for a brighter future."
  },
  {
    image: "/slider-5.jpg",
    subtitle: "Protecting Our Environment",
    title: "Save Water, Save Life.",
    description: "Through community awareness and sustainable practices, we work towards water conservation and ensuring clean drinking water for everyone."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <img src={slide.image} alt="slider image" className={styles.sliderImage} />
        </div>
      ))}
      
      {/* Slider Controls */}
      <div className={styles.controls}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
