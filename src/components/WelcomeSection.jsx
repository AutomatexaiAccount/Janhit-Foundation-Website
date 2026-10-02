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
        
        {/* Anita Rana Section */}
        <div className={styles.personSection}>
          <div className={styles.imageContent}>
            <Image 
              src="/mrs-rana.jpeg" 
              alt="Ms. Anita Rana" 
              width={500} 
              height={500} 
              className={styles.personImage} 
              style={{ objectFit: "contain", width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
          
          <div className={styles.aboutContent}>
            <h2 className={styles.title}>
              Meet Ms. Anita Rana: Chief Officer Of Janhit Foundation
            </h2>
            <p className={styles.description}>
              We Introduce Ms. Anita Rana, The Dedicated Chief Officer Of Janhit Foundation. With A Background In Community Development And A Passion For Social Change, Ms. Rana Leads The Foundation's Efforts In Empowering Communities, Advocating For Human Rights, And Driving Sustainable Development Initiatives. Learn More About Ms. Rana's Vision, Leadership, And Commitment To Making A Positive Impact In The Lives Of Others.
            </p>
            <ul className={styles.list}>
              <li>✓ Eco-Friendly Landscaping Solutions</li>
              <li>✓ Child Marriage: The Devastating End Of Childhood</li>
              <li>✓ Water Conservation Systems</li>
            </ul>
            <div className={styles.actions}>
              <a href="/about-us" className={styles.primaryBtn}>More About Us</a>
              <div className={styles.phoneBlock}>
                <span className={styles.phoneIcon}>📞</span>
                <div className={styles.phoneDetails}>
                  <span className={styles.phoneLabel}>Phone</span>
                  <span className={styles.phoneNumber}>+91-0121-4302021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Shri Anil Rana Section */}
        <div className={styles.personSection} style={{ marginTop: '80px' }}>
          <div className={styles.imageContent}>
            <Image 
              src="/mr-anil-rana.jpeg" 
              alt="Dr. Shri Anil Rana" 
              width={500} 
              height={500} 
              className={styles.personImage}
              style={{ objectFit: "contain", width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
          
          <div className={styles.aboutContent}>
            <h2 className={styles.title}>
              Dr. Shri Anil Rana
            </h2>
            <p className={styles.description}>
              Dr. Anil Rana Who Was An Educationist And Taught In The Kurukshetra University After Finishing His PhD From Jawaharlal Nehru University, Delhi. After Doing This For A Couple Of Years, He Realized Serious Problems In The Region Of Western Uttar Pradesh In The Area Of Water & Agriculture, He Decided To Quit His High Paying Job As A Professor And Came Back To His Birthplace That Is Meerut And Founded An Ngo With A Vision To Improve Soil And Water Quality In The Region. That Was How, He Started Working With Farmers And Students In The Region To Promote Organic Farming And Water Conservation For The Region To Have A More Sustainable Living In The Region.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
