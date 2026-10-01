"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Founder.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Founder() {
  const content = [
    "Dr. Anil Rana who was an educationist and taught in the Kurukshetra University after finishing his PhD from Jawaharlal Nehru University, Delhi. After doing this for a couple of years, he realized serious problems in the region of western Uttar Pradesh in the area of Water & Agriculture, he decided to quit his high paying job as a professor and came back to his birthplace that is Meerut and founded an Ngo with a vision to improve soil and water quality in the region.",
    "That was how, he started working with farmers and students in the region to promote organic farming and water conservation for the region to have a more sustainable living in the region. With his leadership, the organization could bring in multiple innovative projects supported by many institutional donors like Sir Ratan Tata Trust, Oxfam India, IGSSS, CAF India, Ford Foundation, Coca Cola India, and various national corporates with small to big support for the betterment of the region.",
    "His vision behind the organization could be gathered from one of his statements:",
    "\"To make my life's trip more interesting, I picked the intruded path, and when I returned to my objective, I saw a swarm of individuals who were all supporting the same social cause.\"",
    "Unfortunately Dr. Rana passed away untimely in 2008 and his wife took on as the head of the organization and is carrying forward his vision and name in the form of the projects being implemented by the project."
  ];

  return (
    <>
      <CustomCursor />
      <Header />
      
      <main className={styles.main}>
        {/* Page Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}></div>
          <div className={`container ${styles.bannerContainer}`}>
            <motion.h1 
              className={styles.bannerTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Founder
            </motion.h1>
            <motion.p 
              className={styles.bannerSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dr. Anil Rana
            </motion.p>
          </div>
        </div>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={`container ${styles.container}`}>
            <div className={styles.grid}>
              
              {/* Left Column: Image */}
              <motion.div 
                className={styles.imageColumn}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src="/mr-anil-rana.jpeg" 
                    alt="Dr. Anil Rana - Founder of Janhit Foundation" 
                    fill 
                    className={styles.image}
                  />
                </div>
                <div className={styles.imageCaption}>
                  <h3>Dr. Anil Rana</h3>
                  <p>Founder, Janhit Foundation</p>
                </div>
              </motion.div>

              {/* Right Column: Text Content */}
              <motion.div 
                className={styles.textColumn}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={styles.sectionTitle}>The Man Behind the Mission</h2>
                <div className={styles.paragraphs}>
                  {content.map((paragraph, idx) => {
                    // Check if it is the quote block
                    if (paragraph.startsWith('"')) {
                      return (
                        <blockquote key={idx} className={styles.quoteBlock}>
                          {paragraph}
                        </blockquote>
                      );
                    }
                    return (
                      <p key={idx} className={styles.paragraph}>{paragraph}</p>
                    );
                  })}
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Mission & Donation Banner */}
        <section className={styles.missionBanner}>
          <div className={`container ${styles.missionContainer}`}>
            <motion.div 
              className={styles.missionContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Alone we can do so little, together we can do so much</h2>
              <p><strong>Our Vision:</strong> To constantly work towards a society where sustainability in terms of water, environment, agricultural practices, child rights, non-discrimination of women would be ensured.</p>
              
              <div className={styles.stats}>
                <div className={styles.statBox}>
                  <h3>$40,456</h3>
                  <span>Recent Donations</span>
                </div>
                <div className={styles.statBox}>
                  <h3>$140,456</h3>
                  <span>Total Fundraised</span>
                </div>
              </div>
              <button className={`btn btn-secondary ${styles.donateBtn}`}>Donate Now</button>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
