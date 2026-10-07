const fs = require('fs');
const path = require('path');

function replaceContentArray(filePath, newContentArray) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the content array definition and replace it
    const regex = /const\s+content\s*=\s*\[([\s\S]*?)\];/;
    const replacement = `const content = [\n    ${newContentArray.map(c => `"${c.replace(/"/g, '\\"')}"`).join(',\n    ')}\n  ];`;
    
    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    } else {
        console.log(`Could not find content array in ${filePath}`);
    }
}

// 1. Who We Are
const whoWeAreText = [
    "Founded in 1998 by Dr. Anil Rana, an educationist by profession but an environmentalist at heart to work for Environmental & Water Conservation in Western Uttar Pradesh. Currently working extensively on Water Conservation, Sustainable Agriculture, Environmental Conservation, Child Rights Protection & Women Rights Protection along with Income Generation Activities for women from marginalized communities. Awareness in all the above-mentioned themes has always gone hands in hands with our work on the ground since our inception.",
    "We have also been given the responsibility to manage the 24X7 Child Helpline 1098 on behalf of Ministry of Women & Child Development, Govt. of India in Meerut and with our excellent work record we were also awarded to run the Railway Child Help Desk (Railway Childline) in Meerut in 2019, we became an obvious choice.",
    "Registered as a non-profit under Societies Registration Act, 1860 with tax exemptions from Income Tax Department under Section 12A & 80G Also registered under Foreign Contribution Regulation Act, 2010 and has had long-term partnered with bi-laterals, multi-laterals and many corporate donors in the past and has implemented multiple projects successfully.",
    "We welcome you to Janhit Foundation and be a part of the impactful work that we are doing everyday to bring sustainable change in the lives that we touch."
];
replaceContentArray(path.join(__dirname, 'src/app/about-us/who-we-are/page.js'), whoWeAreText);

// Helper to write full page
function writePage(filePath, content) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrote ${filePath}`);
}

// 2. Director Page
const directorContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../AboutUsPages.module.css';

export default function DirectorPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(220deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Smt. Anita Rana</h1>
          <p className={styles.heroSubtitle}>Director, Janhit Foundation</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Anita Rana stepped into as the head of the organization on the untimely demise of the founder of the organization Lt. Dr. Anil Rana in 2008. She came out as a housewife and with absolute passion and dedication towards the vision with which the organization was set up, she almost trained herself with the ongoing projects and also build the child rights and the women rights themes of the organization both in terms of the vision and the programs.</p>
          <p className={styles.paragraph}>She has crafted her own persona as a Social worker in the region who is always active and ready to help and support anyone in need in any region that approaches her with any kinds of problems. She has also been added over 100 accolades and awards in the last 13 years of her as the Head of the organization. It was only due to her persistence in implementing better projects that many institutional and corporate donors came forward and supported various projects in the region in the themes of Water, Sanitation, Health & Hygiene and Health for women in order to promote women empowerment through awareness and adopting easy solutions to their problems.</p>
          <p className={styles.paragraph}>She has also been serving as the Director for Meerut Childline since 2008 and it was due to regular monitoring and satisfactory work that we were awarded another Childline in Meerut – Railway Child Helpdesk and she has been serving as the Director since 2019. Further to this she recently envisioned a program to empower the women across the city of Meerut by initiating a Women Helpline and a rich panel having members from law, education, social sector, medicine, psychologist, career counsellors etc. to advice the women in case they are in any kind of distress.</p>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/about-us/director/page.js'), directorContent);

// 3. Founder Page
const founderContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../AboutUsPages.module.css';

export default function FounderPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(260deg)' }}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Dr. Anil Rana</h1>
          <p className={styles.heroSubtitle}>Founder, Janhit Foundation</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Dr. Anil Rana who was an educationist and taught in the Kurukshetra University after finishing his PhD from Jawaharlal Nehru University, Delhi. After doing this for a couple of years, he realized serious problems in the region of western Uttar Pradesh in the area of Water & Agriculture, he decided to quit his high paying job as a professor and came back to his birthplace that is Meerut and founded an Ngo with a vision to improve soil and water quality in the region.</p>
          <p className={styles.paragraph}>That was how, he started working with farmers and students in the region to promote organic farming and water conservation for the region to have a more sustainable living in the region. With his leadership, the organization could bring in multiple innovative projects supported by many institutional donors like Sir Ratan Tata Trust, Oxfam India, IGSSS, CAF India, Ford Foundation, Coca Cola India, and various national corporates with small to big support for the betterment of the region.</p>
          <p className={styles.paragraph}>His vision behind the organization could be gathered from one of his statements: "To make my life's trip more interesting, I picked the intruded path, and when I returned to my objective, I saw a swarm of individuals who were all supporting the same social cause."</p>
          <p className={styles.paragraph}>Unfortunately Dr. Rana passed away untimely in 2008 and his wife took on as the head of the organization and is carrying forward his vision and name in the form of the projects being implemented by the project.</p>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/about-us/founder/page.js'), founderContent);

// 4. Sustainable Agriculture Page
const agContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function SustainableAgriculturePage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(120deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Sustainable Agriculture</h1>
          <p className={styles.heroSubtitle}>Promoting organic agriculture as a viable and sustainable alternative.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Throughout the last decade, the Janhit Foundation has promoted organic agriculture as a viable and sustainable alternative to conventional farming practises. Toxic agrochemicals are heavily used in conventional agriculture, and they enter the food chain, seep into water sources, injure cattle and wildlife, deplete the soil, disrupt natural ecosystems, and contaminate the agricultural crop for which they were originally introduced.</p>
          <p className={styles.paragraph}>Organic farming practises improve soil quality year after year, resulting in more fruitful land. This improves the farmer's long-term yield, nutrient value, and potency of their crops.</p>
          <p className={styles.paragraph}>We work with small, marginalised farmers all throughout the region to help them increase their revenue by lowering input costs and switching to organic farming. Because sugarcane is the primary crop grown in Western Uttar Pradesh, we've worked closely with sugarcane farmers to encourage them to use fewer toxic Persistent Organic Pollutants (POPs) and to provide them with innovative technologies and agricultural techniques to improve their crop and increase yield.</p>
          <p className={styles.paragraph}>We have been encouraging farmers in the region to embrace organic and natural farming practises in order to protect the environment, soil quality, subsurface water quality, and the health of agricultural yield consumers. We work with around 2000 farmers in the district and have completed a number of initiatives with them.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Major Programs</h2>
          <ul style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}><strong>From Seed to Market:</strong> A 3-year project supported by Ford Foundation which promoted organic farming among 400 marginalized farmers, providing trainings from compost pits (Jeevamrit) to certification and market access.</li>
            <li style={{marginBottom: '10px'}}><strong>Demotivating use of Lindane and Endosulphan:</strong> Introduced organic manure LADEP to replace harmful chemicals.</li>
            <li style={{marginBottom: '10px'}}><strong>Soil Testing:</strong> Conducted in 210 villages across Meerut.</li>
            <li style={{marginBottom: '10px'}}><strong>Biodiversity Herbal Gardens:</strong> Set up in SD Public School, Muzaffarnagar and Godwin Public School, Meerut.</li>
            <li style={{marginBottom: '10px'}}><strong>Promotion of MAPs:</strong> Cultivation of Lemongrass, Citronella & Neem with market provision for income generation.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/sustainable-agriculture/page.js'), agContent);

// 5. Water Conservation Page
const waterContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function WaterConservationPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(200deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Water Conservation & Awareness</h1>
          <p className={styles.heroSubtitle}>Preserving and revitalising natural water supplies in Uttar Pradesh.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>In Uttar Pradesh, the Janhit Foundation takes a novel method for dealing with water shortages. This strategy is centred on ensuring that all of our efforts in this field benefit the people who live in our society while also improving environmental circumstances.</p>
          <p className={styles.paragraph}>We devote a significant portion of our efforts on preserving and revitalising natural water supplies. Uttar Pradesh has a network of rivers, ponds, and canals, although encroachment is prevalent, and many of them are dry. We have been working with a variety of partners to rejuvenate these buildings so that communities can use them for agricultural and other uses.</p>
          <p className={styles.paragraph}>As a remedy to the ever-increasing water crisis, we promote the adoption of clean technology such as rainwater collection. This helps to replenish the region's depleted groundwater levels while also supplying excess water for home usage.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Mitigation of Water Pollution</h2>
          <p className={styles.paragraph}>In India, waste dumping from industrial facilities is prevalent. As a result, water contamination is a serious issue, with many industries releasing untreated waste water directly into the groundwater and the region's many rivers. The Janhit Foundation aims to address these issues by providing factual proof of the harm that the industry has caused to the environment and, in many cases, human health.</p>

          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Major Programs</h2>
          <ul style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}><strong>2nd Rain Centre in India:</strong> A one-of-its-kind water library with educative panels, books, and videos set up in Meerut.</li>
            <li style={{marginBottom: '10px'}}><strong>Revival of Water Bodies:</strong> Revived over 25 water bodies in Meerut, Ghaziabad & Sonepat.</li>
            <li style={{marginBottom: '10px'}}><strong>Low-Cost Techniques:</strong> Promotion of water-efficient techniques among farmers.</li>
            <li style={{marginBottom: '10px'}}><strong>Water Census:</strong> Created a Water Census of the region in 2003 and 2013.</li>
            <li style={{marginBottom: '10px'}}><strong>Rainwater Harvesting:</strong> Implemented in multiple government and private buildings.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/water-conservation/page.js'), waterContent);

// 6. Child Rights
const childRightsContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function ChildRightsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(320deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Child Rights Protection</h1>
          <p className={styles.heroSubtitle}>Connecting children in need to care, protection, and rehabilitation.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>CHILDLINE is India's first 24-hour, toll-free emergency phone outreach programme for children in need of care and protection, connecting them to long-term care and rehabilitation facilities. Any youngster or concerned adult can dial 1098 at any time of day or night to reach the CHILDLINE service.</p>
          <p className={styles.paragraph}>Meerut became the 73rd city to receive the service in August 2007, with the Janhit Foundation in charge of its deployment. We take a child-centered approach to development, in which children are active and leading participants in their own growth.</p>
          <p className={styles.paragraph}>We receive over ten calls every day on average from children in distress from all over town as a result of this effort. In 2020, we were also assigned the job of looking after the Meerut Railway Childline.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Our Activities</h2>
          <ul style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}><strong>Open House:</strong> Monthly events in public spaces like railway stations to raise awareness about the 1098 service.</li>
            <li style={{marginBottom: '10px'}}><strong>Canopy & Health Exams:</strong> Canopies set up in public venues to distribute materials, paired with regular free health checks and vaccinations for slum children.</li>
            <li style={{marginBottom: '10px'}}><strong>Vocational Trainings:</strong> Free sewing workshops, computer classes, and driving lessons for underprivileged youths to ensure self-sufficiency.</li>
            <li style={{marginBottom: '10px'}}><strong>Rescue Operations:</strong> In collaboration with Meerut Police, rescuing child laborers (e.g., 'Operation Masoom') and providing counseling and rehabilitation.</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/child-rights/page.js'), childRightsContent);

// 7. Women Rights Protection
const womenRightsContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function WomenRightsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(280deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Women Rights Protection</h1>
          <p className={styles.heroSubtitle}>Educating women and helping them understand their value and rights.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Women's independence has been a priority for the Janhit Foundation. It is the organization's firm view that it should take on the role of providing basic comforts to society's underprivileged women. We have made it our mission to educate women and help them understand their value so that they can contribute equally to the betterment of the world.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Major Programs</h2>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Health Programme & Sanitation</h3>
          <p className={styles.paragraph}>We hold health programmes in numerous locations to educate people about the need for hygiene, combating superstitions that prevent toilet use in rural areas.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Sanitary Napkin Distribution</h3>
          <p className={styles.paragraph}>We teach women how to handle menstruation in a sanitary manner. To guarantee healthy practices, the proper use of sanitary napkins is taught and they are supplied on a regular basis.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Janhit Mahila Helpline</h3>
          <p className={styles.paragraph}>We started an innovative support system in the form of a Women Helpline (0121- 4302021) which registers calls from women in distress across the district. The helpline is supplemented with a Panel of Experts (lawyers, psychologists, counselors) who provide advisory and easy solutions.</p>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/women-rights/page.js'), womenRightsContent);

// 8. Environment
const envUpdateContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function EnvironmentPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(60deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Environment</h1>
          <p className={styles.heroSubtitle}>Working with communities to enhance their environment and conserve natural resources.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Aside from the work we undertake in water and agriculture, we work with communities to enhance various other aspects of their environment. Notably, we have participated in the <strong>My Clean India</strong> campaign to improve awareness among communities.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Promotion of Agnihotra</h2>
          <p className={styles.paragraph}>The organization encourages Agnihotra in Meerut. Practicing Agnihotra in agricultural fields cleans the surrounding atmosphere and reduces the risk of insect-pest attacks, thereby nullifying the need for pesticides. Scientific researches prove that practicing it even once a day cleans 8000 sq. ft. of atmosphere.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Air Pollution & Urban Forestry</h2>
          <p className={styles.paragraph}>In 2002, Janhit Foundation conducted a pollution study of Meerut with CSE, New Delhi. Following the findings, we established an Enviro-Green Centre by planting 300 medicinal trees and setting up rainwater harvesting in City Vocational Public School, involving 1500 students in 'shramdaan'.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>Biodiversity Farm</h2>
          <p className={styles.paragraph}>Supported by The Royal Netherlands Embassy, we set up a model biodiversity farm in Bhatipura village. It includes a pond, apiculture, floriculture, medicinal plants (Neem, jatropha, stevia), and organic manure models (NADEP, LADEP, vermiwash) to educate farmers on ecological balance and income enhancement.</p>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/environment/page.js'), envUpdateContent);

// 9. Gyan Ashram
const gyanUpdateContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GyanAshramPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(-30deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Gyan Ashram</h1>
          <p className={styles.heroSubtitle}>School for Knowledge: Providing informal education to slum children.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Taking care of the poor, deprived children of the slums, Meerut CHILDLINE team initiated two informal schools for marginalized groups. Named Gyanashram (School for knowledge), these schools take care of over 100 dropout children.</p>
          <p className={styles.paragraph}>Janhit Foundation constructed bamboo huts to provide classrooms. Staff members regularly teach these children about the culture of our country, environmental issues, hygiene, first aid, and general knowledge. We also enroll dozens of these dropouts into formal local schools.</p>
          <p className={styles.paragraph}>To encourage empowerment, girl students are provided with computer and tailoring classes. Tremendous support has been received from the community, including regular medical checkups by Subharti Medical College doctors and psychological care by local experts.</p>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/gyan-ashram/page.js'), gyanUpdateContent);

// 10. Give As You Earn
const giveUpdateContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function GiveAsYouEarnPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'saturate(1.5)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>Give As You Earn</h1>
          <p className={styles.heroSubtitle}>CAF India’s payroll giving programme.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Janhit Foundation is a partner in Give as You Earn, CAF India’s payroll giving programme which offers companies and their employees an easy and tax-effective way of giving to the NGO of their choice. As a part of this, we have undertaken a number of activities:</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Vocational Training at Bal Sadan</h3>
          <p className={styles.paragraph}>We facilitated computer skills training for 30 children at Bal Sadan, a government child observation home in Meerut, providing them with systems and basic software education to build their future.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Helping the Deprived – Mission ‘Enable’</h3>
          <p className={styles.paragraph}>We provided enabling devices like wheelchairs, hearing machines, crutches, and walkers to physically challenged children, transforming them from disabled to enabled.</p>
          
          <h3 style={{marginTop: '20px', marginBottom: '10px', color: '#DE5824', fontSize: '1.5rem'}}>Free Medical Camps & Education Support</h3>
          <p className={styles.paragraph}>Conducted medical camps in Jaibheem Nagar, providing free medicines and checkups to address health crises caused by groundwater contamination. We also sponsored school uniforms and materials for slum children.</p>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/give-as-you-earn/page.js'), giveUpdateContent);

// 11. My Clean Meerut
const mycleanContent = `
"use client";
import { motion } from 'framer-motion';
import styles from '../../about-us/AboutUsPages.module.css';

export default function MyCleanMeerutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBg} style={{ filter: 'hue-rotate(180deg)' }}></div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>My Clean Meerut</h1>
          <p className={styles.heroSubtitle}>Beauty & Prosperity through Community.</p>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div className={styles.contentWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className={styles.paragraph}>Janhit Foundation launched the 'My Clean Meerut' campaign to inspire the people of Meerut City to show love and pride for their environment. Associated with the 'My Clean India' campaign, it encourages people to take personal responsibility for a cleaner environment.</p>
          <p className={styles.paragraph}>This campaign is based on Appreciative Inquiry—shifting from problem-solving to building on solutions, acknowledging community power, and focusing on local achievements rather than waiting for resources.</p>
          
          <h2 style={{marginTop: '40px', marginBottom: '20px', color: '#2d3748', fontSize: '2rem'}}>My Clean School</h2>
          <p className={styles.paragraph}>Working with UN Agenda 21, My Clean School enables students to act as role models. Using Progressive Inquiry (What is liked, What is not liked, What needs to happen), youth explore community opportunities for action.</p>
          
          <p className={styles.paragraph}>We have organized Inter-school Essay Writing, Debate, and Poster Making Competitions with hundreds of students participating across government and private schools to foster environmental consciousness.</p>
        </motion.div>
      </div>
    </main>
  );
}
`;
writePage(path.join(__dirname, 'src/app/programs/my-clean-meerut/page.js'), mycleanContent);

console.log("All updates complete!");
