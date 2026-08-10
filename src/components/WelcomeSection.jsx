"use client";

import styles from "./WelcomeSection.module.css";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>About Us</span>
          <h2 className={styles.title}>Welcome to Janhit Foundation</h2>
        </motion.div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Founded in 1998 by Dr. Anil Rana, an educationist by profession but an environmentalist at heart to work for Environmental & Water Conservation in Western Uttar Pradesh. Currently working extensively on Water Conservation, Sustainable Agriculture, Environmental Conservation, Child Rights Protection & Women Rights Protection along with Income Generation Activities for women from marginalized communities. Awareness in all the above-mentioned themes has always gone hands in hands with our work on the ground since our inception.
            </p>
            <p>
              We have also been given the responsibility to manage the 24X7 Child Helpline 1098 on behalf of Ministry of Women & Child Development, Govt. of India in Meerut and with our excellent work record we were also awarded to run the Railway Child Help Desk (Railway Childline) in Meerut in 2019, we became an obvious choice.
            </p>
            <p>
              Geographically we have been implementing projects across Western Uttar Pradesh, Haryana and NCR with our focus in Meerut but with programs spread over in Noida, Greater Noida, Ghaziabad, Hapur, Muzzafarnagar, Shamli, Panipat, Sonepat, Karnal and Jhajjhar.
            </p>
            <p>
              Registered as a non-profit under Societies Registration Act, 1860 with tax exemptions from Income Tax Department under Section 12A & 80G Also registered under Foreign Contribution Regulation Act, 2010 and has had long-term partnered with bi-laterals, multi-laterals and many corporate donors in the past and has implemented multiple projects successfully.
            </p>
            <div className={styles.highlightText}>
              We welcome you to Janhit Foundation and be a part of the impactful work that we are doing everyday to bring sustainable change in the lives that we touch.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
