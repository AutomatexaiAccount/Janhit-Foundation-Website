"use client";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import WaterDroplets from "./WaterDroplets";
import CountUpAnimation from "./CountUpAnimation";
import styles from "./ImpactStats.module.css";

const stats = [
  { id: 1, value: "25+ Years", label: "of grassroots development" },
  { id: 2, value: "2,000+ Farmers", label: "engaged in sustainable agriculture" },
  { id: 3, value: "210 Villages", label: "covered through soil-health initiatives" },
  { id: 4, value: "25+", label: "Water bodies revived" },
  { id: 5, value: "24×7", label: "Child Helpline Meerut Childline" },
  { id: 6, value: "XX,XXX+", label: "Children reached / supported (Pending Verification)" },
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
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Our Impact at a Glance</h2>
        </motion.div>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} className={styles.statCard} variants={itemVariants}>
              <h3 className={styles.statValue}>
                <CountUpAnimation value={stat.value} duration={2.5} />
              </h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
