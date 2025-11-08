import './Meteors.css';
import React, { useEffect } from 'react';

export default function Meteors() {

    useEffect(() => {
        const meteorShower = document.getElementById('meteorShowerContainer');

        if (!meteorShower) return;

        const NUM_METEORS = 25;
        
        for (let i = 0; i < NUM_METEORS; i++) {
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');
            
            // 1. Duración (Velocidad): 3s a 8s.
            const durationSec = (Math.random() * 5) + 3; 
            
            // 2. **¡CLAVE!** Retraso Negativo: 
            // Simula que la animación ya se ha estado ejecutando por un tiempo.
            // Esto hace que el meteoro aparezca en un punto aleatorio de su caída.
            const negativeDelaySec = -(Math.random() * durationSec);
            
            // 3. Posición de Inicio Horizontal (Dispersión): 0% a 100% de la anchura.
            const leftStart = Math.random() * 100; 

            // 4. Posición de Inicio Vertical (Alto): 0% a 100%
            // Usamos un offset para que comiencen fuera de la vista superior
            const topOffset = Math.random() * 100; 

            // 5. Aplicar las propiedades CSS
            meteor.style.left = `${leftStart}vw`; 
            // 💡 Posicionamos el meteoro fuera del viewport superior (e.g., -100vh a 0vh)
            meteor.style.top = `${-topOffset}vh`; 
            
            meteor.style.animationDuration = `${durationSec}s`;
            // Aplicar el retraso negativo
            meteor.style.animationDelay = `${negativeDelaySec}s`; 
            
            // Opcional: Variar el tamaño de la cola ligeramente
            const widthPx = Math.floor(Math.random() * 100) + 250;
            meteor.style.width = `${widthPx}px`;

            // 6. Añadir el meteoro al contenedor
            meteorShower.appendChild(meteor);
        }

        return () => {
            while (meteorShower.firstChild) {
                meteorShower.removeChild(meteorShower.firstChild);
            }
        };

    }, []);

    return (
        <div className="meteorShower" id="meteorShowerContainer">
            {/* Los meteoros se añaden aquí mediante useEffect */}
        </div>
    );
}