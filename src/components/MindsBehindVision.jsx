"use client";

import styles from "./MindsBehindVision.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MindsBehindVision() {
  const [isAnitaExpanded, setIsAnitaExpanded] = useState(false);
  const [isAnilExpanded, setIsAnilExpanded] = useState(false);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.personContainer}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.name}>Smt. Anita Rana - Director</h3>
            <p>
              Anita Rana stepped into as the head of the organization on the untimely demise of the founder of the organization Lt. Dr. Anil Rana in 2008. She came out as a housewife and with absolute passion and dedication towards the vision with which the organization was set up, she almost trained herself with the ongoing projects and also build the child rights and the women rights themes of the organization both in terms of the vision and the programs.
            </p>
            <AnimatePresence>
              {isAnitaExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <p>
                    She has crafted her own persona as a Social worker in the region who is always active and ready to help and support anyone in need in any region that approaches her with any kinds of problems. She has also been added over 100 accolades and awards in the last 13 years of her as the Head of the organization. It was only due to her persistence in implementing better projects that many institutional and corporate donors came forward and supported various projects in the region in the themes of Water, Sanitation, Health & Hygiene and Health for women in order to promote women empowerment through awareness and adopting easy solutions to their problems.
                  </p>
                  <p>
                    She has also been serving as the Director for Meerut Childline since 2008 and it was due to regular monitoring and satisfactory work that we were awarded another Childline in Meerut - Railway Child Helpdesk and she has been serving as the Director since 2019. Further to this she recently envisioned a program to empower the women across the city of Meerut by initiating a Women Helpline and a rich panel having members from law, education, social sector, medicine, psychologist, career counsellors etc. to advise the women in case they are in any kind of distress.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              className={styles.readMoreBtn} 
              onClick={() => setIsAnitaExpanded(!isAnitaExpanded)}
            >
              {isAnitaExpanded ? "Read Less" : "Read More"}
            </button>
          </motion.div>
        </div>

        <div className={styles.personContainer}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.name}>Dr. Anil Rana</h3>
            <p>
              Dr. Anil Rana who was an educationist and taught in the Kurukshetra University after finishing his PhD from Jawaharlal Nehru University, Delhi. After doing this for a couple of years, he realized serious problems in the region of western Uttar Pradesh in the area of Water & Agriculture, he decided to quit his high paying job as a professor and came back to his birthplace that is Meerut and founded an Ngo with a vision to improve soil and water quality in the region. That was how, he started working with farmers and students in the region to promote organic farming and water conservation for the region to have a more sustainable living in the region.
            </p>
            <AnimatePresence>
              {isAnilExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <p>
                    With his leadership, the organization could bring in multiple innovative projects supported by many institutional donors like Sir Ratan Tata Trust, Oxfam India, IGSSS, CAF India, Ford Foundation, Coca Cola India, and various national corporates with small to big support for the betterment of the region. His vision behind the organization could be gathered from one of his statements.
                  </p>
                  <blockquote className={styles.quote}>
                    "To make my life's trip more interesting, I picked the intruded path, and when I returned to my objective, I saw a swarm of individuals who were all supporting the same social cause."
                  </blockquote>
                  <p>
                    Unfortunately Dr. Rana passed away untimely in 2008 and his wife took on as the head of the organization and is carrying forward his vision and name in the form of the projects being implemented by the project.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              className={styles.readMoreBtn} 
              onClick={() => setIsAnilExpanded(!isAnilExpanded)}
            >
              {isAnilExpanded ? "Read Less" : "Read More"}
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
