import React, {useState} from 'react';
import './Diagramas.css';

const diagramasData = {
    Arbol_Renderizado: {
        title: "Árbol de Renderizado",
        description: "Representa la estructura jerárquica de los componentes en React, mostrando cómo se renderizan unos dentro de otros.",
        imageUrl: "/diagramas/jerarquia_componentes.png"
     },
    Organizacion_Carpetas: {
        title: "Organización de Carpetas",
        description: "Muestra cómo están organizados los archivos y carpetas en el proyecto, facilitando la navegación y el mantenimiento del código.",
        imageUrl: "/diagramas/organizacion_carpetas.png"
    }
}

export default function Diagramas() {
    const [activeDiagram, setActiveDiagram] = useState('Arbol_Renderizado');
    const diagram = diagramasData[activeDiagram];
  return (
    <section className="diagramas-section">
        <h1 className="diagramas-title">📊 Diagramas del Proyecto</h1>
        <div className="diagramas-buttons">
            {Object.keys(diagramasData).map((key) => (
                <button key={key} onClick={() => setActiveDiagram(key)}>
                    {diagramasData[key].title}
                </button>
            ))}
        </div>
        <div className="diagrama-content">
            <h2>{diagram.title}</h2>
            <p>{diagram.description}</p>
            <img src={diagram.imageUrl} alt={diagram.title} className="diagrama-image" />
        </div>

    </section>
  )
}
