import styles from './CTA.module.scss';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Get Started?</h2>
        <p className={styles.subtitle}>
          Clone this boilerplate and start building your next project in minutes.
        </p>
        <a href="#" className={styles.ctaButton}>
          View on GitHub
        </a>
      </div>
    </section>
  );
}