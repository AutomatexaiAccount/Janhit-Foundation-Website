"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Optional decorative top border */}
      <div className={styles.footerTopWave}></div>
      
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.grid}>
          
          {/* Brand & About */}
          <div className={styles.footerCol}>
            <h2 className={styles.brandName}>Janhit Foundation</h2>
            <p className={styles.aboutText}>
              Dedicated to environmental and water conservation in Western Uttar Pradesh since 1998. Working towards a sustainable future for all.
            </p>
            <div className={styles.socialLinks}>
              <Link href="#" aria-label="Facebook"><span className={styles.socialIcon}>F</span></Link>
              <Link href="#" aria-label="Twitter"><span className={styles.socialIcon}>X</span></Link>
              <Link href="#" aria-label="Instagram"><span className={styles.socialIcon}>I</span></Link>
              <Link href="#" aria-label="LinkedIn"><span className={styles.socialIcon}>L</span></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Our Programmes</Link></li>
              <li><Link href="#">Achievements</Link></li>
              <li><Link href="#">News & Events</Link></li>
            </ul>
          </div>

          {/* What We Do */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>What We Do</h3>
            <ul className={styles.linksList}>
              <li><Link href="#">Water Conservation</Link></li>
              <li><Link href="#">Child Rights Protection</Link></li>
              <li><Link href="#">Sustainable Agriculture</Link></li>
              <li><Link href="#">Women Empowerment</Link></li>
              <li><Link href="#">Organic Aaharam</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <ul className={styles.contactInfo}>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span>Meerut, Uttar Pradesh, India</span>
              </li>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <span>+91 12345 67890</span>
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                <span>info@janhitfoundation.in</span>
              </li>
            </ul>
            <Link href="#" className={styles.donateBtnOutline}>Donate Now</Link>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {currentYear} Janhit Foundation. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
