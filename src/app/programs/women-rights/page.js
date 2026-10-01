"use client";

import { useState, useEffect } from "react";
import styles from "./WomenRights.module.css";
import Image from "next/image";

const galleryImages = [
  "/Women Rights Images/3-2.jpg",
  "/Women Rights Images/4-2.jpg",
  "/Women Rights Images/6-2.jpg",
  "/Women Rights Images/8-2.jpg",
  "/Women Rights Images/9-2.jpg",
  "/Women Rights Images/10-2.jpg",
  "/Women Rights Images/11-2.jpg",
  "/Women Rights Images/12-2.jpg",
  "/Women Rights Images/13-2.jpg",
  "/Women Rights Images/14-2.jpg",
  "/Women Rights Images/16-1.jpg",
  "/Women Rights Images/17.jpg"
];

export default function WomenRightsPage() {
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
          <img src="/Women Rights Images/16-1.jpg" alt="Women Rights Banner" className={styles.heroImg} />
        </div>
      </section>

      {/* Hero Text Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>Women Rights Protection</h1>
          <div className={styles.heroLine}></div>
          <p className={styles.heroSubtitle}>
            Empowering women, ensuring hygiene, and providing critical support across our communities.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <p>
                Women’s independence has been a priority for the <strong>Janhit Foundation</strong>. It is the organization’s firm view that it should take on the role of providing basic comforts to society’s underprivileged women. Since the world has begun to loosen the strict and unrealistic expectations placed on women, the Janhit Foundation has followed suit. We have made it our mission to educate women and help them understand their value so that they can contribute equally to the betterment of the world.
              </p>
              <p>
                Slowly but steadily, the organization grew in stature and size, eventually settling in a two-story office facility with around 25 full-time salaried staff. Our original Director, Anil Rana, died unexpectedly in 2008, and Janhit Foundation has been managed by his wife, Ms. Anita Rana, since then.
              </p>
            </div>
            <div className={styles.introImage}>
              <img src="/Women Rights Images/17.jpg" alt="Women Rights Protection Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Major Programs Section */}
      <section className={styles.programsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Major Programs</h2>
          
          <div className={styles.programList}>
            {/* Program 1 */}
            <div className={styles.programCard}>
              <div className={styles.programImage}>
                 <img src="/Women Rights Images/8-2.jpg" alt="Health Programme" />
              </div>
              <div className={styles.programInfo}>
                <h3>1. Health Programme</h3>
                <p>
                  Because of illiteracy, superstitions pervade people’s minds, preventing them from using toilets and forcing them to defecate in public places. Even after the government’s successful attempt to establish toilets in various locations throughout rural areas, many people still refuse to use them. As a result, these health programmes are held in numerous locations to educate people about the need of hygiene. They are informed about the many illnesses that can infiltrate their houses as a result of these harmful behaviours.
                </p>
              </div>
            </div>

            {/* Program 2 */}
            <div className={`${styles.programCard} ${styles.reverse}`}>
              <div className={styles.programImage}>
                 <img src="/Women Rights Images/11-2.jpg" alt="Sanitary Napkin Distribution" />
              </div>
              <div className={styles.programInfo}>
                <h3>2. Sanitary Napkin Distribution</h3>
                <p>
                  There are still many women who are deprived of fundamental requirements, one of which is menstruation. Menstruation is a typical and monthly bodily process during which a woman sheds blood for a week. This monthly adjustment is a significant advancement that ensures the human-cycle remains in a loop. As a result, the organisation explains the naturalness of this procedure through this programme. We also teach ladies how to treat menstruation in a sanitary manner by not using cotton or fabric during this period. To guarantee a healthy practise, the proper use of sanitary napkins is taught and they are supplied on a regular basis.
                </p>
              </div>
            </div>

            {/* Program 3 */}
            <div className={styles.programCard}>
              <div className={styles.programImage}>
                 <img src="/Women Rights Images/12-2.jpg" alt="Janhit Mahila Helpline" />
              </div>
              <div className={styles.programInfo}>
                <h3>3. Janhit Mahila Helpline</h3>
                <h4>with a Panel of Experts on Women Rights</h4>
                <p>
                  We started with an innovative support for the women for the district in the form of a Women Helpline through our organization which would register calls and problems from the women in distress across the district. The helpline is supplemented with a Panel of Experts with people from various aspects of life like education, law, career counselling, physiologists, social sector etc. who would be referred with the relevant cases and they would provide advisory to the beneficiaries and would try easy and implementable solutions to their problems.
                </p>
                <p>
                  In just about the start of the project, we have been receiving many cases through the helpline as the awareness about it is increasing.
                </p>
                <div className={styles.helplineAlert}>
                  <strong>If you are in Meerut, and are a woman facing any kinds of problems, call the Janhit Mahila Helpline on:</strong>
                  <br/>
                  <a href="tel:0121-4302021" className={styles.helplineNumber}>0121- 4302021</a>
                </div>
              </div>
            </div>
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
                  <img src={src} alt={`Women Rights Gallery ${index + 1}`} />
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
