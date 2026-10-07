
"use client";
import { motion } from 'framer-motion';

export default function OrganicAaharamPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', backgroundColor: '#f0fff4', textAlign: 'center' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', color: '#38a169', marginBottom: '20px' }}>Organic Aaharam</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>Meerut City’s first exclusive organic outlet in western UP, established on June 12, 2007.</motion.p>
      </div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
            This outlet was set-up with the objective of providing a direct link to the local market for our organic farmers, those who have participated in our agricultural projects. This outlet provides financial encouragement to those farmers practicing organic agriculture, whilst providing nutritious, chemical-free food to the local community.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '40px' }}>
            We would like to thank Ford Foundation for their financial support, without which this would not have been possible. Our produce is organically certified by the Uttaranchal State Government, and our stock is currently supplied by over a hundred member farmers.
          </p>
          
          <div style={{ backgroundColor: '#f7fafc', padding: '30px', borderRadius: '15px', borderLeft: '6px solid #38a169' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#2d3748', marginBottom: '20px' }}>Outlet Address</h2>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}>DC-7, Shastri Nagar, Near Arya Samaj Mandir,</p>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}>Meerut (UP), India</p>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '10px' }}><strong>Phone:</strong> +91-121-4023488</p>
            <p style={{ fontSize: '1.2rem', color: '#4a5568' }}><strong>Email:</strong> organicaaharam@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
