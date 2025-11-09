import { useParams } from "react-router-dom";
import integrantes from "../data/integrantes.json";
import Button from "../components/Button/Button";
import "./Integrante.css";

export default function Integrante() {
  const { id } = useParams();
  const p = integrantes.find((x) => String(x.id) === id);

  if (!p) {
    return (
      <section className="integrante-page">
        <h2>Integrante no encontrado</h2>
        <Button url="/integrantes" text="← Volver a Integrantes" />
      </section>
    );
  }

return (
    <section className="integrante-page">
    <img src={p.avatar} alt={p.nombre} className="perfil-avatar" />
    <h2 className="perfil-nombre">{p.nombre}</h2>
    <p className="perfil-ciudad">📍 {p.ciudad}</p>
    <div className="perfil-info">
      <h3>🎬 Películas favoritas</h3>
      <ul>{p.peliculas.map((pel, i) => <li key={i}>{pel}</li>)}</ul>

      <h3>🎵 Música favorita</h3>
      <ul>{p.musica.map((mus, i) => <li key={i}>{mus}</li>)}</ul>

      <h3>💡 Habilidades</h3>
      <ul>{p.habilidades.map((hab, i) => <li key={i}>{hab}</li>)}</ul>
    </div>

  <Button url="/integrantes" text="← Volver a Integrantes" />
</section>
    
  );
}



