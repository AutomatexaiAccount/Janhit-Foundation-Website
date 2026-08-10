"use client";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import WaterDroplets from "./WaterDroplets";
import styles from "./ImpactStats.module.css";

const stats = [
  { id: 1, value: "25+ Years", label: "of community-led development" },
  { id: 2, value: "Western UP & NCR", label: "communities reached" },
  { id: 3, value: "Multiple Themes", label: "Water • Agriculture • Environment • Child Rights • Women" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ImpactStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className={styles.section} ref={ref} id="impact">
      <WaterDroplets />
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} className={styles.statCard} variants={itemVariants}>
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
