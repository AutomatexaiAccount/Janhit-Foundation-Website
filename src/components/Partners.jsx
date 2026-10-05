"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Partners.module.css";
import Image from "next/image";

const partners = [
  { name: "CocaCola", logo: "/cocacola.png" },
  { name: "Mahindra", logo: "/mahindra.png" },
  { name: "CCSU", logo: "/ccsu.png" },
  { name: "Samsung", logo: "/samsung.png" },
  { name: "Royal Netherlands Embassy", logo: "/royale.png" },
  { name: "Nagar Nigam", logo: "/nagar-nigam.png" },
  { name: "Godwin Public School", logo: "/Godwin-Public-School.png" },
  { name: "Childline India Foundation", logo: "/Childline-India-Foundation.png" },
  { name: "Moserbaer", logo: "/Moserbaer.png" },
  { name: "TATA", logo: "/TATA.png" },
  { name: "Ministry of Jal Shakti", logo: "/Ministry-of-Jal-Shakti-Govt.-of-India.png" },
  { name: "FIAN International", logo: "/FIAN-International.png" },
  { name: "UNDP", logo: "/UNDP.png" },
  { name: "Ministry of Women Child Development", logo: "/Ministry-of-Women-Child-Development-Govt.-of-India.png" },
  { name: "India Water Portal", logo: "/Waterportal.png" },
    { name: "CAF", logo: "/CAF.png" },
  { name: "Access to Justice", logo: "/Partners Logo Images/Access to Justic logo.jpg" },
  { name: "Just Rights for Children", logo: "/Partners Logo Images/Just rights for Childrens Logo.png" },
  { name: "Kailash Satyarthi", logo: "/Partners Logo Images/Kailash satayarthi Logo.png" },
];

export default function Partners() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Sponsors</h2>
        </motion.div>
        
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {partners.map((partner, index) => (
              <div key={index} className={styles.slide}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff`;
                  }}
                />
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {partners.map((partner, index) => (
              <div key={`dup-${index}`} className={styles.slide}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
