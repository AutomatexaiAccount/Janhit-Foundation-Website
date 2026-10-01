"use client";

import styles from "./SustainableAgriculture.module.css";
import Image from "next/image";

export default function SustainableAgriculturePage() {
  return (
    <main className={styles.main}>
      {/* Top Image Section (No cropping, no text overlay) */}
      <section className={styles.heroImageSection}>
        <div className="container">
          <img src="/Sustanble Devlopment Images/banner.jpg" alt="Sustainable Agriculture Banner" className={styles.heroImg} />
        </div>
      </section>

      {/* Hero Text Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>Sustainable Agriculture</h1>
          <div className={styles.heroLine}></div>
          <p className={styles.heroSubtitle}>
            Our Commitment: For over a decade, the Janhit Foundation has championed organic and natural farming as a viable, sustainable, and health-conscious alternative to chemical-intensive agriculture. We work to transform farming practices—protecting the environment, enhancing farmer livelihoods, and ensuring safe, nutritious food for communities.
          </p>
        </div>
      </section>

      {/* Problem vs Promise Section */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <div className={styles.comparisonGrid}>
            <div className={styles.problemCard}>
              <h2>The Problem with Conventional Farming</h2>
              <p>Heavy reliance on toxic agrochemicals has led to a cascade of harm:</p>
              <ul>
                <li>Pollution of food chains and water sources</li>
                <li>Damage to livestock, wildlife, and soil health</li>
                <li>Disruption of natural ecosystems</li>
                <li>Contamination of the very crops these chemicals were meant to protect</li>
              </ul>
            </div>
            
            <div className={styles.promiseCard}>
              <h2>The Promise of Organic Farming</h2>
              <p>Organic practices restore and enrich soil quality year after year, leading to:</p>
              <ul>
                <li>Increased long-term yield and crop potency</li>
                <li>Enhanced nutritional value of produce</li>
                <li>Lower input costs and higher income for farmers</li>
                <li>Protection of subsurface water, biodiversity, and consumer health</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work with Farmers */}
      <section className={styles.ourWorkSection}>
        <div className="container">
          <div className={styles.workContent}>
            <h2>Our Work with Farmers</h2>
            <p className={styles.workIntro}>
              We partner with small and marginalized farmers across Western Uttar Pradesh, with a special focus on sugarcane cultivation—the region’s primary crop.
            </p>
            
            <div className={styles.midImageWrapper}>
              <img src="/Sustanble Devlopment Images/image-1.jpeg" alt="Farmers working in fields" className={styles.midImage} />
            </div>

            <div className={styles.focusAreas}>
              <h3>Key Focus Areas:</h3>
              <div className={styles.focusGrid}>
                <div className={styles.focusItem}>
                  <span className={styles.focusNumber}>1</span>
                  <p>Reducing the use of toxic Persistent Organic Pollutants (POPs)</p>
                </div>
                <div className={styles.focusItem}>
                  <span className={styles.focusNumber}>2</span>
                  <p>Introducing innovative, low-cost organic techniques</p>
                </div>
                <div className={styles.focusItem}>
                  <span className={styles.focusNumber}>3</span>
                  <p>Providing training, inputs, and market linkages to ensure economic viability</p>
                </div>
                <div className={styles.focusItem}>
                  <span className={styles.focusNumber}>4</span>
                  <p>Currently engaging with over <strong>2000 farmers</strong> in Meerut district</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className={styles.initiativesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Impact Initiatives</h2>
          
          <div className={styles.initiativesLayout}>
             <div className={styles.initiativesImageSide}>
                <img src="/Sustanble Devlopment Images/Assam-45.jpg" alt="Organic Farming Initiatives" className={styles.sideImage} />
             </div>
             <div className={styles.initiativeTimeline}>
                {/* Initiative 1 */}
                <div className={styles.initiativeCard}>
                  <div className={styles.initHeader}>
                    <span className={styles.initNumber}>1</span>
                    <h3>From Seed to Market</h3>
                  </div>
                  <div className={styles.initBody}>
                    <p><strong>Supported by:</strong> Ford Foundation.</p>
                    <p><strong>Duration:</strong> 3-year comprehensive project.</p>
                    <p><strong>Scale:</strong> 400 marginalized farmers.</p>
                    <p><strong>End-to-end support:</strong> Provided organic seeds, regular training, compost pits, Jeevamrit preparation, organic certification, and direct market access for produce.</p>
                  </div>
                </div>

                {/* Initiative 2 */}
                <div className={styles.initiativeCard}>
                  <div className={styles.initHeader}>
                    <span className={styles.initNumber}>2</span>
                    <h3>Phasing Out Harmful Chemicals</h3>
                  </div>
                  <div className={styles.initBody}>
                    <p><strong>Initiative:</strong> Campaign to demotivate use of Lindane and Endosulphan.</p>
                    <p><strong>Solution:</strong> Introduced farmers to LADEP organic manure as a safe, effective alternative.</p>
                    <p><strong>Impact:</strong> Reduced dependency on chemicals that harm health, soil, and environment.</p>
                  </div>
                </div>

                {/* Initiative 3 */}
                <div className={styles.initiativeCard}>
                  <div className={styles.initHeader}>
                    <span className={styles.initNumber}>3</span>
                    <h3>Soil Health Management</h3>
                  </div>
                  <div className={styles.initBody}>
                    <p>Conducted scientific soil testing across 210 villages in Meerut.</p>
                    <p>Used results to start evidence-based dialogue with farmers, encouraging shift to sustainable practices tailored to their land’s needs.</p>
                  </div>
                </div>

                {/* Initiative 4 */}
                <div className={styles.initiativeCard}>
                  <div className={styles.initHeader}>
                    <span className={styles.initNumber}>4</span>
                    <h3>Promoting High-Value Organic Crops</h3>
                  </div>
                  <div className={styles.initBody}>
                    <p>Encouraged cultivation of Lemongrass, Citronella, and Neem.</p>
                    <p>Provided market linkages to ensure profitable returns.</p>
                    <p>Enabled multifold income generation for participating farmers.</p>
                  </div>
                </div>

                {/* Initiative 5 */}
                <div className={styles.initiativeCard}>
                  <div className={styles.initHeader}>
                    <span className={styles.initNumber}>5</span>
                    <h3>Biodiversity & Education</h3>
                  </div>
                  <div className={styles.initBody}>
                    <p>Established Biodiversity Herbal Gardens in:</p>
                    <ul>
                      <li>SD Public School, Muzaffarnagar</li>
                      <li>Godwin Public School, Meerut</li>
                    </ul>
                    <p>These gardens serve as living laboratories to educate students and communities about medicinal plants, conservation, and organic growing.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className={styles.holisticSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Holistic Approach</h2>
          <p className={styles.holisticIntro}>We don’t just promote organic farming—we build farmer resilience through:</p>
          <div className={styles.holisticGrid}>
            <div className={styles.holisticItem}>
              <h4>1. Knowledge</h4>
              <p>Knowledge transfer and hands-on training</p>
            </div>
            <div className={styles.holisticItem}>
              <h4>2. Resources</h4>
              <p>Resource support from seeds to compost</p>
            </div>
            <div className={styles.holisticItem}>
              <h4>3. Markets</h4>
              <p>Market integration to ensure profitability</p>
            </div>
            <div className={styles.holisticItem}>
              <h4>4. Stewardship</h4>
              <p>Environmental stewardship to safeguard soil, water, and biodiversity for future generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Quote Section */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionContent}>
            <h2>A Vision for the Future</h2>
            <img src="/Sustanble Devlopment Images/banner-2.jpg" alt="Future of farming" className={styles.visionImg} />
            <p>
              Janhit Foundation continues to lead the transition toward ecologically balanced, economically rewarding agriculture. By empowering farmers with sustainable tools and knowledge, we are sowing the seeds for a healthier ecosystem, thriving communities, and a toxin-free food system.
            </p>
            <div className={styles.quoteBlock}>
              <p>” Growing food in harmony with nature—for the farmer, the consumer, and the planet. “</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
