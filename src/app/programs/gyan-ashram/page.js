
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GyanAshramPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(-30deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Gyan Ashram</h1>
          <p className={styles.heroSubtitle}>Empowering communities through knowledge and sustainable living practices.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ fontSize: '4rem' }}>🛖</span>
          </div>
          <p className={styles.paragraph} style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            Gyan Ashram is an initiative by Janhit Foundation to create a dedicated center for learning, environmental awareness, and community empowerment. Through Gyan Ashram, we conduct workshops on organic farming, water conservation, and women's empowerment, serving as a beacon of knowledge for the rural and semi-urban populations.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '20px' }}>
            <motion.div 
              style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              whileHover={{ scale: 1.02 }}
            >
              <img src="/Gyan Asharam Images/news_66c6f9f448f1d.jpg" alt="Gyan Ashram News" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </motion.div>
            <motion.div 
              style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              whileHover={{ scale: 1.02 }}
            >
              <img src="/Gyan Asharam Images/top-water-conservation-ngo-in-india.webp" alt="Top Water Conservation NGO" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
