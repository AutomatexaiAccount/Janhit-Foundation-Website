
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function EnvironmentPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(60deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Environment</h1>
          <p className={styles.heroSubtitle}>Working with communities to enhance their environment and conserve natural resources.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Aside from the work we undertake in water and agriculture, we work with communities to enhance various other aspects of their environment. Notably, we have participated in the <strong>My Clean India</strong> campaign to improve awareness among communities.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Promotion of Agnihotra</h2>
          <p className={styles.paragraph}>The organization encourages Agnihotra in Meerut. Practicing Agnihotra in agricultural fields cleans the surrounding atmosphere and reduces the risk of insect-pest attacks, thereby nullifying the need for pesticides. Scientific researches prove that practicing it even once a day cleans 8000 sq. ft. of atmosphere.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Air Pollution & Urban Forestry</h2>
          <p className={styles.paragraph}>In 2002, Janhit Foundation conducted a pollution study of Meerut with CSE, New Delhi. Following the findings, we established an Enviro-Green Centre by planting 300 medicinal trees and setting up rainwater harvesting in City Vocational Public School, involving 1500 students in 'shramdaan'.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Biodiversity Farm</h2>
          <p className={styles.paragraph}>Supported by The Royal Netherlands Embassy, we set up a model biodiversity farm in Bhatipura village. It includes a pond, apiculture, floriculture, medicinal plants (Neem, jatropha, stevia), and organic manure models (NADEP, LADEP, vermiwash) to educate farmers on ecological balance and income enhancement.</p>
        </motion.div>
      </div>
    </main>
  );
}
