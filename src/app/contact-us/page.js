"use client";

import Header from "../../components/Header";
import styles from "./ContactUs.module.css";
import Head from "next/head";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Janhit Foundation</title>
      </Head>
      <main className={styles.main}>
        <Header />
        
        {/* Banner Section */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerContent}>
            <div className={styles.subtitle}>Contact Us</div>
            <h1 className={styles.title}>We'd Love to Hear from You</h1>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className={styles.contactInfoSection}>
          <div className={styles.sectionHeader}>
            <h2>Get In Touch</h2>
            <p>Reach out to us for any queries, collaborations, or support.</p>
          </div>

          <div className={styles.contactGrid}>
            
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
              </div>
              <h3>Location</h3>
              <p>Plot no. 21, Pervesh vihar,</p>
              <p>behind yoga aasram,</p>
              <p>Meerut - 250004</p>
            </div>

            {/* Phone */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.42v3.536a2 2 0 0 1-2.15 1.996 19.467 19.467 0 0 1-8.527-2.613 19.141 19.141 0 0 1-5.71-5.71 19.467 19.467 0 0 1-2.614-8.528A2 2 0 0 1 4.045 3h3.536a2 2 0 0 1 1.964 1.624c.148.883.385 1.745.707 2.564a2 2 0 0 1-.453 2.11L7.536 11.56a15.05 15.05 0 0 0 4.9 4.9l2.262-2.263a2 2 0 0 1 2.11-.453c.82.322 1.681.56 2.565.707A2 2 0 0 1 21 16.42z"/></svg>
              </div>
              <h3>Phone</h3>
              <a href="tel:0121-4302021">0121-4302021</a>
            </div>

            {/* Email */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <h3>Email</h3>
              <a href="mailto:janhitfoundation@gmail.com">janhitfoundation@gmail.com</a>
            </div>

            {/* Socials */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <h3>Socials</h3>
              <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/janhitfoundationmrt/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">f</a>
                <a href="https://twitter.com/janhit_meerut" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://www.instagram.com/janhitfoundationmrt/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Bank Details */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M11.5 1L2 6v2h19V6l-9.5-5zM4 10v7h3v-7H4zm6 0v7h3v-7h-3zm6 0v7h3v-7h-3zM2 19v2h19v-2H2z"/></svg>
              </div>
              <h3>Donate via Bank</h3>
              <p><strong>A/c Name:</strong> Janhit Foundation</p>
              <p><strong>A/c No.:</strong> 26560100000823</p>
              <p><strong>IFSC:</strong> BARB0SHAMEE</p>
              <p><strong>Branch:</strong> Shastrinagar</p>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
