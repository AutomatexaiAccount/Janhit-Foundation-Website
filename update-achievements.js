const fs = require('fs');

const awardsContent = `
import Awards from '@/components/Awards';

export const metadata = {
  title: 'Awards - Janhit Foundation',
};

export default function AwardsPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Awards />
    </main>
  );
}
`;

const organicContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function OrganicAaharamPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(90deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Organic Aaharam</h1>
          <p className={styles.heroSubtitle}>Promoting chemical-free, natural, and sustainable food choices.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.paragraph}>
            <strong>Organic Aaharam</strong> is Janhit Foundation's pioneering initiative to promote organic farming and bring chemical-free, healthy food straight to the consumers. Recognizing the harmful impacts of synthetic fertilizers and pesticides on both human health and soil fertility, we initiated this program to bridge the gap between organic farmers and conscious consumers.
          </p>
          <p className={styles.paragraph}>
            Through "Organic Aaharam", we have successfully established local organic markets and supply chains in Meerut and surrounding areas. This not only ensures better prices for our farmers but also guarantees authentic, certified organic produce for the urban population.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div style={{ background: '#f0fdf4', padding: '30px', borderRadius: '15px', border: '1px solid #bbf7d0' }}>
              <h3 style={{ color: '#166534', marginBottom: '15px' }}>Farmer Empowerment</h3>
              <p style={{ color: '#15803d' }}>Training over 5,000 farmers in traditional, eco-friendly farming methods, reducing their dependency on costly chemical inputs.</p>
            </div>
            <div style={{ background: '#fffbeb', padding: '30px', borderRadius: '15px', border: '1px solid #fde68a' }}>
              <h3 style={{ color: '#b45309', marginBottom: '15px' }}>Consumer Awareness</h3>
              <p style={{ color: '#b45309' }}>Conducting regular workshops and organic food festivals to educate citizens about the benefits of natural diets.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', width: '100%', height: '400px', backgroundColor: '#e2e8f0', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            [ Organic Farming Image Placeholder ]
          </div>
        </motion.div>
      </div>
    </main>
  );
}
`;

const agricultureContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function AgricultureInnovationPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(45deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Agriculture Innovation</h1>
          <p className={styles.heroSubtitle}>Integrating traditional wisdom with modern eco-friendly agricultural techniques.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <motion.div 
            className={styles.contactCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.contactIcon}>🌾</div>
            <h3 style={{ fontSize: '1.8rem', color: '#2d3748', marginBottom: '20px' }}>Sustainable Practices</h3>
            <p className={styles.paragraph}>
              Janhit Foundation introduces innovative agricultural practices that conserve water, improve soil health, and increase yield without chemical interventions. We advocate for crop diversification, vermicomposting, and natural pest management.
            </p>
            <p className={styles.paragraph}>
              Our demonstration farms serve as learning hubs for rural communities, proving that ecological farming is both economically viable and environmentally sustainable.
            </p>
          </motion.div>

          <motion.div 
            style={{ borderRadius: '20px', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', minHeight: '300px' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [ Agriculture Innovation Image Placeholder ]
          </motion.div>
        </div>
      </div>
    </main>
  );
}
`;

const rainwaterContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function RainwaterHarvestingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(200deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className={styles.heroTitle}>Rainwater Harvesting</h1>
          <p className={styles.heroSubtitle}>Recharging groundwater and securing water for the future generations.</p>
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '4rem', color: '#3182ce' }}>💧</span>
          </div>
          <p className={styles.paragraph} style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            Western Uttar Pradesh faces severe groundwater depletion. Janhit Foundation has been at the forefront of the Rainwater Harvesting (RWH) movement, implementing low-cost, high-efficiency systems in schools, government buildings, and residential complexes.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: '#ebf8ff', borderRadius: '15px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#2b6cb0', marginBottom: '10px' }}>25+</h2>
              <p style={{ color: '#2c5282', fontWeight: 'bold' }}>Ponds & Water Bodies Revived</p>
            </div>
            <div style={{ padding: '30px', background: '#ebf8ff', borderRadius: '15px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#2b6cb0', marginBottom: '10px' }}>1st</h2>
              <p style={{ color: '#2c5282', fontWeight: 'bold' }}>Rain Centre established in UP</p>
            </div>
            <div style={{ padding: '30px', background: '#ebf8ff', borderRadius: '15px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#2b6cb0', marginBottom: '10px' }}>100+</h2>
              <p style={{ color: '#2c5282', fontWeight: 'bold' }}>RWH Systems Installed</p>
            </div>
          </div>

          <div style={{ marginTop: '40px', width: '100%', height: '400px', backgroundColor: '#e2e8f0', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            [ Rainwater Harvesting Image Placeholder ]
          </div>
        </motion.div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync('src/app/achievements/awards/page.js', awardsContent);
fs.writeFileSync('src/app/achievements/organic-aaharam/page.js', organicContent);
fs.writeFileSync('src/app/achievements/agriculture-innovation/page.js', agricultureContent);
fs.writeFileSync('src/app/achievements/rainwater-harvesting/page.js', rainwaterContent);
