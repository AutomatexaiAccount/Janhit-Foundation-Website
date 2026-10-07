
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function WaterConservationPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(200deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Water Conservation & Awareness</h1>
          <p className={styles.heroSubtitle}>Preserving and revitalising natural water supplies in Uttar Pradesh.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>In Uttar Pradesh, the Janhit Foundation takes a novel method for dealing with water shortages. This strategy is centred on ensuring that all of our efforts in this field benefit the people who live in our society while also improving environmental circumstances.</p>
          <p className={styles.paragraph}>We devote a significant portion of our efforts on preserving and revitalising natural water supplies. Uttar Pradesh has a network of rivers, ponds, and canals, although encroachment is prevalent, and many of them are dry. We have been working with a variety of partners to rejuvenate these buildings so that communities can use them for agricultural and other uses.</p>
          <p className={styles.paragraph}>As a remedy to the ever-increasing water crisis, we promote the adoption of clean technology such as rainwater collection. This helps to replenish the region's depleted groundwater levels while also supplying excess water for home usage.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Mitigation of Water Pollution</h2>
          <p className={styles.paragraph}>In India, waste dumping from industrial facilities is prevalent. As a result, water contamination is a serious issue, with many industries releasing untreated waste water directly into the groundwater and the region's many rivers. The Janhit Foundation aims to address these issues by providing factual proof of the harm that the industry has caused to the environment and, in many cases, human health.</p>

          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Major Programs</h2>
          <ul style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}><strong>2nd Rain Centre in India:</strong> A one-of-its-kind water library with educative panels, books, and videos set up in Meerut.</li>
            <li style={{marginBottom: '10px'}}><strong>Revival of Water Bodies:</strong> Revived over 25 water bodies in Meerut, Ghaziabad & Sonepat.</li>
            <li style={{marginBottom: '10px'}}><strong>Low-Cost Techniques:</strong> Promotion of water-efficient techniques among farmers.</li>
            <li style={{marginBottom: '10px'}}><strong>Water Census:</strong> Created a Water Census of the region in 2003 and 2013.</li>
            <li style={{marginBottom: '10px'}}><strong>Rainwater Harvesting:</strong> Implemented in multiple government and private buildings.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
