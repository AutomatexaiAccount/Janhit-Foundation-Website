
"use client";
import { motion } from 'framer-motion';
import styles from '../AboutUsPages.module.css';

export default function FounderPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(260deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Dr. Anil Rana</h1>
          <p className={styles.heroSubtitle}>Founder, Janhit Foundation</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Dr. Anil Rana who was an educationist and taught in the Kurukshetra University after finishing his PhD from Jawaharlal Nehru University, Delhi. After doing this for a couple of years, he realized serious problems in the region of western Uttar Pradesh in the area of Water & Agriculture, he decided to quit his high paying job as a professor and came back to his birthplace that is Meerut and founded an Ngo with a vision to improve soil and water quality in the region.</p>
          <p className={styles.paragraph}>That was how, he started working with farmers and students in the region to promote organic farming and water conservation for the region to have a more sustainable living in the region. With his leadership, the organization could bring in multiple innovative projects supported by many institutional donors like Sir Ratan Tata Trust, Oxfam India, IGSSS, CAF India, Ford Foundation, Coca Cola India, and various national corporates with small to big support for the betterment of the region.</p>
          <p className={styles.paragraph}>His vision behind the organization could be gathered from one of his statements: "To make my life's trip more interesting, I picked the intruded path, and when I returned to my objective, I saw a swarm of individuals who were all supporting the same social cause."</p>
          <p className={styles.paragraph}>Unfortunately Dr. Rana passed away untimely in 2008 and his wife took on as the head of the organization and is carrying forward his vision and name in the form of the projects being implemented by the project.</p>
        </motion.div>
      </div>
    </main>
  );
}
