"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Director.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const faqs = [
  {
    question: "What is the main focus of JANHIT FOUNDATION?",
    answer: "Our main focus is on Environmental & Water Conservation, Sustainable Agriculture, Child Rights Protection, and Women Rights Protection, ensuring holistic grassroots development."
  },
  {
    question: "How can I contribute to JANHIT FOUNDATION's initiatives?",
    answer: "You can get involved by volunteering, participating in our programs, or supporting our projects through donations. Discover more on our Get Involved page."
  },
  {
    question: "What water conservation projects is JANHIT FOUNDATION currently undertaking?",
    answer: "We are actively reviving water bodies, promoting rainwater harvesting, and working with local farmers to implement sustainable irrigation practices in Western UP."
  },
  {
    question: "How does JANHIT FOUNDATION provide potable drinking water to marginalized communities?",
    answer: "We focus on improving soil and water quality, installing community water filters, and educating marginalized communities on safe water practices."
  },
  {
    question: "What child rights protection programs does JANHIT FOUNDATION offer?",
    answer: "We manage the 24X7 Child Helpline 1098 and the Railway Childline in Meerut to rescue, rehabilitate, and protect vulnerable children."
  },
  {
    question: "How does JANHIT FOUNDATION support women's rights?",
    answer: "We provide support, skill development, and income-generation activities to empower women from marginalized communities and renew their agency."
  }
];

export default function Director() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const content = [
    "Following the untimely passing of our founder, Lt. Dr. Anil Rana, in 2008, the mantle of leadership was taken up by his wife, Smt. Anita Rana. Stepping forward from her life as a homemaker, she embraced the foundation’s vision with unwavering passion and dedication. She immersed herself in the ongoing work, mastering existing projects while also expanding the organization's mission to firmly include child rights and women's empowerment as core pillars of both vision and action.",
    "Over the last 13 years, Smt. Anita Rana has carved her own distinct identity as a dynamic and compassionate social worker in the region. Known for her active presence and readiness to support anyone in need, she has become a trusted figure for communities across western Uttar Pradesh. Her relentless commitment has been recognized through over 100 accolades and awards, a testament to her impactful leadership.",
    "Her persistent drive for excellence has been instrumental in securing continued and new partnerships. Under her guidance, numerous institutional and corporate donors have come forward to support vital projects in Water, Sanitation, Health & Hygiene (WASH), and specifically in women's health -- promoting empowerment through awareness and accessible solutions.",
    "Smt. Rana’s deep commitment to child protection is evident in her longstanding role as the Director of Meerut Childline since 2008. Her effective leadership and consistent monitoring led to the trust being extended with the Meerut – Railway Child Help Desk, which she has also directed since 2019.",
    "Looking forward, she recently envisioned and launched a pioneering Women’s Helpline for Meerut. This initiative creates a vital support network, featuring a rich panel of experts from law, education, medicine, psychology, and career counseling to advise and empower women in distress.",
    "Smt. Anita Rana is not merely continuing a legacy; she is dynamically building upon it, ensuring that Dr. Anil Rana’s vision grows deeper roots and reaches new heights in service to the community. Let's Contribute."
  ];

  return (
    <>
      <CustomCursor />
      <Header />
      
      <main className={styles.main}>
        {/* Page Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}></div>
          <div className={`container ${styles.bannerContainer}`}>
            <motion.h1 
              className={styles.bannerTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Director
            </motion.h1>
            <motion.p 
              className={styles.bannerSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Smt. Anita Rana
            </motion.p>
          </div>
        </div>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={`container ${styles.container}`}>
            <div className={styles.grid}>
              
              {/* Left Column: Image */}
              <motion.div 
                className={styles.imageColumn}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src="/mrs-rana.jpeg" 
                    alt="Smt. Anita Rana - Director of Janhit Foundation" 
                    fill 
                    className={styles.image}
                  />
                </div>
                <div className={styles.imageCaption}>
                  <h3>Smt. Anita Rana</h3>
                  <p>Director, Janhit Foundation</p>
                </div>
              </motion.div>

              {/* Right Column: Text Content */}
              <motion.div 
                className={styles.textColumn}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={styles.sectionTitle}>Continuing the Legacy</h2>
                <div className={styles.paragraphs}>
                  {content.map((paragraph, idx) => (
                    <p key={idx} className={styles.paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Mission & Donation Banner */}
        <section className={styles.missionBanner}>
          <div className={`container ${styles.missionContainer}`}>
            <motion.div 
              className={styles.missionContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Alone we can do so little, together we can do so much</h2>
              <p><strong>Our Vision:</strong> To constantly work towards a society where sustainability in terms of water, environment, agricultural practices, child rights, non-discrimination of women would be ensured.</p>
              
              <div className={styles.stats}>
                <div className={styles.statBox}>
                  <h3>$40,456</h3>
                  <span>Recent Donations</span>
                </div>
                <div className={styles.statBox}>
                  <h3>$140,456</h3>
                  <span>Total Fundraised</span>
                </div>
              </div>
              <button className={`btn btn-secondary ${styles.donateBtn}`}>Donate Now</button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={`container ${styles.faqContainer}`}>
            <motion.div 
              className={styles.faqImageColumn}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.faqImageWrapper}>
                <Image src="/Who We Are Images/faq.jpg" alt="FAQ" fill className={styles.faqImage} />
              </div>
            </motion.div>
            
            <div className={styles.faqContentColumn}>
              <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
              <div className={styles.accordion}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.accordionItem}>
                    <button 
                      className={styles.accordionHeader} 
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span className={openFaq === index ? styles.iconOpen : styles.iconClose}>
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className={styles.accordionBody}
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
