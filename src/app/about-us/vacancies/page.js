
"use client";
import styles from '../AboutUsPages.module.css';
import { motion } from 'framer-motion';

export default function VacanciesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'grayscale(30%)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Careers & Vacancies</h1>
          <p className={styles.heroSubtitle}>Join our team and help us make a difference in the community.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.emptyState}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className={styles.emptyStateIcon}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            🤝
          </motion.div>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '15px' }}>No Openings Right Now</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '30px', lineHeight: '1.6' }}>
            All of Janhit Foundation’s jobs are advertised here. Currently, our team is fully staffed, but we are always looking to connect with passionate individuals.
          </p>
          <button style={{ 
            background: 'linear-gradient(135deg, #DE5824, #1A202C)', 
            color: 'white', 
            border: 'none', 
            padding: '15px 30px', 
            borderRadius: '50px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(222, 88, 36, 0.3)'
          }}>Check Back Later</button>
        </motion.div>
      </div>
    </main>
  );
}
