"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ImpactShowcase.module.css";

const publications = [
  { id: 1, title: "Publications", desc: "Study reports & IEC material" },
  { id: 2, title: "Gyan Ashram", desc: "Knowledge center" },
  { id: 3, title: "Organic Aaharam", desc: "Sustainable food" },
  { id: 4, title: "Give As You Earn", desc: "Payroll giving" },
];

export default function ImpactShowcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.backgroundGlow}></div>
      <div className={`container ${styles.container}`}>
        
        {/* Left Side: Interactive Banners */}
        <motion.div 
          className={styles.interactiveBanners}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.mainBanner}>
            <span className={styles.badge}>Welcome to</span>
            <h3>Janhit Foundation</h3>
            <p>Founded in 1998 by Dr. Anil Rana, an educationist by profession but an environmentalist at heart to work for Environmental & Water Conservation in Western Uttar Pradesh.</p>
            <Link href="#" className="btn">Read More &rarr;</Link>
          </div>
          
          <div className={styles.verticalTabsContainer}>
            {publications.map((pub) => (
              <div key={pub.id} className={styles.tab}>
                <div className={styles.tabContent}>
                  <span className={styles.tabTitle}>{pub.title}</span>
                  <span className={styles.tabDesc}>{pub.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Founder's Vision */}
        <motion.div 
          className={styles.founderCard}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className={styles.founderImageWrapper}>
            <Image 
              src="/founder-portrait.png" 
              alt="Dr. Anil Rana" 
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={styles.founderHeader}>
              <h4>Lt. Sh. Anil Rana</h4>
              <p>Founder Director</p>
            </div>
          </div>
          <div className={styles.founderQuote}>
            <p>&ldquo;To make the journey of life eventful I chose the intruded way and at...&rdquo;</p>
            <Link href="#" className={styles.readMore}>Continue reading</Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
