import styles from "./CardIntegrante.module.css";

export default function CardIntegrante({ nombre, ciudad, edad, habilidades, avatar }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={`Foto de ${nombre}`} className={styles.avatar} />
      <div className={styles.info}>
        <h3>{nombre}</h3>
        <p className={styles.ciudad}>📍 {ciudad}</p>
        <p><strong>Edad:</strong> {edad} años</p>
        <p><strong>Habilidades:</strong> {habilidades.join(", ")}</p>
      </div>
    </div>
  );
}

