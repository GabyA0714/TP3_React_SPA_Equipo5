import { useEffect } from "react";
import "./Portada.css";
import rick from "/rick.png";
import morty from "/morty.png";
import portalSound from "/portal-sfx.mp3";

export default function Portada() {
  useEffect(() => {
    const audio = new Audio(portalSound);
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }, []);

    useEffect(() => {
    const audio = new Audio(portalSound);
    audio.volume = 0.4;
    audio.play().catch(() => {});

    // ⚡ Activa el destello durante el cruce
    const portal = document.querySelector(".portal-circle");
    portal.classList.add("flash");
    setTimeout(() => portal.classList.remove("flash"), 7000);
  }, []);

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

      <img src={rick} alt="Rick" className="rick" />
      <img src={morty} alt="Morty" className="morty" />
    </section>
  );
}

