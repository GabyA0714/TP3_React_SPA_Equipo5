import React from 'react';
import './Bitacora.css';


export default function Bitacora() {
  return (
    <section className="bitacora-page">
      <h1>📓 Bitácora del Proyecto</h1>
      <p>Registro del proceso del TP2. Se ampliará en el TP3.</p>

      <details>
        <summary>Decisiones de diseño</summary>
        <ul>
          <li>Sidebar fijo + rutas declarativas (React Router v6).</li>
          <li>Componentes reutilizables: Card y layouts con grid responsive.</li>
          <li>Gestión de Estilos: Uso mixto de **CSS Global** (`index.css`) para estilos base y **CSS Modules** (`.module.css`) para componentes específicos, como el `Sidebar`, `Button` y las `Cards`, evitando colisiones.</li>
        </ul>
      </details>

      <details>
        <summary>Dificultades y resolución</summary>
        <ul>
          <li>Parámetros de URL en rutas de detalle → uso de <code>useParams</code>.</li>
          <li>Fetch a API pública con manejo de loading y error.</li>
          <li>Controlar el estado del menú hamburguesa para ocultar el `Sidebar` en móviles.</li>
        </ul>
      </details>

      <details>
        <summary>Cambios relevantes</summary>
        <ul>
          <li>Migración de páginas estáticas a SPA con React.</li>
          <li>Centralización de estilos y breakpoints 400 / 900 / 1200.</li>
        </ul>
      </details>
    </section>
  )
}
