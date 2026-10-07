
"use client";
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    { title: "Water Security in Western UP", focus: "Groundwater recharge, Rainwater harvesting, Water education", metrics: "Improved groundwater levels and safe drinking water access." },
    { title: "Climate-Smart Agriculture", focus: "Organic farming, Soil health, Bio-pesticides, Water-efficient agriculture", metrics: "Increased farmer revenue and reduced chemical dependency." },
    { title: "Women Empowerment Initiatives", focus: "Skill development, Entrepreneurship, Health awareness, Financial inclusion", metrics: "Hundreds of women trained and earning independent incomes." },
    { title: "Child Rights & Protection", focus: "CHILDLINE 1098, Railway Child Help Desk, Education support", metrics: "Thousands of vulnerable children rescued and rehabilitated." },
    { title: "Comprehensive WASH Programs", focus: "Safe drinking water, Rural sanitation, Hygiene awareness", metrics: "Improved community health and eradication of open defecation." }
  ];

  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', background: 'linear-gradient(135deg, #f0fff4, #38a169)', textAlign: 'center', color: '#fff' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', marginBottom: '20px' }}>Our Grant-Ready Projects</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Scalable and measurable interventions addressing the most pressing social and environmental challenges.</motion.p>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', display: 'grid', gap: '30px' }}>
        {projects.map((proj, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '15px', borderLeft: '6px solid #38a169', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#2d3748', marginBottom: '10px' }}>{proj.title}</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '10px' }}><strong>Focus Areas:</strong> {proj.focus}</p>
            <p style={{ fontSize: '1.1rem', color: '#38a169', fontWeight: 'bold' }}><strong>Impact:</strong> {proj.metrics}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
