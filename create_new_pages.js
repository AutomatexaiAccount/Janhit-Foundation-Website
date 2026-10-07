const fs = require('fs');
const path = require('path');

function writePage(filePath, content) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrote ${filePath}`);
}

// 1. WASH Page
const washContent = `
"use client";
import { motion } from 'framer-motion';

export default function WashPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #e6fffa, #319795)', textAlign: 'center', color: '#fff' }}>
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
`;
writePage(path.join(__dirname, 'src/app/programs/wash/page.js'), washContent);

// 2. Community Development Page
const commDevContent = `
"use client";
import { motion } from 'framer-motion';

export default function CommunityDevelopmentPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #fffaf0, #dd6b20)', textAlign: 'center', color: '#fff' }}>
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
`;
writePage(path.join(__dirname, 'src/app/programs/community-development/page.js'), commDevContent);

// 3. Partnerships Page
const partnershipsContent = `
"use client";
import { motion } from 'framer-motion';

export default function PartnershipsPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #ebf8ff, #3182ce)', textAlign: 'center', color: '#fff' }}>
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
`;
writePage(path.join(__dirname, 'src/app/partnerships/page.js'), partnershipsContent);

// 4. Projects Page
const projectsContent = `
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
      <div style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #f0fff4, #38a169)', textAlign: 'center', color: '#fff' }}>
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
`;
writePage(path.join(__dirname, 'src/app/projects/page.js'), projectsContent);

console.log("Created the 4 new pages.");
