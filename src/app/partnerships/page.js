
"use client";
import { motion } from 'framer-motion';

export default function PartnershipsPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', background: 'linear-gradient(135deg, #ebf8ff, #3182ce)', textAlign: 'center', color: '#fff' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', marginBottom: '20px' }}>Global Partnerships & CSR</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Collaborating with corporates, institutions, and development organizations for measurable social impact.</motion.p>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Corporate Social Responsibility (CSR)</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>Janhit Foundation is a trusted implementation partner for multinational companies operating in India. We design and execute high-impact CSR projects in Water Conservation, Sustainable Agriculture, Women Empowerment, and Rural Development.</p>
          
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px', marginTop: '40px' }}>Our Network & Associations</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>Over the years, our initiatives have seen associations and collaborations involving esteemed organizations such as:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
            {['UNICEF', 'UNDP', 'CAF India', 'Ministry of Women and Child Development', 'Coca-Cola', 'TATA Trusts', 'OXFAM', 'Centre for Science and Environment'].map((partner, i) => (
              <span key={i} style={{ padding: '10px 20px', backgroundColor: '#edf2f7', borderRadius: '50px', color: '#2d3748', fontWeight: 'bold' }}>{partner}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
