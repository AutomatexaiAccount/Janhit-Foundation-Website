
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function MyCleanMeerutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(180deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>My Clean Meerut</h1>
          <p className={styles.heroSubtitle}>Beauty & Prosperity through Community.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Janhit Foundation launched the 'My Clean Meerut' campaign to inspire the people of Meerut City to show love and pride for their environment. Associated with the 'My Clean India' campaign, it encourages people to take personal responsibility for a cleaner environment.</p>
          <p className={styles.paragraph}>This campaign is based on Appreciative Inquiry—shifting from problem-solving to building on solutions, acknowledging community power, and focusing on local achievements rather than waiting for resources.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>My Clean School</h2>
          <p className={styles.paragraph}>Working with UN Agenda 21, My Clean School enables students to act as role models. Using Progressive Inquiry (What is liked, What is not liked, What needs to happen), youth explore community opportunities for action.</p>
          
          <p className={styles.paragraph}>We have organized Inter-school Essay Writing, Debate, and Poster Making Competitions with hundreds of students participating across government and private schools to foster environmental consciousness.</p>
        </motion.div>
      </div>
    </main>
  );
}
