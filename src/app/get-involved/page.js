"use client";

import Header from "../../components/Header";
import styles from "./getInvolved.module.css";
import Head from "next/head";

export default function GetInvolvedPage() {
  return (
    <>
      <Head>
        <title>Get Involved - Janhit Foundation</title>
      </Head>
      <main className={styles.main}>
        <Header />
        
        {/* Banner Section */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerContent}>
            <div className={styles.subtitle}>Get Involved</div>
            <h1 className={styles.title}>Join Our Mission</h1>
            <div className={styles.quoteBlock}>
              Alone we can do so little; together we can do so much.
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              <strong>Janhit Foundation</strong> recognises that the complex issues confronting modern India can only be addressed when the government, civic society, people, and businesses join forces and collaborate. To avoid failures and increase the chances of success, a broad lens approach that includes many more partners has become essential. The call to combine all stakeholders’ efforts and talents to increase the impact of poverty reduction and social inclusion programmes is becoming increasingly vocal, and Janhit Foundation is trying to achieve this aim through collaborations.
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section className={styles.involvementGrid}>
          {/* Card 1: Volunteering */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🤝</div>
            <h2 className={styles.cardTitle}>Volunteering</h2>
            <p className={styles.cardText}>
              Each of us has the ability to make a difference and assist others who are less fortunate in our communities. Engaging in campaigns for the betterment of society, volunteering and working directly with communities, supporting fund raising and monetary contributions to the causes of your choosing are all examples of strong intent to make a difference. Be a part of our effort to help those who are marginalised.
            </p>
          </div>

          {/* Card 2: Internship */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎓</div>
            <h2 className={styles.cardTitle}>Internship</h2>
            <p className={styles.cardText}>
              From time to time, we activate short-term engagement opportunities for those who want to intern with us, to understand Janhit Foundation India’s work and further grasp the functionality of the development sector. We are always on the lookout for fresh, enthusiastic, and dedicated minds to join our team. <br/><br/>
              For more details, write to us at <a href="mailto:janhitfoundation@gmail.com" className={styles.cardLink}>janhitfoundation@gmail.com</a>
            </p>
          </div>

          {/* Card 3: Individual Giving */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>❤️</div>
            <h2 className={styles.cardTitle}>Individual Giving</h2>
            <p className={styles.cardText}>
              The Janhit Foundation oversees the complete life cycle of social impact programmes in order to increase on-the-ground effectiveness. Individuals and organisations have been able to give more, more securely, and more effectively, and we’ve provided support to make a difference in people’s lives. Our philosophy in teamwork has allowed us to increase our giving while also recognising that we can work better together and have a greater social effect. We foresee a future together that is motivated not by a catastrophe, but by the desire to improve our society. We can make a genuine difference in the lives of millions of people in need if we work together.
            </p>
            <div className={styles.bankDetailsBox}>
              <h3>Bank Details for Direct Donation</h3>
              <p><strong>Account Name:</strong> Janhit Foundation</p>
              <p><strong>Ac No.:</strong> 26560100000823</p>
              <p><strong>IFSC code:</strong> BARB0SHAMEE</p>
              <p><strong>Branch:</strong> Shastrinagar, Meerut</p>
            </div>
          </div>

          {/* Card 4: Employee Giving */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏢</div>
            <h2 className={styles.cardTitle}>Employee Giving Program</h2>
            <p className={styles.cardText}>
              Employee giving initiatives are a great approach to improve employee relationships while also supporting the communities where you work. The corporate could use this as an opportunity for the employees to have a philanthropic bent of mind and contribute towards the well-being of the society as a whole. Also, the employees would be able to not just contribute towards the social causes but they also get an opportunity to be able to volunteer with the program being implemented by the organization.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
