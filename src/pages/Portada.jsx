import { useEffect, useState, useRef } from "react";
import { NavLink } from 'react-router-dom';
import "./Portada.css";
import rick from "/rick.png";
import morty from "/morty.png";
import portalSound from "/portal-sfx.mp3";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext.jsx"
import GlowingButton from '../components/Button/GlowingButton.jsx';

export default function Portada() {
  const { soundOn, toggleSound } = useSound();
  const { theme, toggleTheme } = useTheme();

  
  // ✨ Efecto visual del portal
  useEffect(() => {
    const portal = document.querySelector(".portal-circle");
    if (portal) {
      portal.classList.add("flash");
      setTimeout(() => portal.classList.remove("flash"), 8000);
    }
  }, []);


  return (
    <section className="portada">
      <div className="stars"></div>

      <div className="portal-container">
        <div className="portal-circle"></div>
        <h1 className="portal-text">EQUIPO 17</h1>
      </div>

      <p className="portal-subtext">Bienvenidos al multiverso del Front-End</p>

      <GlowingButton as={NavLink} variant="multiverso" to="/integrantes">
        Ingresar al Multiverso
      </GlowingButton>

      <GlowingButton 
         variant="sound-theme"
         onClick={toggleSound}
        >
         {soundOn ? "Sonido ON" : "Sonido OFF"}
      </GlowingButton>

      <GlowingButton 
         variant="sound-theme"
         onClick={toggleTheme}
        >
         {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
      </GlowingButton>

      <img src={rick} alt="Rick" className="rick" />
      <img src={morty} alt="Morty" className="morty" />
    </section>
  );
}
