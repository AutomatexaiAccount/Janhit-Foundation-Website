import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.subtitle}>Building Sustainable Communities</h3>
        <h1 className={styles.title}>Creating Measurable Impact.</h1>
        <p className={styles.description}>
          Since 1998, Janhit Foundation has worked with communities across Western Uttar Pradesh and NCR to strengthen water security, promote sustainable agriculture, protect children, empower women and build resilient livelihoods.
        </p>
        <div className={styles.buttons}>
          <Link href="/impact" className="btn">Explore Our Impact</Link>
          <Link href="/partner-with-us" className="btn btn-secondary">Partner With Us</Link>
          <Link href="/programmes" className="btn btn-outline" style={{ border: '2px solid white', background: 'transparent', color: 'white' }}>View Our Programmes</Link>
        </div>
      </div>
    </section>
  );
}
