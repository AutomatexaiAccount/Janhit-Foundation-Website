
"use client";
import styles from '../AboutUsPages.module.css';
import { motion } from 'framer-motion';

export default function LocationPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(15deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Our Location</h1>
          <p className={styles.heroSubtitle}>Find out where we operate and how you can reach our main office in Meerut.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.p 
          style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto', color: '#4a5568' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Janhit Foundation operates from our head office in Meerut and our geographical reach covers the district of Meerut in Western Uttar Pradesh, in addition to extending to other neighbouring districts including Muzaffarnagar, Saharanpur, Baghpat, Ghaziabad and Noida.
        </motion.p>
        
        <div className={styles.contactGrid}>
          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.contactIcon}>📍</div>
            <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Main Office</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8' }}>
              <strong>Janhit Foundation</strong><br/>
              771/8, Jagriti Vihar<br/>
              Meerut-250004,<br/>
              Uttar Pradesh, India
            </p>
            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #edf2f7' }}>
              <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '10px' }}>
                <span style={{ color: '#DE5824', marginRight: '10px' }}>📞</span> +91-121-4004123, 0121-4302021
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4a5568' }}>
                <span style={{ color: '#DE5824', marginRight: '10px' }}>✉️</span> 
                <a href="mailto:janhitfoundation@gmail.com" style={{ color: '#DE5824', textDecoration: 'none' }}>janhitfoundation@gmail.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.9678859740523!2d77.7317203!3d28.9587425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64eb3f8a45e3%3A0xc6822c608f6c3821!2sJanhit%20Foundation!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
