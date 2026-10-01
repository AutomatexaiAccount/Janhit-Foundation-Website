"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <div className={styles.topbarContact}>
            <a href="mailto:info@janhitfoundation.in">
              <span>📧 info@janhitfoundation.in</span>
            </a>
            <a href="tel:0121-4302021">
              <span>📞 0121- 4302021</span>
            </a>
          </div>
          <div className={styles.topbarMessage}>
            <p>🤝 Are you ready to help them? Lets become a volunteer!</p>
          </div>
          <div className={styles.topbarSocial}>
            {/* Social links can be added here */}
          </div>
        </div>
      </div>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="https://www.janhitfoundation.in/wp-content/uploads/2026/06/janhit-logo.png" alt="Janhit Foundation" height="50" />
            </Link>
          </div>
          {/* Mobile Overlay */}
          {isMobileMenuOpen && (
            <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)}></div>
          )}
          
          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
            <div className={styles.mobileNavHeader}>
              <img src="https://www.janhitfoundation.in/wp-content/uploads/2026/06/janhit-logo.png" alt="Janhit Foundation" height="40" />
              <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>×</button>
            </div>
            
            <div className={styles.mobileHelpline}>
              <span className={styles.statusDot}></span> 24/7 Helpline: <strong>+91 4302021</strong>
            </div>

            <ul className={styles.navLinks}>
              <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home <span>›</span></Link></li>
              
              <li className={`${styles.hasDropdown} ${openSubmenu === 'about' ? styles.activeSubmenu : ''}`}>
                <div className={styles.menuItemHeader} onClick={() => toggleSubmenu('about')}>
                  <span>About Us</span>
                  <span className={styles.arrow}>›</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</Link></li>
                  <li><Link href="/mission-vision" onClick={() => setIsMobileMenuOpen(false)}>Mission & Vision</Link></li>
                  <li><Link href="/our-team" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link></li>
                </ul>
              </li>
              
              <li className={`${styles.hasDropdown} ${openSubmenu === 'programs' ? styles.activeSubmenu : ''}`}>
                <div className={styles.menuItemHeader} onClick={() => toggleSubmenu('programs')}>
                  <span>Programs</span>
                  <span className={styles.arrow}>›</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/programs/sustainable-agriculture" onClick={() => setIsMobileMenuOpen(false)}>Sustainable Agriculture</Link></li>
                  <li><Link href="/programs/women-rights" onClick={() => setIsMobileMenuOpen(false)}>Women Rights Protection</Link></li>
                  <li><Link href="/programs/water-conservation" onClick={() => setIsMobileMenuOpen(false)}>Water Conservation & Awareness</Link></li>
                  <li><Link href="/programs/child-rights" onClick={() => setIsMobileMenuOpen(false)}>Child Rights Protection</Link></li>
                </ul>
              </li>
              <li><Link href="/partners" onClick={() => setIsMobileMenuOpen(false)}>Partners <span>›</span></Link></li>
              <li><Link href="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>Get Involved <span>›</span></Link></li>
              <li><Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us <span>›</span></Link></li>
            </ul>
          </nav>
          <div className={styles.actions}>
             <div className={styles.callUs}>
                <span>Call Us Now</span>
                <a href="tel:0121-4302021"><strong>0121- 4302021</strong></a>
             </div>
          </div>
          <button className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ""}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </header>
    </>
  );
}
