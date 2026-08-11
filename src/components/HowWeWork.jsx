"use client";

import { motion } from "framer-motion";
import styles from "./HowWeWork.module.css";

const steps = [
  { id: 1, title: "Understand", description: "Community needs assessment" },
  { id: 2, title: "Design", description: "Evidence-based programme design" },
  { id: 3, title: "Implement", description: "Community-led field execution" },
  { id: 4, title: "Measure", description: "Outputs → Outcomes → Impact" },
  { id: 5, title: "Sustain", description: "Local ownership & institutionalisation" },
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

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Our Methodology</span>
          <h2 className={styles.title}>How We Work</h2>
        </motion.div>

        <motion.div 
          className={styles.stepsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.id} className={styles.stepCard} variants={itemVariants}>
              <div className={styles.stepNumber}>0{step.id}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index !== steps.length - 1 && <div className={styles.connector}></div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
