import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.subtitle}>Welcome To</h3>
        <h1 className={styles.title}>Janhit Foundation</h1>
        <p className={styles.description}>
          Founded in 1998 by Dr. Anil Rana, an educationist by profession but an environmentalist at heart to work for Environmental & Water Conservation in Western Uttar Pradesh. Currently working extensively on Water Conservation, Sustainable Agriculture, Environmental Conservation, Child Rights Protection & Women Rights.
        </p>
        <div className={styles.buttons}>
          <Link href="#" className="btn">Read More</Link>
          <Link href="#" className="btn btn-secondary">Get Involved</Link>
        </div>
      </div>
    </section>
  );
}
