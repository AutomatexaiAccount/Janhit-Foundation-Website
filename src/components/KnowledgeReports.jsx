"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./KnowledgeReports.module.css";

const reports = [
  {
    title: "Annual Reports",
    items: ["2024 - 2025 (Upcoming)", "2023 - 2024", "2022 - 2023"],
    icon: "📊"
  },
  {
    title: "Programme Reports",
    items: ["Water & Agriculture", "Child Protection", "Women Empowerment"],
    icon: "📑"
  },
  {
    title: "Research & Studies",
    items: ["Water Census", "Soil Health", "Community Studies"],
    icon: "🔍"
  },
  {
    title: "Financials",
    items: ["Audited Statements", "FCRA", "80G / 12A"],
    icon: "📜"
  }
];

export default function KnowledgeReports() {
  return (
    <section className={styles.section} id="knowledge">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Evidence & Transparency</span>
          <h2 className={styles.title}>Knowledge & Reports</h2>
          <p className={styles.description}>Access our research, impact evidence, and statutory documents.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {reports.map((category, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <ul className={styles.list}>
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#" className={styles.link}>
                      {item}
                      <span className={styles.arrow}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
