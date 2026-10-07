
"use client";
import { motion } from 'framer-motion';

export default function AgricultureInnovationPage() {
  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: '180px 20px 80px', backgroundColor: '#f0fff4', textAlign: 'center' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3rem', color: '#38a169', marginBottom: '20px' }}>Agriculture Innovation</motion.h1>
      </div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px' }}>Innovation LADEP – Organic Manure Production</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
            One constraint to organic farming is the requirement of huge biomass. The farming community of Western Uttar Pradesh unknowingly burns huge biomass of Sugarcane leaves, releasing carbon dioxide and degrading soil.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
            Janhit Foundation created a technique to convert this biomass into compost. Our former fieldworker Lalit and current Agricultural Coordinator Devpal Singh created this innovation, essentially a rich, organic manure compiled with zero budget.
          </p>
          
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px', marginTop: '40px' }}>Harit Pani</h2>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
            A liquid manure prepared by collecting weeds, jaggery (gur), tamarind, salt, and water. After decomposing for 15-20 days, it is used as a spray or soil drench in 10% strength. This is ideal for farmers who do not have cows but still want to use organic manures for their fields and crops.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
