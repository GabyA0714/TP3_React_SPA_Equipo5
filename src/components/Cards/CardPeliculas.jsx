import styles from "./Card.module.css";

const FALLBACK = "/react.svg"; // o una imagen local en /public

export default function CardPeliculas({ titulo, categoria, descripcion, anio, imagen, trailer }) {
  const onImgError = (e) => { e.currentTarget.src = FALLBACK; };

  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.poster} onError={onImgError} />
      <div className={styles.info}>
        <h3>{titulo}</h3>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className="muted">Año: {anio}</p>
        <a href={trailer} target="_blank" rel="noopener noreferrer" className={styles.button}>
          🎥 Ver tráiler
        </a>
      </div>
    </div>
  );
}
