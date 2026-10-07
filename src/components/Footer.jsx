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
              <div style={{ background: 'white', display: 'inline-block', padding: '10px 15px', borderRadius: '8px', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src="/janhit-logo.jpeg" alt="Janhit Foundation Logo" className={styles.footerLogo} style={{ height: '50px', width: 'auto', display: 'block' }} />
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-color)', fontFamily: 'var(--font-nunito)', paddingTop: '5px' }}>Janhit Foundation</span>
                </div>
              </div>
              <p className={styles.brandTagline}>Alone we can do so little, together we can do so much</p>
            </div>
            <div className={styles.bankDetailsFooter}>
              <strong>Bank Details for Donation</strong><br/>
              Account Name: Janhit Foundation<br/>
              Ac No.: 26560100000823<br/>
              IFSC: BARB0SHAMEE<br/>
              Branch: Shastrinagar, Meerut
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/janhitfoundationmrt/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><span className={styles.socialIcon}>f</span></a>
              <a href="https://twitter.com/janhit_meerut" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <span className={styles.socialIcon}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </span>
              </a>
              <a href="https://www.instagram.com/janhitfoundationmrt/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span className={styles.socialIcon}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us/who-we-are">About Us</Link></li>
              <li><Link href="/janhit-gallery">Janhit Gallery</Link></li>
              <li><Link href="/partnerships">Partnerships & CSR</Link></li>
              <li><Link href="/projects">Our Projects</Link></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className={styles.footerCol}>
            <h3 className={styles.colTitle}>Our Programs</h3>
            <ul className={styles.linksList}>
              <li><Link href="/programs/water-conservation">Water Conservation</Link></li>
              <li><Link href="/programs/sustainable-agriculture">Sustainable Agriculture</Link></li>
              <li><Link href="/programs/wash">WASH Program</Link></li>
              <li><Link href="/programs/community-development">Community Development</Link></li>
              <li><Link href="/programs/child-rights">Child Rights</Link></li>
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
                <span>Plot no. 21, Pervesh vihar,<br/>behind yoga aasram, Meerut- 250004</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </span>
                <span>0121-4302021</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21 4H3C1.346 4 0 5.346 0 7v10c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3zm-.332 2L12 12.33 3.332 6h17.336zM2 17V7.632l8.805 6.457c.358.263.766.39 1.195.39.429 0 .837-.127 1.195-.39L22 7.632V17c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1z"/></svg>
                </span>
                <span><a href="mailto:janhitfoundation@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>janhitfoundation@gmail.com</a></span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>Copyright &copy; 2026 Janhit Foundation All Rights Reserved.</p>
          <p className={styles.designerCredit}>Designed and Maintained by Digify Soft Solution</p>
        </div>
      </div>

      <button onClick={scrollToTop} className={styles.scrollToTop} aria-label="Scroll to top">
        <svg width="24" height="24" fill="var(--primary-color)" viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>
      </button>
    </footer>
  );
}
