"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Partners.module.css";

const partners = [
  { name: "UNDP", logo: "/logos/undp.png" },
  { name: "Ministry of Environment", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" },
  { name: "World Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/The_World_Bank_logo.svg" },
  { name: "IFOAM", logo: "/logos/ifoam.png" },
  { name: "Sir Ratan Tata Trust", logo: "/logos/sir_ratan_tata_trust.png" },
  { name: "Earth Day Network", logo: "/logos/earth_day_network.png" },
  { name: "Global Water Partnership", logo: "/logos/global_water_partnership.png" },
  { name: "ICCOA", logo: "/logos/iccoa.png" },
  { name: "WaterAid", logo: "/logos/wateraid.png" },
  { name: "Sealed Air", logo: "/logos/sealed_air.png" },
  { name: "Mahindra Rise", logo: "/logos/mahindra_rise.png" },
  { name: "ADR", logo: "/logos/adr.png" },
  { name: "Childline 1098", logo: "https://ui-avatars.com/api/?name=Childline+1098&background=random&color=fff" },
  { name: "Oxfam", logo: "/logos/oxfam.png" },
  { name: "Adobe", logo: "/logos/adobe.png" },
  { name: "Global Greengrants Fund", logo: "/logos/global_greengrants_fund.png" },
  { name: "CSE", logo: "/logos/cse.png" },
  { name: "FAO", logo: "/logos/fao.png" },
  { name: "Blacksmith Institute", logo: "/logos/blacksmith_institute.png" },
  { name: "FIAN", logo: "/logos/fian.png" },
  { name: "CAF India", logo: "/logos/caf_india.png" },
  { name: "Institute of International Education", logo: "/logos/institute_of_international_education.png" },
  { name: "Ford Foundation", logo: "/logos/ford_foundation.png" },
  { name: "Coca-Cola India", logo: "/logos/coca_cola_india.png" },
  { name: "Royal Netherlands Embassy", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
  { name: "OneWorld South Asia", logo: "/logos/oneworld_south_asia.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

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
          <h2 className={styles.title}>Our Partners & Donors</h2>
          <p className={styles.description}>We are proud to work alongside these esteemed organizations to drive change.</p>
        </motion.div>
        
        <motion.div 
          className={styles.logoGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div key={index} className={styles.logoCard} variants={cardVariants}>
              <div className={styles.logoImageWrapper}>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className={styles.partnerLogoImg} 
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff`;
                  }}
                />
              </div>
              <span className={styles.partnerName}>{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
