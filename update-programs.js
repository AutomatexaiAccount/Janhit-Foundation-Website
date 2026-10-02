const fs = require('fs');

const envContent = `
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
          <motion.p className={styles.paragraph} variants={itemVariants}>
            Asides from the work we undertake in our two mainstream environmental fields; water and agriculture, we also work with communities to enhance various other aspects of their environment, dependent upon the nature of local issues.
          </motion.p>
          <motion.p className={styles.paragraph} variants={itemVariants}>
            Notably, we have participated in the <strong>My Clean India</strong> campaign. You can read more about our endeavours <a href="/programs/my-clean-meerut" style={{color: '#DE5824', textDecoration: 'underline'}}>here.</a>
          </motion.p>
          <motion.p className={styles.paragraph} variants={itemVariants}>
            We work to improve awareness amongst local communities and especially youth with regard to the importance of conserving our environment and natural resources for the future generations.
          </motion.p>
          
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
        </motion.div>
      </div>
    </main>
  );
}
`;

const gyanContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GyanAshramPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(-30deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Gyan Ashram</h1>
          <p className={styles.heroSubtitle}>Empowering communities through knowledge and sustainable living practices.</p>
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
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ fontSize: '4rem' }}>🛖</span>
          </div>
          <p className={styles.paragraph} style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Gyan Ashram is an initiative by Janhit Foundation to create a dedicated center for learning, environmental awareness, and community empowerment. Through Gyan Ashram, we conduct workshops on organic farming, water conservation, and women's empowerment, serving as a beacon of knowledge for the rural and semi-urban populations.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
`;

const giveContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GiveAsYouEarnPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'saturate(1.5)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Give As You Earn</h1>
          <p className={styles.heroSubtitle}>A payroll giving programme to support noble causes while you work.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.vacancyBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: '#DE5824' }}
        >
          <motion.div 
            style={{ fontSize: '4rem', marginBottom: '20px' }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          >
            💸
          </motion.div>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '15px' }}>Payroll Giving Programme</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '700px', margin: '0 auto 20px auto' }}>
            Give As You Earn is one of the easiest, most tax-efficient ways of giving to a charity. It allows employees to donate directly from their pre-tax salary to support our environmental and social initiatives.
          </p>
          <a href="/contact-us" style={{ 
            display: 'inline-block',
            background: 'linear-gradient(135deg, #DE5824, #F06A36)', 
            color: 'white', 
            textDecoration: 'none',
            padding: '12px 35px', 
            borderRadius: '50px', 
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(222, 88, 36, 0.4)'
          }}>Enroll Your Company</a>
        </motion.div>
      </div>
    </main>
  );
}
`;

const cleanContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function MyCleanMeerutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(180deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <h1 className={styles.heroTitle}>My Clean Meerut</h1>
          <p className={styles.heroSubtitle}>Our dedicated campaign for a greener, cleaner, and healthier city.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.contactIcon}>🧹</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>Sanitation Drives</h3>
            <p className={styles.paragraph}>
              Regular community clean-up drives across Meerut city to eliminate waste dumping spots and promote proper waste disposal methods among citizens.
            </p>
          </motion.div>

          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.contactIcon}>🌱</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>Tree Plantation</h3>
            <p className={styles.paragraph}>
              Planting thousands of saplings annually to increase the green cover of Meerut, fighting air pollution, and fostering biodiversity in urban areas.
            </p>
          </motion.div>

          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.contactIcon}>📢</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2d3748' }}>Awareness Campaigns</h3>
            <p className={styles.paragraph}>
              Educating school children and local residents about the importance of hygiene, single-use plastic ban, and sustainable living under the Swachh Bharat Abhiyan.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync('src/app/programs/environment/page.js', envContent);
fs.writeFileSync('src/app/programs/gyan-ashram/page.js', gyanContent);
fs.writeFileSync('src/app/programs/give-as-you-earn/page.js', giveContent);
fs.writeFileSync('src/app/programs/my-clean-meerut/page.js', cleanContent);
