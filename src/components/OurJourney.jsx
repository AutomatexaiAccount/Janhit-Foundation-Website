"use client";

import { motion } from "framer-motion";
import styles from "./OurJourney.module.css";

const journeyList = [
  {
    year: "1998",
    title: "Foundation Established",
    description: "Janhit Foundation was established by Dr. Anil Rana to work for environmental & water conservation.",
  },
  {
    year: "2008",
    title: "A New Chapter",
    description: "Anita Rana takes forward the organization's mission after the untimely demise of the founder.",
  },
  {
    year: "2012",
    title: "UNDP Recognition",
    description: "Recognized by the UNDP for leadership in community initiatives for a green economy.",
  },
  {
    year: "2019",
    title: "Railway Child Help Desk",
    description: "Awarded to run the Railway Child Help Desk in Meerut, further expanding our child rights protection initiatives.",
  },
  {
    year: "Today",
    title: "Multi-theme Programmes",
    description: "Operating multi-theme programmes across Western UP, Haryana, and NCR, impacting thousands of lives.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurJourney() {
  return (
    <section className={styles.section} id="journey">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>History & Impact</span>
          <h2 className={styles.title}>Our Journey</h2>
          <div className={styles.divider}></div>
        </motion.div>
        
        <motion.div 
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {journeyList.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              variants={itemVariants}
            >
              <div className={styles.yearBadge}>{item.year}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
