import { useEffect, useState } from "react";
import CardApi from "../components/Cards/CardApi";
import "./DataApi.css";

export default function DataAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
        if (!res.ok) throw new Error("Error al cargar API");
        const json = await res.json();
        setData(json.results.slice(0,12));
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Cargando…</p>;
  if (err) return <p>Error: {err}</p>;

  return (
    <section className="api">
      <h1>🛸 Datos desde API pública</h1>
      <p>Rick and Morty (12 resultados)</p>
      <div className="grid">
        {data.map(ch => (
          <CardApi
            key={ch.id}
            name={ch.name}
            image={ch.image}
            status={ch.status}
            species={ch.species}
            origin={ch.origin?.name}
          />
        ))}
      </div>
    </section>
  );
}
