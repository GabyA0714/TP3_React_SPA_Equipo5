import { Link } from "react-router-dom";
import integrantes from "../data/integrantes.json";
import CardIntegrante from "../components/Cards/CardIntegrante";
import "./Integrantes.css";

export default function Integrantes() {
  return (
    <section className="integrantes-page">
      <h1>👥 Integrantes del Equipo 17</h1>
      <p>Haz clic en un integrante para ver su información completa.</p>
      <div className="grid-integrantes">
        {integrantes.map((i) => (
          <Link to={`/integrante/${i.id}`} key={i.id} className="card-link">
            <CardIntegrante {...i} />
          </Link>
        ))}
      </div>
    </section>
  );
}
