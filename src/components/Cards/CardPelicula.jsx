import styles from "./Card.module.css"

export default function CardPelicula({ titulo, categoria, descripcion, anio, imagen, trailer }) {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.poster} />
      <div className={styles.info}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p className={styles.meta}>
          <strong>Categoría:</strong> {categoria} | <strong>Año:</strong> {anio}
        </p>
        <a href={trailer} target="_blank" rel="noreferrer" className={styles.trailerBtn}>
          🎬 Ver tráiler
        </a>
      </div>
    </div>
  )
}
