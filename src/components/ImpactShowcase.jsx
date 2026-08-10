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
        
        {/* Left Side: Content Tabs */}
        <motion.div 
          className={styles.verticalTabsContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Right Side: Founders */}
        <motion.div 
          className={styles.foundersContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.founderCard}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.founderImageWrapper}>
              <Image 
                src="/mrs-rana.jpeg" 
                alt="Co-Founder" 
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.founderHeader}>
                <h4>Mrs. Rana</h4>
                <p>Co-Founder</p>
              </div>
            </div>
            <div className={styles.founderQuote}>
              <p>&ldquo;Together we can build a sustainable future and empower our communities...&rdquo;</p>

            </div>
          </motion.div>

          <motion.div 
            className={styles.founderCard}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.founderImageWrapper}>
              <Image 
                src="/mr-anil-rana.jpeg" 
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

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
