"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Awards.module.css";

const awardsList = [
  {
    id: 1,
    title: "Leadership in community initiative for a green economy - UNDP award (2012)",
    description: "Janhit Foundation's Director, Anita Rana, received this prestigious award from the UN Development Programme at the 2012 Delhi Sustainable Development Summit. The award was presented by the UNDP's Country Director, Caitlin Wiesen.",
    image: "/Awards Images/undp.jpg",
  },
  {
    id: 2,
    title: "Valuable work in support of earth day network's campaign - Women And The Green Economy (2012)",
    description: "Janhit Foundation's Director, Anita Rana, was honoured to have her and her organization's work recognized by the Earth Day Network at the Delhi Sustainable Development Summit, 2012.",
    image: "/Awards Images/valuable_work_award.jpg",
  },
  {
    id: 3,
    title: "Green Apple Award (2009)",
    description: "Janhit Foundation has been declared as one of the major winners of the prestigious ‘Green Apple Environment Awards’ for their outstanding contribution and work towards environment issues, by UK based ‘The Green Organisation’.",
    image: "/Awards Images/green_apple.jpg",
  },
  {
    id: 4,
    title: "One World Award (2008)",
    description: "Janhit Foundation had been conferred the prestigious 'One World Award' for its outstanding work in the field of organic agriculture. This important award promotes engagement for a fair and sustainable globalization. It honours outstanding people who show passionate engagement and major accomplishments to make this planet a better place, people who give examples of positive globalization using innovative ideas and dedication, people who make the future worth living.",
    image: "/Awards Images/one_world.jpg",
  },
  {
    id: 5,
    title: "Appreciation Certificate (2008)",
    description: "An Appreciation Certificate was presented to Janhit Foundation by Ms. Lizzette Burgers, WES Chief, UNICEF and the Country Representative of Water Aid, Mr. Depinder Singh Kapur for promoting public awareness and contribution to collective action for sustainable solutions in New Delhi on March 8, 2008. The certificate was awarded on the occasion of World Water Day and the International Year of Sanitation, New Delhi 2008.",
    image: "/Awards Images/appricitaion_award.jpg",
  },
  {
    id: 6,
    title: "Addressing 'Parliamentary Forum On Water' (2008)",
    description: "An Appreciation Certificate was presented to Janhit Foundation by Ms. Lizzette Burgers, WES Chief, UNICEF and the Country Representative of Water Aid, Mr. Depinder Singh Kapur for promoting public awareness and contribution to collective action for sustainable solutions in New Delhi on March 8, 2008. The certificate was awarded on the occasion of World Water Day and the International Year of Sanitation, New Delhi 2008.",
    image: "/Awards Images/PARLIAMENTARY-FORUM-ON-WATER.jpg",
  },
  {
    id: 7,
    title: "'Waterman Of UP' (2008)",
    description: "On the occasion of Ground Water Day on 10th June 2008, the Founder Director of Janhit Foundation, Late Sh. Anil Rana was honoured with the title of ‘Waterman of UP’ and was certificated in recognition for his outstanding contribution by the Government of Uttar Pradesh in a seminar hosted by the Ground Water Department, U.P.",
    image: "/mrs-rana.jpeg", 
  },
  {
    id: 8,
    title: "Nari Shakti Award (2015)",
    description: "On woman’s day – NARI SHAKTI AWARD 2015 by DR. Sarojni Agarwal MNC Meerut and Suman Yadav, member of woman commission U.P.",
    image: "/Awards Images/awards2.jpg",
  },
  {
    id: 9,
    title: "Nari Shakti Award (2016)",
    description: "On woman's Day 2016 - Nari Shakti was awarded by State Minister Kuldeep Ujjual.",
    image: "/Awards Images/awards3.jpg",
  },
  {
    id: 10,
    title: "Woman of Substance",
    description: "Meerut management association awarded Ms. Anita Rana woman of substance from District Magistrate Meerut Mr. Navdeep Ranwa.",
    image: "/Awards Images/awards4.jpg",
  },
  {
    id: 11,
    title: "Malala Award",
    description: "Malala Award was given by U.P govt. and Hindustan Media to encourage women for advocacy of women and social rights.",
    image: "/Awards Images/awards5.jpg",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Awards() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Awards & Achievements</h2>
          <div className={styles.divider}></div>
        </motion.div>
        
        <motion.div 
          className={styles.awardsList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {awardsList.map((award) => (
            <motion.div 
              key={award.id} 
              className={styles.awardCard}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.awardContent}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <p className={styles.awardDescription}>{award.description}</p>
                <Link href="#" className={styles.readMore}>read more...</Link>
              </div>
              <div className={styles.awardImage}>
                <Image 
                  src={award.image} 
                  alt={award.title} 
                  fill
                  style={{ objectFit: "contain", padding: "5px" }} 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
