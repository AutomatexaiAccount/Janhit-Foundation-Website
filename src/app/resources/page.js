
"use client";
import { motion } from 'framer-motion';

export default function ResourcesPage() {
  const reports = [
    "Daurala Report", "Hindon Report", "Jaibheem Nagar Report", "Malsinghwala Report"
  ];
  
  const publications = [
    "The Life and Times of Anil Rana", "Herbal Resource Center (Godwin Public School)", 
    "Water Literacy", "Eliminating Lindane and Endosulphan in Western U.P.", 
    "Manual on Maps", "A Guide to Save Water", "A People's Manual on Water Quality", 
    "River Pollution", "Rainwater Harvesting (Hindi & English)", "Agnihotra", "Janhit Foundation Brochure"
  ];

  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', backgroundColor: '#edf2f7', textAlign: 'center' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', color: '#4a5568', marginBottom: '20px' }}>Resources & Publications</motion.h1>
      </div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2rem', color: '#DE5824', marginBottom: '20px' }}>Study Reports</h2>
          <ul style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '40px' }}>
            {reports.map((item, idx) => <li key={idx} style={{ marginBottom: '10px' }}>{item}</li>)}
          </ul>
          
          <h2 style={{ fontSize: '2rem', color: '#DE5824', marginBottom: '20px' }}>Manuals & Publications</h2>
          <ul style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '40px' }}>
            {publications.map((item, idx) => <li key={idx} style={{ marginBottom: '10px' }}>{item}</li>)}
          </ul>

          <h2 style={{ fontSize: '2rem', color: '#DE5824', marginBottom: '20px' }}>Annual Reports & Newsletters</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8' }}>
            Our archive includes Annual Reports dating back to 2007-08, and quarterly newsletters spanning from 2009 to 2018, documenting our continuous efforts in the field.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
