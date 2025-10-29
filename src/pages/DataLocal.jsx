import { useState } from "react";
import items from "../data/items.json";
import CardPeliculas from "../components/Cards/CardPeliculas";
import "./DataLocal.css";

export default function DataLocal() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");

  const categorias = ["Todas", ...new Set(items.map(i => i.categoria))];

  const filtered = items.filter(i => {
    const texto = (i.titulo + " " + i.categoria).toLowerCase().includes(q.toLowerCase());
    const categoria = (cat === "Todas" || i.categoria === cat);
    return texto && categoria;
  });

  return (
    <section className="dl">
      <h1>📦 Datos desde JSON local</h1>
      <p>Mostrando {filtered.length} de {items.length} películas.</p>

      <div className="dl__filters">
        {categorias.map(c => (
          <button key={c} onClick={()=>setCat(c)} className={`pill ${cat===c?"pill--on":""}`}>{c}</button>
        ))}
      </div>

      <input
        className="dl__input"
        placeholder="Buscar por título o categoría…"
        value={q}
        onChange={e=>setQ(e.target.value)}
      />

      <div className="grid">{filtered.map(p => <CardPeliculas key={p.id} {...p} />)}</div>
    </section>
  );
}


