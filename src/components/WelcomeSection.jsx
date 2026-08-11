"use client";

import styles from "./WelcomeSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WelcomeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className={styles.welcomeSection} ref={ref}>
      {/* Parallax Background */}
      <motion.div 
        className={styles.backgroundLayer} 
        style={{ y: yBg }}
      />
      
      {/* Soft overlay */}
      <div className={styles.overlayLayer}></div>

      {/* Floating Particles */}
      <div className={styles.particlesContainer}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{ y: "120vh", x: Math.random() * 100 + "vw", opacity: 0 }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
              x: `calc(${Math.random() * 100}vw + ${Math.random() * 50 - 25}px)`
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ opacity: opacityText }}
        >
          <span className={styles.badge}>Since 1998</span>
          <h2 className={styles.title}>
            Building Sustainable Communities.<br/>
            <span className={styles.shimmerText}>Creating Measurable Impact.</span>
          </h2>
        </motion.div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity: opacityText }}
          >
            <p className={styles.heroDescription}>
              Since 1998, Janhit Foundation has worked with communities across Western Uttar Pradesh and NCR to strengthen water security, promote sustainable agriculture, protect children, empower women and build resilient livelihoods.
            </p>
            <div className={styles.heroActions}>
              <a href="#impact" className={styles.primaryBtn}>
                Explore Our Impact
                <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/partner-with-us" className={styles.secondaryBtn}>Partner With Us</a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className={styles.mouse}>
          <motion.div 
            className={styles.wheel}
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
