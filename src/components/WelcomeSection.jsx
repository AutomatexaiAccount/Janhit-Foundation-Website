"use client";

import styles from "./WelcomeSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
      <div className={`container ${styles.container}`}>
        <div className={styles.charitySection}>
          <div className={styles.charityContent}>
            <div className={styles.badge}>
              <i className="icon-donation"></i> Start donating poor people
            </div>
            <h2 className={styles.title}>
              Charity With Difference
            </h2>
            <p className={styles.description}>
              Join our monthly giving program to provide consistent support to our initiatives. Regular contributions, no matter the size, help us plan and sustain long-term projects.
            </p>
          </div>
          
          <div className={styles.aboutContent}>
            <h2 className={styles.title}>
              Meet Ms. Anita Rana: Chief Officer of Janhit Foundation
            </h2>
            <p className={styles.description}>
              We introduce Ms. Anita Rana, the dedicated Chief Officer of Janhit Foundation. With a background in community development and a passion for social change, Ms. Rana leads the foundation’s efforts in empowering communities, advocating for human rights, and driving sustainable development initiatives. Learn more about Ms. Rana’s vision, leadership, and commitment to making a positive impact in the lives of others.
            </p>
            <ul className={styles.list}>
              <li>✓ Eco-Friendly Landscaping Solutions</li>
              <li>✓ Child Marriage: The Devastating End of Childhood</li>
              <li>✓ Water Conservation Systems</li>
            </ul>
            <div className={styles.actions}>
              <a href="/about-us" className="btn btn-primary">More About Us</a>
              <div className={styles.phone}>
                <span>📞 +91-0121-4302021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
