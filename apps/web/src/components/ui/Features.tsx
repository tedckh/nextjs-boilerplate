import styles from './Features.module.scss';

const features = [
  {
    title: 'Modern Stack',
    description: 'Built with the latest technologies like Next.js, React, and TypeScript.',
    icon: '🚀',
  },
  {
    title: 'Ready to Deploy',
    description: 'Easily deploy your application to Vercel with a single command.',
    icon: '☁️',
  },
  {
    title: 'Monorepo Support',
    description: 'Organize your code with Turborepo for high-performance builds.',
    icon: '📦',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose This Boilerplate?</h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}