"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Programmes.module.css";
import Image from "next/image";

const programmes = [
  {
    id: 1,
    title: "Child Education",
    description: "Set up a secure and user-friendly online donation platform that accepts multiple payment methods. Include options for one-time and recurring donations.",
    image: "/Home Page Images/Home Child Eductaion.webp",
  },
  {
    id: 2,
    title: "Healthy Food",
    description: "Set up a secure and user-friendly online donation platform that accepts multiple payment methods. Include options for one-time and recurring donations.",
    image: "/Home Page Images/Home Healthy Food.jpg",
  },
  {
    id: 3,
    title: "Medical Care",
    description: "Set up a secure and user-friendly online donation platform that accepts multiple payment methods. Include options for one-time and recurring donations.",
    image: "/Home Page Images/Home Medical Care.webp",
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
          <span className={styles.subtitle}>Help & donate them when they are in need</span>
          <h2 className={styles.title}>Causes</h2>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programmes.map(programme => (
            <motion.div 
              key={programme.id} 
              className={styles.card} 
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={programme.image} 
                  alt={programme.title} 
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{programme.title}</h3>
                <p className={styles.cardDescription}>{programme.description}</p>
                <Link href="/donate" className="btn btn-primary" style={{ marginTop: '15px' }}>Donate Now</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
