// src/components/Logo/Logo.jsx
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.circleGlow}>
        <img
          src="/logoEquipo17.png"
          alt="Logo Equipo 17"
          className={styles.logo}
        />
      </div>
      <h1 className={styles.title}>Equipo 17</h1>
    </div>
  );
}
