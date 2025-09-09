import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Build and Ship Faster</h1>
        <p className={styles.subheadline}>
          A professional boilerplate for modern web applications.
        </p>
        <a href="#" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    </section>
  );
}