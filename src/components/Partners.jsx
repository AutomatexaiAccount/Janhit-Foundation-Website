"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Partners.module.css";

const partners = [
  {
    name: "UNDP",
    logo: "https://img.icons8.com/color/512/united-nations.png",
  },
  {
    name: "Ministry of Environment",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",
  },
  {
    name: "World Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/The_World_Bank_logo.svg",
  },
  {
    name: "Local Govt Agencies",
    logo: "https://img.icons8.com/ios/512/city-buildings.png",
  },
  {
    name: "Corporate CSR Partners",
    logo: "https://img.icons8.com/ios/512/handshake.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Partners() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Partners & Donors</h2>
          <p className={styles.description}>We are proud to work alongside these esteemed organizations to drive change.</p>
        </motion.div>
        
        <motion.div 
          className={styles.logoGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div key={index} className={styles.logoCard} variants={cardVariants}>
              <div className={styles.logoImageWrapper}>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className={styles.partnerLogoImg} 
                />
              </div>
              <span className={styles.partnerName}>{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
