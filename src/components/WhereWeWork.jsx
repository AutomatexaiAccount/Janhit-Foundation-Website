"use client";

import { motion } from "framer-motion";
import styles from "./WhereWeWork.module.css";

const districts = [
  { name: "Meerut", type: "Core Programme Hub" },
  { name: "Ghaziabad", type: "NCR Region" },
  { name: "Noida", type: "NCR Region" },
  { name: "Muzaffarnagar", type: "Western UP" },
  { name: "Shamli", type: "Western UP" },
  { name: "Panipat", type: "Haryana" },
  { name: "Sonipat", type: "Haryana" }
];

export default function WhereWeWork() {
  return (
    <section className={styles.section} id="where-we-work">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Geographical Footprint</span>
          <h2 className={styles.title}>Where We Work</h2>
          <p className={styles.description}>
            Our interventions are concentrated in regions facing severe environmental degradation and water stress across Western UP, Haryana, and the NCR.
          </p>
        </motion.div>
        
        <div className={styles.mapContainer}>
          <div className={styles.districtsGrid}>
            {districts.map((district, index) => (
              <motion.div 
                key={index}
                className={styles.districtCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className={styles.districtName}>{district.name}</h3>
                  <span className={styles.districtType}>{district.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
