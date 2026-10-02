"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function OrganicAaharamPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(90deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Organic Aaharam</h1>
          <p className={styles.heroSubtitle}>Promoting chemical-free, natural, and sustainable food choices.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className={styles.paragraph}>
              Janhit Foundation established Meerut City’s first exclusive organic outlet in western UP on June 12, 2007.
            </p>
            <p className={styles.paragraph}>
              This outlet was set-up with the objective of providing a direct link to the local market for our organic farmers, those who have participated in our agricultural projects. This outlet provides financial encouragement to those farmers practicing organic agriculture, whilst providing nutritious, chemical-free food to the local community.
            </p>
            <p className={styles.paragraph}>
              We would like to thank Ford Foundation for their financial support, without which this would not have been possible. Our produce is organically certified by the Uttaranchal State Government, and our stock is currently supplied by over a hundred member farmers. A full stock and price list is available for <a href="https://janhitfoundation.in/oldweb/Organic%20Aaharam%20Brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#15803d', fontWeight: 'bold', textDecoration: 'underline' }}>Download Here</a>. For any further details, please contact our Organic Aaharam.
            </p>
          </div>
          
          <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#f0fdf4', padding: '30px', borderRadius: '15px', border: '1px solid #bbf7d0' }}>
              <h3 style={{ color: '#166534', marginBottom: '20px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📍</span> Outlet Address
              </h3>
              <p style={{ color: '#15803d', fontSize: '1.1rem', marginBottom: '10px', lineHeight: '1.6' }}>
                DC-7, Shastri Nagar, Near Arya Samaj Mandir,<br />
                Meerut (UP), India
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                <a href="tel:+911214023488" style={{ color: '#166534', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', textDecoration: 'none' }}>
                  <span>📞</span> +91-121-4023488
                </a>
                <a href="mailto:organicaaharam@gmail.com" style={{ color: '#166534', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', textDecoration: 'none' }}>
                  <span>📧</span> organicaaharam@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', width: '100%', height: '400px', backgroundColor: '#e2e8f0', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}>
            <img src="/Organic Aharam Images/orangnic_ahram.jpg" alt="Organic Aaharam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
