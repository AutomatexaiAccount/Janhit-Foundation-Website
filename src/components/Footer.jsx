"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { useEffect } from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.grid}>
          
          {/* Brand & About */}
          <div className={styles.footerCol}>
            <div className={styles.brandName}>
              <img src="https://www.janhitfoundation.in/wp-content/uploads/2026/06/janhit-logo.png" alt="Janhit Foundation" height="60" style={{ filter: 'brightness(0) invert(1)' }} />
              <p className={styles.brandTagline}>Alone we can do so little, together we can do so much</p>
            </div>
            <p className={styles.aboutText}>
              Our Secure Online Donation Platform<br/>
              Allows You To Make Contributions Quickly<br/>
              And Safely. Choose From Various.
            </p>
            <div className={styles.socialLinks}>
              <Link href="#" aria-label="Facebook"><span className={styles.socialIcon}>f</span></Link>
              <Link href="#" aria-label="Twitter">
                <span className={styles.socialIcon}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </span>
              </Link>
              <Link href="#" aria-label="Instagram">
                <span className={styles.socialIcon}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </span>
              </Link>
              <Link href="#" aria-label="Vimeo">
                <span className={styles.socialIcon}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.119-4.105-1.68-6.158-.653-2.333-1.306-3.499-1.959-3.499-.28 0-1.026.467-2.24 1.4L.513 8.073c1.493-1.306 3.033-2.659 4.62-4.06 2.053-1.773 3.5-2.706 4.34-2.8 1.68-.186 2.66 1.027 2.94 3.64.28 2.613.56 4.34.84 5.18.56 1.96 1.167 2.94 1.82 2.94.56 0 1.353-.84 2.38-2.52 1.027-1.68 1.54-2.986 1.54-3.92 0-1.4-1.026-1.96-3.08-1.68 1.4-2.892 3.64-4.245 6.72-4.06 2.427.093 3.64 1.4 3.64 3.92v.35z"/></svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/">Home</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Our Services</h3>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Get In Touch</h3>
            <ul className={styles.contactInfo}>
              <li>
                <span className={styles.contactIcon}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                </span>
                <span>plot no. 21, pervesh vihar,<br/>behind yoga aasram, meerut-<br/>250004</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21 4H3C1.346 4 0 5.346 0 7v10c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3zm-.332 2L12 12.33 3.332 6h17.336zM2 17V7.632l8.805 6.457c.358.263.766.39 1.195.39.429 0 .837-.127 1.195-.39L22 7.632V17c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1z"/></svg>
                </span>
                <span>janhitfoundation@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>Copyright &copy; 2025 Janhit Foundation All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className={styles.scrollToTop} aria-label="Scroll to top">
        <svg width="24" height="24" fill="var(--primary-color)" viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>
      </button>
    </footer>
  );
}
