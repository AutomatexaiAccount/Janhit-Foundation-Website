
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function EnvironmentPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(60deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Environment</h1>
          <p className={styles.heroSubtitle}>Working with communities to enhance their environment and conserve natural resources.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <motion.div variants={itemVariants}>
                <p className={styles.paragraph}>
                  Asides from the work we undertake in our two mainstream environmental fields; water and agriculture, we also work with communities to enhance various other aspects of their environment, dependent upon the nature of local issues.
                </p>
                <p className={styles.paragraph}>
                  Notably, we have participated in the <strong>My Clean India</strong> campaign. You can read more about our endeavours <a href="/programs/my-clean-meerut" style={{color: '#DE5824', textDecoration: 'underline'}}>here.</a>
                </p>
                <p className={styles.paragraph}>
                  We work to improve awareness amongst local communities and especially youth with regard to the importance of conserving our environment and natural resources for the future generations.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <img src="/Environment Images/Environmental-NGO-1024x427.png" alt="Environment NGO" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/Environment Images/Environmentalist-Foundation-of-India-1024x598.jpg" alt="Environmental Foundation" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>

            <motion.div 
              className={styles.addressBox} 
              style={{ maxWidth: '100%' }}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <h3>Promotion of Agnihotra</h3>
              <p>
                Agnihotra is a healing fire from the ancient science of Ayurveda. It is a process of purifying the atmosphere through a specially prepared fire performed at sunrise and sunset daily. We promote and organize awareness camps regarding Agnihotra to reduce pollution and promote harmony with nature.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
