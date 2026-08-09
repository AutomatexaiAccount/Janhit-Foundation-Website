"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
        >
          <div className={styles.container}>
            {/* The animated central element */}
            <div className={styles.animationCenter}>
              {/* Vertical line that transforms into a circle */}
              <motion.div
                className={styles.shape}
                initial={{ height: 0, width: "4px", borderRadius: "2px" }}
                animate={{ 
                  height: ["0px", "80px", "100px", "100px"], 
                  width: ["4px", "4px", "100px", "100px"],
                  borderRadius: ["2px", "2px", "50px", "50px"]
                }}
                transition={{ 
                  duration: 1.5, 
                  times: [0, 0.4, 0.8, 1],
                  ease: "easeInOut" 
                }}
              >
                {/* The Hand and Heart Icon inside the circle */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--black)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.icon}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5 9.04 7.96a2.14 2.14 0 0 0 0 3.03l.03.03a2.14 2.14 0 0 0 3.03 0l.03-.03a2.14 2.14 0 0 0 0-3.03L12 5Z" fill="var(--black)" />
                  <path d="M15 15h.01" />
                  <path d="M11 15h.01" />
                  <path d="M8 15h.01" />
                  <path d="M5 15h.01" />
                  <path d="M18 15h.01" />
                  <path d="M2 18h20" />
                  <path d="M12 21v-3" />
                </motion.svg>
              </motion.div>
            </div>

            {/* Text that fades in */}
            <motion.div
              className={styles.textContainer}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
            >
              <span className={styles.janhit}>Janhit </span>
              <span className={styles.foundation}>Foundation</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
