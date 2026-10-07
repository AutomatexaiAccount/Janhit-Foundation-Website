
"use client";
import { motion } from 'framer-motion';

export default function WashPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', background: 'linear-gradient(135deg, #e6fffa, #319795)', textAlign: 'center', color: '#fff' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', marginBottom: '20px' }}>Water, Sanitation & Hygiene (WASH)</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Ensuring clean water, proper sanitation, and hygiene awareness for marginalized communities.</motion.p>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Our WASH Initiatives</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>Janhit Foundation works extensively to improve public health through our comprehensive WASH programs. We believe that access to safe drinking water and sanitation is a basic human right.</p>
          <ul style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '40px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Clean Drinking Water:</strong> Installing water filters and reviving water sources to provide safe drinking water to rural and slum areas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Rural Sanitation:</strong> Building toilets and fighting superstitions to end open defecation.</li>
            <li style={{ marginBottom: '10px' }}><strong>Hygiene Awareness:</strong> Conducting community health programs to educate people about personal and environmental hygiene.</li>
            <li style={{ marginBottom: '10px' }}><strong>Menstrual Hygiene:</strong> Teaching women and adolescent girls about safe menstrual practices and distributing sanitary napkins.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
