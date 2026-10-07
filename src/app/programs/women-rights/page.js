
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function WomenRightsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(280deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Women Rights Protection</h1>
          <p className={styles.heroSubtitle}>Educating women and helping them understand their value and rights.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Women's independence has been a priority for the Janhit Foundation. It is the organization's firm view that it should take on the role of providing basic comforts to society's underprivileged women. We have made it our mission to educate women and help them understand their value so that they can contribute equally to the betterment of the world.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Major Programs</h2>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Health Programme & Sanitation</h3>
          <p className={styles.paragraph}>We hold health programmes in numerous locations to educate people about the need for hygiene, combating superstitions that prevent toilet use in rural areas.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Sanitary Napkin Distribution</h3>
          <p className={styles.paragraph}>We teach women how to handle menstruation in a sanitary manner. To guarantee healthy practices, the proper use of sanitary napkins is taught and they are supplied on a regular basis.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Janhit Mahila Helpline</h3>
          <p className={styles.paragraph}>We started an innovative support system in the form of a Women Helpline (0121- 4302021) which registers calls from women in distress across the district. The helpline is supplemented with a Panel of Experts (lawyers, psychologists, counselors) who provide advisory and easy solutions.</p>
        </motion.div>
      </div>
    </main>
  );
}
