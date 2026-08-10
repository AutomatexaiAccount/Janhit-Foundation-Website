"use client";

import { motion } from "framer-motion";
import styles from "./WhyJanhit.module.css";

const reasons = [
  { id: 1, title: "25+ Years Experience", description: "Over two decades of proven grassroots experience." },
  { id: 2, title: "Deep Understanding", description: "Deep understanding of Western UP communities and local nuances." },
  { id: 3, title: "Community-Led", description: "A highly effective community-led approach to solving problems." },
  { id: 4, title: "Multi-sector Expertise", description: "Experience across environment, agriculture, and social protection." },
  { id: 5, title: "Strong Partnerships", description: "Trusted by top institutional and corporate partners." },
  { id: 6, title: "Integrated Approach", description: "Combining environment, livelihoods, and rights for holistic impact." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyJanhit() {
  return (
    <section className={styles.section} id="why-janhit">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Our Differentiator</span>
          <h2 className={styles.title}>Why Janhit Foundation?</h2>
          <div className={styles.divider}></div>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason) => (
            <motion.div key={reason.id} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
