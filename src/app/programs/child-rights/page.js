
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function ChildRightsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(320deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Child Rights Protection</h1>
          <p className={styles.heroSubtitle}>Connecting children in need to care, protection, and rehabilitation.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>CHILDLINE is India's first 24-hour, toll-free emergency phone outreach programme for children in need of care and protection, connecting them to long-term care and rehabilitation facilities. Any youngster or concerned adult can dial 1098 at any time of day or night to reach the CHILDLINE service.</p>
          <p className={styles.paragraph}>Meerut became the 73rd city to receive the service in August 2007, with the Janhit Foundation in charge of its deployment. We take a child-centered approach to development, in which children are active and leading participants in their own growth.</p>
          <p className={styles.paragraph}>We receive over ten calls every day on average from children in distress from all over town as a result of this effort. In 2020, we were also assigned the job of looking after the Meerut Railway Childline.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Our Activities</h2>
          <ul style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}><strong>Open House:</strong> Monthly events in public spaces like railway stations to raise awareness about the 1098 service.</li>
            <li style={{marginBottom: '10px'}}><strong>Canopy & Health Exams:</strong> Canopies set up in public venues to distribute materials, paired with regular free health checks and vaccinations for slum children.</li>
            <li style={{marginBottom: '10px'}}><strong>Vocational Trainings:</strong> Free sewing workshops, computer classes, and driving lessons for underprivileged youths to ensure self-sufficiency.</li>
            <li style={{marginBottom: '10px'}}><strong>Rescue Operations:</strong> In collaboration with Meerut Police, rescuing child laborers (e.g., 'Operation Masoom') and providing counseling and rehabilitation.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
