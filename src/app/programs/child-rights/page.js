"use client";

import { useState, useEffect } from "react";
import styles from "./ChildRights.module.css";
import Image from "next/image";

// Placeholders for the images to be added by the user
const galleryImages = [
  "/Child Right Images/3.jpg",
  "/Child Right Images/7.jpg",
  "/Child Right Images/10.jpg",
  "/Child Right Images/13.jpg",
  "/Child Right Images/15.jpg",
  "/Child Right Images/18.jpg",
  "/Child Right Images/19.jpg",
  "/Child Right Images/20.jpg",
  "/Child Right Images/21.jpg",
    "/Child Right Images/22.jpg",
  "/Child Right Images/1.jpeg",
  "/Child Right Images/WhatsApp Image 2026-08-18 at 4.34.07 PM (1).jpeg",
  "/Child Right Images/WhatsApp Image 2026-08-18 at 4.34.07 PM.jpeg",
];

export default function ChildRightsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000); 

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
          {/* Placeholder for Hero Image */}
          <img src="/Child Right Images/21.jpg" alt="Child Rights Protection Banner" className={styles.heroImg} />
        </div>
      </section>

      {/* Hero Text Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>Child Rights Protection</h1>
          <div className={styles.heroLine}></div>
          <p className={styles.heroSubtitle}>
            CHILDLINE: India’s first 24-hour, toll-free emergency phone outreach programme for children in need of care and protection.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <p>
                <strong>CHILDLINE</strong> is India’s first 24-hour, toll-free emergency phone outreach programme for children in need of care and protection, connecting them to long-term care and rehabilitation facilities. Any youngster or concerned adult can dial 1098 at any time of day or night to reach the CHILDLINE service.
              </p>
              <p>
                Meerut became the 73rd city to receive the service in August 2007, with the Janhit Foundation in charge of its deployment. The child or adult phoning on their behalf can access a variety of services by dialling 1098. We take a child-centered approach to development, in which children are active and leading participants in their own growth.
              </p>
              <p>
                We were accepted into the Childline national network, which is a 24-hour helpline run by the Ministry of Women and Child Development and available in over 100 cities across India. We’ve been running the Meerut Childline since 2007, and it wasn’t until 2020 that we were also assigned the job of looking after the Meerut Railway Childline. We receive over ten calls every day on average from children in distress from all over town as a result of this effort.
              </p>
              <p>
                Aside from that, we’ve been offering assistance to children from marginalised communities in the form of non-formal education, stationery, and school uniforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Programs Section */}
      <section className={styles.programsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Childline Programmes</h2>
          
          <div className={styles.programList}>
            {/* Program 1 */}
            <div className={styles.programCard}>
              <div className={styles.programImage}>
                 <img src="/Child Right Images/3.jpg" alt="Open House" />
              </div>
              <div className={styles.programInfo}>
                <h3>1. Open House</h3>
                <p>
                  Every month, Meerut CHILDLINE hosts an open house to raise awareness about the toll-free service and encourage local residents to come forward and take action to protect the rights of underprivileged children. The service hosted an open house at several sites throughout the city, including railway stations and bus stops. Singing songs, skits explaining the service, playing the 1098 theme music, and other activities are all performed by street children at an open house.
                </p>
              </div>
            </div>

            {/* Program 2 */}
            <div className={`${styles.programCard} ${styles.reverse}`}>
              <div className={styles.programImage}>
                 <img src="/Child Right Images/7.jpg" alt="Canopy" />
              </div>
              <div className={styles.programInfo}>
                <h3>2. Canopy</h3>
                <p>
                  Every month, Meerut CHILDLINE hosts an open house to raise awareness about the toll-free service and encourage local residents to come forward and take action to protect the rights of underprivileged children. The service hosted an open house at several sites throughout the city, including railway stations and bus stops. Singing songs, skits explaining the service, playing the 1098 theme music, and other activities are all performed by street children at an open house.
                </p>
              </div>
            </div>

            {/* Program 3 */}
            <div className={styles.programCard}>
              <div className={styles.programImage}>
                 <img src="/Child Right Images/10.jpg" alt="Vocational Trainings" />
              </div>
              <div className={styles.programInfo}>
                <h3>3. Vocational Trainings</h3>
                <p>
                  The Meerut CHILDLINE team has gone above and beyond to provide vocational training to slum children in order to provide them with opportunities to make a life. The team has started sewing workshops for eight girls from underserved neighbourhoods who are being trained for free. Computer classes are also being held, in which six females are learning about information technology. Driving lessons have also been started for boys from the adjacent slums, so that by the time they reach the age of 18, they would be self-sufficient capable of sustaining a living.
                </p>
                <p>
                  The management team also teaches the children a variety of crafts, such as candle making, card making, artificial flower manufacturing, and making décor things out of waste materials.
                </p>
              </div>
            </div>

            {/* Program 4 */}
            <div className={`${styles.programCard} ${styles.reverse}`}>
              <div className={styles.programImage}>
                 <img src="/Child Right Images/13.jpg" alt="Outreach" />
              </div>
              <div className={styles.programInfo}>
                <h3>4. Outreach</h3>
                <p>
                  The CHILDLINE team promotes the toll-free service by conducting outreach throughout the community. A special emphasis is placed on contacting all phone booth owners and telling them about the service so that they may help the programme succeed by spreading the word and allowing youngsters in need to use it for free.
                </p>
              </div>
            </div>

            {/* Program 5 */}
            <div className={styles.programCard}>
              <div className={styles.programImage}>
                 <img src="/Child Right Images/15.jpg" alt="Rescue of Child Labourers" />
              </div>
              <div className={styles.programInfo}>
                <h3>5. Rescue of Child Labourers</h3>
                <p>
                  Meerut CHILDLINE, in collaboration with the Meerut Police Department, rescued 80 children working as labourers on April 19, 2010 as part of its ‘Operation Masoom’ campaign.
                </p>
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
                  <img src={src} alt={`Child Rights Gallery ${index + 1}`} />
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
