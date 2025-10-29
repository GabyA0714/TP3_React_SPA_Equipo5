import styles from "./Card.module.css";

export default function CardApi({ name, image, status, species, origin }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.poster} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p><strong>Estado:</strong> {status}</p>
        <p><strong>Especie:</strong> {species}</p>
        <p><strong>Origen:</strong> {origin}</p>
      </div>
    </div>
  );
}
