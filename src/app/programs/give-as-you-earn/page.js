
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GiveAsYouEarnPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'saturate(1.5)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Give As You Earn</h1>
          <p className={styles.heroSubtitle}>CAF India’s payroll giving programme.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Janhit Foundation is a partner in Give as You Earn, CAF India’s payroll giving programme which offers companies and their employees an easy and tax-effective way of giving to the NGO of their choice. As a part of this, we have undertaken a number of activities:</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Vocational Training at Bal Sadan</h3>
          <p className={styles.paragraph}>We facilitated computer skills training for 30 children at Bal Sadan, a government child observation home in Meerut, providing them with systems and basic software education to build their future.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Helping the Deprived – Mission ‘Enable’</h3>
          <p className={styles.paragraph}>We provided enabling devices like wheelchairs, hearing machines, crutches, and walkers to physically challenged children, transforming them from disabled to enabled.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Free Medical Camps & Education Support</h3>
          <p className={styles.paragraph}>Conducted medical camps in Jaibheem Nagar, providing free medicines and checkups to address health crises caused by groundwater contamination. We also sponsored school uniforms and materials for slum children.</p>
        </motion.div>
      </div>
    </main>
  );
}
