const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// 1. Partners.jsx
const partnersJsxPath = path.join(srcDir, 'components', 'Partners.jsx');
let partnersJsx = fs.readFileSync(partnersJsxPath, 'utf8');
const newPartners = `  { name: "CAF", logo: "/CAF.png" },
  { name: "Access to Justice", logo: "/Partners Logo Images/Access to Justic logo.jpg" },
  { name: "Just Rights for Children", logo: "/Partners Logo Images/Just rights for Childrens Logo.png" },
  { name: "Kailash Satyarthi", logo: "/Partners Logo Images/Kailash satayarthi Logo.png" },`;
partnersJsx = partnersJsx.replace('{ name: "CAF", logo: "/CAF.png" },', newPartners);
fs.writeFileSync(partnersJsxPath, partnersJsx);

// 2. partners/page.js
const partnersPagePath = path.join(srcDir, 'app', 'partners', 'page.js');
let partnersPage = fs.readFileSync(partnersPagePath, 'utf8');
const newPartnersPage = `    name: "Coca-Cola",
    logo: "/cocacola.png",
  },
  {
    name: "Access to Justice",
    logo: "/Partners Logo Images/Access to Justic logo.jpg",
  },
  {
    name: "Just Rights for Children",
    logo: "/Partners Logo Images/Just rights for Childrens Logo.png",
  },
  {
    name: "Kailash Satyarthi",
    logo: "/Partners Logo Images/Kailash satayarthi Logo.png",
  },`;
partnersPage = partnersPage.replace(/name: "Coca-Cola",\s*logo: "\/cocacola.png",\s*},/, newPartnersPage);
fs.writeFileSync(partnersPagePath, partnersPage);

// 3. Child Rights
const childRightsPagePath = path.join(srcDir, 'app', 'programs', 'child-rights', 'page.js');
let childRightsPage = fs.readFileSync(childRightsPagePath, 'utf8');
const newChildRightsImages = `  "/Child Right Images/22.jpg",
  "/Child Right Images/1.jpeg",
  "/Child Right Images/WhatsApp Image 2026-08-18 at 4.34.07 PM (1).jpeg",
  "/Child Right Images/WhatsApp Image 2026-08-18 at 4.34.07 PM.jpeg",`;
childRightsPage = childRightsPage.replace('"/Child Right Images/22.jpg",', newChildRightsImages);
fs.writeFileSync(childRightsPagePath, childRightsPage);

// 4. Water Images
const rainwaterPath = path.join(srcDir, 'app', 'achievements', 'rainwater-harvesting', 'page.js');
let rainwaterPage = fs.readFileSync(rainwaterPath, 'utf8');
const newWaterHtml = `            {/* Image Gallery */}
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
                Gallery
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <div style={{ width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                  <img src="/Water Images/IMG_4012.JPG" alt="Water 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: '100%', height: '300px', backgroundColor: '#e2e8f0', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                  <img src="/Water Images/IMG_4230.JPG" alt="Water 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>

            {/* Consultancy */}`;
rainwaterPage = rainwaterPage.replace('{/* Consultancy */}', newWaterHtml);
fs.writeFileSync(rainwaterPath, rainwaterPage);

// 5. Environment
const envPath = path.join(srcDir, 'app', 'programs', 'environment', 'page.js');
let envPage = fs.readFileSync(envPath, 'utf8');
const newEnvHtml = `            <motion.div variants={itemVariants} style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/Environment Images/Environmentalist-Foundation-of-India-1024x598.jpg" alt="Environmental Foundation" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <img src="/Environment Images/263707_167130120020686_6726509_n.jpg" alt="Env 1" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <img src="/Environment Images/Photo 1212.jpeg" alt="Env 2" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <img src="/Environment Images/WhatsApp Image 2026-08-18 at 4.08.50 PM (1).jpeg" alt="Env 3" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <img src="/Environment Images/WhatsApp Image 2026-08-18 at 4.08.50 PM.jpeg" alt="Env 4" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </motion.div>`;
envPage = envPage.replace(/<motion\.div variants=\{itemVariants\} style=\{\{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba\(0,0,0,0\.1\)' \}\}>\s*<img src="\/Environment Images\/Environmentalist-Foundation-of-India-1024x598\.jpg" [^>]*>\s*<\/motion\.div>/m, newEnvHtml);
fs.writeFileSync(envPath, envPage);

console.log("Updated all images!");
