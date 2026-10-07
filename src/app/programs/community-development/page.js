
"use client";
import { motion } from 'framer-motion';

export default function CommunityDevelopmentPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', background: 'linear-gradient(135deg, #fffaf0, #dd6b20)', textAlign: 'center', color: '#fff' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', marginBottom: '20px' }}>Community Development</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Building resilient, inclusive, and empowered rural communities.</motion.p>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Empowering the Grassroots</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>Our holistic approach to community development focuses on uplifting marginalized populations including farmers, women, and vulnerable children across Western Uttar Pradesh and NCR.</p>
          <ul style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '40px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Social Inclusion:</strong> Ensuring that marginalized communities have access to their basic rights and government schemes.</li>
            <li style={{ marginBottom: '10px' }}><strong>Poverty Reduction:</strong> Implementing livelihood generation programs, skill development, and vocational training.</li>
            <li style={{ marginBottom: '10px' }}><strong>Sustainable Livelihoods:</strong> Supporting farmers with organic agriculture training and helping women establish micro-enterprises.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
