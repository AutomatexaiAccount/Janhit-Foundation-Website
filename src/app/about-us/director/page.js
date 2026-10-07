
"use client";
import { motion } from 'framer-motion';
import styles from '../AboutUsPages.module.css';

export default function DirectorPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(220deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Smt. Anita Rana</h1>
          <p className={styles.heroSubtitle}>Director, Janhit Foundation</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Anita Rana stepped into as the head of the organization on the untimely demise of the founder of the organization Lt. Dr. Anil Rana in 2008. She came out as a housewife and with absolute passion and dedication towards the vision with which the organization was set up, she almost trained herself with the ongoing projects and also build the child rights and the women rights themes of the organization both in terms of the vision and the programs.</p>
          <p className={styles.paragraph}>She has crafted her own persona as a Social worker in the region who is always active and ready to help and support anyone in need in any region that approaches her with any kinds of problems. She has also been added over 100 accolades and awards in the last 13 years of her as the Head of the organization. It was only due to her persistence in implementing better projects that many institutional and corporate donors came forward and supported various projects in the region in the themes of Water, Sanitation, Health & Hygiene and Health for women in order to promote women empowerment through awareness and adopting easy solutions to their problems.</p>
          <p className={styles.paragraph}>She has also been serving as the Director for Meerut Childline since 2008 and it was due to regular monitoring and satisfactory work that we were awarded another Childline in Meerut – Railway Child Helpdesk and she has been serving as the Director since 2019. Further to this she recently envisioned a program to empower the women across the city of Meerut by initiating a Women Helpline and a rich panel having members from law, education, social sector, medicine, psychologist, career counsellors etc. to advice the women in case they are in any kind of distress.</p>
        </motion.div>
      </div>
    </main>
  );
}
