"use client";

import Header from "../../components/Header";
import styles from "./partners.module.css";
import Head from "next/head";

const partnersList = [
  {
    name: "CAF India – Charities Aid Foundation India",
    logo: "/CAF.png",
  },
  {
    name: "India Water Portal",
    logo: "/Waterportal.png",
  },
  {
    name: "Ministry of Women & Child Development, Govt. of India",
    logo: "/Ministry-of-Women-Child-Development-Govt.-of-India.png",
  },
  {
    name: "UNDP – Human Development Report Office",
    logo: "/UNDP.png",
  },
  {
    name: "FIAN International",
    logo: "/FIAN-International.png",
  },
  {
    name: "Ministry of Jal Shakti – DoWR, RD & GR",
    logo: "/Ministry-of-Jal-Shakti-Govt.-of-India.png",
  },
  {
    name: "Tata",
    logo: "/TATA.png",
  },
  {
    name: "Moser Baer",
    logo: "/Moserbaer.png",
  },
  {
    name: "Childline 1098",
    logo: "/Childline-India-Foundation.png",
  },
  {
    name: "Godwin Public School",
    logo: "/Godwin-Public-School.png",
  },
  {
    name: "Nagar Nigam",
    logo: "/nagar-nigam.png",
  },
  {
    name: "Royal Netherlands Embassy",
    logo: "/royale.png",
  },
  {
    name: "Samsung",
    logo: "/samsung.png",
  },
  {
    name: "CCSU",
    logo: "/ccsu.png",
  },
  {
    name: "Mahindra",
    logo: "/mahindra.png",
  },
  {
        name: "Coca-Cola",
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
  },
];

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Partners - Janhit Foundation</title>
      </Head>
      <main>
        <Header />
        
        {/* Banner Section */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerHeader}>
            <div className={styles.subtitle}>
              <span>♡ Start Donating Poor People</span>
            </div>
            <h1 className={styles.title}>Partners</h1>
          </div>
        </section>

        {/* Partners Grid Section */}
        <section className={styles.partnersGrid}>
          {partnersList.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className={styles.partnerLogo}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff`;
                }}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
