
"use client";
import { motion } from 'framer-motion';

export default function AchievementsPage() {
  const awards = [
    { title: "Leadership in community initiative for a green economy", org: "UNDP award (2012)", desc: "Received from the UN Development Programme at the 2012 Delhi Sustainable Development Summit by Country Director Caitlin Wiesen." },
    { title: "Women And The Green Economy", org: "Earth Day Network (2012)", desc: "Honoured at the Delhi Sustainable Development Summit for valuable work in support of Earth Day Network's campaign." },
    { title: "Green Apple Award", org: "The Green Organisation, UK (2009)", desc: "Declared as one of the major winners for outstanding contribution towards environment issues." },
    { title: "One World Award", org: "One World (2008)", desc: "Conferred for outstanding work in the field of organic agriculture and promoting engagement for a fair and sustainable globalization." },
    { title: "Appreciation Certificate", org: "UNICEF & Water Aid (2008)", desc: "Awarded on the occasion of World Water Day and the International Year of Sanitation for promoting public awareness." },
    { title: "Waterman Of UP", org: "Govt of Uttar Pradesh (2008)", desc: "Founder Late Sh. Anil Rana was honoured with this title on Ground Water Day." },
    { title: "Nari Shakti Award", org: "Women Commission U.P (2015 & 2016)", desc: "Awarded on Women's Day for empowering women." },
    { title: "Woman of Substance", org: "Meerut Management Association", desc: "Awarded to Ms. Anita Rana by District Magistrate Navdeep Ranwa." },
    { title: "Malala Award", org: "U.P Govt. and Hindustan Media", desc: "Given to encourage women for advocacy of women and social rights." }
  ];

  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', backgroundColor: '#f9fafb', textAlign: 'center' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', color: '#DE5824', marginBottom: '20px' }}>Our Awards & Accolades</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto' }}>Over the years, Janhit Foundation has been recognized globally and nationally for our unwavering commitment to society and the environment.</motion.p>
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {awards.map((award, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{ padding: '30px', backgroundColor: 'white', borderRadius: '15px', borderLeft: '6px solid #DE5824', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
          >
            <h2 style={{ fontSize: '1.8rem', color: '#2d3748', marginBottom: '10px' }}>{award.title}</h2>
            <h4 style={{ fontSize: '1.2rem', color: '#DE5824', marginBottom: '15px' }}>{award.org}</h4>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.6' }}>{award.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
