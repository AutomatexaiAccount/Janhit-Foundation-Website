const fs = require('fs');
const path = require('path');

// Helper to write full page
function writePage(filePath, content) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrote ${filePath}`);
}

// 1. Contact Us Page
const contactContent = `
"use client";
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';

export default function ContactUsPage() {
  return (
    <main className={styles.main || "main"}>
      <div style={{ padding: '80px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
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
`;
writePage(path.join(__dirname, 'src/app/contact-us/page.js'), contactContent);

// 2. Get Involved Page
const getInvolvedContent = `
"use client";
import { motion } from 'framer-motion';

export default function GetInvolvedPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #1a365d, #DE5824)', textAlign: 'center', color: 'white' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800' }}>Get Involved</h1>
          <p style={{ fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
            "Alone we can do so little; together we can do so much."
          </p>
        </motion.div>
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
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
`;
writePage(path.join(__dirname, 'src/app/get-involved/page.js'), getInvolvedContent);

// 3. Achievements / Awards Page
const achievementsContent = `
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
      <div style={{ padding: '80px 20px', backgroundColor: '#f9fafb', textAlign: 'center' }}>
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
`;
writePage(path.join(__dirname, 'src/app/achievements/page.js'), achievementsContent);

// 4. Events Page
const eventsContent = `
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
      <div style={{ padding: '80px 20px', backgroundColor: '#e6fffa', textAlign: 'center' }}>
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
`;
writePage(path.join(__dirname, 'src/app/events/page.js'), eventsContent);

// 5. Organic Aaharam Page
const organicContent = `
"use client";
import { motion } from 'framer-motion';

export default function OrganicAaharamPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '80px 20px', backgroundColor: '#f0fff4', textAlign: 'center' }}>
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
`;
writePage(path.join(__dirname, 'src/app/programs/organic-aaharam/page.js'), organicContent);

console.log("Remaining pages update complete!");
