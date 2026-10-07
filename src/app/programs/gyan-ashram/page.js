
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GyanAshramPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(-30deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Gyan Ashram</h1>
          <p className={styles.heroSubtitle}>School for Knowledge: Providing informal education to slum children.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Taking care of the poor, deprived children of the slums, Meerut CHILDLINE team initiated two informal schools for marginalized groups. Named Gyanashram (School for knowledge), these schools take care of over 100 dropout children.</p>
          <p className={styles.paragraph}>Janhit Foundation constructed bamboo huts to provide classrooms. Staff members regularly teach these children about the culture of our country, environmental issues, hygiene, first aid, and general knowledge. We also enroll dozens of these dropouts into formal local schools.</p>
          <p className={styles.paragraph}>To encourage empowerment, girl students are provided with computer and tailoring classes. Tremendous support has been received from the community, including regular medical checkups by Subharti Medical College doctors and psychological care by local experts.</p>
        </motion.div>
      </div>
    </main>
  );
}
