# 🌌 TP3 – React SPA Equipo 17

## 🚀 Descripción del Proyecto
Este trabajo corresponde al **TP3 de Front-End** del **Equipo 17**.  
El proyecto es una **Single Page Application (SPA)** desarrollada con **React**, basada en la evolución del TP2.  
En esta entrega se aplicaron **mejoras visuales y funcionales** sobre la estructura previa, manteniendo la navegación interna y los componentes reutilizables.

---

## 👩‍💻 Integrantes del Equipo
- Gabriela Aguilera  
- Emiliano Nuñez  
- Damián Gómez de Leo  
- María Belén Cantarini Echezarreta  

---

## 🧠 Objetivo del TP3
Implementar **dos mejoras significativas** respecto al TP2, priorizando la estética, la interactividad y la experiencia del usuario, utilizando React y CSS.

---

## ✨ Mejoras Realizadas por Gabriela Aguilera

### 🔹 Mejora 1 – Portada Animada Rick & Morty
Se rediseñó por completo la pantalla inicial del sitio para transformarla en una **portada interactiva y temática**, inspirada en el universo de *Rick & Morty*.  
Se agregaron animaciones CSS, fondo galáctico con estrellas en movimiento, un portal dinámico con efectos de luz y entrada animada de los personajes.

#### 🖼️ Comparativa visual
| Antes | Después |
|:--:|:--:|
| ![Antes](./src/assets/captura_antes_portada.png) | ![Después](./src/assets/captura_despues_portada.png) |

**Detalles técnicos:**
- Portal animado con degradado cónico (`conic-gradient`).
- Fondo animado mediante `@keyframes moveStars`.
- Personajes (Rick y Morty) con animación de desplazamiento lateral.
- Efecto de destello sincronizado en el portal.
- Diseño totalmente responsive.

---

### 🔹 Mejora 2 – Botón de Sonido ON/OFF
Se incorporó un **control de sonido interactivo** que permite activar o silenciar la música desde la portada.  
El sonido se reproduce automáticamente al ingresar y puede controlarse con un solo clic.

#### 🖼️ Captura del botón de sonido
![Botón de sonido](./src/assets/captura_boton_sonido.png)

**Detalles técnicos:**
- Implementación mediante `useRef` y `useState` para controlar el audio.
- Archivo `portal-sfx.mp3` ubicado en `/public`.
- Estilo visual coherente con el diseño del portal (borde luminoso y animación hover).
- Volumen ajustado al 40% para una experiencia más suave.

---

## 🧩 Estructura de Componentes

src/
├─ components/
│ ├─ Sidebar/
│ ├─ HamburguerButton/
│ └─ Cards/
├─ pages/
│ ├─ Portada.jsx
│ ├─ DataLocal.jsx
│ ├─ DataAPI.jsx
│ ├─ Integrantes.jsx
│ ├─ Diagramas.jsx
│ └─ Bitacora.jsx
├─ data/
│ └─ items.json
├─ App.jsx
└─ main.jsx


---

## 🧰 Tecnologías Utilizadas
- React 18  
- React Router DOM  
- CSS3 (animaciones, responsive y efectos visuales)  
- HTML5  
- Archivos JSON locales y API pública (Rick & Morty)  

---

## 🖼️ Vista General del Proyecto
![Vista general](./src/assets/captura_despues_portada.png)

---

## 🌐 Deploy en Vercel
🔗 [Ver proyecto en línea](https://tp3-react-spa-equipo5.vercel.app)

---

## 🏁 Conclusión
Las mejoras implementadas logran un sitio **más atractivo, moderno y dinámico**, destacando la creatividad visual, la correcta modularización y el control de elementos multimedia dentro de React.
