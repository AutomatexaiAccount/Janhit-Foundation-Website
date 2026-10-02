"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function AgricultureInnovationPage() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(45deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Agriculture Innovation</h1>
          <p className={styles.heroSubtitle}>Integrating traditional wisdom with modern eco-friendly agricultural techniques.</p>
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
          {/* LADEP Section */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
              Innovation LADEP (Lalit and Devpal’s Technology) – Organic Manure Production
            </h2>
            
            <p className={styles.paragraph}>
              One constraint, which although not yet fully accepted, despite being talked about, is that organic farming requires huge biomass, which in most cases is generally not available. Consequently, agricultural scientists are reluctant to promote organic farming.
            </p>
            <p className={styles.paragraph}>
              However, the farming community of Western Uttar Pradesh, unknowingly and ignorantly, finds it difficult to dispose of the huge biomass of Sugarcane leaves which they regard simply as waste. Furthermore, these leaves are then burnt, releasing carbon dioxide into the atmosphere, and thus contributing to climatic change and widespread soil degradation.
            </p>
            <p className={styles.paragraph}>
              <strong>Janhit Foundation</strong> has created a technique where farmers can benefit from the biomass contained in sugarcane leaves, by converting it to compost and thus forming manure. Our former fieldworker Lalit and our current Agricultural Coordinator Devpal Singh, have been responsible for the creation of this innovation, what is essentially a rich, organic manure, compiled with zero budget.
            </p>

            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '15px', borderLeft: '5px solid #059669', marginTop: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#065f46', marginBottom: '15px' }}>Requirements for One Acre of Land:</h3>
              <p style={{ marginBottom: '15px', color: '#475569' }}>
                The area required for the production of this manure is 25 ft x 8 ft x 5 ft. The manure (approx. 4-5 tonnes) will be ready for use within 5-6 months, depending on the season.
              </p>
              <motion.ul variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ listStyleType: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                <motion.li variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#059669' }}>🌱</span> Sugarcane leaves (approx 1 acre) – Approx. 3 tonnes</motion.li>
                <motion.li variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#059669' }}>🐄</span> 2 tonnes of animal dung</motion.li>
                <motion.li variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#059669' }}>🌍</span> 2 tonnes of field soil</motion.li>
                <motion.li variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#059669' }}>💧</span> 20000 litres of water</motion.li>
                <motion.li variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#059669' }}>🌿</span> Green weeds/biomass - 1 tonne</motion.li>
                <motion.li variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#059669' }}>🪨</span> Rock phosphate/ash - 60 kg</motion.li>
                <motion.li variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#059669' }}>🪵</span> Wooden sticks/timber - 2 quintals</motion.li>
              </motion.ul>
            </div>
          </div>

          {/* Harit Pani Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
              Harit Pani
            </h2>
            <p className={styles.paragraph}>
              This is ideal for farmers who do not have cows but still want to use organic manures for their fields and crops.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
              <div style={{ flex: '1 1 300px', background: '#fffbeb', padding: '30px', borderRadius: '15px', border: '1px solid #fcd34d' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#b45309', marginBottom: '15px' }}>Ingredients</h3>
                <ul style={{ color: '#92400e', lineHeight: '1.8', paddingLeft: '20px' }}>
                  <li>25 kg of weeds (grown on roadside etc.)</li>
                  <li>500 gm gur (jaggery)</li>
                  <li>500 gm tamarind (imli)</li>
                  <li>250 gm salt</li>
                  <li>100 litres of water</li>
                </ul>
              </div>
              <div style={{ flex: '1 1 300px', background: '#eff6ff', padding: '30px', borderRadius: '15px', border: '1px solid #bfdbfe' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#1d4ed8', marginBottom: '15px' }}>Preparation Method</h3>
                <ol style={{ color: '#1e40af', lineHeight: '1.8', paddingLeft: '20px' }}>
                  <li>Chop the weeds with a dao and place them in a big drum.</li>
                  <li>Mix jaggery, tamarind, and salt with the chopped biomass.</li>
                  <li>Pour water into the drum so that it covers the ingredients.</li>
                  <li>Stir daily with a stick. The mixture decomposes within 15-20 days.</li>
                  <li>Strain it and use it as a spray or as a soil drench in 10% strength.</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', width: '100%', height: '400px', backgroundColor: '#e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/Agriculture Innovation Images/agriculuter_inovation.jpg" alt="Agriculture Innovation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
