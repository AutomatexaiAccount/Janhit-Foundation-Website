"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            {/* We will replace this text with an actual logo image later if provided */}
            <h2>Janhit Foundation</h2>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.active}>Home</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Programmes</Link></li>
            <li><Link href="#">Achievements</Link></li>
            <li><Link href="#">Events</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Link href="#" className={styles.donateBtn}>
            <span>Donate Now</span>
            <svg 
              className={styles.heartIcon} 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
