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
          <Link href="#" className="btn">Donate Now</Link>
        </div>
      </div>
    </header>
  );
}
