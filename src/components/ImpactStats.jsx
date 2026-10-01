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
  hidden: (i) => ({ opacity: 0, y: i % 2 === 0 ? 50 : -50 }),
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Very subtle, clean droplet watermark
const WatermarkIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0.03, // extremely subtle
      width: '180px',
      height: '180px',
      zIndex: 0,
      pointerEvents: 'none'
    }}
  >
    <path d="M50 15 C50 15 20 50 20 70 C20 86.5 33.5 100 50 100 C66.5 100 80 86.5 80 70 C80 50 50 15 50 15 Z" />
  </svg>
);

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
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className={styles.statCard} 
              custom={index}
              variants={itemVariants}
            >
              <WatermarkIcon />
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
