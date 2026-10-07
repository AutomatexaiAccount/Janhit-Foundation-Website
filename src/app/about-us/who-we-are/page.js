"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhoWeAre.module.css";
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
    question: "How does JANHIT FOUNDATION provide potable drinking water?",
    answer: "We focus on improving soil and water quality, installing community water filters, and educating marginalized communities on safe water practices."
  },
  {
    question: "What child rights protection programs do you offer?",
    answer: "We manage the 24X7 Child Helpline 1098 and the Railway Childline in Meerut to rescue, rehabilitate, and protect vulnerable children."
  },
  {
    question: "How does JANHIT FOUNDATION support women's rights?",
    answer: "We provide support, skill development, and income-generation activities to empower women from marginalized communities and renew their agency."
  }
];

export default function WhoWeAre() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const images = [
    "/Who We Are Images/Janhit Image 1.jpeg",
    "/Who We Are Images/Janhit Image 2.jpeg",
    "/Who We Are Images/Janhit Image 4.jpeg",
  ];

  const content = [
    "Founded in 1998 by Dr. Anil Rana, an educationist by profession but an environmentalist at heart to work for Environmental & Water Conservation in Western Uttar Pradesh. Currently working extensively on Water Conservation, Sustainable Agriculture, Environmental Conservation, Child Rights Protection & Women Rights Protection along with Income Generation Activities for women from marginalized communities. Awareness in all the above-mentioned themes has always gone hands in hands with our work on the ground since our inception.",
    "We have also been given the responsibility to manage the 24X7 Child Helpline 1098 on behalf of Ministry of Women & Child Development, Govt. of India in Meerut and with our excellent work record we were also awarded to run the Railway Child Help Desk (Railway Childline) in Meerut in 2019, we became an obvious choice.",
    "Registered as a non-profit under Societies Registration Act, 1860 with tax exemptions from Income Tax Department under Section 12A & 80G Also registered under Foreign Contribution Regulation Act, 2010 and has had long-term partnered with bi-laterals, multi-laterals and many corporate donors in the past and has implemented multiple projects successfully.",
    "We welcome you to Janhit Foundation and be a part of the impactful work that we are doing everyday to bring sustainable change in the lives that we touch."
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
              Who We Are
            </motion.h1>
            <motion.p 
              className={styles.bannerSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Minds Behind the Vision: Smt. Anita Rana - Director
            </motion.p>
          </div>
        </div>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={`container ${styles.container}`}>
            <div className={styles.grid}>
              
              {/* Left Column: Text Content */}
              <motion.div 
                className={styles.textColumn}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={styles.sectionTitle}>Our Genesis & Vision</h2>
                <div className={styles.paragraphs}>
                  {content.map((paragraph, idx) => (
                    <p key={idx} className={styles.paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Image Gallery */}
              <motion.div 
                className={styles.imageColumn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
              >
                {images.map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    className={`${styles.imageWrapper} ${idx === 0 ? styles.featuredImage : ''}`}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                  >
                    <Image 
                      src={img} 
                      alt={`Janhit Foundation Activity ${idx + 1}`} 
                      fill 
                      className={styles.image}
                    />
                  </motion.div>
                ))}
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
