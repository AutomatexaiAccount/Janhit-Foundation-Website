"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className={styles.title}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Ready to make an impact?
          </motion.h2>
          <p className={styles.description}>
            Join thousands of volunteers and donors making a real difference in the lives of rural communities. 
            Your support can provide clean water, education, and sustainable livelihoods.
          </p>
          <div className={styles.actions}>
            <Link href="#" className={styles.donateBtn}>Donate Now</Link>
            <Link href="#" className={styles.volunteerBtn}>Become a Volunteer</Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative floating elements */}
      <motion.div 
        className={`${styles.circle} ${styles.circle1}`}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className={`${styles.circle} ${styles.circle2}`}
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
}
