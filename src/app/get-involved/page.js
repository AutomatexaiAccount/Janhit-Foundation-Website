
"use client";
import { motion } from 'framer-motion';

export default function GetInvolvedPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', background: 'linear-gradient(135deg, #1a365d, #DE5824)', textAlign: 'center', color: 'white' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800' }}>Get Involved</h1>
          <p style={{ fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
            "Alone we can do so little; together we can do so much."
          </p>
        </motion.div>
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '180px 20px 80px' }}>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '40px', textAlign: 'center' }}>
          Janhit Foundation recognises that the complex issues confronting modern India can only be addressed when the government, civic society, people, and businesses join forces and collaborate. We can make a genuine difference in the lives of millions of people in need if we work together.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <motion.div style={{ padding: '40px', backgroundColor: '#f7fafc', borderRadius: '20px', borderTop: '5px solid #DE5824' }} whileHover={{ y: -10 }}>
            <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Volunteering</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '20px', lineHeight: '1.7' }}>
              Each of us has the ability to make a difference. Engaging in campaigns, working directly with communities, and supporting fundraising are all examples of strong intent. Be a part of our effort to help those who are marginalised.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', fontWeight: 'bold' }}>To volunteer, email us detailing your skills and areas of interest.</p>
          </motion.div>
          
          <motion.div style={{ padding: '40px', backgroundColor: '#f7fafc', borderRadius: '20px', borderTop: '5px solid #3182ce' }} whileHover={{ y: -10 }}>
            <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Internships</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '20px', lineHeight: '1.7' }}>
              From time to time, we activate short-term engagement opportunities for those who want to intern with us to understand our work and grasp the functionality of the development sector. We are always on the lookout for fresh, enthusiastic minds.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', fontWeight: 'bold' }}>For more details, write to us at janhitfoundation@gmail.com</p>
          </motion.div>

          <motion.div style={{ padding: '40px', backgroundColor: '#f7fafc', borderRadius: '20px', borderTop: '5px solid #38a169' }} whileHover={{ y: -10 }}>
            <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Employee Giving</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '20px', lineHeight: '1.7' }}>
              Individuals and organisations have been able to give more securely and effectively through our Employee Giving Program. Our philosophy in teamwork allows us to increase our giving while having a greater social effect.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
