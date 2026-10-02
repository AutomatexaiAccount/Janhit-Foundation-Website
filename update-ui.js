const fs = require('fs');

const historyContent = `
import styles from '../AboutUsPages.module.css';

export const metadata = {
  title: 'History - Janhit Foundation',
};

export default function HistoryPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Our History</h1>
          <p className={styles.bannerSubtitle}>The journey of Janhit Foundation from a small group of dynamic leaders to a recognized organization.</p>
        </div>
        
        <div className={styles.contentWrapper}>
          <p className={styles.paragraph}>
            While in his teens, our founder, the Late Shri Anil Rana, formed a group of young dynamic leaders, with the aim of making a difference in their local community. Throughout his young adult life this remained solely an unachievable vision, and he spent his time employed as a university English lecturer. However, still dissatisfied with what life had to offer, he resigned from his job and created a platform for his vision.
          </p>
          <p className={styles.paragraph}>
            This platform was <strong>Janhit Foundation</strong>, which was formally registered under the Societies Registration Act on August 4, 1998, in Meerut City, Western Uttar Pradesh. The first five years of the organization's existence were a tough and barren time. With little funding and support, our founder and his following of youthful volunteers persevered to raise awareness about water and agricultural problems in the region.
          </p>
          <p className={styles.paragraph}>
            Slowly but surely, the organization gained credibility and numbers, until it reached its current state, located in a two storey office building, housing approximately 25 full-time salaried employees. Sadly, our founding Director, Anil Rana, passed away suddenly in 2008, and since this time, Janhit Foundation has been overseen by his wife, our new Director, <strong>Ms. Anita Rana</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
`;

const locationContent = `
import styles from '../AboutUsPages.module.css';

export const metadata = {
  title: 'Location - Janhit Foundation',
};

export default function LocationPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Our Location</h1>
          <p className={styles.bannerSubtitle}>Find out where we operate and how you can reach our main office in Meerut.</p>
        </div>

        <div className={styles.contentWrapper}>
          <p className={styles.paragraph}>
            Janhit Foundation operates from our head office in Meerut and our geographical reach covers the district of Meerut in Western Uttar Pradesh, in addition to extending to other neighbouring districts including Muzaffarnagar, Saharanpur, Baghpat, Ghaziabad and Noida.
          </p>
          
          <div className={styles.addressBox}>
            <h3>Our Main Office</h3>
            <p><strong>Janhit Foundation</strong><br/>
              771/8, Jagriti Vihar<br/>
              Meerut-250004,<br/>
              Uttar Pradesh, India
            </p>
            <p style={{ marginTop: '15px' }}>
              <strong>Phone:</strong> +91-121-4004123, 0121-4302021<br/>
              <strong>E-mail:</strong> <a href="mailto:janhitfoundation@gmail.com" className={styles.link}>janhitfoundation@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
`;

const vacanciesContent = `
import styles from '../AboutUsPages.module.css';

export const metadata = {
  title: 'Vacancies - Janhit Foundation',
};

export default function VacanciesPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Vacancies</h1>
          <p className={styles.bannerSubtitle}>Join our team and help us make a difference in the community.</p>
        </div>

        <div className={styles.vacancyBox}>
          <p>All Janhit Foundation’s jobs are advertised here.</p>
          <p style={{ color: '#a0aec0', marginTop: '10px' }}>Currently, there are no open vacancies. Please check back later.</p>
        </div>
      </div>
    </main>
  );
}
`;

fs.writeFileSync('src/app/about-us/history/page.js', historyContent);
fs.writeFileSync('src/app/about-us/location/page.js', locationContent);
fs.writeFileSync('src/app/about-us/vacancies/page.js', vacanciesContent);
