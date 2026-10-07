
"use client";
import { motion } from 'framer-motion';

export default function EventsPage() {
  const events = [
    "World Water Day",
    "World Water Week",
    "Ground Water Day",
    "Women's Day",
    "Resource Meeting CHILDLINE",
    "Khap Panchayat",
    "Child Advisory Board Meeting",
    "Donation Camp At Gyan Asharam",
    "Movie making competition in Dewan institute",
    "Mahila chaupal with education department",
    "Hand washing with slum children",
    "Construction of toilets with Mahendra & Mahendra group"
  ];

  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', backgroundColor: '#e6fffa', textAlign: 'center' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', color: '#319795', marginBottom: '20px' }}>Events & Campaigns</motion.h1>
      </div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              style={{ padding: '30px', backgroundColor: '#f7fafc', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <h3 style={{ fontSize: '1.3rem', color: '#2d3748' }}>{event}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
