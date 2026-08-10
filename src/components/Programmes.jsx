"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Programmes.module.css";

const programmes = [
  {
    id: 1,
    title: "Water & Natural Resources",
    description: "Ensuring sustainable solutions through groundwater recharge, restoration of water bodies, and community water management.",
    image: "/rainwater-harvesting.png",
  },
  {
    id: 2,
    title: "Sustainable Agriculture",
    description: "Promoting organic agriculture through engagement with 2,000+ farmers in Meerut district, providing organic inputs, training, and soil testing across 210 villages, alongside market linkages and high-value crops.",
    image: "/healthy-food.png",
  },
  {
    id: 3,
    title: "Environment & Biodiversity",
    description: "Protecting local ecosystems, enhancing green cover, and promoting biodiversity conservation through community action.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Child Rights & Protection",
    description: "Operating 24/7 child helplines and working tirelessly to rescue children from labor, abuse, and marginalization.",
    image: "/child-education.png",
  },
  {
    id: 5,
    title: "Women's Rights & Empowerment",
    description: "Empowering women through dedicated helplines, legal aid, education, and robust social sector support.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Sustainable Livelihoods",
    description: "Building capacity and fostering income generation activities to ensure long-term economic resilience for marginalized groups.",
    image: "/bg-water.png",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Programmes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Our Key Focus</span>
          <h2 className={styles.title}>Key Programmes</h2>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programmes.map(programme => (
            <motion.div 
              key={programme.id} 
              className={styles.card} 
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={programme.image} 
                  alt={programme.title} 
                  className={styles.cardImage}
                />
                <div className={styles.overlay}>
                  <Link href="#" className="btn btn-secondary">Learn More</Link>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{programme.title}</h3>
                <p className={styles.cardDescription}>{programme.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
