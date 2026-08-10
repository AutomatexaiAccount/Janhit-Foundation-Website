"use client";

import styles from "./MissionVision.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        {/* Placeholder for the main mission/vision image */}
        <div className={styles.imageOverlay}></div>
        {/* We will add an actual Image tag later when we have a specific asset. For now, a solid background represents the image area. */}
        <div className={styles.taglineBox}>
          <h2>"Alone we can do so little, together we can do so much"</h2>
        </div>
      </div>

      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.cardsWrapper}>
          
          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To constantly work towards a society where sustainability in terms of water, environment, agricultural practices, child rights, non-discrimination of women would be ensured.
            </p>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To empower local communities to act to safeguard their environment and natural resources through community participation. We also strive to build a sustainable future where every child is ensured of their rights in India, and no one faces any discrimination at the hands of anyone else.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
