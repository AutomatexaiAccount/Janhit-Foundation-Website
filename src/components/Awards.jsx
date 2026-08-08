"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Awards.module.css";

const awardsList = [
  {
    id: 1,
    title: "Leadership in community initiative for a green economy - UNDP award (2012)",
    description: "Janhit Foundation's Director, Anita Rana, received this prestigious award from the UN Development Programme at the 2012 Delhi Sustainable Development Summit. The award was presented by the UNDP's Country Director, Caitlin Wiesen.",
    image: "/award.png",
  },
  {
    id: 2,
    title: "Nari Shakti Puraskar",
    description: "Honored for outstanding contribution towards women empowerment and environmental conservation.",
    image: "/award.png",
  },
  {
    id: 3,
    title: "Green Apple Environment Award",
    description: "Recognized internationally for environmental best practices and sustainable development initiatives.",
    image: "/award.png",
  }
];

export default function Awards() {
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
          <h2 className={styles.title}>Our Awards & Achievements</h2>
          <div className={styles.divider}></div>
        </motion.div>
        
        <div className={styles.awardsList}>
          {awardsList.map((award, index) => (
            <motion.div 
              key={award.id} 
              className={styles.awardCard}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.awardContent}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <p className={styles.awardDescription}>{award.description}</p>
                <Link href="#" className={styles.readMore}>read more...</Link>
              </div>
              <div className={styles.awardImage}>
                <Image 
                  src={award.image} 
                  alt={award.title} 
                  width={200}
                  height={150}
                  style={{ objectFit: "cover", borderRadius: "8px" }} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
