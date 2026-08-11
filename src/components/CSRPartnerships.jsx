"use client";

import { motion } from "framer-motion";
import styles from "./CSRPartnerships.module.css";
import Link from "next/link";

export default function CSRPartnerships() {
  return (
    <section className={styles.section} id="csr-partnerships">
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.subtitle}>Collaborate With Us</span>
            <h2 className={styles.title}>Partner With Janhit</h2>
            <div className={styles.divider}></div>
            <p className={styles.description}>
              Looking for a credible grassroots implementation partner for your CSR or sustainability programme? We offer end-to-end partnership services.
            </p>
            
            <div className={styles.categories}>
              <span className={styles.categoryItem}>Programme Design</span>
              <span className={styles.dot}>•</span>
              <span className={styles.categoryItem}>Community Mobilisation</span>
              <span className={styles.dot}>•</span>
              <span className={styles.categoryItem}>Field Implementation</span>
              <span className={styles.dot}>•</span>
              <span className={styles.categoryItem}>Monitoring & Evaluation</span>
              <span className={styles.dot}>•</span>
              <span className={styles.categoryItem}>Impact Measurement</span>
              <span className={styles.dot}>•</span>
              <span className={styles.categoryItem}>Project Scale-up</span>
            </div>

            <Link href="#contact" className={styles.ctaBtn}>
              Start a Partnership
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageGrid}>
              <div className={styles.imgWrapper1}>
                <img src="/child-education.png" alt="Community Programmes" className={styles.img} />
              </div>
              <div className={styles.imgWrapper2}>
                <img src="/rainwater-harvesting.png" alt="CSR Partnerships" className={styles.img} />
              </div>
              <div className={styles.imgWrapper3}>
                <img src="/healthy-food.png" alt="Volunteer Engagement" className={styles.img} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
