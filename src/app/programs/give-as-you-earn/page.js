
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GiveAsYouEarnPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'saturate(1.5)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Give As You Earn</h1>
          <p className={styles.heroSubtitle}>A payroll giving programme to support noble causes while you work.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.vacancyBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: '#DE5824' }}
        >
          <motion.div 
            style={{ fontSize: '4rem', marginBottom: '20px' }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          >
            💸
          </motion.div>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '15px' }}>Payroll Giving Programme</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '700px', margin: '0 auto 20px auto' }}>
            Give As You Earn is one of the easiest, most tax-efficient ways of giving to a charity. It allows employees to donate directly from their pre-tax salary to support our environmental and social initiatives.
          </p>
          <a href="/contact-us" style={{ 
            display: 'inline-block',
            background: 'linear-gradient(135deg, #DE5824, #F06A36)', 
            color: 'white', 
            textDecoration: 'none',
            padding: '12px 35px', 
            borderRadius: '50px', 
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(222, 88, 36, 0.4)'
          }}>Enroll Your Company</a>
        </motion.div>
      </div>
    </main>
  );
}
