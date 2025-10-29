import styles from "./Card.module.css";

export default function Card({ title, subtitle, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
