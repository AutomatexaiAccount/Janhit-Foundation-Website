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
      <motion.div 
        className={styles.backgroundGlow}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      ></motion.div>
      <div className={`container ${styles.container}`}>
        
        {/* Left Side: Interactive Banners */}
        <motion.div 
          className={styles.interactiveBanners}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.mainBanner}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={styles.badge}>Welcome to</span>
            <h3>Janhit Foundation</h3>
            <p>Founded in 1998 by Dr. Anil Rana, an educationist by profession but an environmentalist at heart to work for Environmental & Water Conservation in Western Uttar Pradesh.</p>
            <Link href="#" className="btn">Read More &rarr;</Link>
          </motion.div>
          
          <div className={styles.verticalTabsContainer}>
            {publications.map((pub, index) => (
              <motion.div 
                key={pub.id} 
                className={styles.tab}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10, backgroundColor: "var(--dark-bg)" }}
              >
                <div className={styles.tabContent}>
                  <span className={styles.tabTitle}>{pub.title}</span>
                  <span className={styles.tabDesc}>{pub.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Founder's Vision */}
        <motion.div 
          className={styles.founderCard}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          animate={{ y: [0, -10, 0] }}
          style={{ animationDuration: "6s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" }}
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
