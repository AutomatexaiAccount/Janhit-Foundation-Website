"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImpactDashboard.module.css";

import CountUpAnimation from "./CountUpAnimation";

const impactData = {
  water: [
    { label: "Water bodies revived", value: "25+" },
    { label: "Rainwater harvesting systems", value: "XXX" },
    { label: "Villages reached", value: "XXX" }
  ],
  agriculture: [
    { label: "Farmers engaged", value: "2,000+" },
    { label: "Villages covered for soil testing", value: "210" },
    { label: "Acres under sustainable cultivation", value: "XXX" }
  ],
  children: [
    { label: "Children supported", value: "XX,XXX+" },
    { label: "Rescues / interventions", value: "XXX" },
    { label: "Family restorations", value: "XXX" }
  ],
  women: [
    { label: "Women reached", value: "XXX" },
    { label: "Women supported through helpline", value: "XXX" },
    { label: "Livelihoods created", value: "XXX" }
  ]
};

const tabs = [
  { id: "water", label: "Water" },
  { id: "agriculture", label: "Agriculture" },
  { id: "children", label: "Child Protection" },
  { id: "women", label: "Women" }
];

export default function ImpactDashboard() {
  const [activeTab, setActiveTab] = useState("water");

  return (
    <section className={styles.section} id="dashboard">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Verified Outcomes</span>
          <h2 className={styles.title}>Our Work in Numbers</h2>
          <p className={styles.description}>An interactive dashboard of our grassroots impact.</p>
        </div>

        <div className={styles.dashboardContainer}>
          <div className={styles.tabsList}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.tabContentArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={styles.metricsGrid}
              >
                {impactData[activeTab].map((metric, index) => (
                  <div key={index} className={styles.metricCard}>
                    <h3 className={styles.metricValue}>
                      <CountUpAnimation value={metric.value} duration={2} />
                    </h3>
                    <p className={styles.metricLabel}>{metric.label}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
