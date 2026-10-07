
"use client";
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';

export default function ContactUsPage() {
  return (
    <main className={styles.main || "main"}>
      <div style={{ padding: '180px 20px 80px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontSize: '3rem', color: '#DE5824', marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>
            Janhit Foundation operates from our head office in Meerut and our geographical reach covers the district of Meerut in Western Uttar Pradesh, in addition to extending to other neighbouring districts including Muzaffarnagar, Saharanpur, Baghpat, Ghaziabad and Noida.
          </p>
        </motion.div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <motion.div style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Our Head Office</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}><strong>Janhit Foundation</strong></p>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}>771/8, Jagriti Vihar</p>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}>Meerut-250004, Uttar Pradesh, India</p>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}><strong>Phone:</strong> +91-121-2763418, 4004123, 4302021, 0121-4302021</p>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}><strong>Fax:</strong> +91-121-2763418</p>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}><strong>Email:</strong> janhitfoundation@gmail.com</p>
        </motion.div>
        
        <motion.div style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Send us a message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem' }} />
            <textarea placeholder="Your Message" rows="5" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', resize: 'vertical' }}></textarea>
            <button type="button" style={{ padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#DE5824', color: 'white', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>Submit Message</button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
