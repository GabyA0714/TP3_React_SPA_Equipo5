import { useEffect, useState, useRef } from "react";
import "./Portada.css";
import rick from "/rick.png";
import morty from "/morty.png";
import portalSound from "/portal-sfx.mp3";

export default function Portada() {
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(null);

  // 🔊 Maneja el sonido
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(portalSound);
      audioRef.current.loop = true; // se repite en bucle
      audioRef.current.volume = 0.4;
    }

    if (soundOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }

    // Limpieza al desmontar el componente
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [soundOn]);

  // ✨ Efecto visual del portal
  useEffect(() => {
    const portal = document.querySelector(".portal-circle");
    if (portal) {
      portal.classList.add("flash");
      setTimeout(() => portal.classList.remove("flash"), 8000);
    }
  }, []);

  const toggleSound = () => {
    setSoundOn(prev => !prev);
  };

  return (
    <section className="portada">
      <div className="stars"></div>

      <div className="portal-container">
        <div className="portal-circle"></div>
        <h1 className="portal-text">EQUIPO 17</h1>
      </div>

      <p className="portal-subtext">Bienvenidos al multiverso del Front-End</p>

      <a href="/integrantes" className="btn-multiverso">
        Ingresar al Multiverso
      </a>

      <button
      className={`btn-sound ${soundOn ? "active" : "off"}`}
      onClick={toggleSound}
>
      {soundOn ? "Sonido ON" : "Sonido OFF"}
      </button>



      <img src={rick} alt="Rick" className="rick" />
      <img src={morty} alt="Morty" className="morty" />
    </section>
  );
}
