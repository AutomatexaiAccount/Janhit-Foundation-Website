"use client";

import { useState, useEffect } from "react";
import styles from "./WaterConservation.module.css";
import Image from "next/image";

const galleryImages = [
  "/Water Conservation Images/1-1.jpg",
  "/Water Conservation Images/4-1.jpg",
  "/Water Conservation Images/6-1.jpg",
  "/Water Conservation Images/8-1.jpg",
  "/Water Conservation Images/9-1.jpg",
  "/Water Conservation Images/12-1.jpg",
  "/Water Conservation Images/13-1.jpg",
  "/Water Conservation Images/14-1.jpg"
];

export default function WaterConservationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds slide

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <main className={styles.main}>
      {/* Hero Image Section */}
      <section className={styles.heroImageSection}>
        <div className="container">
          <img src="/Water Conservation Images/14-1.jpg" alt="Water Conservation Banner" className={styles.heroImg} />
        </div>
      </section>

      {/* Hero Text Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>Water Conservation & Awareness</h1>
          <div className={styles.heroLine}></div>
          <p className={styles.heroSubtitle}>
            Our Philosophy
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <p>
                In water-scarce regions of Uttar Pradesh, <strong>Janhit Foundation</strong> adopts an integrated, community-centric approach to water management. We believe that sustainable solutions must simultaneously conserve environmental resources and improve human well-being. Our work addresses the entire water cycle—from source protection and pollution mitigation to ensuring access to safe drinking water and promoting sanitation and hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Programs Section */}
      <section className={styles.programsSection}>
        <div className="container">
          
          <div className={styles.programList}>
            {/* Program 1 */}
            <div className={styles.programCard}>
              <div className={styles.programImage}>
                 <img src="/Water Conservation Images/1-1.jpg" alt="Water Conservation & Resource Management" />
              </div>
              <div className={styles.programInfo}>
                <h3>1. Water Conservation & Resource Management</h3>
                <p>
                  We focus on preserving and revitalizing the natural water systems that communities depend on, countering encroachment and depletion.
                </p>
                <div className={styles.subPoints}>
                  <h4>Key Initiatives & Impact</h4>
                  <ul>
                    <li><strong>a) Revival of Water Bodies:</strong> Impact: Revived over 25 ponds, canals, and rivers in Meerut, Ghaziabad, and Sonepat. Rate: An average of 3 water bodies rejuvenated per year. Purpose: Restored water sources for agricultural, domestic, and ecological use.</li>
                    <li><strong>b) Rainwater Harvesting Promotion:</strong> 1. Implementation of systems in multiple government and private buildings across the region. 2. Recharges depleted groundwater and provides surplus for domestic needs.</li>
                    <li><strong>c) Advocacy & Innovation: The Rain Centre:</strong> Established the second Rain Centre in India in Meerut—a unique “water library” with educational panels, books, and videos to drive public awareness and knowledge.</li>
                    <li><strong>d) Agricultural Water Efficiency:</strong> Promotion of low-cost, water-efficient techniques among farmers to reduce groundwater dependence and enhance sustainability.</li>
                    <li><strong>e) Research & Data for Action:</strong> Conducted comprehensive Water Census studies for the region in 2003 and 2013, providing a critical evidence base for planning and advocacy.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program 2 */}
            <div className={`${styles.programCard} ${styles.reverse}`}>
              <div className={styles.programImage}>
                 <img src="/Water Conservation Images/4-1.jpg" alt="Combating Water Pollution" />
              </div>
              <div className={styles.programInfo}>
                <h3>2. Combating Water Pollution</h3>
                <p>
                  Industrial pollution is a major threat to water security and public health. We work to hold industries accountable and foster collaborative solutions.
                </p>
                <div className={styles.subPoints}>
                  <h4>Our Approach</h4>
                  <ul>
                    <li><strong>Evidence-Based Advocacy:</strong> Documenting pollution impacts on environment and community health to present factual proof of harm.</li>
                    <li><strong>Catalyzing Cooperation:</strong> Facilitating dialogues between industries, communities, and authorities to develop remediation plans.</li>
                    <li><strong>Success Stories:</strong> Multiple instances have led to community-industry partnerships addressing discharge issues and cleaning local water sources.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className={styles.programCard}>
              <div className={styles.programImage}>
                 <img src="/Water Conservation Images/6-1.jpg" alt="Water, Sanitation & Hygiene (WASH)" />
              </div>
              <div className={styles.programInfo}>
                <h3>3. Water, Sanitation & Hygiene (WASH)</h3>
                <p>
                  Ensuring marginalized urban and rural communities have sustained access to safe drinking water and dignified sanitation.
                </p>
                <div className={styles.subPoints}>
                  <h4>Safe Drinking Water Access</h4>
                  <ul>
                    <li>1. Replacing outdated India Mark II handpumps with piped water supply systems.</li>
                    <li>2. Working to eliminate contamination at the source to ensure water safety.</li>
                  </ul>
                  <h4>Sanitation & Health Infrastructure</h4>
                  <ul>
                    <li><strong>1. Toilet Construction:</strong> Built over 500 household toilets in Jhajhar, Siwalkhas, and Panipat, Haryana (supported by Mahindra & Mahindra).</li>
                    <li><strong>2. Menstrual Hygiene Management:</strong> Distributed over 100,000 sanitary pads across Uttar Pradesh and Haryana (supported by Moser Baer).</li>
                    <li><strong>3. Healthcare Access Enhancement:</strong> Improved Maternal & Infant Healthcare in Meerut slums (supported by Sir Ratan Tata Trust). Conducted Awareness Programs on Access to Healthcare in rural, semi-urban, and urban poor locations (supported by the National Health Rural Mission – NHRM).</li>
                    <li><strong>4. Anganwadi Support:</strong> Responsible for supporting local Anganwadis and developing a Model Anganwadi to integrate WASH, nutrition, and early childhood care.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Vision Section */}
      <section className={styles.impactSection}>
        <div className="container">
          <div className={styles.impactContent}>
            <h3>Our Integrated Impact</h3>
            <p>
              By linking water conservation with pollution mitigation and WASH initiatives, we create a holistic framework for water security. Our work ensures that:
            </p>
            <ul>
              <li>1. Environmentally, water bodies are revived and protected.</li>
              <li>2. Socially, communities gain reliable access to clean water and sanitation.</li>
              <li>3. Economically, farmers and households become more water-resilient.</li>
            </ul>

            <h3 style={{marginTop: '40px'}}>A Vision for a Water-Secure Future</h3>
            <p>
              Janhit Foundation continues to pioneer community-driven, evidence-based solutions to Uttar Pradesh’s water challenges. From the grassroots revival of a village pond to advocating for industrial accountability, our mission remains: to secure every community’s right to clean water, safe sanitation, and a healthy environment.
            </p>
            <p className={styles.highlightText}>
              Together, we are building a foundation where water is not a crisis, but a sustained resource for all.
            </p>
          </div>
        </div>
      </section>
    {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Image Gallery</h2>
          
          <div className={styles.sliderContainer}>
            <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={prevSlide}>❮</button>
            <div className={styles.sliderInner}>
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                >
                  <img src={src} alt={`Water Conservation Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={nextSlide}>❯</button>
            
            <div className={styles.sliderDots}>
              {galleryImages.map((_, index) => (
                <button 
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>

          <div className={styles.thumbnailGrid}>
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className={`${styles.thumbnail} ${index === currentSlide ? styles.activeThumb : ""}`}
                onClick={() => setCurrentSlide(index)}
              >
                <img src={src} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
