
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
