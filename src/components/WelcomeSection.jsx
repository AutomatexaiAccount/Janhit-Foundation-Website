"use client";

import styles from "./WelcomeSection.module.css";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>Since 1998</span>
          <h2 className={styles.title}>Building Sustainable Communities</h2>
        </motion.div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={styles.heroDescription}>
              Protecting water. Promoting sustainable agriculture. Empowering women. Protecting children. Creating resilient communities across Western Uttar Pradesh.
            </p>
            <div className={styles.heroActions}>
              <a href="#impact" className={styles.primaryBtn}>Explore Our Work</a>
              <a href="#partner" className={styles.secondaryBtn}>Partner With Us</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
