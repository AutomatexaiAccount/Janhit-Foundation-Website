"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./StoriesOfChange.module.css";

const stories = [
  {
    id: 1,
    title: "A Farmer's Journey",
    summary: "From chemical-intensive farming and declining soil health to sustainable agriculture and increased income.",
    image: "/Home Page Images/Home Farmer NGo.jpg",
    link: "/stories/farmer"
  },
  {
    id: 2,
    title: "A Child's Journey",
    summary: "From vulnerability and crisis to rescue, family restoration, and a safe environment.",
    image: "/Home Page Images/Home Child Journey.jpg",
    link: "/stories/child"
  },
  {
    id: 3,
    title: "A Woman's Journey",
    summary: "Overcoming challenges through support, skill development, income generation, and renewed agency.",
    image: "/Home Page Images/Home Women Journey.jpg",
    link: "/stories/woman"
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StoriesOfChange() {
  return (
    <section className={styles.section} id="stories">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Human Impact</span>
          <h2 className={styles.title}>Stories of Change</h2>
          <p className={styles.description}>Read real accounts of transformation from the grassroots.</p>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stories.map((story) => (
            <motion.div key={story.id} className={styles.card} variants={cardVariants}>
              <div className={styles.imageWrapper}>
                <img src={story.image} alt={story.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{story.title}</h3>
                <p className={styles.cardSummary}>{story.summary}</p>
                <Link href={story.link} className={styles.readMoreBtn}>
                  Read Full Story →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
