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
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/programmes">PROGRAMMES</Link></li>
            <li><Link href="/impact">IMPACT</Link></li>
            <li><Link href="/where-we-work">FOOTPRINT</Link></li>
            <li><Link href="/reports">REPORTS</Link></li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Link href="/partner-with-us" className={styles.partnerBtn}>
            <span>Partner With Us</span>
          </Link>
          <Link href="/donate" className={styles.donateBtn}>
            <span>Donate</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
