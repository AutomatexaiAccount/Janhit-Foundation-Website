"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Programmes.module.css";

const programmes = [
  {
    id: 1,
    title: "Water Conservation",
    description: "Janhit Foundation takes a three pronged approach to dealing with water issues in Uttar Pradesh, based upon ensuring sustainable solutions.",
    image: "/child-education.png",
  },
  {
    id: 2,
    title: "Child Rights Protection",
    description: "CHILDLINE is India’s first 24-hour, toll-free, emergency phone outreach service for children in need of care and protection.",
    image: "/healthy-food.png",
  },
  {
    id: 3,
    title: "Sustainable Agriculture",
    description: "Promoting organic agriculture as a viable, sustainable alternative to conventional farming practices throughout the region.",
    image: "/child-education.png",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Programmes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Our Key Focus</span>
          <h2 className={styles.title}>Key Programmes</h2>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {programmes.map(programme => (
            <motion.div key={programme.id} className={styles.card} variants={cardVariants}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={programme.image} 
                  alt={programme.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
                <div className={styles.overlay}>
                  <Link href="#" className="btn btn-secondary">Learn More</Link>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{programme.title}</h3>
                <p className={styles.cardDescription}>{programme.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
