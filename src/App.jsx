import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import HamburgerButton from './components/HamburguerButton/HamburguerButton.jsx';
import Portada from './pages/Portada.jsx';
import Bitacora from './pages/Bitacora.jsx';
import Integrantes from './pages/Integrantes.jsx';
import Integrante from './pages/Integrante.jsx';
import DataLocal from './pages/DataLocal.jsx';
import DataAPI from './pages/DataAPI.jsx';
import Diagramas from './pages/Diagramas.jsx';
import NotFound from './pages/NotFound.jsx';
import portalSound from '/portal-sfx.mp3'; // 🎵 sonido global
import ThemeToggle from './components/Toggle/ThemeToggle.jsx';

export default function App() {
  // === 🎵 Control global del sonido ===
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(portalSound);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }

    if (soundOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [soundOn]);

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  // === 🎛️ Control del menú ===
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // === 🌌 Render principal ===
  return (
    <div className="app">
      <HamburgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrante/:id" element={<Integrante />} />
          <Route path="/datos-locales" element={<DataLocal />} />
          <Route path="/datos-api" element={<DataAPI />} />
          <Route path="/diagramas" element={<Diagramas />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* 🔊 Botón global de sonido */}
      <button
        className={`btn-sound ${soundOn ? 'active' : 'off'}`}
        onClick={toggleSound}
        title={soundOn ? 'Silenciar música' : 'Activar música'}
      >
        {soundOn ? '🔊' : '🔇'}
      </button>

      {/* boton global de tema claro y oscuro */}
      <ThemeToggle />

    </div>
  );
}
