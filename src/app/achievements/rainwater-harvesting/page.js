"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';
import Link from 'next/link';

export default function RainwaterHarvestingPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(200deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className={styles.heroTitle}>Rainwater Harvesting</h1>
          <p className={styles.heroSubtitle}>Recharging groundwater and securing water for the future generations.</p>
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
          {/* Quick Stats Header */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            <div style={{ padding: '30px', background: '#ebf8ff', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#2b6cb0', marginBottom: '10px' }}>110k+</h2>
              <p style={{ color: '#2c5282', fontWeight: 'bold' }}>Litres Harvested Annually</p>
            </div>
            <div style={{ padding: '30px', background: '#ebf8ff', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#2b6cb0', marginBottom: '10px' }}>2nd</h2>
              <p style={{ color: '#2c5282', fontWeight: 'bold' }}>Rain Centre in India</p>
            </div>
            <div style={{ padding: '30px', background: '#ebf8ff', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#2b6cb0', marginBottom: '10px' }}>100+</h2>
              <p style={{ color: '#2c5282', fontWeight: 'bold' }}>Structures Installed</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            
            {/* Rain Centre Section */}
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                Rain Centre
              </h2>
              <p className={styles.paragraph}>
                Rain Centres are a network of permanent exhibitions that seek to spread water literacy among urban Indians. They define the role played by every Indian citizen in harvesting rainwater and using it to combat the menace of water scarcity.
              </p>
              <p className={styles.paragraph}>
                <strong>Janhit Foundation</strong> was responsible for establishing the second Rain Centre in the country, in Meerut, in 2004 in collaboration with the Centre for Science and Environment (CSE), New Delhi.
              </p>
              <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '10px', borderLeft: '4px solid #3182ce', marginTop: '20px' }}>
                <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.7' }}>
                  The Rain Centre building has a live model of rooftop rainwater harvesting with an area of 185m². It harvests a total volume of <strong>110,437 litres</strong> of rainwater on average annually. The Rain Centre is intended to be a museum and a laboratory rolled into one. In short, it provides the know-how to the people for harvesting rainwater and equips civil society to take leadership in the movement to conserve water.
                </p>
              </div>
              <div style={{ marginTop: '20px', width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img src="/Water Images/rain_center.jpg" alt="Rain Centre" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

            {/* Restoration of Water Bodies */}
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                Restoration of Water Bodies
              </h2>
              <p className={styles.paragraph}>
                Janhit Foundation has been working towards the conservation of water by traditional methods through community participation. It has undertaken a program to revive and promote existing and often historical, rural water resources structures such as ponds, wells and johads.
              </p>
              <p className={styles.paragraph}>
                We strongly believe that water conservation can solve the drinking water shortage crisis, help to prevent further groundwater depletion, and promote aquatic ecology through the provision of additional surface water bodies. Such measures can only be truly effective with the participation of the local community. Janhit Foundation visits many villages on a regular basis to promote continued conservation of water resources and remind the people of the historical cultural heritage that is reflected in the age-old natural water structures.
              </p>
              <div style={{ marginTop: '20px', width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img src="/Water Images/rainwater.jpg" alt="Restoration of Water Bodies" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

                        {/* Image Gallery */}
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                Gallery
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <div style={{ width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                  <img src="/Water Images/IMG_4012.JPG" alt="Water 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                  <img src="/Water Images/IMG_4230.JPG" alt="Water 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>

            {/* Consultancy */}
            <motion.div 
              variants={itemVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              style={{ background: '#2c5282', padding: '40px', borderRadius: '20px', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <span style={{ fontSize: '3rem', marginBottom: '15px' }}>🤝</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#ebf8ff' }}>
                Rainwater Harvesting Consultancy
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', marginBottom: '30px', color: '#bee3f8' }}>
                Janhit Foundation has the in-house knowledge to undertake external consultancy work within the wider community to help establish rainwater harvesting structures on a large scale. We have trained employees who are competent in the design and install of rainwater harvesting structures, having received specific training from the Government of India’s Central Groundwater Board.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px 40px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span style={{ fontSize: '1.1rem', color: '#ebf8ff' }}>For further information, please contact us directly on: </span>
                <a href="tel:0121400123" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#63b3ed', textDecoration: 'none', marginLeft: '10px' }}>0121-400123</a>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </main>
  );
}
