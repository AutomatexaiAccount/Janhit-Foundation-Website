const fs = require('fs');

const historyContent = `
"use client";
import styles from '../AboutUsPages.module.css';
import { motion } from 'framer-motion';

export default function HistoryPage() {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Our History</h1>
          <p className={styles.heroSubtitle}>The journey of Janhit Foundation from a small group of dynamic leaders to a recognized organization.</p>
        </motion.div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.timeline}>
          <motion.div className={styles.timelineItem} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineYear}>The Beginning</div>
              <p className={styles.timelineText}>
                While in his teens, our founder, the Late Shri Anil Rana, formed a group of young dynamic leaders, with the aim of making a difference in their local community. Throughout his young adult life this remained solely an unachievable vision, and he spent his time employed as a university English lecturer. However, still dissatisfied with what life had to offer, he resigned from his job and created a platform for his vision.
              </p>
            </div>
          </motion.div>

          <motion.div className={styles.timelineItem} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineYear}>1998</div>
              <p className={styles.timelineText}>
                This platform was <strong>Janhit Foundation</strong>, which was formally registered under the Societies Registration Act on August 4, 1998, in Meerut City, Western Uttar Pradesh. The first five years of the organization's existence were a tough and barren time. With little funding and support, our founder and his following of youthful volunteers persevered to raise awareness about water and agricultural problems in the region.
              </p>
            </div>
          </motion.div>

          <motion.div className={styles.timelineItem} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineYear}>2008 & Beyond</div>
              <p className={styles.timelineText}>
                Slowly but surely, the organization gained credibility and numbers, until it reached its current state, located in a two storey office building, housing approximately 25 full-time salaried employees. Sadly, our founding Director, Anil Rana, passed away suddenly in 2008, and since this time, Janhit Foundation has been overseen by his wife, our new Director, <strong style={{color: '#DE5824'}}>Ms. Anita Rana</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
`;

const locationContent = `
"use client";
import styles from '../AboutUsPages.module.css';
import { motion } from 'framer-motion';

export default function LocationPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(15deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Our Location</h1>
          <p className={styles.heroSubtitle}>Find out where we operate and how you can reach our main office in Meerut.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.p 
          style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto', color: '#4a5568' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Janhit Foundation operates from our head office in Meerut and our geographical reach covers the district of Meerut in Western Uttar Pradesh, in addition to extending to other neighbouring districts including Muzaffarnagar, Saharanpur, Baghpat, Ghaziabad and Noida.
        </motion.p>
        
        <div className={styles.contactGrid}>
          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.contactIcon}>📍</div>
            <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Main Office</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8' }}>
              <strong>Janhit Foundation</strong><br/>
              771/8, Jagriti Vihar<br/>
              Meerut-250004,<br/>
              Uttar Pradesh, India
            </p>
            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #edf2f7' }}>
              <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '10px' }}>
                <span style={{ color: '#DE5824', marginRight: '10px' }}>📞</span> +91-121-4004123, 0121-4302021
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4a5568' }}>
                <span style={{ color: '#DE5824', marginRight: '10px' }}>✉️</span> 
                <a href="mailto:janhitfoundation@gmail.com" style={{ color: '#DE5824', textDecoration: 'none' }}>janhitfoundation@gmail.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.mapContainer}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.9678859740523!2d77.7317203!3d28.9587425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64eb3f8a45e3%3A0xc6822c608f6c3821!2sJanhit%20Foundation!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
`;

const vacanciesContent = `
"use client";
import styles from '../AboutUsPages.module.css';
import { motion } from 'framer-motion';

export default function VacanciesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'grayscale(30%)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Careers & Vacancies</h1>
          <p className={styles.heroSubtitle}>Join our team and help us make a difference in the community.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.emptyState}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className={styles.emptyStateIcon}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            🤝
          </motion.div>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '15px' }}>No Openings Right Now</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '30px', lineHeight: '1.6' }}>
            All of Janhit Foundation’s jobs are advertised here. Currently, our team is fully staffed, but we are always looking to connect with passionate individuals.
          </p>
          <button style={{ 
            background: 'linear-gradient(135deg, #DE5824, #1A202C)', 
            color: 'white', 
            border: 'none', 
            padding: '15px 30px', 
            borderRadius: '50px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(222, 88, 36, 0.3)'
          }}>Check Back Later</button>
        </motion.div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync('src/app/about-us/history/page.js', historyContent);
fs.writeFileSync('src/app/about-us/location/page.js', locationContent);
fs.writeFileSync('src/app/about-us/vacancies/page.js', vacanciesContent);
