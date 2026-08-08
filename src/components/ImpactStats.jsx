"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import WaterDroplets from "./WaterDroplets";
import styles from "./ImpactStats.module.css";

const stats = [
  { id: 1, label: "Years of Service", value: 25, suffix: "+" },
  { id: 2, label: "Lives Impacted", value: 50000, suffix: "+" },
  { id: 3, label: "Villages Reached", value: 100, suffix: "+" },
  { id: 4, label: "Awards Won", value: 15, suffix: "+" },
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
    <section className={styles.section} ref={ref}>
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
              <h3 className={styles.statValue}>
                {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
                {stat.suffix}
              </h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
