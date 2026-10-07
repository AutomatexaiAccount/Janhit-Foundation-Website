
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function SustainableAgriculturePage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(120deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Sustainable Agriculture</h1>
          <p className={styles.heroSubtitle}>Promoting organic agriculture as a viable and sustainable alternative.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Throughout the last decade, the Janhit Foundation has promoted organic agriculture as a viable and sustainable alternative to conventional farming practises. Toxic agrochemicals are heavily used in conventional agriculture, and they enter the food chain, seep into water sources, injure cattle and wildlife, deplete the soil, disrupt natural ecosystems, and contaminate the agricultural crop for which they were originally introduced.</p>
          <p className={styles.paragraph}>Organic farming practises improve soil quality year after year, resulting in more fruitful land. This improves the farmer's long-term yield, nutrient value, and potency of their crops.</p>
          <p className={styles.paragraph}>We work with small, marginalised farmers all throughout the region to help them increase their revenue by lowering input costs and switching to organic farming. Because sugarcane is the primary crop grown in Western Uttar Pradesh, we've worked closely with sugarcane farmers to encourage them to use fewer toxic Persistent Organic Pollutants (POPs) and to provide them with innovative technologies and agricultural techniques to improve their crop and increase yield.</p>
          <p className={styles.paragraph}>We have been encouraging farmers in the region to embrace organic and natural farming practises in order to protect the environment, soil quality, subsurface water quality, and the health of agricultural yield consumers. We work with around 2000 farmers in the district and have completed a number of initiatives with them.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Major Programs</h2>
          <ul style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}><strong>From Seed to Market:</strong> A 3-year project supported by Ford Foundation which promoted organic farming among 400 marginalized farmers, providing trainings from compost pits (Jeevamrit) to certification and market access.</li>
            <li style={{marginBottom: '10px'}}><strong>Demotivating use of Lindane and Endosulphan:</strong> Introduced organic manure LADEP to replace harmful chemicals.</li>
            <li style={{marginBottom: '10px'}}><strong>Soil Testing:</strong> Conducted in 210 villages across Meerut.</li>
            <li style={{marginBottom: '10px'}}><strong>Biodiversity Herbal Gardens:</strong> Set up in SD Public School, Muzaffarnagar and Godwin Public School, Meerut.</li>
            <li style={{marginBottom: '10px'}}><strong>Promotion of MAPs:</strong> Cultivation of Lemongrass, Citronella & Neem with market provision for income generation.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
