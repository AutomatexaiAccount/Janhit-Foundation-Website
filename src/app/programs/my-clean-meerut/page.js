
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function MyCleanMeerutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(180deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <h1 className={styles.heroTitle}>My Clean Meerut</h1>
          <p className={styles.heroSubtitle}>Our dedicated campaign for a greener, cleaner, and healthier city.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          style={{ width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src="/Clean Meerut Images/atul2.avif" alt="My Clean Meerut Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.contactIcon}>🧹</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>Sanitation Drives</h3>
            <p className={styles.paragraph}>
              Regular community clean-up drives across Meerut city to eliminate waste dumping spots and promote proper waste disposal methods among citizens.
            </p>
          </motion.div>

          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.contactIcon}>🌱</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>Tree Plantation</h3>
            <p className={styles.paragraph}>
              Planting thousands of saplings annually to increase the green cover of Meerut, fighting air pollution, and fostering biodiversity in urban areas.
            </p>
          </motion.div>

          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.contactIcon}>📢</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>Awareness Campaigns</h3>
            <p className={styles.paragraph}>
              Educating school children and local residents about the importance of hygiene, single-use plastic ban, and sustainable living under the Swachh Bharat Abhiyan.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
