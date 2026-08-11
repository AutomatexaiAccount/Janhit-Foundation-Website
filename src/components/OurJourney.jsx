"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.4 } },
};

export default function OurJourney() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={styles.section} id="journey" ref={containerRef}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Our Story</span>
          <h2 className={styles.title}>From One Professor&apos;s Vision to 25+ Years of Community Action</h2>
          <div className={styles.divider}></div>
        </motion.div>
        
        <div className={styles.timeline}>
          {/* Animated Line */}
          <motion.div 
            className={styles.timelineLine} 
            style={{ scaleY, transformOrigin: "top" }}
          />
          
          {journeyList.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.yearBadge}>{item.year}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
